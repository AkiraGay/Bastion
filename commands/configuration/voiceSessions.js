const a39_0x2c8a=['categories','../../models/Guild','fetchPremiumTier','catch','exec','voiceSessions\x20--create','getString','channels','../../utils/omnic','PREMIUM_MEMBERSHIP_REQUIRED','default','➕\x20New\x20Voice\x20Channel','@bastion/tesseract','document','create','voiceSessionCreate','tag','return\x20/\x22\x20+\x20this\x20+\x20\x22/','send','It\x20allows\x20you\x20manage\x20Voice\x20Sessions\x20(or\x20Temporary\x20Voice\x20Channels,\x20if\x20you\x20prefer),\x20in\x20the\x20server.','../../utils/errors','CREATE_INSTANT_INVITE','premiumVoiceSessions','category','exports','voiceSessions','constructor','BASTION_ERROR_TYPE','Sessional\x20Channels','isPublicBastion','Command','info','locale','language','MANAGE_GUILD','client','GREEN','guild','findByIdAndUpdate','name','../../utils/constants','errors','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','DiscordError'];(function(_0x112d84,_0x2c8af5){const _0x2d2f1f=function(_0x673416){while(--_0x673416){_0x112d84['push'](_0x112d84['shift']());}},_0x8c51d0=function(){const _0x55d00e={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4df8a8,_0x19fbad,_0x15e10e,_0x21e77f){_0x21e77f=_0x21e77f||{};let _0x511b18=_0x19fbad+'='+_0x15e10e,_0x343340=0x0;for(let _0x3fae15=0x0,_0x2dd8c5=_0x4df8a8['length'];_0x3fae15<_0x2dd8c5;_0x3fae15++){const _0x2530db=_0x4df8a8[_0x3fae15];_0x511b18+=';\x20'+_0x2530db;const _0x5adf7e=_0x4df8a8[_0x2530db];_0x4df8a8['push'](_0x5adf7e),_0x2dd8c5=_0x4df8a8['length'],_0x5adf7e!==!![]&&(_0x511b18+='='+_0x5adf7e);}_0x21e77f['cookie']=_0x511b18;},'removeCookie':function(){return'dev';},'getCookie':function(_0x25cc60,_0x3bf44f){_0x25cc60=_0x25cc60||function(_0x33f22e){return _0x33f22e;};const _0x17c500=_0x25cc60(new RegExp('(?:^|;\x20)'+_0x3bf44f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x32c1e9=function(_0x12237c,_0xdc46ae){_0x12237c(++_0xdc46ae);};return _0x32c1e9(_0x2d2f1f,_0x2c8af5),_0x17c500?decodeURIComponent(_0x17c500[0x1]):undefined;}},_0x22f9ac=function(){const _0xcaf0ef=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0xcaf0ef['test'](_0x55d00e['removeCookie']['toString']());};_0x55d00e['updateCookie']=_0x22f9ac;let _0xfe5d67='';const _0x59fe51=_0x55d00e['updateCookie']();if(!_0x59fe51)_0x55d00e['setCookie'](['*'],'counter',0x1);else _0x59fe51?_0xfe5d67=_0x55d00e['getCookie'](null,'counter'):_0x55d00e['removeCookie']();};_0x8c51d0();}(a39_0x2c8a,0xac));const a39_0x2d2f=function(_0x112d84,_0x2c8af5){_0x112d84=_0x112d84-0x0;let _0x2d2f1f=a39_0x2c8a[_0x112d84];return _0x2d2f1f;};const a39_0x15e10e=function(){let _0x2678cf=!![];return function(_0x34ed8a,_0x4cc551){const _0x49f012=_0x2678cf?function(){if(_0x4cc551){const _0x32f12a=_0x4cc551['apply'](_0x34ed8a,arguments);return _0x4cc551=null,_0x32f12a;}}:function(){};return _0x2678cf=![],_0x49f012;};}(),a39_0x19fbad=a39_0x15e10e(this,function(){const _0x4600f7=function(){const _0x241dee=_0x4600f7[a39_0x2d2f('0x1e')](a39_0x2d2f('0x15'))()[a39_0x2d2f('0x1e')](a39_0x2d2f('0x2'));return!_0x241dee['test'](a39_0x19fbad);};return _0x4600f7();});a39_0x19fbad();'use strict';const tesseract_1=require(a39_0x2d2f('0x10')),Guild_1=require(a39_0x2d2f('0x5')),constants=require(a39_0x2d2f('0x0')),errors=require(a39_0x2d2f('0x18')),omnic=require(a39_0x2d2f('0xc'));module[a39_0x2d2f('0x1c')]=class VoiceSessionsCommand extends tesseract_1[a39_0x2d2f('0x22')]{constructor(){super(a39_0x2d2f('0x1d'),{'description':a39_0x2d2f('0x17'),'triggers':[],'arguments':{'boolean':[a39_0x2d2f('0x12')]},'scope':'guild','owner':![],'cooldown':0x0,'ratelimit':0x1,'clientPermissions':['MANAGE_CHANNELS'],'userPermissions':[a39_0x2d2f('0x26')],'syntax':[a39_0x2d2f('0x9')]}),this[a39_0x2d2f('0x8')]=async(_0x59dc21,_0x302f45)=>{if(constants[a39_0x2d2f('0x21')](this[a39_0x2d2f('0x27')]['user'])){const _0x4557db=await omnic[a39_0x2d2f('0x6')](_0x59dc21[a39_0x2d2f('0x29')])['catch'](()=>{});if(!_0x4557db)throw new errors[(a39_0x2d2f('0x3'))](errors[a39_0x2d2f('0x1f')][a39_0x2d2f('0xd')],this[a39_0x2d2f('0x27')][a39_0x2d2f('0x24')][a39_0x2d2f('0xa')](_0x59dc21[a39_0x2d2f('0x29')][a39_0x2d2f('0x11')][a39_0x2d2f('0x25')],a39_0x2d2f('0x1'),a39_0x2d2f('0x1a')));}if(_0x302f45[a39_0x2d2f('0x12')]){const _0x2fdd26=await _0x59dc21[a39_0x2d2f('0x29')][a39_0x2d2f('0xb')][a39_0x2d2f('0x12')](a39_0x2d2f('0x20'),{'type':a39_0x2d2f('0x1b'),'permissionOverwrites':[{'id':_0x59dc21['guild']['id'],'allow':[a39_0x2d2f('0x19')]}]});await _0x59dc21[a39_0x2d2f('0x29')][a39_0x2d2f('0xb')][a39_0x2d2f('0x12')](a39_0x2d2f('0xf'),{'type':'voice','parent':_0x2fdd26});const _0x12d0cd=_0x59dc21[a39_0x2d2f('0x29')]['document']['voiceSessions']&&_0x59dc21[a39_0x2d2f('0x29')][a39_0x2d2f('0x11')][a39_0x2d2f('0x1d')][a39_0x2d2f('0x4')]?_0x59dc21[a39_0x2d2f('0x29')][a39_0x2d2f('0x11')][a39_0x2d2f('0x1d')][a39_0x2d2f('0x4')]['concat'](_0x2fdd26['id']):[_0x2fdd26['id']];return await Guild_1[a39_0x2d2f('0xe')][a39_0x2d2f('0x2a')](_0x59dc21['guild']['id'],{'voiceSessions':{'categories':_0x12d0cd}}),_0x59dc21['channel'][a39_0x2d2f('0x16')]({'embed':{'color':tesseract_1['Constants']['COLORS'][a39_0x2d2f('0x28')],'description':this[a39_0x2d2f('0x27')][a39_0x2d2f('0x24')][a39_0x2d2f('0xa')](_0x59dc21['guild'][a39_0x2d2f('0x11')][a39_0x2d2f('0x25')],a39_0x2d2f('0x23'),a39_0x2d2f('0x13'),_0x59dc21['author'][a39_0x2d2f('0x14')])}})[a39_0x2d2f('0x7')](()=>{});}throw new errors[(a39_0x2d2f('0x3'))](errors[a39_0x2d2f('0x1f')]['INVALID_COMMAND_SYNTAX'],this[a39_0x2d2f('0x2b')]);};}};