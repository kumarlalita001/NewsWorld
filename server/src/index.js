import express from "express";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const app = express();

console.log(process.env.PORT, "PORT");
const PORT = process.env.PORT || 5003;

//routes
import newsRoutes from "./routes/news.route.js";

app.use("/api/v1", newsRoutes);

// app.get("/", (req, res) => {
//   res.send("<h1>hello</h1>");
// });

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} so Don't Worry!!!`);
});
