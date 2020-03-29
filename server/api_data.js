const express = require("express");
const router = express.Router();
const unirest = require("unirest");

router.get("/worldwide", async (req, res) => {
  const data = {};
  var req = unirest("GET", "https://covid-193.p.rapidapi.com/statistics");

  req.headers({
    "x-rapidapi-host": "covid-193.p.rapidapi.com",
    "x-rapidapi-key": "c6a358b479msh15aff7fd5360a43p1ee13ejsn0d51a31197a3"
  });
  req.end(async function(respon) {
    if (respon.error) throw new Error(respon.error);
    data = JSON.stringify(respon.body);
  });
  res.send(data);
});

module.exports = router;
