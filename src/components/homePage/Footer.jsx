import React from "react";
import { Box, Container, Grid, Typography, Link } from "@mui/material";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "#8A2BE2", color: "white", py: 3, mt: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Куликовский
            </Typography>
            <Typography variant="body2">
              Лучшие кондитерские изделия с 1995 года.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Контакты
            </Typography>
            <Typography variant="body2">
              Email: info@kulikov.com
              <br />
              Телефон: +7 (495) 123-45-67
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Навигация
            </Typography>
            <Link
              href="/about"
              color="inherit"
              variant="body2"
              sx={{ display: "block" }}
            >
              О нас
            </Link>
            <Link
              href="/contacts"
              color="inherit"
              variant="body2"
              sx={{ display: "block" }}
            >
              Контакты
            </Link>
            <Link
              href="/products"
              color="inherit"
              variant="body2"
              sx={{ display: "block" }}
            >
              Продукты
            </Link>
          </Grid>
        </Grid>
        <Box sx={{ textAlign: "center", mt: 3 }}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Куликовский. Все права защищены.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
