'use strict';const a3_0x3f3af2=a3_0x4fa2;(function(_0x149ac5,_0x10738f){const _0xd35881=a3_0x4fa2,_0x536af6=_0x149ac5();while(!![]){try{const _0x1627ab=parseInt(_0xd35881(0x13f))/0x1*(parseInt(_0xd35881(0x125))/0x2)+-parseInt(_0xd35881(0x132))/0x3+-parseInt(_0xd35881(0x139))/0x4+parseInt(_0xd35881(0x134))/0x5+parseInt(_0xd35881(0x127))/0x6*(parseInt(_0xd35881(0x137))/0x7)+parseInt(_0xd35881(0x13c))/0x8*(-parseInt(_0xd35881(0x135))/0x9)+parseInt(_0xd35881(0x13e))/0xa;if(_0x1627ab===_0x10738f)break;else _0x536af6['push'](_0x536af6['shift']());}catch(_0x43fa6d){_0x536af6['push'](_0x536af6['shift']());}}}(a3_0x46ad,0x75296));function a3_0x46ad(){const _0x1c62c2=['type','getLength','encode','name','fields','Unknown\x20field\x20type\x20','1705950PqSogR','reduce','2916405bNPbVZ','369zIdCKf','push','12320DhpmlP','floor','503988UkGDgR','writeUInt32LE','u32','99520qpSgat','nameToField','3831190kBRyLu','1gUtFyY','Object\x20does\x20not\x20contain\x20','alloc','forEach','331082WcIPeR','writeUInt8','1884cWsRTq','addField','u64','f64','writeDoubleLE'];a3_0x46ad=function(){return _0x1c62c2;};return a3_0x46ad();}export var FieldType;(function(_0x4af074){const _0x824a01=a3_0x4fa2;_0x4af074[_0x4af074['u8']=0x0]='u8',_0x4af074[_0x4af074['u32']=0x1]=_0x824a01(0x13b),_0x4af074[_0x4af074['u64']=0x2]='u64',_0x4af074[_0x4af074[_0x824a01(0x12a)]=0x3]=_0x824a01(0x12a);}(FieldType||(FieldType={})));function a3_0x4fa2(_0x680825,_0x2eb885){const _0x46adf7=a3_0x46ad();return a3_0x4fa2=function(_0x4fa22d,_0x14ff8c){_0x4fa22d=_0x4fa22d-0x123;let _0x3e2a4b=_0x46adf7[_0x4fa22d];return _0x3e2a4b;},a3_0x4fa2(_0x680825,_0x2eb885);}export const TYPE_TO_LENGTH={[FieldType['u8']]:0x1,[FieldType[a3_0x3f3af2(0x13b)]]:0x4,[FieldType[a3_0x3f3af2(0x129)]]:0x8,[FieldType[a3_0x3f3af2(0x12a)]]:0x8};class FieldDecl{constructor(_0x14d0a3,_0x44cc1a){const _0x4d7250=a3_0x3f3af2;this['name']=_0x14d0a3,this[_0x4d7250(0x12c)]=_0x44cc1a;}['getLength'](){const _0x4c3cdf=a3_0x3f3af2;return TYPE_TO_LENGTH[this[_0x4c3cdf(0x12c)]];}}export class Parser{constructor(_0x1c4034=[]){const _0x3822f7=a3_0x3f3af2;this['fields']=[],this['nameToField']={},_0x1c4034[_0x3822f7(0x124)](_0x38f6dd=>this['addField'](_0x38f6dd));}[a3_0x3f3af2(0x128)](_0x28f712){const _0x3f9488=a3_0x3f3af2;if(_0x28f712['name']in this[_0x3f9488(0x13d)])throw new Error(_0x28f712[_0x3f9488(0x12f)]+'\x20already\x20present\x20in\x20struct');this[_0x3f9488(0x130)][_0x3f9488(0x136)](_0x28f712),this[_0x3f9488(0x13d)][_0x28f712[_0x3f9488(0x12f)]]=_0x28f712;}['u8'](_0x24bd7a){return this['addField'](new FieldDecl(_0x24bd7a,FieldType['u8'])),this;}[a3_0x3f3af2(0x13b)](_0x28a614){const _0x5a0ef0=a3_0x3f3af2;return this[_0x5a0ef0(0x128)](new FieldDecl(_0x28a614,FieldType[_0x5a0ef0(0x13b)])),this;}[a3_0x3f3af2(0x129)](_0x393555){const _0x3cfc8a=a3_0x3f3af2;return this[_0x3cfc8a(0x128)](new FieldDecl(_0x393555,FieldType['u64'])),this;}[a3_0x3f3af2(0x12a)](_0x3e3e4e){const _0x3caf82=a3_0x3f3af2;return this[_0x3caf82(0x128)](new FieldDecl(_0x3e3e4e,FieldType['f64'])),this;}['getLength'](){const _0x564f04=a3_0x3f3af2;return this['fields'][_0x564f04(0x133)]((_0x15d4b2,_0x558303)=>_0x15d4b2+_0x558303[_0x564f04(0x12d)](),0x0);}[a3_0x3f3af2(0x12e)](_0x169048){const _0x1ab376=a3_0x3f3af2;let _0x53e3dc=Buffer[_0x1ab376(0x123)](this[_0x1ab376(0x12d)]()),_0x2ecb7a=0x0;for(let _0x5b6103 of this[_0x1ab376(0x130)]){if(!(_0x5b6103[_0x1ab376(0x12f)]in _0x169048))throw new Error(_0x1ab376(0x140)+_0x5b6103[_0x1ab376(0x12f)]);let _0x46fc2a=_0x169048[_0x5b6103[_0x1ab376(0x12f)]];switch(_0x5b6103[_0x1ab376(0x12c)]){case FieldType['u8']:_0x53e3dc[_0x1ab376(0x126)](_0x46fc2a,_0x2ecb7a);break;case FieldType[_0x1ab376(0x13b)]:_0x53e3dc[_0x1ab376(0x13a)](_0x46fc2a,_0x2ecb7a);break;case FieldType[_0x1ab376(0x129)]:_0x53e3dc[_0x1ab376(0x13a)](_0x46fc2a%0x100000000,_0x2ecb7a),_0x53e3dc['writeUInt32LE'](Math[_0x1ab376(0x138)](_0x46fc2a/0x100000000),_0x2ecb7a+0x4);break;case FieldType[_0x1ab376(0x12a)]:_0x53e3dc[_0x1ab376(0x12b)](_0x46fc2a,_0x2ecb7a);break;default:throw new Error(_0x1ab376(0x131)+_0x5b6103[_0x1ab376(0x12c)]);}_0x2ecb7a+=_0x5b6103[_0x1ab376(0x12d)]();}return _0x53e3dc;}}