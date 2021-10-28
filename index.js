//Copyright 2018 Amazon.com, Inc. or its affiliates. All Rights Reserved.
//PDX-License-Identifier: MIT-0 (For details, see https://github.com/awsdocs/amazon-rekognition-developer-guide/blob/master/LICENSE-SAMPLECODE.)

// Load the SDK and UUID
const express = require("express");

const app = express();
const port = 3200;

app.use((req, res, next) => {
  res.append("Access-Control-Allow-Origin", ["*"]);
  res.append("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.append("Access-Control-Allow-Headers", "*");
  next();
});

app.use(express.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Wellcome to API");
});

var producto = require("./productos/productoRoutes");

app.post("/rekognition", (req, res) => handleDetectLabels(req, res));
app.use("/producto", producto);

const server = app.listen(process.env.PORT || 3000, () => {
  const port = server.address().port;
  console.log(`Express is working on port ${port}`);
});

const handleDetectLabels = async (req, res) => {
  let { photo } = req.body;

  if (!photo) {
    res.status(200).send("Thre isnt a photo");

    return;
  }
};
