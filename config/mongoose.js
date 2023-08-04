//require library
const mongoose=require('mongoose');
//connect to db
mongoose.connect('mongodb://localhost/contacts_list_db');
//Get mongoose to use the global promise library
mongoose.Promise=global.Promise;
//acquire the connection(to check if it is successful)
const db=mongoose.connection;
//error
db.on('error',function(err){
    console.log('Mongoose default connection error'+err);
});
//up and running then print the message
db.on('connected',function(){
    console.log('Successfully connected to the database');
});
