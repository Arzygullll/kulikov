import { Box, Modal, Typography, Paper, Grid } from "@mui/material";
import React from "react";

const Detail = ({ elem, open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    maxWidth: 600,
    display: "flex",
    flexDirection: "row",
    border: "1px solid black",
    boxShadow: 24,
    bgcolor: "background.paper",
    p: 1,
  };

  const contentStyle = {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    paddingRight: 1,
  };

  const commentsStyle = {
    flex: 1,
    height: "100%",
    overflowY: "auto",
    paddingLeft: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Grid container spacing={1} sx={{ flex: 2 }}>
          <Grid item xs={12}>
            <img src={elem.image} width="100%" alt="" />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" component="h1" align="center">
              {elem.title}
            </Typography>
            <Typography variant="body2" align="center">
              {elem.description}
            </Typography>
            <Typography variant="body2" color="textSecondary" align="center">
              {elem.price}
            </Typography>
          </Grid>
        </Grid>
        <Box sx={commentsStyle}>
          <Typography variant="subtitle1" align="center">
            Комментарии:
          </Typography>
          {elem.comments && elem.comments.length > 0 ? (
            elem.comments.map((comment, index) => (
              <Paper
                key={index}
                sx={{
                  padding: 1,
                  marginBottom: 1,
                  border:
                    comment.name === "Автор"
                      ? "1px solid blue"
                      : "1px solid gray",
                  width: "90%",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle2">{comment.name}</Typography>
                <Typography variant="body2">{comment.comment}</Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="body2" align="center">
              Нет комментариев
            </Typography>
          )}
        </Box>
      </Box>
    </Modal>
  );
};

export default Detail;
