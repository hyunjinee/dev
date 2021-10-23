const express = require("express")
const mongoose =require("mongoose");
const { MONGO_USER } = require("./config/config")

const postRouter = require("./routes/postRoutes")

const app = express()

const mongoURL = `mongodb://${MONGO_USER}`

const connectWithRetry = () => {
    mongoose.connect(mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        uesFindAndModify: false,
    })
    .then(()=> console.log("succesfully connected to DB"))
    .catch((e) => {
        console.log(e);
        setTimeout(connectWithRetry(), 5000);
    })
}

connectWithRetry();

app.use(express.json());

app.get("/", (req,res)=> {
    res.send("<h2>HI there!!!!</h2>");
});

app.use("/posts", postRouter)

const port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening on port ${port}`))
