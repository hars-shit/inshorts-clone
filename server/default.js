
import data from "./constants/data.js"
import news from "./modal/schema.js"

const DefaultData=async()=>{
    try{
        // await news.deleteMany({}) 
      await news.insertMany(data)
      console.log('data is imported')

    }
    catch(error){
        console.log(error.message)
    }
}
export default DefaultData;