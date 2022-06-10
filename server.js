var express = require('express');
var app = express();
const data =require('./Data.js')

app.get('/', function (req, res) {
    res.json({
    
    massage:'api is running'
    })
})

app.get('/country/:country' , async function (req,res){
    let country = String(req.params.country).toLowerCase()
   let  mydata= data?.filter((w)=>{

        return String(w?.country).toLowerCase()==country
        
    })
    res.json({
        massage:'filter By counrty is here ',
        mydata
    })
})

app.get('/country/state/:country/:state', function(req,res){

    let countryparam = String(req.params.country).toLowerCase()
    let stateparam =String(req.params.state).toLowerCase()

    let result= data?.filter((w)=>{
        return String(w.country).toLowerCase()==countryparam && String(w.state).toLowerCase()==stateparam
    })
    res.json({
        massage:'filter by country and state',
        result 
    })

})




aap.get('/country/state/city/:country/:state/:city' , function (req, res) {

    let countryparam = String(req.params.country).toLowerCase()
    let stateparam = String(req.params.state).toLowerCase()
    let cityparam =String(req.params.city).toLowerCase()

    let result = data?.filter((w) => {
        return String(w.country).toLowerCase() == countryparam && String(w.state).toLowerCase() == stateparam && String(W.city)==cityparam
    })
    res.json({
        massage: 'filter by country and state',
        result
    })

})




var server = app.listen(8081, function () {
    var host = server.address('localhost').address
    var port = server.address().port

    console.log("Example app listening at http://%s:%s", host, port)
})
