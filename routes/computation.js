var express = require('express');
var router = express.Router();
let x = Math.random()*100
// Define the endpoint for computation
router.get('/', function(req, res) {
        
    let floor = Math.cos(x);
    let cosh = Math.cosh(x);
    let log2 = Math.log2(x);
 
    res.render("computation",{
        floor: `floor value applied to ${x} is ${floor}`,
        cosh: `cosh value applied to ${x} is ${cosh}`,
        log2 : `log2 value applied to ${x} is ${log2}`
    })
});
 
module.exports = router;