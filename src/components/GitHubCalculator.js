import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { getSize } from "../scripts/githubapi";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  paper: {
    display: "flex",
    padding: "10px",
    margin: "10px"
  }
}));

export default () => {
  const [url, setUrl] = useState("");
  const [githubsize, setSize] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();

    const size = await getSize(url);

    setSize(size);
  };

  const classes = useStyles();

  return (
    <Container>
      <Box>
        <Paper className={classes.paper}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography>Enter the Url for a Github Repo</Typography>
            </Grid>
            <Grid item xs={12}>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      id="github-basic"
                      label="Github Repository URL"
                      value={url}
                      onChange={e => setUrl(e.target.value)}
                    />
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
              <Typography>Github Repo Size: {githubsize}MB</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>
                Emissions: {githubsize * 4.084} gCO2eq per Download
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </Container>
  );
};
