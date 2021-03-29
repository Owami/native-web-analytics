!function(i,o){"use strict";var e,l=i.location,s=i.document,t=s.querySelector('[src*="'+o+'"]'),c=t&&t.getAttribute("data-domain"),p=i.localStorage.plausible_ignore,u=t&&t.getAttribute("data-exclude").split(",");function h(e){console.warn("Ignoring Event: "+e)}function a(e,t){if(/^localhost$|^127(?:\.[0-9]+){0,2}\.[0-9]+$|^(?:0*\:)*?:?0*1$/.test(l.hostname)||"file:"===l.protocol)return h("localhost");if(!(i.phantom||i._phantom||i.__nightmare||i.navigator.webdriver||i.Cypress)){if("true"==p)return h("localStorage flag");if(u)for(var a=0;a<u.length;a++)if("pageview"==e&&l.pathname.match(new RegExp("^"+u[a].trim().replace(/\*\*/g,".*").replace(/([^\.])\*/g,"$1[^\\s/]*")+"/?$")))return h("exclusion rule");var r={};r.n=e,r.u=l.href,r.d=c,r.r=s.referrer||null,r.w=i.innerWidth,t&&t.meta&&(r.m=JSON.stringify(t.meta)),t&&t.props&&(r.p=JSON.stringify(t.props)),r.h=1;var n=new XMLHttpRequest;n.open("POST",o+"/api/event",!0),n.setRequestHeader("Content-Type","text/plain"),n.send(JSON.stringify(r)),n.onreadystatechange=function(){4==n.readyState&&t&&t.callback&&t.callback()}}}function r(){e=l.pathname,a("pageview")}function n(e){for(var t=e.target,a="auxclick"==e.type&&2==e.which,r="click"==e.type;t&&(void 0===t.tagName||"a"!=t.tagName.toLowerCase()||!t.href);)t=t.parentNode;t&&t.href&&t.host&&t.host!==l.host&&((a||r)&&plausible("Outbound Link: Click",{props:{url:t.href}}),t.target&&!t.target.match(/^_(self|parent|top)$/i)||e.ctrlKey||e.metaKey||e.shiftKey||!r||(setTimeout(function(){l.href=t.href},150),e.preventDefault()))}try{i.addEventListener("hashchange",r),s.addEventListener("click",n),s.addEventListener("auxclick",n);var f=i.plausible&&i.plausible.q||[];i.plausible=a;for(var g=0;g<f.length;g++)a.apply(this,f[g]);"prerender"===s.visibilityState?s.addEventListener("visibilitychange",function(){e||"visible"!==s.visibilityState||r()}):r()}catch(e){console.error(e),(new Image).src=o+"/api/error?message="+encodeURIComponent(e.message)}}(window,"<%= base_url %>");