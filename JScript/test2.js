var args = WScript.arguments;//とりあえず、長いので変数に入れ替えるｗ

/*
JavaScriptの配列やオブジェクトではない
WScript.argumentsはfor inでは処理できない。
for(var arg in args){//動かない
	WScript.echo(args[i]);
}
*/

//Enumeratorクラスを使って処理する。引数にコレクションを渡してインスタンス化。
var iterator = new Enumerator(WScript.arguments);
//JavaのIteratorに似たことをする。
for(;!iterator.atEnd();iterator.moveNext()){
	item = iterator.item();
    WScript.echo(item);//itemには引数のStringが入っている。
}


//ちなみにlengthが取得できるので普通のfor文でも書ける。
var len = args.length;
for(var i = 0; i < len; i++){
	//コレクションの要素にインデックスでアクセスするには
	//args[i]ではなくargs(i)と書く。メソッドだから。
	WScript.echo(args[i]);
}

WScript.quit(0);


WScript.quit(0);


var arr = ["abc","def","ghi"];
for(var e in arr){
	WScript.echo(arr[e]);
}

WScript.quit(0);

var dom = WScript.createObject("MSXML2.DOMDocument");
dom.load("build.xml");
nodeList = dom.documentElement.selectNodes("//exec/@*");

var iterator = new Enumerator(nodeList);

for(;!iterator.atEnd();iterator.moveNext()){
	item = iterator.item();
    WScript.echo(item.nodeName);
}