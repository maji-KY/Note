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

//��3������ǉ�����true���w��ŊJ���t�@�C�������݂��Ȃ��ꍇ����ɂ����Ă����B
var fos = fs.openTextFile(filename, MODE.APPENDING, true);

var buf = "";
//1�s��������
fos.writeLine(today.toString() + "�@���s�I");
fos.Close();

WScript.quit(0);
