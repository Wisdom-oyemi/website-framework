import React from 'react'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import List from "@mui/material/List"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Paper from "@mui/material/Paper"

function App() {

  let message = null;
  let paragraph = "Howdy, nice to meet ya!"
  let names = ["Amanda", "Billy", "Claire", "Daniel", "Emily", "Wisdom"]


  return (
    <>
    <Grid container>
      {names.map((names) => (
      <Grid size={6}>
        <Paper elevation={4} sx={{ width: {xs: "100%", lg: "50%"}, height: "100px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", paddingY: "20px" }}> 
          <Typography variant='h4'>{names}</Typography>
          <Button variant="contained">{paragraph}</Button>
        </Paper>
      </Grid>
      ))}


    </Grid>
    </>
  )
}
export default App;