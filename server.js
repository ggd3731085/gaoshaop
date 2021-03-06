// expressの呼び込み
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
//var indexRouter = require('./route/index');
// PORTの設定
// もしenvにportが確立したらそのポートを、していなかったら8080を使う
const port = process.env.PORT || 8080;
// express()のインスタンス
const app = express();

// どこにアクセスさせるかの設定
// distフォルダ：コンパイルされたファイルが入る場所
app.use(express.static(__dirname + "/dist/"));
app.use(bodyParser.urlencoded({ extended: false }));
// SPAの時、ルーティングがうまくいかない時があるので以下の設定
// これをしていないと、https://~~~/aboutとかに行った時にリロードするとエラーがでる
// SPAだとaboutファイルを直で読み込んでいないから
// これでルート以外でリロードしてもindex.htmlを読み込んでちゃんとルーティングをしてくれる
// /.*/で全てのルートを指定。req(request), res(response)
app.all('*', function(req, res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    //res.sendFile(__dirname + "/dist/index.html");
    if (req.method == 'OPTIONS') {
        res.send(200);
        /make the require of options turn back quickly/
    } else {
        next();
    }
});

//deal (cookie,session)
(() => {
    app.use(cookieParser());
    let keyArr = [];
    for (let i = 0; i < 100000; i++) {
        keyArr[i] = "xsa_" + Math.random() * 100 + i;
    }
    app.use(cookieSession({
        name: "hc",
        keys: keyArr,
        maxAge: 30 * 60 * 1000
    }))
})();

//deal router
//indexRouter(app);
//deal router
app.use('/', require('./route/index.js')());
// 一番上で指定したportをlisten
app.listen(port);

// 動いてるかどうかconsoleで見る
console.log("Server is up!!");
