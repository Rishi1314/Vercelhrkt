import express from "express";
import cors from "cors";


const app = express();

app.use(cors());

app.post("/deploy", (req, res) => {
    const repoUrl=req.body.repoUrl;
    console.log(repoUrl);
    res.json({message: "Deploying the repository"});
})

app.listen(3000, () => {
  console.log("Server is running on port 3000");
})