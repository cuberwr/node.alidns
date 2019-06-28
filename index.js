const request = require('request');

const Core = require('@alicloud/pop-core');

//填写id/key
var client = new Core({
    accessKeyId: '',//id
    accessKeySecret: '',//key
    endpoint: 'https://alidns.aliyuncs.com',
    apiVersion: '2015-01-09'
});

//填写修改信息
var params = {
    "RecordId": "",
    "RR": "",
    "Type": "",
    "Value": '',//非必须
};

var requestOption = {
    method: 'POST'
};

function check_change() {
    request('http://ip.6655.com/ip.aspx?area=1', (err, res, body) => {
        var ip = body.substring(0, body.indexOf('|'));
        if (params.Value !=ip) {
            params.Value = ip;
            client.request('UpdateDomainRecord', params, requestOption).then((result) => {
                console.log(JSON.stringify(result));
            }, (ex) => {
                console.log(ex);
            });
        }else{
            console.log('no change');
        }
    });   
}

check_change();
setInterval(() => {
    check_change();
}, 610000);