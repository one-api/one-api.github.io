(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[22],{181:function(e,t,n){!function(e){"use strict";e.defineSimpleMode("factor",{start:[{regex:/#?!.*/,token:"comment"},{regex:/"""/,token:"string",next:"string3"},{regex:/(STRING:)(\s)/,token:["keyword",null],next:"string2"},{regex:/\S*?"/,token:"string",next:"string"},{regex:/(?:0x[\d,a-f]+)|(?:0o[0-7]+)|(?:0b[0,1]+)|(?:\-?\d+.?\d*)(?=\s)/,token:"number"},{regex:/((?:GENERIC)|\:?\:)(\s+)(\S+)(\s+)(\()/,token:["keyword",null,"def",null,"bracket"],next:"stack"},{regex:/(M\:)(\s+)(\S+)(\s+)(\S+)/,token:["keyword",null,"def",null,"tag"]},{regex:/USING\:/,token:"keyword",next:"vocabulary"},{regex:/(USE\:|IN\:)(\s+)(\S+)(?=\s|$)/,token:["keyword",null,"tag"]},{regex:/(\S+\:)(\s+)(\S+)(?=\s|$)/,token:["keyword",null,"def"]},{regex:/(?:;|\\|t|f|if|loop|while|until|do|PRIVATE>|<PRIVATE|\.|\S*\[|\]|\S*\{|\})(?=\s|$)/,token:"keyword"},{regex:/\S+[\)>\.\*\?]+(?=\s|$)/,token:"builtin"},{regex:/[\)><]+\S+(?=\s|$)/,token:"builtin"},{regex:/(?:[\+\-\=\/\*<>])(?=\s|$)/,token:"keyword"},{regex:/\S+/,token:"variable"},{regex:/\s+|./,token:null}],vocabulary:[{regex:/;/,token:"keyword",next:"start"},{regex:/\S+/,token:"tag"},{regex:/\s+|./,token:null}],string:[{regex:/(?:[^\\]|\\.)*?"/,token:"string",next:"start"},{regex:/.*/,token:"string"}],string2:[{regex:/^;/,token:"keyword",next:"start"},{regex:/.*/,token:"string"}],string3:[{regex:/(?:[^\\]|\\.)*?"""/,token:"string",next:"start"},{regex:/.*/,token:"string"}],stack:[{regex:/\)/,token:"bracket",next:"start"},{regex:/--/,token:"bracket"},{regex:/\S+/,token:"meta"},{regex:/\s+|./,token:null}],meta:{dontIndentStates:["start","vocabulary","string","string3","stack"],lineComment:["!","#!"]}}),e.defineMIME("text/x-factor","factor")}(n(41),n(335))},335:function(e,t,n){!function(e){"use strict";function t(e,t){if(!e.hasOwnProperty(t))throw new Error("Undefined state "+t+" in simple mode")}function n(e,t){if(!e)return/(?:)/;var n="";return e instanceof RegExp?(e.ignoreCase&&(n="i"),e.unicode&&(n+="u"),e=e.source):e=String(e),new RegExp((!1===t?"":"^")+"(?:"+e+")",n)}function r(e){if(!e)return null;if(e.apply)return e;if("string"==typeof e)return e.replace(/\./g," ");for(var t=[],n=0;n<e.length;n++)t.push(e[n]&&e[n].replace(/\./g," "));return t}function a(e,a){(e.next||e.push)&&t(a,e.next||e.push),this.regex=n(e.regex),this.token=r(e.token),this.data=e}function o(e,t){return function(n,r){if(r.pending){var a=r.pending.shift();return 0==r.pending.length&&(r.pending=null),n.pos+=a.text.length,a.token}if(r.local){if(r.local.end&&n.match(r.local.end)){var o=r.local.endToken||null;return r.local=r.localState=null,o}var s;return o=r.local.mode.token(n,r.localState),r.local.endScan&&(s=r.local.endScan.exec(n.current()))&&(n.pos=n.start+s.index),o}for(var l=e[r.state],d=0;d<l.length;d++){var c=l[d],u=(!c.data.sol||n.sol())&&n.match(c.regex);if(u){c.data.next?r.state=c.data.next:c.data.push?((r.stack||(r.stack=[])).push(r.state),r.state=c.data.push):c.data.pop&&r.stack&&r.stack.length&&(r.state=r.stack.pop()),c.data.mode&&i(t,r,c.data.mode,c.token),c.data.indent&&r.indent.push(n.indentation()+t.indentUnit),c.data.dedent&&r.indent.pop();var g=c.token;if(g&&g.apply&&(g=g(u)),u.length>2&&c.token&&"string"!=typeof c.token){for(var p=2;p<u.length;p++)u[p]&&(r.pending||(r.pending=[])).push({text:u[p],token:c.token[p-1]});return n.backUp(u[0].length-(u[1]?u[1].length:0)),g[0]}return g&&g.join?g[0]:g}}return n.next(),null}}function s(e,t){if(e===t)return!0;if(!e||"object"!=typeof e||!t||"object"!=typeof t)return!1;var n=0;for(var r in e)if(e.hasOwnProperty(r)){if(!t.hasOwnProperty(r)||!s(e[r],t[r]))return!1;n++}for(var r in t)t.hasOwnProperty(r)&&n--;return 0==n}function i(t,r,a,o){var i;if(a.persistent)for(var l=r.persistentStates;l&&!i;l=l.next)(a.spec?s(a.spec,l.spec):a.mode==l.mode)&&(i=l);var d=i?i.mode:a.mode||e.getMode(t,a.spec),c=i?i.state:e.startState(d);a.persistent&&!i&&(r.persistentStates={mode:d,spec:a.spec,state:c,next:r.persistentStates}),r.localState=c,r.local={mode:d,end:a.end&&n(a.end),endScan:a.end&&!1!==a.forceEnd&&n(a.end,!1),endToken:o&&o.join?o[o.length-1]:o}}function l(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return!0}function d(t,n){return function(r,a,o){if(r.local&&r.local.mode.indent)return r.local.mode.indent(r.localState,a,o);if(null==r.indent||r.local||n.dontIndentStates&&l(r.state,n.dontIndentStates)>-1)return e.Pass;var s=r.indent.length-1,i=t[r.state];e:for(;;){for(var d=0;d<i.length;d++){var c=i[d];if(c.data.dedent&&!1!==c.data.dedentIfLineStart){var u=c.regex.exec(a);if(u&&u[0]){s--,(c.next||c.push)&&(i=t[c.next||c.push]),a=a.slice(u[0].length);continue e}}}break}return s<0?0:r.indent[s]}}e.defineSimpleMode=function(t,n){e.defineMode(t,(function(t){return e.simpleMode(t,n)}))},e.simpleMode=function(n,r){t(r,"start");var s={},i=r.meta||{},l=!1;for(var c in r)if(c!=i&&r.hasOwnProperty(c))for(var u=s[c]=[],g=r[c],p=0;p<g.length;p++){var f=g[p];u.push(new a(f,r)),(f.indent||f.dedent)&&(l=!0)}var k={startState:function(){return{state:"start",pending:null,local:null,localState:null,indent:l?[]:null}},copyState:function(t){var n={state:t.state,pending:t.pending,local:t.local,localState:null,indent:t.indent&&t.indent.slice(0)};t.localState&&(n.localState=e.copyState(t.local.mode,t.localState)),t.stack&&(n.stack=t.stack.slice(0));for(var r=t.persistentStates;r;r=r.next)n.persistentStates={mode:r.mode,spec:r.spec,state:r.state==t.localState?n.localState:e.copyState(r.mode,r.state),next:n.persistentStates};return n},token:o(s,n),innerMode:function(e){return e.local&&{mode:e.local.mode,state:e.localState}},indent:d(s,i)};if(i)for(var x in i)i.hasOwnProperty(x)&&(k[x]=i[x]);return k}}(n(41))}}]);
//# sourceMappingURL=22.a703ffa0.chunk.js.map