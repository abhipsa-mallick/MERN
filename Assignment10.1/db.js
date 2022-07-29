const mongoose = require('mongoose');
exports.dbconn = async ()=>{
    try{
    const dbURL = "...put your db url...";
    await mongoose.connect(dbURL,{useNewUrlParser:true,useUnifiedTopology:true})
    console.log('Database connected');
}catch(err){
    console.log(`Database connection error ${err.message}`);
}
}
