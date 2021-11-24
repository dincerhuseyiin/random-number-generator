import { Button, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Main = ({
  minVal,
  maxVal,
  random,
  setMinVal,
  setMaxVal,
  setRandom,
  handleClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "50%",
        height: "50vh",
        backgroundColor: "#c4c4c4",
        flexDirection: "column",
        alignItems: "center",
        m: 1,
        p: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "20%",
          height: "55%",
          backgroundColor: "#72ad9b",
          mt: 7,
          borderRadius: 3,
          justifyContent: "center",
          alignItems: "center",
          fontSize: 30,
        }}
      >
        {random}
      </Box>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          mt: 15,
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "25%",
            height: "50%",
            backgroundColor: "#72ad9b",

            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Min"
            variant="outlined"
            value={minVal}
            onChange={(e) => setMinVal(+e.target.value)}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "25%",
            height: "50%",
            backgroundColor: "#72ad9b",
            borderRadius: 3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            id="outlined-basic"
            label="Max"
            variant="outlined"
            onChange={(e) => setMaxVal(+e.target.value)}
            value={maxVal}
          />
        </Box>
      </Box>
      <Button
        variant="contained"
        size="large"
        sx={{
          backgroundColor: "#8db9d1",
          color: "black",
          width: "70%",
          height: "30%",
          mb: 5,
          fontSize: 20,
        }}
        onClick={handleClick}
      >
        {" "}
        Get Number
      </Button>
    </Box>
  );
};

export default Main;
