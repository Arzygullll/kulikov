import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import { Badge, MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { useCart } from "../../context/CartContextProvider";
import { getProductsCountInCart } from "../../helpers/functions";

const logoUrl = "https://your-logo-url.com/logo.png";

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [badgeCount, setBadgeCount] = React.useState(0);
  const { addProductToCart } = useCart();
  React.useEffect(() => {
    setBadgeCount(getProductsCountInCart);
  }, [addProductToCart]);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const pages = [
    { id: 1, title: "Products", link: "/products" },
    { id: 2, title: "About", link: "./about" },
    { id: 3, title: "Contacts", link: "./contacts" },
  ];

  return (
    <AppBar
      style={{
        backgroundColor: "#8A2BE2",
        color: "#ffffff",
        marginBottom: "-32px",
        position: "absolute",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              fontSize: 30,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            <img
              src={
                "https://kulikov.com/upload/landing/99f/fdr9gjdulan6d5pq6v8hk91xnaina923/%D0%B3%D0%BE%D1%80%D0%B8%D0%B7%D0%BE%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9@1x.png"
              }
              alt="Kulikov"
              style={{ height: 50, marginRight: 15 }}
            />
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((elem) => (
                <Link
                  key={elem.id}
                  to={elem.link}
                  style={{ textDecoration: "none" }}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <Typography
                      sx={{ color: "b56ef7", textTransform: "uppercase" }}
                    >
                      {elem.title}
                    </Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((elem) => (
              <Link
                key={elem.id}
                to={elem.link}
                style={{ textDecoration: "none" }}
              >
                <MenuItem>
                  <Typography
                    sx={{ color: "#ffffff", textTransform: "uppercase" }}
                  >
                    {elem.title}
                  </Typography>
                </MenuItem>
              </Link>
            ))}
            <Link to={"/admin"} style={{ textDecoration: "none" }}>
              <MenuItem sx={{ color: "#ffffff", display: "block" }}>
                <Typography textAlign={"center"}>ADMIN</Typography>
              </MenuItem>
            </Link>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Куликовский
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Link to={"/cart"}>
            <Badge badgeContent={badgeCount} color="success">
              <ShoppingCart setBadgeCount sx={{ color: "white" }} />
            </Badge>
            {/* <ShoppingCart sx={{ color: "white" }} /> */}
          </Link>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              ></IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            ></Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
