const mongoose=require("mongoose");
require("dotenv").config();
exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    })
    .then(()=>{console.log("dB connected successfully")})
    .catch((err)=>{
        console.log("dB mein issue hai")
        console.error(err)
        process.exit(1);
    })

}

