'use strict';const a1_0x5afc60=a1_0x1258;(function(_0x5da412,_0xed3671){const _0x48e0a3=a1_0x1258,_0x3b2f35=_0x5da412();while(!![]){try{const _0x40f6d9=-parseInt(_0x48e0a3(0x1a0))/0x1+parseInt(_0x48e0a3(0x1a8))/0x2*(parseInt(_0x48e0a3(0x193))/0x3)+-parseInt(_0x48e0a3(0x1a7))/0x4*(parseInt(_0x48e0a3(0x18b))/0x5)+-parseInt(_0x48e0a3(0x195))/0x6*(parseInt(_0x48e0a3(0x190))/0x7)+-parseInt(_0x48e0a3(0x1a1))/0x8+-parseInt(_0x48e0a3(0x1a4))/0x9+parseInt(_0x48e0a3(0x19a))/0xa*(parseInt(_0x48e0a3(0x194))/0xb);if(_0x40f6d9===_0xed3671)break;else _0x3b2f35['push'](_0x3b2f35['shift']());}catch(_0x300552){_0x3b2f35['push'](_0x3b2f35['shift']());}}}(a1_0x4421,0xe1d5c));function a1_0x1258(_0x526646,_0x48a253){const _0x442100=a1_0x4421();return a1_0x1258=function(_0x1258cf,_0x3cba6e){_0x1258cf=_0x1258cf-0x189;let _0x2e3ee2=_0x442100[_0x1258cf];return _0x2e3ee2;},a1_0x1258(_0x526646,_0x48a253);}Object[a1_0x5afc60(0x18d)](exports,a1_0x5afc60(0x1a5),{'value':!![]}),exports[a1_0x5afc60(0x191)]=void 0x0;const borsh_1=require(a1_0x5afc60(0x189));class BondingCurveAccount{[a1_0x5afc60(0x18f)];[a1_0x5afc60(0x1a3)];[a1_0x5afc60(0x198)];[a1_0x5afc60(0x192)];[a1_0x5afc60(0x18c)];[a1_0x5afc60(0x18e)];[a1_0x5afc60(0x197)];constructor(_0x6d380,_0x3c61e6,_0x46b6a9,_0x37b4e6,_0x1afa02,_0x57dc83,_0x21008d){const _0x81eebf=a1_0x5afc60;this['discriminator']=_0x6d380,this[_0x81eebf(0x1a3)]=_0x3c61e6,this[_0x81eebf(0x198)]=_0x46b6a9,this[_0x81eebf(0x192)]=_0x37b4e6,this[_0x81eebf(0x18c)]=_0x1afa02,this[_0x81eebf(0x18e)]=_0x57dc83,this[_0x81eebf(0x197)]=_0x21008d;}[a1_0x5afc60(0x196)](_0x51d339){const _0xe61e06=a1_0x5afc60;if(this[_0xe61e06(0x197)])throw new Error(_0xe61e06(0x1a6));if(_0x51d339<=0x0n)return 0x0n;let _0x519adf=this[_0xe61e06(0x198)]*this['virtualTokenReserves'],_0x38f4f0=this[_0xe61e06(0x198)]+_0x51d339,_0x5f4f95=_0x519adf/_0x38f4f0+0x1n,_0x58bad0=this[_0xe61e06(0x1a3)]-_0x5f4f95;return _0x58bad0<this[_0xe61e06(0x192)]?_0x58bad0:this[_0xe61e06(0x192)];}[a1_0x5afc60(0x19f)](_0x45e381,_0x420f64){const _0x4e067c=a1_0x5afc60;if(this[_0x4e067c(0x197)])throw new Error(_0x4e067c(0x1a6));if(_0x45e381<=0x0n)return 0x0n;let _0x444032=_0x45e381*this[_0x4e067c(0x198)]/(this[_0x4e067c(0x1a3)]+_0x45e381),_0x35ecf0=_0x444032*_0x420f64/0x2710n;return _0x444032-_0x35ecf0;}['getMarketCapSOL'](){const _0x5b4bdf=a1_0x5afc60;if(this[_0x5b4bdf(0x1a3)]===0x0n)return 0x0n;return this[_0x5b4bdf(0x18e)]*this[_0x5b4bdf(0x198)]/this[_0x5b4bdf(0x1a3)];}[a1_0x5afc60(0x1a2)](_0x3f0f29){const _0x5c4416=a1_0x5afc60;let _0x3d3f52=this[_0x5c4416(0x18a)](this[_0x5c4416(0x192)],_0x3f0f29),_0x5308bf=this[_0x5c4416(0x198)]+_0x3d3f52,_0x52b574=this[_0x5c4416(0x1a3)]-this['realTokenReserves'];if(_0x52b574===0x0n)return 0x0n;return this[_0x5c4416(0x18e)]*_0x5308bf/_0x52b574;}[a1_0x5afc60(0x18a)](_0x4b8621,_0x4066c1){const _0x3f2936=a1_0x5afc60;let _0x49cf41=_0x4b8621<this['realSolReserves']?this[_0x3f2936(0x18c)]:_0x4b8621,_0x23429=_0x49cf41*this[_0x3f2936(0x198)]/(this[_0x3f2936(0x1a3)]-_0x49cf41)+0x1n,_0x4785ca=_0x23429*_0x4066c1/0x2710n;return _0x23429+_0x4785ca;}static[a1_0x5afc60(0x19e)](_0x5ba26b){const _0x188ad4=a1_0x5afc60,_0x265bb6=(0x0,borsh_1[_0x188ad4(0x19c)])([(0x0,borsh_1[_0x188ad4(0x19b)])('discriminator'),(0x0,borsh_1[_0x188ad4(0x19b)])(_0x188ad4(0x1a3)),(0x0,borsh_1['u64'])('virtualSolReserves'),(0x0,borsh_1['u64'])(_0x188ad4(0x192)),(0x0,borsh_1[_0x188ad4(0x19b)])('realSolReserves'),(0x0,borsh_1[_0x188ad4(0x19b)])(_0x188ad4(0x18e)),(0x0,borsh_1[_0x188ad4(0x199)])('complete')]);let _0x186219=_0x265bb6[_0x188ad4(0x19d)](_0x5ba26b);return new BondingCurveAccount(BigInt(_0x186219[_0x188ad4(0x18f)]),BigInt(_0x186219[_0x188ad4(0x1a3)]),BigInt(_0x186219['virtualSolReserves']),BigInt(_0x186219[_0x188ad4(0x192)]),BigInt(_0x186219[_0x188ad4(0x18c)]),BigInt(_0x186219[_0x188ad4(0x18e)]),_0x186219[_0x188ad4(0x197)]);}}function a1_0x4421(){const _0x424be5=['complete','virtualSolReserves','bool','2080uxTZTD','u64','struct','decode','fromBuffer','getSellPrice','1443725OPjoNI','13579160xalPRS','getFinalMarketCapSOL','virtualTokenReserves','8694711hqldna','__esModule','Curve\x20is\x20complete','124YMtyRe','858776iDGGIk','@coral-xyz/borsh','getBuyOutPrice','146155BHpBWX','realSolReserves','defineProperty','tokenTotalSupply','discriminator','51198XzKzlJ','BondingCurveAccount','realTokenReserves','12YlpiPZ','236368ZXNlpI','204ZaWRAa','getBuyPrice'];a1_0x4421=function(){return _0x424be5;};return a1_0x4421();}exports['BondingCurveAccount']=BondingCurveAccount;