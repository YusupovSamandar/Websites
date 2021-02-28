const express = require("express");
const bodyParser = require("body-parser");
// const request = require("request");
const https = require("https")

const app = express();

app.use(express.static("public"))

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/signup.html");
});
app.post("/", (req, res) =>{
    let firstName = req.body.fname;
    let lastName = req.body.lname;
    let email = req.body.email;

    const data = {
        members: [
            {
                email_adress: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName
                }
            }
        ]
    };
    const jsonData = JSON.stringify(data);
    const url = "https://us10.api.mailchimp.com/3.0/lists/975deaeda5";
    const options = {
        method: "POST",
        auth: "david1:304c600a2262c04cd4f81af5601fd8b1-us10"
    }

    const request = https.request(url, options, function (response) {
        if(response.statusCode === 200){
            res.sendFile(__dirname + "/succes.html");
        }else{
            res.sendFile(__dirname + "/failure.html")
        }
        res.on("data", (data) =>{
            console.log(JSON.parse(data));
        });
    });

    // request.write(jsonData);
    request.end();

});

app.post("/failure", function (req, res) { res.redirect("/")})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

// API key
// 304c600a2262c04cd4f81af5601fd8b1-us10
// List ID
// 975deaeda5