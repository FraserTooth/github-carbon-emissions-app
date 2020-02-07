import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { getSize } from "../scripts/githubapi";

function Calculator() {
  const [url, setUrl] = useState("");
  const [githubsize, setSize] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();

    const size = await getSize(url);

    setSize(size);
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
            onChange={e => setUrl(e.target.value)}
          />
          <Button variant="contained" type="submit">
            Calculate
          </Button>
        </form>

        <Typography>{githubsize}MB</Typography>
        <Typography>{githubsize * 4.084} gCO2eq per Download</Typography>
      </Box>
    </Container>
  );
}

export default Calculator;
