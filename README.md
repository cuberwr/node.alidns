# node.alidns

获取ip并利用阿里云API修改解析
===================
使用时需要填入index.js中的accessKeyId以及accessKeySecret

并完成index.js中params中除Value外的所有信息 _**（必须）**_

关于所需要的值如何获取，详见[阿里云API文档](https://help.aliyun.com/document_detail/29739.html?spm=5176.10609282.905295.32.62e53801Qxwysj)

完成之后在目录下执行

`npm install`

`node index.js`

运行测试，每次运行时会尝试修改一次解析，可能会返回*重复设置*的错误，可无视。

如无问题可运行`forever start index.js`保持后台运行
