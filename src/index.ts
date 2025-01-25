import express from "express";
import cors from "cors";
import { generate } from "./util";
import simpleGit from "simple-git";

var bodyParser = require('body-parser')

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post("/deploy", async (req, res) => {
  // console.log(req.body);
  
    const repoUrl=req.body.repoUrl;
    const id = generate();
    await simpleGit().clone(repoUrl, `output/${id}`);
    res.json({id:id,message: "Deploying the repository"});
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})