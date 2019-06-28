//获取本机外网IP
const request = require('request');

var ip = '';

function getIP() {
    request('http://ip.6655.com/ip.aspx?area=1', (err, res, body) => {
        ip = body.substring(0, body.indexOf('|'));
    });
}


//阿里云API修改DNS解析
const Core = require('@alicloud/pop-core');

//填入你的id和key，在阿里云控制台查询
var client = new Core({
    accessKeyId: '',
    accessKeySecret: '',
    endpoint: 'https://alidns.aliyuncs.com',
    apiVersion: '2015-01-09'
});

//以下信息需完成
var params = {
    "RecordId": "",
    "RR": "",
    "Type": "",
    "Value": '', //非必须
};

var requestOption = {
    method: 'POST'
};

function check_change() {
    if (!(ip === params.Value)||!params.Value) {
        params.Value = ip;
        client.request('UpdateDomainRecord', params, requestOption).then((result) => {
            console.log(JSON.stringify(result));
        }, (ex) => {
            console.log(ex);
        });
    }else{console.log('no change')}
}

check_change();
setInterval(() => {
    check_change();
}, 610000);