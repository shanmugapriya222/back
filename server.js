import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());

app.get("/",(req,res) => {
    res.send("Welcome to signup page");
});

app.post("/signup",(req,res) => {
    const{username, email, password, dob} = req.body;
    if(!username){
        res.status(400).send("Username cannot be empty");
    }
    if(!email) {
        res.status(400).send("Email cannot be empty");
    }
    if(password.length>8 && password.length<=16) {
        res.status(400).send("password should be geater than 8 and less than or equal to 16")
    }
    res.send("Signup Successfull")
});

app.listen(PORT,() => {
    console.log(`server is running on: http://localhost:${PORT}`);
});
 
