var iterator = function(collection){
	return {
		forEach : function(func){
			var iterator = new Enumerator(collection);
			for(;!iterator.atEnd();iterator.moveNext()){
				if(func(iterator.item()))break;
			}
		}
	};
};


var fs = new ActiveXObject("Scripting.FileSystemObject");

var path = "./";

var dom = WScript.createObject("MSXML2.DOMDocument");
dom.load("sm5777427.xml");
nodeList = dom.documentElement.selectNodes("//@user_id");

var arr = [];

var i = 0;
iterator(nodeList).forEach(function(item){
	arr[item.nodeValue] = null;
	//WScript.echo(item.nodeValue);
	//if(10 < i++)return true;
});

var buf = "";
i = 0;
for(var e in arr){
	buf += e + "\n";
	i++;
}

WScript.echo(i);

WScript.quit(0);




