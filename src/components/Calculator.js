import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Calculator() {
  const githubAPI = "https://api.github.com/repos/";

  //Example URL Needed  https://github.com/FraserTooth/alwyn

  const [url, setUrl] = useState("");
  const [githubsize, setSize] = useState(0);

  const handleSubmit = async e => {
    e.preventDefault();

    var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
    var reg = new RegExp(expression);

    if (!url.match(reg)) {
      alert(`Github URL ${url} not valid`);
    } else {
      const apiLocation = githubAPI + url.split(".com/")[1];
      try {
        const response = await axios(apiLocation);
        setSize(response.data.size / 1000);
      } catch (e) {
        console.error(e);
      }
      // alert(`Github URL ${apiLocation}`);
    }
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
