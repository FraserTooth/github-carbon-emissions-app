import "./App.css";
import GitHubCalculator from "./components/GitHubCalculator";
import BundleCalculator from "./components/BundleCalculator";

import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link href="https://frasertooth.dev">Fraser Tooth</Link>{" "}
      {new Date().getFullYear()}
      {". Check out the "}
      <Link href="https://github.com/FraserTooth/github-carbon-emissions-app">
        Github Repo
      </Link>{" "}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  app: {
    backgroundColor: "#f5f5f5"
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className={classes.app}>
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          The Carbon Impact of Code
        </Typography>
        <GitHubCalculator />
        <BundleCalculator />
        <Copyright />
      </Box>
    </Container>
  );
}
