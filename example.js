const translate = require('./index');

var s = new Date().getTime()

let transText = 'hello world!';
translate.transText(transText,{from: 'en', to: 'ja'}).then(function(text){
    console.log(text)
    var e = new Date().getTime()
    console.log(e - s)
});