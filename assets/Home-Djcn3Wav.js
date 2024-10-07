import{o as de,r as br,N as Y,j as a,u as rt}from"./index-JtWq84iF.js";var P=function(){return P=Object.assign||function(r){for(var t,n=1,i=arguments.length;n<i;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},P.apply(this,arguments)};function Oe(e,r,t){if(t||arguments.length===2)for(var n=0,i=r.length,o;n<i;n++)(o||!(n in r))&&(o||(o=Array.prototype.slice.call(r,0,n)),o[n]=r[n]);return e.concat(o||Array.prototype.slice.call(r))}var x="-ms-",ce="-moz-",l="-webkit-",Sr="comm",ze="rule",er="decl",tt="@import",jr="@keyframes",nt="@layer",kr=Math.abs,rr=String.fromCharCode,Ye=Object.assign;function it(e,r){return E(e,0)^45?(((r<<2^E(e,0))<<2^E(e,1))<<2^E(e,2))<<2^E(e,3):0}function Cr(e){return e.trim()}function U(e,r){return(e=r.exec(e))?e[0]:e}function p(e,r,t){return e.replace(r,t)}function je(e,r,t){return e.indexOf(r,t)}function E(e,r){return e.charCodeAt(r)|0}function q(e,r,t){return e.slice(r,t)}function L(e){return e.length}function Rr(e){return e.length}function se(e,r){return r.push(e),e}function ot(e,r){return e.map(r).join("")}function sr(e,r){return e.filter(function(t){return!U(t,r)})}var De=1,Z=1,Nr=0,G=0,N=0,te="";function Ge(e,r,t,n,i,o,s,u){return{value:e,root:r,parent:t,type:n,props:i,children:o,line:De,column:Z,length:s,return:"",siblings:u}}function H(e,r){return Ye(Ge("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},r)}function K(e){for(;e.root;)e=H(e.root,{children:[e]});se(e,e.siblings)}function at(){return N}function st(){return N=G>0?E(te,--G):0,Z--,N===10&&(Z=1,De--),N}function T(){return N=G<Nr?E(te,G++):0,Z++,N===10&&(Z=1,De++),N}function W(){return E(te,G)}function ke(){return G}function Te(e,r){return q(te,e,r)}function Ke(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ct(e){return De=Z=1,Nr=L(te=e),G=0,[]}function dt(e){return te="",e}function He(e){return Cr(Te(G-1,Je(e===91?e+2:e===40?e+1:e)))}function ut(e){for(;(N=W())&&N<33;)T();return Ke(e)>2||Ke(N)>3?"":" "}function pt(e,r){for(;--r&&T()&&!(N<48||N>102||N>57&&N<65||N>70&&N<97););return Te(e,ke()+(r<6&&W()==32&&T()==32))}function Je(e){for(;T();)switch(N){case e:return G;case 34:case 39:e!==34&&e!==39&&Je(N);break;case 40:e===41&&Je(e);break;case 92:T();break}return G}function mt(e,r){for(;T()&&e+N!==57;)if(e+N===84&&W()===47)break;return"/*"+Te(r,G-1)+"*"+rr(e===47?e:T())}function ht(e){for(;!Ke(W());)T();return Te(e,G)}function lt(e){return dt(Ce("",null,null,null,[""],e=ct(e),0,[0],e))}function Ce(e,r,t,n,i,o,s,u,d){for(var g=0,f=0,A=s,w=0,h=0,b=0,k=1,z=1,R=1,S=0,v="",j=i,O=o,y=n,m=v;z;)switch(b=S,S=T()){case 40:if(b!=108&&E(m,A-1)==58){je(m+=p(He(S),"&","&\f"),"&\f",kr(g?u[g-1]:0))!=-1&&(R=-1);break}case 34:case 39:case 91:m+=He(S);break;case 9:case 10:case 13:case 32:m+=ut(b);break;case 92:m+=pt(ke()-1,7);continue;case 47:switch(W()){case 42:case 47:se(ft(mt(T(),ke()),r,t,d),d);break;default:m+="/"}break;case 123*k:u[g++]=L(m)*R;case 125*k:case 59:case 0:switch(S){case 0:case 125:z=0;case 59+f:R==-1&&(m=p(m,/\f/g,"")),h>0&&L(m)-A&&se(h>32?dr(m+";",n,t,A-1,d):dr(p(m," ","")+";",n,t,A-2,d),d);break;case 59:m+=";";default:if(se(y=cr(m,r,t,g,f,i,u,v,j=[],O=[],A,o),o),S===123)if(f===0)Ce(m,r,y,y,j,o,A,u,O);else switch(w===99&&E(m,3)===110?100:w){case 100:case 108:case 109:case 115:Ce(e,y,y,n&&se(cr(e,y,y,0,0,i,u,v,i,j=[],A,O),O),i,O,A,u,n?j:O);break;default:Ce(m,y,y,y,[""],O,0,u,O)}}g=f=h=0,k=R=1,v=m="",A=s;break;case 58:A=1+L(m),h=b;default:if(k<1){if(S==123)--k;else if(S==125&&k++==0&&st()==125)continue}switch(m+=rr(S),S*k){case 38:R=f>0?1:(m+="\f",-1);break;case 44:u[g++]=(L(m)-1)*R,R=1;break;case 64:W()===45&&(m+=He(T())),w=W(),f=A=L(v=m+=ht(ke())),S++;break;case 45:b===45&&L(m)==2&&(k=0)}}return o}function cr(e,r,t,n,i,o,s,u,d,g,f,A){for(var w=i-1,h=i===0?o:[""],b=Rr(h),k=0,z=0,R=0;k<n;++k)for(var S=0,v=q(e,w+1,w=kr(z=s[k])),j=e;S<b;++S)(j=Cr(z>0?h[S]+" "+v:p(v,/&\f/g,h[S])))&&(d[R++]=j);return Ge(e,r,t,i===0?ze:u,d,g,f,A)}function ft(e,r,t,n){return Ge(e,r,t,Sr,rr(at()),q(e,2,-2),0,n)}function dr(e,r,t,n,i){return Ge(e,r,t,er,q(e,0,n),q(e,n+1,-1),n,i)}function Or(e,r,t){switch(it(e,r)){case 5103:return l+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return l+e+e;case 4789:return ce+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return l+e+ce+e+x+e+e;case 5936:switch(E(e,r+11)){case 114:return l+e+x+p(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return l+e+x+p(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return l+e+x+p(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return l+e+x+e+e;case 6165:return l+e+x+"flex-"+e+e;case 5187:return l+e+p(e,/(\w+).+(:[^]+)/,l+"box-$1$2"+x+"flex-$1$2")+e;case 5443:return l+e+x+"flex-item-"+p(e,/flex-|-self/g,"")+(U(e,/flex-|baseline/)?"":x+"grid-row-"+p(e,/flex-|-self/g,""))+e;case 4675:return l+e+x+"flex-line-pack"+p(e,/align-content|flex-|-self/g,"")+e;case 5548:return l+e+x+p(e,"shrink","negative")+e;case 5292:return l+e+x+p(e,"basis","preferred-size")+e;case 6060:return l+"box-"+p(e,"-grow","")+l+e+x+p(e,"grow","positive")+e;case 4554:return l+p(e,/([^-])(transform)/g,"$1"+l+"$2")+e;case 6187:return p(p(p(e,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),e,"")+e;case 5495:case 3959:return p(e,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return p(p(e,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+x+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+l+e+e;case 4200:if(!U(e,/flex-|baseline/))return x+"grid-column-align"+q(e,r)+e;break;case 2592:case 3360:return x+p(e,"template-","")+e;case 4384:case 3616:return t&&t.some(function(n,i){return r=i,U(n.props,/grid-\w+-end/)})?~je(e+(t=t[r].value),"span",0)?e:x+p(e,"-start","")+e+x+"grid-row-span:"+(~je(t,"span",0)?U(t,/\d+/):+U(t,/\d+/)-+U(e,/\d+/))+";":x+p(e,"-start","")+e;case 4896:case 4128:return t&&t.some(function(n){return U(n.props,/grid-\w+-start/)})?e:x+p(p(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return p(e,/(.+)-inline(.+)/,l+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(L(e)-1-r>6)switch(E(e,r+1)){case 109:if(E(e,r+4)!==45)break;case 102:return p(e,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+ce+(E(e,r+3)==108?"$3":"$2-$3"))+e;case 115:return~je(e,"stretch",0)?Or(p(e,"stretch","fill-available"),r,t)+e:e}break;case 5152:case 5920:return p(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(n,i,o,s,u,d,g){return x+i+":"+o+g+(s?x+i+"-span:"+(u?d:+d-+o)+g:"")+e});case 4949:if(E(e,r+6)===121)return p(e,":",":"+l)+e;break;case 6444:switch(E(e,E(e,14)===45?18:11)){case 120:return p(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(E(e,14)===45?"inline-":"")+"box$3$1"+l+"$2$3$1"+x+"$2box$3")+e;case 100:return p(e,":",":"+x)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return p(e,"scroll-","scroll-snap-")+e}return e}function Ie(e,r){for(var t="",n=0;n<e.length;n++)t+=r(e[n],n,e,r)||"";return t}function gt(e,r,t,n){switch(e.type){case nt:if(e.children.length)break;case tt:case er:return e.return=e.return||e.value;case Sr:return"";case jr:return e.return=e.value+"{"+Ie(e.children,n)+"}";case ze:if(!L(e.value=e.props.join(",")))return""}return L(t=Ie(e.children,n))?e.return=e.value+"{"+t+"}":""}function At(e){var r=Rr(e);return function(t,n,i,o){for(var s="",u=0;u<r;u++)s+=e[u](t,n,i,o)||"";return s}}function wt(e){return function(r){r.root||(r=r.return)&&e(r)}}function yt(e,r,t,n){if(e.length>-1&&!e.return)switch(e.type){case er:e.return=Or(e.value,e.length,t);return;case jr:return Ie([H(e,{value:p(e.value,"@","@"+l)})],n);case ze:if(e.length)return ot(t=e.props,function(i){switch(U(i,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":K(H(e,{props:[p(i,/:(read-\w+)/,":"+ce+"$1")]})),K(H(e,{props:[i]})),Ye(e,{props:sr(t,n)});break;case"::placeholder":K(H(e,{props:[p(i,/:(plac\w+)/,":"+l+"input-$1")]})),K(H(e,{props:[p(i,/:(plac\w+)/,":"+ce+"$1")]})),K(H(e,{props:[p(i,/:(plac\w+)/,x+"input-$1")]})),K(H(e,{props:[i]})),Ye(e,{props:sr(t,n)});break}return""})}}var xt={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},D={},$=typeof process<"u"&&D!==void 0&&(D.REACT_APP_SC_ATTR||D.SC_ATTR)||"data-styled",Ir="active",Er="data-styled-version",Le="6.1.12",tr=`/*!sc*/
`,Ee=typeof window<"u"&&"HTMLElement"in window,vt=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&D!==void 0&&D.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&D.REACT_APP_SC_DISABLE_SPEEDY!==""?D.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&D.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&D!==void 0&&D.SC_DISABLE_SPEEDY!==void 0&&D.SC_DISABLE_SPEEDY!==""&&D.SC_DISABLE_SPEEDY!=="false"&&D.SC_DISABLE_SPEEDY),Be=Object.freeze([]),_=Object.freeze({});function bt(e,r,t){return t===void 0&&(t=_),e.theme!==t.theme&&e.theme||r||t.theme}var Pr=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),St=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,jt=/(^-|-$)/g;function ur(e){return e.replace(St,"-").replace(jt,"")}var kt=/(a)(d)/gi,we=52,pr=function(e){return String.fromCharCode(e+(e>25?39:97))};function qe(e){var r,t="";for(r=Math.abs(e);r>we;r=r/we|0)t=pr(r%we)+t;return(pr(r%we)+t).replace(kt,"$1-$2")}var Me,zr=5381,J=function(e,r){for(var t=r.length;t;)e=33*e^r.charCodeAt(--t);return e},Dr=function(e){return J(zr,e)};function Ct(e){return qe(Dr(e)>>>0)}function Rt(e){return e.displayName||e.name||"Component"}function Ve(e){return typeof e=="string"&&!0}var Gr=typeof Symbol=="function"&&Symbol.for,Tr=Gr?Symbol.for("react.memo"):60115,Nt=Gr?Symbol.for("react.forward_ref"):60112,Ot={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},It={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Lr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Et=((Me={})[Nt]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Me[Tr]=Lr,Me);function mr(e){return("type"in(r=e)&&r.type.$$typeof)===Tr?Lr:"$$typeof"in e?Et[e.$$typeof]:Ot;var r}var Pt=Object.defineProperty,zt=Object.getOwnPropertyNames,hr=Object.getOwnPropertySymbols,Dt=Object.getOwnPropertyDescriptor,Gt=Object.getPrototypeOf,lr=Object.prototype;function Br(e,r,t){if(typeof r!="string"){if(lr){var n=Gt(r);n&&n!==lr&&Br(e,n,t)}var i=zt(r);hr&&(i=i.concat(hr(r)));for(var o=mr(e),s=mr(r),u=0;u<i.length;++u){var d=i[u];if(!(d in It||t&&t[d]||s&&d in s||o&&d in o)){var g=Dt(r,d);try{Pt(e,d,g)}catch{}}}}return e}function ee(e){return typeof e=="function"}function nr(e){return typeof e=="object"&&"styledComponentId"in e}function V(e,r){return e&&r?"".concat(e," ").concat(r):e||r||""}function fr(e,r){if(e.length===0)return"";for(var t=e[0],n=1;n<e.length;n++)t+=e[n];return t}function ue(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function Ze(e,r,t){if(t===void 0&&(t=!1),!t&&!ue(e)&&!Array.isArray(e))return r;if(Array.isArray(r))for(var n=0;n<r.length;n++)e[n]=Ze(e[n],r[n]);else if(ue(r))for(var n in r)e[n]=Ze(e[n],r[n]);return e}function ir(e,r){Object.defineProperty(e,"toString",{value:r})}function me(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(r.length>0?" Args: ".concat(r.join(", ")):""))}var Tt=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}return e.prototype.indexOfGroup=function(r){for(var t=0,n=0;n<r;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(r,t){if(r>=this.groupSizes.length){for(var n=this.groupSizes,i=n.length,o=i;r>=o;)if((o<<=1)<0)throw me(16,"".concat(r));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var u=this.indexOfGroup(r+1),d=(s=0,t.length);s<d;s++)this.tag.insertRule(u,t[s])&&(this.groupSizes[r]++,u++)},e.prototype.clearGroup=function(r){if(r<this.length){var t=this.groupSizes[r],n=this.indexOfGroup(r),i=n+t;this.groupSizes[r]=0;for(var o=n;o<i;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(r){var t="";if(r>=this.length||this.groupSizes[r]===0)return t;for(var n=this.groupSizes[r],i=this.indexOfGroup(r),o=i+n,s=i;s<o;s++)t+="".concat(this.tag.getRule(s)).concat(tr);return t},e}(),Re=new Map,Pe=new Map,Ne=1,ye=function(e){if(Re.has(e))return Re.get(e);for(;Pe.has(Ne);)Ne++;var r=Ne++;return Re.set(e,r),Pe.set(r,e),r},Lt=function(e,r){Ne=r+1,Re.set(e,r),Pe.set(r,e)},Bt="style[".concat($,"][").concat(Er,'="').concat(Le,'"]'),Ut=new RegExp("^".concat($,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Qt=function(e,r,t){for(var n,i=t.split(","),o=0,s=i.length;o<s;o++)(n=i[o])&&e.registerName(r,n)},Ft=function(e,r){for(var t,n=((t=r.textContent)!==null&&t!==void 0?t:"").split(tr),i=[],o=0,s=n.length;o<s;o++){var u=n[o].trim();if(u){var d=u.match(Ut);if(d){var g=0|parseInt(d[1],10),f=d[2];g!==0&&(Lt(f,g),Qt(e,f,d[3]),e.getTag().insertRules(g,i)),i.length=0}else i.push(u)}}},gr=function(e){for(var r=document.querySelectorAll(Bt),t=0,n=r.length;t<n;t++){var i=r[t];i&&i.getAttribute($)!==Ir&&(Ft(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function Ht(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var Ur=function(e){var r=document.head,t=e||r,n=document.createElement("style"),i=function(u){var d=Array.from(u.querySelectorAll("style[".concat($,"]")));return d[d.length-1]}(t),o=i!==void 0?i.nextSibling:null;n.setAttribute($,Ir),n.setAttribute(Er,Le);var s=Ht();return s&&n.setAttribute("nonce",s),t.insertBefore(n,o),n},Mt=function(){function e(r){this.element=Ur(r),this.element.appendChild(document.createTextNode("")),this.sheet=function(t){if(t.sheet)return t.sheet;for(var n=document.styleSheets,i=0,o=n.length;i<o;i++){var s=n[i];if(s.ownerNode===t)return s}throw me(17)}(this.element),this.length=0}return e.prototype.insertRule=function(r,t){try{return this.sheet.insertRule(t,r),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},e.prototype.getRule=function(r){var t=this.sheet.cssRules[r];return t&&t.cssText?t.cssText:""},e}(),Vt=function(){function e(r){this.element=Ur(r),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(r,t){if(r<=this.length&&r>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[r]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},e.prototype.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),Wt=function(){function e(r){this.rules=[],this.length=0}return e.prototype.insertRule=function(r,t){return r<=this.length&&(this.rules.splice(r,0,t),this.length++,!0)},e.prototype.deleteRule=function(r){this.rules.splice(r,1),this.length--},e.prototype.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),Ar=Ee,Xt={isServer:!Ee,useCSSOMInjection:!vt},Qr=function(){function e(r,t,n){r===void 0&&(r=_),t===void 0&&(t={});var i=this;this.options=P(P({},Xt),r),this.gs=t,this.names=new Map(n),this.server=!!r.isServer,!this.server&&Ee&&Ar&&(Ar=!1,gr(this)),ir(this,function(){return function(o){for(var s=o.getTag(),u=s.length,d="",g=function(A){var w=function(R){return Pe.get(R)}(A);if(w===void 0)return"continue";var h=o.names.get(w),b=s.getGroup(A);if(h===void 0||!h.size||b.length===0)return"continue";var k="".concat($,".g").concat(A,'[id="').concat(w,'"]'),z="";h!==void 0&&h.forEach(function(R){R.length>0&&(z+="".concat(R,","))}),d+="".concat(b).concat(k,'{content:"').concat(z,'"}').concat(tr)},f=0;f<u;f++)g(f);return d}(i)})}return e.registerId=function(r){return ye(r)},e.prototype.rehydrate=function(){!this.server&&Ee&&gr(this)},e.prototype.reconstructWithOptions=function(r,t){return t===void 0&&(t=!0),new e(P(P({},this.options),r),this.gs,t&&this.names||void 0)},e.prototype.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(r=function(t){var n=t.useCSSOMInjection,i=t.target;return t.isServer?new Wt(i):n?new Mt(i):new Vt(i)}(this.options),new Tt(r)));var r},e.prototype.hasNameForId=function(r,t){return this.names.has(r)&&this.names.get(r).has(t)},e.prototype.registerName=function(r,t){if(ye(r),this.names.has(r))this.names.get(r).add(t);else{var n=new Set;n.add(t),this.names.set(r,n)}},e.prototype.insertRules=function(r,t,n){this.registerName(r,t),this.getTag().insertRules(ye(r),n)},e.prototype.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},e.prototype.clearRules=function(r){this.getTag().clearGroup(ye(r)),this.clearNames(r)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Yt=/&/g,Kt=/^\s*\/\/.*$/gm;function Fr(e,r){return e.map(function(t){return t.type==="rule"&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(n){return"".concat(r," ").concat(n)})),Array.isArray(t.children)&&t.type!=="@keyframes"&&(t.children=Fr(t.children,r)),t})}function Jt(e){var r,t,n,i=_,o=i.options,s=o===void 0?_:o,u=i.plugins,d=u===void 0?Be:u,g=function(w,h,b){return b.startsWith(t)&&b.endsWith(t)&&b.replaceAll(t,"").length>0?".".concat(r):w},f=d.slice();f.push(function(w){w.type===ze&&w.value.includes("&")&&(w.props[0]=w.props[0].replace(Yt,t).replace(n,g))}),s.prefix&&f.push(yt),f.push(gt);var A=function(w,h,b,k){h===void 0&&(h=""),b===void 0&&(b=""),k===void 0&&(k="&"),r=k,t=h,n=new RegExp("\\".concat(t,"\\b"),"g");var z=w.replace(Kt,""),R=lt(b||h?"".concat(b," ").concat(h," { ").concat(z," }"):z);s.namespace&&(R=Fr(R,s.namespace));var S=[];return Ie(R,At(f.concat(wt(function(v){return S.push(v)})))),S};return A.hash=d.length?d.reduce(function(w,h){return h.name||me(15),J(w,h.name)},zr).toString():"",A}var qt=new Qr,$e=Jt(),Hr=de.createContext({shouldForwardProp:void 0,styleSheet:qt,stylis:$e});Hr.Consumer;de.createContext(void 0);function wr(){return br.useContext(Hr)}var Zt=function(){function e(r,t){var n=this;this.inject=function(i,o){o===void 0&&(o=$e);var s=n.name+o.hash;i.hasNameForId(n.id,s)||i.insertRules(n.id,s,o(n.rules,s,"@keyframes"))},this.name=r,this.id="sc-keyframes-".concat(r),this.rules=t,ir(this,function(){throw me(12,String(n.name))})}return e.prototype.getName=function(r){return r===void 0&&(r=$e),this.name+r.hash},e}(),$t=function(e){return e>="A"&&e<="Z"};function yr(e){for(var r="",t=0;t<e.length;t++){var n=e[t];if(t===1&&n==="-"&&e[0]==="-")return e;$t(n)?r+="-"+n.toLowerCase():r+=n}return r.startsWith("ms-")?"-"+r:r}var Mr=function(e){return e==null||e===!1||e===""},Vr=function(e){var r,t,n=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!Mr(o)&&(Array.isArray(o)&&o.isCss||ee(o)?n.push("".concat(yr(i),":"),o,";"):ue(o)?n.push.apply(n,Oe(Oe(["".concat(i," {")],Vr(o),!1),["}"],!1)):n.push("".concat(yr(i),": ").concat((r=i,(t=o)==null||typeof t=="boolean"||t===""?"":typeof t!="number"||t===0||r in xt||r.startsWith("--")?String(t).trim():"".concat(t,"px")),";")))}return n};function X(e,r,t,n){if(Mr(e))return[];if(nr(e))return[".".concat(e.styledComponentId)];if(ee(e)){if(!ee(o=e)||o.prototype&&o.prototype.isReactComponent||!r)return[e];var i=e(r);return X(i,r,t,n)}var o;return e instanceof Zt?t?(e.inject(t,n),[e.getName(n)]):[e]:ue(e)?Vr(e):Array.isArray(e)?Array.prototype.concat.apply(Be,e.map(function(s){return X(s,r,t,n)})):[e.toString()]}function _t(e){for(var r=0;r<e.length;r+=1){var t=e[r];if(ee(t)&&!nr(t))return!1}return!0}var en=Dr(Le),rn=function(){function e(r,t,n){this.rules=r,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&_t(r),this.componentId=t,this.baseHash=J(en,t),this.baseStyle=n,Qr.registerId(t)}return e.prototype.generateAndInjectStyles=function(r,t,n){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(r,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))i=V(i,this.staticRulesId);else{var o=fr(X(this.rules,r,t,n)),s=qe(J(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,s)){var u=n(o,".".concat(s),void 0,this.componentId);t.insertRules(this.componentId,s,u)}i=V(i,s),this.staticRulesId=s}else{for(var d=J(this.baseHash,n.hash),g="",f=0;f<this.rules.length;f++){var A=this.rules[f];if(typeof A=="string")g+=A;else if(A){var w=fr(X(A,r,t,n));d=J(d,w+f),g+=w}}if(g){var h=qe(d>>>0);t.hasNameForId(this.componentId,h)||t.insertRules(this.componentId,h,n(g,".".concat(h),void 0,this.componentId)),i=V(i,h)}}return i},e}(),Wr=de.createContext(void 0);Wr.Consumer;var We={};function tn(e,r,t){var n=nr(e),i=e,o=!Ve(e),s=r.attrs,u=s===void 0?Be:s,d=r.componentId,g=d===void 0?function(j,O){var y=typeof j!="string"?"sc":ur(j);We[y]=(We[y]||0)+1;var m="".concat(y,"-").concat(Ct(Le+y+We[y]));return O?"".concat(O,"-").concat(m):m}(r.displayName,r.parentComponentId):d,f=r.displayName,A=f===void 0?function(j){return Ve(j)?"styled.".concat(j):"Styled(".concat(Rt(j),")")}(e):f,w=r.displayName&&r.componentId?"".concat(ur(r.displayName),"-").concat(r.componentId):r.componentId||g,h=n&&i.attrs?i.attrs.concat(u).filter(Boolean):u,b=r.shouldForwardProp;if(n&&i.shouldForwardProp){var k=i.shouldForwardProp;if(r.shouldForwardProp){var z=r.shouldForwardProp;b=function(j,O){return k(j,O)&&z(j,O)}}else b=k}var R=new rn(t,w,n?i.componentStyle:void 0);function S(j,O){return function(y,m,ne){var he=y.attrs,Kr=y.componentStyle,Jr=y.defaultProps,qr=y.foldedComponentIds,Zr=y.styledComponentId,$r=y.target,_r=de.useContext(Wr),et=wr(),Ue=y.shouldForwardProp||et.shouldForwardProp,or=bt(m,_r,Jr)||_,B=function(fe,oe,ge){for(var ae,M=P(P({},oe),{className:void 0,theme:ge}),Fe=0;Fe<fe.length;Fe+=1){var Ae=ee(ae=fe[Fe])?ae(M):ae;for(var F in Ae)M[F]=F==="className"?V(M[F],Ae[F]):F==="style"?P(P({},M[F]),Ae[F]):Ae[F]}return oe.className&&(M.className=V(M.className,oe.className)),M}(he,m,or),le=B.as||$r,ie={};for(var Q in B)B[Q]===void 0||Q[0]==="$"||Q==="as"||Q==="theme"&&B.theme===or||(Q==="forwardedAs"?ie.as=B.forwardedAs:Ue&&!Ue(Q,le)||(ie[Q]=B[Q]));var ar=function(fe,oe){var ge=wr(),ae=fe.generateAndInjectStyles(oe,ge.styleSheet,ge.stylis);return ae}(Kr,B),Qe=V(qr,Zr);return ar&&(Qe+=" "+ar),B.className&&(Qe+=" "+B.className),ie[Ve(le)&&!Pr.has(le)?"class":"className"]=Qe,ie.ref=ne,br.createElement(le,ie)}(v,j,O)}S.displayName=A;var v=de.forwardRef(S);return v.attrs=h,v.componentStyle=R,v.displayName=A,v.shouldForwardProp=b,v.foldedComponentIds=n?V(i.foldedComponentIds,i.styledComponentId):"",v.styledComponentId=w,v.target=n?i.target:e,Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(j){this._foldedDefaultProps=n?function(O){for(var y=[],m=1;m<arguments.length;m++)y[m-1]=arguments[m];for(var ne=0,he=y;ne<he.length;ne++)Ze(O,he[ne],!0);return O}({},i.defaultProps,j):j}}),ir(v,function(){return".".concat(v.styledComponentId)}),o&&Br(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),v}function xr(e,r){for(var t=[e[0]],n=0,i=r.length;n<i;n+=1)t.push(r[n],e[n+1]);return t}var vr=function(e){return Object.assign(e,{isCss:!0})};function nn(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];if(ee(e)||ue(e))return vr(X(xr(Be,Oe([e],r,!0))));var n=e;return r.length===0&&n.length===1&&typeof n[0]=="string"?X(n):vr(X(xr(n,r)))}function _e(e,r,t){if(t===void 0&&(t=_),!r)throw me(1,r);var n=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(r,t,nn.apply(void 0,Oe([i],o,!1)))};return n.attrs=function(i){return _e(e,r,P(P({},t),{attrs:Array.prototype.concat(t.attrs,i).filter(Boolean)}))},n.withConfig=function(i){return _e(e,r,P(P({},t),i))},n}var Xr=function(e){return _e(tn,e)},c=Xr;Pr.forEach(function(e){c[e]=Xr(e)});const on=()=>"375px",re=()=>"768px",I=()=>"1024px",C=()=>"1920px",an=c.div`
  margin: 1.62rem auto;
  max-width: ${on};
  @media (min-width: ${re}) {
    max-width: ${re};
  }
  @media (min-width: ${I}) {
    max-width: ${I};
  }
  @media (min-width: ${C}) {
    max-width: ${C};
  }
`,sn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAAAYCAYAAAAcTtR3AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASHSURBVHgB7ZrnbxRHGMYfgjkbHCchBAiGJJACCYlTlZCiJBJKhPgA/yaf4CMgJIToAgESvYPpvWMQYMr708zK4/X5dvbu9ozk+UmPbndvbndn5m0ztpRIJBJvK1OUSDRHt9d003PTMz6TQSWKwGhmmfpMPf7asOmR6bbpSdg4GVQiZJpppulD02zTe6b7coZzzfSw6AbJoBJEnn7TArlI9MI0aLpiuqmSJIOanMyRM6BPTDPkaqDTputqwohCkkFNHjCcL0yLTTV/7YbpiFo0opB6BtWtOEMb9ipz7yJeqzwMDoN1X+XhHbsj276S8+Si+7XC64h7lRmjLtN805dyUQlIaSdNZ0xP1Wa6guOlXtMUz5DpmNzL5Vlo+l3lofC7IOc5MfxkmmvaIDdYMdDHv+UKz3cUD0vjs6aDdb7rNa1W8xzW6D5jON+bvs21Y3W1RW7sx4P+fW1aopH5ZGxOyBlT7DiVZqr//Mz0qz/HE1/6zyJhkPPkQmfe2lktLAjOWV6+KBCdJ2JgIO+aLqsx38kNXM3rquL4zb/blJL9xfhm+Xvcyt2T5y9R89zU2NTDuD72z8wMo9u/O+N1L9eeNhjgX3LzMtW3w+l3ytVIr1QhWYTqC64Nmvao/WxVcVoKvXyRaZ8ap9VacExYf2A6pWI+Co5ZzexQ6xAx1qj9DMoZLxF1pr/GOC0zfWA6JOcY+YgERCMiX2URKU+XOkeMZwxpJBIAg9PIoEgReGuvPydFsF/ySI0pk+ZiIXL0RLZ9oHIwLhtNA3JRGTAySgP6/6PcjnUGke2wxkbRyskMKiz0SDfLIn7LbwjHdGoooj3PqjX4Hi97X6Mnu8izKJJ3m/7z5xjgv6b1qji014HJ/iqiHXXYOjUHRnLR9LFcOfCHXB2YwXgRsWKidCVkBsXLfSM3IXj754qHqECReKOg3QqVAy8ejmiHFx4w/ezP+/zxPk0s4y3Fn6k1GBdWbis1Or2xm71Lcc5dGZlB8ZKskj6Vm5CY5S9F8xzf9gfTJrUHvIy65mCJ31ArzPMCIsVd0zlNDETHzWo/OHs+KgGp/5z/boZ/9oQYVlhD8QLHFQ/Gl+1txNQO1ABPCtowEeOluYVy2xCxez1sJxA1J9Rj2whp7k+N3jcj5e+V6+OK4Lv/5VJfxx2qk0V59i8OzcCy+Re55X0RWZ+o15bLGXLHVjkVQSE+kLuGEWWRiMhF6s+2aSjQqYOJZJQDHV/lDWhsGC2iNzhu+45rjjumtZFtSb9L/TFpmb4dyLXJJgHo93KVg5qzUeFLFP1H5dg2znUcaXHuGvtP2zUSfYf8ebgKBGphFlkdS4FhUc6+T6/Kg/Uf1dsDtddsjTgIezMUrBeDNvvlJpz+9ih+uQ+k7SsFbTCo+WoNCm5SXH/uOpGIPb16UYdV4Hk5B8nmks9VcinwmComrEd4MBtn0xVXp7BtwCqMwa33Ny7uFQ5qpVv+OejLouCc98tHFPrJ//3UFA8pl32uev3o9/drlvyfmthCmVun3XkVjyP9r2fQl1R9NkkkEolEYjLwBhs5/TuGlo3PAAAAAElFTkSuQmCC",cn="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFkAAAAYCAYAAACRD1FmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAVlSURBVHgBtZnbUx1FEMY/IhFIIAIJgWBSQozx8qClllpqWVql5ZN/r1X6quWlLK3yxfsFDQFjSGKCctEg6R+7S+b06d2dPYd8VV1wemdmZ7p7vu6ZHVGBEZOLJk+bTKkXOyYrJt+Y7Koep02ec7pNky8a+pw1edFk2um3Tb41+dHkfzXjIZPzJjMmkybHVawnF6zrj4bnrOtZk3k3Lnb5zeRrk72G/hot/76swsgRxk2eMlk0ed9kv6bdWDmRFA+rHhjmjZpnEyYvqDD+5/VDaMHk9Zb3tOGXhme8/20VjvTALk+anDL52ORu3SDHTC6p3sApGOwVHQ0w4vMZ7ZjX6ZpnzPstDWfgJmDY1xQbOMU5k6WmBhh5Wfkg+k5oeDDOZGbbZwIdEQbNdKGFrpg1eSSz7XLTXDDyVKC/bbKm/i0A353T8HhU8TvXAz0UNO50GP6YHiyiOf5jciXQkw9mVQM4Odpun5j8ZXJZRcSkgAd/1uDgnXNOB8+TIG+avKfe3YJjz5isJrq5YNwVk+/UwI01iJI5URnt8K/Kebzj5gCl4JQbQZ+DaIjCfKf8S/b0iY4EOKrBsRz0x6EbKrJ0lOnTqCIoPGURYTjploqKpov8G7wPA/rdk85tNeizqBq0bbndcgEpMNCsBsf5QHdN9515NXhOqVcloOPBc4KiawQ3IaLEjeQdzNEHH5QRJuEcXlsLdPMaDNXW90gjgwX46CJJVpGC4/eD56d0dIiiMuVidsDNoM2lQJe17Rn8stMRWTio7aDgMR+8k4NHymUYEEN7Tlws50I03VFv5qdGf1fFdt6umRfbfafsy/v+UwzG9Ycj2vpgg0p9eXlBxSGqJwhyjAzPET1jiY7B4cW/1Q1RPc5kvVGgD2/klJeJfF9esUsuqB0YAAr8XsWJ0u+KKOHdUD9tVhSX5jTmdMK3zaELvHjb6eDHrrxMn4hmVmt0/qiKk2fK/zHOjgYDRoFeqJpeUn/iX1A8Hw9s4oOMNZ71DXNrzT8D3YK6IaIKdshG0BbHRguraAtK+EjNdyk5eFy9PIrxPVUQrVHFgz7KV495Ra6RrwU6KKPLiSuqKq6r/i4kMjKOquaMcz5Ucfew1TBOGzjYVM6HbvyaoMs6WvxB8Rx7qozcepdkQfRMJLrJ8vdWRv9RxVTxe0OfqmRK5wjfEWlVZmfxXCBBJVPlfGjvDcVvOJutvOieMyY0hMP7olDFIafOgbwf/j2Z6AgC8sevlSLXyPAf0byU6OhLPZlz+qO4nwzGXG3og/Ouq7dmxTgYyZdPu8qjDpLdm+qvgyn/CKIZp8e462oGlZCvvpjjoZG7nP+jI2PuPUaU9eH5vZZ+K4FuSYMDo90K9ER5tNNIbnfUjHX1RzqRfBjAXYwcJT+2Xxsv8zxawJraES0AWpjW4Ihu1ki00YVQE51VwC6bTkeVcRhYXe4guF/gJJaS+lg5GJOJTlzUv9UXixRQRdPXiApQAIvwTuKy/Kq6gYBiG0fG3AvegXOvqB3kDdbi13/Iy10velbUzz+vqvg8MxG0xynRUROu3VYe4G1vgIvK+9CQA5IXweJtAU1s5g1xsOO8XebKMe92vZNdUf/prLqTjhxG9Ef1dJcoxMhHefmTgmj9UjGdRVRVh+hEyC3ewYGtq5HJ6huZbYlUKpKTTr+vuO6uw5biy5hhwTy4Z2BXnQme5fBxBWgtCpyDkrCrkXk5Hw3bthGR95liniZCcmrrFDn83QXkhE9VfGmGO8fc8+oSqQuiwFkyGWGLR6eWpu2J1z4weUKFp8jWVBA4AOORLH5S4YjpYPwuEZL2GddwqG7hqt2Y0p6fY1cDg3XFthy/B+71K05VNSfwAAAAAElFTkSuQmCC",dn="data:image/png;base64,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",un="data:image/png;base64,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",pn=c.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 3rem;

  padding: 1.5rem;
  width: 100%;
  margin-top: 4.375rem;
  @media (min-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
    gap: 1.5rem;
  }
  @media screen and (min-width: ${I}) {
    gap: 5.625rem;
  }
  @media screen and (min-width: ${C}) {
    gap: 15.3125rem;
    margin-top: 7.4375rem;
  }
`,mn=c(Y)`
  height: 1.5rem;
  width: 9.236875rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`,hn=c(Y)`
  height: 1.5rem;
  width: 9.695rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`,ln=c(Y)`
  height: 1.5rem;
  width: 5.51625rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`,fn=c(Y)`
  height: 1.5rem;
  width: 5.50625rem;
  margin: 0 auto;
  &:hover {
    opacity: 0.8;
  }
`,gn=()=>a.jsxs(pn,{children:[a.jsx(mn,{to:"https://www.spacex.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:`${sn}`,alt:"Space Girl"})}),a.jsx(hn,{to:"https://www.boeing.com/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:`${un}`,alt:"Space Girl"})}),a.jsx(ln,{to:"https://www.nasa.gov/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:`${cn}`,alt:"Space Girl"})}),a.jsx(fn,{to:"https://www.nasa.gov/",target:"_blank",rel:"noopener noreferrer",children:a.jsx("img",{src:`${dn}`,alt:"Space Girl"})})]}),An="data:image/webp;base64,UklGRowDAABXRUJQVlA4WAoAAAAQAAAAgAAAEwAAQUxQSCUDAAABgFXbTljpSsDBIKEOWgfFATgIDlIHGQcZB0hAQiUgoRLy8QJ94yAiJgDucSSicqYN/qa9NxVWFU4AEFT6PZoEANhaU1XNAEp/rAunCP+QYaNx2gDgUBUV1a69N91QVMZ9a8Ln1fUzfISNNrlKEr5LcNSWRwbQzWUAYZibcAyby0fsNr8joLZOOMx9AoBq7g0AgYko90QskuT44DWzFnB4TwTU3I5kyxmIw1YVoFfojgkQzd8BHBcLk9ReqPEvUQCgb6wD1bGOYu4d47N2As2WGyAvGAjDsQPDIwDxj/miXZn/iJWuQhGgV1YBcSwPLyLZOgG2fr/LAOLjtF9zFUBgYqKWKzOztpRqJkDePQFhOFPF5Nl/dn3MdCY/WxlmY9Zyzj+FcwCA6swjgC1fIiRM9RSRoVeXun3DMnAsjQAUxzQCKJ0QvXEAiKpAdwTrfYkA4GBthUmJKSu3SyVvBP2CAmgLI2LBTA98Bs/szgGfzXnuYc+wFpxthfEpSZQOfrKS/GrpF7MQ5AsDQBgzAoDwTMxGBoA+MRtXANCd+Y+DOnvgdvmrRTpnUaJMSVuXBP3CAwDx8QZcXjC7AGwLZncA5AWmMske9yry14UbXVdlaaQs6F8YH2DnCR7+VuwAUFeMAV17ZuFxGL50vu+qLTfKJ1c5Wy8E/UJzojMwL2NBAWBrCw/AX4I6eVIr578qd9Eu3K7U9Jb8FXEOp3uhRWDXyQDkAmIZnm0T+Ql7zvlc6M4+2ViZSVhZr3ZluvqtAfKF09mc5sHsCkBsjgHNNAKoXoY6J14352eCU1iYK+dLSM+c9UpAejewNBZs0BGvFTM94vFMmjP4KJxTCm/ybGctlQr9Uu0pUyEOwPEur5kXbH14qzvImfMbnuH8ZVaWSqRy0XntAMorhp+c7sUXDPS1AciLNrudfQFHUq5SS29MjSMApDeM6eHcXli7AbSlEQF+QbPunCsIZ1FponIwR3yWpYd3fAlRFyQAiDxmPQLoL/Q/gO2kzJK3AH9T6b2rqsqO5dBa650mQCztfp5bdkxP6eMZuuMzsbTeWtMmqrLNStfeW5wAAFZQOCBAAAAAEAQAnQEqgQAUAD6RSKBMJaQjIiHIALASCWkA09gFBEAUXVwCLWJh/wAA/viWaBaqvOL1SIRE0l8jq0aMliIAAA==",Yr=({width:e=8,height:r=1.25})=>a.jsx("img",{src:An,style:{width:`${e}rem`,height:`${r}rem`},alt:"Cosmos Logo"}),wn=c.footer`
  padding: 2rem 0 2.125rem 1.5rem;
  text-align: center;
`,xe=c(Y)`
  color: var(--bg-color-diagram);

  font-weight: 600;
`,ve=c.li`
  margin-top: 1.5rem;
`,yn=c(Y)`
  color: var(--email-link);
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: underline;
`,xn=c.ul`
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  justify-content: center;
  @media screen and (min-width: ${I}) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
  }
`,vn=()=>a.jsxs(wn,{children:[a.jsx(Yr,{width:9.61,height:1.5}),a.jsxs(xn,{children:[a.jsx(ve,{children:a.jsx(xe,{to:"/",children:"Stay Connected"})}),a.jsx(ve,{children:a.jsx(xe,{to:"/",children:"Education"})}),a.jsx(ve,{children:a.jsx(xe,{to:"/",children:"Community"})}),a.jsx(ve,{children:a.jsx(xe,{to:"/",children:"About Us"})})]}),a.jsx(yn,{to:"mailto:contact@odyssey.com",children:"[contact@odyssey.com]"})]}),pe="/Cosmos-Landing-Page/assets/icon-GR22bTKM.svg",bn=c.svg`
  fill: black;
  &:hover {
    fill: var(--logo-color);
    cursor: pointer;
  }
  @media (min-width: 768px) {
    display: none;
    opacity: 0;
    visibility: hidden;
  }
`,Sn=({width:e,height:r,onClick:t})=>a.jsx(bn,{width:e,height:r,onClick:t,children:a.jsx("use",{href:`${pe}#burger2`})}),jn=c.header`
  margin: 1.62rem 1.64rem auto 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,kn=()=>{const e=()=>{if(window.screen.width>=1024&&window.screen.width<1920)return 9.61;if(window.screen.width>=1920)return 12.81},r=()=>{if(window.screen.width>=1024&&window.screen.width<1920)return 1.5;if(window.screen.width>=1920)return 2};return a.jsxs(jn,{children:[a.jsx(Yr,{width:e(),height:r()}),a.jsx(Sn,{width:24,height:24})]})},Cn="/Cosmos-Landing-Page/assets/herobg@x1-CGFLEkPT.jpg",Rn="/Cosmos-Landing-Page/assets/herobgtablet@x1-BbhEFql7.png",Nn="/Cosmos-Landing-Page/assets/herobgpc@x1-DGXReGVL.png",On="/Cosmos-Landing-Page/assets/herobg@x2-CsYukXDk.jpg",In=c.section`
  margin: 1.625rem auto 18.5rem;
  background-image: url(${Cn});
  background-size: cover;
  min-height: 23.812rem;
  background-position: center center;
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  -ms-background-size: cover;
  @media only screen and (-webkit-min-device-pixel-ratio: 2),
    only screen and (min--moz-device-pixel-ratio: 2),
    only screen and (-o-min-device-pixel-ratio: 2/1),
    only screen and (min-device-pixel-ratio: 2),
    only screen and (min-resolution: 192dpi),
    only screen and (min-resolution: 2dppx) {
    background-image: url(${On});
  }
  @media screen and (min-width: ${I}) {
    margin: 3.125rem auto 1.5rem;
    max-width: 59.1875rem;
    border-radius: 2.5rem;
    max-height: 23.8125rem;
    background-image: url(${Rn});
  }
  @media screen and (min-width: ${C}) {
    margin: 5.81rem auto 2.5rem;
    max-width: 105rem;
    border-radius: 2.5rem;
    max-height: 33.3125rem;
    background-image: url(${Nn});
  }
`,En=c.div`
  position: relative;
`,Pn=c.img``,zn=c.h1`
  font-size: 2rem;
  max-width: 22rem;
  font-weight: 800;
  padding: 2rem 3rem 1.5rem 1.5rem;
  @media screen and (min-width: ${I}) {
    padding: 2.5rem 0 0 2.5rem;
    font-size: 2.5rem;
  }
  @media screen and (min-width: ${C}) {
    padding: 3.75rem 0 0 3.75rem;
    font-size: 4rem;
  }
`,Dn=c.div`
  position: absolute;
  top: 30%;
  left: 50%;
  border-radius: 50%;
  width: 121px;
  height: 300px;
  background: var(--shadow);
  opacity: 0.8;
  filter: blur(4rem);

  z-index: -1;
  @media screen and (min-width: ${I}) {
    top: 30%;
    left: 15%;
  }
  @media screen and (min-width: ${C}) {
    top: 30%;
    left: 10%;
  }
`,Gn=c.div`
  position: absolute;

  left: 50%;
  transform: translateX(-50%);

  @media screen and (min-width: ${I}) {
    left: 45rem;
    bottom: 2rem;
    position: relative;
    max-width: 19rem;
  }

  @media screen and (min-width: ${C}) {
    left: 82rem;
  }
`,Tn=c.div`
  display: flex;
  margin: 8.1875rem auto;
  position: absolute;

  left: 0;
  right: 0;
  width: max-content;

  & > div:first-of-type {
    margin-top: 4.875rem;
    margin-right: 0.375rem;
  }
  @media screen and (min-width: ${I}) {
    left: 31rem;
    top: 13rem;
    & > div:first-of-type {
      margin-top: 4.1875rem;
      margin-right: 3rem;
    }
  }
  @media screen and (min-width: ${C}) {
    left: 55rem;
    top: 30rem;
    & > div:first-of-type {
      margin-top: 4.1875rem;
      margin-right: 3rem;
    }
  }
`,Ln=c.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  top: 25.4375rem;
  & div {
    max-width: fit-content;

    & span {
      padding: 19px 0 0 44px;
      letter-spacing: 0.5rem;
      font-weight: 800;
    }
  }
  @media screen and (min-width: ${I}) {
    top: -5rem;
    left: 77%;
    transform: translateX(-50%);
    max-width: 25.5rem;
  }
`,Bn=c.section`
  position: relative;
  max-width: 20.4375rem;
  margin: 0 auto;
  @media screen and (min-width: ${I}) {
    margin: 0 2.5rem;
    max-width: 24.6875rem;
  }
  @media screen and (min-width: ${C}) {
    margin: 0 7.5rem;
    max-width: 43.8125rem;
  }
`,Un=c.h1`
  color: var(--hero-text-color);
  line-height: 1.625;
  font-weight: 500;
  @media screen and (min-width: ${C}) {
    font-size: 1.125rem;
  }
`,Qn=c.div`
  margin-top: 1.5rem;

  @media screen and (min-width: ${I}) {
    margin-top: 0;
  }
`,Fn=c(Y)`
  color: var(--dark-text-color);
  font-size: 1.25rem;
  font-weight: 600;

  display: flex;
  align-items: center;

  margin-top: 2.4375rem;
  transition: opacity 0.3s ease;
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
  @media screen and (min-width: ${I}) {
    margin-top: 0;
  }
  @media screen and(min-width: ${C}) {
    font-size: 1.5rem;
  }
`,Hn=c.div`
  margin-left: 0.75rem;
`,Mn=c.svg`
  background-color: var(--diagram-color);
  padding: 0.625rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.75rem;
`,Vn=c.div`
  padding: 0 1.5rem;
  @media screen and (min-width: ${re}) {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
  }
  @media screen and (min-width: ${I}) {
    margin-top: 2rem;
    justify-content: left;
  }
  @media screen and (min-width: ${C}) {
    margin-left: 7.5rem;
  }
`,Wn=c.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
`,Xn=c.svg`
  background-color: var(--diagram-color);
  width: 2rem;
  height: 2rem;
  padding: 0.5rem;
  border-radius: 0.75rem;
  @media screen and (min-width: ${I}) {
    padding: 0.5rem;
    width: 2.5rem;
    height: 2.5rem;
  }
`,Yn=c.h1`
  margin-left: 0.75rem;
  font-size: 0.875rem;
  @media screen and (min-width: ${I}) {
    font-size: 1.125rem;
  }
`,Kn=c.svg`
  margin-right: 0.375rem;
  &:last-child {
    margin-right: 0;
  }
`,Jn=c.div`
  background-color: ${({bgcolor:e})=>e?`var(${e})`:"var(--main-text-color)"};
  color: ${({bgcolor:e})=>e?"var(--main-text-color)":"var(--dark-text-color)"};

  max-width: 10.75rem;
  height: fit-content;

  border-radius: 1.5rem;

  padding: 0.67rem;

  position: relative;
  @media screen and (min-width: ${I}) {
    max-width: 15.93rem;
    padding: 1.25rem;
  }
  @media screen and (min-width: ${C}) {
    max-width: 21.06rem;
    padding: 1.25rem;
  }
`,qn=c.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
`,Xe=({svgTitle:e,title:r,graph:t,children:n,bgcolor:i})=>a.jsxs(Jn,{bgcolor:i,children:[a.jsxs(Wn,{children:[a.jsx(Xn,{children:a.jsx("use",{href:`${pe}${e}`})}),a.jsx(Yn,{children:r})]}),t?a.jsx(qn,{children:t.map(o=>a.jsx(Kn,{width:o.width,height:o.height,children:a.jsx("use",{href:`${pe}#${o.iconName}`})},o.iconName))}):n]}),Zn="/Cosmos-Landing-Page/assets/space-girl@x1-D_H_ZcxZ.png",$n="/Cosmos-Landing-Page/assets/space-girl@x2-CWP-wThc.png";c.div``;const _n=c.button`
  background-color: var(--btn-bg-color);
  color: var(--main-text-color);
  padding: 1.25rem 2.5rem;
  font-weight: 600;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: var(--diagram-color);
  }
  @media screen and(min-width: ${C}) {
    font-size: 1.5rem;
  }
`,ei=({children:e,onClick:r})=>a.jsx(_n,{onClick:r,children:e}),ri=()=>{const e=rt(),r=()=>{e("/getStarted")};return a.jsxs(a.Fragment,{children:[a.jsxs(In,{children:[a.jsx(En,{children:a.jsx(zn,{children:"Unveiling the Wonders of the Universe"})}),a.jsxs(Gn,{children:[a.jsx(Dn,{}),a.jsx(Pn,{src:`${Zn}`,srcSet:`${$n} 2x`,alt:"Space Girl"})]}),a.jsxs(Tn,{children:[a.jsx(Xe,{svgTitle:"#graph1",title:"Spacewalks",graph:[{width:"5.9375rem",height:"3.0625rem",iconName:"graph2"},{width:"2.9375rem",height:"2.9375rem",iconName:"graph3"}]}),a.jsx(Xe,{svgTitle:"#graph4",title:"Exercising",graph:[{width:"7.7156rem",height:"1.8125rem",iconName:"graph5"}]})]}),a.jsx(Ln,{children:a.jsx(Xe,{svgTitle:"#timeIcon",title:"Total time in space ",bgcolor:"--bg-color-diagram",children:a.jsx("span",{children:" 352D 5H 49M 20S"})})})]}),a.jsx(Bn,{children:a.jsx(Un,{children:"At odissey, our mission is to inspire, educate, and ignite your passion for the cosmos. We are your premier destination for all things related to space exploration, astronomy, and the mysteries of the universe. Whether you're a seasoned astronomer or a curious novice, join us on a journey to the furthest reaches of the cosmos."})}),a.jsxs(Vn,{children:[a.jsx(Qn,{children:a.jsx(ei,{onClick:r,children:"Get Started"})}),a.jsxs(Fn,{to:"https://www.youtube.com/watch?v=5_DZtCYhdXc",target:"_blank",rel:"noopener noreferrer",children:["Watch Video",a.jsx(Hn,{children:a.jsx(Mn,{children:a.jsx("use",{href:`${pe}#play`})})})]})]})]})},ti=c.svg`
  background-color: var(--diagram-color);
  padding: 0.875rem;
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 0.75rem;
  @media screen and (min-width: ${C}) {
    width: 6.25rem;
    height: 6.25rem;
    padding: 1.87rem;
  }
`,ni=c.h2`
  font-size: 1.125rem;
  font-weight: 800;
  color: var(--bg-color-diagram);
  margin-top: 0.75rem;
  @media screen and (min-width: ${C}) {
    font-size: 1.5rem;
  }
`,ii=c.p`
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.71;
  color: var(--hero-text-color);
  margin-top: 0.5rem;
  @media screen and (min-width: ${C}) {
    font-size: 1.125rem;
    line-height: 1.83;
  }
`,be=({iconName:e,title:r,paragraph:t})=>a.jsxs(a.Fragment,{children:[a.jsx(ti,{children:a.jsx("use",{href:`${pe}#${e}`})}),a.jsx(ni,{children:r}),a.jsx(ii,{children:t})]}),oi=c.h1`
  font-weight: 800;
  font-size: 2rem;
  color: var(--btn-bg-color);
  margin: 0 auto;
  @media screen and (min-width: ${re}) {
    font-size: 2.5rem;
    max-width: 23.4375rem;
    margin-top: 1rem;
  }
  @media screen and (min-width: ${C}) {
    font-size: 4rem;
    max-width: 35.8125rem;
  }
`,ai=c.section`
  margin-top: 4.375rem;
  padding: 0 1.5rem;
  @media screen and (min-width: ${I}) {
    display: flex;
    gap: 1rem;
  }
  @media screen and (min-width: ${C}) {
    display: flex;
    gap: 15.5rem;
  }
`,si=c.ul`
  margin-top: 2.5rem;
  @media screen and (min-width: ${re}) {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }
  @media screen and (min-width: ${I}) {
    margin-top: 0;
  }
  @media screen and (min-width: ${C}) {
    gap: 6.5rem;
  }
`,Se=c.li`
  @media screen and (min-width: ${re}) {
    max-width: 15.75rem;
  }
  @media screen and (min-width: ${C}) {
    max-width: 21rem;
  }
`,ci=()=>a.jsx("main",{children:a.jsxs(ai,{children:[a.jsx(oi,{children:"Join our vibrant community of space enthusiasts where you can"}),a.jsxs(si,{children:[a.jsx(Se,{children:a.jsx(be,{iconName:"astronomy",title:"Astronomy 101",paragraph:"Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."})}),a.jsx(Se,{children:a.jsx(be,{iconName:"latest-discoveries",title:"Latest Discoveries",paragraph:"Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration."})}),a.jsx(Se,{children:a.jsx(be,{iconName:"space-exploration",title:"Space Exploration",paragraph:"Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations."})}),a.jsx(Se,{children:a.jsx(be,{iconName:"space-technology",title:"Space Technology",paragraph:"Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems."})})]})]})}),ui=()=>a.jsxs(an,{children:[a.jsx(kn,{}),a.jsx(ri,{}),a.jsx(gn,{}),a.jsx(ci,{}),a.jsx(vn,{})]});export{ui as default};
