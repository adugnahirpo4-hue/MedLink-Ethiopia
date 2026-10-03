const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/login", (req, res) => {
    const { fullName, email, password } = req.body;

    console.log(fullName, email, password);

    if (!fullName || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    res.json({
        message: "Login successful"
    });
});

app.get('/',(req,res) =>{
    res.send("hello  adugna")
})

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});