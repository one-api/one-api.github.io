(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[122],{154:function(t,i,e){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(i,e){var n=i.peek(),r=e.escaped;if(e.escaped=!1,"#"==n&&(0==i.pos||/\s/.test(i.string.charAt(i.pos-1))))return i.skipToEnd(),"comment";if(i.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(e.literal&&i.indentation()>e.keyCol)return i.skipToEnd(),"string";if(e.literal&&(e.literal=!1),i.sol()){if(e.keyCol=0,e.pair=!1,e.pairStart=!1,i.match("---"))return"def";if(i.match("..."))return"def";if(i.match(/\s*-\s+/))return"meta"}if(i.match(/^(\{|\}|\[|\])/))return"{"==n?e.inlinePairs++:"}"==n?e.inlinePairs--:"["==n?e.inlineList++:e.inlineList--,"meta";if(e.inlineList>0&&!r&&","==n)return i.next(),"meta";if(e.inlinePairs>0&&!r&&","==n)return e.keyCol=0,e.pair=!1,e.pairStart=!1,i.next(),"meta";if(e.pairStart){if(i.match(/^\s*(\||\>)\s*/))return e.literal=!0,"meta";if(i.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==e.inlinePairs&&i.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(e.inlinePairs>0&&i.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(i.match(t))return"keyword"}return!e.pair&&i.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(e.pair=!0,e.keyCol=i.indentation(),"atom"):e.pair&&i.match(/^:\s*/)?(e.pairStart=!0,"meta"):(e.pairStart=!1,e.escaped="\\"==n,i.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(e(41))}}]);
//# sourceMappingURL=122.fd2ba508.chunk.js.map