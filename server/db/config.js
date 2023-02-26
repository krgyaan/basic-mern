const mongoose = require('mongoose')

mongoose.set('strictQuery', true);

const DB = process.env.DB_URL;
mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connection Successful');
    })
    .catch((err) => {
        console.log("No Connection" + err)
    });
