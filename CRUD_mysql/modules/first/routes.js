const { getFirstData, setFirstData } = require("./controller")

module.exports=app=>{
    app.get('/getFirstData',getFirstData);
    app.get('/setFirstData',setFirstData);
}