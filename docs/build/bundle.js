var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function c(n,e,o){n.$$.on_destroy.push(function(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}(e,o))}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function f(t){t.parentNode.removeChild(t)}function s(t){return document.createElement(t)}function a(t){return document.createTextNode(t)}function d(){return a(" ")}function p(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function h(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function g(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function $(t,n){t.value=null==n?"":n}let m;function b(t){m=t}const y=[],_=[],x=[],k=[],v=Promise.resolve();let w=!1;function E(t){x.push(t)}let O=!1;const S=new Set;function A(){if(!O){O=!0;do{for(let t=0;t<y.length;t+=1){const n=y[t];b(n),N(n.$$)}for(b(null),y.length=0;_.length;)_.pop()();for(let t=0;t<x.length;t+=1){const n=x[t];S.has(n)||(S.add(n),n())}x.length=0}while(y.length);for(;k.length;)k.pop()();w=!1,O=!1,S.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(E)}}const q=new Set;function C(t,n){t&&t.i&&(q.delete(t),t.i(n))}function j(t,e,u){const{fragment:c,on_mount:i,on_destroy:l,after_update:f}=t.$$;c&&c.m(e,u),E((()=>{const e=i.map(n).filter(r);l?l.push(...e):o(e),t.$$.on_mount=[]})),f.forEach(E)}function I(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function J(t,n){-1===t.$$.dirty[0]&&(y.push(t),w||(w=!0,v.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(n,r,u,c,i,l,s=[-1]){const a=m;b(n);const d=r.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:e(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:e(),dirty:s,skip_bound:!1};let h=!1;if(p.ctx=u?u(n,d,((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&i(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),h&&J(n,t)),e})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);p.fragment&&p.fragment.l(t),t.forEach(f)}else p.fragment&&p.fragment.c();r.intro&&C(n.$$.fragment),j(n,r.target,r.anchor),A()}b(a)}class P{$destroy(){I(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const T=[];const B=function(n,e=t){let o;const r=[];function c(t){if(u(n,t)&&(n=t,o)){const t=!T.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),T.push(e,n)}if(t){for(let t=0;t<T.length;t+=2)T[t][0](T[t+1]);T.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,i=t){const l=[u,i];return r.push(l),1===r.length&&(o=e(c)||t),u(n),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(JSON.parse(localStorage.getItem("queue"))||[]);function M(){B.update((t=>t.slice(1)))}function z(t,n,e){const o=t.slice();return o[1]=n[e],o[3]=e,o}function D(t){let n,e,o=t[1]+"";return{c(){n=s("li"),e=a(o)},m(t,o){l(t,n,o),i(n,e)},p(t,n){1&n&&o!==(o=t[1]+"")&&g(e,o)},d(t){t&&f(n)}}}function F(t){let n,e,o,r,u,c,$,m=t[1]+"";return{c(){n=s("li"),e=s("a"),o=a(m),u=d(),h(e,"href",r=t[1]),h(e,"target","_blank")},m(t,r){l(t,n,r),i(n,e),i(e,o),i(n,u),c||($=p(n,"click",M),c=!0)},p(t,n){1&n&&m!==(m=t[1]+"")&&g(o,m),1&n&&r!==(r=t[1])&&h(e,"href",r)},d(t){t&&f(n),c=!1,$()}}}function G(t){let n;let e=function(t,n){return 0===t[3]?F:D}(t)(t);return{c(){e.c(),n=a("")},m(t,o){e.m(t,o),l(t,n,o)},p(t,n){e.p(t,n)},d(t){e.d(t),t&&f(n)}}}function H(n){let e,o=n[0],r=[];for(let t=0;t<o.length;t+=1)r[t]=G(z(n,o,t));return{c(){e=s("ol");for(let t=0;t<r.length;t+=1)r[t].c();h(e,"id","queue")},m(t,n){l(t,e,n);for(let t=0;t<r.length;t+=1)r[t].m(e,null)},p(t,[n]){if(1&n){let u;for(o=t[0],u=0;u<o.length;u+=1){const c=z(t,o,u);r[u]?r[u].p(c,n):(r[u]=G(c),r[u].c(),r[u].m(e,null))}for(;u<r.length;u+=1)r[u].d(1);r.length=o.length}},i:t,o:t,d(t){t&&f(e),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function K(t,n,e){let o;return c(t,B,(t=>e(0,o=t))),[o]}B.subscribe((t=>localStorage.setItem("queue",JSON.stringify(t))));class Q extends P{constructor(t){super(),L(this,t,K,H,u,{})}}function R(t){let n,e,r,u,c,i,a,g,m,b;return a=new Q({}),{c(){var t;n=s("input"),e=d(),r=s("button"),r.textContent="Add",u=d(),c=s("button"),c.textContent="Pop",i=d(),(t=a.$$.fragment)&&t.c(),h(r,"id","add"),h(c,"id","pop")},m(o,f){l(o,n,f),$(n,t[0]),l(o,e,f),l(o,r,f),l(o,u,f),l(o,c,f),l(o,i,f),j(a,o,f),g=!0,m||(b=[p(n,"input",t[3]),p(n,"keydown",t[2]),p(r,"click",t[1]),p(c,"click",M)],m=!0)},p(t,[e]){1&e&&n.value!==t[0]&&$(n,t[0])},i(t){g||(C(a.$$.fragment,t),g=!0)},o(t){!function(t,n,e,o){if(t&&t.o){if(q.has(t))return;q.add(t),(void 0).c.push((()=>{q.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}(a.$$.fragment,t),g=!1},d(t){t&&f(n),t&&f(e),t&&f(r),t&&f(u),t&&f(c),t&&f(i),I(a,t),m=!1,o(b)}}}function U(t,n,e){let o,r;function u(){r&&(B.set([...o,r]),e(0,r=""))}return c(t,B,(t=>e(4,o=t))),[r,u,function({key:t}){"Enter"===t&&u()},function(){r=this.value,e(0,r)}]}return new class extends P{constructor(t){super(),L(this,t,U,R,u,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
