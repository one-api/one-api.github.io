(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[109],{268:function(t,n,e){!function(t){"use strict";t.defineMode("troff",(function(){var t={};function n(n){if(n.eatSpace())return null;var e=n.sol(),a=n.next();if("\\"===a)return n.match("fB")||n.match("fR")||n.match("fI")||n.match("u")||n.match("d")||n.match("%")||n.match("&")?"string":n.match("m[")?(n.skipTo("]"),n.next(),"string"):n.match("s+")||n.match("s-")?(n.eatWhile(/[\d-]/),"string"):n.match("(")||n.match("*(")?(n.eatWhile(/[\w-]/),"string"):"string";if(e&&("."===a||"'"===a)&&n.eat("\\")&&n.eat('"'))return n.skipToEnd(),"comment";if(e&&"."===a){if(n.match("B ")||n.match("I ")||n.match("R "))return"attribute";if(n.match("TH ")||n.match("SH ")||n.match("SS ")||n.match("HP "))return n.skipToEnd(),"quote";if(n.match(/[A-Z]/)&&n.match(/[A-Z]/)||n.match(/[a-z]/)&&n.match(/[a-z]/))return"attribute"}n.eatWhile(/[\w-]/);var r=n.current();return t.hasOwnProperty(r)?t[r]:null}function e(t,e){return(e.tokens[0]||n)(t,e)}return{startState:function(){return{tokens:[]}},token:function(t,n){return e(t,n)}}})),t.defineMIME("text/troff","troff"),t.defineMIME("text/x-troff","troff"),t.defineMIME("application/x-troff","troff")}(e(44))}}]);
//# sourceMappingURL=109.8cfcf4e6.chunk.js.map