const a191_0x4910=['__esModule','constructor','default','defineProperty','Schema','Transaction','mongoose','apply','return\x20/\x22\x20+\x20this\x20+\x20\x22/','test','Guild'];(function(_0x51758a,_0x491020){const _0x15e5b5=function(_0x522ba8){while(--_0x522ba8){_0x51758a['push'](_0x51758a['shift']());}},_0x4bdc5c=function(){const _0x5a94d1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x368ae4,_0x51a5b8,_0x5b8c5f,_0x78beb2){_0x78beb2=_0x78beb2||{};let _0x2742f6=_0x51a5b8+'='+_0x5b8c5f,_0x1203a6=0x0;for(let _0x331d87=0x0,_0x569e1e=_0x368ae4['length'];_0x331d87<_0x569e1e;_0x331d87++){const _0x4fc535=_0x368ae4[_0x331d87];_0x2742f6+=';\x20'+_0x4fc535;const _0x27a500=_0x368ae4[_0x4fc535];_0x368ae4['push'](_0x27a500),_0x569e1e=_0x368ae4['length'],_0x27a500!==!![]&&(_0x2742f6+='='+_0x27a500);}_0x78beb2['cookie']=_0x2742f6;},'removeCookie':function(){return'dev';},'getCookie':function(_0xe84447,_0x3d80bf){_0xe84447=_0xe84447||function(_0x23daa5){return _0x23daa5;};const _0x230728=_0xe84447(new RegExp('(?:^|;\x20)'+_0x3d80bf['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x3a77f4=function(_0x2c16c3,_0x4f394d){_0x2c16c3(++_0x4f394d);};return _0x3a77f4(_0x15e5b5,_0x491020),_0x230728?decodeURIComponent(_0x230728[0x1]):undefined;}},_0x473440=function(){const _0x30bd4d=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x30bd4d['test'](_0x5a94d1['removeCookie']['toString']());};_0x5a94d1['updateCookie']=_0x473440;let _0x55faea='';const _0x48da19=_0x5a94d1['updateCookie']();if(!_0x48da19)_0x5a94d1['setCookie'](['*'],'counter',0x1);else _0x48da19?_0x55faea=_0x5a94d1['getCookie'](null,'counter'):_0x5a94d1['removeCookie']();};_0x4bdc5c();}(a191_0x4910,0x1ba));const a191_0x15e5=function(_0x51758a,_0x491020){_0x51758a=_0x51758a-0x0;let _0x15e5b5=a191_0x4910[_0x51758a];return _0x15e5b5;};const a191_0x5b8c5f=function(){let _0x28f791=!![];return function(_0x108796,_0x5a3151){const _0xe52a19=_0x28f791?function(){if(_0x5a3151){const _0x21c07a=_0x5a3151[a191_0x15e5('0x5')](_0x108796,arguments);return _0x5a3151=null,_0x21c07a;}}:function(){};return _0x28f791=![],_0xe52a19;};}(),a191_0x51a5b8=a191_0x5b8c5f(this,function(){const _0x128143=function(){const _0x2197e5=_0x128143[a191_0x15e5('0xa')](a191_0x15e5('0x6'))()['constructor']('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x2197e5[a191_0x15e5('0x7')](a191_0x51a5b8);};return _0x128143();});a191_0x51a5b8();'use strict';Object[a191_0x15e5('0x1')](exports,a191_0x15e5('0x9'),{'value':!![]});const mongoose=require(a191_0x15e5('0x4')),transactionSchema=new mongoose[(a191_0x15e5('0x2'))]({'guild':{'type':String,'required':!![],'ref':a191_0x15e5('0x8')},'sender':{'type':String,'required':!![]},'receiver':{'type':String,'required':!![]},'amount':{'type':Number,'required':!![]},'time':{'type':Date,'required':!![]},'note':{'type':String,'trim':!![]}});exports[a191_0x15e5('0x0')]=mongoose['model'](a191_0x15e5('0x3'),transactionSchema);