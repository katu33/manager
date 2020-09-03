const mongoose = require('mongoose');

const connectDatabase = () => {
    const mongoDbUrl = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`;
    console.log('Connecting to : ' + mongoDbUrl);
    mongoose
        .connect(mongoDbUrl, {useNewUrlParser: true})
        .then(() => {
            console.log('connect db success');
        })
        .catch(err => {
            console.log('connect db failed');
            process.exit();
        }); 
}

export default connectDatabase;