import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})







connectDB()
.then(() =>{
    app.on("error", (error) => {
        console.log("ERRR:", error);
        throw error
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`server is running at port 
            ${process.env.PORT}`);
    })
})
.catch((error) => {
    console.log("MONGO db connection failed !!! ", err);
})













// ANOTHER APPROACH TO CONNECT WITH MONGO DATABASE
/*
import express from "express"
const app = express()

(async() => {
    try{
        await mongoose.connect(`${process.env.
            MONGODB_URI}/${DB_NAME}`)
            app.on("error", (error) => {
                console.log("ERRR:", error);
                throw error
            })

            app.listen(process.env.PORT, () => {
                console.log(`App is listening on port $
                    {process.env.port}`);
            })
    }
    catch (error){
        console.log("ERROR", error);
        throw error;
    }
})()

*/