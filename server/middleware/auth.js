// lets the user to perform actions that is allowed here.
import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length <= 3;
    console.log(token);
    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");
      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
