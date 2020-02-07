import axios from "axios";

const getSize = async url => {
  const githubAPI = "https://api.github.com/repos/";

  //Example URL Needed  https://github.com/FraserTooth/alwyn

  var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var reg = new RegExp(expression);

  if (!url.match(reg)) {
    alert(`URL ${url} not valid`);
  } else {
    const apiLocation = githubAPI + url.split(".com/")[1];
    try {
      const response = await axios(apiLocation);
      return response.data.size;
    } catch (e) {
      console.error(e);
    }
  }
  return 0;
};

export { getSize };
