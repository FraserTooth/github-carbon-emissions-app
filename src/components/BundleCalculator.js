import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    padding: "10px",
    margin: "10px"
  }
}));

const countryCarbonIntensities = {
  USA: 623,
  Japan: 600,
  "United Kingdom": 250,
  China: 900
};

const bundleCarbonEmissions = (size, country) => {
  const kWhPerMB = 0.0059;
  return kWhPerMB * size * countryCarbonIntensities[country];
};

export default () => {
  const [bundleSize, setBundle] = useState(0);
  const [country, setCountry] = useState("USA");

  const carbonTotal = bundleCarbonEmissions(bundleSize, country);

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
              <Typography variant="h5">Bundle Size Carbon Output</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="overline">Fill out the Form</Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={4}>
                    <Input
                      fullWidth
                      id="github-basic"
                      label="Bundle Size"
                      value={bundleSize}
                      type="number"
                      onChange={e => setBundle(e.target.value)}
                      endAdornment={
                        <InputAdornment position="end">MB</InputAdornment>
                      }
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <NativeSelect
                      value={country}
                      onChange={e => setCountry(e.target.value)}
                    >
                      {Object.keys(countryCarbonIntensities).map(country => {
                        return <option value={country}>{country}</option>;
                      })}
                    </NativeSelect>
                    <FormHelperText>Severs Located In</FormHelperText>
                  </Grid>
                  <Grid item xs={4}>
                    <Button variant="contained" type="submit">
                      Calculate
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Bundle Size: {bundleSize}MB, hosted in {country}, which has an
                average carbon intensity of {countryCarbonIntensities[country]}{" "}
                gCO2eq/kWh
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Emissions: {carbonTotal} gCO2eq per Download
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
