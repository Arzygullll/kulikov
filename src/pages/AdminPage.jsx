// AdminPage.jsx
import React, { useState } from "react";
import { Button, Container, Grid, Paper, Typography, Box } from "@mui/material";
import AddProduct from "../components/products/AddProduct";
import AddCategory from "../components/products/AddCategory";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h3" gutterBottom sx={{ color: "#1976d2" }}>
          ADMIN PAGE
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ mt: 2 }}
        >
          Add Category
        </Button>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              textAlign: "center",
              backgroundColor: "#fafafa",
              borderRadius: "10px",
              paddingRight: "65px",
            }}
          >
            <AddProduct />
          </Paper>
        </Grid>
      </Grid>
      <AddCategory open={open} handleClose={handleClose} />
    </Container>
  );
};

export default AdminPage;
