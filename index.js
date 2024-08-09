const express=require("express");
const app=express();

require("dotenv").config();
const PORT=process.env.PORT || 4000;

const cookieparser=require("cookie-parser")
app.use(cookieparser());

//middleware
app.use(express.json() );

require("./config/database").connect();

const user=require("./Routes/user");

app.use("/api/v1",user);

app.listen(PORT,()=>{
    console.log(`app is listening at port number ${PORT}`);
})

// app.get("/",()=>{
//     console.log(`<h1>HOME PAGE</h1>`)
// })


