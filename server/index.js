import  express  from "express";
import Connection from "./database/db.js";
import DefaultData from "./default.js";
import route from "./routes/route.js";
import cors from "cors";

const app=express();

app.use(cors());
app.use('/',route)

const port=8000;

Connection();
DefaultData();
app.listen(port,()=>{
    console.log(`server has started on port ${port}`)
})