const fetch = require("node-fetch");

fetch("https://www.thedecker.com/api/healthcheck").then((res) => {
  console.log(res.ok);
});
