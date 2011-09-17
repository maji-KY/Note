var workPath = "R:/output/";
var xmlPath = "sm5777427.xml";

var startTime = new Date();//�J�n����

//�W����forEach������΂����̂Ɂc
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

//�R�����g��date�l�i���e�����j��ǂ߂镶����ɕϊ�
var getDateString = (function(){
	var week = ["(��)\t","(��)\t","(��)\t","(��)\t","(��)\t","(��)\t","(�y)\t"];
	return function(sec){
		var date = new Date(sec * 1000);
		return date.toLocaleDateString() +
				week[date.getDay()] +
				date.toLocaleTimeString();
	}
})();

//�R�����g��vpos�l�i����̂ǂ��ŃR���������j��ǂ߂镶����ɕϊ�
var getVposString = function(vpos){
	var time = (vpos / 100) >> 0;
	var min = (time / 60) >> 0;
	var sec = ("0" + (time % 60));
	return min + ":" + sec.substr(sec.length - 2);
};

//�g���̂ẴX�N���v�g�Ȃ̂ŃO���[�o���ϐ����ʐ��Y���Ă���
var fs = new ActiveXObject("Scripting.FileSystemObject");
var dom = new ActiveXObject("MSXML2.DOMDocument");

//�t�H���_���Ȃ��Ȃ���
if(!fs.folderExists(workPath))fs.createFolder(workPath);

dom.load(xmlPath);

var doc = dom.documentElement;

//XPath���g����user_id�����m�[�h������������������
var nodeList = doc.selectNodes("//@user_id");

//HashSet�I�Ȃ��Ƃ��������c
var userSet = [];
iterator(nodeList).forEach(function(item){
	userSet[item.nodeValue] = null;
});

//���[�U�[���Ƃɏ������s��
for(var userId in userSet){

	var buf = "";
	//�w�肵�����[�U�[���̑����l������chat�i�R�����g�j�m�[�h�̃��X�g�𓾂�I
	var chatList = doc.selectNodes("//chat[@user_id = '" + userId + "']");
	
	//�R�����g���Ƃ̏���
	iterator(chatList).forEach(function(node){
	
		var dateStr;
		var vposStr;
		//date��vpos�����̒l������
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
	
	//�u���[�U�[ID.log�v�ŕۑ�
	fos = fs.createTextFile(workPath + userId +".log", true);
	fos.write(buf);
	fos.close();
	
}
WScript.echo("�o�͊����B\r\n" + (new Date() - startTime) + "msec");

WScript.quit(0);
