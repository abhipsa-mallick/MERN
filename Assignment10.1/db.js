const mongoose = require('mongoose');
exports.dbconn = async ()=>{
    try{
    const dbURL = "mongodb+srv://abhijeetdubey:Abhijeet0902@cluster0.52tju.mongodb.net/productdb?retryWrites=true&w=majority";
    await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('Database connected');
}catch(err){
    console.log(`Database connection error ${err.message}`);
}
}