(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[68],{224:function(e,n,t){!function(e){"use strict";var n=["From","Sender","Reply-To","To","Cc","Bcc","Message-ID","In-Reply-To","References","Resent-From","Resent-Sender","Resent-To","Resent-Cc","Resent-Bcc","Resent-Message-ID","Return-Path","Received"],t=["Date","Subject","Comments","Keywords","Resent-Date"];e.registerHelper("hintWords","mbox",n.concat(t));var r=/^[ \t]/,a=/^From /,i=new RegExp("^("+n.join("|")+"): "),o=new RegExp("^("+t.join("|")+"): "),s=/^[^:]+:/,d=/^[^ ]+@[^ ]+/,c=/^.*?(?=[^ ]+?@[^ ]+)/,m=/^<.*?>/,u=/^.*?(?=<.*>)/;function l(e){return"Subject"===e?"header":"string"}function p(e,n){if(e.sol()){if(n.inSeparator=!1,n.inHeader&&e.match(r))return null;if(n.inHeader=!1,n.header=null,e.match(a))return n.inHeaders=!0,n.inSeparator=!0,"atom";var t,p=!1;return(t=e.match(o))||(p=!0)&&(t=e.match(i))?(n.inHeaders=!0,n.inHeader=!0,n.emailPermitted=p,n.header=t[1],"atom"):n.inHeaders&&(t=e.match(s))?(n.inHeader=!0,n.emailPermitted=!0,n.header=t[1],"atom"):(n.inHeaders=!1,e.skipToEnd(),null)}if(n.inSeparator)return e.match(d)?"link":(e.match(c)||e.skipToEnd(),"atom");if(n.inHeader){var h=l(n.header);if(n.emailPermitted){if(e.match(m))return h+" link";if(e.match(u))return h}return e.skipToEnd(),h}return e.skipToEnd(),null}e.defineMode("mbox",(function(){return{startState:function(){return{inSeparator:!1,inHeader:!1,emailPermitted:!1,header:null,inHeaders:!1}},token:p,blankLine:function(e){e.inHeaders=e.inSeparator=e.inHeader=!1}}})),e.defineMIME("application/mbox","mbox")}(t(44))}}]);
//# sourceMappingURL=68.6483082d.chunk.js.map