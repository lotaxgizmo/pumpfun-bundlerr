(function(_0x31d001,_0x471afd){const _0x3d2314=a27_0x17e9,_0xcd71ac=_0x31d001();while(!![]){try{const _0x3985df=-parseInt(_0x3d2314(0x14c))/0x1*(-parseInt(_0x3d2314(0x160))/0x2)+parseInt(_0x3d2314(0x138))/0x3*(-parseInt(_0x3d2314(0x13e))/0x4)+parseInt(_0x3d2314(0x141))/0x5*(-parseInt(_0x3d2314(0x162))/0x6)+parseInt(_0x3d2314(0x152))/0x7*(parseInt(_0x3d2314(0x146))/0x8)+parseInt(_0x3d2314(0x153))/0x9*(-parseInt(_0x3d2314(0x15d))/0xa)+parseInt(_0x3d2314(0x15e))/0xb*(parseInt(_0x3d2314(0x161))/0xc)+parseInt(_0x3d2314(0x15f))/0xd*(-parseInt(_0x3d2314(0x13f))/0xe);if(_0x3985df===_0x471afd)break;else _0xcd71ac['push'](_0xcd71ac['shift']());}catch(_0x111273){_0xcd71ac['push'](_0xcd71ac['shift']());}}}(a27_0xa5f0,0x8e803));import a27_0x33a70d from'node-fetch';import a27_0x4475ab from'fs/promises';import a27_0x66fe4c from'path';function a27_0xa5f0(){const _0x87f390=['yellow','description','body','242890pFRgLr','165ZFNBOf','3237eJPmyv','43232xyJyLL','333048tTijts','6lpdEDD','6459yyQWMn','createInterface','status','HTTP\x20error!\x20Status:\x20','pipe','website','192tSKBGe','59122ELuPuR','parse','635385XFvLrz','stringify','Error\x20fetching\x20or\x20updating\x20metadata:','error','filePath','4165160rEWSaj','json','stdout','utf8','SYM','symbol','20xghhgh','Default\x20Name','name','stdin','image.png','join','14IuxMtc','9Kequuy','Metadata\x20file\x20not\x20found\x20or\x20empty.\x20Creating\x20a\x20new\x20one.','twitter','telegram','image_uri','log','close'];a27_0xa5f0=function(){return _0x87f390;};return a27_0xa5f0();}import{createWriteStream}from'fs';function a27_0x17e9(_0x1af6aa,_0x551463){const _0xa5f0f7=a27_0xa5f0();return a27_0x17e9=function(_0x17e9d0,_0x56c8aa){_0x17e9d0=_0x17e9d0-0x138;let _0x510015=_0xa5f0f7[_0x17e9d0];return _0x510015;},a27_0x17e9(_0x1af6aa,_0x551463);}import a27_0x57e14a from'readline';import a27_0x21d7b3 from'chalk';export let createTokenMetadata={};async function promptUser(_0x4465fd){const _0x28ed34=a27_0x17e9,_0x2254d9=a27_0x57e14a[_0x28ed34(0x139)]({'input':process[_0x28ed34(0x14f)],'output':process[_0x28ed34(0x148)]});return new Promise(_0x303a8d=>_0x2254d9['question'](_0x4465fd,_0x414993=>{const _0x1f2a08=_0x28ed34;_0x2254d9[_0x1f2a08(0x159)](),_0x303a8d(_0x414993);}));}async function fetchCoinInfo(_0x166cdc){const _0x120734=a27_0x17e9;try{const _0x223a25='https://frontend-api.pump.fun/coins/'+_0x166cdc,_0x33a4a9='./metadata/metadata.json',_0x31a8e2=_0x120734(0x150),_0x45462f=a27_0x66fe4c[_0x120734(0x151)](a27_0x66fe4c['dirname'](_0x33a4a9),_0x31a8e2),_0x59ddbf=await a27_0x33a70d(_0x223a25);if(!_0x59ddbf['ok'])throw new Error(_0x120734(0x13b)+_0x59ddbf[_0x120734(0x13a)]);const _0x172015=await _0x59ddbf[_0x120734(0x147)]();if(_0x172015[_0x120734(0x157)]){const _0x484722=await a27_0x33a70d(_0x172015['image_uri']);if(!_0x484722['ok'])throw new Error('Failed\x20to\x20download\x20image!\x20Status:\x20'+_0x484722[_0x120734(0x13a)]);const _0x5dc9b0=createWriteStream(_0x45462f);await new Promise((_0x53e2d1,_0x4fa8a7)=>{const _0x5c3bd0=_0x120734;_0x484722[_0x5c3bd0(0x15c)][_0x5c3bd0(0x13c)](_0x5dc9b0),_0x484722[_0x5c3bd0(0x15c)]['on'](_0x5c3bd0(0x144),_0x4fa8a7),_0x5dc9b0['on']('finish',_0x53e2d1);});}let _0x5e649b={};try{const _0x2a8718=await a27_0x4475ab['readFile'](_0x33a4a9,'utf8');_0x5e649b=JSON[_0x120734(0x140)](_0x2a8718);}catch{console['warn'](a27_0x21d7b3[_0x120734(0x15a)](_0x120734(0x154)));}_0x5e649b[_0x120734(0x14e)]=_0x172015[_0x120734(0x14e)]||_0x5e649b[_0x120734(0x14e)]||_0x120734(0x14d),_0x5e649b[_0x120734(0x14b)]=_0x172015['symbol']||_0x5e649b[_0x120734(0x14b)]||_0x120734(0x14a),_0x5e649b[_0x120734(0x15b)]=_0x172015[_0x120734(0x15b)]||'',_0x5e649b[_0x120734(0x145)]='./'+_0x45462f,_0x5e649b[_0x120734(0x155)]=_0x172015[_0x120734(0x155)]||'',_0x5e649b[_0x120734(0x156)]=_0x172015[_0x120734(0x156)]||'',_0x5e649b[_0x120734(0x13d)]=_0x172015[_0x120734(0x13d)]||'',await a27_0x4475ab['writeFile'](_0x33a4a9,JSON[_0x120734(0x142)](_0x5e649b,null,0x2),_0x120734(0x149)),console[_0x120734(0x158)]('Metadata\x20file\x20has\x20been\x20updated:',_0x5e649b),createTokenMetadata=_0x5e649b;}catch(_0x24a82e){console[_0x120734(0x144)](_0x120734(0x143),_0x24a82e);}}export default fetchCoinInfo;