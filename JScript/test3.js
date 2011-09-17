var shell = new ActiveXObject("WScript.shell");
var WINDOW_STYLE = {
	HIDE: 0,
	SHOW: 1
	//この他にもたくさんあるので後述のリファレンス参照
};

/*
//runメソッドには
//「コマンド, ウインドウスタイル, 実行したコマンドが終了するまで待つか」を指定。
shell.run("cmd /K java -version", WINDOW_STYLE.SHOW);//引数省略の場合falseとして扱われる
WScript.echo("コマンド実行後すぐにここに来る");


var ret = shell.run("calc", WINDOW_STYLE.SHOW, true);
WScript.echo("コマンド実行完了後にここに来る\r\n終了コード:" + ret);

WScript.quit(0);


*/

var fileProtocolHandler = "rundll32.exe url.dll,FileProtocolHandler ";
var path = "C:\\";
shell.run(fileProtocolHandler + path);//Cドライブを開いた状態のエクスプローラが立ち上がる
var file = "test.txt";
shell.run(fileProtocolHandler + file);//ファイルを関連付けられたプログラムで起動
WScript.quit(0);


//WshScriptExecが取得出来るのでそこから実行ステータスやストリームを取得する。
var exeObj = shell.exec("cmd /C for %a in ('バッチ','ファイル','見辛いな') do echo %a");

//コマンド実行終了まで待つ。
while(exeObj.status == 0){//statusが実行中の場合0
     WScript.sleep(100);
     //実行中はstdInも有効。
}

//status :実行ステータス
//stdIn  :標準入力
//stdOut :標準出力
//stdErr :標準エラー

WScript.echo(exeObj.stdOut.readAll());//ストリームで使えるメソッドが使える。
WScript.echo(exeObj.stdErr.readAll());

WScript.quit(0);




