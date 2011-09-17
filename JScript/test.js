//XMLDOMパーサを取得
var dom = new ActiveXObject("MSXML2.DOMDocument");

//loadメソッドでxmlドキュメントを読み込み
dom.load("build.xml");

//あとは標準的なDOM APIを使ったプレイが楽しめる
var nodeName = dom.documentElement.firstChild.nodeName;
WScript.echo(nodeName);//description

//IXMLDOMNode#selectNodesメソッドでXPathを使用したノードリストの取得もできる。
var nodeList = dom.documentElement.selectNodes("//exec/@*");

/*
//IXMLDOMNodeListはコレクションなので
//for inを使った処理はできない。
var iterator = new Enumerator(nodeList);
for(;!iterator.atEnd();iterator.moveNext()){
	item = iterator.item();
    WScript.echo(item.nodeName);
}//[dir],[executable]の2つのノードが取得できる。

*/
//これでも取得可能
var len = nodeList.length;
for(var i = 0; i < len; i++){
	WScript.echo(nodeList(i).nodeName);
}


//新しくイテレータを作る方針でやってみた
var iterator = function(collection){
	return {
		forEach : function(callback){
			var len = collection.length;
			for(var i = 0; i < len; i++){
				callback(collection(i));
			}
		}
	};
};

//iterator(コレクション).forEach(コールバック);で書ける
iterator(nodeList).forEach(function(node){
	WScript.echo(node.nodeName);
});





