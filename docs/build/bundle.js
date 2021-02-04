var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function s(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function u(e){e.parentNode.removeChild(e)}function a(e){return document.createElement(e)}function i(e,t){return document.createElement(e,{is:t})}function d(){return e=" ",document.createTextNode(e);var e}function f(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function p(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function m(e,t){e.value=null==t?"":t}let h;function v(e){h=e}function q(){if(!h)throw new Error("Function called outside component initialization");return h}function y(){const e=q();return(t,n)=>{const o=e.$$.callbacks[t];if(o){const r=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);o.slice().forEach((t=>{t.call(e,r)}))}}}const k=[],g=[],b=[],$=[],x=Promise.resolve();let S=!1;function C(e){b.push(e)}let E=!1;const F=new Set;function w(){if(!E){E=!0;do{for(let e=0;e<k.length;e+=1){const t=k[e];v(t),L(t.$$)}for(v(null),k.length=0;g.length;)g.pop()();for(let e=0;e<b.length;e+=1){const t=b[e];F.has(t)||(F.add(t),t())}b.length=0}while(k.length);for(;$.length;)$.pop()();S=!1,E=!1,F.clear()}}function L(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(C)}}const I=new Set;function _(e,t){e&&e.i&&(I.delete(e),e.i(t))}function T(e,n,c){const{fragment:s,on_mount:l,on_destroy:u,after_update:a}=e.$$;s&&s.m(n,c),C((()=>{const n=l.map(t).filter(r);u?u.push(...n):o(n),e.$$.on_mount=[]})),a.forEach(C)}function A(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function M(e,t){-1===e.$$.dirty[0]&&(k.push(e),S||(S=!0,x.then(w)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function z(t,r,c,s,l,a,i=[-1]){const d=h;v(t);const f=t.$$={fragment:null,ctx:null,props:a,update:e,not_equal:l,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:n(),dirty:i,skip_bound:!1};let p=!1;if(f.ctx=c?c(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&l(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),p&&M(t,e)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(u)}else f.fragment&&f.fragment.c();r.intro&&_(t.$$.fragment),T(t,r.target,r.anchor),w()}v(d)}class B{$destroy(){A(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Y(t){let n,r,c,h,v,q,y,k,g,b,$,x,S,C,E,F,w,L,I,_,T,A,M,z,B,Y,N,H,R,X,j,O,P;return{c(){n=a("div"),r=a("div"),r.innerHTML='<coral-icon icon="ColorWheel" size="XS" class="svelte-1qqsqks"></coral-icon> \n    <span class="toolName">Picker</span>',c=d(),h=a("div"),v=a("div"),q=a("div"),y=a("div"),k=a("div"),g=a("div"),b=d(),$=a("div"),x=d(),S=a("div"),C=a("div"),E=d(),F=a("div"),w=d(),L=a("div"),I=a("div"),_=a("div"),T=d(),A=a("div"),M=d(),z=a("div"),B=a("div"),B.innerHTML='<button id="maincolor" class="colorSwatch svelte-1qqsqks"><div class="mainSelectedColor svelte-1qqsqks"></div></button> \n      <button id="subcolor" class="colorSwatch svelte-1qqsqks"><div class="subSelectedColor svelte-1qqsqks"></div></button>',Y=d(),N=a("label"),N.textContent="Hex:",H=d(),R=i("input","coral-textfield"),X=d(),j=i("input","coral-textfield"),p(r,"class","toolNameArea svelte-1qqsqks"),p(g,"id","colorsquare-picker"),p(g,"class","svelte-1qqsqks"),p($,"id","colorsquare-event"),p($,"class","svelte-1qqsqks"),p(k,"class","value-gradient svelte-1qqsqks"),p(y,"class","saturation-gradient svelte-1qqsqks"),p(q,"id","colorArea"),p(q,"class","svelte-1qqsqks"),p(v,"id","colorAreaContainer"),p(v,"class","svelte-1qqsqks"),p(C,"id","hue-picker"),p(C,"class","svelte-1qqsqks"),p(F,"id","hue-event"),p(F,"class","svelte-1qqsqks"),p(S,"id","colorSlider"),p(S,"class","svelte-1qqsqks"),p(_,"id","alpha-picker"),p(_,"class","svelte-1qqsqks"),p(A,"id","alpha-event"),p(A,"class","svelte-1qqsqks"),p(I,"id","alphaSliderColor"),p(I,"class","svelte-1qqsqks"),p(L,"id","alphaSlider"),p(L,"class","svelte-1qqsqks"),p(h,"class","toolAreaContainer svelte-1qqsqks"),p(h,"id","pickerAreaContainer"),p(B,"class","selectColor svelte-1qqsqks"),p(N,"for","hexInput"),p(N,"class","coral-FieldLabel svelte-1qqsqks"),p(R,"type","text"),p(R,"is","coral-textfield"),p(R,"variant","quiet"),p(R,"aria-label","text input"),p(R,"id","hexInput"),p(R,"class","svelte-1qqsqks"),p(j,"type","text"),p(j,"is","coral-textfield"),p(j,"variant","quiet"),p(j,"aria-label","text input"),p(j,"id","alphaInput"),p(j,"class","svelte-1qqsqks"),p(z,"class","colorSelectContainer svelte-1qqsqks"),p(n,"class","toolArea svelte-1qqsqks")},m(e,o){l(e,n,o),s(n,r),s(n,c),s(n,h),s(h,v),s(v,q),s(q,y),s(y,k),s(k,g),s(k,b),s(k,$),s(h,x),s(h,S),s(S,C),s(S,E),s(S,F),s(h,w),s(h,L),s(L,I),s(I,_),s(I,T),s(I,A),s(n,M),s(n,z),s(z,B),s(z,Y),s(z,N),s(z,H),s(z,R),m(R,t[1]),s(z,X),s(z,j),m(j,t[0]),O||(P=[f($,"mousedown",t[2]),f($,"touchstart",t[3]),f(F,"mousedown",t[4]),f(F,"touchstart",t[5]),f(A,"mousedown",t[6]),f(A,"touchstart",t[7]),f(R,"input",t[10]),f(j,"input",t[11])],O=!0)},p(e,t){2&t[0]&&R.value!==e[1]&&m(R,e[1]),1&t[0]&&j.value!==e[0]&&m(j,e[0])},i:e,o:e,d(e){e&&u(n),O=!1,o(P)}}}function N(e,t,n){let o=document.querySelector(e);o&&o.removeEventListener(t,n)}function H(e,t,n){var o,r,c,s=Math.floor(6*e),l=6*e-s,u=n*(1-t),a=n*(1-l*t),i=n*(1-(1-l)*t);switch(s%6){case 0:o=n,r=i,c=u;break;case 1:o=a,r=n,c=u;break;case 2:o=u,r=n,c=i;break;case 3:o=u,r=a,c=n;break;case 4:o=i,r=u,c=n;break;case 5:o=n,r=u,c=a}return[Math.round(255*o),Math.round(255*r),Math.round(255*c)]}function R(e,t,n){let o,r,c,s,l,u,a,{startColor:i}=t,d="#000000",f="#FFFFFF",p=1,m=!0;var h;i=m?d:f,h=()=>{document.addEventListener("mouseup",Y),document.addEventListener("touchend",Y),document.addEventListener("mousemove",A),document.addEventListener("touchmove",M),document.addEventListener("touchstart",I),document.addEventListener("mousedown",_),L(),r=document.getElementById("maincolor"),c=document.getElementById("subcolor"),s=document.querySelector(".mainSelectedColor"),l=document.querySelector(".subSelectedColor"),u=document.querySelector("#alphaInput"),a=document.querySelector("#hexInput"),u.addEventListener("keypress",F),a.addEventListener("keypress",w),s.style.background=d,l.style.background=f,m?(r.style.zIndex="1",c.style.zIndex="0"):(r.style.zIndex="0",c.style.zIndex="1"),r.onclick=()=>{r.style.zIndex="1",c.style.zIndex="0",n(8,i=d),m=!0,L()},c.onclick=()=>{r.style.zIndex="0",c.style.zIndex="1",n(8,i=f),m=!1,L()}},q().$$.on_mount.push(h),Number.prototype.mod=function(e){return(this%e+e)%e};const v=y();let k,g,b=1,$=1,x=1,S=255,C=0,E=0;const F=e=>{let t;13!==e.keyCode&&9!==e.keyCode||(o.match(/[0-9]/)&&(t=parseInt(o,10)/100),t<0&&(t=0),t>1&&(t=1),n(9,p=t),T(),O())},w=e=>{13!==e.keyCode&&9!==e.keyCode||(m?(d=g,n(8,i=d)):(f=g,n(8,i=f)),L())};function L(){let e=i.replace("#","");if(e.match(/([^A-F0-9])/gi))return void alert("Invalid property value (startColor)");switch(e.length){case 0:e="000";break;case 1:e+="00";break;case 2:e+="0";break;case 4:e+="00";break;case 5:e+="0"}let t="";3===e.length?e.split("").forEach((e=>{t+=e+e})):t=e,n(1,g=t),S=parseInt(t.substring(0,2),16),C=parseInt(t.substring(2,4),16),E=parseInt(t.substring(4,6),16),function(e,t,n,o){let r,c,s,l,u,a,i,d,f,p;r=e/255,c=t/255,s=n/255,l=Math.max(r,c,s),u=Math.min(r,c,s),a=l-u,p=l,f=0==p?0:a/l;for(let e=0;e<3;e++)if([r,c,s][e]===l){i=e;break}if(0==a)return d=0,o?(b=d,$=f,x=p,void j()):{h:d,s:f,v:p};switch(i){case 0:d=(c-s)/a%6*60/360;break;case 1:d=60*((s-r)/a+2)/360;break;case 2:d=60*((r-c)/a+4)/360}d<0&&(d+=6);if(!o)return{h:d,s:f,v:p};b=d,$=f,x=p,j()}(S,C,E,!0),function(){let e=document.querySelector("#colorsquare-picker"),t=100*$,n=100*(1-x);e.style.top=n+"%",e.style.left=t+"%"}(),function(){let e=document.querySelector("#hue-picker"),t=100-100*b;for(;t<0;)t+=100;e.style.top=t+"%"}(),T()}function I(){N("#alpha-event","mousedown",P),N("#colorsquare-event","mousedown",z),N("#hue-event","mousedown",R),document.removeEventListener("mouseup",Y),document.removeEventListener("mousemove",A),document.removeEventListener("touchstart",I),document.removeEventListener("mousedown",_)}function _(){N("#alpha-event","touchstart",G),N("#colorsquare-event","touchstart",B),N("#hue-event","touchstart",X),document.removeEventListener("touchend",Y),document.removeEventListener("touchmove",M),document.removeEventListener("touchstart",I),document.removeEventListener("mousedown",_)}function T(){let e=document.querySelector("#alpha-picker"),t=100*p;e.style.top=100-t+"%"}function A(e){if(k){let t,o,r,c=e.clientX,s=e.clientY,l=k.getBoundingClientRect();switch(k.id){case"colorsquare-event":t=(c-l.x)/176*100,o=(s-l.y)/176*100,t>100?t=100:t<0&&(t=0),o>100?o=100:o<0&&(o=0),r=document.querySelector("#colorsquare-picker"),o=o.toFixed(2),t=t.toFixed(2),r.style.top=o+"%",r.style.left=t+"%",$=t/100,x=1-o/100,O();break;case"hue-event":o=(s-l.y)/176*100,o>100?o=100:o<0&&(o=0),o=o.toFixed(2),r=document.querySelector("#hue-picker"),r.style.top=o+"%",b=1-o/100,j();break;case"alpha-event":o=(s-l.y)/176*100,o>100?o=100:o<0&&(o=0),o=o.toFixed(2),r=document.querySelector("#alpha-picker"),r.style.top=o+"%",n(9,p=1-o/100),O()}}}function M(e){if(k){let t,o,r,c=e.touches[0].clientX,s=e.touches[0].clientY,l=k.getBoundingClientRect();switch(k.id){case"colorsquare-event":t=(c-l.x)/176*100,o=(s-l.y)/176*100,t>100?t=100:t<0&&(t=0),o>100?o=100:o<0&&(o=0),r=document.querySelector("#colorsquare-picker"),o=o.toFixed(2),t=t.toFixed(2),r.style.top=o+"%",r.style.left=t+"%",$=t/100,x=1-o/100,O();break;case"hue-event":o=(s-l.y)/176*100,o>100?o=100:o<0&&(o=0),o=o.toFixed(2),r=document.querySelector("#hue-picker"),r.style.top=o+"%",b=1-o/100,j();break;case"alpha-event":o=(s-l.y)/176*100,o>100?o=100:o<0&&(o=0),o=o.toFixed(2),r=document.querySelector("#alpha-picker"),r.style.top=o+"%",n(9,p=1-o/100),O()}}}function z(e){k=e.currentTarget;let t=(e.offsetX+1)/176*100,n=(e.offsetY+1)/176*100;n=n.toFixed(2),t=t.toFixed(2);let o=document.querySelector("#colorsquare-picker");o.style.top=n+"%",o.style.left=t+"%",$=t/100,x=1-n/100,O()}function B(e){k=e.currentTarget;let t=e.target.getBoundingClientRect(),n=(e.targetTouches[0].clientX-t.left+1)/176*100,o=(e.targetTouches[0].clientY-t.top+1)/176*100;o=o.toFixed(2),n=n.toFixed(2);let r=document.querySelector("#colorsquare-picker");r.style.top=o+"%",r.style.left=n+"%",$=n/100,x=1-o/100,O()}function Y(e){k=null}function R(e){k=e.currentTarget;let t=e.offsetY/176*100;t=t.toFixed(2),document.querySelector("#hue-picker").style.top=t+"%",b=1-t/100,j()}function X(e){k=e.currentTarget;let t=e.target.getBoundingClientRect(),n=(e.targetTouches[0].clientY-t.top)/176*100;n=n.toFixed(2),document.querySelector("#hue-picker").style.top=n+"%",b=1-n/100,j()}function j(){let e=H(b,1,1),t=document.querySelector("#colorArea"),n=document.querySelector("#hue-picker");t.style.background=`rgba(${e[0]},${e[1]},${e[2]},1)`,n.style.background=`rgba(${e[0]},${e[1]},${e[2]},1)`,O()}function O(){let e=H(b,$,x);S=e[0],C=e[1],E=e[2],n(1,g=function(){let e=S.toString(16),t=C.toString(16),n=E.toString(16);1==e.length&&(e="0"+e);1==t.length&&(t="0"+t);1==n.length&&(n="0"+n);return("#"+e+t+n).toUpperCase()}());let t=document.querySelector("#alphaSliderColor"),o=document.querySelector("#alpha-picker"),r=document.querySelector("#colorsquare-picker");if(o.style.background=`rgba(${e[0]},${e[1]},${e[2]},${p})`,r.style.background=`rgba(${e[0]},${e[1]},${e[2]},1)`,t.style.background=`linear-gradient(to bottom, rgba(${e[0]},${e[1]},${e[2]},1) 0%, rgba(0, 0, 0, 0) 100%)`,m){document.querySelector(".mainSelectedColor").style.background=`rgba(${e[0]},${e[1]},${e[2]},${p})`,d=g}else{document.querySelector(".subSelectedColor").style.background=`rgba(${e[0]},${e[1]},${e[2]},${p})`,f=g}v("colorChange",{r:S,g:C,b:E,a:p})}function P(e){k=e.currentTarget;let t=e.offsetY/176*100;t=t.toFixed(2),document.querySelector("#alpha-picker").style.top=t+"%",n(9,p=1-t/100),O()}function G(e){k=e.currentTarget;let t=e.target.getBoundingClientRect(),o=(e.targetTouches[0].clientY-t.top)/176*100;o=o.toFixed(2),document.querySelector("#alpha-picker").style.top=o+"%",n(9,p=1-o/100),O()}return e.$$set=e=>{"startColor"in e&&n(8,i=e.startColor)},e.$$.update=()=>{512&e.$$.dirty[0]&&n(0,o=Math.round(100*p)+"%")},[o,g,z,B,R,X,P,G,i,p,function(){g=this.value,n(1,g)},function(){o=this.value,n(0,o),n(9,p)}]}class X extends B{constructor(e){super(),z(this,e,R,Y,c,{startColor:8},[-1,-1])}}function j(t){let n,o,r,c,i,f,m;return f=new X({}),{c(){var e;n=a("main"),o=a("span"),o.innerHTML='<a href="https://github.com/minorin22/svelte-color-picker">Fork me on GitHub</a>',r=d(),c=a("h1"),c.textContent="Svelte Color Picker",i=d(),(e=f.$$.fragment)&&e.c(),p(o,"id","forkongithub")},m(e,t){l(e,n,t),s(n,o),s(n,r),s(n,c),s(n,i),T(f,n,null),m=!0},p:e,i(e){m||(_(f.$$.fragment,e),m=!0)},o(e){!function(e,t,n,o){if(e&&e.o){if(I.has(e))return;I.add(e),(void 0).c.push((()=>{I.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}(f.$$.fragment,e),m=!1},d(e){e&&u(n),A(f)}}}return new class extends B{constructor(e){super(),z(this,e,null,j,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map