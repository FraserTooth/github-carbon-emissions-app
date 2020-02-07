import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputLabel from "@material-ui/core/InputLabel";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    padding: "10px",
    margin: "10px"
  }
}));

export default () => {
  const [bundleSize, setBundle] = useState(0);
  const [country, setCountry] = useState("USA");

  const handleSubmit = async e => {
    e.preventDefault();

    //Calculate Carbon
    console.log(bundleSize, country);
    //setSize(size);
  };

  const classes = useStyles();

  return (
    <Container>
      <Box>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Fill out the Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="github-basic"
                      label="Bundle Size"
                      value={bundleSize}
                      type="number"
                      onChange={e => setBundle(e.target.value)}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Country</InputLabel>
                    <NativeSelect
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                    >
                      <option value={"USA"}>USA</option>
                      <option value={"Japan"}>Japan</option>
                      <option value={"UK"}>UK</option>
                    </NativeSelect>
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" type="submit">
                      Calculate
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Bundle Size: {bundleSize}MB, hosted in the {country}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Emissions: {bundleSize * 4.084} gCO2eq per Download
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
