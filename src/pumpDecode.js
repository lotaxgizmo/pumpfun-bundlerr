function a13_0x374b(){const _0x25cca6=['1354986UtqbDh','confirmed','toString','utf8','realSolReserves','./config.json','13166847ZcepgG','Error\x20Parsing\x20Data,\x20Likely\x20RPC\x20Issue.','appendFileSync','32YaXBaq','843815kvNwnU','getAccountInfo','2sSihrC','tokenTotalSupply','realTokenReserves','1393336NRyYwf','virtualTokenReserves','38715CPDiTA','114888HzJAbP','546588yAiUcB','virtualSolReserves','Connection','10UvHwir','parse','readFileSync','from','An\x20error\x20occurred,\x20check\x20logs.txt\x20for\x20more\x20information.','deserialize','log','WS_URL','Error\x20occurred:\x20'];a13_0x374b=function(){return _0x25cca6;};return a13_0x374b();}(function(_0x253e8b,_0x719eac){const _0x3afd2e=a13_0x1136,_0x2f6dbb=_0x253e8b();while(!![]){try{const _0x5722e=-parseInt(_0x3afd2e(0x1c1))/0x1*(-parseInt(_0x3afd2e(0x1a8))/0x2)+-parseInt(_0x3afd2e(0x1b5))/0x3+-parseInt(_0x3afd2e(0x1c4))/0x4+-parseInt(_0x3afd2e(0x1a7))/0x5+parseInt(_0x3afd2e(0x1a9))/0x6+-parseInt(_0x3afd2e(0x1bf))/0x7*(parseInt(_0x3afd2e(0x1be))/0x8)+-parseInt(_0x3afd2e(0x1bb))/0x9*(-parseInt(_0x3afd2e(0x1ac))/0xa);if(_0x5722e===_0x719eac)break;else _0x2f6dbb['push'](_0x2f6dbb['shift']());}catch(_0x496454){_0x2f6dbb['push'](_0x2f6dbb['shift']());}}}(a13_0x374b,0x5c8aa));import*as a13_0x397cdc from'@solana/web3.js';function a13_0x1136(_0x176885,_0x7930dc){const _0x374b08=a13_0x374b();return a13_0x1136=function(_0x11363c,_0x599c1b){_0x11363c=_0x11363c-0x1a6;let _0x21cfa0=_0x374b08[_0x11363c];return _0x21cfa0;},a13_0x1136(_0x176885,_0x7930dc);}import{BondingCurveLayout}from'./PUMP_LAYOUT.js';import a13_0x4a9af5 from'fs';async function GPA(_0x372814){const _0x2590a5=a13_0x1136,_0x289525=JSON[_0x2590a5(0x1ad)](a13_0x4a9af5[_0x2590a5(0x1ae)](_0x2590a5(0x1ba),_0x2590a5(0x1b8))),_0x4d6d34=_0x289525['RPC_URL'],_0x16688f=_0x289525[_0x2590a5(0x1b3)],_0x2ad4f2=new a13_0x397cdc[(_0x2590a5(0x1ab))](_0x4d6d34,{'commitment':_0x2590a5(0x1b6),'wsEndpoint':_0x16688f});try{const _0x527de1=new a13_0x397cdc['PublicKey'](_0x372814),_0x45fd5b=await _0x2ad4f2[_0x2590a5(0x1c0)](_0x527de1,{'commitment':_0x2590a5(0x1b6)});if(_0x45fd5b===null)throw new Error(_0x2590a5(0x1bc));const _0x5eb54d=Buffer[_0x2590a5(0x1af)](_0x45fd5b['data'])['slice'](0x8),_0x4ded6b=BondingCurveLayout[_0x2590a5(0x1b1)](_0x5eb54d),_0x42346c=_0x4ded6b[_0x2590a5(0x1a6)][_0x2590a5(0x1b7)](),_0x3d8b51=_0x4ded6b[_0x2590a5(0x1aa)][_0x2590a5(0x1b7)](),_0x5ab2cd=_0x4ded6b[_0x2590a5(0x1c3)][_0x2590a5(0x1b7)](),_0x34e983=_0x4ded6b[_0x2590a5(0x1b9)][_0x2590a5(0x1b7)](),_0xdbd639=_0x4ded6b[_0x2590a5(0x1c2)]['toString'](),_0x5ec886=_0x42346c/0xa**0x6,_0xbbc7ed=_0x3d8b51/0xa**0x9,_0x775204=_0xbbc7ed/_0x5ec886;return{'vTokenReserve':_0x42346c,'vSolReserve':_0x3d8b51,'rTokenReserves':_0x5ab2cd,'rSolReserves':_0x34e983,'tokenTotalSupply':_0xdbd639,'adjustedVTokenReserve':_0x5ec886,'adjustedVSolReserve':_0xbbc7ed,'virtualTokenPrice':_0x775204};}catch(_0x44d7b9){const _0x2bd197='./logs.txt',_0x131672=_0x2590a5(0x1b4)+(_0x44d7b9['message']||_0x44d7b9)+'\x0a';a13_0x4a9af5[_0x2590a5(0x1bd)](_0x2bd197,_0x131672),console[_0x2590a5(0x1b2)](_0x2590a5(0x1b0));throw _0x44d7b9;}}export default GPA;