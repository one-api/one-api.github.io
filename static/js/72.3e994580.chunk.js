(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[72],{228:function(t,r,e){!function(t){"use strict";var r={mscgen:{keywords:["msc"],options:["hscale","width","arcgradient","wordwraparcs"],constants:["true","false","on","off"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},xu:{keywords:["msc","xu"],options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:["label","idurl","id","url","linecolor","linecolour","textcolor","textcolour","textbgcolor","textbgcolour","arclinecolor","arclinecolour","arctextcolor","arctextcolour","arctextbgcolor","arctextbgcolour","arcskip","title","deactivate","activate","activation"],brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]},msgenny:{keywords:null,options:["hscale","width","arcgradient","wordwraparcs","wordwrapentities","watermark"],constants:["true","false","on","off","auto"],attributes:null,brackets:["\\{","\\}"],arcsWords:["note","abox","rbox","box","alt","else","opt","break","par","seq","strict","neg","critical","ignore","consider","assert","loop","ref","exc"],arcsOthers:["\\|\\|\\|","\\.\\.\\.","---","--","<->","==","<<=>>","<=>","\\.\\.","<<>>","::","<:>","->","=>>","=>",">>",":>","<-","<<=","<=","<<","<:","x-","-x"],singlecomment:["//","#"],operators:["="]}};function e(t){return new RegExp("^\\b(?:"+t.join("|")+")\\b","i")}function n(t){return new RegExp("^(?:"+t.join("|")+")","i")}function o(){return{inComment:!1,inString:!1,inAttributeList:!1,inScript:!1}}function i(t){return{inComment:t.inComment,inString:t.inString,inAttributeList:t.inAttributeList,inScript:t.inScript}}function c(t){return function(r,o){if(r.match(n(t.brackets),!0,!0))return"bracket";if(!o.inComment){if(r.match(/\/\*[^\*\/]*/,!0,!0))return o.inComment=!0,"comment";if(r.match(n(t.singlecomment),!0,!0))return r.skipToEnd(),"comment"}if(o.inComment)return r.match(/[^\*\/]*\*\//,!0,!0)?o.inComment=!1:r.skipToEnd(),"comment";if(!o.inString&&r.match(/\"(\\\"|[^\"])*/,!0,!0))return o.inString=!0,"string";if(o.inString)return r.match(/[^\"]*\"/,!0,!0)?o.inString=!1:r.skipToEnd(),"string";if(t.keywords&&r.match(e(t.keywords),!0,!0))return"keyword";if(r.match(e(t.options),!0,!0))return"keyword";if(r.match(e(t.arcsWords),!0,!0))return"keyword";if(r.match(n(t.arcsOthers),!0,!0))return"keyword";if(t.operators&&r.match(n(t.operators),!0,!0))return"operator";if(t.constants&&r.match(n(t.constants),!0,!0))return"variable";if(!t.inAttributeList&&t.attributes&&r.match("[",!0,!0))return t.inAttributeList=!0,"bracket";if(t.inAttributeList){if(null!==t.attributes&&r.match(e(t.attributes),!0,!0))return"attribute";if(r.match("]",!0,!0))return t.inAttributeList=!1,"bracket"}return r.next(),"base"}}t.defineMode("mscgen",(function(t,e){return{startState:o,copyState:i,token:c(r[e&&e.language||"mscgen"]),lineComment:"#",blockCommentStart:"/*",blockCommentEnd:"*/"}})),t.defineMIME("text/x-mscgen","mscgen"),t.defineMIME("text/x-xu",{name:"mscgen",language:"xu"}),t.defineMIME("text/x-msgenny",{name:"mscgen",language:"msgenny"})}(e(44))}}]);
//# sourceMappingURL=72.3e994580.chunk.js.map