const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mydb", {

}).then(() => {
    console.log("connection is succesful");
}).catch((e) => {
    console.log("No connection",e)
});
