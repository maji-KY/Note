var shell = new ActiveXObject("WScript.shell");
var WINDOW_STYLE = {
	HIDE: 0,
	SHOW: 1
	//���̑��ɂ��������񂠂�̂Ō�q�̃��t�@�����X�Q��
};

/*
//run���\�b�h�ɂ�
//�u�R�}���h, �E�C���h�E�X�^�C��, ���s�����R�}���h���I������܂ő҂��v���w��B
shell.run("cmd /K java -version", WINDOW_STYLE.SHOW);//�����ȗ��̏ꍇfalse�Ƃ��Ĉ�����
WScript.echo("�R�}���h���s�シ���ɂ����ɗ���");


var ret = shell.run("calc", WINDOW_STYLE.SHOW, true);
WScript.echo("�R�}���h���s������ɂ����ɗ���\r\n�I���R�[�h:" + ret);

WScript.quit(0);


*/

var fileProtocolHandler = "rundll32.exe url.dll,FileProtocolHandler ";
var path = "C:\\";
shell.run(fileProtocolHandler + path);//C�h���C�u���J������Ԃ̃G�N�X�v���[���������オ��
var file = "test.txt";
shell.run(fileProtocolHandler + file);//�t�@�C�����֘A�t����ꂽ�v���O�����ŋN��
WScript.quit(0);


//WshScriptExec���擾�o����̂ł���������s�X�e�[�^�X��X�g���[�����擾����B
var exeObj = shell.exec("cmd /C for %a in ('�o�b�`','�t�@�C��','���h����') do echo %a");

//�R�}���h���s�I���܂ő҂B
while(exeObj.status == 0){//status�����s���̏ꍇ0
     WScript.sleep(100);
     //���s����stdIn���L���B
}

//status :���s�X�e�[�^�X
//stdIn  :�W������
//stdOut :�W���o��
//stdErr :�W���G���[

WScript.echo(exeObj.stdOut.readAll());//�X�g���[���Ŏg���郁�\�b�h���g����B
WScript.echo(exeObj.stdErr.readAll());

WScript.quit(0);




