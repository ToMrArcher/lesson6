import express from "express";

const app = express();

const server = app.listen(process.env.PORT || 3000, () => {
    console.log("listening on port " + server.address().port);
});