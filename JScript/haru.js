var workPath = "R:/output/";
var xmlPath = "sm5777427.xml";

var startTime = new Date();//開始時間

//標準でforEachがあればいいのに…
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

//コメントのdate値（投稿日時）を読める文字列に変換
var getDateString = (function(){
	var week = ["(日)\t","(月)\t","(火)\t","(水)\t","(木)\t","(金)\t","(土)\t"];
	return function(sec){
		var date = new Date(sec * 1000);
		return date.toLocaleDateString() +
				week[date.getDay()] +
				date.toLocaleTimeString();
	}
})();

//コメントのvpos値（動画のどこでコメしたか）を読める文字列に変換
var getVposString = function(vpos){
	var time = (vpos / 100) >> 0;
	var min = (time / 60) >> 0;
	var sec = ("0" + (time % 60));
	return min + ":" + sec.substr(sec.length - 2);
};

//使い捨てのスクリプトなのでグローバル変数を大量生産している
var fs = new ActiveXObject("Scripting.FileSystemObject");
var dom = new ActiveXObject("MSXML2.DOMDocument");

//フォルダがないなら作る
if(!fs.folderExists(workPath))fs.createFolder(workPath);

dom.load(xmlPath);

var doc = dom.documentElement;

//XPathを使ってuser_id属性ノードを根こそぎ処理する
var nodeList = doc.selectNodes("//@user_id");

//HashSet的なことがしたい…
var userSet = [];
iterator(nodeList).forEach(function(item){
	userSet[item.nodeValue] = null;
});

//ユーザーごとに処理を行う
for(var userId in userSet){

	var buf = "";
	//指定したユーザー名の属性値を持つchat（コメント）ノードのリストを得る！
	var chatList = doc.selectNodes("//chat[@user_id = '" + userId + "']");
	
	//コメントごとの処理
	iterator(chatList).forEach(function(node){
	
		var dateStr;
		var vposStr;
		//dateとvpos属性の値を処理
		iterator(node.attributes).forEach(function(attr){
			switch(attr.nodeName){
				case "date":
					dateStr = getDateString(attr.nodeValue);
					break;
				case "vpos":
					vposStr = getVposString(attr.nodeValue);
					break;
				default:
			} 
		});
		
		buf += dateStr + "\t" +
			   vposStr + "\t" + 
			   node.firstChild.nodeValue + "\r\n";
		
	});
	
	//「ユーザーID.log」で保存
	fos = fs.createTextFile(workPath + userId +".log", true);
	fos.write(buf);
	fos.close();
	
}
WScript.echo("出力完了。\r\n" + (new Date() - startTime) + "msec");

WScript.quit(0);
