import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



import Badge from "@mui/material/Badge";
import { NavLink } from "react-bootstrap";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-3">
            Add to Cart
          </NavLink>
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-light" to="/">
              Home
            </NavLink>
          </Nav>

          <Badge badgeContent={4} color="primary"   id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}>
            <i
              class="fa-solid fa-cart-shopping text-light"
              style={{ fontSize: "25px", cursor: "pointer" }}
            ></i>
          </Badge>
        </Container>

        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        slotProps={{
          list: {
            'aria-labelledby': 'basic-button',
          },
        }}
      >
        <div className="card_details d-flex justify-content-center align-items-center p-2 " style={{width: "22rem"}}>
            <i className="fas fa-close smallclose "  style={{position:"absolute", top:2, right: 20, fontSize:15, cursor:"pointer", marginTop:"1rem"}}></i>
            <p>Your card is empty</p>
            <img src="./card.gif" alt="" />
        </div>
      </Menu>


      </Navbar>
    </div>
  );
};

export default Header;
