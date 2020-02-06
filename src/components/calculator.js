import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

function Calculator() {
  const githubAPI = "https://api.github.com/repos/git/git";

  const [url, setName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    alert(`Github URL ${url}`);
  };

  return (
    <Container>
      <Box>
        <Typography>Point at a Github Repo</Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            id="github-basic"
            label="Github Page"
            value={url}
            onChange={e => setName(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Calculate
          </Button>
        </form>
      </Box>
    </Container>
  );
}

export default Calculator;
