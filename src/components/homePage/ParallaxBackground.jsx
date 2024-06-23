import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";

const ParallaxBackground = () => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = () => {
    const newScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;
    setScrollTop(newScrollTop);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollTop * 0.3;

  return (
    <Box
      sx={{
        position: "relative",
        height: "80vh",
        overflow: "hidden",
        mb: 4,
      }}
    >
      <Box
        component="img"
        src="https://www.sostav.ru/images/news/2021/10/27/pavsnhk1.jpg"
        alt="Parallax background"
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: `translateY(${parallaxOffset}px)`,
          transition: "transform 0.2s",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.6)",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#fff",
          zIndex: 1,
        }}
      >
        <Typography variant="h3" sx={{ mb: 2 }}>
          Добро пожаловать в Куликовский
        </Typography>
        <Typography variant="h5">
          Наслаждайтесь лучшими кондитерскими изделиями в городе!
        </Typography>
      </Box>
    </Box>
  );
};

export default ParallaxBackground;
