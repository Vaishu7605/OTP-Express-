otpgen = require('otp-generator');
express = require('express');
port = 3000;
app = express();

app.listen(port,() =>{
    console.log(`listening on port ${port}`)
})
genotp = () =>{
    OTP = otpgen.generate(5)
// OTP = otpgen.generate(5, {digits:true, lowerCaseAlphabets: false, upperCaseAlphabets: false});
    return OTP;
}

// genotp()


app.get('/',(req,res)=>{
    res.send('your otp is : ' + genotp())
})
