import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const sections = [
  {
    id: 1,
    title: "О нас",
    description: "Узнайте больше о нашей истории и традициях.",
    link: "/about",
    imageUrl:
      "https://kulikov.com/upload/landing/4e7/%D0%BE_%D0%BA%D1%83%D0%BB%D0%B8%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%BE%D0%BC@1x.jpg",
  },
  {
    id: 2,
    title: "Контакты",
    description: "Свяжитесь с нами любым удобным способом.",
    link: "/contacts",
    imageUrl:
      "https://kulikov.com/upload/landing/0ab/%D0%B5%D0%BD%D1%80@1x.jpg",
  },
  {
    id: 3,
    title: "Наши продукты",
    description: "Просмотрите наш ассортимент продукции.",
    link: "/products",
    imageUrl:
      "https://kulikov.com/upload/landing/403/%D0%BC%D0%B0%D0%B3%D0%B0%D0%B7%D0%B8%D0%BD%D1%8B@1x.jpg",
  },
];

const HeaderHomePage = () => {
  return (
    <Box sx={{ bgcolor: "#E6E6FA", minHeight: "100vh" }}>
      <Container maxWidth="xl" sx={{ mt: 4 }}>
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography variant="h3" sx={{ color: "#8A2BE2" }}>
            Добро пожаловать в Куликовский
          </Typography>
          <Typography variant="h5" sx={{ color: "#8A2BE2" }}>
            Наслаждайтесь лучшими кондитерскими изделиями в городе!
          </Typography>
        </Box>
        <Grid container spacing={4}>
          {sections.map((section) => (
            <Grid item key={section.id} xs={12} sm={6} md={4}>
              <Link to={section.link} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    position: "relative",
                    height: 765,
                    "&:hover": {
                      "& .overlay": {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="100%"
                    image={section.imageUrl}
                    alt={section.title}
                    sx={{ objectFit: "cover" }}
                  />
                  <Box
                    className="overlay"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: "rgba(0, 0, 0, 0.6)",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#fff",
                      opacity: 0,
                      transition: "opacity 0.3s ease",
                      "&:hover": {
                        opacity: 1,
                      },
                    }}
                  >
                    <Typography variant="h5">{section.title}</Typography>
                    <Typography>{section.description}</Typography>
                  </Box>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: "center", mt: 4 }}>
          <Link to="/contacts" style={{ textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#8A2BE2", color: "#fff" }}
            >
              Связаться с нами
            </Button>
          </Link>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default HeaderHomePage;
