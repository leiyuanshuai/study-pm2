var express = require('express');
// var financeRelationMap = require('./financeRelationMap.json');
// var updateTime = require('./updateTime.json');
// var searchFinance = require('./searchFinance.json');
// var financeRelationMap = require('./financeRelationMap.json');

var app = express();
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header('Content-Type', 'application/json;charset=utf-8');
    next();
});
// app.all('/mock/finance-api/v1/financeRelationMap', function(req, res) {
//     res.json(financeRelationMap);
// });
// app.all('/finance-api/v1/latest/updateTime', function(req, res) {
//     res.json(updateTime);
// });
// app.all('/finance-api/v1/searchFinance', function(req, res) {
//     res.json(searchFinance);
// });
app.all('/',function(req, res) {
    res.json({
        name: '我是pm2'
    });
})
let port = '8099';
app.listen(port, () => {
    console.log('port:', port);
});
