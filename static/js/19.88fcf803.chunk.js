(this["webpackJsonpapi-client"]=this["webpackJsonpapi-client"]||[]).push([[19],{250:function(e,n,t){!function(e){"use strict";e.defineMode("twig:inner",(function(){var e=["and","as","autoescape","endautoescape","block","do","endblock","else","elseif","extends","for","endfor","embed","endembed","filter","endfilter","flush","from","if","endif","in","is","include","import","not","or","set","spaceless","endspaceless","with","endwith","trans","endtrans","blocktrans","endblocktrans","macro","endmacro","use","verbatim","endverbatim"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,i=["true","false","null","empty","defined","divisibleby","divisible by","even","odd","iterable","sameas","same as"],r=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function a(a,o){var s=a.peek();if(o.incomment)return a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(o.intag){if(o.operator){if(o.operator=!1,a.match(i))return"atom";if(a.match(r))return"number"}if(o.sign){if(o.sign=!1,a.match(i))return"atom";if(a.match(r))return"number"}if(o.instring)return s==o.instring&&(o.instring=!1),a.next(),"string";if("'"==s||'"'==s)return o.instring=s,a.next(),"string";if(a.match(o.intag+"}")||a.eat("-")&&a.match(o.intag+"}"))return o.intag=!1,"tag";if(a.match(n))return o.operator=!0,"operator";if(a.match(t))o.sign=!0;else if(a.eat(" ")||a.sol()){if(a.match(e))return"keyword";if(a.match(i))return"atom";if(a.match(r))return"number";a.sol()&&a.next()}else a.next();return"variable"}if(a.eat("{")){if(a.eat("#"))return o.incomment=!0,a.skipTo("#}")?(a.eatWhile(/\#|}/),o.incomment=!1):a.skipToEnd(),"comment";if(s=a.eat(/\{|%/))return o.intag=s,"{"==s&&(o.intag="}"),a.eat("-"),"tag"}a.next()}return e=new RegExp("(("+e.join(")|(")+"))\\b"),i=new RegExp("(("+i.join(")|(")+"))\\b"),{startState:function(){return{}},token:function(e,n){return a(e,n)}}})),e.defineMode("twig",(function(n,t){var i=e.getMode(n,"twig:inner");return t&&t.base?e.multiplexingMode(e.getMode(n,t.base),{open:/\{[{#%]/,close:/[}#%]\}/,mode:i,parseDelimiters:!0}):i})),e.defineMIME("text/x-twig","twig")}(t(41),t(337))},337:function(e,n,t){!function(e){"use strict";e.multiplexingMode=function(n){var t=Array.prototype.slice.call(arguments,1);function i(e,n,t,i){if("string"==typeof n){var r=e.indexOf(n,t);return i&&r>-1?r+n.length:r}var a=n.exec(t?e.slice(t):e);return a?a.index+t+(i?a[0].length:0):-1}return{startState:function(){return{outer:e.startState(n),innerActive:null,inner:null,startingInner:!1}},copyState:function(t){return{outer:e.copyState(n,t.outer),innerActive:t.innerActive,inner:t.innerActive&&e.copyState(t.innerActive.mode,t.inner),startingInner:t.startingInner}},token:function(r,a){if(a.innerActive){var o=a.innerActive;if(l=r.string,!o.close&&r.sol())return a.innerActive=a.inner=null,this.token(r,a);if((m=o.close&&!a.startingInner?i(l,o.close,r.pos,o.parseDelimiters):-1)==r.pos&&!o.parseDelimiters)return r.match(o.close),a.innerActive=a.inner=null,o.delimStyle&&o.delimStyle+" "+o.delimStyle+"-close";m>-1&&(r.string=l.slice(0,m));var s=o.mode.token(r,a.inner);return m>-1?r.string=l:r.pos>r.start&&(a.startingInner=!1),m==r.pos&&o.parseDelimiters&&(a.innerActive=a.inner=null),o.innerStyle&&(s=s?s+" "+o.innerStyle:o.innerStyle),s}for(var c=1/0,l=r.string,u=0;u<t.length;++u){var m,d=t[u];if((m=i(l,d.open,r.pos))==r.pos){d.parseDelimiters||r.match(d.open),a.startingInner=!!d.parseDelimiters,a.innerActive=d;var f=0;if(n.indent){var p=n.indent(a.outer,"","");p!==e.Pass&&(f=p)}return a.inner=e.startState(d.mode,f),d.delimStyle&&d.delimStyle+" "+d.delimStyle+"-open"}-1!=m&&m<c&&(c=m)}c!=1/0&&(r.string=l.slice(0,c));var g=n.token(r,a.outer);return c!=1/0&&(r.string=l),g},indent:function(t,i,r){var a=t.innerActive?t.innerActive.mode:n;return a.indent?a.indent(t.innerActive?t.inner:t.outer,i,r):e.Pass},blankLine:function(i){var r=i.innerActive?i.innerActive.mode:n;if(r.blankLine&&r.blankLine(i.innerActive?i.inner:i.outer),i.innerActive)"\n"===i.innerActive.close&&(i.innerActive=i.inner=null);else for(var a=0;a<t.length;++a){var o=t[a];"\n"===o.open&&(i.innerActive=o,i.inner=e.startState(o.mode,r.indent?r.indent(i.outer,"",""):0))}},electricChars:n.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:n}}}}}(t(41))}}]);
//# sourceMappingURL=19.88fcf803.chunk.js.map