(self.webpackChunkapi_client=self.webpackChunkapi_client||[]).push([[3317],{1357:(e,t,n)=>{!function(e){"use strict";e.overlayMode=function(t,n,a){return{startState:function(){return{base:e.startState(t),overlay:e.startState(n),basePos:0,baseCur:null,overlayPos:0,overlayCur:null,streamSeen:null}},copyState:function(a){return{base:e.copyState(t,a.base),overlay:e.copyState(n,a.overlay),basePos:a.basePos,baseCur:null,overlayPos:a.overlayPos,overlayCur:null}},token:function(e,o){return(e!=o.streamSeen||Math.min(o.basePos,o.overlayPos)<e.start)&&(o.streamSeen=e,o.basePos=o.overlayPos=e.start),e.start==o.basePos&&(o.baseCur=t.token(e,o.base),o.basePos=e.pos),e.start==o.overlayPos&&(e.pos=e.start,o.overlayCur=n.token(e,o.overlay),o.overlayPos=e.pos),e.pos=Math.min(o.basePos,o.overlayPos),null==o.overlayCur?o.baseCur:null!=o.baseCur&&o.overlay.combineTokens||a&&null==o.overlay.combineTokens?o.baseCur+" "+o.overlayCur:o.overlayCur},indent:t.indent&&function(e,n,a){return t.indent(e.base,n,a)},electricChars:t.electricChars,innerMode:function(e){return{state:e.base,mode:t}},blankLine:function(e){var o,r;return t.blankLine&&(o=t.blankLine(e.base)),n.blankLine&&(r=n.blankLine(e.overlay)),null==r?o:a&&null!=o?o+" "+r:r}}}}(n(3668))},3317:(e,t,n)=>{!function(e){"use strict";e.defineMode("tornado:inner",(function(){var e=["and","as","assert","autoescape","block","break","class","comment","context","continue","datetime","def","del","elif","else","end","escape","except","exec","extends","false","finally","for","from","global","if","import","in","include","is","json_encode","lambda","length","linkify","load","module","none","not","or","pass","print","put","raise","raw","return","self","set","squeeze","super","true","try","url_escape","while","with","without","xhtml_escape","yield"];function t(e,t){e.eatWhile(/[^\{]/);var a=e.next();if("{"==a&&(a=e.eat(/\{|%|#/)))return t.tokenize=n(a),"tag"}function n(n){return"{"==n&&(n="}"),function(a,o){return a.next()==n&&a.eat("}")?(o.tokenize=t,"tag"):a.match(e)?"keyword":"#"==n?"comment":"string"}}return e=new RegExp("^(("+e.join(")|(")+"))\\b"),{startState:function(){return{tokenize:t}},token:function(e,t){return t.tokenize(e,t)}}})),e.defineMode("tornado",(function(t){var n=e.getMode(t,"text/html"),a=e.getMode(t,"tornado:inner");return e.overlayMode(n,a)})),e.defineMIME("text/x-tornado","tornado")}(n(3668),n(2373),n(1357))}}]);
//# sourceMappingURL=3317.91816728.chunk.js.map