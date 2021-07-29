const mongoose = require('mongoose')
const db_connection = () => {
    mongoose.connect("mongodb+srv://fedia:mycode2020@cluster0.kzgr2.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:true,
    }
    
    )
    .then(()=>{console.log('data_base connected')})
    .catch(()=>{console.log('error to connected')})
}
module.exports = db_connection