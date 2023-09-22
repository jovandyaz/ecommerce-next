import { ReactElement } from "react";
import Link from "next/link";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { SvgIcon, Icon, Box } from "@mui/material";
import "./Navbar.css";

export const Navbar = (): ReactElement => {
  return (
    <nav className="navbar">
      <Box className="home-icon">
        <Link href="/">Candleaf</Link>
      </Box>

      <Box className="links">
        <ul>
          <li>
            <Link href="/discovery">Discovery</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact us</Link>
          </li>
        </ul>
      </Box>

      <Box className="icons">
        <Link href="/">
          <SvgIcon>
            <PersonOutlinedIcon className="profile-icon" />
          </SvgIcon>
        </Link>
        <Link href="/">
          <Icon fontSize="large">
            <ShoppingCartOutlinedIcon className="cart-icon" />
          </Icon>
        </Link>
      </Box>
    </nav>
  );
};
