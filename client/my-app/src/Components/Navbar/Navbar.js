import React, { useEffect, useState } from "react";
import { AppBar, Avatar, Button, Toolbar, Typography } from "@mui/material";
import memories from "../../img/memories.png";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
// import jwt_decode from "jwt-decode";
import "./Navbar.scss";
/* -------------------------------------------------------------------------- */

const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  return (
    <AppBar className="appBar" position="static" color="inherit">
      <Toolbar className="toolbar">
        <div className="brandContainer">
          <Typography
            component={Link}
            to="/"
            className="heading"
            variant="h2"
            align="center"
            color="red"
          >
            Memories
          </Typography>
          <img src={memories} alt="memories" height="60" />
        </div>
        {user ? (
          <div className="profile">
            <Avatar className="purple" alt={user.decoded.name}>
              {user.decoded.name.charAt(0)}
            </Avatar>
            <Typography className="userName" variant="h6">
              {user.decoded.name}
            </Typography>
            <Button
              variant="contained"
              className="logout"
              color="secondary"
              onClick={logout}
            >
              Logout
            </Button>
          </div>
        ) : (
          <Button
            component={Link}
            to="/auth"
            variant="contained "
            color="primary"
          >
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
