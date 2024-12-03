import{j as ye}from"./jsx-runtime-CfatFE5O.js";import{r as I,a as Te}from"./index-ClcD9ViR.js";var Fr=e=>e?"":void 0,Dr=e=>e?"true":void 0,Lr=2147483647,rt=1,nt=9,at=11,ee=e=>typeof e=="object"&&e!==null,st=e=>ee(e)&&e.nodeType===rt&&typeof e.nodeName=="string",De=e=>ee(e)&&e.nodeType===nt,it=e=>ee(e)&&e===e.window,ot=e=>ee(e)&&e.nodeType!==void 0,ct=e=>ot(e)&&e.nodeType===at&&"host"in e;function ft(e){return De(e)?e:it(e)?e.document:(e==null?void 0:e.ownerDocument)??document}function ut(e){var t;return ct(e)?ut(e.host):De(e)?e.defaultView??window:st(e)?((t=e.ownerDocument)==null?void 0:t.defaultView)??window:window}function dt(e){let t=e.activeElement;for(;t!=null&&t.shadowRoot;){const r=t.shadowRoot.activeElement;if(r===t)break;t=r}return t}var Le=()=>typeof document<"u";function lt(){const e=navigator.userAgentData;return(e==null?void 0:e.platform)??navigator.platform}var ht=e=>Le()&&e.test(lt()),yt=e=>Le()&&e.test(navigator.vendor),Wr=()=>pt()&&yt(/apple/i),pt=()=>ht(/mac|iphone|ipad|ipod/i),ve=e=>e.id;function mt(e,t,r=ve){return e.find(n=>r(n)===t)}function xe(e,t,r=ve){const n=mt(e,t,r);return n?e.indexOf(n):-1}function Vr(e,t,r=!0){let n=xe(e,t);return n=r?(n+1)%e.length:Math.min(n+1,e.length-1),e[n]}function Br(e,t,r=!0){let n=xe(e,t);return n===-1?r?e[e.length-1]:null:(n=r?(n-1+e.length)%e.length:Math.max(0,n-1),e[n])}var bt=e=>e.split("").map(t=>{const r=t.charCodeAt(0);return r>0&&r<128?t:r>=128&&r<=255?`/x${r.toString(16)}`.replace("/","\\"):""}).join("").trim(),gt=e=>bt(e.dataset.valuetext??e.textContent??""),vt=(e,t)=>e.trim().toLowerCase().startsWith(t.toLowerCase()),xt=(e,t)=>e.map((r,n)=>e[(Math.max(t,0)+n)%e.length]);function wt(e,t,r,n=ve){const a=r?xe(e,r,n):-1;let s=r?xt(e,a):e;return t.length===1&&(s=s.filter(o=>n(o)!==r)),s.find(o=>vt(gt(o),t))}function St(e,t){const{state:r,activeId:n,key:a,timeout:s=350,itemToId:i}=t,o=r.keysSoFar+a,f=o.length>1&&Array.from(o).every(v=>v===o[0])?o[0]:o;let u=e.slice();const h=wt(u,f,n,i);function $(){clearTimeout(r.timer),r.timer=-1}function A(v){r.keysSoFar=v,$(),v!==""&&(r.timer=+setTimeout(()=>{A(""),$()},s))}return A(o),h}var Gr=Object.assign(St,{defaultOptions:{keysSoFar:"",timer:-1},isValidEvent:Ct});function Ct(e){return e.key.length===1&&!e.ctrlKey&&!e.metaKey}var we=e=>typeof e=="object"&&e!==null&&e.nodeType===1,$t=e=>we(e)&&e.tagName==="IFRAME";function At(e){return we(e)?e.offsetWidth>0||e.offsetHeight>0||e.getClientRects().length>0:!1}var We="input:not([type='hidden']):not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href], button:not([disabled]), [tabindex], iframe, object, embed, area[href], audio[controls], video[controls], [contenteditable]:not([contenteditable='false']), details > summary:first-of-type",Et=(e,t=!1)=>{if(!e)return[];const r=Array.from(e.querySelectorAll(We));(t==!0||t=="if-empty"&&r.length===0)&&we(e)&&Re(e)&&r.unshift(e);const a=r.filter(Re);return a.forEach((s,i)=>{if($t(s)&&s.contentDocument){const o=s.contentDocument.body;a.splice(i,1,...Et(o))}}),a};function Re(e){return!e||e.closest("[inert]")?!1:e.matches(We)&&At(e)}function qr(e,t){return Array.from((e==null?void 0:e.querySelectorAll(t))??[])}function Kr(e,t){return(e==null?void 0:e.querySelector(t))??null}function zr(e){const t={getRootNode:r=>{var n;return((n=r.getRootNode)==null?void 0:n.call(r))??document},getDoc:r=>ft(t.getRootNode(r)),getWin:r=>t.getDoc(r).defaultView??window,getActiveElement:r=>dt(t.getRootNode(r)),isActiveElement:(r,n)=>n===t.getActiveElement(r),getById:(r,n)=>t.getRootNode(r).getElementById(n),setValue:(r,n)=>{if(r==null||n==null)return;const a=n.toString();r.value!==a&&(r.value=n.toString())}};return{...t,...e}}const Hr=(...e)=>e.filter(Boolean).map(t=>t.trim()).join(" ");function kt(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var Tt=!1;function Rt(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function Ot(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Mt=function(){function e(r){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!Tt:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(n){n.forEach(this._insertTag)},t.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Ot(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Rt(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},t.flush=function(){this.tags.forEach(function(n){var a;return(a=n.parentNode)==null?void 0:a.removeChild(n)}),this.tags=[],this.ctr=0},e}(),C="-ms-",Q="-moz-",d="-webkit-",Ve="comm",Se="rule",Ce="decl",_t="@import",Be="@keyframes",Pt="@layer",Nt=Math.abs,te=String.fromCharCode,It=Object.assign;function jt(e,t){return w(e,0)^45?(((t<<2^w(e,0))<<2^w(e,1))<<2^w(e,2))<<2^w(e,3):0}function Ge(e){return e.trim()}function Ft(e,t){return(e=t.exec(e))?e[0]:e}function l(e,t,r){return e.replace(t,r)}function me(e,t){return e.indexOf(t)}function w(e,t){return e.charCodeAt(t)|0}function G(e,t,r){return e.slice(t,r)}function _(e){return e.length}function $e(e){return e.length}function Z(e,t){return t.push(e),e}function Dt(e,t){return e.map(t).join("")}var re=1,W=1,qe=0,k=0,g=0,V="";function ne(e,t,r,n,a,s,i){return{value:e,root:t,parent:r,type:n,props:a,children:s,line:re,column:W,length:i,return:""}}function B(e,t){return It(ne("",null,null,"",null,null,0),e,{length:-e.length},t)}function Lt(){return g}function Wt(){return g=k>0?w(V,--k):0,W--,g===10&&(W=1,re--),g}function T(){return g=k<qe?w(V,k++):0,W++,g===10&&(W=1,re++),g}function N(){return w(V,k)}function U(){return k}function z(e,t){return G(V,e,t)}function q(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ke(e){return re=W=1,qe=_(V=e),k=0,[]}function ze(e){return V="",e}function Y(e){return Ge(z(k-1,be(e===91?e+2:e===40?e+1:e)))}function Vt(e){for(;(g=N())&&g<33;)T();return q(e)>2||q(g)>3?"":" "}function Bt(e,t){for(;--t&&T()&&!(g<48||g>102||g>57&&g<65||g>70&&g<97););return z(e,U()+(t<6&&N()==32&&T()==32))}function be(e){for(;T();)switch(g){case e:return k;case 34:case 39:e!==34&&e!==39&&be(g);break;case 40:e===41&&be(e);break;case 92:T();break}return k}function Gt(e,t){for(;T()&&e+g!==57;)if(e+g===84&&N()===47)break;return"/*"+z(t,k-1)+"*"+te(e===47?e:T())}function qt(e){for(;!q(N());)T();return z(e,k)}function Kt(e){return ze(X("",null,null,null,[""],e=Ke(e),0,[0],e))}function X(e,t,r,n,a,s,i,o,c){for(var f=0,u=0,h=i,$=0,A=0,v=0,m=1,E=1,b=1,S=0,O="",H=a,j=s,M=n,p=O;E;)switch(v=S,S=T()){case 40:if(v!=108&&w(p,h-1)==58){me(p+=l(Y(S),"&","&\f"),"&\f")!=-1&&(b=-1);break}case 34:case 39:case 91:p+=Y(S);break;case 9:case 10:case 13:case 32:p+=Vt(v);break;case 92:p+=Bt(U()-1,7);continue;case 47:switch(N()){case 42:case 47:Z(zt(Gt(T(),U()),t,r),c);break;default:p+="/"}break;case 123*m:o[f++]=_(p)*b;case 125*m:case 59:case 0:switch(S){case 0:case 125:E=0;case 59+u:b==-1&&(p=l(p,/\f/g,"")),A>0&&_(p)-h&&Z(A>32?Me(p+";",n,r,h-1):Me(l(p," ","")+";",n,r,h-2),c);break;case 59:p+=";";default:if(Z(M=Oe(p,t,r,f,u,a,o,O,H=[],j=[],h),s),S===123)if(u===0)X(p,t,M,M,H,s,h,o,j);else switch($===99&&w(p,3)===110?100:$){case 100:case 108:case 109:case 115:X(e,M,M,n&&Z(Oe(e,M,M,0,0,a,o,O,a,H=[],h),j),a,j,h,o,n?H:j);break;default:X(p,M,M,M,[""],j,0,o,j)}}f=u=A=0,m=b=1,O=p="",h=i;break;case 58:h=1+_(p),A=v;default:if(m<1){if(S==123)--m;else if(S==125&&m++==0&&Wt()==125)continue}switch(p+=te(S),S*m){case 38:b=u>0?1:(p+="\f",-1);break;case 44:o[f++]=(_(p)-1)*b,b=1;break;case 64:N()===45&&(p+=Y(T())),$=N(),u=h=_(O=p+=qt(U())),S++;break;case 45:v===45&&_(p)==2&&(m=0)}}return s}function Oe(e,t,r,n,a,s,i,o,c,f,u){for(var h=a-1,$=a===0?s:[""],A=$e($),v=0,m=0,E=0;v<n;++v)for(var b=0,S=G(e,h+1,h=Nt(m=i[v])),O=e;b<A;++b)(O=Ge(m>0?$[b]+" "+S:l(S,/&\f/g,$[b])))&&(c[E++]=O);return ne(e,t,r,a===0?Se:o,c,f,u)}function zt(e,t,r){return ne(e,t,r,Ve,te(Lt()),G(e,2,-2),0)}function Me(e,t,r,n){return ne(e,t,r,Ce,G(e,0,n),G(e,n+1,-1),n)}function L(e,t){for(var r="",n=$e(e),a=0;a<n;a++)r+=t(e[a],a,e,t)||"";return r}function Ht(e,t,r,n){switch(e.type){case Pt:if(e.children.length)break;case _t:case Ce:return e.return=e.return||e.value;case Ve:return"";case Be:return e.return=e.value+"{"+L(e.children,n)+"}";case Se:e.value=e.props.join(",")}return _(r=L(e.children,n))?e.return=e.value+"{"+r+"}":""}function Zt(e){var t=$e(e);return function(r,n,a,s){for(var i="",o=0;o<t;o++)i+=e[o](r,n,a,s)||"";return i}}function Ut(e){return function(t){t.root||(t=t.return)&&e(t)}}var Yt=function(t,r,n){for(var a=0,s=0;a=s,s=N(),a===38&&s===12&&(r[n]=1),!q(s);)T();return z(t,k)},Xt=function(t,r){var n=-1,a=44;do switch(q(a)){case 0:a===38&&N()===12&&(r[n]=1),t[n]+=Yt(k-1,r,n);break;case 2:t[n]+=Y(a);break;case 4:if(a===44){t[++n]=N()===58?"&\f":"",r[n]=t[n].length;break}default:t[n]+=te(a)}while(a=T());return t},Jt=function(t,r){return ze(Xt(Ke(t),r))},_e=new WeakMap,Qt=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var r=t.value,n=t.parent,a=t.column===n.column&&t.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(t.props.length===1&&r.charCodeAt(0)!==58&&!_e.get(n))&&!a){_e.set(t,!0);for(var s=[],i=Jt(r,s),o=n.props,c=0,f=0;c<i.length;c++)for(var u=0;u<o.length;u++,f++)t.props[f]=s[c]?i[c].replace(/&\f/g,o[u]):o[u]+" "+i[c]}}},er=function(t){if(t.type==="decl"){var r=t.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(t.return="",t.value="")}};function He(e,t){switch(jt(e,t)){case 5103:return d+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return d+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return d+e+Q+e+C+e+e;case 6828:case 4268:return d+e+C+e+e;case 6165:return d+e+C+"flex-"+e+e;case 5187:return d+e+l(e,/(\w+).+(:[^]+)/,d+"box-$1$2"+C+"flex-$1$2")+e;case 5443:return d+e+C+"flex-item-"+l(e,/flex-|-self/,"")+e;case 4675:return d+e+C+"flex-line-pack"+l(e,/align-content|flex-|-self/,"")+e;case 5548:return d+e+C+l(e,"shrink","negative")+e;case 5292:return d+e+C+l(e,"basis","preferred-size")+e;case 6060:return d+"box-"+l(e,"-grow","")+d+e+C+l(e,"grow","positive")+e;case 4554:return d+l(e,/([^-])(transform)/g,"$1"+d+"$2")+e;case 6187:return l(l(l(e,/(zoom-|grab)/,d+"$1"),/(image-set)/,d+"$1"),e,"")+e;case 5495:case 3959:return l(e,/(image-set\([^]*)/,d+"$1$`$1");case 4968:return l(l(e,/(.+:)(flex-)?(.*)/,d+"box-pack:$3"+C+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+d+e+e;case 4095:case 3583:case 4068:case 2532:return l(e,/(.+)-inline(.+)/,d+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(e)-1-t>6)switch(w(e,t+1)){case 109:if(w(e,t+4)!==45)break;case 102:return l(e,/(.+:)(.+)-([^]+)/,"$1"+d+"$2-$3$1"+Q+(w(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~me(e,"stretch")?He(l(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(w(e,t+1)!==115)break;case 6444:switch(w(e,_(e)-3-(~me(e,"!important")&&10))){case 107:return l(e,":",":"+d)+e;case 101:return l(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+d+(w(e,14)===45?"inline-":"")+"box$3$1"+d+"$2$3$1"+C+"$2box$3")+e}break;case 5936:switch(w(e,t+11)){case 114:return d+e+C+l(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return d+e+C+l(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return d+e+C+l(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return d+e+C+e+e}return e}var tr=function(t,r,n,a){if(t.length>-1&&!t.return)switch(t.type){case Ce:t.return=He(t.value,t.length);break;case Be:return L([B(t,{value:l(t.value,"@","@"+d)})],a);case Se:if(t.length)return Dt(t.props,function(s){switch(Ft(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return L([B(t,{props:[l(s,/:(read-\w+)/,":"+Q+"$1")]})],a);case"::placeholder":return L([B(t,{props:[l(s,/:(plac\w+)/,":"+d+"input-$1")]}),B(t,{props:[l(s,/:(plac\w+)/,":"+Q+"$1")]}),B(t,{props:[l(s,/:(plac\w+)/,C+"input-$1")]})],a)}return""})}},rr=[tr],nr=function(t){var r=t.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(m){var E=m.getAttribute("data-emotion");E.indexOf(" ")!==-1&&(document.head.appendChild(m),m.setAttribute("data-s",""))})}var a=t.stylisPlugins||rr,s={},i,o=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(m){for(var E=m.getAttribute("data-emotion").split(" "),b=1;b<E.length;b++)s[E[b]]=!0;o.push(m)});var c,f=[Qt,er];{var u,h=[Ht,Ut(function(m){u.insert(m)})],$=Zt(f.concat(a,h)),A=function(E){return L(Kt(E),$)};c=function(E,b,S,O){u=S,A(E?E+"{"+b.styles+"}":b.styles),O&&(v.inserted[b.name]=!0)}}var v={key:r,sheet:new Mt({key:r,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:s,registered:{},insert:c};return v.sheet.hydrate(o),v},Ze={exports:{}},y={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=typeof Symbol=="function"&&Symbol.for,Ae=x?Symbol.for("react.element"):60103,Ee=x?Symbol.for("react.portal"):60106,ae=x?Symbol.for("react.fragment"):60107,se=x?Symbol.for("react.strict_mode"):60108,ie=x?Symbol.for("react.profiler"):60114,oe=x?Symbol.for("react.provider"):60109,ce=x?Symbol.for("react.context"):60110,ke=x?Symbol.for("react.async_mode"):60111,fe=x?Symbol.for("react.concurrent_mode"):60111,ue=x?Symbol.for("react.forward_ref"):60112,de=x?Symbol.for("react.suspense"):60113,ar=x?Symbol.for("react.suspense_list"):60120,le=x?Symbol.for("react.memo"):60115,he=x?Symbol.for("react.lazy"):60116,sr=x?Symbol.for("react.block"):60121,ir=x?Symbol.for("react.fundamental"):60117,or=x?Symbol.for("react.responder"):60118,cr=x?Symbol.for("react.scope"):60119;function R(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Ae:switch(e=e.type,e){case ke:case fe:case ae:case ie:case se:case de:return e;default:switch(e=e&&e.$$typeof,e){case ce:case ue:case he:case le:case oe:return e;default:return t}}case Ee:return t}}}function Ue(e){return R(e)===fe}y.AsyncMode=ke;y.ConcurrentMode=fe;y.ContextConsumer=ce;y.ContextProvider=oe;y.Element=Ae;y.ForwardRef=ue;y.Fragment=ae;y.Lazy=he;y.Memo=le;y.Portal=Ee;y.Profiler=ie;y.StrictMode=se;y.Suspense=de;y.isAsyncMode=function(e){return Ue(e)||R(e)===ke};y.isConcurrentMode=Ue;y.isContextConsumer=function(e){return R(e)===ce};y.isContextProvider=function(e){return R(e)===oe};y.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ae};y.isForwardRef=function(e){return R(e)===ue};y.isFragment=function(e){return R(e)===ae};y.isLazy=function(e){return R(e)===he};y.isMemo=function(e){return R(e)===le};y.isPortal=function(e){return R(e)===Ee};y.isProfiler=function(e){return R(e)===ie};y.isStrictMode=function(e){return R(e)===se};y.isSuspense=function(e){return R(e)===de};y.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ae||e===fe||e===ie||e===se||e===de||e===ar||typeof e=="object"&&e!==null&&(e.$$typeof===he||e.$$typeof===le||e.$$typeof===oe||e.$$typeof===ce||e.$$typeof===ue||e.$$typeof===ir||e.$$typeof===or||e.$$typeof===cr||e.$$typeof===sr)};y.typeOf=R;Ze.exports=y;var fr=Ze.exports,Ye=fr,ur={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},dr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Xe={};Xe[Ye.ForwardRef]=ur;Xe[Ye.Memo]=dr;var lr=!0;function Zr(e,t,r){var n="";return r.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):a&&(n+=a+" ")}),n}var hr=function(t,r,n){var a=t.key+"-"+r.name;(n===!1||lr===!1)&&t.registered[a]===void 0&&(t.registered[a]=r.styles)},yr=function(t,r,n){hr(t,r,n);var a=t.key+"-"+r.name;if(t.inserted[r.name]===void 0){var s=r;do t.insert(r===s?"."+a:"",s,t.sheet,!0),s=s.next;while(s!==void 0)}};function pr(e){for(var t=0,r,n=0,a=e.length;a>=4;++n,a-=4)r=e.charCodeAt(n)&255|(e.charCodeAt(++n)&255)<<8|(e.charCodeAt(++n)&255)<<16|(e.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,t=(r&65535)*1540483477+((r>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(n+2)&255)<<16;case 2:t^=(e.charCodeAt(n+1)&255)<<8;case 1:t^=e.charCodeAt(n)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var mr={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},br=!1,gr=/[A-Z]|^ms/g,vr=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Je=function(t){return t.charCodeAt(1)===45},Pe=function(t){return t!=null&&typeof t!="boolean"},pe=kt(function(e){return Je(e)?e:e.replace(gr,"-$&").toLowerCase()}),Ne=function(t,r){switch(t){case"animation":case"animationName":if(typeof r=="string")return r.replace(vr,function(n,a,s){return P={name:a,styles:s,next:P},a})}return mr[t]!==1&&!Je(t)&&typeof r=="number"&&r!==0?r+"px":r},xr="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function K(e,t,r){if(r==null)return"";var n=r;if(n.__emotion_styles!==void 0)return n;switch(typeof r){case"boolean":return"";case"object":{var a=r;if(a.anim===1)return P={name:a.name,styles:a.styles,next:P},a.name;var s=r;if(s.styles!==void 0){var i=s.next;if(i!==void 0)for(;i!==void 0;)P={name:i.name,styles:i.styles,next:P},i=i.next;var o=s.styles+";";return o}return wr(e,t,r)}case"function":{if(e!==void 0){var c=P,f=r(e);return P=c,K(e,t,f)}break}}var u=r;if(t==null)return u;var h=t[u];return h!==void 0?h:u}function wr(e,t,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=K(e,t,r[a])+";";else for(var s in r){var i=r[s];if(typeof i!="object"){var o=i;t!=null&&t[o]!==void 0?n+=s+"{"+t[o]+"}":Pe(o)&&(n+=pe(s)+":"+Ne(s,o)+";")}else{if(s==="NO_COMPONENT_SELECTOR"&&br)throw new Error(xr);if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var c=0;c<i.length;c++)Pe(i[c])&&(n+=pe(s)+":"+Ne(s,i[c])+";");else{var f=K(e,t,i);switch(s){case"animation":case"animationName":{n+=pe(s)+":"+f+";";break}default:n+=s+"{"+f+"}"}}}}return n}var Ie=/label:\s*([^\s;{]+)\s*(;|$)/g,P;function Sr(e,t,r){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var n=!0,a="";P=void 0;var s=e[0];if(s==null||s.raw===void 0)n=!1,a+=K(r,t,s);else{var i=s;a+=i[0]}for(var o=1;o<e.length;o++)if(a+=K(r,t,e[o]),n){var c=s;a+=c[o]}Ie.lastIndex=0;for(var f="",u;(u=Ie.exec(a))!==null;)f+="-"+u[1];var h=pr(a)+f;return{name:h,styles:a,next:P}}var Cr=function(t){return t()},Qe=Te.useInsertionEffect?Te.useInsertionEffect:!1,Ur=Qe||Cr,je=Qe||I.useLayoutEffect,et=I.createContext(typeof HTMLElement<"u"?nr({key:"css"}):null);et.Provider;var $r=function(t){return I.forwardRef(function(r,n){var a=I.useContext(et);return t(r,a,n)})},Ar=I.createContext({}),Fe=$r(function(e,t){var r=e.styles,n=Sr([r],void 0,I.useContext(Ar)),a=I.useRef();return je(function(){var s=t.key+"-global",i=new t.sheet.constructor({key:s,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),o=!1,c=document.querySelector('style[data-emotion="'+s+" "+n.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),c!==null&&(o=!0,c.setAttribute("data-emotion",s),i.hydrate([c])),a.current=[i,o],function(){i.flush()}},[t]),je(function(){var s=a.current,i=s[0],o=s[1];if(o){s[1]=!1;return}if(n.next!==void 0&&yr(t,n.next,!0),i.tags.length){var c=i.tags[i.tags.length-1].nextElementSibling;i.before=c,i.flush()}t.insert("",n,i,!1)},[t,n.name]),null});function Yr(e){const t=Object.assign({},e);for(let r in t)t[r]===void 0&&delete t[r];return t}function Er(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function kr(e={}){const{name:t,strict:r=!0,hookName:n="useContext",providerName:a="Provider",errorMessage:s,defaultValue:i}=e,o=I.createContext(i);o.displayName=t;function c(){var u;const f=I.useContext(o);if(!f&&r){const h=new Error(s??Er(n,a));throw h.name="ContextError",(u=Error.captureStackTrace)==null||u.call(Error,h,c),h}return f}return[o.Provider,c,o]}const[Tr,Xr]=kr({name:"ChakraContext",strict:!0,providerName:"<ChakraProvider />"});function Jr(e){const{value:t,children:r}=e;return ye.jsxs(Tr,{value:t,children:[!t._config.disableLayers&&ye.jsx(Fe,{styles:t.layers.atRule}),ye.jsx(Fe,{styles:[t.getPreflightCss(),t.getGlobalCss(),t.getTokenCss()]}),r]})}const Qr=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n=Object.keys(r),a=i=>{const o={};for(let c=0;c<i.length;c++){const f=i[c];r[f]&&(Object.defineProperty(o,f,r[f]),delete r[f])}return o},s=i=>a(Array.isArray(i)?i:n.filter(i));return[t].map(s).concat(a(n))};function F(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function en(e){return Object.prototype.toString.call(e)==="[object String]"}function tn(e){return typeof e=="function"}function ge(e,t){if(t==null)return e;for(const r of Object.keys(t))if(!(t[r]===void 0||r==="__proto__"))if(!F(e[r])&&F(t[r]))Object.assign(e,{[r]:t[r]});else if(e[r]&&F(t[r]))ge(e[r],t[r]);else if(Array.isArray(t[r])&&Array.isArray(e[r])){let n=0;for(;n<t[r].length;n++)F(e[r][n])&&F(t[r][n])?ge(e[r][n],t[r][n]):e[r][n]=t[r][n]}else Object.assign(e,{[r]:t[r]});return e}function Rr(e,...t){for(const r of t)ge(e,r);return e}const rn=e=>e,nn=e=>e,an=e=>e,sn=e=>e,on=e=>e,cn=e=>e,fn=e=>e,un=e=>e,dn=e=>e;function tt(){const e=t=>t;return new Proxy(e,{get(){return e}})}const ln=tt(),hn=tt(),yn=e=>e,pn=(...e)=>Rr({},...e),Or=e=>e!=null;function Mr(e,t,r={}){const{stop:n,getKey:a}=r;function s(i,o=[]){if(F(i)||Array.isArray(i)){const c={};for(const[f,u]of Object.entries(i)){const h=(a==null?void 0:a(f,u))??f,$=[...o,h];if(n!=null&&n(i,$))return t(i,o);const A=s(u,$);Or(A)&&(c[h]=A)}return c}return t(i,o)}return s(e)}function mn(e,t){return Array.isArray(e)?e.map(r=>t(r)):F(e)?Mr(e,r=>t(r)):e!=null?t(e):e}var J=(e,t=[])=>({parts:(...r)=>{if(_r(t))return J(e,r);throw new Error("createAnatomy().parts(...) should only be called once. Did you mean to use .extendWith(...) ?")},extendWith:(...r)=>J(e,[...t,...r]),rename:r=>J(r,t),keys:()=>t,build:()=>[...new Set(t)].reduce((r,n)=>Object.assign(r,{[n]:{selector:[`&[data-scope="${D(e)}"][data-part="${D(n)}"]`,`& [data-scope="${D(e)}"][data-part="${D(n)}"]`].join(", "),attrs:{"data-scope":D(e),"data-part":D(n)}}}),{})}),D=e=>e.replace(/([A-Z])([A-Z])/g,"$1-$2").replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[\s_]+/g,"-").toLowerCase(),_r=e=>e.length===0,bn=e=>e[0],gn=e=>e[e.length-1],vn=(...e)=>(...t)=>{e.forEach(function(r){r==null||r(...t)})},xn=e=>typeof e=="string",Pr=Function.prototype.toString;Pr.call(Object);const Nr=J("field").parts("root","errorText","helperText","input","label","select","textarea"),wn=Nr.build();export{tn as A,pn as B,on as C,dn as D,un as E,nn as F,hn as G,J as H,zr as I,qr as J,bn as K,gn as L,Vr as M,Br as N,Gr as O,st as P,Et as Q,Kr as R,Wr as S,Ar as T,Lr as U,Nr as V,an as W,fn as X,ln as Y,sn as Z,Jr as _,Hr as a,Sr as b,Yr as c,Ur as d,vn as e,xn as f,Zr as g,ut as h,yr as i,Fr as j,Dr as k,kr as l,kt as m,mn as n,cn as o,wn as p,yn as q,hr as r,Qr as s,rn as t,Xr as u,Mr as v,$r as w,F as x,en as y,Rr as z};