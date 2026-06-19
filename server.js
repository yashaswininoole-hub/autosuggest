//server code
const express=require("express");//creating object
const app=express();//creating object
const port =process.env.PORT ||6700;
//creatring a place where server takes the files form
app.use(express.static("frontend"));

app.listen(port,function(){
    console.log("app running on http://localhost:" + port)
});
