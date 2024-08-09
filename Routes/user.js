const express=require("express");
const router=express.Router();

const{login,signup}=require("../Controller/Auth")
const{isStudent,isAdmin,auth} = require("../middlewares/auth")

router.post("/login",login);
router.post("/signup",signup);

router.get("/test",auth,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route of test"
    })
})


router.get("/student",auth,isStudent,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route of student"
    })
})
router.get("/admin",auth,isAdmin,(req,res)=>{
    res.json({
        success:true,
        message:"welcome to the protected route of Admin"
    })
})




module.exports=router;