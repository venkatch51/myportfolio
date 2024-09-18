const http = require('http')
const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


const hostname = '127.0.0.1'
const port =  5000

const contactDetails = [
    {
        name:"Jithendra venkat",
        emailId:"jithendravenkat51@gmail.com",
        phone:"8328472154"
    }
]
const formData = []
app.get('/api/contact-data',(req,res) => {
    res.json(contactDetails)
})

app.post('/api/contact-data', (req, res) => {
    console.log('Received form data:', req.body);
    const { email, name, message, subject } = req.body;

    // Validate form data
    if (!email || !name || !message || !subject) {
        return res.status(400).json({ error: "All fields are required" });
    }

    // Append form data to the array
    formData.push(req.body);
    res.status(200).send("Form data submitted successfully")
})
app.get('/api/form-data', (req, res) => {
    res.json(formData);
});
app.listen(port,() => {
    console.log('port running at 5000')
})
