/**
 * description:H5小游戏主流渠道聚合SDK(微信，手Q，支付宝，OPPO,VIVO,HUAWEI,BAIDU,XIAOMI等渠道的登录及支付调用接口),持续开发中。。。。。。
 * author: 白
 * date: 2020.4.18
 * version：1.0.0
 * compiler environment: Cocos Creator v2.3.1.0
 */
cc.Class({
    extends: cc.Component,

    properties: {
        loginBtn: cc.Button,
        payBtn: cc.Button,
        Info: cc.Label,
    },
    onLoad() {
        this.loginBtn.node.on('click', this.login, this);
        this.payBtn.node.on('click', this.pay, this);
    },
    login: function (event) {
       
        this.ctoaslogin();
         //this.Info.string ="登录";
        //this.wxLogin();
        // this.qqLogin();
        // this.aliLogin();
        // this.oppoLogin();
        // this.vivoLogin();
        // this.huaweiLogin(true);
        //this.baiduLogin();
        //this.xioamiLogin();
    },
    /**
     * 
     *调用支付
     */
    pay: function (event) {
        console.log("点击了支付按钮");
        //this.wxPay();
        // this.qqPay();
        // this.aliPay();
        // this.oppoPay();
        // this.vivoPay();
        // this.huaweiPay();
        // this.baiduPay();
        //this.xioamiPay();
    },


    ctoaslogin()
    {
      console.log("点击了登录按钮")
      var obj =  jsb.reflection.callStaticMethod("org/cocos2dx/javascript/Test", "login","(I)Ljava/lang/String;", 6);
      this.Info.string =obj;
    },

    /**
     * 微信登录  官方文档见https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html
     */
    wxLogin() {
        // let exportJson = {};
        // let sysInfo = wx.getSystemInfoSync();
        // //获取微信界面大小
        // let width = sysInfo.screenWidth;
        // let height = sysInfo.screenHeight;
        // wx.login({
        //     success: (res) => {
        //         if (res.code) {
        //             console.log("获取到的code:", res.code);
        //             exportJson.code = res.code;//向服务端传递code用于获取微信小游戏的用户唯一标识
        //             //发起网络请求
        //             wx.request({
        //                 url: 'http://localhost:28089/wxLogin',
        //                 data: {
        //                     code: res.code
        //                 },
        //                 success(res) {

        //                     console.log("123456")
        //                     console.log(res);
        //                 }
        //             })
        //             wx.getSetting({
        //                 success(res) {
        //                     console.log(res.authSetting);
        //                     if (res.authSetting["scope.userInfo"]) {
        //                         console.log("用户已授权");
        //                         wx.getUserInfo({
        //                             success(res) {
        //                                 console.log(res);
        //                                 exportJson.userInfo = res.userInfo;
        //                                 //此时可进行登录操作
        //                             }
        //                         });
        //                     } else {
        //                         let button = wx.createUserInfoButton({
        //                             type: 'text',
        //                             text: '',
        //                             style: {
        //                                 left: 0,
        //                                 top: 0,
        //                                 width: width,
        //                                 height: height,
        //                                 backgroundColor: '#00000000',//最后两位为透明度
        //                                 color: '#ffffff',
        //                                 fontSize: 20,
        //                                 textAlign: "center",
        //                                 lineHeight: height,
        //                             }
        //                         });
        //                         button.onTap((res) => {
        //                             if (res.userInfo) {
        //                                 console.log("用户授权:", res);
        //                                 exportJson.userInfo = res.userInfo;
        //                                 //此时可进行登录操作
        //                                 button.destroy();
        //                             } else {
        //                                 console.log("用户拒绝授权:", res);
        //                             }
        //                         });
        //                     }
        //                 }
        //             })
        //         } else {
        //             console.log('登录失败！' + res.errMsg)
        //         }
        //     },
        // });
    },
    // /**
    //  * 手Q登录  官方文档见https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_login.html#qq-login
    //  */
    qqLogin() {
        // let exportJson = {};
        // let sysInfo = qq.getSystemInfoSync();
        // //获取微信界面大小
        // let width = sysInfo.screenWidth;
        // let height = sysInfo.screenHeight;
        // qq.login({
        //     success: (res) => {
        //         if (res.code) {
        //             console.log("获取到的code:", res.code);
        //             exportJson.code = res.code;//向服务端传递code用于获取微信小游戏的用户唯一标识
        //             //发起网络请求
        //             qq.request({
        //                 url: 'http://localhost:28089/qqLogin',
        //                 data: {
        //                     code: res.code
        //                 },
        //                 success(res) {
        //                     console.log("123456")
        //                     console.log(res);
        //                 }
        //             })
        //             qq.getSetting({
        //                 success(res) {
        //                     console.log(res.authSetting);
        //                     if (res.authSetting["scope.userInfo"]) {
        //                         console.log("用户已授权");
        //                         qq.getUserInfo({
        //                             success(res) {
        //                                 console.log(res);
        //                                 exportJson.userInfo = res.userInfo;
        //                                 //此时可进行登录操作
        //                             }
        //                         });
        //                     } else {
        //                         console.log("未授权")
        //                         let button = qq.createUserInfoButton({
        //                             type: 'text',
        //                             text: '',
        //                             style: {
        //                                 left: 0,
        //                                 top: 0,
        //                                 width: width,
        //                                 height: height,
        //                                 backgroundColor: '#00000000',//最后两位为透明度
        //                                 color: '#ffffff',
        //                                 fontSize: 20,
        //                                 textAlign: "center",
        //                                 lineHeight: height,
        //                             }
        //                         });
        //                         button.onTap((res) => {
        //                             if (res.userInfo) {
        //                                 console.log("用户授权:", res);
        //                                 exportJson.userInfo = res.userInfo;
        //                                 //此时可进行登录操作
        //                                 button.destroy();
        //                             } else {
        //                                 console.log("用户拒绝授权:", res);
        //                             }
        //                         });
        //                     }
        //                 }
        //             })
        //         } else {
        //             console.log('登录失败！' + res.errMsg)
        //         }
        //     },
        // });
    },

    /**
     * 支付宝登录  官方文档见https://opendocs.alipay.com/mini/api/openapi-authorize
     */
    aliLogin() {
        // my.getAuthCode({
        //     scopes: 'auth_user',
        //     success: (res) => {
        //         my.alert({
        //             content: res.authCode,
        //         });
        //     },
        // });
    },
    /**
     * OPPO登录  官方文档见https://cdofs.oppomobile.com/cdo-activity/static/201809/30/gamehall/book/not_battle/readme.html#3-js-sdk
     */
    oppoLogin() {
        // OPPO.login({
        //     packageName: 'your.package.name', //需要修改成开发者在oppo开放平台填写的包名才能成功调用此方法
        //     callback: function(res) {
        //         console.log(res)
        //     }
        // })

    },
    /**
     * VIVO登录  官方文档见https://minigame.vivo.com.cn/documents/#/api/service/newaccount?id=login
     */
    vivoLogin() {
        // if (qg.getSystemInfoSync().platformVersionCode >= 1053) {
        //     qg.login().then((res) => {
        //         if (res.data.token) {
        //             // 使用token进行服务端对接
        //         }
        //     }, (err) => {
        //         console.log('登录失败' + JSON.stringify(err));
        //     });
        // }
    },
    // /**
    //  * 华为登录  官方文档见https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickgame-api-account
    //  * @param {*} issafe 是否走防沉迷登录
    //  */
    huaweiLogin(issafe) {
        // if (issafe) {
        //     console.log("普通游戏登录")
        //         /**
        //          * 普通游戏登录。
        //          */
        //     hbs.gameLogin({
        //         forceLogin: 1, //强制登录，未登录时会弹出登录对话框
        //         appid: "102066507", //appid需要与华为开发者联盟后台配置一致
        //         success: function(res) {
        //             console.log("game login success");

        //             console.log("playerId是:" + res.playerId);
        //             console.log("displayName是:" + res.displayName);
        //             console.log("playerLevel是:" + res.playerLevel);
        //             console.log("isAuth是:" + res.isAuth);
        //             console.log("ts是:" + res.ts);
        //             console.log("gameAuthSign是:" + res.gameAuthSign);
        //             console.log("开发保存玩家信息+++++++++++++++++++++++");
        //             /***
        //              * 当用户完成选择区服信息进入游戏后，或者用户的等级发生变化时，游戏可以调用此接口存储用户的角色信息。如果游戏本身不具有游戏等级、角色名称、游戏区服或者游戏公会这些信息则可以不接入此接口。
        //              */
        //             hbs.savePlayerInfo({
        //                 appid: "102066507",
        //                 area: "cn",
        //                 rank: "1",
        //                 role: "a",
        //                 sociaty: "1",
        //                 success: function(data) {
        //                     console.log("DUWENJUN save player info success:" + res);
        //                 },
        //                 fail: function(data, code) { console.log("DUWENJUN save player info fail:" + data + ", code:" + code); }
        //             });
        //         },
        //         fail: function(data, code) { console.log("DUWENJUN game login fail:" + data + ", code:" + code); }
        //     });

        // } else {
        //     console.log("防沉迷登录")
        //         /**
        //          * 根据国家要求对未成年人的游戏时间进行防沉迷监控。调用此接口实现游戏登录即可接入防沉迷的能力。
        //          */
        //     hbs.gameLoginWithReal({
        //         forceLogin: 1,
        //         appid: "102066507",
        //         success: function(res) {
        //             console.log("game login success");
        //             console.log("playerId是:" + res.playerId);
        //             console.log("displayName是:" + res.displayName);
        //             console.log("playerLevel是:" + res.playerLevel);
        //             console.log("isAuth是:" + res.isAuth);
        //             console.log("ts是:" + res.ts);
        //             console.log("gameAuthSign是:" + res.gameAuthSign);
        //             console.log("hiResImageUri是:" + res.hiResImageUri);
        //             console.log("imageUri是:" + res.imageUri);
        //             console.log("开发保存玩家信息+++++++++++++++++++++++");
        //             /***
        //              * 当用户完成选择区服信息进入游戏后，或者用户的等级发生变化时，游戏可以调用此接口存储用户的角色信息。如果游戏本身不具有游戏等级、角色名称、游戏区服或者游戏公会这些信息则可以不接入此接口。该接口后续将代替 hbs.savePlayerInfo。
        //              */
        //             hbs.savePlayerInfoWithReal({
        //                 area: "cn-1", // 玩家区服信息
        //                 rank: "100", // 玩家等级
        //                 role: "A11", // 角色名称
        //                 sociaty: "ss", // 游戏公会
        //                 success: function(res) {
        //                     console.log("save player info success");
        //                     /**
        //                      * 获取玩家帐户ID。
        //                      */
        //                     hbs.getCachePlayerId({
        //                         success: function(res) {
        //                             console.log("game getCachePlayerId: success");
        //                             console.log("playerId是" + res.playerId);
        //                             /**
        //                              * 获取玩家的额外信息（仅支持中国大陆地区游戏）。
        //                              */
        //                             hbs.getPlayerExtraInfo({
        //                                 transactionId: "",
        //                                 success: function(res) {
        //                                     console.log("get player ExtraInfo success");
        //                                     console.log("获取玩家的额外信息成功:" + res.playerId);
        //                                 },
        //                                 fail: function(data, code) {
        //                                     console.log("get player ExtraInfo fail:" + data + ", code:" + code);
        //                                 }
        //                             });
        //                         },
        //                         fail(data, code) {
        //                             console.log("on gameLoginWithReal fail: " + data + "," + code);
        //                             that.getLabel.string = data + ", " + code;
        //                         },
        //                         complete() {
        //                             console.log("on gameLoginWithReal: complete");
        //                         }
        //                     });


        //                 },
        //                 fail: function(data, code) {
        //                     console.log("save player info fail:" + data + ", code:" + code);

        //                 }
        //             });
        //         },
        //         fail: function(data, code) { console.log("DUWENJUN game login fail:" + data + ", code:" + code); },
        //         complete() { console.log("on gameLoginWithReal: complete"); }

        //     })
        // }


    },
    // /**
    //  *百度登录  官方文档见https://smartprogram.baidu.com/docs/develop/api/open/log_swan-login/
    //  */
    baiduLogin() {
            // swan.login({
            //     success: res => {
            //         console.log("百度code是" + res.code);
            //         swan.request({
            //             url: 'http://localhost:28089/baiduLogin', // 开发者服务器地址
            //             data: {
            //                 code: res.code
            //             }
            //         });
            //     },
            //     fail: err => {
            //         console.log('login fail', err);
            //     }
            // });

    },

    // /**
    //  * 小米登录  官方文档见https://dev.mi.com/console/doc/detail?pId=1739#qgloginobject
    //  */
    xioamiLogin() {
        //     qg.login({
        //         success: function (res) {
        //             console.log(res.appAccountId)
        //             console.log(res.session)
        //         },
        //         fail: function (res) { }
        //     });

        //     qg.getUserInfo({
        //         success: function (res) {
        //             console.log('nickName:${res.userInfo.nickName}')
        //         },
        //         fail: function () {
        //             console.log('user reject!')
        //         },
        //         complete: function (res) {
        //             console.log('get userInfo complete')
        //         }
        //     });

    },

    // //微信支付  官方文档见https://developers.weixin.qq.com/miniprogram/dev/api/open-api/payment/wx.requestPayment.html
    wxPay() {
        //     wx.requestPayment({
        //         timeStamp: '',
        //         nonceStr: '',
        //         package: '',
        //         signType: 'MD5',
        //         paySign: '',
        //         success(res) { },
        //         fail(res) { }
        //     })
    },
    // //手Q支付 官方文档见https://q.qq.com/wiki/develop/miniprogram/API/open_port/port_pay.html#qq-requestpayment
    qqPay() {
        //     qq.requestPayment({
        //         package: "prepay_id=" + 000,
        //         bargainor_id: "",
        //         success(res) { },
        //         fail(res) { }
        //     })
    },
    // //支付宝支付 官方文档见https://opendocs.alipay.com/mini/api/openapi-pay
    aliPay() {
        //     my.tradePay({
        //         // 调用统一收单交易创建接口（alipay.trade.create），获得返回字段支付宝交易号trade_no
        //         tradeNO: '201711152100110410533667792',
        //         success: (res) => {
        //             my.alert({
        //                 content: JSON.stringify(res),
        //             });
        //         },
        //         fail: (res) => {
        //             my.alert({
        //                 content: JSON.stringify(res),
        //             });
        //         }
        //     });
    },
    // //OPPO支付  官方文档见https://cdofs.oppomobile.com/cdo-activity/static/201809/30/gamehall/book/not_battle/readme.html#6-%E6%8C%A1%E6%9D%BF%E7%9A%84%E4%BD%BF%E7%94%A8
    oppoPay() {
        //     OPPO.pay({
        //         packageName: 'com.testgame.nearme.gamecenter', //开发者在oppo开放平台填写的包名
        //         appName: '游戏名称',
        //         appVersion: '1.0',
        //         appKey: 'TESTOPPOPAY', //在oppo开放平台得到的appKey
        //         orderId: '20171208001', //开发者在自己业务系统下的订单号
        //         price: 1, //单位 分
        //         productName: '商品名称',
        //         productDesc: '商品描述',
        //         callbackUrl: 'http: //www.yourdomain.com/notify',
        //         //接收支付平台付款通知的地址，与oppo android SDK的支付通知处理一致
        //         callback: function (res) {
        //             console.log(res)
        //         }
        //     });
    },
    // //VIVO支付  官方文档见https://minigame.vivo.com.cn/documents/#/api/service/newpay
    vivoPay() {
        //     qg.pay({
        //         orderInfo: 'orderStr',
        //         success: function (ret) {
        //             qg.showToast({
        //                 message: "支付成功：" + JSON.stringify(ret)
        //             })
        //         },
        //         fail: function (errmsg, errcode) {
        //             qg.showToast({
        //                 message: "支付失败：" + errcode + ': ' + errmsg
        //             })
        //         },
        //         complete: function () {
        //             qg.showToast({
        //                 message: "支付完成"
        //             })
        //         }
        //     })
    },
    // //华为支付  官方文档见https://developer.huawei.com/consumer/cn/doc/development/quickApp-References/quickgame-api-payment#hwPay
    huaweiPay() {
        //     hbs.hwPay({
        //         orderInfo: {
        //             "amount": 0.01,  //商品金额
        //             "applicationID": "100389777",  ////应用ID，在华为开发者联盟上获取的APP ID
        //             "productDesc": "商品描述",
        //             "productName": "商品名称",
        //             "serviceCatalog": "X6",  //游戏设置为"X6"，应用设置为"X5"
        //             "merchantId": "10086000000000293",  //华为开发者联盟上申请支付服务获取的“支付ID“
        //             "merchantName": "商户名称",  //商户名称
        //             "sign": this.sign,  //签名
        //             "requestId": this.requestid,  //在支付前生成，用于唯一标识一次支付请求。支付平台在服务器回调接口中会原样返回requestId的值
        //             "urlver": "2",  //固定值为2
        //             "sdkChannel": 1,  // 1代表应用市场渠道
        //             "publicKey": "MFwwDQYJKoZIhvcNAQEBBQADSwAwSAJBAIL/7zgG9KCjm5IeGFzq8oVaxCqFJ9+m/3rGMXU2p9K+bHLPR1m3c9TMZRGjkZbTZ0G/VLPO6BxiP+w+VM+Z3fECAwEAAQ=="  //华为开发者联盟上申请支付服务获取的“支付公钥”
        //         },
        //         success: function (ret) { console.log("pay success " + ret) },
        //         fail: function (erromsg, errocode) { console.log("pay fail : " + errocode + erromsg) }
        //     })
    },
    // //百度支付  官方文档见https://smartprogram.baidu.com/docs/develop/api/open/payment_swan-requestPolymerPayment/
    baiduPay() {

        //     // 这里只做字段展示，详细示例请在代码片段中查看
        //     swan.requestPolymerPayment({
        //         orderInfo: {
        //             "dealId": "470193086",
        //             "appKey": "MMMabc",
        //             "totalAmount": "1",
        //             "tpOrderId": "3028903626",
        //             "dealTitle": "智能小程序Demo支付测试",
        //             "signFieldsRange": "1",
        //             "rsaSign": '',
        //             "bizInfo": ''
        //         },
        //         success: res => {
        //             swan.showToast({
        //                 title: '支付成功',
        //                 icon: 'success'
        //             });
        //         },
        //         fail: err => {
        //             swan.showToast({
        //                 title: JSON.stringify(err)
        //             });
        //             console.log('pay fail', err);
        //         }
        //     });
    },
    // //小米支付  官方文档见https://dev.mi.com/console/doc/detail?pId=1739#qgpayobject
    xioamiPay() {
        // qg.pay({
        //     orderInfo: {
        //         appId: "2882303761117490626",
        //         appAccountId: "74317",
        //         session: "TRQJzccscL9u6VvC",
        //         cpOrderId: '1556088963',
        //         cpUserInfo: '74317',
        //         displayName: '游戏元宝',
        //         feeValue: 100,
        //         sign: '22fea7804df43420dc9886a04c028b6f335d87b6',
        //     },
        //     success: function (data) {
        //         //{memo: "支付成功", resultStatus: "9000"}
        //         //9000: 支付成功
        //     },
        //     fail: function (data) {
        //         //{memo: "已取消支付", resultStatus: "6001"}
        //         //6001: 已取消支付
        //         //5000: 未安装微信
        //         //5001: 微信订单未支付
        //     }
        // })
    },
});