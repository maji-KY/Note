var args = WScript.arguments;//�Ƃ肠�����A�����̂ŕϐ��ɓ���ւ��邗

/*
JavaScript�̔z���I�u�W�F�N�g�ł͂Ȃ�
WScript.arguments��for in�ł͏����ł��Ȃ��B
for(var arg in args){//�����Ȃ�
	WScript.echo(args[i]);
}
*/

//Enumerator�N���X���g���ď�������B�����ɃR���N�V������n���ăC���X�^���X���B
var iterator = new Enumerator(WScript.arguments);
//Java��Iterator�Ɏ������Ƃ�����B
for(;!iterator.atEnd();iterator.moveNext()){
	item = iterator.item();
    WScript.echo(item);//item�ɂ͈�����String�������Ă���B
}


//���Ȃ݂�length���擾�ł���̂ŕ��ʂ�for���ł�������B
var len = args.length;
for(var i = 0; i < len; i++){
	//�R���N�V�����̗v�f�ɃC���f�b�N�X�ŃA�N�Z�X����ɂ�
	//args[i]�ł͂Ȃ�args(i)�Ə����B���\�b�h������B
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