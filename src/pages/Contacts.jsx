import React from "react";
import { Box, Typography, Grid, Button } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import { Link } from "react-router-dom";

const Contacts = () => {
  return (
    <Box sx={{ textAlign: "center", padding: 4 }}>
      <img
        src="https://registry.halal.kg/wp-content/uploads/2022/08/%D0%BB%D0%BE%D0%B3%D0%BE-%D1%86%D0%B2-%D0%B2%D0%B5%D1%80%D1%82.png"
        alt="Logo"
        style={{ marginTop: 50, marginBottom: 20, width: "300px" }}
      />
      <Typography variant="h4" gutterBottom>
        Контакты
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box>
              <PhoneIcon fontSize="large" />
              <Typography variant="h6">ПОЧТА</Typography>
              <Typography>service@kulikov.com</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box>
              <HeadsetMicIcon fontSize="large" />
              <Typography variant="h6">СПРАВОЧНОЙ СЛУЖБЫ</Typography>
              <Typography>Бишкек: +996556583858</Typography>
              <Typography>Алматы и Талдыкорган: +77273647777</Typography>
              <Typography>Новосибирск: +73833228901</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box
            sx={{
              border: "1px solid #ccc",
              padding: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <Box>
              <HeadsetMicIcon fontSize="large" />
              <Typography variant="h6">
                ВРЕМЯ РАБОТЫ СПРАВОЧНОЙ СЛУЖБЫ
              </Typography>
              <Typography>Бишкек: Пн.-Вс. 07:00 - 23:00</Typography>
              <Typography>
                Алматы и Талдыкорган: Пн.-Вс. 08:00 - 22:00
              </Typography>
              <Typography>Новосибирск: Пн.-Вс. 09:00 - 23:00</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#8A2BE2", color: "#fff" }}
          >
            НАЗАД
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Contacts;
