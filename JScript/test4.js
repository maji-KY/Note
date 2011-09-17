var fs = new ActiveXObject("Scripting.FileSystemObject");
var MODE = {
	READING: 1,
	WRITING: 2,
	APPENDING: 8
};

function fillzero(num, length){
	var numStr = (""+num);
	var numStrLength = numStr.length;
	while(numStrLength++ < length){
		numStr = "0" + numStr;
	}
	return numStr;
}

var today = new Date();
var filename = today.getFullYear() + 
			   fillzero(today.getMonth()+1, 2) + 
			   fillzero(today.getDate(), 2) + ".txt";

//第3引数を追加してtrueを指定で開くファイルが存在しない場合勝手につくってくれる。
var fos = fs.openTextFile(filename, MODE.APPENDING, true);

var buf = "";
//1行書きこむ
fos.writeLine(today.toString() + "　実行！");
fos.Close();

WScript.quit(0);
