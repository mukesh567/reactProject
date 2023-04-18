
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/ReactIntern").then(() => {
    console.log("MongoDb connection successful!");
}).catch((err) => {
    console.log("MongoDb connection error!");
})

mongoose.connection.on("disconnected", () => {
    console.log("Mongodb disconnected");
});