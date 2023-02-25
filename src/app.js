import express from 'express';
import cors from 'cors';
import userRoutes from "./routes/userRoutes.js"




const app = express();
app.set('view engine', 'ejs');
//cors initialized
app.use(cors({
    origin: '*'}));
app.use(express.json());


//url config
app.use("/api", userRoutes);

app.use((req, res, next) => {res.status(404).json({message: "not found"})} )

export default app;