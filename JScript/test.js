//XMLDOM�p�[�T���擾
var dom = new ActiveXObject("MSXML2.DOMDocument");

//load���\�b�h��xml�h�L�������g��ǂݍ���
dom.load("build.xml");

//���Ƃ͕W���I��DOM API���g�����v���C���y���߂�
var nodeName = dom.documentElement.firstChild.nodeName;
WScript.echo(nodeName);//description

//IXMLDOMNode#selectNodes���\�b�h��XPath���g�p�����m�[�h���X�g�̎擾���ł���B
var nodeList = dom.documentElement.selectNodes("//exec/@*");

/*
//IXMLDOMNodeList�̓R���N�V�����Ȃ̂�
//for in���g���������͂ł��Ȃ��B
var iterator = new Enumerator(nodeList);
for(;!iterator.atEnd();iterator.moveNext()){
	item = iterator.item();
    WScript.echo(item.nodeName);
}//[dir],[executable]��2�̃m�[�h���擾�ł���B

*/
//����ł��擾�\
var len = nodeList.length;
for(var i = 0; i < len; i++){
	WScript.echo(nodeList(i).nodeName);
}


//�V�����C�e���[�^�������j�ł���Ă݂�
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

//iterator(�R���N�V����).forEach(�R�[���o�b�N);�ŏ�����
iterator(nodeList).forEach(function(node){
	WScript.echo(node.nodeName);
});





