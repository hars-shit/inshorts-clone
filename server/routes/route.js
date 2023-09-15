import  express  from "express"
import news from "../modal/schema.js";


const route=express.Router();

route.get('/news',async(req,res)=>{
    try{
     let data= await news.find({});
    //  console.log(data)
     res.status(200).json(data);
    }
    catch(error){
        res.status(500).json({message:data.message})
    }
})
export default route;