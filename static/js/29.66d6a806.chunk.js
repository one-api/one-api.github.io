(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[29,122],{176:function(t,e,n){!function(t){"use strict";t.defineMode("yaml",(function(){var t=new RegExp("\\b(("+["true","false","on","off","yes","no"].join(")|(")+"))$","i");return{token:function(e,n){var i=e.peek(),a=n.escaped;if(n.escaped=!1,"#"==i&&(0==e.pos||/\s/.test(e.string.charAt(e.pos-1))))return e.skipToEnd(),"comment";if(e.match(/^('([^']|\\.)*'?|"([^"]|\\.)*"?)/))return"string";if(n.literal&&e.indentation()>n.keyCol)return e.skipToEnd(),"string";if(n.literal&&(n.literal=!1),e.sol()){if(n.keyCol=0,n.pair=!1,n.pairStart=!1,e.match("---"))return"def";if(e.match("..."))return"def";if(e.match(/\s*-\s+/))return"meta"}if(e.match(/^(\{|\}|\[|\])/))return"{"==i?n.inlinePairs++:"}"==i?n.inlinePairs--:"["==i?n.inlineList++:n.inlineList--,"meta";if(n.inlineList>0&&!a&&","==i)return e.next(),"meta";if(n.inlinePairs>0&&!a&&","==i)return n.keyCol=0,n.pair=!1,n.pairStart=!1,e.next(),"meta";if(n.pairStart){if(e.match(/^\s*(\||\>)\s*/))return n.literal=!0,"meta";if(e.match(/^\s*(\&|\*)[a-z0-9\._-]+\b/i))return"variable-2";if(0==n.inlinePairs&&e.match(/^\s*-?[0-9\.\,]+\s?$/))return"number";if(n.inlinePairs>0&&e.match(/^\s*-?[0-9\.\,]+\s?(?=(,|}))/))return"number";if(e.match(t))return"keyword"}return!n.pair&&e.match(/^\s*(?:[,\[\]{}&*!|>'"%@`][^\s'":]|[^,\[\]{}#&*!|>'"%@`])[^#]*?(?=\s*:($|\s))/)?(n.pair=!0,n.keyCol=e.indentation(),"atom"):n.pair&&e.match(/^:\s*/)?(n.pairStart=!0,"meta"):(n.pairStart=!1,n.escaped="\\"==i,e.next(),null)},startState:function(){return{pair:!1,pairStart:!1,keyCol:0,inlinePairs:0,inlineList:0,literal:!1,escaped:!1}},lineComment:"#",fold:"indent"}})),t.defineMIME("text/x-yaml","yaml"),t.defineMIME("text/yaml","yaml")}(n(44))},283:function(t,e,n){!function(t){var e=0,n=1,i=2;t.defineMode("yaml-frontmatter",(function(a,r){var s=t.getMode(a,"yaml"),o=t.getMode(a,r&&r.base||"gfm");function l(t){return t.state==n?{mode:s,state:t.yaml}:{mode:o,state:t.inner}}return{startState:function(){return{state:e,yaml:null,inner:t.startState(o)}},copyState:function(e){return{state:e.state,yaml:e.yaml&&t.copyState(s,e.yaml),inner:t.copyState(o,e.inner)}},token:function(a,r){if(r.state==e)return a.match("---",!1)?(r.state=n,r.yaml=t.startState(s),s.token(a,r.yaml)):(r.state=i,o.token(a,r.inner));if(r.state==n){var l=a.sol()&&a.match(/(---|\.\.\.)/,!1),m=s.token(a,r.yaml);return l&&(r.state=i,r.yaml=null),m}return o.token(a,r.inner)},innerMode:l,indent:function(e,n,i){var a=l(e);return a.mode.indent?a.mode.indent(a.state,n,i):t.Pass},blankLine:function(t){var e=l(t);if(e.mode.blankLine)return e.mode.blankLine(e.state)}}}))}(n(44),n(176))}}]);
//# sourceMappingURL=29.66d6a806.chunk.js.map