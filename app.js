const express=require('express')
const ejs=require('ejs')
const nodemailer = require('nodemailer')
const path=require('path')

const app=express()
app.set('view engine','ejs');
app.set('views',(__dirname,"views"))
app.use(express.urlencoded({extended:false}))

app.get('/',(req,res)=>{
    res.render('index')
})

app.post("/email",(req,res)=>{

var email=req.body.email
console.log(email)

let nodeTransporte = nodemailer.createTransport({
   
    service:'gmail',
    secure: false,
    auth: {
        user: 'gupta.rajat484@gmail.com',
        pass: ''
    }
   
});

let mailDetails = {
    from: 'gupta.rajat484@gmail.com',
    to:   email,
   
    subject: "Test Mail",
    text: 'That was easy!',

}

nodeTransporte.sendMail(mailDetails, function (err, data) {
    if (err)
        console.log(err)
    else {
        console.log("Mail Send Successfully" + data.response)
    }
})
res.render('index')
})

app.listen(8989,function(){
    console.log("Server is running on 8989 port")
})



