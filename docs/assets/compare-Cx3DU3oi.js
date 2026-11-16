import{t as e}from"./react-CAzQRxiY.js";var t=e(),n=(function(){function e(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function t(e){return function(){e|=0,e=e+1831565813|0;var t=Math.imul(e^e>>>15,1|e);return t=t+Math.imul(t^t>>>7,61|t)^t,((t^t>>>14)>>>0)/4294967296}}function n(e){return e=String(e||``).trim(),/^#[0-9a-f]{3}$/i.test(e)&&(e=`#`+e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),/^#[0-9a-f]{6}$/i.test(e)?e.toLowerCase():null}function r(e){var t=parseInt(n(e).slice(1),16);return[t>>16&255,t>>8&255,t&255]}function i(e){var t=r(e);return(t[0]*299+t[1]*587+t[2]*114)/1e3}function a(e){var t=r(e),n=Math.max.apply(0,t),i=Math.min.apply(0,t);return n?(n-i)/n:0}function o(e){return i(e)>150?`#111111`:`#ffffff`}function s(e,t,n){var i=r(e),a=r(t);return`#`+i.map(function(e,t){return(`0`+Math.round(e+(a[t]-e)*n).toString(16)).slice(-2)}).join(``)}var c=[{name:`Wetland`,bg:`#fbfaf6`,ink:`#193a3a`,acc:`#b07b37`,soft:`#e9f2ee`},{name:`Harbour`,bg:`#f6f4ee`,ink:`#0f2f4a`,acc:`#a8481f`,soft:`#d9e4ec`},{name:`Forest`,bg:`#f3f1e7`,ink:`#1f3d2b`,acc:`#c98a1b`,soft:`#dde6d0`},{name:`Night`,bg:`#101820`,ink:`#f2eee3`,acc:`#f2b544`,soft:`#1e2c38`},{name:`Clear`,bg:`#ffffff`,ink:`#0f2a43`,acc:`#c93e22`,soft:`#dce8f2`},{name:`Stone`,bg:`#f7f5f0`,ink:`#222222`,acc:`#2f6f6b`,soft:`#dce9e6`},{name:`Clay`,bg:`#f5eee4`,ink:`#2b1b12`,acc:`#8a3b12`,soft:`#ebd7be`},{name:`Lake`,bg:`#f2f7f8`,ink:`#0b2e3a`,acc:`#0a7d8c`,soft:`#cfe6ea`}],l=[{name:`Classic serif`,h:`Georgia,"Times New Roman",serif`,b:`system-ui,-apple-system,"Segoe UI",sans-serif`,w:700},{name:`Modern sans`,h:`"Helvetica Neue",Arial,sans-serif`,b:`"Helvetica Neue",Arial,sans-serif`,w:800},{name:`Friendly`,h:`"Trebuchet MS",Verdana,sans-serif`,b:`Verdana,Geneva,sans-serif`,w:700},{name:`Book`,h:`"Palatino Linotype",Palatino,serif`,b:`Georgia,serif`,w:700},{name:`System`,h:`system-ui,-apple-system,"Segoe UI",sans-serif`,b:`system-ui,-apple-system,"Segoe UI",sans-serif`,w:750},{name:`Newspaper`,h:`"Times New Roman",Times,serif`,b:`Georgia,serif`,w:800}],u=[`<circle cx="15" cy="25" r="12" fill="none" stroke="@i" stroke-width="4"/><circle cx="35" cy="25" r="12" fill="none" stroke="@i" stroke-width="4"/><circle cx="15" cy="25" r="5" fill="@a"/><circle cx="35" cy="25" r="5" fill="@a"/>`,`<path d="M25 8V26M25 26L10 43M25 26L40 43" fill="none" stroke="@i" stroke-width="5" stroke-linecap="round"/><circle cx="25" cy="8" r="5" fill="@a"/>`,`<rect x="10" y="14" width="6" height="30" rx="3" fill="@i"/><rect x="22" y="6" width="6" height="38" rx="3" fill="@i"/><rect x="34" y="18" width="6" height="26" rx="3" fill="@i"/><circle cx="25" cy="6" r="5" fill="@a"/>`,`<path d="M6 32A19 19 0 0 1 44 32Z" fill="@a"/><rect x="4" y="37" width="42" height="5" rx="2" fill="@i"/>`,`<polygon points="25,6 40,26 10,26" fill="@a"/><polygon points="25,20 44,44 6,44" fill="@i"/>`,`<path d="M5 18Q15 8 25 18T45 18" fill="none" stroke="@i" stroke-width="4" stroke-linecap="round"/><path d="M5 31Q15 21 25 31T45 31" fill="none" stroke="@a" stroke-width="4" stroke-linecap="round"/><circle cx="25" cy="42" r="3" fill="@i"/>`,`<circle cx="25" cy="25" r="19" fill="none" stroke="@i" stroke-width="4"/><path d="M25 6V44M6 25H44" stroke="@a" stroke-width="4"/>`,`<ellipse cx="17" cy="22" rx="9" ry="11" fill="none" stroke="@i" stroke-width="4"/><ellipse cx="33" cy="22" rx="9" ry="11" fill="none" stroke="@i" stroke-width="4"/><circle cx="17" cy="23" r="4" fill="@a"/><circle cx="33" cy="23" r="4" fill="@a"/><path d="M21 38L25 44L29 38" fill="@a"/>`];function d(t,n,r,i,a){var o=t.up?n.toUpperCase():n,s=t.up?22:28,c=Math.max(o.length,3)*s*.6+16,l=u[t.mark%u.length].replace(/@i/g,i.ink).replace(/@a/g,i.acc),d=` font-family='`+a.h+`' font-weight="`+a.w+`" font-size="`+s+`" fill="`+i.ink+`"`,f=` role="img" aria-label="`+e(n)+` logo"`;if(t.lay==0)return`<svg viewBox="0 0 `+(84+c)+` 80" height="`+r+`"`+f+`><g transform="translate(8,8) scale(1.28)">`+l+`</g><text x="84" y="49"`+d+`>`+e(o)+`</text></svg>`;if(t.lay==2)return`<svg viewBox="0 0 80 80" height="`+r+`"`+f+`><g transform="translate(8,8) scale(1.28)">`+l+`</g></svg>`;var p=Math.max(120,c);return`<svg viewBox="0 0 `+p+` 120" height="`+r+`"`+f+`><g transform="translate(`+(p/2-32)+`,2) scale(1.28)">`+l+`</g><text x="`+p/2+`" y="108" text-anchor="middle"`+d+`>`+e(o)+`</text></svg>`}function f(e,n){var r=t(e.s),i=`<rect width="1600" height="900" fill="`+n.soft+`"/>`,a,o;if(e.k==0)for(i+=`<circle cx="`+(300+r()*1e3)+`" cy="`+(200+r()*150)+`" r="`+(80+r()*60)+`" fill="`+n.acc+`"/>`,a=0;a<3;a++)o=430+a*150,i+=`<path d="M0 `+o+`C400 `+(o-120+r()*160)+` 900 `+(o+100-r()*160)+` 1600 `+(o-40+r()*80)+`L1600 900L0 900Z" fill="`+n.ink+`" fill-opacity="`+[.3,.6,1][a]+`"/>`;else if(e.k==1)for(i+=`<circle cx="`+(250+r()*1100)+`" cy="230" r="110" fill="`+n.acc+`"/>`,a=0;a<3;a++){var s=r()*1e3;i+=`<polygon points="`+s+`,900 `+(s+350+r()*150)+`,`+(280+a*110+r()*80)+` `+(s+800)+`,900" fill="`+n.ink+`" fill-opacity="`+[.3,.6,1][a]+`"/>`}else if(e.k==2)for(a=0;a<6;a++)o=250+a*110,i+=`<path d="M0 `+o+`Q200 `+(o-70)+` 400 `+o+`T800 `+o+`T1200 `+o+`T1600 `+o+`V900H0Z" fill="`+(a%2?n.acc:n.ink)+`" fill-opacity="`+(.25+a*.15)+`"/>`;else if(e.k==3){for(i+=`<circle cx="800" cy="470" r="270" fill="`+n.acc+`"/>`,a=0;a<6;a++)i+=`<rect x="500" y="`+(430+a*42)+`" width="600" height="`+(6+a*5)+`" fill="`+n.soft+`"/>`;i+=`<rect y="690" width="1600" height="210" fill="`+n.ink+`"/>`}else for(a=0;a<40;a++){var c=r()*1600,l=r()*900;i+=`<circle cx="`+c+`" cy="`+l+`" r="`+(20+r()*90)+`" fill="`+(r()<.3?n.acc:n.ink)+`" fill-opacity="`+(.15+r()*.5)+`"/>`}return`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Hero image">`+i+`</svg>`}function p(e,n){var r=t(e.s),i=`<rect width="200" height="200" fill="`+n.soft+`"/>`,a,o;if(e.k==0)for(a=0;a<3;a++){var s=60+r()*60;i+=`<path d="M`+(24+a*52)+` 180V`+(180-s)+`a24 24 0 0 1 48 0V180Z" fill="`+(a==1?n.acc:n.ink)+`"/>`}else if(e.k==1)i+=`<circle cx="100" cy="`+(70+r()*20)+`" r="34" fill="`+n.acc+`"/><path d="M0 150Q60 `+(110+r()*20)+` 120 150T200 140V200H0Z" fill="`+n.ink+`" fill-opacity=".55"/><path d="M0 175Q70 `+(140+r()*20)+` 140 172T200 165V200H0Z" fill="`+n.ink+`"/>`;else if(e.k==2)for(a=0;a<5;a++)for(o=0;o<5;o++)i+=`<circle cx="`+(30+o*35)+`" cy="`+(30+a*35)+`" r="`+(4+r()*11)+`" fill="`+(r()<.3?n.acc:n.ink)+`"/>`;else if(e.k==3)for(i+=`<path d="M100 185V60" stroke="`+n.ink+`" stroke-width="4"/>`,a=0;a<4;a++){var c=75+a*28,l=a%2?n.acc:n.ink;i+=`<ellipse cx="74" cy="`+c+`" rx="26" ry="11" fill="`+l+`" transform="rotate(-25 74 `+c+`)"/><ellipse cx="126" cy="`+c+`" rx="26" ry="11" fill="`+l+`" transform="rotate(25 126 `+c+`)"/>`}else if(e.k==4)for(a=0;a<4;a++){var u=60+r()*100;i+=`<rect x="`+(100-u/2)+`" y="`+(30+a*38)+`" width="`+u+`" height="28" rx="14" fill="`+(a%2?n.acc:n.ink)+`"/>`}else i+=`<path d="M30 160L100 40L170 160Z" fill="`+n.ink+`"/><circle cx="100" cy="115" r="22" fill="`+n.acc+`"/>`;return`<svg viewBox="0 0 200 200" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Illustration">`+i+`</svg>`}function m(e,n,r){for(var i=t(n*7919+e.length*31),a=[],o=0;o<r;o++){var s={kind:`svg`};e==`logo`?(s.mark=i()*u.length|0,s.lay=i()<.45?0:i()<.7?1:2,s.up=i()<.3):(s.k=i()*(e==`hero`?5:6)|0,s.s=i()*1e6|0),a.push(s)}return a}return{esc:e,rng:t,hex:n,lum:i,sat:a,onColor:o,mix:s,PALETTES:c,FONTS:l,logo:d,hero:f,ill:p,genOptions:m}})(),r={pro:{name:`PRO`,full:`BAKE Studio PRO`,who:`For clients: anyone making a site`,blurb:`Try every template, section and extension, premium ones included. Pay only for what you use when you publish or download the code.`},baker:{name:`BAKER`,full:`BAKE Studio BAKER`,who:`For Bakers: the experts`,blurb:`Everything in PRO, plus the markets: sell templates, sections and extensions, bid on tasks and build your portfolio on bakedbya.pro.`,markets:!0}},i=Object.keys(r);function a(e){return e==`baker`?`baker`:`pro`}function o(e){return r[a(e.edition)]}var s=[{k:`services`,name:`Services`,blurb:`Bid on tasks clients post.`},{k:`templates`,name:`Templates`,blurb:`Make and submit whole-site templates.`},{k:`sections`,name:`Sections`,blurb:`Make and submit section designs.`},{k:`extensions`,name:`Extensions`,blurb:`Make and submit add-ons for sites.`}],c={bakedby:{name:`bakedby.me`,host:`bakedby.me`,blurb:`Free for anyone. You pay only the cart.`},rezsite:{name:`rezsite.com`,host:`rezsite.com`,blurb:`Free for First Nations, Métis and Inuit people, businesses and communities, with lower prices.`},own:{name:`Your own domain`,host:``,blurb:`A new domain (+$50 plus its price) or one you already own (+$100).`}},l=Object.keys(c),u=()=>!1;function d(e){u=typeof e==`function`?e:()=>!1}function f(e){try{return!!u(e)}catch{return!1}}function p(e){return!f(e)}var m=o,h=`bake-studio-v2`;function g(){return{v:3,step:1,edition:`pro`,source:{has:!0,url:`https://deltaowleyes.ca/`,log:[],found:null},biz:{name:`Your business`,desc:``},brand:{pal:Object.assign({},n.PALETTES[0]),palFound:null,font:0,seed:{logo:0,hero:0,ill:0},opts:{logo:[],hero:[],ill:[]},pick:{},star:{}},pages:[],lib:[],footer:{motto:``,text:``},menu:{items:[],cta:{label:`Contact us`,href:`#contact`},vp:{desktop:{type:`bar`,logo:`left`,sticky:!0,cta:!1,search:!1},tablet:{type:`hamburger`,logo:`left`,sticky:!0,cta:!1,search:!1},phone:{type:`hamburger`,logo:`left`,sticky:!0,cta:!1,search:!1}}},tpl:{pick:null,view:null,fav:{},all:!1,favOnly:!1,vk:{}},notes:[],req:{name:``,email:``,dest:`bakedby`},ai:{endpoint:``},ui:{vp:`desktop`,tvp:`all`,mvp:`desktop`,btab:`logo`,bsrc:`svg`,sel:null,open:!1,prompt:{},page:null,tpage:null,pasteFor:null,libq:``,insp:{open:!1,tab:`section`,key:null,item:null}}}}function _(){try{let e=JSON.parse(localStorage.getItem(`bake-studio-v2`)||`null`);if(e&&e.v==2&&(e.v=3,e.pages=[{id:`p-home`,name:`Home`,url:e.source&&e.source.url||``,status:`imported`,sections:e.sections||[]}],delete e.sections,e.lib=[],[`logo`,`hero`].forEach(t=>e.brand.opts[t].forEach(n=>{n.from==`site`&&e.lib.push({id:n.id,src:n.src,label:n.label||``,logo:t==`logo`})}))),e&&(e.edition=a(e.edition)),e&&e.v==3){let t=g();for(let n in t)n in e||(e[n]=t[n]);for(let n in t.ui)n in e.ui||(e.ui[n]=t.ui[n]);return e}}catch{}return null}var v=_()||g(),y=/#step-(\d)/.exec(location.hash);y&&(v.step=Math.min(5,Math.max(1,+y[1])));var b=/[?&]v=(express|rezsite|indigihub|baker|pro)\b/.exec(location.search);b&&(v.edition=a(b[1]));var x=0,S,ee=!1,te=new Set;function C(){x++,te.forEach(e=>e())}function w(){clearTimeout(S),S=setTimeout(()=>{let e=!ne();for(;e&&fe();)e=!ne();e!=ee&&(ee=e,C())},250)}function ne(){try{return localStorage.setItem(h,JSON.stringify(v)),!0}catch{return!1}}var re=80,ie=6e7,ae=1500,oe=`bake-studio-history`,T=8,E=18e4,D=[],O=[],k=null,A=0,j=null,M=0;function N(){return JSON.stringify(v,function(e,t){if((this!==v||e!=`ui`&&e!=`step`)&&(this!==v.source||e!=`log`))return t})}function se(){let e=document.activeElement;return e&&(e.tagName==`INPUT`||e.tagName==`TEXTAREA`||e.isContentEditable)?e:null}function ce(e){try{return(JSON.parse(e).pages||[]).map(e=>e.id)}catch{return[]}}function le(e){let t=e.reduce((e,t)=>e+t.length,0);for(;e.length>re||t>ie&&e.length>1;)t-=e.shift().length}function P(e){let t=JSON.parse(e),n={ui:v.ui,step:v.step,log:v.source.log};for(let e in v)delete v[e];Object.assign(v,g(),t,{ui:n.ui,step:n.step}),v.source.log=n.log||[];let r=v.pages.find(e=>e.id==v.ui.page)||v.pages[0];v.ui.page=r?r.id:null,v.pages.some(e=>e.id==v.ui.tpage)||(v.ui.tpage=r?r.id:null),v.ui.sel!=`footer`&&!(r&&r.sections.some(e=>e.id==v.ui.sel))&&(v.ui.sel=null,v.ui.insp&&(v.ui.insp.open=!1)),k=e,j=null,A=0,M=Date.now()}function F(e){k===null&&(k=N()),e&&e(v);let t=N();if(t!==k){let e=Date.now(),n=se();n&&n===j&&e-A<ae&&D.length||(D.push(k),le(D)),O=[];let r=ce(k),i=new Set(ce(t));r.length&&!r.some(e=>i.has(e))&&JSON.parse(k).pages.some(e=>e.sections.length)&&H(`Before replacing the pages`,k),k=t,A=e,j=n,M=e}w(),C()}function I(){return D.length>0}function ue(){return O.length>0}function L(){D.length&&(k===null&&(k=N()),O.push(k),P(D.pop()),w(),C())}function R(){O.length&&(D.push(k),P(O.pop()),w(),C())}function z(){try{return JSON.parse(localStorage.getItem(oe)||`[]`)}catch{return[]}}function de(e){for(;;)try{return localStorage.setItem(oe,JSON.stringify(e)),!0}catch{if(!e.length)return!1;e.pop()}}function fe(){let e=z();return e.length?(e.pop(),de(e),C(),!0):!1}var pe=null;function B(){return pe||=z().map(e=>({id:e.id,at:e.at,label:e.label,info:e.info})),pe}function V(e){try{let t=JSON.parse(e),n=(t.pages||[]).reduce((e,t)=>e+t.sections.length,0),r=(e,t)=>e+` `+t+(e==1?``:`s`);return(t.biz&&t.biz.name||``)+` · `+r((t.pages||[]).length,`page`)+`, `+r(n,`section`)}catch{return``}}function H(e,t){t||=N();let n=z();n[0]&&n[0].snap===t||(n.unshift({id:`h`+Date.now().toString(36),at:Date.now(),label:e,info:V(t),snap:t}),de(n.slice(0,T)),pe=null,C())}function U(e){let t=z().find(t=>t.id==e);t&&(H(`Before restoring a save point`),k===null&&(k=N()),D.push(k),le(D),O=[],P(t.snap),w(),C())}function W(e){de(z().filter(t=>t.id!=e)),pe=null,C()}var G=Date.now();setInterval(()=>{M>G&&Date.now()-G>=E&&(G=Date.now(),H(`Automatic save point`))},3e4);function K(){return(0,t.useSyncExternalStore)(e=>(te.add(e),()=>te.delete(e)),()=>x),v}function me(){return(0,t.useSyncExternalStore)(e=>(te.add(e),()=>te.delete(e)),()=>x)}function he(){return ee}function ge(){H(`Before Start over`);try{localStorage.removeItem(h)}catch{}location.href=location.pathname}var _e={source:`Pixabay`,sourceUrl:`https://pixabay.com/`,kinds:JSON.parse(`{"cafe":{"name":"Café and restaurant","photos":[{"id":"1869656","file":"photos/cafe/1869656.jpg","role":"hero","topic":"cafe interior","w":5616,"h":3744,"tags":"cafe, barista, coffee shop, counter, coffee machine, caffeine, interior design, interior decoration, indoors, menu, coffee menu, cafe, cafe, cafe, cafe, cafe, coffee shop, coffee shop, coffee shop, coffee shop, menu","by":"Pexels","page":"https://pixabay.com/photos/cafe-barista-coffee-shop-counter-1869656/"},{"id":"2600877","file":"photos/cafe/2600877.jpg","role":"hero","topic":"cafe interior","w":4091,"h":2726,"tags":"coffeehouse, bar, shop, cafe, espresso, machine, cups, business, light, bulb, wall, store, menu, board, cafe, cafe, cafe, cafe, cafe, menu","by":"StockSnap","page":"https://pixabay.com/photos/coffeehouse-bar-shop-cafe-espresso-2600877/"},{"id":"4697753","file":"photos/cafe/4697753.jpg","role":"hero","topic":"cafe interior","w":3500,"h":2333,"tags":"cat's cafe, free wallpaper, mac wallpaper, cat, interior, beautiful wallpaper, free background, hd wallpaper, laptop wallpaper, table, pet, animal, windows wallpaper, rest, 4k wallpaper, desktop backgrounds, cool backgrounds, relax, 4k wallpaper 1920x1080, wallpaper, wallpaper hd, wallpaper 4k, full hd wallpaper, cafe","by":"ALEXNEWWORLD","page":"https://pixabay.com/photos/cats-cafe-cat-interior-table-rest-4697753/"},{"id":"1834784","file":"photos/cafe/1834784.jpg","role":"hero","topic":"restaurant interior","w":4096,"h":2730,"tags":"brick wall, chairs, furniture, interior design, lights, restaurant, table, rustic, interior decoration, restaurant, restaurant, restaurant, restaurant, restaurant, table","by":"Pexels","page":"https://pixabay.com/photos/brick-wall-chairs-furniture-1834784/"},{"id":"449952","file":"photos/cafe/449952.jpg","role":"hero","topic":"restaurant interior","w":2400,"h":1600,"tags":"restaurant, table setting, table, glassware, stemware, wine glasses, glasses, plates, napkin, set-up, dinner, dining, service, lunch, restaurant, restaurant, restaurant, restaurant, restaurant","by":"neshom","page":"https://pixabay.com/photos/restaurant-table-setting-table-449952/"},{"id":"1837150","file":"photos/cafe/1837150.jpg","role":"hero","topic":"restaurant interior","w":6000,"h":4000,"tags":"restaurant, furniture, interiors, interior design, interior decoration, architecture, bar, building, chairs, hotel, indoors, seats, tables, restaurant, restaurant, restaurant, restaurant, restaurant, bar, hotel, hotel","by":"Pexels","page":"https://pixabay.com/photos/restaurant-furniture-interiors-1837150/"},{"id":"4048225","file":"photos/cafe/4048225.jpg","role":"hero","topic":"restaurant interior","w":6000,"h":4000,"tags":"ikea, table, dining, nature, chair, lamp, plant, natural, lifestyle, life, live, living, room, restaurant, simple, white","by":"tianya1223","page":"https://pixabay.com/photos/ikea-table-dining-chair-lamp-4048225/"},{"id":"1281053","file":"photos/cafe/1281053.jpg","role":"item","topic":"bread loaf","w":1920,"h":1286,"tags":"bread, baked, food, freshly baked, artisan bread, dough, homemade, homemade bread, carbohydrates, eat, food photography, bread, bread, bread, bread, bread","by":"Couleur","page":"https://pixabay.com/photos/bread-baked-food-freshly-baked-1281053/"},{"id":"2193537","file":"photos/cafe/2193537.jpg","role":"item","topic":"bread loaf","w":4896,"h":3264,"tags":"bread, loaves, crust, freshly baked, bakery, bread crust, crispy, fresh, food, baked goods, homemade, baked bread, baked, flour, bread, bread, bread, bread, bread","by":"Couleur","page":"https://pixabay.com/photos/bread-loaves-crust-freshly-baked-2193537/"},{"id":"1761197","file":"photos/cafe/1761197.jpg","role":"item","topic":"bread loaf","w":3757,"h":2343,"tags":"bread, baguettes, crust, food, bakery, french, french baguette, french bread, fresh, baked, brown bread, baked goods, eat, food photography, bread, bread, bread, bread, bread, bakery","by":"jackmac34","page":"https://pixabay.com/photos/bread-baguettes-crust-food-bakery-1761197/"},{"id":"1868925","file":"photos/cafe/1868925.jpg","role":"item","topic":"bread loaf","w":3264,"h":2417,"tags":"bakery, breads, assorted, assortment, bread shop, food, pastries, shop, store, freshly baked, bakery, bakery, bakery, bakery, bakery, shop","by":"Pexels","page":"https://pixabay.com/photos/bakery-breads-assorted-assortment-1868925/"},{"id":"2972858","file":"photos/cafe/2972858.jpg","role":"item","topic":"soup bowl","w":6000,"h":4000,"tags":"pumpkin soup, soup, cream of pumpkin soup, orange, pumpkin seeds, pumpkin, eat, meal, warm, food, cooked, vegetarian, lunch, nutrition, food photography, soup, soup, soup, soup, soup, pumpkin seeds, pumpkin, pumpkin, pumpkin","by":"congerdesign","page":"https://pixabay.com/photos/pumpkin-soup-soup-2972858/"},{"id":"4508015","file":"photos/cafe/4508015.jpg","role":"item","topic":"soup bowl","w":3934,"h":2978,"tags":"pumpkin soup, soup, hokkaido soup ginger, carrot, ingredients, cook, kitchen, preparation, spicy, meal, yummy, autumn soup, coconut milk, food photo, soup, soup, soup, soup, soup","by":"RitaE","page":"https://pixabay.com/photos/pumpkin-soup-soup-4508015/"},{"id":"3645375","file":"photos/cafe/3645375.jpg","role":"item","topic":"soup bowl","w":3906,"h":2778,"tags":"pumpkin soup, soup, food, hokkaido soup, ginger soup, fall soup, autumn soup, dish, meal, spicy, appetizing, delicious, tasty, closeup, soup, soup, soup, soup, soup","by":"RitaE","page":"https://pixabay.com/photos/pumpkin-soup-soup-food-3645375/"},{"id":"2306471","file":"photos/cafe/2306471.jpg","role":"item","topic":"latte art","w":7952,"h":5304,"tags":"coffee, pen, notebook, open notebook, empty notebook, caffeine, cup, cafe, coffee cup, latte, latte art, cappuccino, morning coffee, coffee break, beverage, coffee, coffee, coffee, coffee, coffee","by":"Engin_Akyurt","page":"https://pixabay.com/photos/coffee-pen-notebook-open-notebook-2306471/"},{"id":"2608864","file":"photos/cafe/2608864.jpg","role":"item","topic":"latte art","w":7477,"h":4987,"tags":"coffee, cup, cappuccino, latte, latte art, coffee cup, caffeine, morning coffee, coffee break, drink, beverage, hot, cafe, morning, coffee, coffee, coffee, coffee, coffee, cafe, morning","by":"Engin_Akyurt","page":"https://pixabay.com/photos/coffee-cup-cappuccino-latte-2608864/"},{"id":"3120750","file":"photos/cafe/3120750.jpg","role":"item","topic":"latte art","w":5616,"h":3744,"tags":"coffee, drink, hot, cup, cappuccino, coffee cup, saucer, caffeine, food","by":"grafmex","page":"https://pixabay.com/photos/coffee-drink-hot-cup-cappuccino-3120750/"},{"id":"1613795","file":"photos/cafe/1613795.jpg","role":"item","topic":"tacos","w":5472,"h":3080,"tags":"tacos, mexican, meal, yummy, having lunch, food, plate, nourishment, sharp, appetizing, delicacies, paprika, corn, salad, tomato, onions, colorful food, buffet, fresh, simple, enjoy the meal, hunger, tasty, gastronomy, appetite, gourmet, salsa, sauce, dip, red, kitchen, vegan, close up, yellow, healthy, ingredient, still life, vegetarian, filled, tacos, tacos, tacos, tacos, tacos","by":"VinaConstanze","page":"https://pixabay.com/photos/tacos-mexican-meal-yummy-1613795/"},{"id":"1018962","file":"photos/cafe/1018962.jpg","role":"item","topic":"tacos","w":6000,"h":4000,"tags":"taco, mexican, beef, food, taco, taco, taco, taco, taco","by":"stina_magnus","page":"https://pixabay.com/photos/taco-mexican-beef-food-1018962/"},{"id":"4505032","file":"photos/cafe/4505032.jpg","role":"item","topic":"tacos","w":4608,"h":3456,"tags":"tacos pastor, tacos, tacos mexico, mexican food, tortillas, food, mexico, taco, tortilla, delicious, sauce, mexican, shepherd, tacos, tacos, tacos, tacos, tacos, mexican food, taco","by":"Yezmin","page":"https://pixabay.com/photos/tacos-pastor-tacos-tacos-mexico-4505032/"},{"id":"907124","file":"photos/cafe/907124.jpg","role":"item","topic":"lemonade","w":5472,"h":3648,"tags":"lime, drink, glass, club soda, cocktail, juice, cold, refreshment, straw, alcohol, beverage, refreshing, gin, tasty, cold drink, ice, cool, citrus, juicy, sparkling, sparkling lemon, lemonade, lime, lime, drink, drink, drink, drink, juice, juice, juice, juice, juice, alcohol, alcohol, gin, gin, ice, ice, cool, cool, lemonade, lemonade","by":"stevepb","page":"https://pixabay.com/photos/lime-drink-glass-club-soda-907124/"},{"id":"795029","file":"photos/cafe/795029.jpg","role":"item","topic":"lemonade","w":2798,"h":1866,"tags":"pink lemonade, summer, outdoors, beverage, refreshment, flower vase, pink flowers, nature, cold, thirsty","by":"JillWellington","page":"https://pixabay.com/photos/pink-lemonade-summer-outdoors-795029/"},{"id":"943245","file":"photos/cafe/943245.jpg","role":"item","topic":"kneading dough","w":4227,"h":2763,"tags":"new year background, dough, cook, recipe, italian, flour, kitchen, preparation, white, ingredient, bakery, homemade, preparing, cuisine, pastry, bread, baking, pizza, traditional","by":"ClickerHappy","page":"https://pixabay.com/photos/new-year-background-dough-cook-943245/"},{"id":"906135","file":"photos/cafe/906135.jpg","role":"item","topic":"kneading dough","w":4726,"h":3545,"tags":"egg, laptop wallpaper, flour, 4k wallpaper 1920x1080, happy easter, wallpaper hd, cooking, cuisine, culinary, wallpaper 4k, culture, dough, food, full hd wallpaper, homemade, ingredient, 4k wallpaper, kitchen, hd wallpaper, lunch, mac wallpaper, meal, noodles, free wallpaper, organic, pasta, pastry, raw, desktop backgrounds, windows wallpaper, free background, recipe, roller, beautiful wallpaper, rolling, table, cool backgrounds, tools, background","by":"kerdkanno","page":"https://pixabay.com/photos/egg-flour-happy-easter-cooking-906135/"},{"id":"1868396","file":"photos/cafe/1868396.jpg","role":"item","topic":"kneading dough","w":3999,"h":2662,"tags":"bakery, bread, baker, apron, baking, chef, cook, dough, flour, food, bakery, bakery, bakery, bakery, bread, bread, bread, bread, bread, baker, baker, baking, baking, baking, baking, chef, chef, chef, chef, cook, cook, flour, flour","by":"Pexels","page":"https://pixabay.com/photos/bakery-bread-baker-apron-baking-1868396/"},{"id":"399286","file":"photos/cafe/399286.jpg","role":"item","topic":"kneading dough","w":5184,"h":3456,"tags":"bread, food, baked, artisan breads, homemade bread, freshly baked, carbohydrates, dough, baked goods, fresh, tasty, eat, food photography, bread, bread, bread, bread, bread","by":"TiBine","page":"https://pixabay.com/photos/bread-food-baked-artisan-breads-399286/"},{"id":"2291908","file":"photos/cafe/2291908.jpg","role":"item","topic":"pancakes breakfast","w":5184,"h":3262,"tags":"pancakes, maple syrup, raspberries, breakfast, pouring syrup, plate, breakfast plate, stack, stack of pancakes, breakfast food, breakfast meal, sweet, food, delicious, morning, tasty, fruits, food photography, pancakes, breakfast, breakfast, food, food, food, food, food","by":"piviso","page":"https://pixabay.com/photos/pancakes-maple-syrup-raspberries-2291908/"},{"id":"1984716","file":"photos/cafe/1984716.jpg","role":"item","topic":"pancakes breakfast","w":4853,"h":3071,"tags":"pancakes, schaumomelette, omelette, eggs, sugar, milk flour, cute, yummy, to bake, sweetness, butter, snack, treat, food, dessert, pastries, meal, sweet dish, pancakes, pancakes, pancakes, sugar, food, food, food, food, food, dessert, dessert, dessert, dessert","by":"RitaE","page":"https://pixabay.com/photos/pancakes-schaumomelette-omelette-1984716/"},{"id":"2139844","file":"photos/cafe/2139844.jpg","role":"item","topic":"pancakes breakfast","w":3064,"h":4596,"tags":"pancakes, honey, stack, stack of pancakes, pouring honey, blackberries, dish, plate, meal, breakfast plate, breakfast, food, tasty, calories, appetizing, food photography, pancakes, pancakes, pancakes, pancakes, pancakes, honey, honey, honey, honey, breakfast","by":"Daria-Yakovleva","page":"https://pixabay.com/photos/pancakes-honey-stack-2139844/"},{"id":"2175326","file":"photos/cafe/2175326.jpg","role":"item","topic":"catering buffet","w":5472,"h":3648,"tags":"hors d'oeuvre, starters, appetizers, charcuterie, delicatessen, food platter, catering, cheese, salami, smoked beef, tomato, snack, bread, plate, cuisine, protein, antipasto, meat, tasty, platter, assortment, appetite, finger food, buffet, canapes, nourishment, nutrition, protein, protein, protein, protein, protein","by":"stevepb","page":"https://pixabay.com/photos/hors-doeuvre-starters-appetizers-2175326/"},{"id":"179046","file":"photos/cafe/179046.jpg","role":"item","topic":"catering buffet","w":2048,"h":1363,"tags":"catering, buffet, food, olives, restaurant, cater, party, table, banquet, decoration, catering, catering, catering, catering, buffet, olives, restaurant, restaurant, restaurant, party, party, party, party, party, banquet","by":"andreaegger","page":"https://pixabay.com/photos/catering-buffet-food-olives-179046/"},{"id":"315691","file":"photos/cafe/315691.jpg","role":"item","topic":"catering buffet","w":1920,"h":1280,"tags":"buffet, indian, food, spices, lunch, restaurant, cuisine, dinner, spicy, cooking, eating, meal, gourmet, delicious, traditional, india, catering, dining, tasty, brown food, brown cooking, brown restaurant, brown dinner, brown eating, buffet, buffet, buffet, lunch, restaurant, restaurant, dinner, dinner, dinner, india, catering, catering, catering, catering, catering","by":"PublicDomainPictures","page":"https://pixabay.com/photos/buffet-indian-food-spices-lunch-315691/"},{"id":"3955616","file":"photos/cafe/3955616.jpg","role":"item","topic":"catering buffet","w":5616,"h":3744,"tags":"buffet, korean food, wedding ceremony, happy birthday, food, reception, restaurant, table, congrats, dining, event, catering, plate, kettering","by":"allybally4b","page":"https://pixabay.com/photos/buffet-korean-food-birthday-3955616/"},{"id":"1420830","file":"photos/cafe/1420830.jpg","role":"item","topic":"gift box food","w":8832,"h":4912,"tags":"gift, present, wood, package, gift box, surprise, happy birthday, ribbon, bow, father's day, packaging, gift packaging, closeup, copy space","by":"image4you","page":"https://pixabay.com/photos/gift-present-wood-package-gift-box-1420830/"},{"id":"428094","file":"photos/cafe/428094.jpg","role":"item","topic":"jam jar","w":4928,"h":3264,"tags":"jam, fruit, jars, fruit jams, fruit preserves, preserves, bottles, containers, glass jars, natural, organic, jelly, food, jam, jam, jam, jam, jam, fruit, food, food, food","by":"jarmoluk","page":"https://pixabay.com/photos/jam-fruit-jars-fruit-jams-428094/"},{"id":"4521023","file":"photos/cafe/4521023.jpg","role":"item","topic":"jam jar","w":6016,"h":4016,"tags":"jam, nature, apple jam, apples, harvest, garden, fruits, orchard, fruit basket, homemade jam, preserve","by":"congerdesign","page":"https://pixabay.com/photos/jam-apple-jam-apples-harvest-4521023/"},{"id":"2431029","file":"photos/cafe/2431029.jpg","role":"item","topic":"jam jar","w":6000,"h":4000,"tags":"raspberries, berries, fruits, red, fresh, ripe, harvest, produce, organic, raspberry jam, jam cooking, raspberries, raspberries, raspberries, raspberries, raspberries, berries, berries","by":"congerdesign","page":"https://pixabay.com/photos/raspberries-berries-fruits-red-2431029/"},{"id":"1284438","file":"photos/cafe/1284438.jpg","role":"item","topic":"fry bread","w":5472,"h":3072,"tags":"bread, croissant, morning, puff paste, puff pastry, flaky pastry, bakery, breakfast, dessert, sweet, snack, homemade, delicious, cuisine, tasty, pie, bake, pastry, bun, nutrition, delicacy, assortment, puff, brown bread, brown dessert, brown nutrition, brown breakfast, brown morning, bread, bread, bread, bread, bread, croissant, croissant, croissant, croissant, bakery, bakery, breakfast, pastry","by":"Pexels","page":"https://pixabay.com/photos/bread-croissant-morning-puff-paste-1284438/"},{"id":"842020","file":"photos/cafe/842020.jpg","role":"item","topic":"fry bread","w":4740,"h":2914,"tags":"coffee, bread, food, snack, pastry, baked, drink, beverage, coffee cup, caffeine, aromatic, cup, coffee break, coffee, coffee, coffee, coffee, coffee, bread, food, food, food, food","by":"congerdesign","page":"https://pixabay.com/photos/coffee-bread-food-snack-pastry-842020/"},{"id":"2105233","file":"photos/cafe/2105233.jpg","role":"item","topic":"chili bowl","w":4000,"h":2667,"tags":"fish, food, thai, thailand, dinner, meal, nutrition, gourmet, healthy, restaurant, diet, cooking, delicious, cuisine, lunch, seafood, tasty, ingredient, organic, vegetable, dish, protein, eat, omega, sea, boiling, sauce, lime, coriander, fresh, leaves, sliced, whole, yum, juicy, freshness, table, leaf, rice, nature, natural, bowl, seafood, seafood, seafood, seafood, seafood, protein, protein","by":"qimono","page":"https://pixabay.com/photos/fish-food-thai-thailand-dinner-2105233/"},{"id":"8667981","file":"photos/cafe/8667981.jpg","role":"item","topic":"chili bowl","w":6000,"h":4000,"tags":"green, paste, spice, garlic, bowl, fresh, ingredients, homemade, condiment, cooking, food, culinary, herb, spicy, flavorful, close-up, organic, cooking, cooking, cooking, cooking, cooking, food, spicy, organic","by":"niamhoshea","page":"https://pixabay.com/photos/green-paste-spice-garlic-bowl-8667981/"},{"id":"556777","file":"photos/cafe/556777.jpg","role":"item","topic":"iced tea","w":5680,"h":3787,"tags":"tea, tea time, girl, woman, young woman, lady, tea party, iced tea, drink, lemon, pouring tea, pour, tea, tea, tea, tea, tea, tea party, tea party, lemon, lemon","by":"JillWellington","page":"https://pixabay.com/photos/tea-tea-time-girl-woman-556777/"},{"id":"6101059","file":"photos/cafe/6101059.jpg","role":"item","topic":"iced tea","w":5760,"h":3840,"tags":"tea, biscuit, still life, cookie, pears, tea cup, fruit, teacup, cup, drink, beverage, breakfast, snack, healthy, light and airy","by":"JillWellington","page":"https://pixabay.com/photos/tea-biscuit-still-life-cookie-6101059/"}]},"trades":{"name":"Trades and services","photos":[{"id":"1080554","file":"photos/trades/1080554.jpg","role":"hero","topic":"electrician","w":4256,"h":2832,"tags":"electrician, repair, electricity, socket, professional, electric, worker, builder, man, male, helmet, work, electrician, electrician, electrician, electrician, electrician, repair, electricity, electricity, worker, work","by":"jarmoluk","page":"https://pixabay.com/photos/electrician-repair-electricity-1080554/"},{"id":"1080584","file":"photos/trades/1080584.jpg","role":"hero","topic":"electrician","w":3433,"h":2285,"tags":"electric, electricity, building, builder, repair, security, wires, electric board, switch, professional, tools, work, the production of, the industry, industrial, electric, electric, electricity, electricity, electricity, electricity, electricity, repair, industrial","by":"jarmoluk","page":"https://pixabay.com/photos/electric-electricity-building-1080584/"},{"id":"4198293","file":"photos/trades/4198293.jpg","role":"hero","topic":"electrician","w":5184,"h":3456,"tags":"electric, wiring, electrics, electro, wire, cable, workers, electricity, wires, electronics technician, voltage, perfomance, technology, electrician, low voltage, electrical engineering, rcd, mcb, automatic, distribution box, cabling, building, installation, electrician, electrician, electrician, electrician, electrician, electrical engineering","by":"image4you","page":"https://pixabay.com/photos/electric-wiring-electrics-electro-4198293/"},{"id":"2755683","file":"photos/trades/2755683.jpg","role":"hero","topic":"electrician","w":4256,"h":2832,"tags":"electrician, electric, electricity, worker, building, professional, employee, builder, repair, operator, architect, security, business, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, hand, electrician, electrician, electrician, electrician, electrician","by":"jarmoluk","page":"https://pixabay.com/photos/electrician-electric-electricity-2755683/"},{"id":"5736096","file":"photos/trades/5736096.jpg","role":"hero","topic":"construction worker","w":6720,"h":4480,"tags":"worker, grinder, factory, workplace, workshop, production, manufacturing, industry, metal work, work, steel, metal, profession, worker, worker, factory, factory, factory, production, manufacturing, manufacturing, manufacturing, manufacturing, manufacturing, industry, industry, work, work, steel, steel, metal","by":"jannonivergall","page":"https://pixabay.com/photos/worker-grinder-factory-workplace-5736096/"},{"id":"2578410","file":"photos/trades/2578410.jpg","role":"hero","topic":"construction worker","w":4460,"h":2974,"tags":"construction, worker, safety, construction workers, male, site, helmet, industrial, contractor, teamwork, concrete truck, scaffolding, development, under construction, truck, structure, construction, construction, construction, construction, construction, worker, safety, construction workers","by":"bridgesward","page":"https://pixabay.com/photos/construction-worker-safety-2578410/"},{"id":"2138992","file":"photos/trades/2138992.jpg","role":"item","topic":"electrical panel","w":4288,"h":2820,"tags":"photovoltaic, photovoltaic system, solar system, solar, nature, solar energy, solar cell, power generation, solar panel, energy transition, energy, electricity, solar power, renewable, solar field, solar cells, sun, heaven, voltage, technology, environment, power supply, light, clouds, renewable energy","by":"andreas160578","page":"https://pixabay.com/photos/photovoltaic-photovoltaic-system-2138992/"},{"id":"2742302","file":"photos/trades/2742302.jpg","role":"item","topic":"electrical panel","w":5231,"h":3353,"tags":"photovoltaic system, solar, solar energy, solar panel, photovoltaic, renewable, energy revolution, power generation, solar field, solar cells, voltage, current, sun, electricity, energy, solar power, environment, renewable energy, technology, power supply, clouds, nature, sky, atmospheric, turn, earth day","by":"mrganso","page":"https://pixabay.com/photos/photovoltaic-system-solar-2742302/"},{"id":"8499901","file":"photos/trades/8499901.jpg","role":"item","topic":"electrical panel","w":8192,"h":5464,"tags":"solar, panel, solar panels, solar energy, rooftop, man, worker, solar, solar, solar, solar, solar, solar panels, solar panels, solar panels, solar panels, solar panels, solar energy, solar energy, solar energy, worker","by":"This_is_Engineering","page":"https://pixabay.com/photos/solar-panel-solar-panels-8499901/"},{"id":"8244680","file":"photos/trades/8244680.jpg","role":"item","topic":"electrical panel","w":4314,"h":2876,"tags":"solar, panels, solar energy, solar panels, energy, power, generation, device, solar, solar, solar energy, solar panels, solar panels, solar panels, solar panels, solar panels","by":"Michael_Pointner","page":"https://pixabay.com/photos/solar-panels-solar-energy-8244680/"},{"id":"2939560","file":"photos/trades/2939560.jpg","role":"item","topic":"solar panels roof","w":6000,"h":3072,"tags":"solar system, roof, power generation, solar power, solar cells, energy, electricity, house, solar energy, solar panel, energy transition, blue, renewable, housetop, technology, environmentally friendly, electricity generation, heaven, clouds, sun, nature, roof tiles, roof panels","by":"ulleo","page":"https://pixabay.com/photos/solar-system-roof-power-generation-2939560/"},{"id":"1477987","file":"photos/trades/1477987.jpg","role":"hero","topic":"solar panels roof","w":4608,"h":3072,"tags":"solar panels, heating, renewable energy, ecology, building and construction, modern technologies, alternative sources, solar energy, solar panels, solar panels, solar panels, solar panels, solar panels, solar energy, solar energy, solar energy","by":"AS_Photography","page":"https://pixabay.com/photos/solar-panels-heating-1477987/"},{"id":"2666770","file":"photos/trades/2666770.jpg","role":"item","topic":"solar panels roof","w":5472,"h":3648,"tags":"solar, roof, solar energy, power generation, solar panel, solar system, solar cells, energy, solar power, electricity, energy transition, fastening, photovoltaic, house, renewable, electricity production, housetop, solar, solar, solar energy, solar energy, solar panel, solar panel, solar panel, solar panel, solar panel, solar power, photovoltaic","by":"RoyBuri","page":"https://pixabay.com/photos/solar-roof-solar-energy-2666770/"},{"id":"862602","file":"photos/trades/862602.jpg","role":"item","topic":"solar panels roof","w":5184,"h":3456,"tags":"solar energy, solar panels, photovoltaics, nature, panels, sun, sky","by":"schropferoval","page":"https://pixabay.com/photos/solar-energy-solar-panels-862602/"},{"id":"1738969","file":"photos/trades/1738969.jpg","role":"item","topic":"electric car charging","w":2048,"h":1365,"tags":"tesla, tesla model x, charging, supercharger, transportation, automobile, car, auto, vehicle, electricity, electrical, electric, green, infrastructure, car wallpapers, transport, eco, plug, station, renewable, Norway, Nordland, Mosjøen","by":"Blomst","page":"https://pixabay.com/photos/tesla-tesla-model-x-charging-1738969/"},{"id":"1458836","file":"photos/trades/1458836.jpg","role":"item","topic":"electric car charging","w":4912,"h":2760,"tags":"electric car, car, electric, vehicle, power, electricity, transportation, automobile, energy, ecology, fuel, alternative, environment, charge, battery, green, plug, hybrid, eco, technology, socket, recharge, supply, rechargeable, clean, car wallpapers, blue car, blue technology, blue energy, blue power, blue clean","by":"VariousPhotography","page":"https://pixabay.com/photos/electric-car-car-electric-vehicle-1458836/"},{"id":"3117778","file":"photos/trades/3117778.jpg","role":"item","topic":"electric car charging","w":3380,"h":2018,"tags":"car, electric car, hybrid car, charging post, car wallpapers, automotive, environmentally conscious, clean fuel, emission, transport, vehicle","by":"Joenomias","page":"https://pixabay.com/photos/car-electric-car-hybrid-car-3117778/"},{"id":"864983","file":"photos/trades/864983.jpg","role":"item","topic":"tools workbench","w":5760,"h":3840,"tags":"tools, construct, craft, repair, equipment, create, construction, build, creative, hammer, mockup, tumblr wallpaper, brown building, brown construction, brown wallpaper, brown tools, brown creative, tools, tools, tools, tools, tools, construction, construction","by":"picjumbo_com","page":"https://pixabay.com/photos/tools-construct-craft-repair-864983/"},{"id":"4863393","file":"photos/trades/4863393.jpg","role":"item","topic":"tools workbench","w":4928,"h":3264,"tags":"workshop, carpenter, crafts, artisan, drink, work, tool, vintage, workshop, workshop, workshop, workshop, workshop, carpenter, carpenter","by":"ThMilherou","page":"https://pixabay.com/photos/workshop-carpenter-crafts-artisan-4863393/"},{"id":"1866533","file":"photos/trades/1866533.jpg","role":"item","topic":"tools workbench","w":3094,"h":2059,"tags":"adult, artisan, tools, workshop, craftsman, equipments, indoors, man, metal, person, production, skill, work, work area, working, workspace, tools, tools, tools, workshop, workshop, craftsman, production, skill, work, work, work, work, work, working, working","by":"Pexels","page":"https://pixabay.com/photos/adult-artisan-tools-workshop-1866533/"},{"id":"1083796","file":"photos/trades/1083796.jpg","role":"item","topic":"tools workbench","w":4608,"h":3456,"tags":"tools, awl, pliers, antique, equipment, work, craft, workshop, old, metal, wood, manual, shop, retro, handmade, traditional, hand, workmanship, wooden, punches, creation, chisel, create, homemade, tool, hobby, skill, craftsman, leather, brown work, brown shopping, brown wood, brown shop, brown tools, brown retro, brown metal, brown old, tools, tools, tools, tools, tools, workshop, leather","by":"dbreen","page":"https://pixabay.com/photos/tools-awl-pliers-antique-equipment-1083796/"},{"id":"1836070","file":"photos/trades/1836070.jpg","role":"hero","topic":"house exterior","w":5408,"h":3605,"tags":"house, architecture, front yard, garage, home, house lights, illuminated, exterior, house exterior, home exterior, facade, real estate, windows, house, house, house, house, house, home, home, real estate","by":"Pexels","page":"https://pixabay.com/photos/house-architecture-front-yard-1836070/"},{"id":"1477041","file":"photos/trades/1477041.jpg","role":"item","topic":"house exterior","w":1920,"h":1080,"tags":"house, pool, interior design, architecture, 3d, design, style, minimalist, interior, modular, housing, prefabricated, modular home, house, house, house, house, house","by":"Giovanni_cg","page":"https://pixabay.com/photos/house-pool-interior-design-1477041/"},{"id":"1867187","file":"photos/trades/1867187.jpg","role":"item","topic":"house exterior","w":3352,"h":2286,"tags":"house, garage, driveway, architecture, building, property, home, residential, suburb, real estate, exterior, facade, house exterior, home exterior, street, neighborhood street, residential area, house, house, house, house, house, home, home, real estate","by":"Pexels","page":"https://pixabay.com/photos/house-garage-driveway-architecture-1867187/"},{"id":"389271","file":"photos/trades/389271.jpg","role":"item","topic":"house exterior","w":1920,"h":1280,"tags":"large home, residential, house, architecture, modern, luxury, swimming pool, facade, house facade, exteriors, house exteriors, luxury house, real estate, expensive, upscale, design, lifestyle, house, house, house, house, house, real estate, real estate","by":"GregoryButler","page":"https://pixabay.com/photos/large-home-residential-house-389271/"},{"id":"1098059","file":"photos/trades/1098059.jpg","role":"item","topic":"electrical wiring","w":5545,"h":3120,"tags":"wire, cables, electric, network, electricity, fuse, electrical, power, switch, electrical wires, wiring, circuit, current, connection, energy, distribution, electrician, installation, electrical engineering, electrical, electrician, electrician, electrician, electrician, electrician, electrical engineering, electrical engineering","by":"Taken","page":"https://pixabay.com/photos/wire-cables-electric-network-1098059/"},{"id":"3087536","file":"photos/trades/3087536.jpg","role":"item","topic":"electrical wiring","w":6000,"h":4000,"tags":"electrician, wiring, mounting, tool, tools, manual, repair, work, building, wire, screwdriver, electrician, electrician, electrician, electrician, electrician, tools, tools","by":"Sid74","page":"https://pixabay.com/photos/electrician-wiring-mounting-tool-3087536/"},{"id":"2766835","file":"photos/trades/2766835.jpg","role":"item","topic":"electrical wiring","w":4834,"h":3571,"tags":"tool, work, repair, electrician, tester, duct tape, side cutters, wire, electrician, electrician, electrician, electrician, electrician","by":"falconp4","page":"https://pixabay.com/photos/tool-work-repair-electrician-2766835/"},{"id":"569126","file":"photos/trades/569126.jpg","role":"item","topic":"hard hat worker","w":5760,"h":3840,"tags":"construction worker, work, worker, man, industry, building site, engineer, architecture, helmet, male, builder, hardhat, occupation, construction, zone, danger, tape, vest, hard hat, signs, construction worker, construction worker, worker, worker, engineer, engineer, construction, construction, construction, construction, construction","by":"Life-Of-Pix","page":"https://pixabay.com/photos/construction-worker-work-worker-man-569126/"},{"id":"2762319","file":"photos/trades/2762319.jpg","role":"item","topic":"hard hat worker","w":4928,"h":3264,"tags":"building, professional, employee, builder, worker, architect, repair, operator, security, business, build, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, employee, employee, builder, builder, builder, builder, worker, worker, architect, architect, architect, architect, architect, factory","by":"jarmoluk","page":"https://pixabay.com/photos/building-professional-employee-2762319/"},{"id":"2945401","file":"photos/trades/2945401.jpg","role":"item","topic":"home inspection","w":5184,"h":3456,"tags":"checklist, list, ticked off, hook, mark with a cross, check mark, standard, scaling, yes, done, certification, check, checklist, checklist, checklist, checklist, checklist, list","by":"DCG_MAK","page":"https://pixabay.com/photos/checklist-list-ticked-off-hook-2945401/"},{"id":"1080573","file":"photos/trades/1080573.jpg","role":"item","topic":"electrician outlet","w":2657,"h":3994,"tags":"electrician, electric, electricity, worker, building, professional, employee, builder, screwdriver, repair, operator, architect, security, business, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, hand, electrician, electrician, electrician, electrician, electrician","by":"jarmoluk","page":"https://pixabay.com/photos/electrician-electric-electricity-1080573/"},{"id":"948208","file":"photos/trades/948208.jpg","role":"item","topic":"electrician outlet","w":3840,"h":2160,"tags":"electric, component, current, digital, display, electronic, equipment, impedance, industrial, industry, instrument, ampere, measure, measurement, multimeter, lcd, accuracy, calibration, electrical, electrician, electricity, meter, ohm, power, professional, resistance, safety, screwdrivers, precision, multimeter, electrician, electrician, electrician, electrician, electrician","by":"MaFree","page":"https://pixabay.com/photos/electric-component-current-digital-948208/"},{"id":"1080586","file":"photos/trades/1080586.jpg","role":"item","topic":"electrician outlet","w":3246,"h":2160,"tags":"electrician, electric, electricity, worker, building, professional, employee, builder, screwdriver, repair, operator, architect, security, business, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, hand, electrician, electrician, electrician, electrician, electrician","by":"jarmoluk","page":"https://pixabay.com/photos/electrician-electric-electricity-1080586/"},{"id":"2755682","file":"photos/trades/2755682.jpg","role":"item","topic":"electrician outlet","w":4096,"h":2726,"tags":"electrician, electric, electricity, worker, building, professional, employee, builder, repair, operator, architect, security, business, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, hand, electrician, electrician, electrician, electrician, electrician","by":"jarmoluk","page":"https://pixabay.com/photos/electrician-electric-electricity-2755682/"},{"id":"9628266","file":"photos/trades/9628266.jpg","role":"item","topic":"commercial lighting","w":2320,"h":3250,"tags":"lobby, waiting room, television, tables, chairs, trashcan, modern, contemporary, water fountain, florence lighting, recessed lighting, decorative","by":"Mollyroselee","page":"https://pixabay.com/photos/lobby-waiting-room-television-9628266/"}]},"crafts":{"name":"Arts and crafts shop","photos":[{"id":"869221","file":"photos/crafts/869221.jpg","role":"hero","topic":"craft fair handmade","w":5472,"h":3648,"tags":"merry christmas, knit, sew, craft, female, sewing, textile, knitting, needlework, fashion, needle, thread, handmade, hobby, tailor, yarn, wool, pin, fabric, tailoring, stitch, vintage, homemade","by":"Foundry","page":"https://pixabay.com/photos/merry-christmas-knit-sew-craft-869221/"},{"id":"1139098","file":"photos/crafts/1139098.jpg","role":"hero","topic":"craft fair handmade","w":5556,"h":3125,"tags":"clay, pottery, hands, potter, potter's wheel, dirty, artist, craft, work, art, handicraft, workshop, closeup, clay, pottery, pottery, potter, artist, work, work, work, work, work, art","by":"LubosHouska","page":"https://pixabay.com/photos/clay-pottery-hands-potter-1139098/"},{"id":"4524838","file":"photos/crafts/4524838.jpg","role":"hero","topic":"artisan workshop","w":5184,"h":3456,"tags":"workshop, instrument, wood, craftsman, guitar, repair, builder, craft, assemble, work, electric, woodworking, rock, carpentry, music, handmade, create, measurement, construction, workshop, craftsman, guitar, guitar, guitar, guitar, guitar, repair, craft, work, work, woodworking, woodworking, woodworking, carpentry, music, music, music, create, construction, construction, construction","by":"endriqstudio","page":"https://pixabay.com/photos/workshop-instrument-wood-craftsman-4524838/"},{"id":"3008031","file":"photos/crafts/3008031.jpg","role":"hero","topic":"artisan workshop","w":5760,"h":3840,"tags":"artist, pen, painting, man, elderly, glasses, craftsman, traditional, tradition, artistic, culture, painter, drawing, asian, laos, asia, artist, artist, artist, artist, artist, pen, painting, painting, culture, culture, painter, painter, drawing, drawing, drawing","by":"duongtoan","page":"https://pixabay.com/photos/artist-pen-painting-man-elderly-3008031/"},{"id":"4863393","file":"photos/crafts/4863393.jpg","role":"hero","topic":"artisan workshop","w":4928,"h":3264,"tags":"workshop, carpenter, crafts, artisan, drink, work, tool, vintage, workshop, workshop, workshop, workshop, workshop, carpenter, carpenter","by":"ThMilherou","page":"https://pixabay.com/photos/workshop-carpenter-crafts-artisan-4863393/"},{"id":"1866533","file":"photos/crafts/1866533.jpg","role":"hero","topic":"artisan workshop","w":3094,"h":2059,"tags":"adult, artisan, tools, workshop, craftsman, equipments, indoors, man, metal, person, production, skill, work, work area, working, workspace, tools, tools, tools, workshop, workshop, craftsman, production, skill, work, work, work, work, work, working, working","by":"Pexels","page":"https://pixabay.com/photos/adult-artisan-tools-workshop-1866533/"},{"id":"809385","file":"photos/crafts/809385.jpg","role":"item","topic":"beads","w":5760,"h":3840,"tags":"beads, lilac, fashion, design, jewels, jewelry, shiny, precious, green fashion, green design, green jewelry, beads, jewelry, jewelry, jewelry, jewelry, jewelry","by":"AttractionMagazine","page":"https://pixabay.com/photos/beads-lilac-fashion-design-jewels-809385/"},{"id":"665704","file":"photos/crafts/665704.jpg","role":"item","topic":"handmade jewelry","w":2000,"h":726,"tags":"colorful, stone, rings, cabochon, gemstones, gems, settings, bezel, handmade, jewelry, jewellery, jewel, semiprecious, agate, crystal, jasper, quartz, amethyst, sterling, silver, gray color, gray jewelry, gray stone, gemstones, jewelry, jewelry, jewelry, jewelry, jewelry, jewellery, jewellery, crystal","by":"starbright","page":"https://pixabay.com/photos/colorful-stone-rings-cabochon-665704/"},{"id":"1381501","file":"photos/crafts/1381501.jpg","role":"item","topic":"handmade jewelry","w":4288,"h":2848,"tags":"jewelry manufacturing, manufacturing, polishing, work, factory, sepia, jewelry, craft, metal, equipment, making, silver, ring, accessory, pliers, jewel, tool, gold, industry, workshop, precious, handmade, manual, jeweler, decoration, product, professional, stone, diamond, brown work, brown tools, brown diamond, brown metal, brown jewelry, brown stone, brown industry, manufacturing, manufacturing, jewelry, jewelry, jewelry, jeweler, jeweler, diamond, diamond, diamond, diamond, diamond","by":"karnbadjatia","page":"https://pixabay.com/photos/jewelry-manufacturing-manufacturing-1381501/"},{"id":"1198740","file":"photos/crafts/1198740.jpg","role":"item","topic":"handmade jewelry","w":2746,"h":2116,"tags":"bracelet, silver, gemstones, jeweller, jewelry, fashion, blue, jewel, glamour, jewelry woman, brown fashion, brown jewelry, bracelet, bracelet, bracelet, jewelry, jewelry, jewelry, jewelry, jewelry","by":"pony_up","page":"https://pixabay.com/photos/bracelet-silver-gemstones-jeweller-1198740/"},{"id":"716838","file":"photos/crafts/716838.jpg","role":"item","topic":"quilt","w":3456,"h":2298,"tags":"quilt, cozy, home, charming, peaceful, quilted, residence, patchwork, quilt, quilt, quilt, quilt, quilt","by":"CandaceHunter","page":"https://pixabay.com/photos/quilt-cozy-home-charming-peaceful-716838/"},{"id":"558987","file":"photos/crafts/558987.jpg","role":"item","topic":"quilt","w":5100,"h":3400,"tags":"bedroom, quilt, bed, four poster, rice bed, highboy, chest of drawers, bedding, ensuite bathroom, end table, valet, red oak hardwood, wood floor, throw rug, rug runner, rest, sleep, bedtime, pillows, brown sleep, brown sleeping, brown table, brown rice, brown bathroom, brown bed, brown bedroom, bedroom, bedroom, quilt, quilt, quilt, quilt, quilt","by":"JamesDeMers","page":"https://pixabay.com/photos/bedroom-quilt-bed-four-poster-558987/"},{"id":"423327","file":"photos/crafts/423327.jpg","role":"item","topic":"quilt","w":3000,"h":4000,"tags":"fabric flower, patchwork, labors, sewing, fabrics, padding, quilt, textile, patchwork, sewing, quilt, quilt, quilt, quilt, quilt","by":"begobego","page":"https://pixabay.com/photos/fabric-flower-patchwork-labors-423327/"},{"id":"1139047","file":"photos/crafts/1139047.jpg","role":"item","topic":"pottery hands","w":4561,"h":3258,"tags":"pottery, handmade, hands, cup, vase, clay, potter, ceramics, potter's wheel, dirty, art, artist, craft, handicraft, pottery, pottery, pottery, pottery, pottery, handmade, clay, clay, clay, potter, ceramics, ceramics, art, art, art, artist, artist, artist, craft, craft","by":"LubosHouska","page":"https://pixabay.com/photos/pottery-handmade-hands-cup-vase-1139047/"},{"id":"4682257","file":"photos/crafts/4682257.jpg","role":"item","topic":"pottery hands","w":5100,"h":3400,"tags":"potter, pottery, vase, pot, art, craft, ceramic, hub, rotate, design, potters, to form, volume, potter, potter, pottery, pottery, pottery, pottery, pottery, pot","by":"marcelkessler","page":"https://pixabay.com/photos/potter-pottery-vase-pot-art-craft-4682257/"},{"id":"3050615","file":"photos/crafts/3050615.jpg","role":"item","topic":"pottery hands","w":3789,"h":3264,"tags":"ceramic, clay, pottery, art, old, sculpture, earthenware, craftsman, handmade, mud, traditional, culture, brown art, brown culture, brown old, clay, clay, clay, clay, clay, pottery, pottery, pottery, art, sculpture, sculpture, sculpture, craftsman, mud, mud, culture, culture","by":"enricsagarra","page":"https://pixabay.com/photos/ceramic-clay-pottery-art-old-3050615/"},{"id":"1284033","file":"photos/crafts/1284033.jpg","role":"item","topic":"pottery hands","w":4608,"h":3072,"tags":"hands, pottery, pot, brown, wheel, mud, craftsmanship, clay, shaping, working hands, moulding, skill, expertise, pottery, pottery, pottery, pottery, pottery, clay, skill, skill, skill, skill, expertise","by":"Pexels","page":"https://pixabay.com/photos/hands-pottery-pot-brown-wheel-mud-1284033/"},{"id":"3166698","file":"photos/crafts/3166698.jpg","role":"item","topic":"basket weaving","w":5100,"h":3400,"tags":"reed, basket, basket weaving, reed basket, weaving, craft, design, handmade, pattern, basket, basket, basket, basket, basket, weaving","by":"MabelAmber","page":"https://pixabay.com/photos/reed-basket-basket-weaving-3166698/"},{"id":"6526674","file":"photos/crafts/6526674.jpg","role":"hero","topic":"basket weaving","w":6000,"h":4000,"tags":"wicker baskets, basket weaving, handicraft, vietnam, craftsmen, basket weaving, handicraft, vietnam, vietnam, vietnam, vietnam, vietnam","by":"xuanduongvan87","page":"https://pixabay.com/photos/wicker-baskets-basket-weaving-6526674/"},{"id":"1314017","file":"photos/crafts/1314017.jpg","role":"hero","topic":"basket weaving","w":2000,"h":1327,"tags":"basket maker, basket weaver, craft, wicker basket, baskets, man, tradition, culture, old craft, weave, demonstration, handwork, artful, craft market, hands, basket maker, basket weaver, craft, craft, craft, craft, craft, weave, handwork","by":"cocoparisienne","page":"https://pixabay.com/photos/basket-maker-basket-weaver-craft-1314017/"},{"id":"6765014","file":"photos/crafts/6765014.jpg","role":"item","topic":"basket weaving","w":5168,"h":3448,"tags":"baskets, wicker, market, handicraft, handles, brown, woven baskets, containers, closeup, handicraft, handicraft, handicraft, handicraft, handicraft","by":"jhenning","page":"https://pixabay.com/photos/baskets-wicker-market-handicraft-6765014/"},{"id":"1614283","file":"photos/crafts/1614283.jpg","role":"item","topic":"yarn knitting","w":5472,"h":3648,"tags":"knitting, handwork, hobby, handmade, wool, color, knit, yarn, textile, leisure, creative, handcraft, pastime, occupational therapy, teddy bear, creativity, craft, colorful, handicraft, childhood, toy, plaything, soft toy, cuddly, stuffed toy, homemade, teddybear, knitting, knitting, knitting, knitting, knitting, hobby, handmade, handmade, wool, wool, yarn, teddy bear, teddy bear, craft, craft, craft, toy, toy","by":"stevepb","page":"https://pixabay.com/photos/knitting-handwork-hobby-handmade-1614283/"},{"id":"2469094","file":"photos/crafts/2469094.jpg","role":"item","topic":"yarn knitting","w":5794,"h":3863,"tags":"knit, yarn, wool, handwork, knitwear, creative, homemade, hobby, thread, cat's cradle, knitting, leisure time, knitting needle, needle, sew, knitting, knitting, knitting, knitting, knitting","by":"Bru-nO","page":"https://pixabay.com/photos/knit-yarn-wool-handwork-knitwear-2469094/"},{"id":"5447556","file":"photos/crafts/5447556.jpg","role":"item","topic":"yarn knitting","w":4928,"h":3264,"tags":"ball of string, string, yarn, ball, crochet, twine, thread, craft, wool, hobby, white, fiber, fibre, knitting, handmade, natural, texture, cotton, textile, material, homemade, diy, string, yarn, yarn, yarn, crochet, crochet, crochet, crochet, crochet, twine, twine","by":"ClaradoodlaK","page":"https://pixabay.com/photos/ball-of-string-string-yarn-ball-5447556/"},{"id":"1687388","file":"photos/crafts/1687388.jpg","role":"item","topic":"leather craft","w":4210,"h":2807,"tags":"needle, circular needle, metal, line, leather, sew, leather, leather, leather, leather, leather","by":"Couleur","page":"https://pixabay.com/photos/needle-circular-needle-metal-line-1687388/"},{"id":"1688017","file":"photos/crafts/1688017.jpg","role":"item","topic":"leather craft","w":4896,"h":3264,"tags":"belt, belt buckle, leather, metal, costume, clothing, belt, belt, belt, belt, belt","by":"Couleur","page":"https://pixabay.com/photos/belt-belt-buckle-leather-metal-1688017/"},{"id":"1209519","file":"photos/crafts/1209519.jpg","role":"item","topic":"painting artist","w":3500,"h":2400,"tags":"art, paint, water colors, desk, artist, equipment, painting, craft, drawing, paintbrushes, paper, creative, creativity, picture, colors, art, art, art, art, art, paint, desk, artist, painting, painting, drawing, drawing, paper","by":"1681551","page":"https://pixabay.com/photos/art-paint-water-colors-desk-artist-1209519/"},{"id":"3129361","file":"photos/crafts/3129361.jpg","role":"item","topic":"painting artist","w":5802,"h":3873,"tags":"brushes, painter, work shop, bowl, lights, work, creative, creativity, painting, artist, paintbrush, studio, art, brush, drawing, artistic, hobby, color, tool, paint, palette, blue work, blue light, blue art, blue shop, blue painting, blue paint, blue tools, blue color, blue creative, blue drawing, blue lights, painting, painting, artist, art, art, art, art, art, drawing, paint","by":"ClickerHappy","page":"https://pixabay.com/photos/brushes-painter-work-shop-bowl-3129361/"},{"id":"911804","file":"photos/crafts/911804.jpg","role":"item","topic":"painting artist","w":4608,"h":2592,"tags":"painting, pencils, paint, pens, watercolor, acrylic, watercolor painting, art tools, art materials, painting, painting, painting, painting, painting, paint, paint","by":"bodobe","page":"https://pixabay.com/photos/painting-pencils-paint-pens-911804/"},{"id":"96240","file":"photos/crafts/96240.jpg","role":"item","topic":"painting artist","w":4912,"h":3264,"tags":"brush, paint, color, watercolor, art, pink, colorful, craft, arts and crafts, painting, watercolor painting, artistic, creative, creativity, paintbrush, paint, art, art, art, art, art, painting, painting, painting, painting","by":"weinstock","page":"https://pixabay.com/photos/brush-paint-color-watercolor-art-96240/"},{"id":"7506621","file":"photos/crafts/7506621.jpg","role":"item","topic":"knitted scarf","w":4283,"h":2855,"tags":"winter, cozy, cup, comfort, tea cup, warmth, gloves, scarf, tea","by":"Monikas_Wunderwelt","page":"https://pixabay.com/photos/winter-cozy-cup-comfort-warmth-7506621/"},{"id":"881324","file":"photos/crafts/881324.jpg","role":"item","topic":"beaded earrings","w":3726,"h":2621,"tags":"jewelry, bracelet, earrings, angels, pearls, lilac colored, jewelry, jewelry, jewelry, jewelry, jewelry, bracelet, bracelet, bracelet, bracelet, pearls, pearls, pearls","by":"corinaselberg","page":"https://pixabay.com/photos/jewelry-bracelet-earrings-angels-881324/"},{"id":"611867","file":"photos/crafts/611867.jpg","role":"item","topic":"beaded earrings","w":4690,"h":2677,"tags":"jewelry, treasure, pearls, beads, gems, gold, silver, costume, fashion, accessories, necklaces, bracelets, bangles, broaches, pins, rings, earrings, vintage, art deco, faux, fake, paste, glass, rhinestones, tangled, luxury, glamour, shiny, brilliant, colorful, black fashion, black art, black glass, black vintage, black glasses, black jewelry, treasure, treasure, treasure, treasure, treasure","by":"JamesDeMers","page":"https://pixabay.com/photos/jewelry-treasure-pearls-beads-gems-611867/"},{"id":"962484","file":"photos/crafts/962484.jpg","role":"item","topic":"beaded earrings","w":2688,"h":4032,"tags":"earrings, ear, beads, head, her, face, decoration, to hear, to hear, to hear, to hear, to hear, to hear","by":"FotoRieth","page":"https://pixabay.com/photos/earrings-ear-beads-head-her-face-962484/"},{"id":"1868758","file":"photos/crafts/1868758.jpg","role":"item","topic":"leather bag handmade","w":6016,"h":4016,"tags":"bag, book, man, fashion, pants, satchel, walk, teacher, professor, men's fashion, style, stylish man, teacher, teacher, teacher, teacher, teacher","by":"Pexels","page":"https://pixabay.com/photos/bag-book-man-fashion-pants-1868758/"},{"id":"819362","file":"photos/crafts/819362.jpg","role":"item","topic":"ceramic mug","w":4477,"h":3358,"tags":"coffee, cup, mug, coffee cup, coffee mug, caffeine, hot coffee, coffee break, morning coffee, cafe, drink, beverage, hot, coffee, coffee, coffee, coffee, coffee","by":"fancycrave1","page":"https://pixabay.com/photos/coffee-cup-mug-coffee-cup-819362/"},{"id":"2315554","file":"photos/crafts/2315554.jpg","role":"item","topic":"ceramic mug","w":5403,"h":3602,"tags":"cup, top, view, coffee, cool backgrounds, coffee cup, table, vintage, hd wallpaper, background, nature, wooden, food, fresh, desktop backgrounds, one, free wallpaper, wallpaper 4k, wallpaper hd, full hd wallpaper, space, drink, liquid, white, cafe, wood, closeup, 4k wallpaper, empty, space wallpaper, mac wallpaper, laptop wallpaper, windows wallpaper, ray of light, free background, 4k wallpaper 1920x1080, beautiful wallpaper, light, bokeh, rainbow","by":"IamNotPerfect","page":"https://pixabay.com/photos/cup-top-view-coffee-table-vintage-2315554/"},{"id":"1974841","file":"photos/crafts/1974841.jpg","role":"item","topic":"ceramic mug","w":5540,"h":3693,"tags":"christmas background, coffee cup, mug, coffee, winter, warmth, cozy, cup, drink, hot, warm, home, breakfast","by":"JillWellington","page":"https://pixabay.com/photos/christmas-background-mug-coffee-1974841/"},{"id":"2321532","file":"photos/crafts/2321532.jpg","role":"item","topic":"handmade quilt","w":5184,"h":3456,"tags":"sewing, patchwork, körkés, thread, pink, spindle, pin, needle, clipboard, textile, textiles, material, materials, heart, polka dots, patterned, sample, sewing, sewing, sewing, sewing, sewing","by":"Miller_Eszter","page":"https://pixabay.com/photos/sewing-patchwork-k%C3%B6rk%C3%A9s-thread-2321532/"},{"id":"100160","file":"photos/crafts/100160.jpg","role":"item","topic":"handmade quilt","w":4000,"h":3000,"tags":"patchwork quilt, patchwork, patchwork carpet, ceiling, carpet, tapestry, multicoloured, homemade, self stitched, sew, handwork, coloured, template, detailed work, material, fabric remnants, patchwork, patchwork, patchwork, patchwork, patchwork, carpet, carpet, carpet, carpet, tapestry, tapestry, tapestry","by":"Hans","page":"https://pixabay.com/photos/patchwork-quilt-patchwork-100160/"}]},"salon":{"name":"Hair and beauty salon","photos":[{"id":"4043096","file":"photos/salon/4043096.jpg","role":"hero","topic":"hair salon interior","w":3000,"h":2501,"tags":"beauty salon, barber, nail salon, salon, hairdresser, fashion, beauty, interior, 3 d, interior design, interior designer, beauty salon, beauty salon, beauty salon, nail salon, salon, salon, salon, salon, salon","by":"Sunriseforever","page":"https://pixabay.com/photos/beauty-salon-barber-nail-salon-4043096/"},{"id":"6797761","file":"photos/salon/6797761.jpg","role":"hero","topic":"hair salon interior","w":5000,"h":3333,"tags":"barber shop, job, work, iranian, occupation, iran, mashhad, men, hair, life, lifestyle, jorj barber, social documentary, stylist, persian, asian, canon photo, people, person, haircut, hairdresser's, mostafa meraji, photojournalism, real pictures, everyday, barber shop, barber shop, barber shop, barber shop, job, haircut, haircut, haircut, haircut, haircut","by":"mostafa_meraji","page":"https://pixabay.com/photos/barber-shop-job-work-iranian-6797761/"},{"id":"3277314","file":"photos/salon/3277314.jpg","role":"hero","topic":"hairdresser styling hair","w":7585,"h":5059,"tags":"beauty salon, hair dresser, table, furniture, indoors, room, inside, interior, modern, chair, beauty salon, beauty salon, beauty salon, beauty salon, beauty salon, hair dresser","by":"Michelle-Maria","page":"https://pixabay.com/photos/beauty-salon-hair-dresser-table-3277314/"},{"id":"2693077","file":"photos/salon/2693077.jpg","role":"hero","topic":"hair salon interior","w":4288,"h":2848,"tags":"hairdressing salon, barber beauty shop, hairdresser, wash, coiffeur, cut hair, hair, natural hairdresser, lie, wellness, hair care, wood, space, hairdresser, hairdresser, hairdresser, hairdresser, hairdresser, cut hair, hair care, hair care","by":"ChristianeBrand","page":"https://pixabay.com/photos/hairdressing-salon-barber-beauty-shop-2693077/"},{"id":"834280","file":"photos/salon/834280.jpg","role":"item","topic":"hairdresser styling hair","w":4368,"h":2912,"tags":"haircut, hair cut, beauty salon, comb, scissors, hairdresser, haircut, haircut, haircut, hair cut, hair cut, hair cut, hair cut, hair cut, beauty salon, beauty salon, hairdresser, hairdresser, hairdresser","by":"kaleido-dp","page":"https://pixabay.com/photos/haircut-hair-cut-beauty-salon-comb-834280/"},{"id":"1007891","file":"photos/salon/1007891.jpg","role":"item","topic":"hairdresser styling hair","w":5472,"h":3648,"tags":"haircut, barber, salon, barber shop, hair, scissors, grooming, comb, hairstyling, hair cut, black and white, man, hairstylist, hairdresser, cut, hairstyle, gray shopping, gray shop, gray hair, haircut, barber, barber, barber, barber, salon, barber shop, hair cut, hair cut, hair cut, hair cut, hair cut","by":"Renee_Olmsted_Photography","page":"https://pixabay.com/photos/haircut-barber-salon-barber-shop-1007891/"},{"id":"1179459","file":"photos/salon/1179459.jpg","role":"item","topic":"hairdresser styling hair","w":3632,"h":2592,"tags":"hairdresser, haircut, comb, scissors, hairdresser, hairdresser, haircut, haircut, haircut, haircut, haircut, comb","by":"jackmac34","page":"https://pixabay.com/photos/hairdresser-haircut-comb-scissors-1179459/"},{"id":"1450045","file":"photos/salon/1450045.jpg","role":"item","topic":"hair coloring","w":4288,"h":2848,"tags":"pink hair, hairstyle, woman, makeup, cosmetics, hair flip, young woman, colored hair, fashion, female portrait, female, skin, bust, woman, woman, woman, woman, fashion, fashion, fashion, fashion, fashion","by":"Stuchy","page":"https://pixabay.com/photos/pink-hair-hairstyle-woman-makeup-1450045/"},{"id":"1869208","file":"photos/salon/1869208.jpg","role":"item","topic":"hair coloring","w":3000,"h":2002,"tags":"woman, hair, portrait, flip, hair flip, colorful hair, young woman, fashion, style, stylish woman, colorful, female, girl, woman, hair, hair, hair, hair, hair, fashion","by":"Pexels","page":"https://pixabay.com/photos/woman-hair-portrait-flip-hair-flip-1869208/"},{"id":"1744959","file":"photos/salon/1744959.jpg","role":"item","topic":"hair coloring","w":4288,"h":2848,"tags":"hair, color, coloring, brush, white, woman, care, beauty, young, female, dye, apply, dyeing, hairdresser, beautiful, hairstyle, dying, close-up, head, salon, people, girl, adult, pretty, work, professional, paint, hairdressing, occupation, profession, styling, haircare, hairstylist, hair coloring, portrait, treatment, business, hairdresser, hairdresser, hairdresser, hairdresser, salon, salon, salon, salon, salon, hairdressing, haircare, hairstylist, hair coloring, hair coloring, hair coloring, hair coloring","by":"artursfoto","page":"https://pixabay.com/photos/hair-color-coloring-brush-white-1744959/"},{"id":"870857","file":"photos/salon/870857.jpg","role":"item","topic":"manicure nails","w":3322,"h":2215,"tags":"manicure, pedicure, cosmetics, care, nails, fingernails, toe nails, nail varnish, paint, color, beauty, manicure, cosmetics, cosmetics, cosmetics, cosmetics, cosmetics, nails, nails, nails, nails, beauty","by":"Bru-nO","page":"https://pixabay.com/photos/manicure-pedicure-cosmetics-care-870857/"},{"id":"1853302","file":"photos/salon/1853302.jpg","role":"item","topic":"manicure nails","w":4800,"h":3200,"tags":"hands, holding, smartphone, chatting, cellphone, close up, girl, mobile phone, nail polish, nails, woman, communication, technology, smartphone, smartphone, smartphone, smartphone, smartphone, chatting, cellphone, cellphone, cellphone, mobile phone, mobile phone, mobile phone, mobile phone, nails","by":"Pexels","page":"https://pixabay.com/photos/hands-holding-smartphone-chatting-1853302/"},{"id":"5212059","file":"photos/salon/5212059.jpg","role":"item","topic":"barber haircut","w":6720,"h":4480,"tags":"barber shop, iran, cosmetology, mashhad, people, job, work, life, lifestyle, everyday, occupation, social documentary, office, mostafa meraji, canon photos, young, men, business, jorj barber, makeup artist, stylist, style blogger, fashion blogger, persian, barbershop in iran, barber shop, barber shop, barber shop, barber shop, iran, iran, people, job, job, job, job, job, work, work, life, life, men, men, men, business, business","by":"mostafa_meraji","page":"https://pixabay.com/photos/barber-shop-iran-cosmetology-5212059/"},{"id":"1453064","file":"photos/salon/1453064.jpg","role":"item","topic":"barber haircut","w":5320,"h":3545,"tags":"barber, chair, salon, hairdresser, shop, beard, male, man, barbershop, retro, shaving, masculinity, grooming, business, trendy, lifestyle, skill, stylish, hdr, hipster, store, brown business, brown shopping, brown shop, brown company, brown retro, barber, barber, barber, barber, barber, salon, barbershop, barbershop, barbershop","by":"ClickerHappy","page":"https://pixabay.com/photos/barber-chair-salon-hairdresser-1453064/"},{"id":"1516352","file":"photos/salon/1516352.jpg","role":"item","topic":"barber haircut","w":2592,"h":1728,"tags":"hairdressing, cutting hair, haircut, hair, comb, hair cut, scissors, hairdresser, cut, cutting, gray hair, haircut, haircut, haircut, hair cut, hair cut, hair cut, hair cut, hair cut, hairdresser","by":"Jo_Johnston","page":"https://pixabay.com/photos/hairdressing-cutting-hair-haircut-1516352/"},{"id":"3096664","file":"photos/salon/3096664.jpg","role":"item","topic":"eyelashes","w":3021,"h":2351,"tags":"woman, portrait, face, skin, make-up, fashion, eyes, look, seductive, sensual, lips, person, model, girl, young, adult, makeup, glamour, female, beautiful, elegance, skincare, portrait, face, face, face, face, face, skin, person, model, girl, girl, makeup, makeup, makeup","by":"Gromovataya","page":"https://pixabay.com/photos/woman-portrait-face-skin-make-up-3096664/"},{"id":"1327811","file":"photos/salon/1327811.jpg","role":"item","topic":"spa massage","w":5624,"h":3736,"tags":"hands, massage, treatment, fingers, palm, hand massage, massaging, hand, wrist, masseuse, physiotherapy, therapy, relax, relaxation, recovery, wellness, health, skin, spa, massage therapy, hands, hand, health, health, health, health, health, skin, skin, spa","by":"andreas160578","page":"https://pixabay.com/photos/hands-massage-treatment-fingers-1327811/"},{"id":"1612308","file":"photos/salon/1612308.jpg","role":"item","topic":"spa massage","w":5472,"h":3648,"tags":"massage therapy, essential oils, skincare, spa, aroma therapy, aromatherapy, relaxation, hygiene, wellness, treatment, indulgence, beauty spa, rejuvenation, massage spa, skincare, spa, spa, spa, spa, spa, wellness","by":"stevepb","page":"https://pixabay.com/photos/massage-therapy-essential-oils-1612308/"},{"id":"2722936","file":"photos/salon/2722936.jpg","role":"item","topic":"spa massage","w":5184,"h":3456,"tags":"woman, massage, therapy, physiotherapy, stress, wellness, complexion, skin, treatment, demonstration, therapy, therapy, physiotherapy, physiotherapy, physiotherapy, physiotherapy, physiotherapy, stress, stress, skin, skin, skin","by":"whitesession","page":"https://pixabay.com/photos/woman-massage-therapy-physiotherapy-2722936/"},{"id":"586185","file":"photos/salon/586185.jpg","role":"item","topic":"hair care products","w":5472,"h":3648,"tags":"woman, hair drying, girl, female, model, adult, brunette, hair, studio photography, hairstyling, hair dryer, morning, robe, blow dryer, long hair, hair, hair, hair, hair, hair","by":"RyanMcGuire","page":"https://pixabay.com/photos/woman-hair-drying-girl-female-586185/"},{"id":"2593366","file":"photos/salon/2593366.jpg","role":"item","topic":"hair care products","w":5472,"h":3648,"tags":"woman, portrait, model, fashion, fashion model, style, stylish woman, young woman, hairstyle, curly hair, long hair, female, girl, smile, happy, smiling, happy girl, woman, woman, model, fashion, fashion, fashion, long hair, girl, girl, girl, girl, girl, smile, happy, happy","by":"StockSnap","page":"https://pixabay.com/photos/woman-portrait-model-fashion-2593366/"},{"id":"4713579","file":"photos/salon/4713579.jpg","role":"item","topic":"hair care products","w":5472,"h":3648,"tags":"cream, lotion, hands, sunscreen, spa, skin, wellness, moisturizer, cosmetic, product, bottle, shampoo, health, massage, body, www, adorebeauty, com, au, co, nz, young, white bottle, clean hands, beauty, lotion, lotion, sunscreen, sunscreen, sunscreen, sunscreen, sunscreen, moisturizer, moisturizer, shampoo, shampoo","by":"AdoreBeautyNZ","page":"https://pixabay.com/photos/cream-lotion-hands-sunscreen-spa-4713579/"},{"id":"1853939","file":"photos/salon/1853939.jpg","role":"item","topic":"braids hairstyle","w":6522,"h":4353,"tags":"woman, fashion, model, hippie, braided hair, hairstyle, blonde, blonde woman, young woman, style, shades, sunglasses, beach, beetle, classic car, nature, girl, ocean, outdoors, person, sand, sea, seashore, summer, volkswagen","by":"Pexels","page":"https://pixabay.com/photos/woman-fashion-model-hippie-1853939/"},{"id":"5815354","file":"photos/salon/5815354.jpg","role":"item","topic":"braids hairstyle","w":3821,"h":5731,"tags":"woman, beauty, portrait, hairstyle, braids, braided hair, model, fashion, girl, female, young woman, beautiful, pretty, attractive, black, braids, braids, braids, braids, braids, braided hair","by":"MartinKwame","page":"https://pixabay.com/photos/woman-beauty-portrait-hairstyle-5815354/"},{"id":"1850075","file":"photos/salon/1850075.jpg","role":"item","topic":"braids hairstyle","w":5760,"h":3840,"tags":"bride, wedding, beautiful flowers, woman, outdoors, girl, blossoming trees, flowers, nature, braided hair, wedding gown, bridal gown, flower background, flower wallpaper, white dress","by":"Pexels","page":"https://pixabay.com/photos/bride-wedding-woman-outdoors-girl-1850075/"}]},"fitness":{"name":"Fitness and wellness","photos":[{"id":"2264825","file":"photos/fitness/2264825.jpg","role":"hero","topic":"gym interior","w":5472,"h":3648,"tags":"man, woman, push-ups, wellness, exercise, pair, couple, fit, fitness, sport, strength training, one arm, sporty, movement, muscles, muscle training, training, exercise, exercise, fitness, fitness, fitness, fitness, fitness, sport, training","by":"5132824","page":"https://pixabay.com/photos/man-woman-push-ups-wellness-2264825/"},{"id":"1282232","file":"photos/fitness/1282232.jpg","role":"hero","topic":"weightlifting","w":4432,"h":2955,"tags":"man, person, power, strength, strong, fitness, body, muscles, weights, exhausted, heavy, weightlifting, effort, exhausting, bodybuilding, powerful, black fitness, black workout, black body, black power, power, fitness, fitness, fitness, fitness, fitness, bodybuilding","by":"Pexels","page":"https://pixabay.com/photos/man-person-power-strength-strong-1282232/"},{"id":"2604149","file":"photos/fitness/2604149.jpg","role":"hero","topic":"group fitness class","w":5553,"h":3124,"tags":"man, exercise, fitness, gym, dumbbells, workout, weightlifting, exercise, fitness, gym, gym, gym, gym, gym, workout","by":"StockSnap","page":"https://pixabay.com/photos/man-exercise-fitness-gym-dumbbells-2604149/"},{"id":"534615","file":"photos/fitness/534615.jpg","role":"item","topic":"gym interior","w":5458,"h":3639,"tags":"crossfit, sports, fitness, training, exercise, athlete, young, healthy, workout, fit, muscular, body, people, strength, power, strong, female, sport, woman, athletic, girl, women, active, gym, exercising, weight lifting, weight, gray fitness, gray gym, gray exercise, gray training, gray healthy, gray workout, gray sports, gray body, gray power, sports, fitness, fitness, exercise, workout, sport, gym, gym, gym, gym, gym","by":"Ichigo121212","page":"https://pixabay.com/photos/crossfit-sports-fitness-training-534615/"},{"id":"828726","file":"photos/fitness/828726.jpg","role":"item","topic":"gym interior","w":4288,"h":2848,"tags":"training, muscles, arms, blonde, bar bells, workout, fitness, exercise, sport, gym, strong, young, woman, person, healthy, lifestyle, body, fit, muscular, studio, athlete, equipment, strength, female, active, power, mirror, blue fitness, blue gym, blue exercise, blue training, blue healthy, blue workout, blue sports, blue body, blue mirror, blue power, fitness, gym, gym, gym, gym, gym, mirror","by":"scottwebb","page":"https://pixabay.com/photos/training-muscles-arms-blonde-828726/"},{"id":"595529","file":"photos/fitness/595529.jpg","role":"item","topic":"gym interior","w":5472,"h":3648,"tags":"physiotherapy, weight training, dumbbells, exercise balls, weight loss, workout, health, gym, therapist, physiotherapist, healthcare, fitness, wellness, rehabilitation, healing, therapeutic, weight loss, weight loss, workout, health, gym, gym, gym, gym, gym, fitness, fitness, fitness","by":"stevepb","page":"https://pixabay.com/photos/physiotherapy-weight-training-595529/"},{"id":"2343558","file":"photos/fitness/2343558.jpg","role":"item","topic":"group fitness class","w":2000,"h":1334,"tags":"jogging, run, sport, jog, sporty, race, movement, sneakers, away, shoes, running shoes, jogging shoes, endurance, condition, leisure, training, health, fit, fitness, legs, marathon, cardio, man legs, landscape, road, athlete, muscles, runner, jogging, run, run, sport, sport, health, health, health, health, health, fitness, fitness, fitness","by":"kinkate","page":"https://pixabay.com/photos/jogging-run-sport-jog-sporty-race-2343558/"},{"id":"3134828","file":"photos/fitness/3134828.jpg","role":"item","topic":"yoga class","w":6000,"h":4000,"tags":"ease, balance, easy, power, positive, dance, yoga, meditation, nature, woman, fitness, health, waterdrop, splash, water, drops, reflection, crown, expression, move, gymnastics, relaxation, to dance, athletic, sports, spiritual","by":"geralt","page":"https://pixabay.com/photos/ease-balance-easy-power-positive-3134828/"},{"id":"3053488","file":"photos/fitness/3053488.jpg","role":"item","topic":"yoga class","w":6720,"h":4480,"tags":"yoga, exercise, fitness, woman, health, strength, body, relaxation, sport, meditation, lifestyle, wellbeing, pilates, abdomen, stretch, adult, leisure, people, studio, pose, international yoga day, yoga, yoga, yoga, yoga, yoga, exercise, health, meditation","by":"lograstudio","page":"https://pixabay.com/photos/yoga-exercise-fitness-woman-health-3053488/"},{"id":"1851165","file":"photos/fitness/1851165.jpg","role":"item","topic":"yoga class","w":5472,"h":3648,"tags":"meditate, woman, yoga, zen, meditating, relax, relaxing, wellness, yoga pose, meditation, nature, peaceful, silhouette, sunset, tranquil, calm","by":"Pexels","page":"https://pixabay.com/photos/meditate-woman-yoga-zen-meditating-1851165/"},{"id":"594143","file":"photos/fitness/594143.jpg","role":"item","topic":"weightlifting","w":3072,"h":2048,"tags":"fitness, dumbbells, training, gym, weights, weightlifting, weight training, gym equipment, fitness studio, studio, weight, exercise, many, train, fit, fitness, gym, gym, gym, gym, gym","by":"markusspiske","page":"https://pixabay.com/photos/fitness-dumbbells-training-gym-594143/"},{"id":"1284616","file":"photos/fitness/1284616.jpg","role":"item","topic":"weightlifting","w":2048,"h":1365,"tags":"weight lifting, fitness, gym, perspective, bodybuilding, dumbells, weights, health, sport, training, exercise, workout, fitness, gym, gym, gym, gym, gym","by":"Pexels","page":"https://pixabay.com/photos/weight-lifting-fitness-gym-1284616/"},{"id":"2260736","file":"photos/fitness/2260736.jpg","role":"item","topic":"weightlifting","w":5472,"h":3648,"tags":"woman, personal trainer, fitness, exercise, workout, strength training, coach, dumbbells, weight bench, weight training, healthy, caucasian, personal trainer, personal trainer, personal trainer, personal trainer, fitness, fitness, fitness, fitness, fitness, exercise, exercise, workout, workout, coach","by":"5132824","page":"https://pixabay.com/photos/woman-personal-trainer-fitness-2260736/"},{"id":"4782721","file":"photos/fitness/4782721.jpg","role":"item","topic":"trail running","w":6000,"h":4000,"tags":"running, sport, race, athlete, hall, speed, fitness, athletes, woman, athletic, run, jog, sports, running, running, running, running, running, fitness, run, run","by":"Fotorech","page":"https://pixabay.com/photos/running-sport-race-athlete-hall-4782721/"},{"id":"1509003","file":"photos/fitness/1509003.jpg","role":"item","topic":"trail running","w":4500,"h":3000,"tags":"jogging, fitness, exercise, training, sport, outdoor fitness, healthy, running, jogger, woman, young, lifestyle, green fitness, green exercise, green training, green running, green healthy, green workout, green sports, green run, jogging, jogging, jogging, exercise, running, running, running, running, running","by":"MabelAmber","page":"https://pixabay.com/photos/jogging-fitness-exercise-training-1509003/"},{"id":"1514845","file":"photos/fitness/1514845.jpg","role":"item","topic":"boxing training","w":4325,"h":2282,"tags":"box, sport, men, training, male, people, person, boxer, boxing, fight, in black, dark, shadow, hand, kickboxing, black training, black dark, black sports, black box, sport, men, boxing, boxing, boxing, boxing, boxing, fight","by":"harutmovsisyan","page":"https://pixabay.com/photos/box-sport-men-training-male-1514845/"},{"id":"1984344","file":"photos/fitness/1984344.jpg","role":"item","topic":"boxing training","w":7210,"h":4410,"tags":"boxer, woman, sport, fighter, fitness, training, athlete, dark, fitness, fitness, fitness, fitness, fitness","by":"TheDigitalArtist","page":"https://pixabay.com/photos/boxer-woman-sport-fighter-fitness-1984344/"},{"id":"5288635","file":"photos/fitness/5288635.jpg","role":"item","topic":"boxing training","w":3648,"h":5472,"tags":"boxing, box, fight, boxer, sports, male, ring, fighter, body, manly, man, athlete, athletic, gloves, confident, chest, strong, fighting, sport, defense, gym, superhero, staredown","by":"Sammy-Sander","page":"https://pixabay.com/photos/boxing-box-fight-boxer-sports-5288635/"},{"id":"2573216","file":"photos/fitness/2573216.jpg","role":"item","topic":"stretching","w":4460,"h":2974,"tags":"woman, yoga, stretching, meditation, fitness, working out, workout, international yoga day, pink, yoga, yoga, yoga, yoga, yoga","by":"StockSnap","page":"https://pixabay.com/photos/woman-yoga-stretching-meditation-2573216/"},{"id":"2959226","file":"photos/fitness/2959226.jpg","role":"item","topic":"stretching","w":2048,"h":1365,"tags":"yoga, asana, pose, hatha, woman, girl, stretching, fitness, sports, flexible, person, international yoga day, yoga, yoga, yoga, yoga, yoga","by":"AndiP","page":"https://pixabay.com/photos/yoga-asana-pose-hatha-woman-girl-2959226/"},{"id":"1822476","file":"photos/fitness/1822476.jpg","role":"item","topic":"stretching","w":4818,"h":5346,"tags":"women, yoga, silhouettes, water, reflection, mirroring, water reflection, pose, posing, yoga pose, meditation, stretching, wellness, well-being, exercise, adults, asia, girls, nature, morning, outdoors, pair, people, stance, sunrise, sunset","by":"sasint","page":"https://pixabay.com/photos/women-yoga-silhouettes-water-1822476/"},{"id":"2253423","file":"photos/fitness/2253423.jpg","role":"item","topic":"healthy smoothie","w":3845,"h":2161,"tags":"smoothies, fruit, drink, food, beverage, vitamins, healthy, fresh, nourishment, vegan, juice, fruity, detox, prevent, gluten free, straws, glasses, kiwi, kumquat, raspberry, grapefruit, berry fruit, diet, detoxify, rich in vitamins, vitamin c, smoothies, smoothies, juice, juice, juice, juice, juice, vitamin c","by":"silviarita","page":"https://pixabay.com/photos/smoothies-fruit-drink-food-2253423/"},{"id":"1725835","file":"photos/fitness/1725835.jpg","role":"item","topic":"healthy smoothie","w":5805,"h":3870,"tags":"vegetable juices, nature, vegetables, secluded, white, fresh, glass, carrot, juices, food, cocktail, drink, diet, healthy, organic, tomato, a vegetable, detox, refreshment, strict, green, juicy, cucumber, natural, health, leaf, nutrition, vitamin, breakfast, vegetarian, gourmet, season, energy, varied, antioxidant, beetroot, vegans, squeezed juice, vegetarianism, culinary blog, veganism, ecology, home made products, plot","by":"AS_Photography","page":"https://pixabay.com/photos/vegetable-juices-vegetables-secluded-1725835/"},{"id":"3202481","file":"photos/fitness/3202481.jpg","role":"item","topic":"spin cycling class","w":4000,"h":2667,"tags":"cyclist, person, people, men, bicycle, cycling, nature, exercise, active, travel, transport, ride, bicycle ride, road, sunset, silhouette","by":"MabelAmber","page":"https://pixabay.com/photos/cyclist-person-people-men-bicycle-3202481/"},{"id":"2262083","file":"photos/fitness/2262083.jpg","role":"item","topic":"personal trainer","w":5472,"h":3648,"tags":"sports, fitness, training, athletic, move, gymnastics, graceful, fit, weight training, dumbbell, weight lifting, elegant, female, muscles, weights, elegance, weight plates, work out, muscle training, woman, agility, flexible, fitness, fitness, training, weight training, weight lifting, weight lifting, weight lifting, weight lifting, work out, work out, work out, work out, work out","by":"5132824","page":"https://pixabay.com/photos/sports-fitness-training-athletic-2262083/"},{"id":"1840858","file":"photos/fitness/1840858.jpg","role":"item","topic":"personal trainer","w":4288,"h":2848,"tags":"home fitness equipment, blue fitness equipment, portable fitness equipment, fitness, equipment, home gym, workout, fitness training, exercise, blue home, blue fitness, blue gym, blue exercise, blue training, blue workout, fitness, home gym, home gym, home gym, home gym, home gym","by":"rob9040","page":"https://pixabay.com/photos/home-fitness-equipment-1840858/"},{"id":"455164","file":"photos/fitness/455164.jpg","role":"item","topic":"personal trainer","w":5176,"h":3580,"tags":"gym, exercise, fitness, workout, training, health, healthy, weight loss, fit, cardiovascular, orbitrek, gym, weight loss, weight loss, weight loss, weight loss, weight loss, cardiovascular","by":"stevepb","page":"https://pixabay.com/photos/gym-exercise-fitness-workout-455164/"}]},"community":{"name":"Community organization","photos":[{"id":"4634314","file":"photos/community/4634314.jpg","role":"hero","topic":"community gathering outdoors","w":7132,"h":4757,"tags":"woman, crowd, soup, the raval, barcelona, dinner, raval, festival, people, food, crowd, crowd, crowd, crowd, crowd, soup, barcelona, dinner, dinner","by":"Antonio_Cansino","page":"https://pixabay.com/photos/woman-crowd-soup-the-raval-4634314/"},{"id":"3255025","file":"photos/community/3255025.jpg","role":"hero","topic":"community gathering outdoors","w":4539,"h":2968,"tags":"people, group, many, crowd, woman, education, audience, adult, mother, meeting, presentation, person, speaker, speech, baby, child, brown education, brown meeting, brown crowd, brown group, brown conference, brown presentation, crowd, audience, audience, audience, audience, audience, speaker, speaker, speech, speech, speech, speech","by":"ernestoeslava","page":"https://pixabay.com/photos/people-group-many-crowd-woman-3255025/"},{"id":"4305368","file":"photos/community/4305368.jpg","role":"hero","topic":"canoe lake","w":4988,"h":3330,"tags":"fisherman, hd wallpaper, cool backgrounds, 4k wallpaper 1920x1080, fishing, 4k wallpaper, fish, boat, net, catch, fishermen, lake, water, free wallpaper, laptop wallpaper, nature, windows wallpaper, free background, river, food, desktop backgrounds, silhouette, people, man, wallpaper 4k, beautiful wallpaper, wallpaper hd, morning, outdoor, ocean, sea, background, lifestyle, asian, thailand, full hd wallpaper, mac wallpaper, sunrise, sunset","by":"chanwity","page":"https://pixabay.com/photos/fisherman-fishing-fish-boat-net-4305368/"},{"id":"7788809","file":"photos/community/7788809.jpg","role":"item","topic":"volunteers","w":6693,"h":4462,"tags":"volunteer, pollution, bottle plastic, environment, sea, beach, dirty, problem, global warming, ecology, junk, person, waste, ocean, sand, recycling, garbage, protection, discard, nature, earth day, volunteer, volunteer, volunteer, volunteer, volunteer, global warming, recycling, recycling, earth day","by":"chaiyananuwatmongkolchai","page":"https://pixabay.com/photos/volunteer-pollution-bottle-plastic-7788809/"},{"id":"1114524","file":"photos/community/1114524.jpg","role":"item","topic":"community garden","w":4160,"h":3120,"tags":"orchard, urban, labor city of culture, gijón, asturias, spain, yard, terraces, vegetables, tourist, walk, holiday, tourism, nature","by":"PortalJardin","page":"https://pixabay.com/photos/orchard-urban-labor-city-of-culture-1114524/"},{"id":"5382501","file":"photos/community/5382501.jpg","role":"item","topic":"meeting discussion table","w":3354,"h":2019,"tags":"job, office, team, business, internet, technology, design, draft, portable, meeting, job, office, office, office, office, team, team, business, business, business, business, business, technology, meeting, meeting, meeting","by":"RonaldCandonga","page":"https://pixabay.com/photos/job-office-team-business-internet-5382501/"},{"id":"2557396","file":"photos/community/2557396.jpg","role":"item","topic":"meeting discussion table","w":3648,"h":2432,"tags":"people, girls, women, students, friends, talking, meeting, study, group, activity, homework, group work, brainstorming, group study, people, people, people, students, students, students, friends, friends, friends, talking, meeting, meeting, meeting, meeting, meeting, study, study, group","by":"StockSnap","page":"https://pixabay.com/photos/people-girls-women-students-2557396/"},{"id":"1561989","file":"photos/community/1561989.jpg","role":"item","topic":"canoe lake","w":5039,"h":3359,"tags":"girl, kayak, nature, lake, canoe, kayaking, paddle, paddling, boat, alone, adventure, active, water sports, woman, caucasian, blue water","by":"thatsphotography","page":"https://pixabay.com/photos/girl-kayak-lake-canoe-kayaking-1561989/"},{"id":"4380804","file":"photos/community/4380804.jpg","role":"item","topic":"canoe lake","w":3648,"h":5472,"tags":"man, canoe, kayak, boating, kayaking, lake, adventure, banff, alberta, canada, water, nature, scenery, mountain, travel, forest, sky, outdoor, summer, scenic, relax, sports, vacation, canoe, canoe, kayak, kayak, kayak, kayak, kayaking, kayaking, kayaking, kayaking, banff, canada, canada, canada, canada, canada, travel","by":"jaywwild","page":"https://pixabay.com/photos/man-canoe-kayak-boating-kayaking-4380804/"},{"id":"1841132","file":"photos/community/1841132.jpg","role":"item","topic":"farmers market","w":2592,"h":1728,"tags":"apples, farmer's market, buy, buying, consumer, customer, sell, business, deal, fruits, give, hands, sale, produce, fresh produce, fruit stand, buy, buy, buying, consumer, consumer, consumer, customer, customer, customer, customer, customer, sell, sell, business, business, business, business, deal, give, give, sale","by":"Pexels","page":"https://pixabay.com/photos/apples-farmers-market-buy-buying-1841132/"},{"id":"3147758","file":"photos/community/3147758.jpg","role":"item","topic":"farmers market","w":6016,"h":4016,"tags":"the market, fresh, grocery store, food, people, vegetables, fruit, store, healthy, ecological, retail, client, nutritional, street, purchase, green, production, sale, local, gourmet, lifestyle, nutrition, market vegetable, shopping, farmers market, trade, traditional, retailer, bokeh, out of focus, kitchen, spices, blurred background, grocery store, grocery store, grocery store, grocery store, grocery store, farmers market, farmers market","by":"AS_Photography","page":"https://pixabay.com/photos/the-market-fresh-grocery-store-food-3147758/"},{"id":"1493905","file":"photos/community/1493905.jpg","role":"item","topic":"farmers market","w":4824,"h":3216,"tags":"berries, blueberries, raspberries, fruits, market, farmer's market, fruit stand, produce, harvest, organic, fresh, fresh berries, fresh blueberries, fresh raspberries, ripe, ripe berries, ripe blueberries, ripe raspberries, berries, berries, berries, berries, berries, blueberries, market, market, market","by":"Couleur","page":"https://pixabay.com/photos/berries-blueberries-raspberries-1493905/"},{"id":"1655783","file":"photos/community/1655783.jpg","role":"item","topic":"library books","w":6016,"h":4016,"tags":"books, wallpaper 4k, cool backgrounds, hd wallpaper, shelves, 4k wallpaper 1920x1080, door, beautiful wallpaper, windows wallpaper, full hd wallpaper, desktop backgrounds, entrance, library, knowledge, free wallpaper, wisdom, laptop wallpaper, civic museum library, 4k wallpaper, mac wallpaper, free background, international gallery of modern art, wallpaper hd, pesaro, italy, background","by":"ninocare","page":"https://pixabay.com/photos/books-shelves-door-entrance-1655783/"},{"id":"2596809","file":"photos/community/2596809.jpg","role":"item","topic":"library books","w":5013,"h":4634,"tags":"books, library, room, school, study, knowledge, education, shelf, light, bulb, books, books, books, library, library, library, library, library, school, school, school, study, study, education, education","by":"StockSnap","page":"https://pixabay.com/photos/books-library-room-school-study-2596809/"},{"id":"1659717","file":"photos/community/1659717.jpg","role":"item","topic":"library books","w":4429,"h":2542,"tags":"christmas background, book, read, old, literature, books, bookshelf, old books, hardcover, hardback, cover, collection, library, historically, leather covers, bookcase, used books, stories, reading, knowledge, bookworm","by":"garten-gg","page":"https://pixabay.com/photos/christmas-background-book-read-old-1659717/"},{"id":"3471402","file":"photos/community/3471402.jpg","role":"item","topic":"soccer field","w":5959,"h":3287,"tags":"soccer, sport, ball, football, field, activity, game, soccer, sport, football, football, football, football, football","by":"pixel2013","page":"https://pixabay.com/photos/soccer-sport-ball-football-field-3471402/"},{"id":"488700","file":"photos/community/488700.jpg","role":"item","topic":"soccer field","w":3000,"h":2000,"tags":"soccer, ball, stadium, field, soccer stadium, football, soccer ball, sport, football stadium, football field, soccer field, grass, nature, game","by":"jarmoluk","page":"https://pixabay.com/photos/soccer-ball-stadium-field-488700/"}]},"consulting":{"name":"Consulting and professional services","photos":[{"id":"5382501","file":"photos/consulting/5382501.jpg","role":"hero","topic":"business meeting office","w":3354,"h":2019,"tags":"job, office, team, business, internet, technology, design, draft, portable, meeting, job, office, office, office, office, team, team, business, business, business, business, business, technology, meeting, meeting, meeting","by":"RonaldCandonga","page":"https://pixabay.com/photos/job-office-team-business-internet-5382501/"},{"id":"2557396","file":"photos/consulting/2557396.jpg","role":"hero","topic":"team discussion office","w":3648,"h":2432,"tags":"people, girls, women, students, friends, talking, meeting, study, group, activity, homework, group work, brainstorming, group study, people, people, people, students, students, students, friends, friends, friends, talking, meeting, meeting, meeting, meeting, meeting, study, study, group","by":"StockSnap","page":"https://pixabay.com/photos/people-girls-women-students-2557396/"},{"id":"594090","file":"photos/consulting/594090.jpg","role":"hero","topic":"business meeting office","w":5472,"h":3648,"tags":"startup, meeting, brainstorming, business, teamwork, team, people, office, group, corporate, conference, colleagues, company, partnership, seminar, project, table, professionals, casual, partners, plan, sketch, notepad, coworkers, writing, coffee, laptop, computer, notes, working, meeting, meeting, meeting, business, business, business, business, business, teamwork, team, team, team, people, office, office, office, writing, computer, working","by":"StartupStockPhotos","page":"https://pixabay.com/photos/startup-meeting-brainstorming-594090/"},{"id":"3213924","file":"photos/consulting/3213924.jpg","role":"item","topic":"business meeting office","w":2349,"h":1481,"tags":"teamwork, cooperation, brainstorming, business, finance, office, team, partners, flat lay, meeting, collaboration, corporation, management, support, team building, unity, teamwork, business, business, business, business, business, office, office, team, team, meeting","by":"Mohamed_hassan","page":"https://pixabay.com/photos/teamwork-cooperation-brainstorming-3213924/"},{"id":"1979261","file":"photos/consulting/1979261.jpg","role":"item","topic":"business meeting office","w":5760,"h":3840,"tags":"people, business, meeting, business meeting, coworkers, agreement, men, women, professionals, office, employees, suit, work, greeting, boss, computer, group, handshake, desk, team, colleagues, arrangement, people, business, business, business, business, business, meeting, meeting, business meeting, office, office, work, team","by":"089photoshootings","page":"https://pixabay.com/photos/people-business-meeting-1979261/"},{"id":"593341","file":"photos/consulting/593341.jpg","role":"item","topic":"team discussion office","w":5472,"h":3648,"tags":"startup, start-up, people, silicon valley, teamwork, business, team, office, group, meeting, corporate, conference, company, men, partnership, table, technology, casual, successful, seminar, colleagues, working, planning, network, strategy, cooperation, professional, notes, notepad, writing, laptop, computer, drinks, business, business, business, business, business, team, team, office, office, meeting, meeting, meeting, company, technology, writing, writing, computer","by":"StartupStockPhotos","page":"https://pixabay.com/photos/startup-start-up-people-593341/"},{"id":"594091","file":"photos/consulting/594091.jpg","role":"item","topic":"team discussion office","w":5472,"h":3648,"tags":"meeting, brainstorming, business, teamwork, team, people, office, group, corporate, conference, colleagues, company, partnership, project, table, partners, plan, sketch, notepad, coworkers, writing, drinks, laptop, computer, notes, working, meeting, meeting, meeting, meeting, business, business, business, business, business, teamwork, team, team, team, people, office, office, office, company","by":"StartupStockPhotos","page":"https://pixabay.com/photos/meeting-brainstorming-business-594091/"},{"id":"593296","file":"photos/consulting/593296.jpg","role":"item","topic":"team discussion office","w":5472,"h":3648,"tags":"laptops, meeting, businessmen, coworkers, colleagues, business meeting, conference room, meeting room, startup, start-up, notebooks, creative, company, silicon valley, modern, office, conference, table, discussion, business, team, computers, desk, technology, vaio, people, working, meeting, meeting, meeting, meeting, meeting, business meeting, office, office, discussion, discussion, business, business, business, team, team","by":"StartupStockPhotos","page":"https://pixabay.com/photos/laptops-meeting-businessmen-593296/"},{"id":"2209239","file":"photos/consulting/2209239.jpg","role":"item","topic":"presentation workshop","w":4862,"h":3249,"tags":"board, pens, sticky notes, workshop, business, office, paper, meeting, event, workplace, work, whiteboard","by":"ClickerHappy","page":"https://pixabay.com/photos/board-pens-sticky-notes-workshop-2209239/"},{"id":"3986809","file":"photos/consulting/3986809.jpg","role":"item","topic":"presentation workshop","w":6000,"h":4000,"tags":"lecture, instructor, lecture room, room, this special steel company, teacher, education, seminar, man, school, standing, study, this home, window companies 24, seoul business hub, crowd, people many, lecture, lecture, lecture, lecture, teacher, teacher, teacher, teacher, teacher, seminar, seminar, seminar, seminar","by":"LeeJeongSoo","page":"https://pixabay.com/photos/lecture-instructor-lecture-room-3986809/"},{"id":"3248255","file":"photos/consulting/3248255.jpg","role":"item","topic":"presentation workshop","w":6016,"h":4016,"tags":"conference, lecture, training, presentation, lecture hall, education, university, lecturer, teacher, school, coach, communication, report, corporation, e-marketing, professional, development, marketing, conference, lecture, lecture, lecture, lecture, presentation, lecturer, teacher, teacher, teacher, teacher, teacher, coach, coach, report, marketing","by":"AS_Photography","page":"https://pixabay.com/photos/conference-lecture-training-3248255/"},{"id":"3091906","file":"photos/consulting/3091906.jpg","role":"item","topic":"handshake business","w":4272,"h":2168,"tags":"shaking hands, handshake, hands, welcome, agreement, contract, shake hands, negotiation, finger, business people, collaboration, friendship, together, binding, compatible, conclusion, liability, meet, relationship, connection, men's suit, office, business, symbol, promise, teamwork, team, result, company, human, handshake, handshake, handshake, handshake, handshake","by":"geralt","page":"https://pixabay.com/photos/shaking-hands-handshake-hands-3091906/"},{"id":"3267505","file":"photos/consulting/3267505.jpg","role":"item","topic":"planning whiteboard","w":5472,"h":3648,"tags":"startup, whiteboard, room, indoors, adult, office, business, technology, male, corporate, design, designer, brainstorm, startup, office, business, business, business, business, business, technology, design, designer","by":"StartupStockPhotos","page":"https://pixabay.com/photos/startup-whiteboard-room-indoors-3267505/"},{"id":"4702060","file":"photos/consulting/4702060.jpg","role":"item","topic":"planning whiteboard","w":7730,"h":5156,"tags":"woman, work, office, whiteboard, meeting, girl, female, employee, planning, business, smile, happy, work, work, office, office, office, meeting, meeting, meeting, meeting, meeting, employee, employee, business, business, business, business, smile, happy","by":"This_is_Engineering","page":"https://pixabay.com/photos/woman-work-office-whiteboard-4702060/"},{"id":"3196481","file":"photos/consulting/3196481.jpg","role":"item","topic":"contract signing documents","w":8736,"h":5824,"tags":"laptop, office, hand, writing, business, document, contract, paper, education, work, notebook, data, pen, meeting, recruitment, agreement, paperwork, office, business, business, business, business, business, contract, contract, education, work, meeting, meeting","by":"AymaneJed","page":"https://pixabay.com/photos/laptop-office-hand-writing-3196481/"},{"id":"5710164","file":"photos/consulting/5710164.jpg","role":"item","topic":"contract signing documents","w":5000,"h":3333,"tags":"man, sign, paper, write, document, contract, signing, agreement, signature, signing document, signing contract, signing paper, sign, contract, contract, contract, contract, contract, signing, agreement, signature, signature","by":"Maximilianovich","page":"https://pixabay.com/photos/man-sign-paper-write-document-5710164/"},{"id":"1728448","file":"photos/consulting/1728448.jpg","role":"item","topic":"contract signing documents","w":3072,"h":2048,"tags":"agree, english, consent, contract, agreement, cross, mark with a cross, ballpoint pen, understanding, conclusion, business deal, arrangement, match, pact, form, business, paper, document, pen, agree, agree, consent, consent, contract, contract, contract, contract, contract, agreement, agreement, conclusion, form","by":"Catkin","page":"https://pixabay.com/photos/agree-english-consent-contract-1728448/"},{"id":"2284501","file":"photos/consulting/2284501.jpg","role":"item","topic":"construction plans blueprint","w":5400,"h":3375,"tags":"meeting, business, architect, office, team, plan, blueprints, teamwork, group, people, project, workplace, table, desk, meeting, meeting, meeting, business, business, business, business, business, architect, office, office, office, office, team, team, teamwork, project, workplace","by":"mwitt1337","page":"https://pixabay.com/photos/meeting-business-architect-office-2284501/"},{"id":"1857175","file":"photos/consulting/1857175.jpg","role":"item","topic":"construction plans blueprint","w":6000,"h":4000,"tags":"floor plan, construction, building, pencil, architecture, blueprint, design, architect, sketch, drawing, technical, draft, white, ruler, contemporary architecture, construction, construction, construction, construction, construction, architecture","by":"3844328","page":"https://pixabay.com/photos/floor-plan-construction-building-1857175/"},{"id":"3979490","file":"photos/consulting/3979490.jpg","role":"item","topic":"construction plans blueprint","w":3010,"h":1813,"tags":"architect, plan, construction, protective helmet, engineering, team, occupation, construction, construction, construction, construction, construction, engineering","by":"borevina","page":"https://pixabay.com/photos/architect-plan-construction-3979490/"},{"id":"1080589","file":"photos/consulting/1080589.jpg","role":"item","topic":"construction plans blueprint","w":3771,"h":2510,"tags":"architect, building, joy, planning, plans, professional, employee, builder, worker, repair, contractor, man, people, male, work, development, housing, home, build, architect, builder, builder, worker, worker, worker, contractor, contractor, contractor, contractor, home, home, home, home, home, build","by":"jarmoluk","page":"https://pixabay.com/photos/architect-building-joy-planning-1080589/"},{"id":"547363","file":"photos/consulting/547363.jpg","role":"item","topic":"forest aerial","w":2391,"h":1707,"tags":"mountain, forest, clouds, fog, sea of clouds, trees, woods, conifers, coniferous, coniferous forest, scenic, idyllic, woodland, nature, mountain, mountain, mountain, mountain, mountain, forest, forest, forest, clouds, fog, fog","by":"cafepampas","page":"https://pixabay.com/photos/mountain-forest-clouds-fog-547363/"},{"id":"5281668","file":"photos/consulting/5281668.jpg","role":"item","topic":"forest aerial","w":4797,"h":6000,"tags":"heaven, road, drone, nature, path, landscape, goal, clouds, horizon, bird's eye view, air, forest, trees, green, automobile, to travel, travel, fall, aerial, curves, phone wallpaper, aerial view, streets, perspective, aesthetic wallpaper, iphone wallpaper, Germany, Baden-Württemberg, Böblingen","by":"BarneyElo","page":"https://pixabay.com/photos/heaven-road-drone-nature-path-5281668/"},{"id":"2147400","file":"photos/consulting/2147400.jpg","role":"item","topic":"forest aerial","w":3992,"h":2242,"tags":"nature, forest, frost, snowy, trees, scenery, road, snow, aerial, winter, season, scenic, environment, travel, outdoors, landscape, adventure, peaceful, discovery, spring, aerial photography, road, winter, travel, travel, travel, travel, travel, adventure","by":"invisiblepower","page":"https://pixabay.com/photos/nature-forest-frost-snowy-trees-2147400/"},{"id":"849825","file":"photos/consulting/849825.jpg","role":"item","topic":"laptop analytics","w":3000,"h":2000,"tags":"student, typing, keyboard, text, startup, people, students, office, strategy, work, technology, company, corporate, communication, young, plan, marketing, computer, design, professional, planning, internet, project, laptop, presentation, web, display, monitor, screen, digital, electronic, pc, modern, student, office, work, work, work, marketing, computer, computer, computer, computer, computer, laptop, laptop, laptop","by":"StartupStockPhotos","page":"https://pixabay.com/photos/student-typing-keyboard-text-849825/"},{"id":"849822","file":"photos/consulting/849822.jpg","role":"item","topic":"laptop analytics","w":3000,"h":2000,"tags":"student, typing, keyboard, text, woman, startup, business, people, students, office, strategy, work, technology, company, corporate, communication, young, plan, marketing, computer, design, professional, planning, internet, project, laptop, presentation, web, display, monitor, women, girls, screen, digital, electronic, pc, modern, student, business, business, business, business, students, office, work, work, work, work, marketing, marketing, computer, computer, computer, computer, computer, laptop, laptop, laptop","by":"StartupStockPhotos","page":"https://pixabay.com/photos/student-typing-keyboard-text-woman-849822/"},{"id":"2256489","file":"photos/consulting/2256489.jpg","role":"item","topic":"office building glass","w":4608,"h":3072,"tags":"architecture, skyscraper, glass facades, modern, facade, sky, building, düsseldorf, city, nature, modern architecture, glass, modern building, glass front, windows, glass windows, reflection, exterior, perspective, office building, urban, high, downtown, low angle shot, structure, mirroring","by":"652234","page":"https://pixabay.com/photos/architecture-skyscraper-2256489/"},{"id":"1048092","file":"photos/consulting/1048092.jpg","role":"item","topic":"office building glass","w":4608,"h":3456,"tags":"architecture, modern, building, facade, skyscraper, geometric, windows, glass windows, perspective, düsseldorf, office building, mirroring, reflection, architecture, building, building, building, building, building","by":"652234","page":"https://pixabay.com/photos/architecture-modern-building-facade-1048092/"},{"id":"3184798","file":"photos/consulting/3184798.jpg","role":"item","topic":"office building glass","w":6000,"h":4000,"tags":"skyscrapers, nature, singapore, city, sky, buildings, financial district, architecture, urban, high rise buildings","by":"cegoh","page":"https://pixabay.com/photos/skyscrapers-singapore-city-sky-3184798/"},{"id":"22039","file":"photos/consulting/22039.jpg","role":"item","topic":"office building glass","w":5000,"h":3333,"tags":"architecture, buildings, city, skyscrapers, building exterior, glass exterior, glass windows, facade, urban, modern buildings, office buildings, apartment, corporate, real estate, buildings, city, apartment, corporate, corporate, real estate, real estate, real estate, real estate, real estate","by":"PublicDomainPictures","page":"https://pixabay.com/photos/architecture-buildings-city-22039/"}]},"moving":{"name":"Moving, storage and logistics","photos":[{"id":"3770982","file":"photos/moving/3770982.jpg","role":"hero","topic":"movers carrying boxes","w":6000,"h":4000,"tags":"glass work, workers, carrying glass, glass carriers, window, windows, glass window, window worker, window install, window mover, work, glass, hard worker, big windows, window installer, glass movers, moving glass, glass transport, glass transportation, blue work, blue window, blue glass, blue glasses, window worker, window install, window install, window install, window install, window install, hard worker, window installer, window installer","by":"DokaRyan","page":"https://pixabay.com/photos/glass-work-workers-carrying-glass-3770982/"},{"id":"2677373","file":"photos/moving/2677373.jpg","role":"hero","topic":"delivery truck highway","w":3888,"h":2592,"tags":"truck, freight, transportation, trailer, moving, mountains, road, semi-trailer, semi, cargo, carrier, delivery, dry van, haul, haulage, highway, scenic, canada, british columbia, nature, blue road, blue truck","by":"chapay","page":"https://pixabay.com/photos/truck-freight-transportation-2677373/"},{"id":"534577","file":"photos/moving/534577.jpg","role":"hero","topic":"delivery truck highway","w":4000,"h":3000,"tags":"semi-trailer, truck, road, follower, transport, traffic, ride, australia, truck, truck, truck, truck, truck","by":"falco","page":"https://pixabay.com/photos/semi-trailer-truck-road-follower-534577/"},{"id":"4408573","file":"photos/moving/4408573.jpg","role":"hero","topic":"warehouse loading docks","w":5464,"h":3640,"tags":"production, facility, logistic, distribution center, transit, truck, transport, top view, industrial, semi, aerial view, heavy, depot, germany, warehouse, container truck, shipping containers, storehouse, road, loading bay, factory, unloading, distribute, unload, europe, aerial photography, production, logistic, truck, truck, warehouse, warehouse, warehouse, warehouse, warehouse, Jankowice, Greater Poland Voivodeship, Poland","by":"marcinjozwiak","page":"https://pixabay.com/photos/production-facility-logistic-4408573/"},{"id":"2920533","file":"photos/moving/2920533.jpg","role":"item","topic":"moving truck","w":5287,"h":3559,"tags":"truck, heavy load, tractor, transport, traffic, special transport, bikes, tire, axis, low loader, chrome, machine, extra length, heavy-duty transporter, heavy load transport, truck, truck, truck, truck, truck, transport","by":"Tama66","page":"https://pixabay.com/photos/truck-heavy-load-tractor-transport-2920533/"},{"id":"1845572","file":"photos/moving/1845572.jpg","role":"item","topic":"packing boxes home","w":2738,"h":1825,"tags":"woman, truck, vehicle, driver, fashion, headscarf, female, model, outdoors, person, young, pickup truck, drive, truck, truck, truck, truck, truck, driver, driver, drive, drive","by":"Pexels","page":"https://pixabay.com/photos/woman-truck-vehicle-driver-fashion-1845572/"},{"id":"3392100","file":"photos/moving/3392100.jpg","role":"item","topic":"delivery truck highway","w":6000,"h":4000,"tags":"highway, road, trucks, vehicles, traffic, transport, transport vehicles, highway, highway, highway, highway, trucks, trucks, trucks, trucks, traffic, traffic, traffic, traffic, transport, transport, transport, transport, transport","by":"Schwoaze","page":"https://pixabay.com/photos/highway-road-trucks-vehicles-3392100/"},{"id":"1511683","file":"photos/moving/1511683.jpg","role":"item","topic":"cardboard boxes moving","w":3872,"h":2592,"tags":"package, packaging, delivery, cardboard, delivery service, package, packaging, delivery, delivery, delivery, delivery, delivery","by":"siala","page":"https://pixabay.com/photos/package-packaging-delivery-1511683/"},{"id":"1850170","file":"photos/moving/1850170.jpg","role":"item","topic":"warehouse storage shelves","w":4896,"h":3264,"tags":"archive, boxes, shelf, folders, documents, data, storage, rack, row, stock, business, warehouse, depth of field, archive, data, storage, warehouse, warehouse, warehouse, warehouse, warehouse","by":"Pexels","page":"https://pixabay.com/photos/archive-boxes-shelf-folders-1850170/"},{"id":"1845350","file":"photos/moving/1845350.jpg","role":"item","topic":"warehouse containers","w":5472,"h":3648,"tags":"port, pier, cargo containers, crate, export, freight, import, shipping industry, industry, outdoors, shipping containers, storage, warehouse, port, port, port, port, port, export, freight, import, industry, industry, warehouse, warehouse, warehouse","by":"Pexels","page":"https://pixabay.com/photos/port-pier-cargo-containers-crate-1845350/"},{"id":"5619201","file":"photos/moving/5619201.jpg","role":"item","topic":"warehouse storage shelves","w":6000,"h":4000,"tags":"store, stacks, shelves, stock, warehouse, supermarket, retail, shopping, shop, purchase, warehouse, warehouse, warehouse, warehouse, warehouse","by":"tianya1223","page":"https://pixabay.com/photos/store-stacks-shelves-stock-5619201/"},{"id":"3505109","file":"photos/moving/3505109.jpg","role":"item","topic":"piano","w":5800,"h":3872,"tags":"piano, instrument, music, piano keys, keyboard, musical instrument, melody, piano, piano, piano, piano, music, music, music, music, music","by":"MabelAmber","page":"https://pixabay.com/photos/piano-instrument-music-piano-keys-3505109/"},{"id":"362251","file":"photos/moving/362251.jpg","role":"item","topic":"piano","w":4509,"h":2423,"tags":"piano, keyboard, music, organ, musical instrument, piano keys, piano keyboard, white keys, black keys, close up, piano, piano, piano, piano, piano, music","by":"cocoparisienne","page":"https://pixabay.com/photos/piano-keyboard-music-organ-362251/"},{"id":"730681","file":"photos/moving/730681.jpg","role":"item","topic":"office furniture","w":5669,"h":3785,"tags":"office, sitting room, executive, business, desk, workplace, furniture, corporate, table, office interiors, interior design, interior decoration, office furniture, office, office, office, office, office","by":"MagicDesk","page":"https://pixabay.com/photos/office-sitting-room-executive-730681/"},{"id":"2181994","file":"photos/moving/2181994.jpg","role":"item","topic":"office furniture","w":7360,"h":4912,"tags":"chairs, conference room, contemporary, furniture, indoors, interior design, room, sofa, table, windows, meeting room, interior decoration, conference room, conference room, furniture, interior design, interior design, room, room, room, room, room, table, table, table, table, meeting room, meeting room, meeting room","by":"Pexels","page":"https://pixabay.com/photos/chairs-conference-room-contemporary-2181994/"},{"id":"2181951","file":"photos/moving/2181951.jpg","role":"item","topic":"office furniture","w":5431,"h":3621,"tags":"chairs, conference room, furniture, indoors, interior design, office, room, table, boardroom, interior decoration, office, office, office, office, office, table","by":"Pexels","page":"https://pixabay.com/photos/chairs-conference-room-furniture-2181951/"},{"id":"1477041","file":"photos/moving/1477041.jpg","role":"item","topic":"family new home","w":1920,"h":1080,"tags":"house, pool, interior design, architecture, 3d, design, style, minimalist, interior, modular, housing, prefabricated, modular home, house, house, house, house, house","by":"Giovanni_cg","page":"https://pixabay.com/photos/house-pool-interior-design-1477041/"},{"id":"1867187","file":"photos/moving/1867187.jpg","role":"item","topic":"family new home","w":3352,"h":2286,"tags":"house, garage, driveway, architecture, building, property, home, residential, suburb, real estate, exterior, facade, house exterior, home exterior, street, neighborhood street, residential area, house, house, house, house, house, home, home, real estate","by":"Pexels","page":"https://pixabay.com/photos/house-garage-driveway-architecture-1867187/"},{"id":"6688945","file":"photos/moving/6688945.jpg","role":"item","topic":"family new home","w":6000,"h":4000,"tags":"real estate, homeownership, homebuying, home, house, mortgage, investment, property, home insurance, home loan, apartment, housing, concept, real estate, real estate, real estate, real estate, real estate, mortgage, property","by":"OleksandrPidvalnyi","page":"https://pixabay.com/photos/real-estate-homeownership-homebuying-6688945/"}]},"lodge":{"name":"Lodges, cabins and outdoor tourism","photos":[{"id":"2594975","file":"photos/lodge/2594975.jpg","role":"hero","topic":"lake cabin forest","w":5173,"h":3449,"tags":"barn, cabin, fire, bonfire, people, bonding, vacation, friends, camping, woods, forest, beach, nature, dark","by":"StockSnap","page":"https://pixabay.com/photos/barn-cabin-fire-bonfire-people-2594975/"},{"id":"2021154","file":"photos/lodge/2021154.jpg","role":"hero","topic":"autumn lake dock","w":2200,"h":1240,"tags":"autumn, fall, cottage, house, hut, cabin, lake, water, reflections, landscape, nature, outdoors, forest, trees, woods, rural, brown nature, brown water, brown forest, brown house, brown landscape, brown tree, brown lake, brown natural, autumn, autumn, autumn, autumn, autumn, fall, fall, fall, fall, house, cabin","by":"12019","page":"https://pixabay.com/photos/autumn-fall-cottage-house-hut-2021154/"},{"id":"2297212","file":"photos/lodge/2297212.jpg","role":"hero","topic":"dock night starry","w":5306,"h":3770,"tags":"deck, lake, reflection, british columbia, canada, dock, dream, dusk, landscape, night sky, moon, mountain, nature, night, purple, shadow, sky, stars, twinkle, evening, outdoors, scene, scenery, scenic, British Columbia, Canada, Whistler","by":"jameswheeler","page":"https://pixabay.com/photos/deck-lake-reflection-2297212/"},{"id":"8305673","file":"photos/lodge/8305673.jpg","role":"hero","topic":"forest lake aerial","w":5472,"h":3648,"tags":"lake, mountains, forest, landscape, island, nature, tropical, beautiful, drones, aerial view, landscape, landscape, landscape, landscape, island, nature, nature, nature, nature, nature, tropical, tropical, tropical, Vietnam, Ba Be, Thai Nguyen","by":"HoangToney","page":"https://pixabay.com/photos/lake-mountains-forest-landscape-8305673/"},{"id":"1886620","file":"photos/lodge/1886620.jpg","role":"item","topic":"log cabin","w":2201,"h":1467,"tags":"log cabin, cottage, house, home, finland, landscape, nature, outdoors, country, rural, forest, trees, woods, cottage, house, house, house, house, home, home, home, home, home, finland, forest, forest","by":"12019","page":"https://pixabay.com/photos/log-cabin-cottage-house-home-1886620/"},{"id":"3746335","file":"photos/lodge/3746335.jpg","role":"item","topic":"lake cabin forest","w":3995,"h":2686,"tags":"lago federa, lake, italy, dolomites, landscape, alpine, nature, mountains, lake, lake, lake, lake, lake, italy","by":"kordi_vahle","page":"https://pixabay.com/photos/lago-federa-lake-italy-dolomites-3746335/"},{"id":"407252","file":"photos/lodge/407252.jpg","role":"item","topic":"dock lake morning","w":5184,"h":3456,"tags":"pier, fog, lake, dock, wooden pier, jetty, sea, ocean, foggy, mist, peaceful, idyllic, scenic, nature, fog, lake, sea, sea, ocean, peaceful, nature, nature, nature, nature, nature","by":"SplitShire","page":"https://pixabay.com/photos/pier-fog-lake-dock-wooden-pier-407252/"},{"id":"1594361","file":"photos/lodge/1594361.jpg","role":"item","topic":"log cabin","w":2200,"h":1114,"tags":"log cabin, house, home, rural, rustic, architecture, cottage, landscape, outdoors, nature, timber, winter, snow, california, hdr, panorama, forest, trees, woods, brown home, brown forest, brown house, brown landscape, brown tree, brown snow, log cabin, log cabin, log cabin, log cabin, log cabin, cottage, cottage, cottage, cottage","by":"12019","page":"https://pixabay.com/photos/log-cabin-house-home-rural-rustic-1594361/"},{"id":"202035","file":"photos/lodge/202035.jpg","role":"item","topic":"log cabin","w":5184,"h":3456,"tags":"hut, cabin, settlers, settlers cabin, mud, wattle, logs, rural, countryside, rustic, home, house, brown home, brown house, hut, hut, hut, hut, hut, cabin, cabin, cabin","by":"JamesDeMers","page":"https://pixabay.com/photos/hut-cabin-settlers-settlers-cabin-202035/"},{"id":"4030556","file":"photos/lodge/4030556.jpg","role":"item","topic":"cabin interior cozy","w":4000,"h":2666,"tags":"log cabin, inside, indoors, interior, furniture, rustic, mood, atmosphere, hdr, forest, woods, tourism, wood, timber, vacation, holiday, wyoming, nature, america, lighting, brown forest, brown wood, brown interior","by":"1778011","page":"https://pixabay.com/photos/log-cabin-inside-indoors-interior-4030556/"},{"id":"1961070","file":"photos/lodge/1961070.jpg","role":"item","topic":"cabin interior cozy","w":5839,"h":3895,"tags":"interior, living room, furniture, room, design, decor, luxury, luxury home interior, residential, comfortable, home, interior design, interior decoration, home furniture, interior, living room, living room, living room, living room, living room, furniture, room, room, home, home, home, home, interior design","by":"bedrck","page":"https://pixabay.com/photos/interior-living-room-furniture-room-1961070/"},{"id":"1741208","file":"photos/lodge/1741208.jpg","role":"item","topic":"cabin interior cozy","w":2592,"h":1944,"tags":"fireplace, living room, fire, firewood, fireplace, fireplace, fireplace, fireplace, fireplace","by":"joseclaudioguima","page":"https://pixabay.com/photos/fireplace-living-room-fire-firewood-1741208/"},{"id":"2560300","file":"photos/lodge/2560300.jpg","role":"item","topic":"cabin interior cozy","w":2400,"h":1600,"tags":"architecture, building, infrastructure, indoor, interior, bed, room, window, pillow, sunlight, brown building, brown window, brown room, brown bed, brown interior, bed, bed, bed, bed, bed, room, room, window, window, window","by":"StockSnap","page":"https://pixabay.com/photos/architecture-building-infrastructure-2560300/"},{"id":"2565573","file":"photos/lodge/2565573.jpg","role":"item","topic":"fishing boat lake","w":2651,"h":1491,"tags":"sea, fishing, tranquil, calm, nature, ocean, fisherman, boat","by":"jplenio","page":"https://pixabay.com/photos/sea-fishing-tranquil-calm-ocean-2565573/"},{"id":"123784","file":"photos/lodge/123784.jpg","role":"item","topic":"campfire night","w":2944,"h":1991,"tags":"fire, bonfire, night, evening, burning, warmth, heat, outdoor fire, nature, fire, fire, fire, fire, fire","by":"12019","page":"https://pixabay.com/photos/fire-bonfire-night-evening-burning-123784/"},{"id":"1867275","file":"photos/lodge/1867275.jpg","role":"item","topic":"campfire night","w":5760,"h":3840,"tags":"bonfire, camping, people, fire, campfire, heat, flames, embers, firewood, group, outdoors, recreational activity, nature, friendship day, friends, campfire, campfire, friends, friends, friends, friends, friends","by":"Pexels","page":"https://pixabay.com/photos/bonfire-camping-people-fire-1867275/"},{"id":"4450611","file":"photos/lodge/4450611.jpg","role":"item","topic":"forest lake aerial","w":4000,"h":2791,"tags":"forest, road, trees, nature, car, lake, water, car wallpapers, wilderness, China, Huzhou, Zhejiang","by":"zhangliams","page":"https://pixabay.com/photos/forest-road-trees-car-lake-water-4450611/"},{"id":"4335571","file":"photos/lodge/4335571.jpg","role":"item","topic":"forest lake aerial","w":5464,"h":3640,"tags":"lake, trees, forest, waldsee, water, nature, black forest, aerial view, glaswaldsee, bad rippoldsau, landscape, lake, forest, forest, forest, forest, forest, black forest, aerial view, aerial view","by":"OrcaTec","page":"https://pixabay.com/photos/lake-trees-forest-waldsee-water-4335571/"},{"id":"7690893","file":"photos/lodge/7690893.jpg","role":"item","topic":"starry sky lake","w":3936,"h":2624,"tags":"mountain, sea, forest, night, space, sky, night sky, stars, nature","by":"yt_ggfischlul","page":"https://pixabay.com/photos/mountain-sea-forest-night-space-7690893/"},{"id":"2634729","file":"photos/lodge/2634729.jpg","role":"item","topic":"deer forest","w":5590,"h":3731,"tags":"roe deer, deer, antlers, forest animal, wildlife, wilderness, animal, mammal, animal world, wildlife photography, fauna, forest, fallow deer, hirsch, nature, deer, deer, deer, deer, deer, animal","by":"hashan","page":"https://pixabay.com/photos/roe-deer-deer-antlers-forest-animal-2634729/"},{"id":"1367217","file":"photos/lodge/1367217.jpg","role":"item","topic":"deer forest","w":3000,"h":2000,"tags":"deer, mammal, young, animal, wild, forest, nature, animal world, forest animal, wildlife, wildlife photography, deer, deer, deer, deer, deer, forest","by":"WildPixar","page":"https://pixabay.com/photos/deer-mammal-young-animal-wild-1367217/"}]},"film":{"name":"Film, video and media production","photos":[{"id":"5586225","file":"photos/film/5586225.jpg","role":"hero","topic":"filmmaker northern lights","w":3748,"h":2500,"tags":"iceland, aurora borealis, silhouettes, photographer, northern lights, photography, camera, tripod, sky, night skies, stars, starry sky, starry night, stargazing, space, night, borealis, landscape, night sky, nature, natural phenomenon, astronomy","by":"kamilgrygo","page":"https://pixabay.com/photos/iceland-aurora-borealis-silhouettes-5586225/"},{"id":"7963026","file":"photos/film/7963026.jpg","role":"hero","topic":"filmmaker landscape tree","w":7952,"h":5304,"tags":"tree, photographer, lens, nature, female, lookout, landscape","by":"RonaldPlett","page":"https://pixabay.com/photos/tree-photographer-lens-female-7963026/"},{"id":"1777352","file":"photos/film/1777352.jpg","role":"hero","topic":"film crew silhouettes","w":5616,"h":3744,"tags":"men, nature, silhouettes, camera, photographer, sky, sunset, outdoors, vacation, photography, orange sky, people, taking pictures, tourists, travellers","by":"sbtlneet","page":"https://pixabay.com/photos/men-silhouettes-camera-photographer-1777352/"},{"id":"2341279","file":"photos/film/2341279.jpg","role":"hero","topic":"cinema camera","w":3696,"h":2345,"tags":"camera, cinema, filmmaking, video, production, cinema, cinema, filmmaking, video, video, video, video, video, production","by":"TerryPapoulias","page":"https://pixabay.com/photos/camera-cinema-filmmaking-video-2341279/"},{"id":"1130731","file":"photos/film/1130731.jpg","role":"item","topic":"vintage camera","w":4608,"h":3456,"tags":"camera, photographs, souvenir, photography, photos, map, trip, vacation, travel, journey, nostalgia, adventure, old, retro, antique, vintage, classic, camera, camera, photography, photography, travel, travel, travel, travel, travel","by":"DariuszSankowski","page":"https://pixabay.com/photos/camera-photographs-souvenir-1130731/"},{"id":"219958","file":"photos/film/219958.jpg","role":"item","topic":"vintage camera","w":1920,"h":1271,"tags":"camera, film, vintage, film camera, old, old camera, classic, retro, photography, pictures, lens, negatives, photo manipulation, camera, camera, camera, camera, camera, film, film, film, film, vintage, photography, photography","by":"PublicDomainPictures","page":"https://pixabay.com/photos/camera-film-vintage-film-camera-219958/"},{"id":"514992","file":"photos/film/514992.jpg","role":"item","topic":"vintage camera","w":4928,"h":3264,"tags":"camera, luggage, polaroid photos, photos, photography, images, old photos, nostalgia, souvenir, memento, camera, camera, camera, camera, photography, photography, photography, photography, photography","by":"congerdesign","page":"https://pixabay.com/photos/camera-luggage-polaroid-photos-514992/"},{"id":"2140602","file":"photos/film/2140602.jpg","role":"item","topic":"clapperboard","w":2000,"h":2000,"tags":"clapper, hollywood, cinema, board, production, clapperboard, video, director, clapboard, clap, cinematography, studio, scene, equipment, blackboard, cameraman, media, producer, film, movie, entertainment, camera, hollywood, hollywood, cinema, clapperboard, clapperboard, video, video, video, video, director, director, clapboard, film, film, film, film, movie, movie, movie, movie, movie","by":"Mediamodifier","page":"https://pixabay.com/photos/clapper-hollywood-cinema-board-2140602/"},{"id":"943569","file":"photos/film/943569.jpg","role":"item","topic":"video camera set","w":4566,"h":2568,"tags":"video, cinematography, film, movie, cinema, camera, entertainment, movie camera, film camera, equipment, film reel, filmstrip, movie reel, board, clapper, video production, media, industry, video camera, picture, studio, reel, motion, symbol, director, icon, production, hollywood, black, clapboard, retro, white, design, clap, television, canon, tripod, c100, brown video, brown camera, brown videos, brown movie, brown design, brown film, brown media, brown retro, brown board, brown industry, video, video, video, video, video, film, film, movie, video production, video production, video camera, director","by":"350543","page":"https://pixabay.com/photos/video-cinematography-film-movie-943569/"},{"id":"2838932","file":"photos/film/2838932.jpg","role":"item","topic":"video editing desk","w":4771,"h":3648,"tags":"filmmakers, youtuber, script, screenwriter, writing, storyboard, story boarding, film producer, from above, in the workplace, laptop, clapperboard, camera, coffee, notepad, writes, listed, sketch, mockup, home office, computer, office, business, work, designer, notebook, creative, movie, short film, man, to paint, sketch pad, illustrator, workplace, multimedia, artist, design, homework, on the way, wooden table, photographer, dslr, shirt, blue shirt, young man, on the way to work, web designer, business man, casual, bright, clean, successful, designers, young, canon, leisure time, programmer, computer scientist, cutter, concept, ideas, productive, macbook pro, screen, youtuber, youtuber, youtuber, youtuber, youtuber, script, script, script, script, screenwriter, storyboard, storyboard, movie, homework, homework, programmer","by":"lukasbieri","page":"https://pixabay.com/photos/filmmakers-youtuber-script-2838932/"},{"id":"2545676","file":"photos/film/2545676.jpg","role":"item","topic":"clapperboard on set","w":5398,"h":3648,"tags":"movie, director, clap, film, cinema, camera, entertainment, motion picture, cinematography, hollywood, clapper, filmstrip, media, movie, movie, movie, movie, movie, director, director, film, film, cinema, cinema, cinema, cinema, hollywood, hollywood","by":"stokpic","page":"https://pixabay.com/photos/movie-director-clap-film-cinema-2545676/"},{"id":"1019607","file":"photos/film/1019607.jpg","role":"item","topic":"clapperboard","w":4752,"h":2673,"tags":"clapper board, clapper, movie, film, board, cinema, director, video, clapperboard, entertainment, cinematography, motion, production, slate, camera, clapboard, white, clapper-board, clap, producer, scene, industry, hinge, take, roll, video production, studio, picture, clapper board, clapper, movie, movie, movie, movie, film, film, film, cinema, cinema, cinema, director, director, video, video, video, video, video, clapperboard, clapboard, video production, video production","by":"Joshua_Willson","page":"https://pixabay.com/photos/clapper-board-clapper-movie-film-1019607/"},{"id":"2974645","file":"photos/film/2974645.jpg","role":"item","topic":"festival tickets","w":5830,"h":3887,"tags":"ticket, coupon, admission, carnival, circus, concert, entertainment, event, fare, movie, roll, show, theater, cinema, closeup, ticket, ticket, event, movie, movie, movie, movie, movie, cinema, cinema, cinema","by":"igorovsyannykov","page":"https://pixabay.com/photos/ticket-coupon-admission-carnival-2974645/"},{"id":"4609877","file":"photos/film/4609877.jpg","role":"item","topic":"movie theater","w":4035,"h":2640,"tags":"movie theater, curtain, theatre, laptop wallpaper, hd wallpaper, movie, background, strip, 4k wallpaper 1920x1080, 4k wallpaper, mac wallpaper, stage, wallpaper hd, cool backgrounds, free wallpaper, red, full hd wallpaper, texture, desktop backgrounds, audience, abstract, wallpaper 4k, film screening, free background, beautiful wallpaper, windows wallpaper, lighting, advertising","by":"onkelglocke","page":"https://pixabay.com/photos/movie-theater-curtain-theatre-movie-4609877/"},{"id":"3244872","file":"photos/film/3244872.jpg","role":"item","topic":"vintage camera","w":3723,"h":2537,"tags":"camera, photography, portrait, film, negative, vintage, old, contrast, taking a picture, photo, photographer, rolleicord, tlr, focus, lense, shutter, aperture, hands, black camera, black portrait, black film, black photography, black vintage, black old, black focus, camera, camera, camera, camera, camera, film, film, photographer","by":"ClickerHappy","page":"https://pixabay.com/photos/camera-photography-portrait-film-3244872/"},{"id":"7698942","file":"photos/film/7698942.jpg","role":"item","topic":"film reel strip","w":3750,"h":2500,"tags":"retro film, 35mm film, perforated, negative on pink background, with shadow, photo film, vintage film, film photography, analog film, vintage photography, retro photo","by":"Kitos_LAB","page":"https://pixabay.com/photos/retro-film-35mm-film-perforated-7698942/"},{"id":"5124174","file":"photos/film/5124174.jpg","role":"item","topic":"cinematic portrait","w":5616,"h":3744,"tags":"green, face, light, portrait, woman, person, people, model, skin, female, skincare, dark, shadow, shadows, attractive, young, beauty, black, darkness, mood, black light, black beauty, black model, black portrait, black dark, black lights, skincare, dark, dark, dark, shadow, black, black, black, black, black, darkness","by":"Nika_Akin","page":"https://pixabay.com/photos/green-face-light-portrait-woman-5124174/"},{"id":"5864279","file":"photos/film/5864279.jpg","role":"item","topic":"cinematic shadow","w":4448,"h":2952,"tags":"woman, fashion, model, girl, women, poses, shadow, lady, hat, dress, classic, retro, vintage, spotlight, studio, light, what creates, elegant, door light, portrait, art, contrast, twilight, mysterious stranger, incognita, fashion, fashion, fashion, fashion, fashion, women, women, women, shadow, shadow","by":"Sunriseforever","page":"https://pixabay.com/photos/woman-fashion-model-girl-women-5864279/"},{"id":"1850469","file":"photos/film/1850469.jpg","role":"item","topic":"studio lights","w":4459,"h":2508,"tags":"photography, studio, photo shoot, lighting, photography lighting, lighting equipment, photography equipment, flash, indoors, lights, mirror, room, spotlights, technology, workplace, photography, photography, studio, studio, studio, studio, studio","by":"Pexels","page":"https://pixabay.com/photos/photography-studio-photo-shoot-1850469/"},{"id":"1284085","file":"photos/film/1284085.jpg","role":"item","topic":"video editing","w":6016,"h":4000,"tags":"desk, laptop, office, notebook, mac, macbook, table, technology, computer, mockup, design, screen, notepad, home office, freelance, work from home, desk, office, office, office, office, office, computer, computer, home office, home office","by":"Pexels","page":"https://pixabay.com/photos/desk-laptop-office-notebook-mac-1284085/"},{"id":"767781","file":"photos/film/767781.jpg","role":"item","topic":"video editing","w":5472,"h":3648,"tags":"computer, macbook, tablet, editing, picture, lightroom, notebook, laptop, computer screen, computer desk, workspace, computer, computer, computer, computer, computer, editing, editing, editing, editing, laptop, laptop, laptop, laptop, computer screen","by":"Lalmch","page":"https://pixabay.com/photos/computer-macbook-tablet-editing-767781/"},{"id":"1132528","file":"photos/film/1132528.jpg","role":"item","topic":"microphone sound","w":4928,"h":3264,"tags":"mic, microphone, sound check, sing, perform, studio, music, sound, audio, speech, voice, entertainment, equipment, media, electronic, public, microphone, microphone, microphone, microphone, sing, music, music, music, music, music, speech, speech, speech, media","by":"ClickerHappy","page":"https://pixabay.com/photos/mic-microphone-sound-check-sing-1132528/"},{"id":"102681","file":"photos/film/102681.jpg","role":"item","topic":"film reel strip","w":4272,"h":2848,"tags":"film, photography, negatives, film reel, film roll, antique, vintage, aged, obsolete, nostalgia, black film, classic, retro, black and white film, icon, film icon, isolated, film, film, film, film, film","by":"15299","page":"https://pixabay.com/photos/film-photography-negatives-102681/"},{"id":"3057394","file":"photos/film/3057394.jpg","role":"item","topic":"film reel","w":3840,"h":2160,"tags":"movie, film roll, filmstrip, analog, movie theater, vintage, 3d blender, movie, movie, movie, movie, movie","by":"MasterTux","page":"https://pixabay.com/photos/movie-film-roll-filmstrip-analog-3057394/"},{"id":"1850277","file":"photos/film/1850277.jpg","role":"item","topic":"film reel strip","w":4624,"h":3083,"tags":"filmstrip, negatives, photography, photos, pictures, retro, roll of film, film, vintage, oldtimer, old, nostalgia, nostalgic, film, film, film, film, film","by":"Pexels","page":"https://pixabay.com/photos/filmstrip-negatives-photography-1850277/"},{"id":"1839998","file":"photos/film/1839998.jpg","role":"item","topic":"photographer landscape","w":6000,"h":4000,"tags":"woman, camera, photographer, road, photography, taking photos, jacket, cold, winter clothing, winter clothes, female photographer, professional, profession, dslr, slr, nature photography, camera, photographer, photographer, photographer, photographer, photographer, professional","by":"Pexels","page":"https://pixabay.com/photos/woman-camera-photographer-road-1839998/"},{"id":"3728350","file":"photos/film/3728350.jpg","role":"item","topic":"festival red carpet","w":5781,"h":3854,"tags":"staircase, foyer, residence, stairs, red carpet, luxury, architecture, indoors, staircase, stairs, red carpet, red carpet, red carpet, luxury, luxury, luxury, luxury, luxury","by":"Tama66","page":"https://pixabay.com/photos/staircase-foyer-residence-stairs-3728350/"},{"id":"407252","file":"photos/film/407252.jpg","role":"hero","topic":"canoe lake mist","w":5184,"h":3456,"tags":"pier, fog, lake, dock, wooden pier, jetty, sea, ocean, foggy, mist, peaceful, idyllic, scenic, nature, fog, lake, sea, sea, ocean, peaceful, nature, nature, nature, nature, nature","by":"SplitShire","page":"https://pixabay.com/photos/pier-fog-lake-dock-wooden-pier-407252/"},{"id":"7677986","file":"photos/film/7677986.jpg","role":"hero","topic":"aurora borealis forest","w":4236,"h":2818,"tags":"northern lights, aurora, night, nature, landscape, mountains, winter, snow, shining","by":"suju-foto","page":"https://pixabay.com/photos/northern-lights-aurora-night-7677986/"},{"id":"1839582","file":"photos/film/1839582.jpg","role":"hero","topic":"aurora borealis forest","w":7360,"h":4912,"tags":"aurora borealis, cabin, snow, night sky, cold, lights, night, nature, northern lights, sky, winter, blue sky, blue night, natural phenomenon, cottage, hut","by":"Pexels","page":"https://pixabay.com/photos/aurora-borealis-cabin-snow-cold-1839582/"},{"id":"744351","file":"photos/film/744351.jpg","role":"hero","topic":"aurora borealis forest","w":3008,"h":2000,"tags":"aurora borealis, northern lights, green, night, phenomenon, night sky, natural phenomenon, silhouettes, glowing, aurora borealis, aurora borealis, aurora borealis, aurora borealis, aurora borealis, green, green, night, night sky, night sky","by":"Cheerfully_lost","page":"https://pixabay.com/photos/aurora-borealis-northern-lights-744351/"},{"id":"123784","file":"photos/film/123784.jpg","role":"item","topic":"campfire night","w":2944,"h":1991,"tags":"fire, bonfire, night, evening, burning, warmth, heat, outdoor fire, nature, fire, fire, fire, fire, fire","by":"12019","page":"https://pixabay.com/photos/fire-bonfire-night-evening-burning-123784/"},{"id":"1867275","file":"photos/film/1867275.jpg","role":"item","topic":"campfire night","w":5760,"h":3840,"tags":"bonfire, camping, people, fire, campfire, heat, flames, embers, firewood, group, outdoors, recreational activity, nature, friendship day, friends, campfire, campfire, friends, friends, friends, friends, friends","by":"Pexels","page":"https://pixabay.com/photos/bonfire-camping-people-fire-1867275/"},{"id":"3091991","file":"photos/film/3091991.jpg","role":"item","topic":"frozen lake winter","w":6000,"h":3375,"tags":"nature, tree, fog, waters, snow, lake, water, reflection, panorama, haze, cold, frosty, landscape, winter, wintry, snow, winter, winter, winter, winter, winter","by":"jplenio","page":"https://pixabay.com/photos/nature-tree-fog-waters-snow-lake-3091991/"},{"id":"636634","file":"photos/film/636634.jpg","role":"item","topic":"frozen lake winter","w":4029,"h":2698,"tags":"christmas wallpaper, trees, snow, sunset, winter landscape, cold, white, nature","by":"AlainAudet","page":"https://pixabay.com/photos/christmas-wallpaper-trees-snow-636634/"},{"id":"7000429","file":"photos/film/7000429.jpg","role":"item","topic":"frozen lake winter","w":6000,"h":4000,"tags":"winter, season, nature, outdoors, travel, exploration, forest, trees, snow, boardwalk, wintry, winter, winter, winter, winter, winter, snow, snow, snow","by":"shogun","page":"https://pixabay.com/photos/winter-season-nature-outdoors-7000429/"},{"id":"1373171","file":"photos/film/1373171.jpg","role":"item","topic":"silhouette lake sunset","w":5105,"h":2871,"tags":"sunset, tree, water, silhouette, tree silhouette, dusk, twiligh, mirroring, mirror image, reflection, water reflection, calm, calm waters, solitude, solitary, nature, landscape, sky, horizon, nature wallpaper, zoom background, sunset, water, nature, nature, nature, nature, nature","by":"Cleverpix","page":"https://pixabay.com/photos/sunset-tree-water-silhouette-1373171/"},{"id":"1802337","file":"photos/film/1802337.jpg","role":"item","topic":"silhouette lake sunset","w":4000,"h":2259,"tags":"lake, sunset, rocks, bank, conifers, dusk, twilight, sky, clouds, water reflection, reflection, landscape, water, scenic, nature, ripples, sunrise, sunlight, zoom background, lake, lake, sunset, sky, landscape, water, water, nature, nature, nature, nature, nature, sunrise, sunrise","by":"strikers","page":"https://pixabay.com/photos/lake-sunset-rocks-bank-conifers-1802337/"},{"id":"696098","file":"photos/film/696098.jpg","role":"item","topic":"silhouette lake sunset","w":4288,"h":2848,"tags":"lake, reeds, sunset, landscape, nature, scenery, beach, water, reedy, silhouettes, backlighting, dusk, twilight, sun, lake, lake, sunset, sunset, sunset, sunset, sunset, landscape, beach, sun, sun, sun, sun","by":"TomMarc","page":"https://pixabay.com/photos/lake-reeds-sunset-landscape-nature-696098/"},{"id":"3622519","file":"photos/film/3622519.jpg","role":"item","topic":"boreal forest fog","w":6000,"h":4000,"tags":"forest, trees, fog, conifers, windows wallpaper, laptop wallpaper, desktop backgrounds, pine, spruce, cool backgrounds, wallpaper 4k, fir forest, nature background, coniferous forest, wallpaper hd, nature, 4k wallpaper 1920x1080, mac wallpaper, woods, evergreen, clouds, free wallpaper, free background, full hd wallpaper, mist, background, nature wallpaper, beautiful wallpaper, beautiful nature, hd wallpaper, 4k wallpaper, zoom background","by":"jplenio","page":"https://pixabay.com/photos/forest-trees-fog-conifers-pine-3622519/"},{"id":"3151869","file":"photos/film/3151869.jpg","role":"item","topic":"boreal forest fog","w":6000,"h":4000,"tags":"nature, forest, trees, light, beautiful nature, sun, fog, foggy, sunset, shadow, autumn, mood, nature wallpaper, branches, landscape, away, path, aesthetic, bare branches, leaves, fall foliage, kahl, secret, mystical, bill, dream, ray of light, orange, deciduous forest, lighting, forest path, romantic, atmospheric, fall color, nature background, walk, light tunnel, magic, hd wallpaper, cool wallpaper","by":"jplenio","page":"https://pixabay.com/photos/nature-forest-trees-light-sun-fog-3151869/"}]},"marina":{"name":"Marinas, boating and waterfront","photos":[{"id":"1850849","file":"photos/marina/1850849.jpg","role":"hero","topic":"marina boats aerial","w":3992,"h":2992,"tags":"anchored, yachts, dock, marina, luxury, yachting, wharf, boatyard, travel, vessels, water, nature, boats, aerial view, bird's eye view, drone photography, aerial photography","by":"Pexels","page":"https://pixabay.com/photos/anchored-yachts-dock-marina-luxury-1850849/"},{"id":"1802340","file":"photos/marina/1802340.jpg","role":"hero","topic":"marina sunset","w":4000,"h":2461,"tags":"boats, port, sunrise, sunset, reflection, sea, bay, water, ocean, yachts, sailboats, harbor, dawn, dusk, scenic, nature, port, sunrise, sunrise, sunset, sunset, sunset, sunset, sunset, sea, sea, sea, sea, ocean, ocean, ocean, harbor, nature, nature","by":"strikers","page":"https://pixabay.com/photos/boats-port-sunrise-sunset-1802340/"},{"id":"6362348","file":"photos/marina/6362348.jpg","role":"hero","topic":"marina sailboats","w":6000,"h":4000,"tags":"marina, sailboats, harbor, sunset, yachts, sea, nature, sailing, nautical, boats, dock, reflections, peaceful, coastal, ocean view, travel, summer, vacation, maritime, sky, tranquil, water, evening light, mooring, sailboat mast, leisure","by":"Van3ssa_","page":"https://pixabay.com/photos/marina-sailboats-harbor-sunset-6362348/"},{"id":"1634197","file":"photos/marina/1634197.jpg","role":"hero","topic":"dock sunset","w":3000,"h":1999,"tags":"sunrise, jetty, lake, pier, sky, horizon, sunset, dusk, dawn, twilight, boardwalk, wooden planks, nature, water, calm waters, water reflection, reflection","by":"Pok_Rie","page":"https://pixabay.com/photos/sunrise-jetty-lake-pier-sky-1634197/"},{"id":"4567635","file":"photos/marina/4567635.jpg","role":"item","topic":"harbour waterfront town","w":3808,"h":1696,"tags":"daepo port, nature, east sea, mt seolark, sokcho, gangwon do, harbor, sea, Sokcho-si, Gangwon-do, South Korea","by":"iankim71","page":"https://pixabay.com/photos/daepo-port-east-sea-mt-seolark-4567635/"},{"id":"2758962","file":"photos/marina/2758962.jpg","role":"item","topic":"sailboat sunset","w":5842,"h":3895,"tags":"boats, yacht, nature, sea, ship, yachting, boating, sailboat, vessels, sailing vessels, sunset, dusk, seascape, horizon, water, marina, travel, ocean, turkey, tuzla bay","by":"Anestiev","page":"https://pixabay.com/photos/boats-yacht-sea-ship-yachting-2758962/"},{"id":"4573991","file":"photos/marina/4573991.jpg","role":"item","topic":"rowboat reeds","w":4019,"h":2679,"tags":"morning, boat, pier, water, channel, idyll, fog, vessel, nature, outdoors","by":"13434535","page":"https://pixabay.com/photos/morning-boat-pier-water-channel-4573991/"},{"id":"3062045","file":"photos/marina/3062045.jpg","role":"item","topic":"rowboat sunset","w":7904,"h":5272,"tags":"boat, beautiful wallpaper, 4k wallpaper, nature, ocean, free wallpaper, hd wallpaper, beautiful nature, free background, wallpaper 4k, wallpaper hd, nature wallpaper, tranquil, laptop wallpaper, nature background, windows wallpaper, coast, mac wallpaper, shore, 4k wallpaper 1920x1080, full hd wallpaper, cool backgrounds, desktop backgrounds, sunset, calm, background, wallpaper","by":"Quangpraha","page":"https://pixabay.com/photos/boat-ocean-tranquil-coast-shore-3062045/"},{"id":"1593613","file":"photos/marina/1593613.jpg","role":"item","topic":"sailboat lake","w":4358,"h":2053,"tags":"sailing boat, sail, lake constance, boat, sea, nature, leisure, sport, sailing school, wind, clouds, sky, blue sky, blue waters, regatta, adventure, competition, water sports","by":"garten-gg","page":"https://pixabay.com/photos/sailing-boat-sail-lake-constance-1593613/"},{"id":"952292","file":"photos/marina/952292.jpg","role":"item","topic":"sailboat schooner","w":5630,"h":3854,"tags":"ship, boat, nature, lake, sailing boat, italy, sea, boating, vessel, sailing ship, travel, water, transport, nautical, sail boat, sail, sailing","by":"Michelle-Maria","page":"https://pixabay.com/photos/ship-boat-lake-sailing-boat-italy-952292/"},{"id":"3729599","file":"photos/marina/3729599.jpg","role":"item","topic":"sailboat regatta","w":5368,"h":3296,"tags":"sailboats, regatta, lake constance, sailing, sport, ships, sailing, sailing, sailing, sailing, sailing, sport, ships, ships","by":"2780243","page":"https://pixabay.com/photos/sailboats-regatta-lake-constance-3729599/"},{"id":"4847020","file":"photos/marina/4847020.jpg","role":"item","topic":"lake shore summer","w":5472,"h":3524,"tags":"landscape, nature, sky, trees, summer, clouds, the water, lake, light, scenic, environment, weather, climate, mystical, storm, mood, forest, birch trees, sheets, holiday, quebec, canada, climate, climate, climate, climate, quebec, canada, canada, canada, canada, canada","by":"AlainAudet","page":"https://pixabay.com/photos/landscape-nature-sky-trees-summer-4847020/"},{"id":"1914310","file":"photos/marina/1914310.jpg","role":"item","topic":"fuel pump","w":4608,"h":3072,"tags":"gas pump, petrol stations, petrol, gas, fuel, refuel, historically, shell, fuel pump, old, vintage, gas pump, petrol, petrol, petrol, gas, gas, gas, gas, fuel, fuel, fuel, fuel, fuel, vintage, vintage, vintage, vintage","by":"652234","page":"https://pixabay.com/photos/gas-pump-petrol-stations-petrol-gas-1914310/"},{"id":"3973197","file":"photos/marina/3973197.jpg","role":"item","topic":"lighthouse","w":5058,"h":3376,"tags":"lighthouse, ice, winter, snow, michigan, cold, landscape, nautical, water, coast, sky, nature, maritime, beacon, lake, frozen, pier","by":"jasongillman","page":"https://pixabay.com/photos/lighthouse-ice-winter-snow-3973197/"},{"id":"4744502","file":"photos/marina/4744502.jpg","role":"item","topic":"lighthouse","w":3038,"h":2023,"tags":"lighthouse, shore, great lakes, lake michigan, charlevoix, landscape, beacon, blue landscape, blue lake, lighthouse, lighthouse, lighthouse, great lakes, great lakes, great lakes, great lakes, lake michigan, lake michigan, lake michigan, lake michigan, lake michigan","by":"WOKANDAPIX","page":"https://pixabay.com/photos/lighthouse-shore-great-lakes-4744502/"},{"id":"5794639","file":"photos/marina/5794639.jpg","role":"item","topic":"lighthouse","w":5097,"h":3400,"tags":"lighthouse, statue, port, lindau, sculpture, lion statue, harbor, art installation, beacon, structure, building, watchtower, tower, lake constance, peaceful, idyllic, scenic, bavaria, germany, lighthouse, lighthouse, lighthouse, lighthouse, lighthouse, lindau","by":"reginasphotos","page":"https://pixabay.com/photos/lighthouse-statue-port-lindau-5794639/"},{"id":"950355","file":"photos/marina/950355.jpg","role":"item","topic":"sail rope","w":5472,"h":3648,"tags":"rope, boat, cool backgrounds, wallpaper hd, sailing, 4k wallpaper 1920x1080, sailboat, mac wallpaper, 4k wallpaper, detail, nautical, full hd wallpaper, marine, nature background, desktop backgrounds, ship, sea, free wallpaper, hd wallpaper, wallpaper 4k, vessel, yacht, sail boat, beautiful wallpaper, equipment, windows wallpaper, beautiful nature, laptop wallpaper, nature wallpaper, free background, deck, nature, sailing ship, wallpaper","by":"milivigerova","page":"https://pixabay.com/photos/rope-boat-sailing-sailboat-detail-950355/"},{"id":"1305658","file":"photos/marina/1305658.jpg","role":"item","topic":"rope cleat dock","w":6000,"h":4000,"tags":"rope, line, dock, maryland, coast, chesapeake bay, chesapeake, marine, outdoor, boat, harbor, nautical, sailing, maritime, boating, pier, wharf, blue boat, rope, rope, rope, rope, rope, dock, dock, maryland, chesapeake bay, nautical, sailing, sailing, sailing","by":"mcfisher","page":"https://pixabay.com/photos/rope-line-dock-maryland-coast-1305658/"},{"id":"1532985","file":"photos/marina/1532985.jpg","role":"item","topic":"rope cleat dock","w":3888,"h":2592,"tags":"knot, boat, rope, marine, sail, vessel, travel, equipment, strong, detail, minimal, gray travel, gray boat, knot, knot, knot, knot, knot, minimal, minimal, minimal, minimal","by":"palmera","page":"https://pixabay.com/photos/knot-boat-rope-marine-sail-vessel-1532985/"},{"id":"1646964","file":"photos/marina/1646964.jpg","role":"item","topic":"rope coil dock","w":4031,"h":3225,"tags":"boat tie up, mooring, rope, cleat, tied, moored, boat, nautical, dock, vessel, marine, knot, white, maritime, yacht, line, marina, cord, deck, transportation, boating, equipment, anchor, secure, pier, brown boat, brown security, rope, cleat, yacht, yacht, yacht, yacht, yacht, deck, anchor, anchor","by":"paulbr75","page":"https://pixabay.com/photos/boat-tie-up-mooring-rope-cleat-1646964/"}]},"print":{"name":"Custom apparel, embroidery and printing","photos":[{"id":"1615524","file":"photos/print/1615524.jpg","role":"hero","topic":"thread spools colorful","w":4608,"h":3456,"tags":"yarn, thread, sew, thread spool, multicoloured, sewing thread, twisted, haberdashery, fashion, design, thread roll, role, needlework, schneider, craft, coil, sewing supplies, sewing accessories, sewing kits, fadenrollen, tailoring, yarn, yarn, yarn, yarn, thread, thread, thread, thread, thread, sewing thread, craft, craft, tailoring, tailoring","by":"Bru-nO","page":"https://pixabay.com/photos/yarn-thread-sew-thread-spool-1615524/"},{"id":"5063401","file":"photos/print/5063401.jpg","role":"hero","topic":"thread spools scissors","w":5811,"h":3879,"tags":"sewing kit, thread, scissors, sewing tools, sewing accessories, colorful, yarn, needlework, handicraft, closeup, thread, thread, thread, scissors, scissors, scissors, scissors, sewing tools, yarn, yarn, yarn, yarn, yarn, handicraft","by":"webentwicklerin","page":"https://pixabay.com/photos/sewing-kit-thread-scissors-5063401/"},{"id":"541625","file":"photos/print/541625.jpg","role":"hero","topic":"colour swatches print","w":4752,"h":3168,"tags":"magnifying glass, color fan, pantone, printing inks, full tone, grid, four color printing, cmyk, thread counter, precision, check, proof, pigments, selection, gradient, graphic design, communication, printing house, pantone, cmyk, graphic design, printing house, printing house, printing house, printing house, printing house","by":"stux","page":"https://pixabay.com/photos/magnifying-glass-color-fan-pantone-541625/"},{"id":"1369658","file":"photos/print/1369658.jpg","role":"hero","topic":"sewing machine embroidery","w":3652,"h":2592,"tags":"sewing machine, sewing, thimble, wire scissors, sewing machine, sewing machine, sewing machine, sewing machine, sewing machine, sewing, sewing, sewing","by":"jackmac34","page":"https://pixabay.com/photos/sewing-machine-sewing-thimble-1369658/"},{"id":"5248183","file":"photos/print/5248183.jpg","role":"item","topic":"embroidery floss","w":6000,"h":4000,"tags":"embroidery thread, colorful yarn, crochet, knitting, craft supplies, handmade, needlework, textile art, vibrant colors, yarn balls, sewing, embroidery, thread spools, hobby, diy crafts, home crafts, textile threads, fiber arts, colorful threads, yarn closeup, craft materials, wool, cotton thread, multicolor yarn, creative tools","by":"Van3ssa_","page":"https://pixabay.com/photos/embroidery-thread-colorful-yarn-5248183/"},{"id":"931889","file":"photos/print/931889.jpg","role":"item","topic":"thread spools jar","w":4543,"h":3407,"tags":"thread, sewing, colorful, sew, tailor, craft, embroidery, needlework, hobby, spool, thread, thread, thread, thread, sewing, sewing, sewing, sewing, sewing, tailor, embroidery, embroidery, embroidery, embroidery","by":"tookapic","page":"https://pixabay.com/photos/thread-sewing-colorful-sew-tailor-931889/"},{"id":"1886001","file":"photos/print/1886001.jpg","role":"item","topic":"t-shirt black","w":1920,"h":1929,"tags":"blank, tshirt, male, fashion, top, clothes, man, wear, tshirt, tshirt, tshirt, tshirt, tshirt","by":"nattyjeff","page":"https://pixabay.com/photos/blank-tshirt-male-fashion-top-1886001/"},{"id":"1278404","file":"photos/print/1278404.jpg","role":"item","topic":"t-shirt white","w":1920,"h":1920,"tags":"t-shirt, white, clothes, rags, empty, cancas, model, t-shirt, t-shirt, t-shirt, t-shirt, t-shirt","by":"VersionFrancaise","page":"https://pixabay.com/photos/t-shirt-white-clothes-rags-empty-1278404/"},{"id":"1886008","file":"photos/print/1886008.jpg","role":"item","topic":"t-shirt red","w":1920,"h":1929,"tags":"blank, tshirt, male, fashion, top, clothes, man, wear, tshirt, tshirt, tshirt, tshirt, tshirt","by":"nattyjeff","page":"https://pixabay.com/photos/blank-tshirt-male-fashion-top-1886008/"},{"id":"875617","file":"photos/print/875617.jpg","role":"item","topic":"hoodie","w":2398,"h":2998,"tags":"people, hoodie, male, person, man, young, portrait, one, lifestyle, adult, black, dark, urban, guy, fashion, hood, attractive, human, casual, model, hooded, confident, men, style, shirt, expression, black city, black fashion, black model, black portrait, black dark, black human, men, men, men, men, men","by":"Leroy_Skalstad","page":"https://pixabay.com/photos/people-hoodie-male-person-man-875617/"},{"id":"1283576","file":"photos/print/1283576.jpg","role":"item","topic":"hoodie","w":2818,"h":5009,"tags":"man, faceless, horror, anonymous, surreal, creepy, scary, hoodie, ghost, jacket, green hoodie, green jacket, disguise, halloween, horror, horror, horror, horror, horror, hoodie, ghost","by":"Pexels","page":"https://pixabay.com/photos/man-faceless-horror-anonymous-1283576/"},{"id":"2525910","file":"photos/print/2525910.jpg","role":"item","topic":"baseball cap","w":2048,"h":1687,"tags":"hat, head, red, helmet, cap, hat, cap, cap, cap, cap, cap","by":"studiopromomobile","page":"https://pixabay.com/photos/hat-head-red-helmet-cap-2525910/"},{"id":"2744912","file":"photos/print/2744912.jpg","role":"item","topic":"hockey team kid","w":4898,"h":3265,"tags":"hockey, slavia, skater, hockey player, winter, winter sports, winter sport, joy, hockey stick, captain, puck, ice, skating, sport, emotion, face, hockey, hockey, hockey, hockey, hockey","by":"LuckyLife11","page":"https://pixabay.com/photos/hockey-slavia-skater-hockey-player-2744912/"},{"id":"557219","file":"photos/print/557219.jpg","role":"item","topic":"hockey team goalie","w":5184,"h":3456,"tags":"hockey, helmet, face, sport, portrait, grid, hockey player, freckles, boy, athlete, freckled face, braces, hockey, hockey, hockey, hockey, hockey, helmet, braces","by":"Patrice_Audet","page":"https://pixabay.com/photos/hockey-helmet-face-sport-portrait-557219/"},{"id":"2180834","file":"photos/print/2180834.jpg","role":"item","topic":"hockey jersey team","w":3002,"h":2002,"tags":"hockey, sport, athlete, player, puck, stick, play, ice, rink, arena, skate, cold, skating, helmet, competitive, activity, action, hockey, hockey, hockey, hockey, hockey","by":"KeithJJ","page":"https://pixabay.com/photos/hockey-sport-athlete-player-puck-2180834/"},{"id":"933098","file":"photos/print/933098.jpg","role":"item","topic":"printer ink","w":4781,"h":3187,"tags":"printer, ink, toner, technology, print, equipment, computer, printing, cartridge, ink-jet, inkjet, machine, printout, brown computer, brown technology, brown laptop, printer, printer, printer, printer, printer, print, printing, printing, printing","by":"tookapic","page":"https://pixabay.com/photos/printer-ink-toner-technology-print-933098/"},{"id":"624440","file":"photos/print/624440.jpg","role":"item","topic":"mug","w":4926,"h":3284,"tags":"valentine's day, heart, cup, coffee, coffee cup, caffeine, hot coffee, nature, hot drink, hot beverage, heart shape, valentine, love, heart mug, snow, winter, steaming cup, romantic","by":"JillWellington","page":"https://pixabay.com/photos/valentines-day-heart-cup-coffee-624440/"},{"id":"3267505","file":"photos/print/3267505.jpg","role":"item","topic":"graphic designer sketch wall","w":5472,"h":3648,"tags":"startup, whiteboard, room, indoors, adult, office, business, technology, male, corporate, design, designer, brainstorm, startup, office, business, business, business, business, business, technology, design, designer","by":"StartupStockPhotos","page":"https://pixabay.com/photos/startup-whiteboard-room-indoors-3267505/"},{"id":"2838921","file":"photos/print/2838921.jpg","role":"item","topic":"graphic designer laptop","w":5472,"h":3252,"tags":"laptop, mockup, graphics tablet, tablet, graphic design, designer, macbook, work, workplace, home office, apple, webdesign, computer, office, monitor, business, keyboard, graphic tablet, office work, internet, independent, freelancer, notebook, creative, wooden table, blogger, laptop, laptop, laptop, laptop, graphic design, graphic design, graphic design, designer, work, work, computer, computer, computer, computer, computer, office, office, business, business, blogger","by":"lukasbieri","page":"https://pixabay.com/photos/laptop-mockup-graphics-tablet-2838921/"},{"id":"2163323","file":"photos/print/2163323.jpg","role":"item","topic":"apparel store","w":6000,"h":4000,"tags":"shopping, fashion, purchasing, pocket, bag, sale, woman, shop, shopping bag, shopping, shopping, shopping, shopping, shopping, sale, shopping bag","by":"webandi","page":"https://pixabay.com/photos/shopping-fashion-purchasing-pocket-2163323/"},{"id":"4364558","file":"photos/print/4364558.jpg","role":"item","topic":"tote bag","w":3264,"h":4928,"tags":"bag, cotton, beautiful wallpaper, cotton bag, textile, wall, white, blank, template, design resource, background, hook, tote bag, mock up, iphone wallpaper","by":"BRRT","page":"https://pixabay.com/photos/bag-cotton-cotton-bag-textile-wall-4364558/"},{"id":"2575930","file":"photos/print/2575930.jpg","role":"item","topic":"tailor mannequin","w":5719,"h":3818,"tags":"tailoring, tailor, costume, apparel, fashion, sewing, pattern, jacket, design, plot, measuring tape, textiles, mannequin, fabrics, crafts, tailoring, tailoring, tailor, tailor, tailor, tailor, tailor, sewing, sewing, sewing, mannequin","by":"nebulosagrafica","page":"https://pixabay.com/photos/tailoring-tailor-costume-apparel-2575930/"},{"id":"2566559","file":"photos/print/2566559.jpg","role":"item","topic":"tailor mannequin","w":6000,"h":4000,"tags":"mannequin, fashion, accessory, shopping, mall, sewing, boutique, mannequin, sewing, sewing, sewing, sewing, sewing, boutique, boutique","by":"StockSnap","page":"https://pixabay.com/photos/mannequin-fashion-accessory-2566559/"},{"id":"1008908","file":"photos/print/1008908.jpg","role":"item","topic":"sewing kit","w":5184,"h":3456,"tags":"scissors, old, desktop backgrounds, sewing, tailored, work, dress, high, 4k wallpaper, background, textile, windows wallpaper, beautiful wallpaper, wallpaper 4k, tool, antique, retro, stroke, vintage, linen, fine, ponk, laptop wallpaper, free background, hd wallpaper, 4k wallpaper 1920x1080, cool backgrounds, free wallpaper, full hd wallpaper, mac wallpaper, tailor, gold, life, trade, sew, wallpaper hd, thread","by":"947051","page":"https://pixabay.com/photos/scissors-old-sewing-tailored-work-1008908/"}]},"pub":{"name":"Sports bars, pubs and roadside motels","photos":[{"id":"209148","file":"photos/pub/209148.jpg","role":"hero","topic":"pub interior bar","w":3000,"h":2078,"tags":"bar, local, ireland, irish pub, pub, bottles, whisky, tap, beer, irish, draft beer, bar, bar, bar, bar, bar, ireland, pub, beer","by":"Christian_Birkholz","page":"https://pixabay.com/photos/bar-local-ireland-irish-pub-pub-209148/"},{"id":"406884","file":"photos/pub/406884.jpg","role":"hero","topic":"pub interior bar","w":5760,"h":3840,"tags":"bar, pub, restaurant, rustic, barrels, people, sitting, spain, madrid, tapas, spanish, food, traditional, typical, europe, interior, wine, beer, alcohol, snacks, eating, drinking, bottles, tiles, shelves, brown food, brown wine, brown restaurant, brown bottle, brown eating, brown interior, bar, bar, bar, bar, pub, pub, pub, pub, pub, restaurant, restaurant, restaurant, madrid, tapas, beer, beer","by":"Life-Of-Pix","page":"https://pixabay.com/photos/bar-pub-restaurant-rustic-barrels-406884/"},{"id":"2209813","file":"photos/pub/2209813.jpg","role":"hero","topic":"pub interior bar","w":2000,"h":1333,"tags":"bar, pub, cafe, establishment, stools, counter, alcohol, beer, inside, indoors, interior, bar, bar, bar, bar, bar, pub, pub, cafe","by":"12019","page":"https://pixabay.com/photos/bar-pub-cafe-establishment-stools-2209813/"},{"id":"1846137","file":"photos/pub/1846137.jpg","role":"item","topic":"patio outdoor dining","w":5118,"h":3412,"tags":"outdoor dining, restaurant, bar, waiter, al fresco, city, customers, group, patrons, people, street, tables, chairs, restaurant, restaurant, restaurant, restaurant, restaurant","by":"Pexels","page":"https://pixabay.com/photos/outdoor-dining-restaurant-bar-1846137/"},{"id":"5579069","file":"photos/pub/5579069.jpg","role":"item","topic":"patio bistro","w":5472,"h":3648,"tags":"cafe, tables and chairs, bistro, tables, chairs, restaurant, city, urban, brunch, cafe, cafe, cafe, cafe, restaurant, restaurant, restaurant, restaurant, restaurant","by":"Cparks","page":"https://pixabay.com/photos/cafe-tables-and-chairs-bistro-5579069/"},{"id":"2635035","file":"photos/pub/2635035.jpg","role":"item","topic":"burger fries","w":5816,"h":3693,"tags":"snack, hamburger, b, sandwich, fast food, french fries, cheddar, bread, bacon, tomato, restaurant, food, hamburger, hamburger, fast food, fast food, fast food, fast food, fast food, french fries","by":"Fotorech","page":"https://pixabay.com/photos/snack-hamburger-b-sandwich-2635035/"},{"id":"3442227","file":"photos/pub/3442227.jpg","role":"item","topic":"burger fries","w":6000,"h":4000,"tags":"burger, hamburger, bbq, food, fast food, yummy, meal, grilling, tasty, junk food, bun, french fries, cheese burger, bulette, cheese, fatty, food photo, calories, fries, burger, burger, burger, fast food, fast food, junk food, junk food, junk food, junk food, junk food","by":"RitaE","page":"https://pixabay.com/photos/burger-hamburger-bbq-food-3442227/"},{"id":"3962996","file":"photos/pub/3962996.jpg","role":"item","topic":"burger fries","w":4496,"h":3000,"tags":"burger, hamburger, bbq, cheese burger, bun, flesh, fast food, beef, cheese, salad, grilled, grill, tasty, calories, french fries, nourishment, fat, yummy, burger, burger, burger, burger, burger, hamburger, fast food, fast food","by":"RitaE","page":"https://pixabay.com/photos/burger-hamburger-bbq-cheese-burger-3962996/"},{"id":"2602736","file":"photos/pub/2602736.jpg","role":"item","topic":"burger fries","w":4032,"h":3024,"tags":"people, food, restaurant, dine, men, women, friends, together, eating, hamburger, fries, breakfast, lunch, dinner, friendship","by":"StockSnap","page":"https://pixabay.com/photos/people-food-restaurant-dine-men-2602736/"},{"id":"3483465","file":"photos/pub/3483465.jpg","role":"item","topic":"fish dinner","w":6000,"h":4000,"tags":"fish, sea bream, potatoes, kitchen, cook, fried, grilled, lemon, food, meal, healthy, fresh, yummy, tasty, nourishment, dish, enjoy the meal, main dish, stir-fry, main course, nature, having lunch, cooked, grill","by":"RitaE","page":"https://pixabay.com/photos/fish-sea-bream-potatoes-kitchen-3483465/"},{"id":"1684828","file":"photos/pub/1684828.jpg","role":"item","topic":"fish and chips","w":5760,"h":3840,"tags":"fish, dinner, chips, fish and chips, cooking, restaurant, gourmet, food, meal, seafood, healthy, lunch, plate, fresh, fried, tasty, diet, delicious, cooked, grilled, sea, nutrition, brown cooking, brown fish, nature, brown restaurant, brown diet, brown dinner, brown nutrition, brown fishing","by":"kariwil","page":"https://pixabay.com/photos/fish-dinner-chips-fish-and-chips-1684828/"},{"id":"3039746","file":"photos/pub/3039746.jpg","role":"item","topic":"fish and chips","w":3000,"h":2000,"tags":"fish and chip, fried, fish, chip, fries, food, plate, meal, dinner, portree, scotland, uk, vegetable, dish, restaurant, nature, delicious, tasty, cuisine, fresh, green","by":"sharonang","page":"https://pixabay.com/photos/fish-and-chip-fried-fish-chip-3039746/"},{"id":"1559548","file":"photos/pub/1559548.jpg","role":"item","topic":"chicken wings","w":4496,"h":3000,"tags":"chicken, wing, chicken wings, buffalo, food, enjoy the meal, meal, grilling, dish, feasting, bbq, tasty, spicy, chicken meat, yummy, cook, chicken, chicken wings, chicken wings, chicken wings, chicken wings, chicken wings, chicken meat, chicken meat","by":"RitaE","page":"https://pixabay.com/photos/chicken-wing-chicken-wings-buffalo-1559548/"},{"id":"667935","file":"photos/pub/667935.jpg","role":"item","topic":"chicken wings","w":3504,"h":2336,"tags":"chicken, fried, food, chicken, chicken, chicken, chicken, chicken","by":"7997sky","page":"https://pixabay.com/photos/chicken-fried-food-667935/"},{"id":"1559579","file":"photos/pub/1559579.jpg","role":"item","topic":"chicken wings","w":5472,"h":3080,"tags":"chicken, wing, chicken wings, buffalo, food, enjoy the meal, meal, grilling, dish, feasting, bbq, tasty, spicy, chicken meat, yummy, cook, chicken wings, chicken wings, chicken wings, chicken wings, chicken wings","by":"RitaE","page":"https://pixabay.com/photos/chicken-wing-chicken-wings-buffalo-1559579/"},{"id":"820011","file":"photos/pub/820011.jpg","role":"item","topic":"beer glasses","w":3456,"h":4608,"tags":"beer, pouring, glass, drink, alcohol, pour, pouring beer, bar, pub, beverage, cold, foam, lager, pint, refreshment, bottle, splash, bubbles, brew, hand, beer, beer, beer, beer, beer, alcohol","by":"Republica","page":"https://pixabay.com/photos/beer-pouring-glass-drink-alcohol-820011/"},{"id":"2439237","file":"photos/pub/2439237.jpg","role":"item","topic":"beer glasses","w":6016,"h":4000,"tags":"beer, mug, refreshment, beer mug, drink, bavaria, glass mug, thirst, brow, prost, bavarian, beer glass, munich, glass, brewery, beer pub, augustiner bräu, thirst quencher, light beer, alcohol, beer, beer, beer, beer, beer","by":"Alexas_Fotos","page":"https://pixabay.com/photos/beer-mug-refreshment-beer-mug-2439237/"},{"id":"2288121","file":"photos/pub/2288121.jpg","role":"item","topic":"beer glasses","w":4579,"h":3007,"tags":"beer, mug, glass mug, drink, beverage, alcoholic drink, alcoholic beverage, thirst, beer glass, beer mug, refreshment, bavaria, munich, beer drinking, tap, glass, thirst quencher, oktoberfest, celebrate, alcohol, beer, beer, beer, beer, beer, alcohol","by":"Alexas_Fotos","page":"https://pixabay.com/photos/beer-mug-glass-mug-drink-beverage-2288121/"},{"id":"2536111","file":"photos/pub/2536111.jpg","role":"item","topic":"beer glasses","w":4442,"h":3344,"tags":"beer, alcohol, drink, beverage, bar, glass, top view, beer glass, alcoholic drink, beer, beer, beer, beer, beer","by":"Lernestorod","page":"https://pixabay.com/photos/beer-alcohol-drink-beverage-bar-2536111/"},{"id":"3327242","file":"photos/pub/3327242.jpg","role":"item","topic":"cocktail bar","w":4858,"h":3239,"tags":"cocktail, bar, nightlife, icee, drink, party, glass, cold, alcohol, summer, celebration, refreshment, club, pub, liquor, tropical, lemon, bartender, vodka, colorful, colors, america, usa, bombsicle, red white and blue, slice, freshness, beverage, juice, lime, fresh, green, restaurant, mint, cool, citrus, fruit, rum, food, nature, ingredient, mojito, soda, refreshing, tonic, white, shaker, shot, long","by":"SocialButterflyMMG","page":"https://pixabay.com/photos/cocktail-bar-nightlife-icee-drink-3327242/"},{"id":"498420","file":"photos/pub/498420.jpg","role":"item","topic":"cocktail bar","w":5760,"h":3840,"tags":"bar, lounge, cocktail, alcohol, glass, restaurant, club, interior, beverage, vintage, retro, service, nightlife, bartender, mixologist, nightclub, waiter, bottles, drinks, bar, bar, bar, bar, bar, restaurant, restaurant, restaurant, bartender, waiter","by":"Life-Of-Pix","page":"https://pixabay.com/photos/bar-lounge-cocktail-alcohol-glass-498420/"},{"id":"3623317","file":"photos/pub/3623317.jpg","role":"item","topic":"bar bottles","w":4608,"h":3072,"tags":"bottles, alcohol, drinks, bar, liquor, beverages, mixed drinks, cocktails, alcohol bottles, glass bottles, alcoholic drinks, alcoholic beverages, shelf, restaurant, alcohol, alcohol, alcohol, alcohol, alcohol, bar, liquor","by":"652234","page":"https://pixabay.com/photos/bottles-alcohol-drinks-bar-liquor-3623317/"},{"id":"1835923","file":"photos/pub/1835923.jpg","role":"item","topic":"motel room suite","w":5000,"h":3000,"tags":"living room, interior design, furniture, lamp, couch, sofa, interior, room, indoors, house, home, apartment, living room, living room, living room, living room, interior design, furniture, interior, room, room, room, house, house, house, home, home, home, home, home, apartment","by":"Pexels","page":"https://pixabay.com/photos/living-room-interior-design-1835923/"},{"id":"2732939","file":"photos/pub/2732939.jpg","role":"item","topic":"motel room","w":5633,"h":3726,"tags":"living room, couch, interior, room, home, sofa, furniture, modern, table, decor, carpet, indoors, interior design, interior decoration, home furniture, living room, living room, living room, living room, living room, interior, room, room, home, home, home, home, sofa, furniture, interior design","by":"ClickerHappy","page":"https://pixabay.com/photos/living-room-couch-interior-room-2732939/"},{"id":"362164","file":"photos/pub/362164.jpg","role":"item","topic":"neon sign","w":6000,"h":4000,"tags":"thank you, neon lights, neon, advertising, lighting, red, font, thanks, letters, glow, sign, wall, light, signage, thank you, thank you, thank you, thank you, thank you","by":"RyanMcGuire","page":"https://pixabay.com/photos/thank-you-neon-lights-neon-362164/"},{"id":"4806610","file":"photos/pub/4806610.jpg","role":"item","topic":"neon night","w":4608,"h":3456,"tags":"shop, city, night, neon, advertising, sign, store, signage, open, bar, architecture, restaurant, osaka, business, urban, building, light, billboard, shops, shopping, starbucks, japanese, arrow, retail, shop, shop, neon, neon, neon, advertising, store, bar, bar, bar, bar, bar, restaurant, restaurant, restaurant, shopping","by":"RahulPandit","page":"https://pixabay.com/photos/shop-city-night-neon-advertising-4806610/"},{"id":"1284012","file":"photos/pub/1284012.jpg","role":"item","topic":"golf course","w":4000,"h":2667,"tags":"golf, golf ball, hole, golf course, field, grass, sport, ground, ball, nature, green, game, competition, outdoors, golfer, tournament, hobby, play, practice, golfing, golf field, flag stick","by":"Pexels","page":"https://pixabay.com/photos/golf-golf-ball-hole-golf-course-1284012/"},{"id":"1486354","file":"photos/pub/1486354.jpg","role":"item","topic":"golf course","w":4368,"h":2912,"tags":"golf, tee, golf course, golf club, golf ball, golfer, golf game, sport, fairway, field, golf, golf, golf, golf, golf","by":"markusspiske","page":"https://pixabay.com/photos/golf-tee-golf-course-golf-club-1486354/"},{"id":"219972","file":"photos/pub/219972.jpg","role":"item","topic":"river autumn","w":1920,"h":1232,"tags":"river, autumn, trees, leaves, foliage, autumn leaves, autumn foliage, autumn colors, autumn season, fall foliage, fall leaves, fall colors, forest, nature, landscape, rocks, river bank, sunset, dusk, twilight, river, river, river, river, river, autumn, autumn, forest, nature, nature, nature, nature, landscape, sunset","by":"Larisa-K","page":"https://pixabay.com/photos/river-autumn-trees-leaves-foliage-219972/"},{"id":"7087957","file":"photos/pub/7087957.jpg","role":"item","topic":"highway road trip","w":6720,"h":4480,"tags":"road, highway, countryside, hills, landscape, road, road, road, road, road, highway, highway, highway","by":"Champverti","page":"https://pixabay.com/photos/road-highway-countryside-hills-7087957/"},{"id":"3442835","file":"photos/pub/3442835.jpg","role":"item","topic":"sunset sky","w":6000,"h":3000,"tags":"sunset, countryside, nature, power lines, power poles, high-voltage pylons, electricity pylons","by":"jplenio","page":"https://pixabay.com/photos/sunset-countryside-power-lines-3442835/"},{"id":"2580200","file":"photos/pub/2580200.jpg","role":"item","topic":"nachos chips salsa","w":3872,"h":2592,"tags":"food, mexican, tacos, mexican food, spicy, meal, tortilla, chips, spice, snack, mexico, salsa, taco, pepper, yellow, tacos, tacos, tacos, mexican food, mexican food, mexican food, mexican food, mexican food, tortilla, tortilla, chips, chips, chips, mexico, salsa, salsa, taco, taco","by":"marcelokato","page":"https://pixabay.com/photos/food-mexican-tacos-mexican-food-2580200/"},{"id":"731898","file":"photos/pub/731898.jpg","role":"item","topic":"nachos drinks patio","w":7360,"h":4912,"tags":"cocktails, glasses, drinks, nachos, snack, bar, restaurant, nature, beverage, party, fun, gin, liquor, spirit, vodka, mixed, relaxation, summer, booze, alcohol, cold, refreshing, table","by":"stokpic","page":"https://pixabay.com/photos/cocktails-glasses-drinks-nachos-731898/"},{"id":"2148295","file":"photos/pub/2148295.jpg","role":"item","topic":"nachos beer","w":5551,"h":3618,"tags":"tequila, mexican food, corona beer, mexican, food, vintage, lime, party, green, drink, bar, lemon, gold, kitchen, refreshment, cold, holiday, yellow, nachos, beverage, tequila, tequila, tequila, mexican food, mexican food, mexican food, mexican food, mexican food, corona beer, nachos, nachos, nachos","by":"Anestiev","page":"https://pixabay.com/photos/tequila-mexican-food-corona-beer-2148295/"},{"id":"2979802","file":"photos/pub/2979802.jpg","role":"item","topic":"nachos","w":5184,"h":3888,"tags":"nachos, chips, mexican, snack, food, spicy, tortilla, delicious, party, cheese, chili, salsa, eat, yellow, nachos, nachos, nachos, nachos, nachos","by":"LAWJR","page":"https://pixabay.com/photos/nachos-chips-mexican-snack-food-2979802/"},{"id":"7323673","file":"photos/pub/7323673.jpg","role":"item","topic":"poutine","w":3545,"h":2837,"tags":"bacon poutine, spicy poutine, french fries, tasty, delicious, food, fries, french fries, french fries, french fries, french fries, french fries, fries, fries","by":"2SIF","page":"https://pixabay.com/photos/bacon-poutine-spicy-poutine-7323673/"},{"id":"4115953","file":"photos/pub/4115953.jpg","role":"item","topic":"poutine","w":4261,"h":3196,"tags":"french fries, bacon, cheese, gravy, poutine, food, snack, lunch, poutine, poutine, poutine, poutine, poutine","by":"LAWJR","page":"https://pixabay.com/photos/french-fries-bacon-cheese-gravy-4115953/"}]},"civil":{"name":"Civil, excavation and shoreline contractors","photos":[{"id":"2195329","file":"photos/civil/2195329.jpg","role":"hero","topic":"loader site","w":6000,"h":4000,"tags":"bulldozer, excavator, heavy machine, heavy machinery, equipment, vehicle, machinery, construction site, digger, bulldozer, excavator, excavator, machinery, construction site, construction site, construction site, construction site, construction site","by":"dimitrisvetsikas1969","page":"https://pixabay.com/photos/bulldozer-excavator-heavy-machine-2195329/"},{"id":"800996","file":"photos/civil/800996.jpg","role":"hero","topic":"excavator site","w":5188,"h":3459,"tags":"excavator, construction site, vehicle, construction work, construction machine, work, chain drive, crawler, shovel, tracked vehicle, floor, overburden, excavator, excavator, excavator, excavator, excavator, construction site, construction site, construction site, construction site, construction work, work, work, shovel, shovel, floor, floor","by":"Didgeman","page":"https://pixabay.com/photos/excavator-construction-site-vehicle-800996/"},{"id":"3412240","file":"photos/civil/3412240.jpg","role":"hero","topic":"bulldozer site","w":5907,"h":3962,"tags":"construction machine, scoops, shovel, excavator, caterpillar, tracked vehicle, construction site, machine, vehicle, old, bulldozer, rooms, ride, level, excavator, excavator, excavator, caterpillar, construction site, construction site, bulldozer, bulldozer, bulldozer, bulldozer, bulldozer","by":"Tama66","page":"https://pixabay.com/photos/construction-machine-scoops-shovel-3412240/"},{"id":"2578410","file":"photos/civil/2578410.jpg","role":"item","topic":"site crew truck","w":4460,"h":2974,"tags":"construction, worker, safety, construction workers, male, site, helmet, industrial, contractor, teamwork, concrete truck, scaffolding, development, under construction, truck, structure, construction, construction, construction, construction, construction, worker, safety, construction workers","by":"bridgesward","page":"https://pixabay.com/photos/construction-worker-safety-2578410/"},{"id":"474792","file":"photos/civil/474792.jpg","role":"item","topic":"rebar bundle","w":6000,"h":4000,"tags":"iron rods, reinforcing bars, construction, construction materials, rusty, building material, construction site, iron, rebar, bent, material, structural steel matt, metal, construction, construction, construction, construction, construction, construction site, iron, iron","by":"Hans","page":"https://pixabay.com/photos/iron-rods-reinforcing-bars-474792/"},{"id":"1174428","file":"photos/civil/1174428.jpg","role":"item","topic":"excavator digging","w":4608,"h":3456,"tags":"excavator, construction, site, build, construction work, construction site, machinery, heavy machinery, vehicle, construction machine, backhoe bucket, construction vehicle, digging, excavator, construction, construction, construction, construction, construction","by":"652234","page":"https://pixabay.com/photos/excavator-construction-site-build-1174428/"},{"id":"1867268","file":"photos/civil/1867268.jpg","role":"item","topic":"dump truck loader","w":6000,"h":4000,"tags":"digger, excavator, engine, heavy, loader, lorry, machine, machinery, quarry, sand, semi-trailer truck, soil, trailer, transportation system, truck, vehicle, heavy machinery, truck, truck, truck, truck, truck","by":"Pexels","page":"https://pixabay.com/photos/digger-excavator-engine-heavy-1867268/"},{"id":"1029665","file":"photos/civil/1029665.jpg","role":"item","topic":"rebar workers","w":5184,"h":3456,"tags":"steel workers, concrete, formwork, construction worker, construction, construction site, shell, metal struts, construction worker, construction worker, construction worker, construction worker, construction, construction, construction, construction, construction site, construction site, construction site, construction site, construction site","by":"Peggy_Marco","page":"https://pixabay.com/photos/steel-workers-concrete-formwork-1029665/"},{"id":"1651305","file":"photos/civil/1651305.jpg","role":"item","topic":"demolition excavator","w":4000,"h":3000,"tags":"cancellation, demolition, destroyed, ruin, collapse, destruction, excavator, tear off, dismantling, construction site, building rubble, overburden, concrete steel, bridge, building, earthquake, bad luck, workers, construction machine, power, looking for, demolition, demolition, construction site, earthquake, earthquake, earthquake, earthquake, earthquake","by":"garten-gg","page":"https://pixabay.com/photos/cancellation-demolition-destroyed-1651305/"},{"id":"3390318","file":"photos/civil/3390318.jpg","role":"item","topic":"site foundation","w":4486,"h":2991,"tags":"building, construction site, to build, construction work, housebuilding, work, handyman, construction worker, craft, workers, helmet, tool, architecture, people, designer, metal, building trade, new building, scaffolding, shell, building construction, steel mesh, reinforcing iron, construction site, construction site, construction site, construction site, construction site, construction worker, construction worker, workers, building construction, building construction","by":"652234","page":"https://pixabay.com/photos/building-construction-site-to-build-3390318/"},{"id":"6586718","file":"photos/civil/6586718.jpg","role":"item","topic":"concrete forming","w":5616,"h":3744,"tags":"worker, employee, security, work, construction company, cement, scaffold, job, men, person, helmet, labor, builder, people, tool, build, harness, tower, concrete, exterior, worker, worker, worker, construction company, cement, cement, scaffold, labor, labor, labor, labor, labor, builder, builder, builder, harness","by":"Nickbar","page":"https://pixabay.com/photos/worker-employee-security-work-6586718/"},{"id":"3738933","file":"photos/civil/3738933.jpg","role":"item","topic":"stone wall","w":6000,"h":4000,"tags":"stone wall, wall, texture, drywall, stones, rocks, masonry, architecture, structure, pattern, rough, old, rustic, surface, stone wall, stone wall, wall, wall, wall, wall, wall, texture, stones, stones, rocks, rocks, pattern, pattern, pattern","by":"marijana1","page":"https://pixabay.com/photos/stone-wall-wall-texture-drywall-3738933/"},{"id":"668100","file":"photos/civil/668100.jpg","role":"item","topic":"stone wall armour","w":4000,"h":2664,"tags":"stone wall, natural stones, wall, masonry, natural stone wall, stones, stoneworks, texture, material, stone wall, stone wall, wall, wall, wall, wall, wall, stones, texture, texture","by":"PIX1861","page":"https://pixabay.com/photos/stone-wall-natural-stones-wall-668100/"},{"id":"3095682","file":"photos/civil/3095682.jpg","role":"item","topic":"shoreline lake","w":6000,"h":4000,"tags":"waters, nature, lake, flow, water, landscape, forest, trees, island, summer, green, coniferous forest, idyllic, lake, lake, lake, lake, lake, forest, forest, island","by":"jplenio","page":"https://pixabay.com/photos/waters-nature-lake-flow-water-3095682/"},{"id":"4582290","file":"photos/civil/4582290.jpg","role":"item","topic":"lake sunset","w":7087,"h":4724,"tags":"landscape, lake, darling, clouds, sunset, nature, ducks","by":"ELG21","page":"https://pixabay.com/photos/landscape-lake-darling-clouds-4582290/"},{"id":"7768312","file":"photos/civil/7768312.jpg","role":"item","topic":"pipes sewer","w":4987,"h":3323,"tags":"pipe system, tube, construction site, light, cable, industry, system, connection, flow through, embarrassed, plug-in system, round, circles, channel, industry, industry, industry, industry, industry, circles, circles","by":"Kranich17","page":"https://pixabay.com/photos/pipe-system-tube-construction-site-7768312/"},{"id":"569126","file":"photos/civil/569126.jpg","role":"item","topic":"crew hard hat","w":5760,"h":3840,"tags":"construction worker, work, worker, man, industry, building site, engineer, architecture, helmet, male, builder, hardhat, occupation, construction, zone, danger, tape, vest, hard hat, signs, construction worker, construction worker, worker, worker, engineer, engineer, construction, construction, construction, construction, construction","by":"Life-Of-Pix","page":"https://pixabay.com/photos/construction-worker-work-worker-man-569126/"},{"id":"2762319","file":"photos/civil/2762319.jpg","role":"item","topic":"engineers site","w":4928,"h":3264,"tags":"building, professional, employee, builder, worker, architect, repair, operator, security, business, build, body, man, factory, helmet, surveyor, helm, corporation, people, foreman, mechanics, male, tools, work, the production of, the industry, industrial, development, employee, employee, builder, builder, builder, builder, worker, worker, architect, architect, architect, architect, architect, factory","by":"jarmoluk","page":"https://pixabay.com/photos/building-professional-employee-2762319/"},{"id":"4274431","file":"photos/civil/4274431.jpg","role":"item","topic":"hard hat","w":5312,"h":2988,"tags":"hard hat, safety hat, construction, hardhat, industrial, work, worker, engineer, safe, safety, professional, protective, protection, helmet, builder, hat, contractor, wear, occupation, industry, business, hard, hard hat, hard hat, construction, construction, construction, worker, engineer, safe, safety, safety, safety, safety, safety, contractor","by":"ZeeChow","page":"https://pixabay.com/photos/hard-hat-safety-hat-construction-4274431/"},{"id":"1846346","file":"photos/civil/1846346.jpg","role":"item","topic":"loader quarry","w":5159,"h":3458,"tags":"loader, gravel, digger, excavator, heavy, heavy equipment, industrial, large, machine, machinery, silos, technology, truck, vehicle, work, heavy machinery, gravel, heavy equipment, industrial, industrial, truck, truck, truck, truck, truck","by":"Pexels","page":"https://pixabay.com/photos/loader-gravel-digger-excavator-1846346/"},{"id":"440743","file":"photos/civil/440743.jpg","role":"item","topic":"loader","w":1920,"h":1440,"tags":"mining, machines, machinery, equipment, industry, excavator, construction, machine, industrial, heavy, vehicle, mover, work, technology, truck, quarry, transport, loader, transportation, mining, mining, mining, mining, mining, construction","by":"AlexBanner","page":"https://pixabay.com/photos/mining-machines-machinery-equipment-440743/"},{"id":"5400780","file":"photos/civil/5400780.jpg","role":"item","topic":"dump truck","w":4896,"h":3264,"tags":"garbage, landfill, truck, dump truck, humans, people, disposal, junk, litter, pile, scrap, trash, waste, garbage, garbage, landfill, landfill, landfill, landfill, landfill, trash, trash, waste, waste, waste","by":"khoinguyenfoto","page":"https://pixabay.com/photos/garbage-landfill-truck-dump-truck-5400780/"},{"id":"2023592","file":"photos/civil/2023592.jpg","role":"item","topic":"haul truck","w":3872,"h":2592,"tags":"industry, dumper, minerals, car wallpapers, coal, giant size, belaz, car, excavator, work, russia, siberia, coal mining, coal mountain","by":"stafichukanatoly","page":"https://pixabay.com/photos/industry-dumper-minerals-coal-2023592/"},{"id":"1589616","file":"photos/civil/1589616.jpg","role":"item","topic":"river","w":2199,"h":1254,"tags":"river, mountains, sunset, dusk, twilight, trees, conifers, water, mountain range, mountainous, landscape, nature, fields, yellowstone national park, evening, scenic, idyllic, meadow, outdoors, countryside, wilderness, reflections, madison river, sky, clouds, wyoming, river, river, river, river, river","by":"12019","page":"https://pixabay.com/photos/river-mountains-sunset-dusk-1589616/"},{"id":"5129717","file":"photos/civil/5129717.jpg","role":"item","topic":"creek","w":8288,"h":5520,"tags":"mckenzie river, central oregon, forest, lush, river, sahalie falls, nature, outdoors, travel, park, oregon, flowing, hiking, explore, wilderness, rugged, moss, green, kayaking, rapids, rushing, scenery, beauty, waterfalls, river, river, river, river, river","by":"15079075","page":"https://pixabay.com/photos/mckenzie-river-central-oregon-forest-5129717/"},{"id":"1857350","file":"photos/civil/1857350.jpg","role":"item","topic":"pond lily","w":4896,"h":3264,"tags":"water lily, lily pads, pond, reflection, water reflection, mirroring, blossom, flower wallpaper, bloom, white flower, flower background, flora, flower, beautiful flowers, pond plant, aquatic plant, water, nature","by":"Couleur","page":"https://pixabay.com/photos/water-lily-lily-pads-pond-1857350/"},{"id":"2504507","file":"photos/civil/2504507.jpg","role":"item","topic":"pond wetland","w":4896,"h":2915,"tags":"frog, flower background, pond, lily pads, lotus, flower, waterlily, flower wallpaper, water frog, amphibian, aquatic plants, animal, beautiful flowers, green, green frog, water, garden pond, white flower, animal world, nature, wildlife, wildlife photography","by":"Couleur","page":"https://pixabay.com/photos/frog-pond-lily-pads-lotus-flower-2504507/"},{"id":"2284501","file":"photos/civil/2284501.jpg","role":"item","topic":"plans meeting","w":5400,"h":3375,"tags":"meeting, business, architect, office, team, plan, blueprints, teamwork, group, people, project, workplace, table, desk, meeting, meeting, meeting, business, business, business, business, business, architect, office, office, office, office, team, team, teamwork, project, workplace","by":"mwitt1337","page":"https://pixabay.com/photos/meeting-business-architect-office-2284501/"},{"id":"1857175","file":"photos/civil/1857175.jpg","role":"item","topic":"blueprint","w":6000,"h":4000,"tags":"floor plan, construction, building, pencil, architecture, blueprint, design, architect, sketch, drawing, technical, draft, white, ruler, contemporary architecture, construction, construction, construction, construction, construction, architecture","by":"3844328","page":"https://pixabay.com/photos/floor-plan-construction-building-1857175/"},{"id":"3979490","file":"photos/civil/3979490.jpg","role":"item","topic":"engineers plans","w":3010,"h":1813,"tags":"architect, plan, construction, protective helmet, engineering, team, occupation, construction, construction, construction, construction, construction, engineering","by":"borevina","page":"https://pixabay.com/photos/architect-plan-construction-3979490/"},{"id":"1080589","file":"photos/civil/1080589.jpg","role":"item","topic":"home inspection","w":3771,"h":2510,"tags":"architect, building, joy, planning, plans, professional, employee, builder, worker, repair, contractor, man, people, male, work, development, housing, home, build, architect, builder, builder, worker, worker, worker, contractor, contractor, contractor, contractor, home, home, home, home, home, build","by":"jarmoluk","page":"https://pixabay.com/photos/architect-building-joy-planning-1080589/"},{"id":"3466731","file":"photos/civil/3466731.jpg","role":"item","topic":"demolition building","w":5459,"h":3880,"tags":"house, trash, ruin, concrete, destruction, building, urban, structure, broken, destroy, abandoned, waste, devastation, city, wall, demolition, debris, pile, demolished, trash, destruction, destruction, destruction, destruction, destruction, broken, destroy, destroy, abandoned, demolition, demolition, debris, demolished","by":"ZenJoe","page":"https://pixabay.com/photos/house-trash-ruin-concrete-3466731/"},{"id":"3173357","file":"photos/civil/3173357.jpg","role":"item","topic":"demolition","w":5111,"h":3408,"tags":"architecture, heaven, building, demolition, masonry, destruction, construction work, ruin, broken, dismantling, debris, demolition, demolition, demolition, demolition, demolition, destruction, ruin, broken, debris, debris","by":"Photomat","page":"https://pixabay.com/photos/architecture-heaven-building-3173357/"}]},"trapper":{"name":"Trappers, tanners and traditional skills","photos":[{"id":"5937499","file":"photos/trapper/5937499.jpg","role":"hero","topic":"marsh sunrise","w":5000,"h":3333,"tags":"egret, flying, fog, dawn, sunrise, grass, reed, heron, animal, wildlife, wings, feathers, plumage, forest, nature, foggy, mist, morning, birdwatching, fog, sunrise, sunrise, sunrise, sunrise, sunrise, heron, forest, morning, morning, morning","by":"KIMDAEJEUNG","page":"https://pixabay.com/photos/egret-flying-fog-dawn-sunrise-5937499/"},{"id":"5394026","file":"photos/trapper/5394026.jpg","role":"hero","topic":"marsh sunrise","w":5000,"h":3327,"tags":"heron, egret, landscape, feathers, nature, wings, flight, bird, animal, sunrise, foggy, misty, river, water, reflections, reeds, sky, cloud, low tide, silhouette, shadow, without people, nature photography, riverbank, river, river, river, river, river","by":"Adriansart","page":"https://pixabay.com/photos/heron-egret-landscape-feathers-5394026/"},{"id":"845552","file":"photos/trapper/845552.jpg","role":"hero","topic":"marsh sunrise","w":5914,"h":3831,"tags":"sunset, lake, landscape, summer, twilight, wetlands, dusk, sun, reflection, water reflection, mirroring, nature, québec, wetlands, wetlands, wetlands, wetlands, wetlands","by":"AlainAudet","page":"https://pixabay.com/photos/sunset-lake-landscape-summer-845552/"},{"id":"8091934","file":"photos/trapper/8091934.jpg","role":"hero","topic":"marsh sunrise","w":6000,"h":4000,"tags":"pier, silhouette, sunrise, fog, mystical, nature, landscape, nature, nature, nature, nature, nature","by":"Nordseher","page":"https://pixabay.com/photos/pier-silhouette-sunrise-fog-8091934/"},{"id":"4668099","file":"photos/trapper/4668099.jpg","role":"hero","topic":"winter forest trail","w":4000,"h":2554,"tags":"snow, winter, forest, nature, cold, snow landscape, winter magic, wintry, mystical, fog, foggy, forest path, sun, branches, deciduous trees, mood, light rays, romantic, light, snow, snow, winter, winter, winter, winter, winter","by":"Sonyuser","page":"https://pixabay.com/photos/snow-winter-forest-nature-cold-4668099/"},{"id":"3095703","file":"photos/trapper/3095703.jpg","role":"hero","topic":"winter forest trail","w":5673,"h":3782,"tags":"tree, nature, forest, forest path, dirt road, path, avenue, light, dark, fall, branches, fairytale, mystical, atmospheric, mood, nature, forest, forest, forest, forest, forest, path, path, dark, dark, fall, fairytale","by":"jplenio","page":"https://pixabay.com/photos/tree-nature-forest-forest-path-3095703/"},{"id":"4680713","file":"photos/trapper/4680713.jpg","role":"hero","topic":"winter forest trail","w":3000,"h":1998,"tags":"winter, nature, trees, season, mountains, snow, landscape, alps, hochybrig, switzerland, himmelolkentannen, ski tracks, winter, winter, winter, snow, switzerland, switzerland, switzerland, switzerland, switzerland","by":"Sonyuser","page":"https://pixabay.com/photos/winter-nature-trees-season-4680713/"},{"id":"3151876","file":"photos/trapper/3151876.jpg","role":"item","topic":"fur pelt","w":5024,"h":3552,"tags":"wolf, wild animal, wildlife, predator, animal, pack animal, wild, nature, carnivores, fur, canis lupus, face, close up, wilderness, dangerous, wolf face, snout, wolf head, zoo, hellabrunn, wolf, wolf, wolf, wolf, wolf","by":"Alexas_Fotos","page":"https://pixabay.com/photos/wolf-wild-animal-wildlife-predator-3151876/"},{"id":"10522670","file":"photos/trapper/10522670.jpg","role":"item","topic":"fur pelt","w":4480,"h":6720,"tags":"wolf, nature, wild, animal, wolf-like, predator, mammal, forest, in nature, wildlife, fur, close-up, evening, serious, strong, solitary, shedding, mountain area, primordial","by":"Schwarzwaldandi","page":"https://pixabay.com/photos/wolf-nature-wild-animal-wolf-like-10522670/"},{"id":"1838494","file":"photos/trapper/1838494.jpg","role":"item","topic":"leather hide","w":3800,"h":2534,"tags":"background, leather, brown, hd wallpaper, free wallpaper, cool backgrounds, close up, design, wallpaper hd, 4k wallpaper 1920x1080, free background, fashion, desktop backgrounds, full hd wallpaper, macro, material, mac wallpaper, laptop wallpaper, pattern, structure, style, texture, textured, beautiful wallpaper, wallpaper 4k, 4k wallpaper, windows wallpaper, brown background, brown texture","by":"Pexels","page":"https://pixabay.com/photos/background-leather-brown-close-up-1838494/"},{"id":"1088169","file":"photos/trapper/1088169.jpg","role":"item","topic":"leather hide","w":3600,"h":3600,"tags":"leather, beautiful wallpaper, texture, scrapbooking, brown, leather texture, background, weathered, brown background, brown texture","by":"lovepixs","page":"https://pixabay.com/photos/leather-texture-scrapbooking-brown-1088169/"},{"id":"2719497","file":"photos/trapper/2719497.jpg","role":"item","topic":"leather hide","w":4912,"h":3264,"tags":"leather, background, hd wallpaper, structure, orange, mac wallpaper, wallpaper hd, brown, real leather, texture, template, colored, illuminated, area, free wallpaper, natural, skin, beautiful wallpaper, laptop wallpaper, desktop backgrounds, free background, animal skin, wallpaper 4k, cool backgrounds, pores, rustic, antique, screen background, background motif, abstract, windows wallpaper, rau, scrapbook, full hd wallpaper, 4k wallpaper, 4k wallpaper 1920x1080, scrap","by":"Monsterkoi","page":"https://pixabay.com/photos/leather-background-structure-orange-2719497/"},{"id":"1846059","file":"photos/trapper/1846059.jpg","role":"item","topic":"axe chopping wood","w":3072,"h":2048,"tags":"wood, logs, bole, pieces of timber, woodpile, wooden, timber, forestry, texture, deforestation, material, wooden logs, lumber, trunks, stack, wood, wood, wood, wood, wood, logs, timber, lumber","by":"Pexels","page":"https://pixabay.com/photos/wood-logs-bole-pieces-of-timber-1846059/"},{"id":"1839061","file":"photos/trapper/1839061.jpg","role":"item","topic":"axe chopping wood","w":5795,"h":3803,"tags":"knives, set, chopping board, slice, sharp, sharpness, blades, knife set, kitchen tools, orange slices, kitchen, kitchen utensils, flat lay, knives, knives, knives, knife set, kitchen tools, kitchen, kitchen, kitchen, kitchen, kitchen, kitchen utensils","by":"Pexels","page":"https://pixabay.com/photos/knives-set-chopping-board-slice-1839061/"},{"id":"1748305","file":"photos/trapper/1748305.jpg","role":"item","topic":"axe chopping wood","w":5760,"h":3840,"tags":"axe, wood, chop, wood chop, hatchet, woodworks, ax, log, tool, work, cleaver, axe, axe, axe, axe, axe","by":"markusspiske","page":"https://pixabay.com/photos/axe-wood-chop-wood-chop-hatchet-1748305/"},{"id":"5494732","file":"photos/trapper/5494732.jpg","role":"item","topic":"axe chopping wood","w":3264,"h":2451,"tags":"axe, weapon, tool, equipment, viking, battle, warrior, shield, armor, medieval, barbarian, sword, fighter, pagan, enemy, soldier, fight, axe, viking, viking, viking, viking, viking, sword, enemy","by":"ValeriiIavtushenko","page":"https://pixabay.com/photos/axe-weapon-tool-equipment-viking-5494732/"},{"id":"1868104","file":"photos/trapper/1868104.jpg","role":"item","topic":"firewood stack","w":2988,"h":1991,"tags":"wood, pile, logs, bole, firewood, pieces of timber, woodpile, wooden, timber, forestry, texture, deforestation, material, wooden logs, wood, wood, wood, wood, wood, logs, firewood, timber","by":"Pexels","page":"https://pixabay.com/photos/wood-pile-logs-bole-firewood-1868104/"},{"id":"3163292","file":"photos/trapper/3163292.jpg","role":"item","topic":"firewood stack","w":5184,"h":3456,"tags":"wood, wallpaper hd, wooden, free wallpaper, full hd wallpaper, mac wallpaper, windows wallpaper, saw, background, desktop backgrounds, hd wallpaper, beautiful wallpaper, nature, free background, wallpaper 4k, tree, laptop wallpaper, 4k wallpaper, 4k wallpaper 1920x1080, forest, snow, cool backgrounds, tree trunk","by":"5598375","page":"https://pixabay.com/photos/wood-wooden-saw-background-nature-3163292/"},{"id":"498538","file":"photos/trapper/498538.jpg","role":"item","topic":"firewood stack","w":4274,"h":2834,"tags":"logs, wood, lumber, logging, bole, firewood, pieces of timber, woodpile, wooden, timber, forestry, deforestation, material, logs, lumber, lumber, logging, logging, firewood, timber, timber, deforestation, deforestation, deforestation, deforestation, deforestation","by":"ClickerHappy","page":"https://pixabay.com/photos/logs-wood-lumber-logging-bole-498538/"},{"id":"5815851","file":"photos/trapper/5815851.jpg","role":"item","topic":"snowshoes","w":4672,"h":3104,"tags":"human, snow, trekking poles, mountains, snow mountains, hoarfrost, winter, wintry, winterscape, nature, snowscape, snowy, mountain climbing, mountain climber, mountaineer, mountaineering, snowshoeing, snowshoes, cold, landscape, hiking, footprints","by":"It_was_a_pleasure","page":"https://pixabay.com/photos/human-snow-trekking-poles-mountains-5815851/"},{"id":"4695049","file":"photos/trapper/4695049.jpg","role":"item","topic":"snowshoes","w":3840,"h":2160,"tags":"mountains, nature, alps, mountaineering, cold, man, lost, snowy, haute maurienne, maurian, snowshoes, racket, snow","by":"Alexgan","page":"https://pixabay.com/photos/mountains-alps-mountaineering-cold-4695049/"},{"id":"3295661","file":"photos/trapper/3295661.jpg","role":"item","topic":"snowshoes","w":6000,"h":4000,"tags":"climb, fatigue, snow, winter, fun, adventure, nature, cold, snowshoes, mountain","by":"pcdazero","page":"https://pixabay.com/photos/climb-fatigue-snow-winter-fun-3295661/"},{"id":"268363","file":"photos/trapper/268363.jpg","role":"item","topic":"animal tracks snow","w":1950,"h":2599,"tags":"imprint, paw print, snow, print, paw, dog, nature, winter, pet, snowy, cat, animal","by":"petronela","page":"https://pixabay.com/photos/imprint-paw-print-snow-print-paw-268363/"},{"id":"4325359","file":"photos/trapper/4325359.jpg","role":"item","topic":"muskrat","w":4496,"h":3000,"tags":"muskrat, rodent, mammal, wildlife, water, fur, waters, builder, animal, nature, ondatra zibethicus, muskrat, muskrat, muskrat, muskrat, muskrat","by":"RitaE","page":"https://pixabay.com/photos/muskrat-rodent-mammal-wildlife-4325359/"},{"id":"4395470","file":"photos/trapper/4395470.jpg","role":"item","topic":"muskrat","w":6000,"h":4000,"tags":"muskrat, young, eating, cattails, shoreline, sharp teeth, nature, claws, shiny, dark, black, eyes, whiskers, brown, furry, long tail, rope tail, lake, water, chewing, paws, rodent, mammal, animal, wildlife, outdoors, green eye, green dark, green teeth, green lake, green eating","by":"Scottslm","page":"https://pixabay.com/photos/muskrat-young-eating-cattails-4395470/"},{"id":"2679660","file":"photos/trapper/2679660.jpg","role":"item","topic":"muskrat","w":2048,"h":1536,"tags":"muskrat, rat, water, nature, brown rat","by":"kees1","page":"https://pixabay.com/photos/muskrat-rat-water-brown-rat-2679660/"},{"id":"3538081","file":"photos/trapper/3538081.jpg","role":"item","topic":"raccoon","w":5281,"h":3377,"tags":"raccoon, animal, mammal, nature, fur, wildlife, forest, wildlife photography, wild animal, furry, forest animal, zoo, raccoon, raccoon, raccoon, raccoon, raccoon, animal, animal, wildlife, forest, forest, zoo","by":"Alexas_Fotos","page":"https://pixabay.com/photos/raccoon-animal-mammal-nature-fur-3538081/"},{"id":"1885137","file":"photos/trapper/1885137.jpg","role":"item","topic":"raccoon","w":2200,"h":1229,"tags":"raccoon, leaves, mammal, nocturnal, animal, wildlife, outdoors, nature, raccoon, raccoon, raccoon, raccoon, raccoon","by":"12019","page":"https://pixabay.com/photos/raccoon-leaves-mammal-nocturnal-1885137/"},{"id":"4377383","file":"photos/trapper/4377383.jpg","role":"item","topic":"raccoon","w":4428,"h":3148,"tags":"raccoon, animal, nature, mammal, furry, animal world, wildlife park, wild animal, zoo, forest animals, wild, forest, raccoon, raccoon, raccoon, raccoon, raccoon","by":"4924546","page":"https://pixabay.com/photos/raccoon-animal-nature-mammal-furry-4377383/"},{"id":"739152","file":"photos/trapper/739152.jpg","role":"item","topic":"leather tools","w":3008,"h":2000,"tags":"tool belt, roof, belt, tool, construction, work, worker, building, home, professional, handyman, industry, equipment, carpenter, nature, shingles, roofer, roofing, house, wood, exterior, rooftop, trees, leather","by":"alluregraphicdesign","page":"https://pixabay.com/photos/tool-belt-roof-belt-tool-739152/"},{"id":"906137","file":"photos/trapper/906137.jpg","role":"item","topic":"medicinal plants","w":3738,"h":3738,"tags":"basil, aroma, spices, essential, herbal, organic, aromatic, perfume, medicinal, essence, condiment, medicine, bottle, healthy, alternative, herbs, ingredient, sanctum, fresh, oil, food, aromatherapy, thyme, perfume, medicine, medicine, herbs, herbs, herbs, herbs, herbs, food, food","by":"kerdkanno","page":"https://pixabay.com/photos/basil-aroma-spices-essential-906137/"},{"id":"1867371","file":"photos/trapper/1867371.jpg","role":"item","topic":"cedar branches","w":4608,"h":3072,"tags":"conifers, coniferous, evergreen, green, environment, flora, foliage, leaves, outdoors, nature, woods, greenery, lush","by":"Pexels","page":"https://pixabay.com/photos/conifers-coniferous-evergreen-green-1867371/"},{"id":"6850925","file":"photos/trapper/6850925.jpg","role":"item","topic":"cedar branches","w":3000,"h":2000,"tags":"cedar, branch, winter, evergreen, tree, nature, cedar, cedar, cedar, cedar, winter, winter, winter, winter, winter","by":"Pezibear","page":"https://pixabay.com/photos/cedar-branch-winter-evergreen-tree-6850925/"},{"id":"526662","file":"photos/trapper/526662.jpg","role":"item","topic":"cedar branches","w":4288,"h":2848,"tags":"cedar, cedar branch, branch, needle, conifer, tree, plant, nature, macro, cedar, cedar, cedar, cedar, cedar","by":"Pezibear","page":"https://pixabay.com/photos/cedar-cedar-branch-branch-needle-526662/"}]},"water":{"name":"Water savings, plumbing and building efficiency","photos":[{"id":"839362","file":"photos/water/839362.jpg","role":"hero","topic":"apartment building exterior","w":4680,"h":3120,"tags":"building, architecture, modern, monochrome, office, work, window, house, wall, perspective, structure, urban, glass, business, housing, apartment, nature, futuristic, minimal, sky","by":"Foundry","page":"https://pixabay.com/photos/building-architecture-modern-839362/"},{"id":"5974876","file":"photos/water/5974876.jpg","role":"hero","topic":"apartment building exterior","w":6016,"h":4016,"tags":"city, building, heaven, skyscraper, seoul, apartments, architecture, facade, high, modern, skyline, residence, residential, property, downtown, urban, modern architecture, contemporary architecture, property, property, property, property, property","by":"wal_172619","page":"https://pixabay.com/photos/city-building-heaven-skyscraper-5974876/"},{"id":"1719526","file":"photos/water/1719526.jpg","role":"hero","topic":"apartment building exterior","w":4267,"h":2546,"tags":"architecture, reside, facade, building, house, window, property, balcony, skyscraper, city, modern, home decor, house facade, dusseldorf, living room, downtown, housewall, urban, construction, design, building, building, building, building, building, house, house, house, property, balcony, construction, construction, construction","by":"652234","page":"https://pixabay.com/photos/architecture-reside-facade-building-1719526/"},{"id":"1004250","file":"photos/water/1004250.jpg","role":"hero","topic":"water drop splash blue","w":5548,"h":3698,"tags":"drop, splash, impact, ripples, water, ripple effect, waves, macro, drip, liquid, surface tension, nature, surface, water surface, droplet, drop of water, water reflection, clear water, mirroring, mirror image, reflection","by":"Quadronet_Webdesign","page":"https://pixabay.com/photos/drop-splash-impact-ripples-water-1004250/"},{"id":"164963","file":"photos/water/164963.jpg","role":"hero","topic":"water drop splash blue","w":1920,"h":1272,"tags":"splash, water, droplet, water drop, drop, aqua, clear, liquid, nature, fluid, abstract, macro","by":"PublicDomainPictures","page":"https://pixabay.com/photos/splash-water-droplet-water-drop-164963/"},{"id":"4531474","file":"photos/water/4531474.jpg","role":"hero","topic":"water drop splash blue","w":3559,"h":2376,"tags":"water drop, toilet, nature, gout, water, fresh, rain, bokeh, water drop, water drop, toilet, toilet, toilet, water, water, water, water, water, rain, rain","by":"fernandozhiminaicela","page":"https://pixabay.com/photos/water-drop-toilet-nature-gout-4531474/"},{"id":"2256201","file":"photos/water/2256201.jpg","role":"hero","topic":"water drop splash blue","w":5184,"h":3456,"tags":"waterdrop, moment, water, pool, waves, drops capture, to form, abstract, nature, time, light, dazzle, drops of freezing, light lighting, blue","by":"sulox32","page":"https://pixabay.com/photos/waterdrop-moment-water-pool-waves-2256201/"},{"id":"1777986","file":"photos/water/1777986.jpg","role":"hero","topic":"city skyline buildings","w":4867,"h":3246,"tags":"usa, manhattan, contrasts, new york, new york city, chinatown, metropolis, skyline, road, traffic, old, new, houses, building, architecture, skyscrapers, usa, new york, new york, new york, new york, new york","by":"wiggijo","page":"https://pixabay.com/photos/usa-manhattan-contrasts-new-york-1777986/"},{"id":"1850129","file":"photos/water/1850129.jpg","role":"hero","topic":"city skyline buildings","w":5000,"h":2813,"tags":"buildings, skyline, city, cityscape, skyscrapers, high-rise, high-rise buildings, urban, urban landscape, metropolitan, architecture, new york city, manhattan, usa, towers, america, zoom background, city, city, city, city, city","by":"Pexels","page":"https://pixabay.com/photos/buildings-skyline-city-cityscape-1850129/"},{"id":"463904","file":"photos/water/463904.jpg","role":"item","topic":"plumbing pipes valve","w":4476,"h":2938,"tags":"heating, thermostat, temperature display, heating pipes, valves, pressure indicator, heating, heating, heating, heating, heating, thermostat, thermostat","by":"avantrend","page":"https://pixabay.com/photos/heating-thermostat-463904/"},{"id":"2672184","file":"photos/water/2672184.jpg","role":"item","topic":"plumbing pipes valve","w":4912,"h":3264,"tags":"pipes, plumbing, plumber, tubes, plumbing, plumbing, plumbing, plumbing, plumbing, plumber, plumber","by":"5317367","page":"https://pixabay.com/photos/pipes-plumbing-plumber-tubes-2672184/"},{"id":"2672187","file":"photos/water/2672187.jpg","role":"item","topic":"plumbing pipes valve","w":4912,"h":3264,"tags":"tubes, plumbing, heater, works, plumbing, plumbing, plumbing, plumbing, plumbing","by":"5317367","page":"https://pixabay.com/photos/tubes-plumbing-heater-works-2672187/"},{"id":"2265065","file":"photos/water/2265065.jpg","role":"item","topic":"plumbing pipes valve","w":3888,"h":2592,"tags":"counter, water, water meter, plumbing, pipeline, nature, flow meter, valve","by":"delo","page":"https://pixabay.com/photos/counter-water-water-meter-plumbing-2265065/"},{"id":"840835","file":"photos/water/840835.jpg","role":"item","topic":"plumber working","w":5472,"h":3648,"tags":"plumbing, pipe, wrenches, plumber, repair, maintenance, fix, renovation, spanner, job, repairman, handyman, tools, diy, home repairs, leak, leaking, plumbing, plumbing, plumbing, plumbing, plumbing, plumber, plumber, plumber, maintenance, tools","by":"stevepb","page":"https://pixabay.com/photos/plumbing-pipe-wrenches-plumber-840835/"},{"id":"228010","file":"photos/water/228010.jpg","role":"item","topic":"plumber working","w":4288,"h":2848,"tags":"plumber, handyman, repair, worker, service, repairman, maintenance, occupation, contractor, fix, fixing, mechanic, professional, workman, installing, sink, kitchen, craftsman, working, man, person, plumbing, male, profession, plumber, plumber, plumber, plumber, plumber, plumbing, plumbing","by":"fran1","page":"https://pixabay.com/photos/plumber-handyman-repair-worker-228010/"},{"id":"585658","file":"photos/water/585658.jpg","role":"item","topic":"plumber working","w":5472,"h":3648,"tags":"plumbing, pipe wrench, repair, maintenance, fix, tool, connect, handyman, spanner, tighten, screw, thread, plumber, workman, home repair, toolbox, tight, fasten, monkey wrench, plumbing, plumbing, plumbing, plumbing, plumbing, plumber, plumber, plumber, plumber","by":"stevepb","page":"https://pixabay.com/photos/plumbing-pipe-wrench-repair-585658/"},{"id":"1103725","file":"photos/water/1103725.jpg","role":"item","topic":"boiler room pipes","w":2000,"h":1328,"tags":"plumbing, industry, pipes, pipelines, white, modern, technology, basement, blue technology, gray technology, blue industry, gray industry, plumbing, plumbing, plumbing, plumbing, plumbing, industry, industry, pipes, pipes","by":"Archermech","page":"https://pixabay.com/photos/plumbing-industry-pipes-pipelines-1103725/"},{"id":"5146458","file":"photos/water/5146458.jpg","role":"item","topic":"boiler room pipes","w":6021,"h":4006,"tags":"tube, valve, heating, industry, technology, pipeline, rust, instrument, pressure, pforphoto, cables, factory, old, decay, disintegration, factory building, industrial plant, pipeline, pipeline, pipeline, pipeline, pipeline","by":"Tama66","page":"https://pixabay.com/photos/tube-valve-heating-industry-5146458/"},{"id":"791172","file":"photos/water/791172.jpg","role":"item","topic":"water tap faucet","w":5395,"h":3597,"tags":"tap, black, nature, faucet, kitchen, sink, interior, design, modern, water","by":"kaboompics","page":"https://pixabay.com/photos/tap-black-faucet-kitchen-sink-791172/"},{"id":"1684902","file":"photos/water/1684902.jpg","role":"item","topic":"water tap faucet","w":3000,"h":2000,"tags":"faucet, fountain, water, water dispenser, watercourse, water fountain, drinking water, nature, water basin","by":"3345408","page":"https://pixabay.com/photos/faucet-fountain-water-1684902/"},{"id":"3240211","file":"photos/water/3240211.jpg","role":"item","topic":"water tap faucet","w":3931,"h":2616,"tags":"faucet, sink, tap, tap water, flow, flowing water, fresh water, clean water, nature, wet, splashing, splash, water, fountain, water fountain","by":"JonasKIM","page":"https://pixabay.com/photos/faucet-sink-tap-tap-water-flow-3240211/"},{"id":"6862159","file":"photos/water/6862159.jpg","role":"item","topic":"hotel building","w":6000,"h":4000,"tags":"hotel, winter, season, accommodation, vacation, to travel, resort, historical, dr, hope, fighter nature, hotel, hotel, hotel, hotel, hotel","by":"Nordseher","page":"https://pixabay.com/photos/hotel-winter-season-accommodation-6862159/"},{"id":"2256489","file":"photos/water/2256489.jpg","role":"item","topic":"office building modern","w":4608,"h":3072,"tags":"architecture, skyscraper, glass facades, modern, facade, sky, building, düsseldorf, city, modern architecture, glass, modern building, nature, glass front, windows, glass windows, reflection, exterior, perspective, office building, urban, high, downtown, low angle shot, structure, mirroring","by":"652234","page":"https://pixabay.com/photos/architecture-skyscraper-2256489/"},{"id":"1048092","file":"photos/water/1048092.jpg","role":"item","topic":"office building modern","w":4608,"h":3456,"tags":"architecture, modern, building, facade, skyscraper, geometric, windows, glass windows, perspective, düsseldorf, office building, mirroring, reflection, architecture, building, building, building, building, building","by":"652234","page":"https://pixabay.com/photos/architecture-modern-building-facade-1048092/"},{"id":"3184798","file":"photos/water/3184798.jpg","role":"item","topic":"office building modern","w":6000,"h":4000,"tags":"skyscrapers, nature, singapore, city, sky, buildings, financial district, architecture, urban, high rise buildings","by":"cegoh","page":"https://pixabay.com/photos/skyscrapers-singapore-city-sky-3184798/"},{"id":"2693417","file":"photos/water/2693417.jpg","role":"item","topic":"property manager clipboard","w":3251,"h":4908,"tags":"clipboard, document, paper, clip, business, list, office, note, checklist, board, sheet, work, flat, page, blank, information, clipboard, clipboard, clipboard, clipboard, clipboard, list, list, list, checklist, checklist","by":"BRRT","page":"https://pixabay.com/photos/clipboard-document-paper-clip-2693417/"},{"id":"2668472","file":"photos/water/2668472.jpg","role":"item","topic":"laundromat washing machines","w":5472,"h":3648,"tags":"washing machine, laundry, tumble drier, housework, appliance, clean, wash, clothes, chores, dirty, household, dryer, cleaning, laundromat, detergent, domestic, washing, washday, washer, housekeeping, washing machine, washing machine, washing machine, washing machine, washing machine, laundry, laundry, laundry","by":"stevepb","page":"https://pixabay.com/photos/washing-machine-laundry-tumble-drier-2668472/"},{"id":"316579","file":"photos/water/316579.jpg","role":"item","topic":"shower water","w":1920,"h":1271,"tags":"rain, background, drop, free background, cool backgrounds, weather, water, storm, shower, 4k wallpaper, falling, pond, blue, abstract, impact, cold, hd wallpaper, 4k wallpaper 1920x1080, season, clear, full hd wallpaper, autumn, laptop wallpaper, beautiful wallpaper, drip, splashing, outdoors, splash, surface, downpour, desktop backgrounds, wet, mac wallpaper, liquid, wallpaper 4k, wallpaper hd, stormy, view, thirsty, circle, rippled, nature, wave, windows wallpaper, free wallpaper, blue background, blue water, blue rain, blue abstract, blue wave, blue storm, blue circle, blue waves, blue shower","by":"PublicDomainPictures","page":"https://pixabay.com/photos/rain-background-drop-weather-water-316579/"},{"id":"385506","file":"photos/water/385506.jpg","role":"item","topic":"calculator bills savings","w":5259,"h":3098,"tags":"calculator, calculation, insurance, finance, accounting, pen, fountain pen, investment, office, work, taxes, calculator, insurance, insurance, finance, finance, finance, finance, finance, accounting, accounting, accounting, investment, taxes","by":"stevepb","page":"https://pixabay.com/photos/calculator-calculation-insurance-385506/"},{"id":"2696219","file":"photos/water/2696219.jpg","role":"item","topic":"calculator bills savings","w":3871,"h":2583,"tags":"money, profit, finance, business, return, yield, financial, cash, currency, investment, banking, wealth, coin, economy, success, loan, salary, rich, credit, payment, savings, save, deposit, growth, income","by":"nattanan23","page":"https://pixabay.com/photos/money-profit-finance-business-2696219/"}]},"drinks":{"name":"Specialty drink cafés, coffee trailers and bakeries","photos":[{"id":"1869656","file":"photos/drinks/1869656.jpg","role":"hero","topic":"coffee shop counter barista","w":5616,"h":3744,"tags":"cafe, barista, coffee shop, counter, coffee machine, caffeine, interior design, interior decoration, indoors, menu, coffee menu, cafe, cafe, cafe, cafe, cafe, coffee shop, coffee shop, coffee shop, coffee shop, menu","by":"Pexels","page":"https://pixabay.com/photos/cafe-barista-coffee-shop-counter-1869656/"},{"id":"206142","file":"photos/drinks/206142.jpg","role":"hero","topic":"coffee shop counter barista","w":2500,"h":1662,"tags":"coffee, coffee grinds, cafe, coffee powder, ground coffee, grounded, aroma, fresh, brown coffee, coffee, coffee, coffee, coffee, coffee","by":"eliasfalla","page":"https://pixabay.com/photos/coffee-coffee-grinds-cafe-206142/"},{"id":"4618705","file":"photos/drinks/4618705.jpg","role":"hero","topic":"coffee shop counter barista","w":5992,"h":4000,"tags":"coffee, cup, caffeine, espresso, coffee cup, brown coffee, brown cup","by":"13758299","page":"https://pixabay.com/photos/coffee-cup-caffeine-espresso-4618705/"},{"id":"4343663","file":"photos/drinks/4343663.jpg","role":"hero","topic":"coffee neon sign","w":5184,"h":3456,"tags":"neon sign, coffee lovers, coffee, coffee shop, lettering, design, calligraphy, restaurant sign, advertising, coffee, coffee, coffee, coffee, coffee, coffee shop, coffee shop, coffee shop","by":"pixel2013","page":"https://pixabay.com/photos/neon-sign-coffee-lovers-coffee-4343663/"},{"id":"2425121","file":"photos/drinks/2425121.jpg","role":"hero","topic":"friends coffee cozy","w":4460,"h":2973,"tags":"merry christmas, man, woman, dog, pet, animal, pug, owners, couple, relationship, warm clothes, cozy, scarf, jackets, jeans, boots, fashion, people, happy, love, female, young, male, adult, caucasian, happiness, romantic, portrait, smile, smiling, girlfriend, date, boyfriend, together, person, lovers, sitting, relaxing, rustic, cushions, couch, laughing, enjoying, coffee","by":"5688709","page":"https://pixabay.com/photos/merry-christmas-man-woman-dog-pet-2425121/"},{"id":"624440","file":"photos/drinks/624440.jpg","role":"hero","topic":"heart latte","w":4926,"h":3284,"tags":"valentine's day, heart, cup, coffee, coffee cup, caffeine, hot coffee, nature, hot drink, hot beverage, heart shape, valentine, love, heart mug, snow, winter, steaming cup, romantic","by":"JillWellington","page":"https://pixabay.com/photos/valentines-day-heart-cup-coffee-624440/"},{"id":"4334647","file":"photos/drinks/4334647.jpg","role":"item","topic":"espresso machine","w":5760,"h":3840,"tags":"coffee, cappuccino, latte, espresso, americano, iced coffee, decaf, caffeinated coffee, barista, aftertaste, milk, coffee, coffee, coffee, coffee, coffee, espresso, espresso, espresso, barista","by":"13027327","page":"https://pixabay.com/photos/coffee-cappuccino-latte-espresso-4334647/"},{"id":"2600877","file":"photos/drinks/2600877.jpg","role":"item","topic":"espresso machine","w":4091,"h":2726,"tags":"coffeehouse, bar, shop, cafe, espresso, machine, cups, business, light, bulb, wall, store, menu, board, cafe, cafe, cafe, cafe, cafe, menu","by":"StockSnap","page":"https://pixabay.com/photos/coffeehouse-bar-shop-cafe-espresso-2600877/"},{"id":"8406187","file":"photos/drinks/8406187.jpg","role":"item","topic":"espresso machine","w":6240,"h":4160,"tags":"coffee, beans, caffeine, roasted, machine, business, aroma, coffee, business, business, business, business, business","by":"motomotosc","page":"https://pixabay.com/photos/coffee-beans-caffeine-roasted-8406187/"},{"id":"7454951","file":"photos/drinks/7454951.jpg","role":"item","topic":"espresso machine","w":4160,"h":6240,"tags":"cafe, coffee shop, vintage aesthetic, coffee maker, espresso coffee, bartending, relaxing space, cafe, cafe, cafe, cafe, coffee shop, coffee shop, coffee shop, coffee shop, coffee shop","by":"bbom100892","page":"https://pixabay.com/photos/cafe-coffee-shop-vintage-aesthetic-7454951/"},{"id":"2139592","file":"photos/drinks/2139592.jpg","role":"item","topic":"pour over coffee","w":3968,"h":2788,"tags":"coffee, cup, filter, coffee filter, paper filter, brewed coffee, black coffee, caffeine, coffee break, morning coffee, coffee cup, cup of coffee, drink, beverage, aroma, stimulant, tableware, red cup, coffee, coffee, coffee, coffee, coffee","by":"pixel2013","page":"https://pixabay.com/photos/coffee-cup-filter-coffee-filter-2139592/"},{"id":"869203","file":"photos/drinks/869203.jpg","role":"item","topic":"pour over coffee","w":4026,"h":2684,"tags":"coffee, coffee cup, drink, beverage, consume, cup, hot, morning, breakfast, gray coffee, gray cup, gray breakfast, gray morning","by":"Foundry","page":"https://pixabay.com/photos/coffee-drink-beverage-consume-cup-869203/"},{"id":"3759005","file":"photos/drinks/3759005.jpg","role":"item","topic":"pour over coffee","w":4243,"h":5304,"tags":"coffee, espresso, latte, hand, drops, glass, barista, black wallpaper, black, coffee, coffee, coffee, coffee, coffee, espresso, barista, black wallpaper, black wallpaper","by":"poedynchuk","page":"https://pixabay.com/photos/coffee-espresso-latte-hand-drops-3759005/"},{"id":"5252372","file":"photos/drinks/5252372.jpg","role":"item","topic":"pour over coffee","w":3731,"h":5597,"tags":"coffee, black coffee, drip coffee, coffee, coffee, coffee, coffee, coffee, drip coffee, drip coffee, drip coffee, drip coffee","by":"DiDeeChen","page":"https://pixabay.com/photos/coffee-black-coffee-drip-coffee-5252372/"},{"id":"171653","file":"photos/drinks/171653.jpg","role":"item","topic":"coffee beans roasted","w":3454,"h":2302,"tags":"coffee, coffee beans, cup, coffee cup, caffeine, coffee seeds, coffee, coffee, coffee, coffee, coffee","by":"Christoph","page":"https://pixabay.com/photos/coffee-coffee-beans-cup-coffee-cup-171653/"},{"id":"1291656","file":"photos/drinks/1291656.jpg","role":"item","topic":"coffee beans roasted","w":6016,"h":4000,"tags":"coffee beans, coffee, roasted, caffeine, beans, brown coffee beans, aromatic, food, coffee, coffee, coffee, coffee, coffee","by":"Alexas_Fotos","page":"https://pixabay.com/photos/coffee-beans-coffee-roasted-1291656/"},{"id":"2258839","file":"photos/drinks/2258839.jpg","role":"item","topic":"coffee beans roasted","w":5235,"h":3278,"tags":"coffee beans, cup, coffee cup, coffee, beans, caffeine, mug, glass cup, glass mug, coffee mug, roasted, cafe, food, stimulant, coffee, coffee, coffee, coffee, coffee, cafe","by":"pixel2013","page":"https://pixabay.com/photos/coffee-beans-cup-coffee-cup-coffee-2258839/"},{"id":"6603499","file":"photos/drinks/6603499.jpg","role":"item","topic":"coffee beans roasted","w":6240,"h":4160,"tags":"coffee beans, coffee, roasted coffee beans, macro, coffee, coffee, coffee, coffee, coffee","by":"NickyPe","page":"https://pixabay.com/photos/coffee-beans-coffee-6603499/"},{"id":"2306471","file":"photos/drinks/2306471.jpg","role":"item","topic":"latte art cup","w":7952,"h":5304,"tags":"coffee, pen, notebook, open notebook, empty notebook, caffeine, cup, cafe, coffee cup, latte, latte art, cappuccino, morning coffee, coffee break, beverage, coffee, coffee, coffee, coffee, coffee","by":"Engin_Akyurt","page":"https://pixabay.com/photos/coffee-pen-notebook-open-notebook-2306471/"},{"id":"2242213","file":"photos/drinks/2242213.jpg","role":"item","topic":"latte art cup","w":5997,"h":4000,"tags":"coffee, wallpaper 4k, 4k wallpaper 1920x1080, workspace, wallpaper hd, free background, cafe, drink, hd wallpaper, notebook, beverage, free wallpaper, beautiful wallpaper, laptop wallpaper, mac wallpaper, flat lay, windows wallpaper, 4k wallpaper, copy space, full hd wallpaper, desktop backgrounds, background, cool backgrounds, wallpaper","by":"Engin_Akyurt","page":"https://pixabay.com/photos/coffee-workspace-cafe-drink-2242213/"},{"id":"2608864","file":"photos/drinks/2608864.jpg","role":"item","topic":"latte art cup","w":7477,"h":4987,"tags":"coffee, cup, cappuccino, latte, latte art, coffee cup, caffeine, morning coffee, coffee break, drink, beverage, hot, cafe, morning, coffee, coffee, coffee, coffee, coffee, cafe, morning","by":"Engin_Akyurt","page":"https://pixabay.com/photos/coffee-cup-cappuccino-latte-2608864/"},{"id":"3120750","file":"photos/drinks/3120750.jpg","role":"item","topic":"latte art cup","w":5616,"h":3744,"tags":"coffee, drink, hot, cup, cappuccino, coffee cup, saucer, caffeine, food","by":"grafmex","page":"https://pixabay.com/photos/coffee-drink-hot-cup-cappuccino-3120750/"},{"id":"1589012","file":"photos/drinks/1589012.jpg","role":"item","topic":"cafe table pastries","w":3172,"h":3965,"tags":"cake, dessert, coffee, snacks, treats, food, drinks, beverage, table, breakfast, cake, cake, cake, cake, dessert, dessert, dessert, coffee, coffee, food, breakfast, breakfast, breakfast, breakfast, breakfast","by":"karriezhu","page":"https://pixabay.com/photos/cake-dessert-coffee-snacks-treats-1589012/"},{"id":"6600644","file":"photos/drinks/6600644.jpg","role":"item","topic":"iced coffee","w":6000,"h":4000,"tags":"coffee, hands, preparation, pouring, brewed, caffeine, drink, beverage, coffee, coffee, coffee, coffee, coffee","by":"chico明","page":"https://pixabay.com/photos/coffee-hands-preparation-pouring-6600644/"},{"id":"4648041","file":"photos/drinks/4648041.jpg","role":"item","topic":"iced coffee dessert","w":6720,"h":4480,"tags":"coffee, ice cream, cookies, cafe, beans, coffee beans, aromatic, dark, café, coffee cup, enjoy, beverage, caffeine, roasted, drink, aroma, brown, cup, food, espresso, hot, fresh, black","by":"DanielTwal","page":"https://pixabay.com/photos/coffee-ice-cream-cookies-cafe-4648041/"},{"id":"4862622","file":"photos/drinks/4862622.jpg","role":"item","topic":"iced coffee milk","w":3674,"h":5653,"tags":"coffee, milk, cappuccino, drink, café, mug, hot, caffeine, coffee cup, espresso, scent, breakfast","by":"Be_Stasya","page":"https://pixabay.com/photos/coffee-milk-cappuccino-drink-caf%C3%A9-4862622/"},{"id":"2293337","file":"photos/drinks/2293337.jpg","role":"item","topic":"strawberry splash","w":3000,"h":1650,"tags":"strawberry, splash, water, clean water, splashing, liquid, aqua, fresh, nature, freshness, ripe, red, berry, fruit, close up","by":"atlantis0815","page":"https://pixabay.com/photos/strawberry-splash-water-clean-water-2293337/"},{"id":"2539163","file":"photos/drinks/2539163.jpg","role":"item","topic":"lemonade lemon","w":6000,"h":4000,"tags":"lemons, lemonade, submerged, lemon slices, drink, citrus fruits, refreshment, underwater, air bubbles, yellow, angry, vitamin c, vitamins, soft drink, close up, lemons, lemons, lemonade, lemonade, drink, underwater, yellow, yellow, yellow, vitamin c, vitamin c, vitamin c, vitamin c, vitamin c, vitamins, vitamins","by":"ulleo","page":"https://pixabay.com/photos/lemons-lemonade-submerged-2539163/"},{"id":"1444025","file":"photos/drinks/1444025.jpg","role":"item","topic":"lemonade lemon","w":3500,"h":2333,"tags":"lemon, lemonade, mac wallpaper, cool backgrounds, wallpaper 4k, fruit, sour, slice of lemon, windows wallpaper, beautiful wallpaper, wallpaper hd, 4k wallpaper, laptop wallpaper, desktop backgrounds, 4k wallpaper 1920x1080, full hd wallpaper, hd wallpaper, free wallpaper, citrus fruit, free background, refreshment, background, drink, yellow fruits","by":"51581","page":"https://pixabay.com/photos/lemon-lemonade-fruit-sour-1444025/"},{"id":"1330459","file":"photos/drinks/1330459.jpg","role":"item","topic":"strawberries bowl","w":6016,"h":4016,"tags":"strawberry, fruit, bowl, food, berry, red fruit, natural product, organic, natural, juicy, ripe, sweet, tasty, closeup, strawberry, strawberry, strawberry, strawberry, strawberry, fruit, food","by":"Pezibear","page":"https://pixabay.com/photos/strawberry-fruit-bowl-food-berry-1330459/"},{"id":"4402053","file":"photos/drinks/4402053.jpg","role":"item","topic":"iced milk tea","w":3456,"h":5184,"tags":"boba, pearl milk tea, boba milk tea, boba tea, tapioca tea, boba, boba, boba tea, boba tea, boba tea, boba tea, boba tea","by":"knd61","page":"https://pixabay.com/photos/boba-pearl-milk-tea-boba-milk-tea-4402053/"},{"id":"3131322","file":"photos/drinks/3131322.jpg","role":"item","topic":"strawberries and cream drink","w":4803,"h":7197,"tags":"drink, glass, fruit, food, cup containers, tea, pearl milk tea, bubble tea, pearl, taiwan tea, milk tea, bubble tea, bubble tea, bubble tea, bubble tea, bubble tea, milk tea","by":"sam651030","page":"https://pixabay.com/photos/drink-glass-fruit-food-3131322/"},{"id":"2708034","file":"photos/drinks/2708034.jpg","role":"item","topic":"pouring hot drinks","w":3008,"h":2000,"tags":"women, tea, cafe, drink tea, japan, tokyo, chai, comfortable, japanese, wabisabi, chai, chai, chai, chai, chai","by":"Qogwarp","page":"https://pixabay.com/photos/women-tea-cafe-drink-tea-japan-2708034/"},{"id":"563799","file":"photos/drinks/563799.jpg","role":"item","topic":"iced tea lemon","w":2720,"h":4080,"tags":"lemon tea, ice drink, summer drink, lemon tea, lemon tea, lemon tea, lemon tea, lemon tea","by":"shixugang","page":"https://pixabay.com/photos/lemon-tea-ice-drink-summer-drink-563799/"},{"id":"2253430","file":"photos/drinks/2253430.jpg","role":"item","topic":"smoothies juice","w":3705,"h":2083,"tags":"smoothies, juice, fruit, ripe, bio, healthy, colorful, multicoloured, straws, glasses, kumquat, homemade, fresh, vegan, vegetarian, fructose, diet, detox, detoxify, spa, vital substances, food, nourishment, vitamins, smoothies, juice, juice, juice, juice, juice","by":"silviarita","page":"https://pixabay.com/photos/smoothies-juice-fruit-ripe-bio-2253430/"},{"id":"352475","file":"photos/drinks/352475.jpg","role":"item","topic":"cupcakes bakery","w":5184,"h":3456,"tags":"dessert, cupcakes, food, strawberry cupcakes, snacks, sweets, confections, baked goods, pastries, tasty, delicious, cake stand, close up, eat, food photography, dessert, dessert, cupcakes, food, food, food, food, food, sweets","by":"HomeMaker","page":"https://pixabay.com/photos/dessert-cupcakes-food-352475/"},{"id":"5978060","file":"photos/drinks/5978060.jpg","role":"item","topic":"cupcakes bakery","w":3072,"h":3840,"tags":"shanghai, cupcakes, sieve, sugar, china, blueberry, pastry, sweet, sugar-coat, sugary, fruit, food, cupcakes, sugar, sugar, sugar, sugar, sugar, china, pastry, pastry, food","by":"ivyeirlys","page":"https://pixabay.com/photos/shanghai-cupcakes-sieve-sugar-5978060/"},{"id":"279523","file":"photos/drinks/279523.jpg","role":"item","topic":"cupcakes bakery","w":3092,"h":1843,"tags":"cupcake, cake, sweets, sugar, carrot, creme, candy, dough, dessert, brown, pastry, cupcake, cupcake, cake, cake, cake, cake, cake","by":"GLady","page":"https://pixabay.com/photos/cupcake-cake-sweets-sugar-carrot-279523/"},{"id":"1417494","file":"photos/drinks/1417494.jpg","role":"item","topic":"cinnamon rolls","w":2592,"h":1728,"tags":"cinnamon rolls, bread, spiral, baking, pastries, tasty, morning, breakfast, sweets, food, close up, freshly baked, homemade, cinnamon rolls, bread, bread, bread, bread, bread, pastries, breakfast, breakfast, breakfast, breakfast","by":"summerstock","page":"https://pixabay.com/photos/cinnamon-rolls-bread-spiral-baking-1417494/"},{"id":"4719023","file":"photos/drinks/4719023.jpg","role":"item","topic":"cinnamon rolls","w":5434,"h":3737,"tags":"cinnamon roll, cinnamon, bread, pastry, rolls, sweet, food, cinnamon roll, cinnamon roll, cinnamon roll, cinnamon, bread, bread, bread, bread, bread, pastry","by":"ClickerHappy","page":"https://pixabay.com/photos/cinnamon-roll-cinnamon-bread-pastry-4719023/"},{"id":"4421067","file":"photos/drinks/4421067.jpg","role":"item","topic":"cinnamon rolls","w":4516,"h":2853,"tags":"cinnamon rolls, dessert, pastry, sweet, baked, bun, food, cinnamon rolls, cinnamon rolls, cinnamon rolls, cinnamon rolls, cinnamon rolls, dessert, pastry, pastry","by":"monicore","page":"https://pixabay.com/photos/cinnamon-rolls-dessert-pastry-sweet-4421067/"},{"id":"7448102","file":"photos/drinks/7448102.jpg","role":"item","topic":"cinnamon rolls","w":6000,"h":4000,"tags":"pastries, cinnamon rolls, bread, snack, puff pastries, cakes, cinnamon, cinnamon sticks, sweetness, food, cinnamon rolls, cinnamon rolls, cinnamon rolls, cinnamon rolls, cinnamon rolls, cinnamon","by":"RitaE","page":"https://pixabay.com/photos/pastries-cinnamon-rolls-bread-snack-7448102/"},{"id":"3984154","file":"photos/drinks/3984154.jpg","role":"item","topic":"cookies baking","w":4519,"h":3200,"tags":"valentine's day, valentine, cookies, hearts, love, romantic, romance, heart, pink, wedding, sweets, flat lay, happyvalentine's, valentine's day, valentine's day, valentine's day, valentine's day, valentine, valentine, valentine, cookies, cookies, cookies, cookies, cookies, hearts, hearts, love, heart, heart, heart, wedding","by":"JillWellington","page":"https://pixabay.com/photos/valentines-day-valentine-cookies-3984154/"},{"id":"756601","file":"photos/drinks/756601.jpg","role":"item","topic":"cookies baking","w":4160,"h":2800,"tags":"cookie, bake, pastry, pastries, sweet, baked, homemade, small cookie, biscuit, food, food photography, cookie, food, food, food, food, food","by":"congerdesign","page":"https://pixabay.com/photos/cookie-bake-pastry-pastries-sweet-756601/"},{"id":"1886760","file":"photos/drinks/1886760.jpg","role":"item","topic":"cookies baking","w":5824,"h":3882,"tags":"cookies, pastries, biscuits, cinnamon stars, glaze, christmas cookies, christmas, christmas biscuits, christmas time, holiday pastries, sweet, homemade, confectionery, food, cookies, cookies, christmas, christmas, christmas, christmas, christmas","by":"LUM3N","page":"https://pixabay.com/photos/cookies-pastries-biscuits-1886760/"},{"id":"1452178","file":"photos/drinks/1452178.jpg","role":"item","topic":"muffins","w":3888,"h":2592,"tags":"cupcakes, chocolate, dark, dessert, food, sweet, cake, delicious, treat, tasty, pastry, muffin, snack, baked, baking, confectionery, confection, cocoa, brown food, brown cake, brown dark, brown dessert, brown chocolate, chocolate, chocolate, dessert, cake, cake, cake, cake, cake, muffin, baking","by":"ponce_photography","page":"https://pixabay.com/photos/cupcakes-chocolate-dark-dessert-1452178/"},{"id":"3257019","file":"photos/drinks/3257019.jpg","role":"item","topic":"muffins","w":6000,"h":4000,"tags":"cakes, dessert, sugar, muffin, cupcake, sweets, sprinkles, bakery, pink, meal, cakes, cakes, cakes, cakes, sugar, sugar, cupcake, cupcake, cupcake, bakery, bakery, bakery, bakery, bakery","by":"Jacob-Medien","page":"https://pixabay.com/photos/cakes-dessert-sugar-muffin-cupcake-3257019/"},{"id":"3510308","file":"photos/drinks/3510308.jpg","role":"item","topic":"muffins","w":3998,"h":3675,"tags":"muffin, cake, tart, dessert, cupcake, sweet, delicious, bake, confectionery, treat, calories, delicacy, berries, fruits, small cakes, currant red, sugar, pastries, food, cake, cake, cake, cake, cake","by":"RitaE","page":"https://pixabay.com/photos/muffin-cake-tart-dessert-cupcake-3510308/"},{"id":"1329679","file":"photos/drinks/1329679.jpg","role":"item","topic":"muffins","w":4828,"h":3219,"tags":"muffins, baking, cupcake, delicious, homemade, flavors, snack, food, cake, bakery, baked, fattening, calories, dessert, blueberrys, homestyle, cupcake, cake, cake, cake, cake, cake, bakery","by":"btfrewinphotography","page":"https://pixabay.com/photos/muffins-baking-cupcake-delicious-1329679/"},{"id":"3571266","file":"photos/drinks/3571266.jpg","role":"item","topic":"charcuterie board","w":4496,"h":3000,"tags":"loaf, bread time, cheese, melon, ham, grapes, tomatoes, meal, food, nourishment, baked goods, hunger, kitchen, cooking food photo, cheese, cheese, cheese, cheese, cheese, hunger, hunger","by":"RitaE","page":"https://pixabay.com/photos/loaf-bread-time-cheese-melon-ham-3571266/"},{"id":"1280538","file":"photos/drinks/1280538.jpg","role":"item","topic":"coffee to go cup","w":2938,"h":1953,"tags":"workspace, coffee, laptop, macbook, eyeglasses, coffee cup, flat lay, cup, gadgets, technology, wireless, internet, wooden table, computer, work place, mockup, coffee, laptop, laptop, laptop, technology, technology, computer, computer, computer, computer, computer","by":"freephotocc","page":"https://pixabay.com/photos/workspace-coffee-laptop-macbook-1280538/"},{"id":"2714970","file":"photos/drinks/2714970.jpg","role":"item","topic":"coffee to go cup","w":4000,"h":2666,"tags":"coffee, coffee cup, cup, drink, beans, coffee beans, wooden table, still life, cafe, aroma, coffee break, black coffee, brewed coffee, hot coffee, caffeine, morning coffee, coffee, coffee, coffee, coffee, coffee","by":"cocoparisienne","page":"https://pixabay.com/photos/coffee-coffee-cup-cup-drink-beans-2714970/"},{"id":"1276778","file":"photos/drinks/1276778.jpg","role":"item","topic":"coffee to go cup","w":2883,"h":1754,"tags":"coffee, cup of coffee, lifestyle, cup, coffee cup, breakfast, relax, morning, tumblr wallpaper","by":"freephotocc","page":"https://pixabay.com/photos/coffee-cup-of-coffee-lifestyle-cup-1276778/"},{"id":"2527433","file":"photos/drinks/2527433.jpg","role":"item","topic":"gift card present","w":6000,"h":4000,"tags":"map, postcard, congratulation, date of birth, coupon, gift, give a gift, gift voucher, invitation, heart, happy mothers day, love, valentine's day","by":"Bru-nO","page":"https://pixabay.com/photos/map-postcard-congratulation-2527433/"},{"id":"5954177","file":"photos/drinks/5954177.jpg","role":"item","topic":"gift card present","w":5993,"h":4000,"tags":"valentine, desktop backgrounds, free wallpaper, gifts, 4k wallpaper, happy birthday, flat lay, hearts, gift boxes, presents, full hd wallpaper, surprise, wallpaper hd, 4k wallpaper 1920x1080, beautiful wallpaper, free background, windows wallpaper, anniversary, hd wallpaper, valentine's day, mac wallpaper, romantic, romance, love, cool backgrounds, festive, celebration, wallpaper 4k, card, greeting card, laptop wallpaper, background","by":"waichi2021","page":"https://pixabay.com/photos/valentine-gifts-flat-lay-hearts-5954177/"},{"id":"2478096","file":"photos/drinks/2478096.jpg","role":"item","topic":"gift card present","w":2218,"h":1415,"tags":"date of birth, gift, greeting card, ribbon, give a gift, wrapped up, packed up, parcel, surprise, fixed, gift wrapping, packaging, celebration, regards, wood, fund, happy mothers day, structure","by":"stux","page":"https://pixabay.com/photos/date-of-birth-gift-greeting-card-2478096/"}]}}`),updated:`2026-11-15`,note:`Picked by Claude from the photo robot's candidates on 2026-11-15. Running the robot again replaces them.`},q=(function(){var e=n.esc,t={hero:`Hero banner`,tiles:`Card grid`,feature:`Featured story`,list:`Link list`,text:`Text block`,stats:`Numbers`,gallery:`Gallery`,testimonial:`Quotes`,cta:`Call to action`,contact:`Contact details`,videos:`Video gallery`,podcast:`Podcasts / audio`,pagehead:`Page header`,menu:`Menu with prices`,booking:`Booking and service area`,products:`Products with prices`},r={bar:{name:`Links bar`,desc:`Links in a row. Groups open as dropdowns.`,vps:[`desktop`,`tablet`]},mega:{name:`Mega menu`,desc:`Main links plus one big panel showing every group.`,vps:[`desktop`]},split:{name:`Split with centred logo`,desc:`Logo in the middle, links on both sides.`,vps:[`desktop`,`tablet`]},hamburger:{name:`Menu button`,desc:`A single Menu button that opens the full list.`,vps:[`desktop`,`tablet`,`phone`]},bottom:{name:`Bottom tab bar`,desc:`App-style tabs at the bottom of the screen.`,vps:[`tablet`,`phone`]}},i=[{k:`news`,videos:`lead`,name:`Newsroom`,desc:`Newspaper rules, serif headlines and a big lead story.`,hero:`editorial`,tiles:`rule`,feature:`wide`,menus:[`bar`,`mega`,`split`,`hamburger`]},{k:`app`,videos:`grid`,name:`App grid`,desc:`Rounded tiles you can tap, like a phone home screen.`,hero:`split`,tiles:`app`,feature:`card`,menus:[`bar`,`mega`,`split`,`hamburger`]},{k:`mag`,videos:`row`,name:`Magazine`,desc:`Full-width photo opener and a mixed-size card mosaic.`,hero:`overlay`,tiles:`bento`,feature:`split`,menus:[`bar`,`mega`,`hamburger`]},{k:`min`,videos:`grid`,name:`Minimal`,desc:`Lots of white space, centred text and simple lists.`,hero:`center`,tiles:`list`,feature:`split`,menus:[`bar`,`split`,`hamburger`],no:[`gallery`]},{k:`bold`,videos:`row`,name:`Bold blocks`,desc:`Strong colour bands and icon cards.`,hero:`band`,tiles:`icons`,feature:`wide`,menus:[`bar`,`mega`,`hamburger`],bands:!0},{k:`portal`,videos:`lead`,name:`Community portal`,desc:`A dark welcome panel with search-style shortcuts.`,hero:`portal`,tiles:`icons`,feature:`card`,menus:[`mega`,`bar`,`hamburger`]},{k:`story`,videos:`lead`,name:`Storyteller`,desc:`Photo-led, long-form pages for telling a story.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`split`,`bar`,`hamburger`],maxTiles:6},{k:`board`,videos:`grid`,name:`Notice board`,desc:`Compact, two-column lists for lots of links.`,hero:`none`,tiles:`cols`,feature:`card`,menus:[`mega`,`bar`],need:[`list`,`tiles`]},{k:`tide`,videos:`grid`,name:`Tide`,desc:`Airy and rounded: a floating menu, a big soft hero panel and pill buttons.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Fraunces`,hcat:`r`,hw:600,b:`Inter`,bcat:`s`}},{k:`ember`,wordmark:1,videos:`lead`,name:`Ember`,desc:`Dark and warm, like a candle-lit dining room. Elegant serif type and a menu-style list.`,hero:`overlay`,tiles:`cols`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],dark:1,gf:{h:`Playfair Display`,hcat:`r`,hw:600,b:`Karla`,bcat:`s`}},{k:`folio`,videos:`lead`,name:`Folio`,desc:`A fashion-magazine look: giant headlines, numbered sections and fine rules.`,hero:`editorial`,tiles:`rule`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Instrument Serif`,hcat:`r`,hw:400,b:`Inter Tight`,bcat:`s`}},{k:`block`,videos:`grid`,name:`Block party`,desc:`Bold outlines, hard shadows and loud colour. Impossible to ignore.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Space Grotesk`,hcat:`s`,hw:700,b:`Space Grotesk`,bcat:`s`}},{k:`bento`,videos:`grid`,name:`Bento`,desc:`Everything sits in neat rounded panels, like a tidy lunch box.`,hero:`split`,tiles:`bento`,feature:`card`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Manrope`,hcat:`s`,hw:800,b:`Inter`,bcat:`s`}},{k:`craft`,videos:`grid`,name:`Handmade`,desc:`Warm and crafted: arched pictures, stitched cards and a scalloped edge.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,gf:{h:`Young Serif`,hcat:`r`,hw:400,b:`Nunito Sans`,bcat:`s`}},{k:`glow`,wordmark:1,videos:`grid`,name:`Glow`,desc:`Dark and modern with soft coloured light and glowing buttons.`,hero:`center`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],dark:2,gf:{h:`Sora`,hcat:`s`,hw:700,b:`Inter`,bcat:`s`}},{k:`swiss`,videos:`grid`,name:`Swiss grid`,desc:`Strict grid, huge type and section labels in their own column.`,hero:`editorial`,tiles:`rule`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Archivo`,hcat:`s`,hw:800,b:`Archivo`,bcat:`s`}},{k:`retro`,videos:`row`,name:`Sunny retro`,desc:`A cheerful 70s feel: chunky type, stripes and a sunburst.`,hero:`center`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],gf:{h:`Bricolage Grotesque`,hcat:`s`,hw:800,b:`DM Sans`,bcat:`s`}},{k:`lens`,videos:`row`,name:`Lens`,desc:`Photo first: a full-screen opener, picture cards and an edge-to-edge gallery.`,hero:`overlay`,tiles:`cards`,feature:`wide`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,gf:{h:`Outfit`,hcat:`s`,hw:600,b:`Outfit`,bcat:`s`}},{k:`hearth`,wordmark:1,videos:`lead`,name:`Hearth`,desc:`Flagship for cafés and restaurants: a full-screen food photo, a menu with prices and a warm, elegant feel.`,hero:`overlay`,tiles:`menu`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Cormorant Garamond`,hcat:`r`,hw:600,b:`Jost`,bcat:`s`}},{k:`volt`,wordmark:1,videos:`grid`,name:`Volt`,desc:`Flagship for trades and services: bold and trustworthy, with service cards, big numbers and a strong call to book.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Barlow Condensed`,hcat:`s`,hw:700,b:`Barlow`,bcat:`s`}},{k:`loom`,wordmark:1,videos:`grid`,name:`Loom`,desc:`Flagship for makers and craft shops: a product grid, an arched hero and a hand-stitched feel.`,hero:`split`,tiles:`shop`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`DM Serif Display`,hcat:`r`,hw:400,b:`Work Sans`,bcat:`s`}},{k:`bloom`,wordmark:1,videos:`grid`,name:`Bloom`,desc:`Flagship for salons and beauty: elegant type, a price list, a booking card and a lookbook gallery.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Bodoni Moda`,hcat:`r`,hw:500,b:`Manrope`,bcat:`s`}},{k:`pulse`,wordmark:1,videos:`grid`,name:`Pulse`,desc:`Flagship for gyms and fitness: dark, loud and full of energy, with a class schedule and memberships.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:2,gf:{h:`Anton`,hcat:`s`,hw:400,b:`Inter`,bcat:`s`}},{k:`commons`,wordmark:1,videos:`grid`,name:`Commons`,desc:`Flagship for community organizations and band offices: clear, welcoming and easy to read, with notices and programs.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Merriweather`,hcat:`r`,hw:700,b:`Source Sans 3`,bcat:`s`}},{k:`council`,wordmark:1,videos:`grid`,name:`Council`,desc:`For consulting firms that work with government: formal, credible and easy to scan, with credentials up front.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Libre Baskerville`,hcat:`r`,hw:700,b:`IBM Plex Sans`,bcat:`s`}},{k:`meridian`,wordmark:1,videos:`grid`,name:`Meridian`,desc:`For modern consultancies: a dark, confident opener, glowing step cards and services that read like a pitch deck.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Plus Jakarta Sans`,hcat:`s`,hw:800,b:`Plus Jakarta Sans`,bcat:`s`}},{k:`bridge`,wordmark:1,videos:`grid`,name:`Bridge`,desc:`For people-first firms: warm photography, a step-by-step timeline and a welcoming, human tone.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Lora`,hcat:`r`,hw:600,b:`Figtree`,bcat:`s`}},{k:`convoy`,wordmark:1,videos:`grid`,name:`Convoy`,desc:`For movers and trucking: loud condensed type, road-stripe accents, big numbers and a quote button that never leaves the screen.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Barlow Condensed`,hcat:`s`,hw:800,b:`Barlow`,bcat:`s`}},{k:`homeward`,wordmark:1,videos:`grid`,name:`Homeward`,desc:`For family movers: friendly and reassuring, with rounded photos, a three-step moving plan and a quote card up front.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Nunito`,hcat:`s`,hw:800,b:`Nunito Sans`,bcat:`s`}},{k:`freight`,mono:`IBM Plex Mono`,wordmark:1,videos:`grid`,name:`Freight`,desc:`For logistics, storage and delivery firms: a blueprint grid, data-style numbers and services laid out like a shipping manifest.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Space Grotesk`,hcat:`s`,hw:700,b:`IBM Plex Sans`,bcat:`s`}},{k:`timber`,wordmark:1,videos:`grid`,name:`Timber`,desc:`For northern lodges and fishing camps: deep forest colours, slab-serif type, a full-screen lake photo and cabin rates like a trail sign.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:1,gf:{h:`Zilla Slab`,hcat:`r`,hw:700,b:`Source Sans 3`,bcat:`s`}},{k:`shoreline`,wordmark:1,videos:`grid`,name:`Shoreline`,desc:`For lake resorts and cottages: light and calm, elegant italic headings, a wave under the opener and big soft photos.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Cormorant Garamond`,hcat:`r`,hw:600,b:`Jost`,bcat:`s`}},{k:`basecamp`,wordmark:1,videos:`grid`,name:`Basecamp`,desc:`For outfitters and adventure tourism: topographic-map backgrounds, badge labels and bold activity cards.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Rubik`,hcat:`s`,hw:800,b:`Rubik`,bcat:`s`}},{k:`reel`,wordmark:1,videos:`lead`,name:`Reel`,desc:`For film and video studios: cinematic and dark, a letterboxed 2.39:1 opener with viewfinder marks, festival laurels, numbered title cards, a screenings listing, a rate card, credits that roll and stills on a strip of 35 mm film.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:2,gf:{h:`DM Serif Display`,hcat:`r`,hw:400,b:`Inter Tight`,bcat:`s`}},{k:`marquee`,wordmark:1,videos:`grid`,name:`Marquee`,desc:`For filmmakers and festivals: poster-style type, film posters as cards, laurels for every selection and a bright festival feel.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Syne`,hcat:`s`,hw:800,b:`Space Grotesk`,bcat:`s`}},{k:`frame`,wordmark:1,videos:`row`,name:`Frame`,desc:`For photographers and directors: a quiet gallery wall with wide stills, numbered projects and elegant italic type.`,hero:`editorial`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Newsreader`,hcat:`r`,hw:500,b:`Inter`,bcat:`s`}},{k:`harbour`,wordmark:1,videos:`grid`,name:`Harbour`,desc:`For marinas and yacht clubs: classic navy and white, signal-flag accents, GPS coordinates up top and a rate card like a harbour board.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Spectral`,hcat:`r`,hw:600,b:`Work Sans`,bcat:`s`}},{k:`waterline`,wordmark:1,videos:`grid`,name:`Waterline`,desc:`For boat rentals and waterfront businesses: bright and modern, a wave line under the opener, amenity chips and a quick booking card.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Lexend`,hcat:`s`,hw:700,b:`Lexend`,bcat:`s`}},{k:`dockside`,wordmark:1,videos:`grid`,name:`Dockside`,desc:`For summer marinas, resorts and outfitters: sun-warmed colours, dock-plank stripes, tag-shaped cards and snapshot photos.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Gabarito`,hcat:`s`,hw:800,b:`Figtree`,bcat:`s`}},{k:`press`,wordmark:1,videos:`grid`,name:`Press`,desc:`For print shops and screen printers: halftone dots, off-register colour headlines, registration marks and loud poster type.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Big Shoulders Display`,hcat:`s`,hw:900,b:`Karla`,bcat:`s`}},{k:`stitch`,wordmark:1,videos:`grid`,name:`Stitch`,desc:`For embroidery, sewing and team uniforms: stitched borders, patch-shaped badges and a sturdy workwear feel.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Chivo`,hcat:`s`,hw:800,b:`Chivo`,bcat:`s`}},{k:`merch`,wordmark:1,videos:`grid`,name:`Merch`,desc:`For apparel and promo product shops: a clean storefront with product prices, category chips and an order-in-three-steps strip.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Onest`,hcat:`s`,hw:700,b:`Onest`,bcat:`s`}},{k:`taproom`,wordmark:1,videos:`grid`,name:`Taproom`,desc:`For sports bars and pubs: dark and lively, a scoreboard of numbers, a chalkboard menu, game-night listings and jersey-stripe banners.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:2,gf:{h:`Teko`,hcat:`s`,hw:600,b:`Barlow`,bcat:`s`}},{k:`roadside`,mono:`Yellowtail`,monoW:400,wordmark:1,videos:`grid`,name:`Roadside`,desc:`For motels, diners and highway stops: a retro sunburst opener, neon script, highway-shield numbers, a diner menu and a room-key booking card.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Righteous`,hcat:`d`,hw:400,b:`Nunito Sans`,bcat:`s`}},{k:`patio`,wordmark:1,videos:`grid`,name:`Patio`,desc:`For riverside restaurants, inns and patios: a scalloped awning, a photo opener with a menu-card welcome, plate-round numbers and a striped booking card.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Fraunces`,hcat:`r`,hw:600,b:`DM Sans`,bcat:`s`}},{k:`bedrock`,wordmark:1,videos:`grid`,name:`Bedrock`,desc:`For civil and excavation contractors: a full-screen site photo with a hazard-stripe edge, a spec-sheet of numbers, a numbered capability list and project cards.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Saira Condensed`,hcat:`s`,hw:800,b:`Barlow`,bcat:`s`}},{k:`breakwater`,wordmark:1,videos:`grid`,name:`Breakwater`,desc:`For shoreline, landscape and environmental contractors: calm water colours, stacked armour-stone shapes, a water-line band and stone-shaped bullets.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Young Serif`,hcat:`r`,hw:400,b:`Instrument Sans`,bcat:`s`}},{k:`rebar`,wordmark:1,videos:`grid`,name:`Rebar`,desc:`For concrete, foundation and septic contractors: a rebar-mesh opener with orange safety caps, concrete-block numbers with form-tie holes and cap-dot lists.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Familjen Grotesk`,hcat:`s`,hw:700,b:`Familjen Grotesk`,bcat:`s`}},{k:`trapline`,wordmark:1,videos:`grid`,name:`Trapline`,desc:`For trappers and wildlife control: a dark bush-at-dawn opener, a trail of tracks between sections, numbers on pelt tags and a price list for tanning and sharpening.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Zilla Slab`,hcat:`r`,hw:700,b:`Work Sans`,bcat:`s`}},{k:`tannery`,wordmark:1,videos:`grid`,name:`Tannery`,desc:`For tanners and leather workers: warm buckskin colours, the opening photo stretched like a hide on a frame, saddle-stitched cards and an oval maker’s stamp.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Alegreya`,hcat:`r`,hw:800,b:`Alegreya Sans`,bcat:`s`}},{k:`birchbark`,wordmark:1,videos:`grid`,name:`Birchbark`,desc:`For knowledge keepers, carvers and land-based teachers: birch-bark bands, an arched photo, cedar-green accents and teachings set out like a field journal.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Spectral`,hcat:`r`,hw:600,b:`Source Sans 3`,bcat:`s`}},{k:`gauge`,mono:`IBM Plex Mono`,wordmark:1,videos:`lead`,name:`Gauge`,desc:`For building-efficiency and engineered products: a blueprint opener, results on pressure-gauge dials, a spec sheet of numbered steps and data-style labels.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Archivo`,hcat:`s`,hw:800,b:`IBM Plex Sans`,bcat:`s`}},{k:`flowline`,wordmark:1,videos:`lead`,name:`Flowline`,desc:`For water, plumbing and clean-tech companies: a full-bleed water opener with a wave edge, drop-shaped numbers and bullets, flowing section edges and soft rounded cards.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Outfit`,hcat:`s`,hw:700,b:`Outfit`,bcat:`s`}},{k:`ledger`,mono:`DM Mono`,wordmark:1,videos:`grid`,name:`Ledger`,desc:`For products sold on savings to property managers and owners: results laid out like a utility statement, case studies on receipts with a SAVED stamp and a before-and-after bill.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`DM Serif Display`,hcat:`r`,hw:400,b:`DM Sans`,bcat:`s`}},{k:`whip`,wordmark:1,videos:`grid`,name:`Whip`,desc:`For specialty drink bars and dessert cafés: syrup drips, sprinkle confetti, cup-shaped photos, a striped straw and a sticker-style drink menu.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Caprasimo`,hcat:`d`,hw:400,b:`Figtree`,bcat:`s`}},{k:`pourover`,mono:`IBM Plex Mono`,wordmark:1,videos:`grid`,name:`Pourover`,desc:`For coffee houses and roasters: warm paper tones, coffee-ring stamps, origin tags, tasting-card menus and a receipt-style order card.`,hero:`split`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,gf:{h:`Instrument Serif`,hcat:`r`,hw:400,b:`Instrument Sans`,bcat:`s`}},{k:`letterboard`,wordmark:1,videos:`grid`,name:`Letterboard`,desc:`For drive-thrus, coffee stands and snack bars: a framed felt letterboard menu, drive-thru lane stripes, a loyalty punch card and a gift-card call to action.`,hero:`overlay`,tiles:`cards`,feature:`split`,menus:[`bar`,`mega`,`split`,`hamburger`],img:1,flag:1,dark:2,gf:{h:`Bebas Neue`,hcat:`s`,hw:400,b:`Work Sans`,bcat:`s`}}],a=[{k:`a`,name:`Classic`,r:0,band:`none`,dens:`m`},{k:`b`,name:`Soft`,r:14,band:`soft`,dens:`l`},{k:`c`,name:`Crisp`,r:4,band:`ink`,dens:`s`}],o={news:45,app:50,mag:52,min:50,bold:48,portal:50,story:55,board:42,tide:72,ember:73,folio:74,block:70,bento:72,craft:66,glow:67,swiss:71,retro:70,lens:64,hearth:86,volt:85,loom:85,bloom:85,pulse:84,commons:80,council:80,meridian:84,bridge:80,convoy:80,homeward:84,"homeward-b":85,freight:76,timber:85,shoreline:85,"shoreline-b":86,basecamp:80,reel:92,marquee:84,frame:86,harbour:85,waterline:84,dockside:84,press:87,stitch:85,merch:84,taproom:85,roadside:85,patio:84,bedrock:85,breakwater:84,rebar:84,trapline:85,tannery:86,birchbark:84,gauge:84,flowline:85,ledger:84,whip:85,pourover:84,letterboard:86},s={75:50,76:60,77:70,78:80,79:90,80:100,81:120,82:140,83:160,84:180,85:200,86:250,87:300,88:350,89:400,90:500,91:600,92:700,93:800,94:900,95:1e3,96:1500,97:2500,98:4e3,99:7500},c=65;function l(e){return e=Math.floor(+e||0),e<c?null:(e>99&&(e=99),s[e]||0)}function u(e){return`$`+Number(e).toLocaleString(`en-US`)}function d(e){return e.price==null?`Not offered`:e.price?u(e.price):`Free`}var f={reel:1},p=[];i.forEach(function(e){a.forEach(function(t){var n=e.k+`-`+t.k,r=o[n]||o[e.k]||0;p.push({id:n,name:e.name+` `+t.name,fam:e,v:t,grade:r,price:l(r),offered:r>=c&&!f[e.k]})})});var m=p.filter(function(e){return e.offered}).sort(function(e,t){return t.grade-e.grade}),h={a:`Square corners, plain backgrounds, regular spacing`,b:`Rounded corners, soft colour bands, roomy spacing`,c:`Small corners, dark contrast bands, compact spacing`},g=[];i.forEach(function(e){var t=m.filter(function(t){return t.fam===e}).sort(function(e,t){return e.v.k<t.v.k?-1:1});t.length&&g.push({k:e.k,fam:e,name:e.name,variants:t,grade:Math.max.apply(null,t.map(function(e){return e.grade}))})});var _={tide:1,ember:1,folio:1,block:1,bento:1,craft:1,glow:1,swiss:1,retro:1,lens:1,news:1,app:1,mag:1,min:1,bold:1,portal:1,story:1,board:1},v={folio:`news|magazine|article|stories|story|blog|publish*|journal|editorial|investigation|media|reporting`,swiss:`news|research|report|architect|design|studio|agency|publish*|investigation|education`,bento:`directory|listing|resources|portal|app|startup|software|tech`,tide:`wellness|health|clinic|therapy|counsel*|startup|service`,ember:`restaurant|dining|wine|bistro|catering|event`,craft:`handmade|craft|bakery|gift|artisan|beadwork`,glow:`tech|software|music|night|club|gaming|app`,retro:`ice cream|diner|kids|party|summer|festival`,block:`youth|event|festival|music|campaign|shop`,hearth:`cafe|café|coffee|baking|restaurant|bakery|food|menu|kitchen|diner|bistro|catering`,volt:`electric|plumb*|hvac|roof|contractor|repair|renovat*|handyman|trades|install|heating`,loom:`craft|handmade|maker|artisan|beadwork|jewel*|pottery|quilt|sewing|moccasin|art shop|etsy`,bloom:`salon|hair|beauty|spa|nail|lash|barber|esthetic*|makeup`,pulse:`gym|fitness|trainer|yoga|crossfit|workout|boxing|martial|athletic`,commons:`community|first nation|band office|band council|nation|organization|non-profit|nonprofit|charity|society|centre|church|events|elders|youth|reconciliation|treaty|program|membership|directory|resources|education`,council:`consult*|government|policy|advisory|governance|research|report|reconciliation|treaty|accountability|investigation|calls to action`,meridian:`consult*|strategy|technology|advisory|management|firm`,bridge:`consult*|counsel*|coaching|wellness|facilitat*|engagement|healing|people|education`,convoy:`moving|movers|trucking|haul|transport|delivery`,homeward:`moving|movers|relocation|packing`,freight:`logistic*|storage|warehouse|shipping|freight|courier`,timber:`lodge|cabin|fishing|hunting|camp|outfitter`,shoreline:`resort|cottage|lake|beach|vacation|rental`,basecamp:`outfitter|adventure|tour|canoe|kayak|hiking|guide|outdoor|tourism|camping`,reel:`film|production|documentary|cinema|filmmaker`,marquee:`film|festival|filmmaker|screening|cinema`,frame:`photograph*|director|portfolio|gallery`,harbour:`marina|yacht|boat|dock|slip`,waterline:`boat rental|waterfront|kayak|paddle|marina`,dockside:`marina|resort|dock|beach`,press:`print|screen print|t-shirt|apparel`,stitch:`embroider*|sewing|uniform|apparel|patch`,merch:`apparel|merch|promo|clothing|store`,taproom:`bar|pub|sports|grill|brewery|beer|wings`,roadside:`motel|diner|gas bar|highway|inn`,patio:`restaurant|inn|patio|riverside|dining`,bedrock:`excavat*|civil|construction|contractor|grading|earthwork`,breakwater:`shoreline|landscap*|environmental|erosion`,rebar:`concrete|foundation|septic|contractor`,trapline:`trapper|trapping|wildlife|nuisance|animal removal|fur`,tannery:`tanning|tanner|hide|leather|fur`,birchbark:`knowledge keeper|teaching|culture|language|traditional|carving|land-based|workshop|elder|ceremony|indigenous art`,gauge:`efficien*|engineer*|building|energy|valve`,flowline:`water|plumb*|clean tech|conservation`,ledger:`savings|property manag*|landlord|roi`,whip:`cafe|café|bubble tea|dessert|smoothie|sweets|ice cream|drinks|lemonade`,pourover:`coffee|roaster|espresso|cafe|café`,letterboard:`coffee|drive-thru|drive thru|snack|coffee stand|food truck|canteen`},y={};for(var b in v)y[b]=v[b].split(`|`).map(function(e){return{w:e,re:RegExp(`(^|[^a-z])`+e.replace(/\*$/,``).replace(/[.*+?^${}()|[\]\\]/g,`\\$&`)+(/\*$/.test(e)?``:`(s|es)?(?![a-z])`),`i`)}});var x={src:1,image:1,href:1,url:1,id:1,type:1,layout:1,style:1,kind:1,status:1,align:1,vp:1,frame:1,icon:1,bg:1,color:1,cropSrc:1,log:1};function S(e){var t=[];return(function e(n,r){if(!(r>6||n==null)){if(typeof n==`string`)n.length<400&&!/^(data:|https?:|#|\/)/.test(n)&&t.push(n);else if(typeof n==`object`)for(var i in n)x[i]||e(n[i],r+1)}})([e.biz,e.menu&&e.menu.items,e.pages,e.footer],0),t.join(` 
 `).toLowerCase()}function ee(e,t,n){n??=S(t);var r=(y[e]||[]).filter(function(e){return e.re.test(n)}).map(function(e){return e.w.replace(/\*$/,``)});return{score:r.length,hits:r}}function te(e){var t=S(e),n=g.map(function(n){var r=ee(n.k,e,t),i=!!_[n.k];return{d:n,m:r,tier:r.score?2:+!!i}});return n.some(function(e){return e.m.score})||n.forEach(function(e){e.tier=1}),n.sort(function(e,t){return t.tier-e.tier||(t.tier==2?t.m.score-e.m.score:0)||t.d.grade-e.d.grade})}function C(e){return p.filter(function(t){return t.id==e})[0]||p[0]}function w(e,n){var i=[],a=e.fam,o=n.menu.vp.desktop.type,s=ne(n),c=s.map(function(e){return e.type});return a.menus.indexOf(o)<0&&i.push(`doesn’t offer a `+r[o].name.toLowerCase()+` on desktop`),(a.no||[]).forEach(function(e){c.indexOf(e)>=0&&i.push(`has no `+t[e].toLowerCase()+` section`)}),a.maxTiles&&s.forEach(function(e){e.type==`tiles`&&(e.items||[]).length>a.maxTiles&&i.push(`fits up to `+a.maxTiles+` cards per grid (“`+e.title+`” has `+e.items.length+`)`)}),a.need&&!a.need.some(function(e){return c.indexOf(e)>=0})&&i.push(`needs a card grid or link list`),{ok:!i.length,why:i}}function ne(e){var t=[];return(e.pages||[]).forEach(function(e){t=t.concat(e.sections)}),t}function re(e,t){var n=e.pages||[];return n.filter(function(e){return e.id==t})[0]||n[0]||{sections:[]}}var ie=null;function ae(e){return ie||e.brand.pal}function oe(e){return n.FONTS[e.brand.font]||n.FONTS[0]}function T(t,r,i,a){return r?r.kind==`img`?`<img src="`+e(r.src)+`" alt="`+e(r.label||``)+`"`+(a?` style="height:`+a+`px;width:auto"`:``)+` loading="lazy">`:i==`logo`?n.logo(r,t.biz.name,a||40,ae(t),oe(t)):i==`hero`?n.hero(r,ae(t)):n.ill(r,ae(t)):``}function E(e,t){var n=e.brand;return n.opts[t].filter(function(e){return e.id==n.pick[t]})[0]||n.opts[t][0]}function D(e){var t=e.brand,n=t.opts.ill.filter(function(e){return t.star[e.id]}),r=E(e,`ill`);return r&&n.indexOf(r)<0&&n.unshift(r),n.length?n:t.opts.ill.slice(0,3)}function O(e,t){var n=D(e);return n.length?T(e,n[t%n.length],`ill`):``}function k(e,t,n){return t?t.kind==`hero`?T(e,E(e,`hero`),`hero`):t.kind==`ill`?O(e,t.i||n||0):T(e,t,`img`):``}function A(e,t,n){return le(k(e,t,n),t)}function j(e,t,n){return A(e,t.image,n)}var M={none:`none`,soft:`0 4px 14px rgba(0,0,0,.14)`,medium:`0 10px 26px rgba(0,0,0,.22)`,strong:`0 20px 44px rgba(0,0,0,.34)`,offset:`12px 12px 0 var(--acc)`,hard:`8px 8px 0 var(--ink)`,glow:`0 0 0 3px var(--acc),0 0 26px var(--acc)`},N={polaroid:`Polaroid`,tilt:`Tilted polaroid`,mat:`Gallery mat`,gold:`Gold frame`,double:`Double line`,vintage:`Vintage`,circle:`Circle`,arch:`Arch`,blob:`Organic blob`,offset:`Offset block`,neon:`Neon glow`},se=[`solid`,`dashed`,`dotted`,`double`,`groove`,`ridge`,`inset`,`outset`];function ce(e){if(!e)return null;var t=[],n=function(e){return e!=null&&e!==``};n(e.bw)&&t.push(`--ibw:`+L(e.bw)+`px`),se.indexOf(e.bs)>=0&&t.push(`--ibs:`+e.bs),R(e.bc)&&t.push(`--ibc:`+e.bc),n(e.br)&&t.push(`--ibr:`+L(e.br)+`px`),M[e.sh]&&t.push(`--ish:`+M[e.sh]),n(e.pad)&&t.push(`--ipad:`+L(e.pad)+`px`),R(e.bg)&&t.push(`--ibg:`+e.bg),n(e.tilt)&&L(e.tilt)&&t.push(`--itf:rotate(`+L(e.tilt)+`deg)`);var r=N[e.art]?` fr-`+e.art:``;return r||t.length?{cls:`fr`+r,style:t.join(`;`)}:null}function le(t,n){if(!t||!n)return t;/^data:image\//.test(n.cropSrc||``)&&(t=`<img src="`+e(n.cropSrc)+`" alt="`+e(n.label||``)+`">`);var r=ce(n.frame);return r?t.replace(/^<(img|svg)\b([^>]*?)(\/?)>/,function(e,t,n,i){return n=/\sclass="/.test(n)?n.replace(/\sclass="/,` class="`+r.cls+` `):n+` class="`+r.cls+`"`,r.style&&(n=/\sstyle="/.test(n)?n.replace(/\sstyle="/,` style="`+r.style+`;`):n+` style="`+r.style+`"`),`<`+t+n+i+`>`}):t}function P(t){return e(t||`#`)}var F=null,I=null,ue={s:`sans-serif`,r:`serif`,d:`sans-serif`,h:`cursive`,m:`monospace`};function L(e){return e=parseFloat(e),isFinite(e)?Math.round(e*1e3)/1e3:0}function R(e){return/^#[0-9a-f]{3,8}$/i.test(e||``)}function z(e,t){I&&e&&((I[e]=I[e]||{})[t]=1)}function de(e,t){return`'`+String(e).replace(/['"<>&;]/g,``)+`',`+(ue[t]||`sans-serif`)}function fe(e){var t=F&&F[e];if(!t)return``;var n=[];if(t.font&&(n.push(`font-family:`+de(t.font,t.fcat)),t.weight?z(t.font,t.weight):(z(t.font,400),z(t.font,700))),t.size){var r=L(t.size);n.push(`font-size:`+(r>20?`clamp(`+Math.max(14,Math.round(r*.5))+`px,`+(r*1.8/12.8).toFixed(2)+`cqw,`+r+`px)`:r+`px`))}return t.weight&&n.push(`font-weight:`+L(t.weight)),t.ls!=null&&t.ls!==``&&n.push(`letter-spacing:`+L(t.ls)+`em`),t.lh&&n.push(`line-height:`+L(t.lh)),/^(none|uppercase|lowercase|capitalize)$/.test(t.tt||``)&&n.push(`text-transform:`+t.tt),t.ital&&n.push(`font-style:italic`),R(t.color)&&n.push(`color:`+t.color),n.length?` style="`+n.join(`;`)+`"`:``}function pe(e){var t=e.lx||{},r=``,i=[];return t.pt!=null&&t.pt!==``&&(r+=` lx-pt`,i.push(`--pt:`+L(t.pt)+`px`)),t.pb!=null&&t.pb!==``&&(r+=` lx-pb`,i.push(`--pb:`+L(t.pb)+`px`)),t.cw==`full`?r+=` lx-full`:t.cw&&(r+=` lx-cw`,i.push(`--cw:`+L(t.cw)+`px`)),t.mh&&(r+=` lx-mh lx-va-`+(/^(top|bottom)$/.test(t.va||``)?t.va:`center`),i.push(`--mh:`+L(t.mh)+`px`)),t.gap!=null&&t.gap!==``&&i.push(`--gap:`+L(t.gap)+`px`),t.r!=null&&t.r!==``&&i.push(`--r:`+L(t.r)+`px`),R(t.bgc)?(r+=` lx-bg`,i.push(`--sbg:`+t.bgc+`;--sink:`+(R(t.ink)?t.ink:n.onColor(t.bgc)))):R(t.ink)&&(r+=` lx-ink`,i.push(`--sink:`+t.ink)),{cls:r,style:i.length?` style="`+i.join(`;`)+`"`:``}}function B(e){return e?` data-fk="`+e+`"`+fe(e):``}function V(e){return e?` data-fk="`+e+`"`+fe(`item.`+e):``}function H(e,t){return e?e.replace(/^<(img|svg)\b/,`<$1`+B(t||`image`)):``}function U(t,n,r,i,a){return t?`<a class="`+(r||`bt`)+`" href="`+P(n)+`"`+(a?V(i):B(i))+`>`+e(t)+`</a>`:``}function W(t,n){return String(t||``).split(/\n{2,}/).filter(Boolean).map(function(t){return`<p`+B(n||`text`)+`>`+e(t)+`</p>`}).join(``)}function G(e){return` data-ii="`+e+`"`}function K(t){return`<a href="`+P(t.href)+`">`+e(t.label)+`</a>`}function me(t,n){return`<details class="dd"`+(n?` open`:``)+`><summary>`+e(t.label)+`</summary><div class="pn">`+t.children.map(K).join(``)+`</div></details>`}function he(e,t){var n=!0;return e.map(function(e){if(e.children&&e.children.length){var r=me(e,t&&n);return n=!1,r}return K(e)}).join(``)}function ge(t){var n=t.filter(function(e){return!(e.children&&e.children.length)}),r=t.filter(function(e){return e.children&&e.children.length});return(n.length?`<div class="dg"><strong>Main</strong>`+n.map(K).join(``)+`</div>`:``)+r.map(function(t){return`<div class="dg"><strong>`+e(t.label)+`</strong>`+t.children.map(K).join(``)+`</div>`}).join(``)}function q(t,n,r){var i=t.menu.vp[n],a=t.menu.items,o=i.type,s=`<a class="lg" href="#top">`+ye(t,n==`phone`?34:44)+`</a>`,c=(i.search?`<span class="sr" aria-label="Search">⌕</span>`:``)+(i.cta&&t.menu.cta.label?U(t.menu.cta.label,t.menu.cta.href,`bt hc`):``),l=`<details class="dr"`+(r?` open`:``)+`><summary>☰ Menu</summary><div class="dw">`+ge(a)+`</div></details>`,u=`hd hd-`+o+` lp-`+(o==`split`?`center`:i.logo)+(i.sticky?` sk`:``),d;if(o==`bar`)d=s+`<nav class="mn">`+he(a,r)+`</nav><div class="ha">`+c+`</div>`;else if(o==`mega`){var f=a.filter(function(e){return!(e.children&&e.children.length)}),p=a.filter(function(e){return e.children&&e.children.length});d=s+`<nav class="mn">`+f.map(K).join(``)+(p.length?`<details class="dd mg"`+(r?` open`:``)+`><summary>Explore all</summary><div class="pn">`+p.map(function(t){return`<div class="dg"><strong>`+e(t.label)+`</strong>`+t.children.map(K).join(``)+`</div>`}).join(``)+`</div></details>`:``)+`</nav><div class="ha">`+c+`</div>`}else if(o==`split`){var m=Math.ceil(a.length/2);d=`<nav class="mn ml">`+he(a.slice(0,m),r)+`</nav>`+s+`<nav class="mn mr">`+he(a.slice(m),!1)+c+`</nav>`}else d=o==`bottom`?s+`<div class="ha">`+c+`</div>`:s+`<div class="ha">`+c+l+`</div>`;return`<header class="`+u+`">`+d+`</header>`}function ve(t,n,r){var i=t.menu.items,a=i.slice(0,3);return`<nav class="bb bb-`+n+`" aria-label="Tabs">`+a.map(function(t){return`<a href="`+P(t.href||t.children&&t.children[0]&&t.children[0].href)+`"><i>●</i>`+e(t.label)+`</a>`}).join(``)+`<details class="bm"`+(r?` open`:``)+`><summary><i>☰</i>More</summary><div class="dw">`+ge(i)+`</div></details></nav>`}function J(t){return(t.title?`<div class="sh"><h2`+B(`title`)+`>`+e(t.title)+`</h2>`+(t.moreText?U(t.moreText,t.moreLink,`mo`,`moreText`):``)+`</div>`:``)+(t.text&&t.type!=`feature`&&t.type!=`text`&&t.type!=`cta`?`<p class="in"`+B(`text`)+`>`+e(t.text)+`</p>`:``)}var Y={hero:function(t,n,r){var i=n.layout&&n.layout!=`auto`?n.layout:r.hero;i==`none`&&(i=`center`);var a=n.image===null?``:n.image?j(t,n):T(t,E(t,`hero`),`hero`);return`<section class="s s-hero hl-`+i+`"><div class="hx"><div class="ht">`+(n.eyebrow?`<p class="ey"`+B(`eyebrow`)+`>`+e(n.eyebrow)+`</p>`:``)+`<h1`+B(`title`)+`>`+e(n.title||t.biz.name)+`</h1>`+W(n.text)+`<div class="bts">`+U(n.linkText,n.link,`bt`,`linkText`)+U(n.link2Text,n.link2,`bt bt2`,`link2Text`)+`</div></div>`+(a?`<div class="hm">`+H(a)+`</div>`:``)+`</div></section>`},tiles:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.tiles,a=n.cols||3;return n.showImg===void 0&&r.img&&(n=Object.assign({},n,{showImg:!0})),`<section class="s s-tiles"><div class="w">`+J(n)+`<div class="tl tl-`+i+` c`+a+`">`+(n.items||[]).map(function(r,a){var o=n.showImg===!1&&i!=`icons`?``:r.image?`<span class="tim">`+H(A(t,r.image,a))+`</span>`:n.showImg||i==`icons`?`<span class="tim">`+H(O(t,a))+`</span>`:``;return`<a class="ti" href="`+P(r.link)+`"`+G(a)+`>`+o+`<span class="tx">`+(r.eyebrow?`<small class="meta"`+V(`eyebrow`)+`>`+e(r.eyebrow)+`</small>`:``)+`<h3`+V(`title`)+`>`+e(r.title)+`</h3>`+(r.text?`<p`+V(`text`)+`>`+e(r.text)+`</p>`:``)+(r.linkText?`<b`+V(`linkText`)+`>`+e(r.linkText)+` →</b>`:``)+`</span></a>`}).join(``)+`</div></div></section>`},feature:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.feature,a=n.image===null?``:n.image?j(t,n):O(t,1);return`<section class="s s-feature"><div class="w">`+J(n)+`<div class="fe fe-`+i+`">`+(a?`<div class="fm">`+H(a)+`</div>`:``)+`<div class="fx">`+(n.eyebrow?`<p class="ey"`+B(`eyebrow`)+`>`+e(n.eyebrow)+`</p>`:``)+`<h3`+B(`headline`)+`>`+e(n.headline||``)+`</h3>`+W(n.text)+U(n.linkText,n.link,`bt`,`linkText`)+`</div></div></div></section>`},list:function(t,n){return`<section class="s s-list"><div class="w">`+J(n)+`<div class="ls">`+(n.items||[]).map(function(t,n){return`<div class="lr"`+G(n)+`><strong`+V(`title`)+`>`+e(t.title)+`</strong>`+(t.text?`<span`+V(`text`)+`>`+e(t.text)+`</span>`:``)+(t.linkText||t.link&&t.link!=`#`?U(t.linkText||`Open`,t.link,`mo`,`linkText`,1):``)+`</div>`}).join(``)+`</div>`+(n.linkText?U(n.linkText,n.link,`mo`,`linkText`):``)+`</div></section>`},text:function(t,n){var r=n.image?j(t,n):``;return`<section class="s s-text`+(r?` wi`:``)+`"><div class="w"><div class="tb">`+(n.title?`<h2`+B(`title`)+`>`+e(n.title)+`</h2>`:``)+W(n.text)+U(n.linkText,n.link,`mo`,`linkText`)+`</div>`+(r?`<div class="fm">`+H(r)+`</div>`:``)+`</div></section>`},stats:function(t,n){return`<section class="s s-stats"><div class="w">`+J(n)+`<div class="stt">`+(n.items||[]).map(function(t,n){return`<div`+G(n)+`><b`+V(`title`)+`>`+e(t.title)+`</b><span`+V(`text`)+`>`+e(t.text)+`</span></div>`}).join(``)+`</div></div></section>`},gallery:function(t,n){return`<section class="s s-gallery"><div class="w">`+J(n)+`<div class="gl">`+(n.items||[]).map(function(n,r){return`<figure`+G(r)+`>`+H(n.image?A(t,n.image,r):O(t,r))+(n.title?`<figcaption`+V(`title`)+`>`+e(n.title)+`</figcaption>`:``)+`</figure>`}).join(``)+`</div></div></section>`},testimonial:function(t,n){return`<section class="s s-quotes"><div class="w">`+J(n)+`<div class="qs">`+(n.items||[]).map(function(t,n){return`<blockquote`+G(n)+`><p`+V(`text`)+`>“`+e(t.text)+`”</p><cite`+V(`title`)+`>`+e(t.title)+`</cite></blockquote>`}).join(``)+`</div></div></section>`},cta:function(t,n){return`<section class="s s-cta"><div class="w"><h2`+B(`title`)+`>`+e(n.title)+`</h2>`+W(n.text)+U(n.linkText,n.link,`bt bt3`,`linkText`)+`</div></section>`},videos:function(t,n,r){var i=n.style&&n.style!=`auto`?n.style:r.videos||`grid`,a=(n.items||[]).slice(0,12);function o(n,r,i){var a=n.image?A(t,n.image,r):O(t,r);return`<a class="vi`+(i?` big`:``)+`" href="`+P(n.link)+`"`+G(r)+`><span class="vt">`+H(a)+`<span class="play" aria-hidden="true"></span>`+(n.duration?`<span class="du"`+V(`duration`)+`>`+e(n.duration)+`</span>`:``)+`</span><span class="vx">`+(n.eyebrow?`<small class="meta"`+V(`eyebrow`)+`>`+e(n.eyebrow)+`</small>`:``)+`<h3`+V(`title`)+`>`+e(n.title)+`</h3>`+(i&&n.text?`<p`+V(`text`)+`>`+e(n.text)+`</p>`:``)+`</span></a>`}var s=i==`lead`&&a.length>1?`<div class="vl-lead">`+o(a[0],0,!0)+`<div class="rail">`+a.slice(1,5).map(function(e,t){return o(e,t+1)}).join(``)+`</div></div>`+(a.length>5?`<div class="vg">`+a.slice(5,9).map(function(e,t){return o(e,t+5)}).join(``)+`</div>`:``):i==`row`?`<div class="vrow">`+a.slice(0,8).map(function(e,t){return o(e,t)}).join(``)+`</div><div class="arr" aria-hidden="true"><span>‹</span><span>›</span></div>`:`<div class="vg">`+a.map(function(e,t){return o(e,t)}).join(``)+`</div>`;return`<section class="s s-videos vs-`+i+`"><div class="w">`+J(n)+s+`</div></section>`},podcast:function(t,n){return`<section class="s s-podcast"><div class="w">`+J(n)+`<div class="pods">`+(n.items||[]).slice(0,8).map(function(n,r){return`<div class="pod"`+G(r)+`><span class="pc">`+H(n.image?A(t,n.image,r):O(t,r+2))+`</span><div class="px"><h3`+V(`title`)+`>`+e(n.title)+`</h3>`+(n.text?`<p`+V(`text`)+`>`+e(n.text)+`</p>`:``)+`<div class="bar"><span class="pb" aria-hidden="true">▶</span><span class="tr"><i style="width:`+(18+r*23%60)+`%"></i></span><span class="tm">00:00</span></div></div></div>`}).join(``)+`</div></div></section>`},pagehead:function(t,n){var r=n.image?A(t,n.image):``;return`<section class="s s-pagehead`+(r?` wi`:``)+`"><div class="w"><p class="crumb">Home <span>/</span> `+e(n.title)+`</p><h1`+B(`title`)+`>`+e(n.title)+`</h1>`+W(n.text)+`</div>`+(r?`<div class="phm">`+H(r)+`</div>`:``)+`</section>`},contact:function(t,n){return`<section class="s s-contact"><div class="w">`+J(n)+`<dl class="ct">`+(n.items||[]).map(function(t,n){return`<div`+G(n)+`><dt`+V(`title`)+`>`+e(t.title)+`</dt><dd`+V(`text`)+`>`+(t.link?`<a href="`+P(t.link)+`">`+e(t.text||t.link)+`</a>`:e(t.text))+`</dd></div>`}).join(``)+`</dl>`+U(n.linkText,n.link,`bt`,`linkText`)+`</div></section>`}},X=null;function ye(t,n){var r=E(t,`logo`),i=String(t.biz.name||``).trim();return X&&X.wordmark&&i&&(!r||r.kind!=`img`)?`<span class="wm" role="img" aria-label="`+e(i)+` logo"><span class="wm-i" aria-hidden="true">`+e(i.charAt(0).toUpperCase())+`</span><span class="wm-n" aria-hidden="true">`+e(i)+`</span></span>`:X&&X.wordmark&&i&&r&&r.kind==`img`&&r.mark?`<span class="wm wm-pic" role="img" aria-label="`+e(i)+` logo"><img class="wm-m" src="`+e(r.src)+`" alt=""><span class="wm-n" aria-hidden="true">`+e(i)+`</span></span>`:T(t,r,`logo`,n)}function be(e){var t=[],n={};return e.forEach(function(e,r){var i=String(e.group||``).trim();n.hasOwnProperty(i)||(n[i]=t.length,t.push({name:i,items:[]})),t[n[i]].items.push([e,r])}),t}Y.menu=function(t,n){var r=n.items||[],i=n.showImg!==!1&&r.some(function(e){return e.image});return`<section class="s s-menu"><div class="w">`+J(n)+`<div class="mu-g`+(i?` mu-pics`:``)+`">`+be(r).map(function(n){return`<div class="mu-c">`+(n.name?`<h3 class="mu-h">`+e(n.name)+`</h3>`:``)+n.items.map(function(n){var r=n[0],a=n[1];return`<div class="mu-i"`+G(a)+`>`+(i&&r.image?`<span class="mu-im">`+H(A(t,r.image,a))+`</span>`:``)+`<div class="mu-x"><div class="mu-l"><strong`+V(`title`)+`>`+e(r.title)+`</strong><span class="mu-d" aria-hidden="true"></span>`+(r.price?`<b class="mu-p"`+V(`price`)+`>`+e(r.price)+`</b>`:``)+`</div>`+(r.text?`<p`+V(`text`)+`>`+e(r.text)+`</p>`:``)+`</div></div>`}).join(``)+`</div>`}).join(``)+`</div>`+(n.linkText?`<div class="mu-f">`+U(n.linkText,n.link,`bt`,`linkText`)+`</div>`:``)+`</div></section>`},Y.booking=function(t,n){var r=String(n.areas||``).split(`,`).map(function(e){return e.trim()}).filter(Boolean);return`<section class="s s-booking"><div class="w"><div class="bk"><div class="bk-a">`+(n.title?`<h2`+B(`title`)+`>`+e(n.title)+`</h2>`:``)+W(n.text)+(r.length?`<p class="bk-at"`+B(`areasTitle`)+`>`+e(n.areasTitle||`Areas we serve`)+`</p><ul class="bk-ar" data-fk="areas">`+r.map(function(t){return`<li>`+e(t)+`</li>`}).join(``)+`</ul>`:``)+`</div><div class="bk-b">`+(n.cardTitle?`<h3`+B(`cardTitle`)+`>`+e(n.cardTitle)+`</h3>`:``)+`<div class="bk-l">`+(n.items||[]).map(function(t,n){return`<div class="bk-i"`+G(n)+`><div class="bk-x"><strong`+V(`title`)+`>`+e(t.title)+`</strong>`+(t.text?`<span`+V(`text`)+`>`+e(t.text)+`</span>`:``)+`</div>`+(t.price?`<b`+V(`price`)+`>`+e(t.price)+`</b>`:``)+`</div>`}).join(``)+`</div>`+U(n.linkText,n.link,`bt bk-bt`,`linkText`)+(n.note?`<p class="bk-n"`+B(`note`)+`>`+e(n.note)+`</p>`:``)+`</div></div></div></section>`},Y.products=function(t,n){var r=n.cols||3;return`<section class="s s-products"><div class="w">`+J(n)+`<div class="pr-g c`+r+`">`+(n.items||[]).map(function(n,r){return`<a class="pr-i" href="`+P(n.link)+`"`+G(r)+`><span class="pr-im">`+H(n.image?A(t,n.image,r):O(t,r))+(n.eyebrow?`<small class="pr-bd"`+V(`eyebrow`)+`>`+e(n.eyebrow)+`</small>`:``)+`</span><span class="pr-x"><span class="pr-t"><h3`+V(`title`)+`>`+e(n.title)+`</h3>`+(n.price?`<b class="pr-p"`+V(`price`)+`>`+e(n.price)+`</b>`:``)+`</span>`+(n.text?`<p`+V(`text`)+`>`+e(n.text)+`</p>`:``)+(n.linkText?`<span class="pr-btn"`+V(`linkText`)+`>`+e(n.linkText)+`</span>`:``)+`</span></a>`}).join(``)+`</div></div></section>`};var xe={};Object.keys(_e.kinds||{}).forEach(function(e){_e.kinds[e].photos.forEach(function(e){xe[e.file]=e})});function Z(e){for(var t=/photos\/[a-z]+\/\d+\.jpg/g,n,r={},i=[];n=t.exec(e);){var a=xe[n[0]];a&&!r[a.id]&&(r[a.id]=1,i.push(a))}return i}function Q(t){if(!t.length)return``;var n={};return t.forEach(function(e){n[e.by]||(n[e.by]=e.page)}),`<p class="pc">Photos by `+Object.keys(n).map(function(t){return`<a href="`+e(n[t])+`">`+e(t)+`</a>`}).join(`, `)+` on <a href="`+e(_e.sourceUrl||`https://pixabay.com/`)+`">`+e(_e.source||`Pixabay`)+`</a></p>`}function Se(t,n){var r=t.menu.items,i=[];return r.forEach(function(e){e.children&&e.children.length?i=i.concat(e.children):i.push(e)}),`<footer id="footer" class="ft" data-sec="footer" data-type="footer" data-si="-1"><div class="w"><div class="fb">`+ye(t,36)+(t.footer.motto?`<p class="mt"`+B(`motto`)+`>`+e(t.footer.motto)+`</p>`:``)+`</div><nav>`+i.slice(0,12).map(K).join(``)+`</nav><p class="cp"`+B(`text`)+`>`+e(t.footer.text||`© `+t.biz.name)+`</p>`+(n||``)+`</div></footer>`}var Ce={a:1,an:1,the:1,and:1,or:1,of:1,our:1,your:1,my:1,to:1,for:1,in:1,on:1,at:1,by:1,us:1,we:1,me:1,it:1,is:1,more:1,learn:1,see:1,all:1,get:1,view:1,open:1,here:1,now:1,page:1,go:1,read:1,click:1,with:1,from:1},we={contact:`contact find location locate direction map visit hours call phone email reach address where touch`,gallery:`gallery photo picture image lookbook still portfolio`,booking:`book booking reserve reservation appointment quote availability schedule`,menu:`rate price pricing menu fee cost`,products:`product shop store buy catalog catalogue`,videos:`video film watch trailer`,podcast:`podcast listen episode audio`,testimonial:`review testimonial`,feature:`about story history mission`,text:`about story history mission`,tiles:`service program offer`,list:`service`},Te={tiles:1,list:1,feature:2,text:2};function Ee(e){var t=/^(.{3,}?)(ing|es|s|e)$/.exec(e);return t?t[1]:e}function De(e){return String(e||``).toLowerCase().normalize(`NFKD`).replace(/[̀-ͯ]/g,``).replace(/[^a-z0-9]+/g,` `).split(` `).filter(function(e){return e&&!Ce[e]}).map(Ee)}function Oe(e){return e=String(e??``).trim(),!e||e==`#`}function ke(e){return`https://www.google.com/maps/search/?api=1&query=`+encodeURIComponent(e)}function Ae(e,t){var n=t.map(function(e){var t={},n=function(e,n){De(e).forEach(function(e){t[e]=Math.max(t[e]||0,n)})};return n(e.title,3),n(e.headline,2),n(e.eyebrow,2),n(we[e.type]||``,Te[e.type]||3),n(e.linkText,1),n(e.moreText,1),(e.items||[]).forEach(function(e){n(e.title,2),n(e.text,1)}),t}),r=function(e){return t.filter(function(t){return t.type==e})[0]},i=r(`contact`),a=i||r(`booking`)||r(`cta`),o=``;i&&(i.items||[]).forEach(function(e){!o&&/address|location|where|based|visit|find/i.test(e.title||``)&&e.text&&(o=e.text)});var s={};(e.pages||[]).length>1&&e.pages.forEach(function(e){s[String(e.name||``).trim().toLowerCase()]=1});function c(e,r){var i=De(e),a=null,o=0;return t.forEach(function(e,t){if(e!==r&&e.type!=`hero`&&e.type!=`stats`&&e.type!=`cta`){var s=0;i.forEach(function(e){s+=n[t][e]||0}),s>o&&(o=s,a=e)}}),a}function l(n,r,i){if(!t.length)return`#`;if(/\b(directions?|map)\b/i.test(n||``))return ke(o||[e.biz&&e.biz.name,e.biz&&e.biz.desc].filter(Boolean).join(` `));if(/\battractions?\b|\bnearby\b|things to do near/i.test(n||``)&&o){var s=c(n,r);return s?`#`+s.id:ke(`attractions near `+o)}var l=c(n,r)||i&&c(i,r)||(a===r?null:a);return l?`#`+l.id:`#top`}return{to:l,best:c,addr:o,pageNames:s}}function je(e,t,n,r){return t.length?Ae(Object.assign({},e,{pages:[]}),t).best(n,r):null}function Me(e,t){var n=t.sections||[],r=Ae(e,n),i=function(e,t,i,a){if(e=String(e??``).trim(),Oe(e)){var o=String(t||``).trim().toLowerCase();return r.pageNames[o]?`#@`+encodeURIComponent(o):r.to(t,i,a)}return/^#[^#]+$/.test(e)&&e!=`#top`&&e!=`#footer`&&!n.some(function(t){return t.id==e.slice(1)})?r.to(e.slice(1).replace(/[-_]/g,` `),i,t):e},a=function(e,t){var n=Object.assign({},e);return n.children&&n.children.length?(n.children=n.children.map(function(t){return a(t,e)}),Oe(n.href)||(n.href=i(n.href,n.label))):n.href=i(n.href,n.label,null,t&&t.label),n},o=Object.assign({},e.menu,{items:(e.menu.items||[]).map(function(e){return a(e)}),cta:Object.assign({},e.menu.cta)});return o.cta.label&&(o.cta.href=i(o.cta.href,o.cta.label)),{menu:o,sections:n.map(function(e){var t=Object.assign({},e);return[[`link`,`linkText`],[`link2`,`link2Text`],[`moreLink`,`moreText`]].forEach(function(n){t[n[1]]&&(t[n[0]]=i(t[n[0]],t[n[1]],e))}),t.items&&=t.items.map(function(t){var n=Object.assign({},t);if(e.type==`contact`)return Oe(n.link)&&(n.link=/address|location|where|gps|coordinates|visit|find/i.test(n.title||``)&&n.text?ke(n.text):``),n;if(n.link!==void 0||n.linkText){var r=n.linkText&&De(n.linkText).length?n.linkText:n.title;if(Oe(n.link)&&!n.linkText&&/^(list|stats|gallery|menu|booking|testimonial)$/.test(e.type))return n;n.link=i(n.link,r,e)}return n}),t})}}function Ne(t,r,i){i||={},ie=null;var a=C(r),o=a.fam,s=a.v,c=ae(t),l=oe(t);if(X=o,o.dark&&n.lum(c.bg)>=110){var u=o.dark==2?n.mix(c.ink,`#05060a`,.55):n.mix(c.ink,`#000000`,.25);c={bg:u,ink:c.bg,acc:c.acc,soft:n.mix(u,c.bg,.08)},ie=c}var d=n.lum(c.bg)<110;I={};var f=t.brand.gf||o.gf||{};f.h&&(l=Object.assign({},l,{h:de(f.h,f.hcat)}),z(f.h,f.hw||l.w)),f.hw&&(l=Object.assign({},l,{w:L(f.hw)})),f.b&&(l=Object.assign({},l,{b:de(f.b,f.bcat)}),z(f.b,400),z(f.b,700)),o.mono&&(o.monoW?z(o.mono,o.monoW):(z(o.mono,500),z(o.mono,600)));var p=`--bg:`+c.bg+`;--ink:`+c.ink+`;--acc:`+c.acc+`;--soft:`+c.soft+`;--oa:`+n.onColor(c.acc)+`;--oi:`+n.onColor(c.ink)+`;--line:`+n.mix(c.bg,c.ink,d?.3:.16)+`;--mute:`+n.mix(c.ink,c.bg,.3)+`;--card:`+(d?n.mix(c.bg,c.ink,.06):`#ffffff`)+`;--hf:`+l.h.replace(/"/g,`'`)+`;--bf:`+l.b.replace(/"/g,`'`)+`;--hw:`+l.w+`;--r:`+s.r+`px`,m=re(t,i.pageId),h=Me(t,m);t=Object.assign({},t,{menu:h.menu});var g=h.sections.map(function(n,r){F=n.fx||null;var a=(Y[n.type]||Y.text)(t,n,o),c=pe(n);F=null;var l=n.bg&&n.bg!=`auto`?n.bg:s.band!=`none`&&r%2==1&&n.type!=`hero`?o.dark&&s.band==`ink`?`soft`:s.band:`default`;return o.bands&&n.type==`cta`&&(l=`acc`),n.type!=`pagehead`||n.bg&&n.bg!=`auto`||(l=o.k==`bold`||o.k==`portal`?`ink`:`soft`),a.replace(`<section class="s `,`<section id="`+e(n.id)+`" data-sec="`+n.id+`" data-type="`+n.type+`" data-si="`+r+`"`+c.style+` class="s bg-`+l+` al-`+(n.align||`auto`)+c.cls+(i.sel==n.id?` sel`:``)+` `)}).join(``),_=i.openMenu;F=t.footer.fx||null;var v=Se(t,Q(Z(g)));F=null,ie=null;var y=Object.keys(I).map(function(e){return e+`:`+Object.keys(I[e]).join(`,`)}).join(`|`);return I=null,`<div id="top" class="pv tf-`+o.k+` tv-`+s.k+` dn-`+s.dens+`" style="`+p+`"`+(y?` data-gf="`+e(y)+`"`:``)+`><div class="vh vh-d">`+q(t,`desktop`,_==`desktop`)+`</div><div class="vh vh-t">`+q(t,`tablet`,_==`tablet`)+`</div><div class="vh vh-p">`+q(t,`phone`,_==`phone`)+`</div><main>`+g+`</main>`+v+(t.menu.vp.tablet.type==`bottom`?`<div class="vh vh-t">`+ve(t,`tablet`,_==`tablet`)+`</div>`:``)+(t.menu.vp.phone.type==`bottom`?`<div class="vh vh-p">`+ve(t,`phone`,_==`phone`)+`</div>`:``)+`</div>`}return{matchSection:je,DESIGNS:g,designsFor:te,fit:ee,siteText:S,VARIANT_HINTS:h,RETIRED:f,page:Ne,credits:Z,GRADES:o,PRICE_BY_GRADE:s,money:u,MIN_GRADE:c,priceFor:l,priceLabel:d,OFFERED:m,pageOf:re,allSections:ne,imageRef:A,imageRaw:k,decorate:le,SHADOWS:M,FRAMES:N,BSTYLES:se,TEMPLATES:p,FAMILIES:i,tpl:C,compat:w,SECTION_TYPES:t,MENU_TYPES:r,asset:T,picked:E}})(),ve=`/* BAKE Studio: styles for generated pages. Layout reacts to the width of .cq (the page frame). */
.cq{container-type:inline-size}
.pv{background:var(--bg);color:var(--ink);font:17px/1.6 var(--bf);--pad:56px;--gap:24px;--sy:64px;min-height:100%;position:relative}
.pv.dn-s{--sy:44px;--gap:16px;font-size:16px}.pv.dn-l{--sy:88px;--gap:30px}
.pv *{box-sizing:border-box}
.pv a{color:inherit}
.pv img{max-width:100%;display:block}
.pv svg{display:block}
.pv h1,.pv h2,.pv h3{font-family:var(--hf);font-weight:var(--hw);line-height:1.12;margin:0 0 .4em}
.pv h1{font-size:56px}.pv h2{font-size:34px}.pv h3{font-size:22px}
.pv p{margin:0 0 1em;max-width:70ch}
.pv .w{max-width:1200px;margin:0 auto;padding:0 var(--pad)}
.pv .s{padding:var(--sy) 0}
.pv .s.sel{outline:3px dashed var(--acc);outline-offset:-6px}
.pv .ey{font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--acc);margin-bottom:.6em}
.pv .bt{display:inline-block;background:var(--acc);color:var(--oa);padding:12px 22px;font-weight:700;text-decoration:none;border-radius:var(--r);margin:4px 8px 4px 0}
.pv .bt2{background:transparent;color:inherit;box-shadow:inset 0 0 0 2px currentColor}
.pv .mo{font-weight:700;text-decoration:none;color:var(--acc);white-space:nowrap}
.pv .mo:after{content:" →"}
.pv .sh{display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap;margin-bottom:18px}
.pv .sh h2{margin:0}
.pv .in{color:var(--mute);margin-top:-6px}
.pv .bg-soft{background:var(--soft)}
.pv .bg-ink{background:var(--ink);color:var(--oi)}.pv .bg-ink .ey,.pv .bg-ink .mo{color:inherit}
.pv .bg-acc{background:var(--acc);color:var(--oa)}.pv .bg-acc .ey,.pv .bg-acc .mo{color:inherit}.pv .bg-acc .bt{background:var(--bg);color:var(--ink)}
.pv .al-center .w,.pv .al-center .sh{text-align:center;justify-content:center}.pv .al-center p{margin-left:auto;margin-right:auto}

/* header and menus */
.pv .vh{display:none}
.pv .hd{display:flex;align-items:center;gap:20px;padding:16px var(--pad);border-bottom:1px solid var(--line);background:var(--bg);position:relative;z-index:5}
.pv .hd.sk{box-shadow:0 2px 0 var(--line)}
.pv .hd .lg{display:flex;align-items:center;text-decoration:none;flex:0 0 auto}
.pv .hd .lg img{height:44px;width:auto}
.pv .mn{display:flex;align-items:center;gap:22px;flex:1;font-weight:600;font-size:15px}
.pv .mn>a,.pv .dd>summary{text-decoration:none;cursor:pointer;white-space:nowrap}
.pv .ha{display:flex;align-items:center;gap:12px;margin-left:auto}
.pv .hc{margin:0}
.pv .sr{font-size:22px;line-height:1}
.pv details>summary{list-style:none}.pv details>summary::-webkit-details-marker{display:none}
.pv .dd{position:relative}
.pv .dd>summary:after{content:" ▾";font-size:12px}
.pv .pn{position:absolute;top:calc(100% + 12px);left:-12px;background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--r);padding:10px;min-width:220px;display:grid;gap:2px;box-shadow:0 12px 30px rgba(0,0,0,.12);z-index:20}
.pv .pn a{padding:8px 10px;text-decoration:none;font-weight:500;border-radius:var(--r)}
.pv .pn a:hover{background:var(--soft)}
.pv .mg{position:static}
.pv .mg .pn{left:var(--pad);right:var(--pad);top:100%;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:20px;padding:22px}
.pv .dg{display:grid;gap:2px;align-content:start}
.pv .dg strong{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);padding:4px 10px}
.pv .dg a{padding:7px 10px;text-decoration:none}
.pv .hd-mega{position:relative}
.pv .hd-split{justify-content:center}
.pv .hd-split .ml{justify-content:flex-end}.pv .hd-split .mr{justify-content:flex-start}
.pv .lp-center:not(.hd-split){justify-content:space-between}
.pv .lp-center.hd-hamburger .lg,.pv .lp-center.hd-bottom .lg{position:absolute;left:50%;transform:translateX(-50%)}
.pv .dr{position:static}
.pv .dr>summary{border:2px solid currentColor;border-radius:var(--r);padding:6px 14px;font-weight:700;cursor:pointer;white-space:nowrap}
.pv .dw{position:absolute;left:0;right:0;top:100%;background:var(--card);color:var(--ink);border-bottom:1px solid var(--line);padding:18px var(--pad);display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:18px;box-shadow:0 14px 30px rgba(0,0,0,.12);z-index:20}
.pv .bb{position:sticky;bottom:0;display:grid;grid-template-columns:repeat(4,1fr);background:var(--card);border-top:1px solid var(--line);z-index:10}
.pv .bb>a,.pv .bm>summary{display:flex;flex-direction:column;align-items:center;gap:2px;padding:8px 4px 10px;font-size:12px;font-weight:600;text-decoration:none;text-align:center;cursor:pointer}
.pv .bb i{font-style:normal;font-size:16px;color:var(--acc)}
.pv .bm .dw{top:auto;bottom:100%;grid-template-columns:1fr 1fr}

/* hero layouts */
.pv .s-hero{padding:0}
.pv .s-hero .hx{max-width:1200px;margin:0 auto;padding:var(--sy) var(--pad)}
.pv .hm{overflow:hidden;border-radius:var(--r)}
.pv .hm svg,.pv .hm img{width:100%;height:100%;object-fit:cover}
.pv .hl-split .hx{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center}
.pv .hl-split .hm{aspect-ratio:4/3}
.pv .hl-overlay{position:relative;color:#fff}
.pv .hl-overlay .hx{position:relative;min-height:520px;display:flex;align-items:flex-end;max-width:none}
.pv .hl-overlay .hm{position:absolute;inset:0;border-radius:0}
.pv .hl-overlay .hm:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.65),rgba(0,0,0,.05) 70%)}
.pv .hl-overlay .ht{position:relative;z-index:1;max-width:760px;width:100%;margin:0 auto 0 max(0px,calc((100% - 1200px)/2))}
.pv .hl-overlay .ey{color:#fff}
.pv .hl-center .ht{text-align:center;max-width:820px;margin:0 auto}
.pv .hl-center p{margin-left:auto;margin-right:auto}
.pv .hl-center .hm{margin-top:40px;aspect-ratio:21/8}
.pv .hl-editorial .ht{max-width:900px;border-bottom:3px solid var(--ink);padding-bottom:28px;margin-bottom:28px}
.pv .hl-editorial .hm{aspect-ratio:21/8}
.pv .hl-band .hm{aspect-ratio:16/4.5;border-radius:0;margin:0 calc(-1 * var(--pad)) 40px}
.pv .hl-band .hx{display:flex;flex-direction:column}
.pv .hl-band .hm{order:-1}
.pv .hl-portal{background:var(--ink);color:var(--oi)}
.pv .hl-portal .hx{display:grid;grid-template-columns:1.3fr 1fr;gap:40px;align-items:center}
.pv .hl-portal .hm{aspect-ratio:1;border-radius:50%;max-width:380px;justify-self:end;width:100%}
.pv .hl-portal .ey{color:var(--acc)}
.pv .bts{margin-top:8px}

/* card grids */
.pv .tl{display:grid;gap:var(--gap);grid-template-columns:repeat(3,1fr)}
.pv .tl.c2{grid-template-columns:repeat(2,1fr)}.pv .tl.c4{grid-template-columns:repeat(4,1fr)}
.pv .ti{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .ti h3{font-size:20px;margin:0 0 6px}
.pv .ti p{font-size:15px;color:var(--mute);margin:0 0 8px}
.pv .ti b{font-size:14px;color:var(--acc);margin-top:auto}
.pv .tim{display:block;overflow:hidden;border-radius:var(--r);aspect-ratio:16/10;margin-bottom:12px}
.pv .tim svg{width:100%;height:100%}
.pv .tx{display:flex;flex-direction:column;flex:1}
.pv .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px}
.pv .tl-app .ti{background:var(--card);border:1px solid var(--line);border-radius:max(12px,var(--r));padding:22px;min-height:150px;box-shadow:0 2px 8px rgba(0,0,0,.05)}
.pv .tl-rule .ti{border-top:3px solid var(--ink);padding-top:14px}
.pv .tl-list{grid-template-columns:1fr!important;gap:0}
.pv .tl-list .ti{flex-direction:row;align-items:center;gap:16px;border-bottom:1px solid var(--line);padding:16px 0}
.pv .tl-list .tx{flex-direction:row;align-items:baseline;gap:16px;flex-wrap:wrap}
.pv .tl-list .ti h3{margin:0;min-width:240px}.pv .tl-list .ti p{margin:0}
.pv .tl-list .tim{width:64px;flex:0 0 64px;margin:0;aspect-ratio:1}
.pv .tl-icons .ti{background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:20px;flex-direction:row;gap:14px;align-items:flex-start}
.pv .tl-icons .tim{flex:0 0 56px;width:56px;aspect-ratio:1;margin:0;border-radius:50%}
.pv .tl-bento{grid-template-columns:repeat(4,1fr)!important;grid-auto-rows:minmax(140px,auto)}
.pv .tl-bento .ti{background:var(--soft);border-radius:var(--r);padding:20px;justify-content:flex-end}
.pv .tl-bento .ti:first-child{grid-column:span 2;grid-row:span 2;background:var(--ink);color:var(--oi)}
.pv .tl-bento .ti:first-child h3{font-size:30px}.pv .tl-bento .ti:first-child p{color:inherit;opacity:.85}
.pv .tl-bento .ti:nth-child(4){grid-column:span 2;background:var(--acc);color:var(--oa)}
.pv .tl-bento .ti:nth-child(4) p,.pv .tl-bento .ti:nth-child(4) b{color:inherit}
.pv .tl-cols{grid-template-columns:repeat(2,1fr)!important;gap:0 40px}
.pv .tl-cols .ti{padding:12px 0;border-bottom:1px dotted var(--line)}
.pv .tl-cols .ti h3{font-size:18px;margin:0}
.pv .bg-ink .tl-cards .ti,.pv .bg-ink .tl-app .ti,.pv .bg-ink .tl-icons .ti,.pv .bg-acc .tl-cards .ti,.pv .bg-acc .tl-app .ti,.pv .bg-acc .tl-icons .ti{color:var(--ink)}

/* feature, text, list, others */
.pv .fe{display:grid;gap:36px;align-items:center}
.pv .fe-split{grid-template-columns:1fr 1fr}
.pv .fe-wide .fm{aspect-ratio:21/8}
.pv .fe-wide .fx{max-width:820px}
.pv .fe-card{grid-template-columns:2fr 3fr;background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:24px;color:var(--ink)}
.pv .fe h3{font-size:30px}
.pv .fm{overflow:hidden;border-radius:var(--r);aspect-ratio:4/3}
.pv .fm svg,.pv .fm img{width:100%;height:100%;object-fit:cover}
.pv .s-text .w{display:grid;gap:40px;align-items:center}
.pv .s-text.wi .w{grid-template-columns:3fr 2fr}
.pv .ls{border-top:1px solid var(--line)}
.pv .lr{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--line);flex-wrap:wrap}
.pv .lr strong{flex:1;min-width:200px}
.pv .lr span{flex:2;color:var(--mute)}
.pv .stt{display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:var(--gap);text-align:center}
.pv .stt b{display:block;font-family:var(--hf);font-size:46px;color:var(--acc);line-height:1.1}
.pv .gl{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.pv .gl figure{margin:0}.pv .gl figure>svg,.pv .gl figure>img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:var(--r)}
.pv .gl figcaption{font-size:14px;color:var(--mute);margin-top:6px}
.pv .qs{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:var(--gap)}
.pv .qs blockquote{margin:0;background:var(--soft);padding:26px;border-radius:var(--r);color:var(--ink)}
.pv .qs blockquote p{font-family:var(--hf);font-size:21px}
.pv .qs cite{font-style:normal;font-weight:700;font-size:14px}
.pv .s-cta .w{text-align:center}.pv .s-cta p{margin-left:auto;margin-right:auto}
.pv .bg-default.s-cta,.pv .bg-auto.s-cta{background:var(--soft)}
.pv .ct{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:18px;margin:0 0 20px}
.pv .ct dt{font-size:13px;letter-spacing:.1em;text-transform:uppercase;color:var(--acc);font-weight:700}.pv .ct dd{margin:4px 0 0}
.pv .ft{background:var(--ink);color:var(--oi);padding:44px 0}
.pv .ft .w{display:grid;grid-template-columns:1fr 2fr;gap:32px}
.pv .ft .fb{display:grid;gap:12px;justify-items:start}
.pv .ft .fb svg,.pv .ft .fb img{background:var(--bg);padding:6px 10px;border-radius:var(--r);height:46px!important;width:auto}
.pv .ft .mt{font-weight:800;letter-spacing:.12em;font-size:13px}
.pv .ft nav{display:flex;flex-wrap:wrap;gap:10px 22px;align-content:start}
.pv .ft nav a{text-decoration:none;opacity:.9;font-size:15px}
.pv .ft .cp{grid-column:1/-1;font-size:14px;opacity:.75;margin:0}

/* meta lines, videos, podcasts, page headers */
.pv .meta{display:block;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--acc);font-weight:700;margin-bottom:4px}
.pv .tim img{width:100%;height:100%;object-fit:cover}
.pv .vi{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .vt{position:relative;display:block;aspect-ratio:16/9;overflow:hidden;border-radius:var(--r);background:var(--ink)}
.pv .vt>svg,.pv .vt>img{width:100%;height:100%;object-fit:cover}
.pv .play{position:absolute;left:50%;top:50%;width:56px;height:56px;margin:-28px 0 0 -28px;border-radius:50%;background:rgba(0,0,0,.62);box-shadow:0 0 0 3px rgba(255,255,255,.85)}
.pv .play:after{content:"";position:absolute;left:22px;top:17px;border-style:solid;border-width:11px 0 11px 18px;border-color:transparent transparent transparent #fff}
.pv .du{position:absolute;right:8px;bottom:8px;background:rgba(0,0,0,.75);color:#fff;font-size:12px;font-weight:700;padding:2px 6px;border-radius:4px}
.pv .vx{padding-top:10px}.pv .vx h3{font-size:17px;line-height:1.3;margin:0}.pv .vx p{font-size:15px;color:var(--mute);margin:8px 0 0}
.pv .vg{display:grid;grid-template-columns:repeat(4,1fr);gap:var(--gap)}
.pv .vl-lead{display:grid;grid-template-columns:2fr 1fr;gap:var(--gap);margin-bottom:var(--gap)}
.pv .vi.big .vx h3{font-size:28px}.pv .vi.big .play{width:84px;height:84px;margin:-42px 0 0 -42px}.pv .vi.big .play:after{left:33px;top:25px;border-width:17px 0 17px 27px}
.pv .rail{display:grid;gap:14px;align-content:start}
.pv .rail .vi{flex-direction:row;gap:12px;align-items:flex-start}
.pv .rail .vt{flex:0 0 44%;width:44%}.pv .rail .vx{padding:0}.pv .rail .vx h3{font-size:15px}
.pv .rail .play{width:34px;height:34px;margin:-17px 0 0 -17px}.pv .rail .play:after{left:13px;top:10px;border-width:7px 0 7px 11px}
.pv .vrow{display:grid;grid-auto-flow:column;grid-auto-columns:calc((100% - 3 * var(--gap)) / 3.5);gap:var(--gap);overflow:hidden}
.pv .arr{display:flex;justify-content:flex-end;gap:8px;margin-top:12px}.pv .arr span{width:38px;height:38px;border-radius:50%;border:2px solid currentColor;display:grid;place-items:center;font-size:20px;line-height:1}
.pv .pods{display:grid;grid-template-columns:repeat(2,1fr);gap:var(--gap)}
.pv .pod{display:flex;gap:16px;background:var(--card);border:1px solid var(--line);border-radius:var(--r);padding:14px;color:var(--ink)}
.pv .pc{flex:0 0 96px;height:96px;border-radius:var(--r);overflow:hidden}.pv .pc svg,.pv .pc img{width:100%;height:100%;object-fit:cover}
.pv .px{flex:1;min-width:0}.pv .px h3{font-size:18px;margin:0 0 4px}.pv .px p{font-size:14px;color:var(--mute);margin:0 0 8px}
.pv .pod .bar{display:flex;align-items:center;gap:10px;margin-top:8px}
.pv .pb{width:34px;height:34px;border-radius:50%;background:var(--acc);color:var(--oa);display:grid;place-items:center;font-size:13px;flex:0 0 34px}
.pv .tr{flex:1;height:5px;border-radius:5px;background:var(--line);overflow:hidden}.pv .tr i{display:block;height:100%;background:var(--acc)}
.pv .tm{font-size:12px;color:var(--mute)}
.pv .s-pagehead{padding:calc(var(--sy) * .8) 0}
.pv .s-pagehead h1{font-size:46px;margin:0 0 10px}
.pv .crumb{font-size:13px;opacity:.75;margin:0 0 10px}.pv .crumb span{margin:0 4px}
.pv .phm{max-width:1200px;margin:24px auto 0;padding:0 var(--pad)}.pv .phm img,.pv .phm svg{width:100%;aspect-ratio:21/6;object-fit:cover;border-radius:var(--r)}
.pv.tf-news .s-videos h2,.pv.tf-news .s-podcast h2{font-size:15px;letter-spacing:.14em;text-transform:uppercase;font-family:var(--bf);font-weight:800;border-bottom:2px solid var(--ink);padding-bottom:6px;width:100%}
.pv.tf-bold .s-videos,.pv.tf-portal .s-videos.vs-row{background:var(--ink);color:var(--oi)}
.pv.tf-app .vt,.pv.tf-app .pod{border-radius:max(12px,var(--r))}
.pv.tf-story .vi.big .vx h3{font-style:italic;font-weight:400}

/* template families */
.pv.tf-news .hd{border-bottom:3px double var(--ink)}
.pv.tf-news .s-tiles h2,.pv.tf-news .s-list h2,.pv.tf-news .s-feature .sh h2{font-size:15px;letter-spacing:.14em;text-transform:uppercase;font-family:var(--bf);font-weight:800;border-bottom:2px solid var(--ink);padding-bottom:6px;width:100%}
.pv.tf-news .s-feature .sh .mo{position:relative;top:-34px;margin-left:auto}
.pv.tf-news .fe h3{font-size:40px}
.pv.tf-app .s{padding:calc(var(--sy) * .6) 0}
.pv.tf-app .s-hero .hx{padding-bottom:20px}
.pv.tf-app .s-feature .w>.fe,.pv.tf-app .s-list .w,.pv.tf-app .s-text .w{background:var(--card);border:1px solid var(--line);border-radius:max(12px,var(--r));padding:24px;color:var(--ink)}
.pv.tf-app .s-list .w,.pv.tf-app .s-text .w{max-width:none;margin:0 max(var(--pad),calc((100% - 1200px) / 2 + var(--pad)))}
.pv.tf-mag h2{font-size:40px}
.pv.tf-min{--pad:72px}
.pv.tf-min .hd{border-bottom:0}
.pv.tf-min .s-tiles .w,.pv.tf-min .s-list .w,.pv.tf-min .s-text .w,.pv.tf-min .s-feature .w{max-width:900px}
.pv.tf-min h2{font-weight:400}
.pv.tf-bold .hd{background:var(--ink);color:var(--oi);border:0}
.pv.tf-bold .hd .lg svg,.pv.tf-bold .hd .lg img{background:var(--bg);border-radius:var(--r);padding:4px 8px}
.pv.tf-bold h2{text-transform:uppercase;letter-spacing:.02em}
.pv.tf-portal .hd{background:var(--ink);color:var(--oi);border:0}
.pv.tf-portal .hd .lg svg,.pv.tf-portal .hd .lg img{background:var(--bg);border-radius:var(--r);padding:4px 8px}
.pv.tf-portal .hd-mega .mn,.pv.tf-portal .hd-bar .mn{gap:28px}
.pv.tf-story h2{font-size:42px;font-weight:400;font-style:italic}
.pv.tf-story .s-text .tb{max-width:720px;margin:0 auto;font-size:19px}
.pv.tf-board{--sy:40px}
.pv.tf-board main{display:grid;grid-template-columns:1fr 1fr;max-width:1200px;margin:0 auto;padding:0 var(--pad);gap:0 40px}
.pv.tf-board main>.s{padding:var(--sy) 0}
.pv.tf-board main>.s .w{padding:0}
.pv.tf-board main>.s-hero,.pv.tf-board main>.s-tiles,.pv.tf-board main>.s-gallery,.pv.tf-board main>.s-cta{grid-column:1/-1}
.pv.tf-board h2{font-size:22px;border-bottom:2px solid var(--acc);padding-bottom:6px}

/* desktop / tablet / phone */
@container (min-width:1024px){.pv .vh-d{display:block}}
@container (min-width:600px) and (max-width:1023.98px){
.pv .vh-t{display:block}
.pv{--pad:32px;--sy:48px}
.pv h1{font-size:44px}.pv h2{font-size:28px}
.pv .tl.c4,.pv .tl-bento{grid-template-columns:repeat(2,1fr)!important}.pv .tl.c3{grid-template-columns:repeat(2,1fr)}
.pv .hl-split .hx,.pv .hl-portal .hx{grid-template-columns:1fr 1fr;gap:28px}
.pv .mn{gap:14px;font-size:14px}
.pv .gl{grid-template-columns:repeat(2,1fr)}
.pv.tf-board main{grid-template-columns:1fr}
.pv .vg{grid-template-columns:repeat(2,1fr)}
.pv .vl-lead{grid-template-columns:3fr 2fr}
.pv .vrow{grid-auto-columns:calc((100% - var(--gap)) / 2.3)}
.pv .s-pagehead h1{font-size:38px}
}
@container (max-width:599.98px){
.pv .vh-p{display:block}
.pv{--pad:20px;--sy:36px;font-size:16px}
.pv h1{font-size:34px}.pv h2{font-size:24px}.pv h3{font-size:19px}
.pv .tl,.pv .tl.c2,.pv .tl.c4,.pv .tl-cols{grid-template-columns:1fr!important}
.pv .vg{grid-template-columns:1fr 1fr;gap:14px}.pv .vg .vx h3{font-size:14px}
.pv .vl-lead{grid-template-columns:1fr}.pv .vi.big .vx h3{font-size:22px}
.pv .vrow{grid-auto-columns:72%}
.pv .pods{grid-template-columns:1fr}.pv .pc{flex-basis:72px;height:72px}
.pv .s-pagehead h1{font-size:32px}.pv .phm img,.pv .phm svg{aspect-ratio:16/7}
.pv .tl-app{grid-template-columns:1fr 1fr!important;gap:10px}
.pv .tl-app .ti{padding:14px;min-height:120px}.pv .tl-app .ti h3{font-size:16px}.pv .tl-app .ti p{font-size:13px}
.pv .tl-bento{grid-template-columns:1fr 1fr!important}
.pv .tl-bento .ti:first-child,.pv .tl-bento .ti:nth-child(4){grid-column:span 2;grid-row:auto}
.pv .tl-list .tx{display:block}.pv .tl-list .ti h3{min-width:0}
.pv .hl-split .hx,.pv .hl-portal .hx,.pv .fe-split,.pv .fe-card,.pv .s-text.wi .w,.pv .ft .w{grid-template-columns:1fr}
.pv .hl-portal .hm{max-width:220px;justify-self:start}
.pv .hl-overlay .hx{min-height:420px}
.pv .hl-center .hm,.pv .hl-editorial .hm,.pv .fe-wide .fm{aspect-ratio:16/10}
.pv .hl-band .hm{aspect-ratio:16/7}
.pv .gl{grid-template-columns:repeat(2,1fr)}
.pv .lr{display:block}.pv .lr strong{display:block}
.pv .fe h3{font-size:24px}.pv.tf-news .fe h3{font-size:28px}
.pv.tf-news .s-feature .sh .mo{position:static}
.pv.tf-board main{grid-template-columns:1fr}
.pv .hd{padding:12px var(--pad);gap:10px}
.pv .hd .lg img{height:34px}
.pv .hc{padding:8px 12px;font-size:14px}
.pv .dw{grid-template-columns:1fr 1fr}
}


/* ---------- menu, booking and products sections (2026-11-14) ---------- */
.pv .mu-g{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:40px 48px}
.pv .mu-h{font-size:15px;letter-spacing:.14em;text-transform:uppercase;color:var(--acc);font-family:var(--bf);font-weight:700;margin:0 0 14px;padding-bottom:10px;border-bottom:1px solid var(--line)}
.pv .mu-i{display:flex;gap:16px;align-items:flex-start;padding:12px 0}
.pv .mu-im{flex:0 0 72px;width:72px;height:72px;border-radius:var(--r);overflow:hidden}
.pv .mu-im>:is(img,svg){width:100%;height:100%;object-fit:cover}
.pv .mu-x{flex:1;min-width:0}
.pv .mu-l{display:flex;align-items:baseline;gap:10px}
.pv .mu-l strong{font-size:18px}
.pv .mu-d{flex:1;min-width:16px;border-bottom:1px dotted var(--mute);transform:translateY(-4px)}
.pv .mu-p{font-size:18px;white-space:nowrap}
.pv .mu-x p{margin:4px 0 0;font-size:15px;color:var(--mute)}
.pv .mu-f{margin-top:28px}
.pv .bk{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:start}
.pv .bk-at{font-size:13px;letter-spacing:.12em;text-transform:uppercase;font-weight:700;color:var(--acc);margin:24px 0 10px}
.pv .bk-ar{list-style:none;margin:0;padding:0;display:flex;flex-wrap:wrap;gap:8px}
.pv .bk-ar li{padding:6px 14px;border:1px solid var(--line);border-radius:999px;font-size:14px;font-weight:600}
.pv .bk-b{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:var(--r);padding:28px;box-shadow:0 18px 40px -24px rgba(0,0,0,.35)}
.pv .bk-b h3{margin:0 0 8px}
.pv .bk-i{display:flex;align-items:center;gap:16px;padding:14px 0;border-bottom:1px solid var(--line)}
.pv .bk-x{flex:1;display:grid;gap:2px}.pv .bk-x span{font-size:14px;color:var(--mute)}
.pv .bk-i b{white-space:nowrap;color:var(--acc)}
.pv .bk-bt{display:block;text-align:center;margin:20px 0 0}
.pv .bk-n{font-size:13px;color:var(--mute);margin:10px 0 0;text-align:center;max-width:none}
.pv .pr-g{display:grid;grid-template-columns:repeat(3,1fr);gap:28px var(--gap)}
.pv .pr-g.c2{grid-template-columns:repeat(2,1fr)}.pv .pr-g.c4{grid-template-columns:repeat(4,1fr)}
.pv .pr-i{display:flex;flex-direction:column;text-decoration:none;color:inherit;min-width:0}
.pv .pr-im{position:relative;display:block;aspect-ratio:1;border-radius:var(--r);overflow:hidden;background:var(--soft);margin-bottom:14px}
.pv .pr-im>:is(img,svg){width:100%;height:100%;object-fit:cover}
.pv .pr-bd{position:absolute;left:12px;top:12px;background:var(--bg);color:var(--ink);font-size:12px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;padding:4px 10px;border-radius:999px}
.pv .pr-t{display:flex;align-items:baseline;justify-content:space-between;gap:12px}
.pv .pr-t h3{font-size:19px;margin:0}
.pv .pr-p{white-space:nowrap}
.pv .pr-x p{font-size:15px;color:var(--mute);margin:6px 0 10px}
.pv .pr-btn{font-weight:700;font-size:14px;color:var(--acc)}
.pv .pr-btn:after{content:" →"}
.pv.tf-board main>:is(.s-menu,.s-products,.s-booking){grid-column:1/-1}
@container (max-width:1023.98px){.pv .pr-g,.pv .pr-g.c4{grid-template-columns:repeat(2,1fr)}.pv .bk{gap:32px}}
@container (max-width:599.98px){.pv .bk{grid-template-columns:1fr}.pv .mu-g{grid-template-columns:1fr;gap:28px}.pv .pr-g,.pv .pr-g.c2,.pv .pr-g.c4{grid-template-columns:1fr 1fr;gap:20px 12px}.pv .pr-t{display:block}.pv .bk-b{padding:20px}}


/* numbered steps card style (any template): cards count 1, 2, 3… with a line joining them */
.pv .tl-steps{counter-reset:stp;position:relative}
.pv .tl-steps .ti{counter-increment:stp;position:relative;padding-top:72px}
.pv .tl-steps .ti:before{content:counter(stp);position:absolute;left:0;top:0;width:52px;height:52px;border-radius:50%;display:grid;place-items:center;background:var(--acc);color:var(--oa);font:var(--hw) 22px/1 var(--hf);z-index:1}
.pv .tl-steps .ti:after{content:"";position:absolute;left:60px;right:-8px;top:26px;border-top:2px dashed var(--line)}
.pv .tl-steps .ti:last-child:after{display:none}
@container (max-width:599.98px){.pv .tl-steps .ti:after{display:none}}

/* ---------- inspector overrides (set per section in step 3; see render.js lxAttr) ---------- */
.pv .s.lx-pt{padding-top:var(--pt)!important}
.pv .s.lx-pb{padding-bottom:var(--pb)!important}
.pv .s-hero.lx-pt,.pv .s-hero.lx-pb{padding-top:0!important;padding-bottom:0!important}
.pv .s-hero.lx-pt .hx{padding-top:var(--pt)!important}
.pv .s-hero.lx-pb .hx{padding-bottom:var(--pb)!important}
.pv .s.lx-cw .w,.pv .s.lx-cw .hx,.pv .s.lx-cw .phm{max-width:var(--cw)!important}
.pv .s.lx-full .w,.pv .s.lx-full .hx,.pv .s.lx-full .phm{max-width:none!important}
.pv .s.lx-mh{min-height:var(--mh);display:flex;flex-direction:column;justify-content:center}
.pv .s.lx-va-top{justify-content:flex-start}.pv .s.lx-va-bottom{justify-content:flex-end}
.pv .s-hero.lx-mh .hx{min-height:var(--mh);width:100%;box-sizing:border-box}
.pv .s.lx-bg{background:var(--sbg)!important;color:var(--sink)!important}
.pv .s.lx-ink{color:var(--sink)!important}
.pv .s.lx-bg h1,.pv .s.lx-bg h2,.pv .s.lx-bg h3,.pv .s.lx-ink h1,.pv .s.lx-ink h2,.pv .s.lx-ink h3{color:inherit}
.pv .al-left .w,.pv .al-left .sh,.pv .al-left .ht{text-align:left;justify-content:flex-start}
.pv .al-right .w,.pv .al-right .sh,.pv .al-right .ht{text-align:right;justify-content:flex-end}
.pv .al-right p{margin-left:auto}
@container (max-width:599.98px){
  .pv .s.lx-pt:not(.s-hero){padding-top:calc(var(--pt) * .6)!important}
  .pv .s.lx-pb:not(.s-hero){padding-bottom:calc(var(--pb) * .6)!important}
  .pv .s-hero.lx-pt .hx{padding-top:calc(var(--pt) * .6)!important}
  .pv .s-hero.lx-pb .hx{padding-bottom:calc(var(--pb) * .6)!important}
}

/* ---------- image frames (set in the step 3 image editor; see render.js frameAttrs) ----------
   The frame sits on the <img>/<svg> itself through CSS variables. Frame styles (.fr-*) only set
   variables, and the editor's own choices arrive as inline variables, so they always win. */
.pv .fr{box-sizing:border-box!important;border:var(--ibw,0px) var(--ibs,solid) var(--ibc,var(--ink))!important;border-radius:var(--ibr,var(--r))!important;box-shadow:var(--ish,none)!important;padding:var(--ipad,0px)!important;background:var(--ibg,transparent)!important;transform:var(--itf,none);filter:var(--iflt,none)}
.pv :has(> .fr){overflow:visible!important;border-radius:0!important;background:none!important}
.pv .fr-polaroid,.pv .fr-tilt{--ipad:10px 10px 38px;--ibg:#ffffff;--ish:0 8px 22px rgba(0,0,0,.24);--ibr:2px}
.pv .fr-tilt{--itf:rotate(-2.5deg)}
.pv .fr-mat{--ibw:10px;--ibc:#2b2622;--ipad:22px;--ibg:#f6f1e7;--ibr:0px;--ish:0 6px 18px rgba(0,0,0,.18)}
.pv .fr-gold{--ibw:14px;--ibs:ridge;--ibc:#c49a3a;--ipad:6px;--ibg:#f5ecd2;--ibr:0px;--ish:0 6px 16px rgba(0,0,0,.25)}
.pv .fr-double{--ibw:7px;--ibs:double;--ipad:6px;--ibr:0px}
.pv .fr-vintage{--ibw:10px;--ibc:#fffaf0;--ibr:4px;--ish:0 4px 14px rgba(60,40,20,.3);--iflt:sepia(.45) saturate(.85) contrast(1.05)}
.pv .fr-circle{--ibr:50%;aspect-ratio:1/1!important;height:auto!important;object-fit:cover}
.pv .fr-arch{--ibr:999px 999px 6px 6px}
.pv .fr-blob{--ibr:42% 58% 63% 37% / 41% 44% 56% 59%}
.pv .fr-offset{--ish:14px 14px 0 var(--acc);--ibr:0px}
.pv .fr-neon{--ibw:2px;--ibc:var(--acc);--ish:0 0 0 3px var(--acc),0 0 28px var(--acc)}

/* ======================================================================
   Designer families (2026-11-14): tide, ember, folio, block, bento, craft, glow, swiss, retro, lens.
   Each family brings its own fonts (render.js FAMILIES gf) and works with any palette.
   ====================================================================== */
/* shared: gallery captions sit on the picture; first picture is big */
.pv:is(.tf-tide,.tf-bento,.tf-craft,.tf-lens,.tf-glow,.tf-retro) .gl figure{position:relative}
.pv:is(.tf-tide,.tf-bento,.tf-craft,.tf-lens,.tf-glow,.tf-retro) .gl figcaption{position:absolute;left:12px;bottom:12px;margin:0;background:var(--bg);color:var(--ink);padding:4px 12px;border-radius:999px;font-size:13px;font-weight:600}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:repeat(3,1fr)}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl:has(>figure:nth-child(5):last-child){grid-template-columns:repeat(4,1fr)}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl figure:first-child{grid-column:span 2;grid-row:span 2}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl figure:first-child>:is(img,svg){height:100%;aspect-ratio:auto}

/* ---------- Tide: airy, rounded, floating menu ---------- */
.pv.tf-tide h1{font-size:64px;letter-spacing:-.025em;line-height:1.02}
.pv.tf-tide h2{font-size:40px;letter-spacing:-.02em}
.pv.tf-tide .hd{border:0;margin:16px var(--pad) 0;border-radius:999px;background:var(--card);box-shadow:0 8px 30px rgba(0,0,0,.08);padding:10px 12px 10px 24px}
.pv.tf-tide .bt{border-radius:999px;padding:14px 26px}
.pv.tf-tide .dr>summary{border-radius:999px}
.pv.tf-tide .s-hero{padding:24px var(--pad) 0}
.pv.tf-tide .s-hero .hx{background:linear-gradient(140deg,var(--soft),var(--bg) 85%);border-radius:40px;padding:72px 64px}
.pv.tf-tide .hm,.pv.tf-tide .fm{border-radius:32px}
.pv.tf-tide .hl-split .hm{aspect-ratio:1;box-shadow:0 30px 60px -20px rgba(0,0,0,.25)}
.pv.tf-tide .ey{display:inline-block;background:var(--card);color:var(--ink);padding:6px 14px;border-radius:999px;letter-spacing:.06em;box-shadow:0 2px 10px rgba(0,0,0,.06)}
.pv.tf-tide .stt{gap:16px}
.pv.tf-tide .stt>div{background:var(--soft);border-radius:28px;padding:28px 16px}
.pv.tf-tide .stt b{color:var(--ink);font-size:48px}
.pv.tf-tide .tl-cards .ti{border:0;border-radius:28px;padding:28px;box-shadow:0 10px 30px -10px rgba(0,0,0,.14)}
.pv.tf-tide .meta{display:inline-block;align-self:flex-start;background:var(--soft);color:var(--ink);border-radius:999px;padding:4px 12px;letter-spacing:.04em}
.pv.tf-tide .gl{gap:16px}.pv.tf-tide .gl figure>:is(img,svg){border-radius:24px}
.pv.tf-tide .qs blockquote{background:var(--card);border-radius:28px;box-shadow:0 10px 30px -10px rgba(0,0,0,.14);position:relative;padding:34px 28px 26px}
.pv.tf-tide .qs blockquote:before{content:"“";position:absolute;top:-6px;left:24px;font:700 70px/1 var(--hf);color:var(--acc)}
.pv.tf-tide .ct>div{background:var(--soft);border-radius:24px;padding:20px}
.pv.tf-tide .s-cta.bg-default,.pv.tf-tide .s-cta.bg-auto{background:transparent}
.pv.tf-tide .s-cta .w{background:var(--acc);color:var(--oa);border-radius:40px;padding:72px 48px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-tide .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-tide .ft{border-radius:40px 40px 0 0;margin-top:24px}

/* ---------- Ember: dark, warm, elegant ---------- */
.pv.tf-ember h1,.pv.tf-ember h2{font-weight:500}
.pv.tf-ember h1{font-size:78px;line-height:1;letter-spacing:-.01em}
.pv.tf-ember h2{font-size:44px;font-style:italic}
.pv.tf-ember .hd{border-bottom:1px solid var(--line)}
.pv.tf-ember :is(.mn,.dr>summary){font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.14em}
.pv.tf-ember .bt{border-radius:0;text-transform:uppercase;letter-spacing:.16em;font-size:13px;padding:15px 28px}
.pv.tf-ember .bt2{box-shadow:inset 0 0 0 1px currentColor}
.pv.tf-ember .ey{letter-spacing:.3em;font-weight:600;display:flex;align-items:center;gap:14px}
.pv.tf-ember .ey:before{content:"";width:40px;height:1px;background:currentColor}
.pv.tf-ember .hl-overlay .hx{min-height:640px;align-items:center}
.pv.tf-ember .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(0,0,0,.82),rgba(0,0,0,.3) 75%),linear-gradient(0deg,rgba(0,0,0,.6),transparent 50%)}
.pv:is(.tf-ember,.tf-craft) .s-contact .w{text-align:center}
.pv.tf-ember .sh{justify-content:center;text-align:center;flex-direction:column;align-items:center;gap:6px}
.pv.tf-ember .sh:after{content:"✦";color:var(--acc);font-size:14px}
.pv.tf-ember .in{text-align:center;margin:0 auto 28px}
.pv.tf-ember .stt{gap:0}
.pv.tf-ember .stt>div{border-left:1px solid var(--line);padding:8px}.pv.tf-ember .stt>div:first-child{border:0}
.pv.tf-ember .stt b{font-style:italic;font-weight:500}
.pv.tf-ember .stt span{font-size:12px;text-transform:uppercase;letter-spacing:.2em;opacity:.75}
.pv.tf-ember .tl-cols{gap:0 72px;max-width:1000px;margin:0 auto}
.pv.tf-ember .tl-cols .ti{border-bottom:0;padding:16px 0}
.pv.tf-ember .tl-cols .tx{display:grid;grid-template-columns:1fr auto;column-gap:12px}
.pv.tf-ember .tl-cols .meta{grid-column:2;grid-row:1;align-self:end;font-weight:600;letter-spacing:.14em}
.pv.tf-ember .tl-cols h3{grid-column:1;grid-row:1;font-size:22px;display:flex;gap:12px;align-items:baseline}
.pv.tf-ember .tl-cols h3:after{content:"";flex:1;border-bottom:1px dotted var(--mute);transform:translateY(-5px)}
.pv.tf-ember .tl-cols p{grid-column:1/-1;font-style:italic}
.pv.tf-ember .tl-cols b{display:none}
.pv.tf-ember .fm{border-radius:0;outline:1px solid var(--acc);outline-offset:14px}
.pv.tf-ember .fe h3{font-size:42px;font-weight:500}
.pv.tf-ember .gl{gap:4px}.pv.tf-ember .gl figure>:is(img,svg){border-radius:0}
.pv.tf-ember .qs blockquote{background:transparent;border-top:1px solid var(--acc);border-radius:0;text-align:center;color:inherit}
.pv.tf-ember .qs blockquote p{font-style:italic;font-size:24px}
.pv.tf-ember .ct{text-align:center}
.pv.tf-ember .s-cta{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-ember .s-cta.bg-default,.pv.tf-ember .s-cta.bg-auto{background:transparent}
.pv.tf-ember .s-cta h2{font-size:56px}
.pv.tf-ember .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--line)}
.pv.tf-ember .ft .mt{color:var(--acc)}

/* ---------- Folio: fashion magazine ---------- */
.pv.tf-folio main{counter-reset:fsec}
.pv.tf-folio h1{font-size:132px;line-height:.9;letter-spacing:-.035em;font-weight:400}
.pv.tf-folio h2{font-size:58px;letter-spacing:-.02em;font-weight:400}
.pv.tf-folio h3{font-weight:400;font-size:28px}
.pv.tf-folio .hd{border-bottom:1px solid var(--ink)}
.pv.tf-folio .mn{text-transform:uppercase;font-size:12px;letter-spacing:.16em;font-weight:500}
.pv.tf-folio .bt{border-radius:999px;font-weight:500;background:var(--ink);color:var(--oi)}
.pv.tf-folio .bt2{background:transparent;color:inherit}
.pv.tf-folio .hl-editorial .hx{display:grid;grid-template-columns:1fr 1fr;gap:28px 48px;align-items:end}
.pv.tf-folio .hl-editorial .ht{display:contents}
.pv.tf-folio .hl-editorial .ey{max-width:none;grid-column:1/-1;grid-row:1;color:var(--ink);border-top:1px solid var(--ink);padding-top:10px;font-weight:500}
.pv.tf-folio .hl-editorial h1{grid-column:1/-1;grid-row:2;margin:0}
.pv.tf-folio .hl-editorial p{grid-column:1;grid-row:3;font-size:21px;max-width:34ch;align-self:start}
.pv.tf-folio .hl-editorial .bts{grid-column:1;grid-row:4;align-self:start}
.pv.tf-folio .hl-editorial .hm{grid-column:2;grid-row:3/6;aspect-ratio:4/5;border-radius:0}
.pv.tf-folio .sh{border-top:1px solid var(--ink);padding-top:14px;margin-bottom:32px}
.pv.tf-folio .sh h2:before{counter-increment:fsec;content:counter(fsec,decimal-leading-zero);display:block;font:500 13px/1 var(--bf);letter-spacing:.16em;margin-bottom:14px}
.pv.tf-folio .tl-rule{gap:40px 32px}
.pv.tf-folio .tl-rule .ti{border-top:1px solid var(--ink);padding-top:18px}
.pv.tf-folio .meta{color:var(--ink);font-weight:500;letter-spacing:.16em}
.pv.tf-folio .ti h3{font-size:30px}
.pv.tf-folio .stt{text-align:left}.pv.tf-folio .stt>div{border-top:1px solid var(--ink);padding-top:12px}
.pv.tf-folio .stt b{color:var(--ink);font-size:72px;font-weight:400}
.pv.tf-folio .fe h3{font-size:56px}
.pv.tf-folio .fm{border-radius:0;aspect-ratio:4/5}
.pv.tf-folio .gl figure>:is(img,svg){border-radius:0;aspect-ratio:3/4}
.pv.tf-folio .qs blockquote{background:transparent;border-left:1px solid var(--ink);border-radius:0;padding:0 0 0 24px}
.pv.tf-folio .qs blockquote p{font-size:30px;line-height:1.2}
.pv.tf-folio .s-cta h2{font-size:84px}
.pv.tf-folio .s-cta.bg-default,.pv.tf-folio .s-cta.bg-auto{background:transparent;border-top:1px solid var(--ink)}
.pv.tf-folio .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--ink)}

/* ---------- Block party: neo-brutalist ---------- */
.pv.tf-block{--bw:3px;--hs:6px 6px 0 var(--ink)}
.pv.tf-block h1{font-size:72px;letter-spacing:-.03em;line-height:1}
.pv.tf-block h2{font-size:44px;letter-spacing:-.02em}
.pv.tf-block .hd{border-bottom:var(--bw) solid var(--ink)}
.pv.tf-block .bt{border:var(--bw) solid var(--ink);box-shadow:4px 4px 0 var(--ink);color:var(--oa);background:var(--acc)}
.pv.tf-block .bt2{background:var(--bg);color:var(--ink);box-shadow:4px 4px 0 var(--ink)}
.pv.tf-block .dr>summary{border-width:var(--bw)}
.pv.tf-block .ey{display:inline-block;background:var(--ink);color:var(--oi);padding:6px 12px;transform:rotate(-1.5deg)}
.pv.tf-block .s-hero{border-bottom:var(--bw) solid var(--ink);background:var(--soft)}
.pv.tf-block .hm,.pv.tf-block .fm{border:var(--bw) solid var(--ink);box-shadow:var(--hs)}
.pv.tf-block .stt{gap:0;border:var(--bw) solid var(--ink);box-shadow:var(--hs)}
.pv.tf-block .stt>div{padding:26px 10px;border-left:var(--bw) solid var(--ink)}.pv.tf-block .stt>div:first-child{border-left:0}
.pv.tf-block .stt>div:nth-child(odd){background:var(--acc);color:var(--oa)}
.pv.tf-block .stt b{color:inherit;font-size:54px}
.pv.tf-block .tl-cards .ti{border:var(--bw) solid var(--ink);box-shadow:var(--hs);color:var(--ink)}
.pv.tf-block .tl-cards .ti:nth-child(3n+2){background:var(--soft)}
.pv.tf-block .meta{display:inline-block;align-self:flex-start;border:2px solid var(--ink);padding:2px 8px;color:var(--ink);background:var(--bg)}
.pv.tf-block .gl figure>:is(img,svg){border:var(--bw) solid var(--ink)}
.pv.tf-block .qs blockquote{border:var(--bw) solid var(--ink);box-shadow:var(--hs);background:var(--card)}
.pv.tf-block .qs blockquote:nth-child(2){transform:rotate(1deg);background:var(--soft)}
.pv.tf-block .ct>div{border:var(--bw) solid var(--ink);padding:16px;background:var(--card);color:var(--ink)}
.pv.tf-block .s-cta,.pv.tf-block .s-cta.bg-default{background:var(--acc);color:var(--oa);border-top:var(--bw) solid var(--ink);border-bottom:var(--bw) solid var(--ink)}
.pv.tf-block .s-cta h2{font-size:56px}
.pv.tf-block .s-cta .bt{background:var(--bg)}
.pv.tf-block .ft .fb :is(svg,img){border:var(--bw) solid var(--oi)}

/* ---------- Bento: rounded panels ---------- */
.pv.tf-bento{background:var(--soft);--gap:14px}
.pv.tf-bento h1{font-size:62px;letter-spacing:-.035em;line-height:1}
.pv.tf-bento h2{font-size:36px;letter-spacing:-.03em}
.pv.tf-bento .s{padding:calc(var(--sy) * .4) 0}
.pv.tf-bento .hd{margin:12px var(--pad) 0;border:0;border-radius:22px;background:var(--card)}
.pv.tf-bento .bt{border-radius:14px}
.pv.tf-bento .s-hero .hx{display:grid;grid-template-columns:3fr 2fr;gap:14px;padding:24px var(--pad) 0}
.pv.tf-bento .s-hero .ht{background:var(--card);color:var(--ink);border-radius:28px;padding:56px 48px}
.pv.tf-bento .hl-split .hm{border-radius:28px;aspect-ratio:auto;position:relative;min-height:320px}
.pv.tf-bento .hl-split .hm>:is(svg,img){position:absolute;inset:0}
.pv.tf-bento .tl-bento .ti:nth-child(5):nth-last-child(2),.pv.tf-bento .tl-bento .ti:nth-child(6):last-child{grid-column:span 2}
.pv.tf-bento :is(.s-tiles,.s-stats,.s-gallery,.s-quotes,.s-contact,.s-list,.s-text,.s-videos,.s-podcast)>.w{background:var(--card);color:var(--ink);border-radius:28px;padding:36px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bento .s.bg-ink>.w,.pv.tf-bento .s.bg-soft>.w,.pv.tf-bento .s.bg-acc>.w{background:var(--card);color:var(--ink)}
.pv.tf-bento .s.bg-ink,.pv.tf-bento .s.bg-soft,.pv.tf-bento .s.bg-acc,.pv.tf-bento .s.bg-default{background:transparent;color:var(--ink)}
.pv.tf-bento .s-stats>.w{background:transparent;padding:0}
.pv.tf-bento .stt{gap:14px;text-align:left}
.pv.tf-bento .stt>div{background:var(--card);border-radius:28px;padding:28px}
.pv.tf-bento .stt>div:first-child{background:var(--acc);color:var(--oa)}.pv.tf-bento .stt>div:first-child b{color:inherit}
.pv.tf-bento .stt b{font-size:52px;color:var(--ink);letter-spacing:-.03em}
.pv.tf-bento .tl-bento .ti{border-radius:22px;padding:24px}
.pv.tf-bento .tl-bento .ti:first-child{background:var(--acc);color:var(--oa)}.pv.tf-bento .tl-bento .ti:first-child :is(p,b,.meta){color:inherit}
.pv.tf-bento .tl-bento .ti:nth-child(4){background:var(--ink);color:var(--oi)}
.pv.tf-bento .fe-card{border:0;border-radius:28px;padding:20px}.pv.tf-bento .fm{border-radius:20px}
.pv.tf-bento .gl{gap:10px}.pv.tf-bento .gl figure>:is(img,svg){border-radius:20px}
.pv.tf-bento .qs blockquote{border-radius:22px}
.pv.tf-bento .ct>div{background:var(--soft);border-radius:20px;padding:18px}
.pv.tf-bento .s-cta .w{background:var(--ink);color:var(--oi);border-radius:28px;padding:64px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bento .ft{margin:14px var(--pad) var(--pad);border-radius:28px}

/* ---------- Handmade: warm, arched, stitched ---------- */
.pv.tf-craft h1{font-size:62px;line-height:1.05}
.pv.tf-craft h2{font-size:40px}
.pv.tf-craft .hd{border-bottom:2px dashed var(--line)}
.pv.tf-craft .bt{border-radius:999px;padding:14px 26px}
.pv.tf-craft .ey{color:var(--acc);letter-spacing:.2em}
.pv.tf-craft .hl-split .hx{grid-template-columns:5fr 6fr}
.pv.tf-craft .hl-split .hm{order:-1;aspect-ratio:4/5;border-radius:999px 999px 18px 18px;border:10px solid var(--soft)}
.pv.tf-craft .sh{flex-direction:column;align-items:center;text-align:center;gap:8px}
.pv.tf-craft .sh:before{content:"";width:12px;height:12px;background:var(--acc);transform:rotate(45deg);order:-1}
.pv.tf-craft .in{text-align:center;margin:0 auto 26px}
.pv.tf-craft .stt b{font-family:var(--hf);font-weight:400}
.pv.tf-craft .stt>div{border:2px dashed var(--line);border-radius:999px;padding:22px 10px}
.pv.tf-craft .tl-cards .ti{border:2px dashed var(--line);border-radius:22px;padding:14px 14px 22px;background:var(--card)}
.pv.tf-craft .tl-cards .tim{border-radius:999px 999px 12px 12px;aspect-ratio:1}
.pv.tf-craft .tl-cards .tx{padding:0 8px;text-align:center;align-items:center}
.pv.tf-craft .meta{color:var(--acc)}
.pv.tf-craft .fe-split{grid-template-columns:2fr 3fr}
.pv.tf-craft .fm{border-radius:999px 999px 18px 18px;aspect-ratio:4/5}
.pv.tf-craft .gl figure>:is(img,svg){border-radius:18px}
.pv.tf-craft .gl figure:nth-child(3n+2)>:is(img,svg){border-radius:999px 999px 18px 18px}
.pv.tf-craft .qs blockquote{background:var(--card);border:2px dashed var(--line);border-radius:22px;text-align:center}
.pv.tf-craft .qs blockquote p:before{content:"♥";display:block;color:var(--acc);font-size:18px;margin-bottom:6px}
.pv.tf-craft .ct{text-align:center}
.pv.tf-craft .ft{position:relative;margin-top:30px}
.pv.tf-craft .ft:before{content:"";position:absolute;left:0;right:0;top:-18px;height:19px;background:radial-gradient(circle at 18px 19px,var(--ink) 17px,transparent 18px) 0 0/36px 19px repeat-x}
.pv.tf-craft .s-cta .w{border:2px dashed currentColor;border-radius:28px;padding:56px 32px;max-width:calc(1000px - 2 * var(--pad))}

/* ---------- Glow: dark, modern, soft light ---------- */
.pv.tf-glow{background:radial-gradient(900px 600px at 15% 0%,color-mix(in srgb,var(--acc) 22%,transparent),transparent 70%),radial-gradient(800px 600px at 100% 30%,color-mix(in srgb,var(--acc) 12%,transparent),transparent 70%),var(--bg)}
.pv.tf-glow h1{font-size:76px;letter-spacing:-.04em;line-height:1.02;background:linear-gradient(180deg,var(--ink) 30%,color-mix(in srgb,var(--ink) 55%,var(--acc)));-webkit-background-clip:text;background-clip:text;color:transparent}
.pv.tf-glow h2{font-size:42px;letter-spacing:-.03em}
.pv.tf-glow .hd{background:transparent;border-bottom:1px solid var(--line)}
.pv.tf-glow .bt{border-radius:12px;box-shadow:0 0 0 1px color-mix(in srgb,var(--acc) 60%,#fff),0 10px 34px -6px var(--acc)}
.pv.tf-glow .bt2{box-shadow:inset 0 0 0 1px var(--line);background:color-mix(in srgb,var(--ink) 6%,transparent)}
.pv.tf-glow .ey{display:inline-block;padding:6px 14px;border-radius:999px;border:1px solid var(--line);background:color-mix(in srgb,var(--ink) 5%,transparent);color:var(--ink);letter-spacing:.08em}
.pv.tf-glow .hl-center .hm{border-radius:22px;box-shadow:0 0 0 1px var(--line),0 40px 120px -30px var(--acc)}
.pv.tf-glow .s.bg-soft,.pv.tf-glow .s.bg-default{background:transparent}
.pv.tf-glow .stt>div{border:1px solid var(--line);border-radius:18px;padding:26px 10px;background:color-mix(in srgb,var(--ink) 4%,transparent)}
.pv.tf-glow .stt b{background:linear-gradient(90deg,var(--ink),var(--acc));-webkit-background-clip:text;background-clip:text;color:transparent}
.pv.tf-glow .tl-cards .ti,.pv.tf-glow .qs blockquote,.pv.tf-glow .ct>div,.pv.tf-glow .pod{background:color-mix(in srgb,var(--ink) 5%,transparent);border:1px solid var(--line);border-radius:18px;color:var(--ink)}
.pv.tf-glow .ct>div{padding:18px}
.pv.tf-glow .tl-cards .ti h3:before{content:"";display:block;width:36px;height:36px;border-radius:10px;margin-bottom:16px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 40%,var(--ink)));box-shadow:0 8px 24px -6px var(--acc)}
.pv.tf-glow .tl-cards .tim+.tx h3:before{display:none}
.pv.tf-glow .fm{border-radius:22px;box-shadow:0 0 0 1px var(--line)}
.pv.tf-glow .gl figure>:is(img,svg){border-radius:18px}
.pv.tf-glow .s-cta .w{border:1px solid var(--line);border-radius:28px;padding:72px 40px;max-width:calc(1100px - 2 * var(--pad));background:radial-gradient(600px 300px at 50% 0%,color-mix(in srgb,var(--acc) 30%,transparent),transparent)}
.pv.tf-glow .s-cta.bg-default,.pv.tf-glow .s-cta.bg-auto{background:transparent}
.pv.tf-glow .ft{background:transparent;color:var(--ink);border-top:1px solid var(--line)}

/* ---------- Swiss grid ---------- */
.pv.tf-swiss h1{font-size:112px;line-height:.92;letter-spacing:-.05em}
.pv.tf-swiss h2{font-size:22px;letter-spacing:-.01em}
.pv.tf-swiss h3{letter-spacing:-.02em}
.pv.tf-swiss .hd{border-bottom:2px solid var(--ink)}
.pv.tf-swiss .bt{border-radius:0;padding:14px 22px}
.pv.tf-swiss .ey{color:var(--ink);font-weight:800;letter-spacing:.02em;text-transform:none;font-size:16px}
.pv.tf-swiss .ey:before{content:"";display:inline-block;width:12px;height:12px;background:var(--acc);margin-right:10px}
.pv.tf-swiss .hl-editorial .ht{max-width:none;border-bottom:2px solid var(--ink)}
.pv.tf-swiss .hl-editorial p{font-size:22px;max-width:36ch}
.pv.tf-swiss .hm,.pv.tf-swiss .fm,.pv.tf-swiss .gl figure>:is(img,svg){border-radius:0}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{display:grid;grid-template-columns:240px 1fr;gap:0 48px;border-top:2px solid var(--ink);padding-top:22px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>*{grid-column:2}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.sh{grid-column:1;grid-row:1/span 9;align-self:start;flex-direction:column;align-items:flex-start;gap:8px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.in{margin:0 0 20px}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w:not(:has(>.sh))>*{grid-column:1/-1}
.pv.tf-swiss .s-cta p{margin-left:0}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.bt{justify-self:start}
.pv.tf-swiss .sh h2:before{content:"";display:block;width:12px;height:12px;background:var(--acc);margin-bottom:12px}
.pv.tf-swiss main{counter-reset:sw}
.pv.tf-swiss .tl-rule{gap:32px 24px}
.pv.tf-swiss .tl-rule .ti{border-top:2px solid var(--ink);counter-increment:sw}
.pv.tf-swiss .tl-rule .ti h3:before{content:counter(sw,decimal-leading-zero);display:block;font-size:13px;color:var(--acc);margin-bottom:8px}
.pv.tf-swiss .meta{color:var(--mute)}
.pv.tf-swiss .stt{text-align:left;grid-template-columns:repeat(4,1fr)}
.pv.tf-swiss .stt b{color:var(--ink);font-size:64px;letter-spacing:-.04em}
.pv.tf-swiss .fe h3{font-size:44px;letter-spacing:-.03em}
.pv.tf-swiss .qs blockquote{background:transparent;border-radius:0;border-top:2px solid var(--acc);padding:16px 0 0}
.pv.tf-swiss .qs blockquote p{font-family:var(--bf);font-weight:700;font-size:20px}
.pv.tf-swiss .s-cta.bg-default,.pv.tf-swiss .s-cta.bg-auto{background:var(--acc);color:var(--oa)}
.pv.tf-swiss .s-cta .w{text-align:left}.pv.tf-swiss .s-cta h2{font-size:72px;letter-spacing:-.04em;max-width:14ch}
.pv.tf-swiss .s-cta .bt{background:var(--ink);color:var(--oi)}

/* ---------- Sunny retro ---------- */
.pv.tf-retro h1{font-size:84px;line-height:.95;letter-spacing:-.03em}
.pv.tf-retro h2{font-size:46px;letter-spacing:-.02em}
.pv.tf-retro .bt{border-radius:999px;border:3px solid var(--ink);color:var(--oa);padding:13px 28px;box-shadow:0 5px 0 var(--ink)}
.pv.tf-retro .bt2{background:var(--bg);color:var(--ink)}
.pv.tf-retro .hd{border-bottom:3px solid var(--ink)}
.pv.tf-retro .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:8px 18px;border-radius:999px;transform:rotate(-3deg)}
.pv.tf-retro .s-hero{position:relative;padding-bottom:64px;background:var(--soft)}
.pv.tf-retro .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:0;height:48px;background:linear-gradient(var(--acc) 0 33%,var(--bg) 33% 45%,var(--ink) 45% 78%,var(--bg) 78% 88%,var(--acc) 88%)}
.pv.tf-retro .hl-center .hm{border-radius:999px 999px 24px 24px;aspect-ratio:21/9;border:3px solid var(--ink)}
.pv.tf-retro .stt>div{position:relative}
.pv.tf-retro .stt b{display:grid;place-items:center;width:150px;height:150px;margin:0 auto 10px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:40px;border:3px solid var(--ink);transform:rotate(-6deg)}
.pv.tf-retro .stt>div:nth-child(even) b{background:var(--soft);color:var(--ink);transform:rotate(5deg)}
.pv.tf-retro .stt span{font-weight:700}
.pv.tf-retro .tl-cards .ti{border:3px solid var(--ink);border-radius:26px;box-shadow:0 6px 0 var(--ink);color:var(--ink)}
.pv.tf-retro .tl-cards .ti:nth-child(3n+1){background:var(--soft)}
.pv.tf-retro .tl-cards .ti:nth-child(3n+2){background:var(--card)}
.pv.tf-retro .tl-cards .ti:nth-child(3n){background:var(--acc);color:var(--oa)}
.pv.tf-retro .tl-cards .ti:nth-child(3n) :is(p,b,.meta){color:inherit}
.pv.tf-retro .meta{color:inherit}
.pv.tf-retro .fm,.pv.tf-retro .gl figure>:is(img,svg){border:3px solid var(--ink);border-radius:26px}
.pv.tf-retro .qs blockquote{background:var(--card);border:3px solid var(--ink);border-radius:26px;position:relative;margin-bottom:22px}
.pv.tf-retro .qs blockquote:after{content:"";position:absolute;left:36px;bottom:-20px;width:28px;height:28px;background:var(--card);border-right:3px solid var(--ink);border-bottom:3px solid var(--ink);transform:skewY(35deg) rotate(45deg)}
.pv.tf-retro .s-cta,.pv.tf-retro .s-cta.bg-default{background:repeating-conic-gradient(from 0deg at 50% 120%,var(--acc) 0 6deg,color-mix(in srgb,var(--acc) 82%,var(--bg)) 6deg 12deg);color:var(--oa)}
.pv.tf-retro .s-cta h2{font-size:64px}
.pv.tf-retro .s-cta .bt{background:var(--bg)}

/* ---------- Lens: photo first ---------- */
.pv.tf-lens h1{font-size:96px;line-height:.95;letter-spacing:-.04em;font-weight:600}
.pv.tf-lens h2{font-size:44px;letter-spacing:-.03em;font-weight:500}
.pv.tf-lens .hd{border:0}
.pv.tf-lens .mn{font-weight:400;letter-spacing:.06em}
.pv.tf-lens .bt{border-radius:999px;font-weight:500}
.pv.tf-lens .hl-overlay .hx{min-height:760px;padding-bottom:72px}
.pv.tf-lens .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(0,0,0,.78),rgba(0,0,0,.18) 70%)}
.pv.tf-lens .hl-overlay .bt2{color:#fff}
.pv.tf-lens .ey{color:#fff;font-weight:500;letter-spacing:.24em}
.pv.tf-lens .stt{text-align:left}.pv.tf-lens .stt>div{border-left:2px solid var(--acc);padding-left:16px}
.pv.tf-lens .stt b{color:var(--ink);font-weight:500;letter-spacing:-.03em}
.pv.tf-lens .tl-cards{gap:12px}
.pv.tf-lens .tl-cards .ti{position:relative;border:0;padding:0;border-radius:var(--r);overflow:hidden;min-height:380px;background:var(--ink);color:#fff}
.pv.tf-lens .tl-cards .tim{position:absolute;inset:0;margin:0;aspect-ratio:auto;border-radius:0}
.pv.tf-lens .tl-cards .tim:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.78),rgba(0,0,0,0) 65%)}
.pv.tf-lens .tl-cards .tx{position:relative;margin-top:auto;padding:22px;justify-content:flex-end}
.pv.tf-lens .tl-cards .ti :is(p,b,.meta){color:rgba(255,255,255,.88)}
.pv.tf-lens .tl-cards .ti b{margin-top:6px}
.pv.tf-lens .fe-wide .fx .bt{justify-self:start}
.pv.tf-lens .fe-wide .fm{aspect-ratio:21/9;border-radius:var(--r)}
.pv.tf-lens .fe-wide .fx{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;max-width:none}
.pv.tf-lens .fe-wide .fx .ey{grid-column:1/-1;color:var(--acc)}
.pv.tf-lens .fe-wide .fx h3{grid-column:1;grid-row:2/5;font-size:40px}
.pv.tf-lens .fe-wide .fx>:not(h3):not(.ey){grid-column:2}
.pv.tf-lens .s-gallery .w{max-width:none;padding:0 6px}
.pv.tf-lens .s-gallery .sh{max-width:1200px;margin:0 auto 18px;padding:0 var(--pad)}
.pv.tf-lens .gl{gap:6px}.pv.tf-lens .gl figure>:is(img,svg){border-radius:0}
.pv.tf-lens .qs blockquote{background:transparent;border-radius:0;padding:0}
.pv.tf-lens .qs blockquote p{font-size:26px;font-weight:300}
.pv.tf-lens .qs cite:before{content:"— "}
.pv.tf-lens .s-cta.bg-default,.pv.tf-lens .s-cta.bg-auto{background:var(--ink);color:var(--oi)}
.pv.tf-lens .s-cta h2{font-size:64px;letter-spacing:-.04em}


/* designer families on dark or accent bands: everything inside switches to the band's text colour */
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s.bg-ink>.w{--ink:var(--oi);--line:color-mix(in srgb,var(--oi) 28%,transparent);--mute:color-mix(in srgb,var(--oi) 72%,transparent);--card:color-mix(in srgb,var(--oi) 8%,transparent);--soft:color-mix(in srgb,var(--oi) 12%,transparent)}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s.bg-acc>.w{--ink:var(--oa);--line:color-mix(in srgb,var(--oa) 30%,transparent);--mute:color-mix(in srgb,var(--oa) 78%,transparent);--card:color-mix(in srgb,var(--oa) 10%,transparent);--soft:color-mix(in srgb,var(--oa) 14%,transparent)}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s.bg-ink .meta,.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s.bg-acc .meta{color:inherit}
/* designer families: tablet */
@container (min-width:600px) and (max-width:1023.98px){
.pv:is(.tf-tide,.tf-craft,.tf-bento) h1{font-size:48px}
.pv.tf-ember h1,.pv.tf-glow h1,.pv.tf-block h1,.pv.tf-retro h1{font-size:56px}
.pv.tf-folio h1,.pv.tf-swiss h1,.pv.tf-lens h1{font-size:76px}
.pv.tf-folio h2,.pv.tf-swiss .s-cta h2,.pv.tf-lens .s-cta h2,.pv.tf-retro .s-cta h2,.pv.tf-folio .s-cta h2{font-size:44px}
.pv.tf-tide .s-hero .hx{padding:48px 36px}
.pv.tf-bento .s-hero .hx{grid-template-columns:1fr}.pv.tf-bento .hl-split .hm{aspect-ratio:16/9}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{grid-template-columns:170px 1fr;gap:0 28px}
.pv.tf-swiss .stt{grid-template-columns:repeat(2,1fr)}
.pv.tf-retro .stt b{width:120px;height:120px;font-size:32px}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:repeat(3,1fr)}
.pv.tf-lens .hl-overlay .hx{min-height:600px}
}
/* designer families: phone */
@container (max-width:599.98px){
.pv:is(.tf-tide,.tf-craft,.tf-bento,.tf-block,.tf-glow,.tf-ember,.tf-retro) h1{font-size:40px}
.pv:is(.tf-folio,.tf-swiss,.tf-lens) h1{font-size:54px}
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-bento,.tf-craft,.tf-glow,.tf-retro,.tf-lens) h2{font-size:30px}
.pv:is(.tf-folio,.tf-swiss,.tf-lens,.tf-retro,.tf-block,.tf-ember) .s-cta h2{font-size:36px}
.pv.tf-tide .hd,.pv.tf-bento .hd{margin:10px 12px 0}
.pv.tf-tide .s-hero{padding:12px 12px 0}.pv.tf-tide .s-hero .hx{padding:36px 22px;border-radius:28px}
.pv.tf-tide .s-cta .w,.pv.tf-bento .s-cta .w,.pv.tf-glow .s-cta .w,.pv.tf-craft .s-cta .w{padding:44px 22px;border-radius:28px}
.pv.tf-tide .stt b{font-size:36px}
.pv.tf-ember .hl-overlay .hx{min-height:520px}
.pv.tf-ember .stt{grid-template-columns:1fr 1fr;row-gap:24px}.pv.tf-ember .stt>div{border-left:0}
.pv.tf-ember .tl-cols h3{font-size:19px}
.pv.tf-folio .hl-editorial .hx{grid-template-columns:1fr}
.pv.tf-folio .hl-editorial :is(p,.bts,.hm){grid-column:1;grid-row:auto}
.pv.tf-folio .stt b{font-size:48px}
.pv.tf-folio .fe h3,.pv.tf-swiss .fe h3{font-size:32px}
.pv.tf-folio .qs blockquote p{font-size:24px}
.pv.tf-block .stt{grid-template-columns:1fr 1fr}.pv.tf-block .stt>div{border-left:0;border-top:var(--bw) solid var(--ink)}
.pv.tf-block .stt>div:nth-child(-n+2){border-top:0}.pv.tf-block .stt>div:nth-child(even){border-left:var(--bw) solid var(--ink)}
.pv.tf-block .stt b{font-size:40px}
.pv.tf-bento .s-hero .hx{grid-template-columns:1fr;padding:12px 12px 0}.pv.tf-bento .s-hero .ht{padding:32px 24px}
.pv.tf-bento .hl-split .hm{aspect-ratio:4/3;min-height:0}
.pv.tf-bento :is(.s-tiles,.s-gallery,.s-quotes,.s-contact,.s-list,.s-text,.s-videos,.s-podcast)>.w{padding:24px 20px;margin:0 12px;max-width:none}
.pv.tf-bento .stt{grid-template-columns:1fr 1fr}.pv.tf-bento .stt b{font-size:38px}
.pv.tf-bento .ft{margin:12px}
.pv.tf-craft .hl-split .hx{grid-template-columns:1fr}.pv.tf-craft .hl-split .hm{order:0;max-width:300px;width:100%;margin:0 auto}
.pv.tf-craft .fe-split{grid-template-columns:1fr}.pv.tf-craft .fm{max-width:300px;margin:0 auto}
.pv.tf-craft .stt{grid-template-columns:1fr 1fr}
.pv.tf-glow .stt{grid-template-columns:1fr 1fr}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w{grid-template-columns:1fr}
.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>*,.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.sh,.pv.tf-swiss .s:not(.s-hero):not(.s-cta) .w>.in{grid-column:1;grid-row:auto}
.pv.tf-swiss .stt{grid-template-columns:1fr 1fr}.pv.tf-swiss .stt b{font-size:44px}
.pv.tf-retro .stt{grid-template-columns:1fr 1fr}.pv.tf-retro .stt b{width:110px;height:110px;font-size:28px}
.pv.tf-retro .hl-center .hm{aspect-ratio:4/3}
.pv:is(.tf-tide,.tf-bento,.tf-lens,.tf-glow) .gl{grid-template-columns:1fr 1fr}
.pv.tf-lens .hl-overlay .hx{min-height:560px;padding-bottom:40px}
.pv.tf-lens .tl-cards .ti{min-height:300px}
.pv.tf-lens .fe-wide .fx{grid-template-columns:1fr}.pv.tf-lens .fe-wide .fx>*{grid-column:1!important;grid-row:auto!important}
.pv.tf-lens .fe-wide .fm{aspect-ratio:4/3}
}

/* ======================================================================
   Flagship families (2026-11-14): Hearth (cafés), Volt (trades), Loom (makers).
   Photo-led, with gentle motion. Motion only moves things (never hides them), so screenshots stay correct,
   and it switches off for visitors who ask for less motion.
   ====================================================================== */
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .ti,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .bt{transition:transform .35s cubic-bezier(.2,.7,.2,1),box-shadow .35s}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .tim>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .gl figure>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .fm>img{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .ti:hover .tim>img,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .gl figure:hover>img{transform:scale(1.06)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .bt:hover{transform:translateY(-2px)}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .gl figure{overflow:hidden;border-radius:var(--r)}
@media (prefers-reduced-motion:no-preference){
  .pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s-hero .hm>img{animation:bk-drift 24s ease-in-out infinite alternate}
  @supports (animation-timeline:view()){
    .pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) main>.s:not(.s-hero) .w>*{animation:bk-rise linear both;animation-timeline:view();animation-range:entry 0% entry 35%}
  }
}
@keyframes bk-drift{from{transform:scale(1)}to{transform:scale(1.08) translate(-1%,-1%)}}
@keyframes bk-rise{from{transform:translateY(40px)}to{transform:none}}

/* ---------- Hearth: cafés and restaurants ---------- */
.pv.tf-hearth{--sy:96px}
.pv.tf-hearth h1{font-size:104px;line-height:.92;font-weight:600;font-style:italic;letter-spacing:-.01em}
.pv.tf-hearth h2{font-size:56px;font-weight:600;letter-spacing:-.01em}
.pv.tf-hearth h3{font-weight:600;font-size:26px}
.pv.tf-hearth .hd{border-bottom:1px solid var(--line)}
.pv.tf-hearth :is(.mn,.dr>summary){font-weight:500;letter-spacing:.12em;text-transform:uppercase;font-size:13px}
.pv.tf-hearth .bt{border-radius:999px;font-weight:500;letter-spacing:.08em;text-transform:uppercase;font-size:13px;padding:15px 30px}
.pv.tf-hearth .ey{font-weight:500;letter-spacing:.32em;display:flex;align-items:center;gap:16px}
.pv.tf-hearth .ey:before,.pv.tf-hearth .hl-overlay .ey:after{content:"";width:44px;height:1px;background:currentColor}
.pv.tf-hearth .hl-overlay .hx{min-height:760px;align-items:center;justify-content:center;max-width:none}
.pv.tf-hearth .hl-overlay .ht{margin:0 auto;text-align:center;max-width:900px}
.pv.tf-hearth .hl-overlay .ey{justify-content:center;max-width:none}
.pv.tf-hearth .hl-overlay p{margin-left:auto;margin-right:auto;font-size:20px;max-width:46ch}
.pv.tf-hearth .hl-overlay .hm:after{background:radial-gradient(ellipse at center,rgba(0,0,0,.5),rgba(0,0,0,.72))}
.pv.tf-hearth .hl-overlay .bt2{color:#fff}
.pv.tf-hearth .s-hero+.s-stats{margin-top:0}
.pv.tf-hearth .s-stats{background:var(--ink);color:var(--oi);padding:40px 0}
.pv.tf-hearth .stt b{font-style:italic;font-weight:600;font-size:54px;color:var(--acc)}
.pv.tf-hearth .stt span{font-size:12px;letter-spacing:.24em;text-transform:uppercase;opacity:.8}
.pv.tf-hearth .sh{flex-direction:column;align-items:center;text-align:center;gap:4px;margin-bottom:12px}
.pv.tf-hearth .sh .mo{font-size:13px;letter-spacing:.14em;text-transform:uppercase;font-weight:500}
.pv.tf-hearth .in{text-align:center;margin:0 auto 48px;font-style:italic;font-family:var(--hf);font-size:22px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr 1fr!important;gap:36px 64px;max-width:1040px;margin:0 auto}
.pv.tf-hearth .tl-menu .ti{flex-direction:row;align-items:center;gap:22px}
.pv.tf-hearth .tl-menu .tim{flex:0 0 104px;width:104px;aspect-ratio:1;border-radius:50%;margin:0;box-shadow:0 10px 24px -10px rgba(0,0,0,.5)}
.pv.tf-hearth .tl-menu .tx{display:grid;grid-template-columns:1fr auto;column-gap:14px;align-items:baseline}
.pv.tf-hearth .tl-menu h3{grid-column:1;grid-row:1;margin:0;display:flex;align-items:baseline;gap:12px;font-size:28px}
.pv.tf-hearth .tl-menu h3:after{content:"";flex:1;min-width:20px;border-bottom:1px dotted var(--mute);transform:translateY(-6px)}
.pv.tf-hearth .tl-menu .meta{grid-column:2;grid-row:1;margin:0;font:600 24px var(--hf);letter-spacing:0;text-transform:none;color:var(--acc)}
.pv.tf-hearth .tl-menu p{grid-column:1/-1;margin:4px 0 0;font-size:15px}
.pv.tf-hearth .tl-menu b{display:none}
.pv.tf-hearth .ti:hover{transform:translateX(4px)}
.pv.tf-hearth .fe-split{grid-template-columns:5fr 6fr;gap:72px}
.pv.tf-hearth .fm{aspect-ratio:4/5;border-radius:999px 999px 0 0}
.pv.tf-hearth .fe h3{font-size:58px;line-height:1;font-style:italic}
.pv.tf-hearth .gl{grid-template-columns:repeat(3,1fr);grid-auto-rows:260px;grid-auto-flow:dense;gap:10px}
.pv.tf-hearth .gl figure{position:relative;margin:0}
.pv.tf-hearth .gl figure:nth-child(6n+1){grid-column:span 2;grid-row:span 2}
.pv.tf-hearth .gl figure>:is(img,svg){height:100%;aspect-ratio:auto;border-radius:0}
.pv.tf-hearth .gl figcaption{position:absolute;left:0;right:0;bottom:0;margin:0;padding:28px 16px 12px;color:#fff;font:italic 600 20px var(--hf);background:linear-gradient(0deg,rgba(0,0,0,.6),transparent)}
.pv.tf-hearth .qs{gap:48px}
.pv.tf-hearth .qs blockquote{background:transparent;padding:0;text-align:center;color:inherit}
.pv.tf-hearth .qs blockquote:before{content:"“";display:block;font:600 90px/.6 var(--hf);color:var(--acc);margin-bottom:10px}
.pv.tf-hearth .qs blockquote p{font-style:italic;font-size:26px;line-height:1.3}
.pv.tf-hearth .qs cite{letter-spacing:.16em;text-transform:uppercase;font-size:12px;font-weight:500}
.pv.tf-hearth .s-contact .w{text-align:center}
.pv.tf-hearth .ct{grid-template-columns:repeat(auto-fit,minmax(170px,1fr));background:var(--card);color:var(--ink);border:1px solid var(--line);padding:40px;border-radius:var(--r);max-width:1000px;margin:0 auto 28px}
.pv.tf-hearth .ct dd{font:600 24px var(--hf)}
.pv.tf-hearth .s-cta,.pv.tf-hearth .s-cta.bg-default{background:var(--acc);color:var(--oa);background-image:radial-gradient(color-mix(in srgb,var(--oa) 14%,transparent) 1.2px,transparent 1.4px);background-size:22px 22px}
.pv.tf-hearth .s-cta h2{font-size:72px;font-style:italic}
.pv.tf-hearth .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-hearth .ft .mt{font-family:var(--hf);font-style:italic;font-size:20px;letter-spacing:.02em;font-weight:600}

/* ---------- Volt: trades and services ---------- */
.pv.tf-volt h1,.pv.tf-volt h2,.pv.tf-volt h3{text-transform:uppercase;letter-spacing:.005em}
.pv.tf-volt h1{font-size:96px;line-height:.9}
.pv.tf-volt h2{font-size:58px;line-height:.95}
.pv.tf-volt h3{font-size:26px}
.pv.tf-volt .hd{border-bottom:0;box-shadow:0 1px 0 var(--line)}
.pv.tf-volt .mn{font-weight:600;text-transform:uppercase;letter-spacing:.06em;font-size:14px}
.pv.tf-volt .bt{border-radius:4px;text-transform:uppercase;letter-spacing:.08em;font-size:14px;padding:16px 28px;box-shadow:0 10px 24px -10px var(--acc)}
.pv.tf-volt .bt2{box-shadow:inset 0 0 0 2px currentColor}
.pv.tf-volt .ey{display:inline-flex;align-items:center;gap:10px;background:color-mix(in srgb,var(--acc) 18%,transparent);color:inherit;padding:8px 14px;border-radius:4px;letter-spacing:.1em}
.pv.tf-volt .ey:before{content:"✓";display:grid;place-items:center;width:20px;height:20px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:12px}
.pv.tf-volt .s-hero{background:var(--ink);color:var(--oi);overflow:hidden}
.pv.tf-volt .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:56px;padding-top:88px;padding-bottom:88px;position:relative}
.pv.tf-volt .hl-split .hm{aspect-ratio:4/4.4;border-radius:0;clip-path:polygon(14% 0,100% 0,100% 100%,0 100%);margin-right:calc(-1 * var(--pad));box-shadow:none}
.pv.tf-volt .hl-split p{font-size:20px;opacity:.88}
.pv.tf-volt .s-hero .bt2{color:var(--oi)}
.pv.tf-volt .s-stats,.pv.tf-volt .s-stats.bg-default{background:var(--acc);color:var(--oa);padding:36px 0}
.pv.tf-volt .stt{gap:0}.pv.tf-volt .stt>div{border-left:1px solid color-mix(in srgb,var(--oa) 30%,transparent)}.pv.tf-volt .stt>div:first-child{border:0}
.pv.tf-volt .stt b{color:inherit;font-size:68px;line-height:1}
.pv.tf-volt .stt span{text-transform:uppercase;font-weight:600;letter-spacing:.1em;font-size:13px}
.pv.tf-volt .sh{border-left:6px solid var(--acc);padding-left:18px}
.pv.tf-volt .tl-cards{gap:24px}
.pv.tf-volt .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:6px;padding:0;overflow:hidden;color:var(--ink);box-shadow:0 2px 0 var(--line);position:relative}
.pv.tf-volt .tl-cards .ti:after{content:"";position:absolute;left:0;right:0;bottom:0;height:4px;background:var(--acc);transform:scaleX(.18);transform-origin:left;transition:transform .45s}
.pv.tf-volt .tl-cards .ti:hover{transform:translateY(-6px);box-shadow:0 22px 40px -18px rgba(0,0,0,.35)}
.pv.tf-volt .tl-cards .ti:hover:after{transform:none}
.pv.tf-volt .tl-cards .tim{border-radius:0;margin:0;aspect-ratio:16/10}
.pv.tf-volt .tl-cards .tx{padding:22px 24px 28px}
.pv.tf-volt .meta{color:var(--acc);letter-spacing:.12em}
.pv.tf-volt .ti b{text-transform:uppercase;letter-spacing:.08em;font-size:13px}
.pv.tf-volt .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-volt .fm{border-radius:6px;aspect-ratio:5/4;box-shadow:24px 24px 0 var(--soft)}
.pv.tf-volt .fe h3{font-size:52px;line-height:.95}
.pv.tf-volt .gl{gap:8px}
.pv.tf-volt .gl figure{position:relative;margin:0}
.pv.tf-volt .gl figure>:is(img,svg){aspect-ratio:4/3;border-radius:0}
.pv.tf-volt .gl figcaption{position:absolute;left:0;bottom:0;margin:0;background:var(--ink);color:var(--oi);padding:6px 12px;font-size:13px;text-transform:uppercase;letter-spacing:.08em;font-weight:600}
.pv.tf-volt .qs blockquote{background:var(--card);border:1px solid var(--line);border-top:6px solid var(--acc);border-radius:6px;color:var(--ink)}
.pv.tf-volt .qs blockquote p{font-family:var(--bf);font-size:19px;font-weight:500}
.pv.tf-volt .qs blockquote:before{content:"★★★★★";display:block;color:var(--acc);letter-spacing:.2em;margin-bottom:10px;font-size:15px}
.pv.tf-volt .ct>div{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:6px;padding:20px 20px 20px 64px;position:relative}
.pv.tf-volt .ct>div:before{content:"";position:absolute;left:20px;top:22px;width:28px;height:28px;border-radius:50%;background:var(--acc)}
.pv.tf-volt .ct dd{font-weight:600;font-size:18px}
.pv.tf-volt .s-cta,.pv.tf-volt .s-cta.bg-default{background:var(--ink);color:var(--oi);background-image:repeating-linear-gradient(-45deg,transparent 0 22px,color-mix(in srgb,var(--acc) 12%,transparent) 22px 44px)}
.pv.tf-volt .s-cta h2{font-size:76px}
.pv.tf-volt .s-cta .bt{font-size:17px;padding:20px 36px}

/* ---------- Loom: makers and craft shops ---------- */
.pv.tf-loom h1{font-size:84px;line-height:1;letter-spacing:-.01em}
.pv.tf-loom h2{font-size:50px;letter-spacing:-.01em}
.pv.tf-loom h3{font-size:24px}
.pv.tf-loom .hd{border-bottom:1px dashed var(--line)}
.pv.tf-loom .bt{border-radius:999px;padding:14px 28px;font-weight:600}
.pv.tf-loom .ey{color:var(--acc);letter-spacing:.24em}
.pv.tf-loom .hl-split .hx{grid-template-columns:1fr 1fr;gap:72px;padding-top:80px;padding-bottom:96px}
.pv.tf-loom .hl-split .hm{aspect-ratio:4/5;border-radius:999px 999px 14px 14px;box-shadow:-28px 28px 0 var(--soft)}
.pv.tf-loom .hl-split p{font-size:20px}
.pv.tf-loom .sh h2:after{content:"";display:block;width:72px;border-bottom:3px dashed var(--acc);margin-top:14px}
.pv.tf-loom .stt{gap:0}.pv.tf-loom .stt>div{border-left:1px dashed var(--line)}.pv.tf-loom .stt>div:first-child{border:0}
.pv.tf-loom .stt b{color:var(--ink);font-family:var(--hf);font-weight:400}
.pv.tf-loom .stt span{font-size:14px;color:var(--mute)}
.pv.tf-loom .tl-shop{gap:40px 28px}
.pv.tf-loom .tl-shop .tim{aspect-ratio:1;border-radius:14px;margin-bottom:16px;background:var(--soft)}
.pv.tf-loom .tl-shop .tx{display:grid;grid-template-columns:1fr auto;column-gap:12px;align-items:baseline}
.pv.tf-loom .tl-shop h3{grid-column:1;grid-row:1;margin:0}
.pv.tf-loom .tl-shop .meta{grid-column:2;grid-row:1;margin:0;font:600 16px var(--bf);letter-spacing:0;text-transform:none;color:var(--ink);background:var(--soft);padding:4px 12px;border-radius:999px}
.pv.tf-loom .tl-shop p{grid-column:1/-1;margin:6px 0 10px}
.pv.tf-loom .tl-shop b{grid-column:1/-1;text-decoration:underline;text-underline-offset:4px;text-decoration-style:dashed}
.pv.tf-loom .tl-shop .ti:hover{transform:translateY(-4px)}
.pv.tf-loom .fe-split{grid-template-columns:6fr 5fr;gap:72px}
.pv.tf-loom .fe-split .fm{order:2;aspect-ratio:1;border-radius:50%;box-shadow:24px 24px 0 var(--soft)}
.pv.tf-loom .fe h3{font-size:50px;line-height:1.05}
.pv.tf-loom .gl{display:block;columns:3;column-gap:16px}
.pv.tf-loom .gl figure{break-inside:avoid;margin:0 0 16px;border-radius:14px}
.pv.tf-loom .gl figure>:is(img,svg){border-radius:14px;aspect-ratio:4/5}
.pv.tf-loom .gl figure:nth-child(3n+2)>:is(img,svg){aspect-ratio:1}
.pv.tf-loom .gl figure:nth-child(3n)>:is(img,svg){aspect-ratio:4/3}
.pv.tf-loom .gl figcaption{font-style:italic}
.pv.tf-loom .qs blockquote{background:var(--card);color:var(--ink);border-radius:4px;box-shadow:0 14px 30px -16px rgba(0,0,0,.3);position:relative;padding:34px 28px 24px}
.pv.tf-loom .qs blockquote:nth-child(odd){transform:rotate(-1.2deg)}.pv.tf-loom .qs blockquote:nth-child(even){transform:rotate(1deg)}
.pv.tf-loom .qs blockquote:before{content:"";position:absolute;top:-10px;left:50%;width:84px;height:22px;margin-left:-42px;background:color-mix(in srgb,var(--acc) 35%,transparent);transform:rotate(-3deg)}
.pv.tf-loom .qs cite{color:var(--acc)}
.pv.tf-loom .ct>div{border-top:1px dashed var(--line);padding-top:14px}
.pv.tf-loom .s-cta .w{border:2px dashed currentColor;border-radius:24px;padding:64px 32px;max-width:calc(1000px - 2 * var(--pad))}
.pv.tf-loom .s-cta h2{font-size:58px}

/* flagships: tablet */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-hearth h1{font-size:72px}.pv.tf-volt h1{font-size:68px}.pv.tf-loom h1{font-size:60px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) h2,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s-cta h2{font-size:42px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr!important}
.pv.tf-hearth .hl-overlay .hx{min-height:600px}
.pv.tf-volt .hl-split .hx,.pv.tf-loom .hl-split .hx{gap:32px}
.pv.tf-loom .gl{columns:2}
}
/* flagships: phone */
@container (max-width:599.98px){
.pv.tf-hearth{--sy:60px}
.pv.tf-hearth h1{font-size:54px}.pv.tf-volt h1{font-size:54px}.pv.tf-loom h1{font-size:44px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) h2,.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s-cta h2{font-size:34px}
.pv:is(.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .fe h3{font-size:32px}
.pv.tf-hearth .hl-overlay .hx{min-height:560px}
.pv.tf-hearth .tl-menu{grid-template-columns:1fr!important;gap:24px}
.pv.tf-hearth .tl-menu .tim{flex-basis:76px;width:76px}
.pv.tf-hearth .tl-menu h3{font-size:22px}.pv.tf-hearth .tl-menu .meta{font-size:20px}
.pv.tf-hearth .fe-split,.pv.tf-volt .fe-split,.pv.tf-loom .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-hearth .gl{grid-template-columns:1fr 1fr;grid-auto-rows:150px}
.pv.tf-hearth .gl figure:nth-child(6n+1){grid-row:span 1}.pv.tf-hearth .gl figure:last-child:nth-child(even){grid-column:span 2}
.pv.tf-hearth .ey:before,.pv.tf-hearth .hl-overlay .ey:after{display:none}
.pv.tf-hearth .stt b,.pv.tf-volt .stt b{font-size:40px}
.pv.tf-hearth .ct{padding:24px}
.pv.tf-volt .hl-split .hx{grid-template-columns:1fr;padding-top:48px;padding-bottom:0;gap:32px}
.pv.tf-volt .hl-split .hm{margin:0 calc(-1 * var(--pad));clip-path:polygon(0 12%,100% 0,100% 100%,0 100%);aspect-ratio:4/3}
.pv.tf-volt .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-volt .stt>div{border:0}
.pv.tf-loom .hl-split .hx{grid-template-columns:1fr;padding-top:40px;gap:36px}
.pv.tf-loom .hl-split .hm{box-shadow:-14px 14px 0 var(--soft);max-width:340px}
.pv.tf-loom .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-loom .stt>div{border:0}
.pv.tf-loom .tl-shop{grid-template-columns:1fr 1fr!important;gap:24px 14px}
.pv.tf-loom .tl-shop .tx{display:block}.pv.tf-loom .tl-shop .meta{display:inline-block;margin-top:6px}
.pv.tf-loom .gl{columns:2;column-gap:10px}
.pv.tf-loom .fe-split .fm{order:0;max-width:300px}
}

/* ---------- flagships: wordmark logos (business name in the template's type, with a monogram) ---------- */
.pv .wm{display:inline-flex;align-items:center;gap:12px;color:inherit;white-space:nowrap;line-height:1}
.pv .wm-i{display:grid;place-items:center;width:42px;height:42px;flex:0 0 42px;background:var(--acc);color:var(--oa);font:var(--hw) 22px/1 var(--hf)}
.pv .wm-n{font:var(--hw) 24px/1 var(--hf)}
.pv .ft .wm{color:var(--oi)}
.pv.tf-hearth .wm-i{border-radius:50%;font-style:italic;font-size:26px;box-shadow:0 0 0 2px var(--bg),0 0 0 3px var(--acc)}
.pv.tf-hearth .wm-n{font-style:italic;font-size:30px;letter-spacing:.01em}
.pv.tf-volt .wm-i{width:40px;height:40px;transform:skewX(-12deg);border-radius:3px;font-size:24px}
.pv.tf-volt .wm-n{text-transform:uppercase;font-size:28px;letter-spacing:.02em}
.pv.tf-loom .wm-i{border-radius:999px 999px 4px 4px;height:46px;font-size:24px;padding-top:4px}
.pv.tf-loom .wm-n{font-size:27px;padding-bottom:4px;border-bottom:2px dashed var(--acc)}
@container (max-width:599.98px){.pv .wm-n{font-size:17px!important}.pv .wm-i{width:34px;height:34px;flex-basis:34px;font-size:18px!important}.pv .wm{gap:9px}}
.pv .ft .fb .wm{background:none}

/* ---------- flagships: menu, booking and products ---------- */
.pv.tf-hearth .s-menu .w{max-width:1100px}
.pv.tf-hearth .mu-g{gap:48px 56px}
.pv.tf-hearth .mu-h{font:italic 600 34px/1.1 var(--hf);letter-spacing:0;text-transform:none;text-align:center;border:0;margin-bottom:18px;color:var(--ink)}
.pv.tf-hearth .mu-h:after{content:"";display:block;width:48px;height:2px;background:var(--acc);margin:12px auto 0}
.pv.tf-hearth .s-menu .w{max-width:1200px}
.pv.tf-hearth .mu-g{gap:48px 44px}
.pv.tf-hearth .mu-im{flex-basis:64px;width:64px;height:64px;border-radius:50%;box-shadow:0 10px 22px -10px rgba(0,0,0,.5)}
.pv.tf-hearth .mu-l strong,.pv.tf-hearth .mu-p{font:600 21px/1.15 var(--hf)}
.pv.tf-hearth .mu-x p{font-size:14px}
.pv.tf-hearth .mu-p{color:var(--acc)}
.pv.tf-hearth .mu-f{text-align:center;margin-top:44px}
.pv.tf-volt .bk-a h2{font-size:58px}
.pv.tf-volt .bk-ar li{border-radius:4px;background:color-mix(in srgb,var(--acc) 14%,transparent);border-color:transparent;text-transform:uppercase;letter-spacing:.06em;font-size:13px}
.pv.tf-volt .bk-b{border-radius:6px;border-top:6px solid var(--acc);padding:32px}
.pv.tf-volt .bk-b h3{font-size:30px}
.pv.tf-volt .bk-i strong{font-size:18px}
.pv.tf-volt .bk-i b{font:700 22px var(--hf);text-transform:uppercase}
.pv.tf-volt .bk-bt{font-size:16px;padding:18px}
.pv.tf-loom .pr-g{gap:44px 28px}
.pv.tf-loom .pr-im{border-radius:14px;transition:transform .35s}
.pv.tf-loom .pr-i:hover .pr-im{transform:translateY(-4px)}
.pv.tf-loom .pr-im>img{transition:transform .8s cubic-bezier(.2,.7,.2,1)}
.pv.tf-loom .pr-i:hover .pr-im>img{transform:scale(1.06)}
.pv.tf-loom .pr-t h3{font-size:24px}
.pv.tf-loom .pr-p{background:var(--soft);padding:4px 12px;border-radius:999px;font-weight:600;font-size:15px}
.pv.tf-loom .pr-bd{background:var(--acc);color:var(--oa)}
.pv.tf-loom .pr-btn{color:var(--ink);text-decoration:underline dashed var(--acc);text-underline-offset:5px}
@container (max-width:599.98px){.pv.tf-volt .bk-a h2{font-size:36px}.pv.tf-hearth .mu-h{font-size:28px}.pv.tf-hearth .mu-l strong,.pv.tf-hearth .mu-p{font-size:20px}.pv.tf-hearth .mu-im{flex-basis:64px;width:64px;height:64px}.pv.tf-loom .pr-t h3{font-size:19px}}

/* ======================================================================
   Flagships, round 2 (2026-11-14): Bloom (salons), Pulse (fitness), Commons (community organizations).
   ====================================================================== */
/* ---------- Bloom: salons and beauty ---------- */
.pv.tf-bloom{--sy:96px}
.pv.tf-bloom h1{font-size:92px;line-height:.98;font-weight:500;letter-spacing:-.02em}
.pv.tf-bloom h2{font-size:54px;font-weight:500;letter-spacing:-.015em}
.pv.tf-bloom h3{font-weight:500}
.pv.tf-bloom .hd{border-bottom:1px solid var(--line)}
.pv.tf-bloom :is(.mn,.dr>summary){font-weight:600;letter-spacing:.14em;text-transform:uppercase;font-size:12px}
.pv.tf-bloom .bt{border-radius:999px;background:var(--ink);color:var(--oi);font-weight:600;letter-spacing:.06em;padding:15px 30px}
.pv.tf-bloom .bt2{background:transparent;color:inherit}
.pv.tf-bloom .ey{color:var(--acc);letter-spacing:.3em;font-weight:600;font-size:12px}
.pv.tf-bloom .hl-split .hx{grid-template-columns:1fr 1fr;gap:80px;padding-top:72px;padding-bottom:96px}
.pv.tf-bloom .hl-split .hm{aspect-ratio:4/5;border-radius:240px 240px 24px 240px;position:relative;box-shadow:30px 30px 0 var(--soft)}
.pv.tf-bloom .hl-split p{font-size:19px;max-width:36ch}
.pv.tf-bloom .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-bloom .sh h2:before{content:"✦";display:block;font-size:14px;color:var(--acc);margin-bottom:12px}
.pv.tf-bloom .in{text-align:center;margin:0 auto 44px}
.pv.tf-bloom .s-menu .w{max-width:1200px}
.pv.tf-bloom .mu-g{gap:48px 56px}
.pv.tf-bloom .mu-h{font:italic 500 30px var(--hf);letter-spacing:0;text-transform:none;color:var(--ink);border-bottom:1px solid var(--ink);padding-bottom:12px}
.pv.tf-bloom .mu-l strong{font-weight:600;font-size:17px}
.pv.tf-bloom .mu-p{font:500 20px var(--hf)}
.pv.tf-bloom .mu-f{text-align:center}
.pv.tf-bloom .bk{grid-template-columns:5fr 6fr;gap:72px;align-items:center}
.pv.tf-bloom .bk-a h2{font-size:54px}
.pv.tf-bloom .bk-ar li{border-color:var(--ink);font-weight:500}
.pv.tf-bloom .bk-b{background:var(--soft);border:0;border-radius:32px;padding:40px;box-shadow:none}
.pv.tf-bloom .bk-b h3{font-size:30px}
.pv.tf-bloom .bk-i{border-color:color-mix(in srgb,var(--ink) 15%,transparent)}
.pv.tf-bloom .bk-i b{color:var(--ink);font:500 20px var(--hf)}
.pv.tf-bloom .tl-cards .ti{border:0;background:transparent;padding:0;text-align:center}
.pv.tf-bloom .tl-cards .tim{aspect-ratio:3/4;border-radius:200px 200px 16px 16px;margin-bottom:16px}
.pv.tf-bloom .tl-cards .tx{align-items:center}
.pv.tf-bloom .tl-cards h3{font-size:26px}
.pv.tf-bloom .meta{color:var(--acc);letter-spacing:.2em}
.pv.tf-bloom .fe-split{grid-template-columns:1fr 1fr;gap:80px}
.pv.tf-bloom .fm{aspect-ratio:4/5;border-radius:24px 240px 24px 24px}
.pv.tf-bloom .fe h3{font-size:52px;font-weight:500;line-height:1.02}
.pv.tf-bloom .gl{grid-template-columns:repeat(4,1fr);gap:18px;padding-bottom:48px}
.pv.tf-bloom .gl figure{margin:0;border-radius:20px}
.pv.tf-bloom .gl figure:nth-child(even){transform:translateY(48px)}
.pv.tf-bloom .gl figure>:is(img,svg){aspect-ratio:3/4;border-radius:20px}
.pv.tf-bloom .gl figcaption{text-align:center;font-size:12px;letter-spacing:.16em;text-transform:uppercase}
.pv.tf-bloom .qs blockquote{background:transparent;text-align:center;padding:0 12px;color:inherit}
.pv.tf-bloom .qs blockquote p{font:italic 500 26px/1.3 var(--hf)}
.pv.tf-bloom .qs cite{letter-spacing:.16em;text-transform:uppercase;font-size:12px;color:var(--acc)}
.pv.tf-bloom .stt b{font:500 54px var(--hf);color:var(--ink)}
.pv.tf-bloom .stt span{letter-spacing:.16em;text-transform:uppercase;font-size:11px}
.pv.tf-bloom .ct{text-align:center}
.pv.tf-bloom .s-contact .w{text-align:center}
.pv.tf-bloom .s-cta,.pv.tf-bloom .s-cta.bg-default{background:transparent}
.pv.tf-bloom .s-cta .w{background:var(--soft);border-radius:36px;padding:80px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-bloom .s-cta h2{font-size:64px}
.pv.tf-bloom .wm-i{border-radius:50%;background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink);font-weight:500}
.pv.tf-bloom .ft .wm-i{color:var(--oi);box-shadow:inset 0 0 0 1.5px var(--oi)}
.pv.tf-bloom .wm-n{font-size:28px;letter-spacing:.04em;font-weight:500}

/* ---------- Pulse: gyms and fitness (dark) ---------- */
.pv.tf-pulse h1,.pv.tf-pulse h2,.pv.tf-pulse h3{text-transform:uppercase;font-weight:400;letter-spacing:.005em}
.pv.tf-pulse h1{font-size:132px;line-height:.88}
.pv.tf-pulse h2{font-size:72px;line-height:.92}
.pv.tf-pulse h3{font-size:28px}
.pv.tf-pulse .hd{border-bottom:1px solid var(--line);background:var(--bg)}
.pv.tf-pulse :is(.mn,.dr>summary){text-transform:uppercase;letter-spacing:.12em;font-size:13px;font-weight:700}
.pv.tf-pulse .bt{border-radius:0;text-transform:uppercase;letter-spacing:.12em;font-weight:800;font-size:14px;padding:17px 32px;clip-path:polygon(0 0,100% 0,100% 72%,92% 100%,0 100%)}
.pv.tf-pulse .bt2{clip-path:none;box-shadow:inset 0 0 0 2px currentColor}
.pv.tf-pulse .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:6px 12px;letter-spacing:.18em;font-weight:800}
.pv.tf-pulse .hl-overlay .hx{min-height:820px;padding-bottom:96px}
.pv.tf-pulse .hl-overlay .hm:after{background:linear-gradient(0deg,var(--bg) 2%,rgba(0,0,0,.35) 45%,rgba(0,0,0,.15)),linear-gradient(90deg,rgba(0,0,0,.6),transparent 60%)}
.pv.tf-pulse .hl-overlay .ht{max-width:980px}
.pv.tf-pulse .hl-overlay p{font-size:20px;max-width:44ch}
.pv.tf-pulse .s-stats{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-pulse .stt b{font:400 88px/1 var(--hf);color:transparent;-webkit-text-stroke:2px var(--acc)}
.pv.tf-pulse .stt span{text-transform:uppercase;letter-spacing:.16em;font-weight:700;font-size:12px}
.pv.tf-pulse .sh{align-items:flex-end}
.pv.tf-pulse .sh h2:after{content:"";display:block;width:80px;height:6px;background:var(--acc);margin-top:14px;transform:skewX(-20deg)}
.pv.tf-pulse .mu-g{grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px}
.pv.tf-pulse .mu-c{background:var(--card);border:1px solid var(--line);padding:24px}
.pv.tf-pulse .mu-h{font:400 30px var(--hf);letter-spacing:.02em;color:var(--acc);border-color:var(--line)}
.pv.tf-pulse .mu-l{flex-direction:column;gap:2px}
.pv.tf-pulse .mu-d{display:none}
.pv.tf-pulse .mu-l strong{font-size:18px;text-transform:uppercase;letter-spacing:.04em}
.pv.tf-pulse .mu-p{order:-1;font-size:13px;font-weight:800;letter-spacing:.12em;color:var(--acc)}
.pv.tf-pulse .mu-i{border-bottom:1px solid var(--line)}.pv.tf-pulse .mu-i:last-child{border:0}
.pv.tf-pulse .bk{align-items:center}
.pv.tf-pulse .bk-ar li{border-radius:0;border-color:var(--acc);color:var(--ink);text-transform:uppercase;letter-spacing:.08em;font-size:12px}
.pv.tf-pulse .bk-at{color:var(--ink)}
.pv.tf-pulse .bk-b{background:var(--card);border:2px solid var(--acc);border-radius:0;padding:36px;box-shadow:16px 16px 0 color-mix(in srgb,var(--acc) 35%,transparent)}
.pv.tf-pulse .bk-b h3{font-size:36px}
.pv.tf-pulse .bk-i b{font:400 30px var(--hf);color:var(--acc)}
.pv.tf-pulse .tl-cards{gap:12px}
.pv.tf-pulse .tl-cards .ti{position:relative;border:0;padding:0;border-radius:0;overflow:hidden;min-height:420px;background:var(--card);color:#fff}
.pv.tf-pulse .tl-cards .tim{position:absolute;inset:0;margin:0;aspect-ratio:auto;border-radius:0}
.pv.tf-pulse .tl-cards .tim:after{content:"";position:absolute;inset:0;background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.05) 70%)}
.pv.tf-pulse .tl-cards .tx{position:relative;margin-top:auto;padding:24px;justify-content:flex-end}
.pv.tf-pulse .tl-cards .ti :is(p,.meta){color:rgba(255,255,255,.85)}
.pv.tf-pulse .tl-cards .ti b{margin-top:8px;color:var(--acc);text-transform:uppercase;letter-spacing:.1em;font-size:13px}
.pv.tf-pulse .tl-cards .ti:hover .tim>img{transform:scale(1.08)}
.pv.tf-pulse .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-pulse .fm{border-radius:0;aspect-ratio:1;clip-path:polygon(0 0,100% 0,100% 88%,88% 100%,0 100%)}
.pv.tf-pulse .fe h3{font-size:64px;line-height:.92}
.pv.tf-pulse .gl{gap:6px}
.pv.tf-pulse .gl figure{margin:0;position:relative;border-radius:0}
.pv.tf-pulse .gl figure>:is(img,svg){border-radius:0;aspect-ratio:4/5;filter:grayscale(1) contrast(1.1);transition:filter .5s,transform .8s}
.pv.tf-pulse .gl figure:hover>:is(img,svg){filter:none}
.pv.tf-pulse .gl figcaption{position:absolute;left:0;bottom:0;margin:0;background:var(--acc);color:var(--oa);padding:6px 12px;font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:12px}
.pv.tf-pulse .qs blockquote{background:var(--card);border-left:4px solid var(--acc);border-radius:0;color:var(--ink)}
.pv.tf-pulse .qs blockquote p{font:400 26px/1.15 var(--hf);text-transform:uppercase}
.pv.tf-pulse .ct>div{border-left:4px solid var(--acc);padding-left:16px}
.pv.tf-pulse .s-cta,.pv.tf-pulse .s-cta.bg-default{background:var(--acc);color:var(--oa);background-image:repeating-linear-gradient(-60deg,transparent 0 30px,color-mix(in srgb,var(--oa) 8%,transparent) 30px 60px)}
.pv.tf-pulse .s-cta h2{font-size:104px}
.pv.tf-pulse .s-cta .bt{background:var(--oa);color:var(--acc)}
.pv.tf-pulse .ft{background:var(--bg);color:var(--ink);border-top:1px solid var(--line)}
.pv.tf-pulse .ft .wm{color:var(--ink)}
.pv.tf-pulse .wm-i{transform:skewX(-14deg);border-radius:0}
.pv.tf-pulse .wm-n{text-transform:uppercase;font-size:30px;letter-spacing:.03em}

/* ---------- Commons: community organizations and band offices ---------- */
.pv.tf-commons{font-size:18px}
.pv.tf-commons h1{font-size:56px;line-height:1.1;letter-spacing:-.01em}
.pv.tf-commons .fe h3{font-size:38px}
.pv.tf-commons h2{font-size:40px;line-height:1.15}
.pv.tf-commons h3{font-size:22px}
.pv.tf-commons .hd{border-bottom:4px solid var(--acc)}
.pv.tf-commons :is(.mn,.dr>summary){font-weight:700;font-size:16px}
.pv.tf-commons .bt{border-radius:8px;font-size:17px;padding:15px 26px}
.pv.tf-commons .bt:focus-visible,.pv.tf-commons a:focus-visible{outline:3px solid var(--acc);outline-offset:3px}
.pv.tf-commons .ey{display:inline-flex;align-items:center;gap:10px;background:var(--card);color:var(--ink);border:1px solid var(--line);padding:8px 14px;border-radius:999px;letter-spacing:.04em;text-transform:none;font-size:15px}
.pv.tf-commons .ey:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent)}
.pv.tf-commons .s-hero{background:var(--soft)}
.pv.tf-commons .hl-split .hx{grid-template-columns:1fr 1fr;gap:56px;padding-top:72px;padding-bottom:72px}
.pv.tf-commons .hl-split .hm{aspect-ratio:4/3;border-radius:20px;box-shadow:0 30px 60px -30px rgba(0,0,0,.45)}
.pv.tf-commons .hl-split p{font-size:20px}
.pv.tf-commons .sh h2{position:relative;padding-left:20px}
.pv.tf-commons .sh h2:before{content:"";position:absolute;left:0;top:.2em;bottom:.2em;width:6px;border-radius:3px;background:var(--acc)}
.pv.tf-commons .tl-cards .ti{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:0;overflow:hidden;color:var(--ink)}
.pv.tf-commons .tl-cards .ti:hover{transform:translateY(-4px);box-shadow:0 20px 40px -20px rgba(0,0,0,.35)}
.pv.tf-commons .tl-cards .tim{margin:0;border-radius:0;aspect-ratio:16/9}
.pv.tf-commons .tl-cards .tx{padding:20px 22px 24px}
.pv.tf-commons .meta{color:var(--acc);letter-spacing:.08em}
.pv.tf-commons .ti b{font-size:16px}
.pv.tf-commons .ls{border:0;display:grid;gap:12px}
.pv.tf-commons .lr{background:var(--card);border:1px solid var(--line);border-left:6px solid var(--acc);border-radius:12px;padding:18px 22px;color:var(--ink)}
.pv.tf-commons .lr strong{font-size:18px}
.pv.tf-commons .lr .mo{background:var(--soft);padding:8px 14px;border-radius:8px}
.pv.tf-commons .bk-b{border-radius:16px}
.pv.tf-commons .bk-ar li{background:var(--soft);border-color:transparent;font-size:15px}
.pv.tf-commons .bk-i b{color:var(--ink);font-weight:700}
.pv.tf-commons .stt>div{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:24px 12px;color:var(--ink)}
.pv.tf-commons .stt b{font-family:var(--hf)}
.pv.tf-commons .fe-split{grid-template-columns:1fr 1fr;gap:56px}
.pv.tf-commons .fm{border-radius:20px}
.pv.tf-commons .gl figure>:is(img,svg){border-radius:16px;aspect-ratio:4/3}
.pv.tf-commons .gl figcaption{font-size:15px;font-weight:600;color:var(--ink)}
.pv.tf-commons .qs blockquote{background:var(--card);border:1px solid var(--line);border-radius:16px}
.pv.tf-commons .qs blockquote p{font-size:19px;line-height:1.5}
.pv.tf-commons .ct>div{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:18px;color:var(--ink)}
.pv.tf-commons .ct dd{font-size:18px;font-weight:600}
.pv.tf-commons .s-cta,.pv.tf-commons .s-cta.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-commons .wm-i{border-radius:12px}
.pv.tf-commons .wm-n{font-size:22px;line-height:1.15;white-space:normal;max-width:260px}

/* round 2: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-bloom h1{font-size:64px}.pv.tf-pulse h1{font-size:92px}.pv.tf-commons h1{font-size:48px}
.pv:is(.tf-bloom,.tf-pulse) h2,.pv:is(.tf-bloom,.tf-pulse) .s-cta h2,.pv.tf-pulse .fe h3{font-size:48px}
.pv.tf-bloom .gl{grid-template-columns:repeat(2,1fr)}
.pv:is(.tf-bloom,.tf-commons) .hl-split .hx,.pv.tf-bloom .bk{gap:36px}
}
@container (max-width:599.98px){
.pv.tf-bloom{--sy:60px}
.pv.tf-bloom h1{font-size:50px}.pv.tf-pulse h1{font-size:68px}.pv.tf-commons h1{font-size:38px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2,.pv:is(.tf-bloom,.tf-pulse) .s-cta h2,.pv.tf-bloom .bk-a h2{font-size:36px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:32px}
.pv:is(.tf-bloom,.tf-commons) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:40px;padding-bottom:56px}
.pv.tf-bloom .hl-split .hm{box-shadow:16px 16px 0 var(--soft);border-radius:160px 160px 16px 160px}
.pv:is(.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-bloom .bk{grid-template-columns:1fr;gap:28px}.pv.tf-bloom .bk-b{padding:24px}
.pv.tf-bloom .gl{grid-template-columns:1fr 1fr;padding-bottom:24px}.pv.tf-bloom .gl figure:nth-child(even){transform:translateY(24px)}
.pv.tf-pulse .hl-overlay .hx{min-height:620px;padding-bottom:48px}
.pv.tf-pulse .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-pulse .stt b{font-size:56px}
.pv.tf-pulse .tl-cards .ti{min-height:320px}
.pv.tf-pulse .bk-b{box-shadow:8px 8px 0 color-mix(in srgb,var(--acc) 35%,transparent);padding:24px}
.pv.tf-commons .stt{grid-template-columns:1fr 1fr}
.pv.tf-commons .lr .mo{display:inline-block;margin-top:8px}
}

/* buttons stay readable on dark and accent bands */
.pv:is(.tf-tide,.tf-ember,.tf-folio,.tf-block,.tf-craft,.tf-glow,.tf-swiss,.tf-retro,.tf-lens,.tf-hearth,.tf-volt,.tf-loom,.tf-bloom,.tf-pulse,.tf-commons,.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar,.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s.bg-acc .bt:not(.bt2){background:var(--bg);color:var(--acc)}
.pv.tf-bloom .s.bg-ink .bt:not(.bt2){background:var(--acc);color:var(--oa)}

/* ======================================================================
   Indigenous business series, run 1 (2026-11-14): consulting firms. Council, Meridian, Bridge.
   ====================================================================== */
/* ---------- Council: government-ready ---------- */
.pv.tf-council{font-size:17px}
.pv.tf-council h1{font-size:58px;line-height:1.1;letter-spacing:-.01em}
.pv.tf-council h2{font-size:36px}
.pv.tf-council h3{font-size:20px}
.pv.tf-council .hd{border-bottom:1px solid var(--line);box-shadow:inset 0 4px 0 var(--acc)}
.pv.tf-council :is(.mn,.dr>summary){font-weight:600;font-size:15px}
.pv.tf-council .bt{border-radius:2px;font-weight:600;padding:14px 24px}
.pv.tf-council .ey{color:var(--ink);font-weight:600;letter-spacing:.06em;text-transform:none;font-size:14px;display:flex;align-items:center;gap:10px}
.pv.tf-council .ey:before{content:"";width:28px;height:28px;flex:0 0 28px;border-radius:50%;background:var(--acc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M6 12.5l4 4 8-9' fill='none' stroke='white' stroke-width='3' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") center/16px no-repeat}
.pv.tf-council .hl-split .hx{grid-template-columns:7fr 5fr;gap:64px;padding-top:80px;padding-bottom:80px}
.pv.tf-council .hl-split .hm{aspect-ratio:4/5;border-radius:2px;box-shadow:-18px 18px 0 var(--soft)}
.pv.tf-council .hl-split p{font-size:19px}
.pv.tf-council .s-stats,.pv.tf-council .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-council .stt{text-align:left;gap:0}
.pv.tf-council .stt>div{border-left:1px solid color-mix(in srgb,var(--oi) 25%,transparent);padding:4px 24px}
.pv.tf-council .stt b{color:var(--oi);font-size:40px}
.pv.tf-council .stt span{font-size:14px;opacity:.8}
.pv.tf-council .sh{border-bottom:1px solid var(--ink);padding-bottom:12px}
.pv.tf-council .tl-steps{gap:32px}
.pv.tf-council .tl-steps .ti:before{border-radius:2px;background:var(--ink);color:var(--oi)}
.pv.tf-council .tl-steps .ti:after{border-top:1px solid var(--ink)}
.pv.tf-council .ls{display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border:0}
.pv.tf-council .lr{border-bottom:1px solid var(--line);padding:20px 0;align-items:flex-start}
.pv.tf-council .lr strong{font:700 19px var(--hf);flex-basis:100%}
.pv.tf-council .lr span{flex-basis:100%;font-size:15px}
.pv.tf-council .lr .mo{font-size:14px}
.pv.tf-council .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-council .fm{border-radius:2px}
.pv.tf-council .fe h3{font-size:36px}
.pv.tf-council .ct>div{border-top:3px solid var(--acc);padding-top:12px}
.pv.tf-council .s-cta.bg-default,.pv.tf-council .s-cta.bg-auto{background:var(--soft)}
.pv.tf-council .s-cta .w{text-align:left;display:grid;grid-template-columns:2fr 1fr;align-items:center;gap:0 40px}
.pv.tf-council .s-cta .w>.bt{grid-column:2;grid-row:1/3;justify-self:end}
.pv.tf-council .wm-i{border-radius:2px;background:var(--ink);color:var(--oi)}
.pv.tf-council .ft .wm-i{background:var(--acc);color:var(--oa)}
.pv.tf-council .wm-n{font-size:22px}

/* ---------- Meridian: modern consultancy ---------- */
.pv.tf-meridian h1{font-size:68px;line-height:1.02;letter-spacing:-.04em}
.pv.tf-meridian h2{font-size:44px;letter-spacing:-.03em}
.pv.tf-meridian h3{letter-spacing:-.02em}
.pv.tf-meridian .hd{border:0;background:var(--ink);color:var(--oi)}
.pv.tf-meridian .bt{border-radius:12px;padding:15px 26px}
.pv.tf-meridian .s-hero .bt2{color:var(--oi);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--oi) 40%,transparent)}
.pv.tf-meridian .ey{display:inline-block;padding:7px 14px;border-radius:999px;background:color-mix(in srgb,var(--acc) 18%,transparent);color:var(--acc);letter-spacing:.06em;text-transform:none;font-size:14px;font-weight:600}
.pv.tf-meridian .s-hero{background:radial-gradient(800px 500px at 85% 20%,color-mix(in srgb,var(--acc) 35%,transparent),transparent 70%),var(--ink);color:var(--oi)}
.pv.tf-meridian .hl-split .hx{grid-template-columns:1.1fr 1fr;gap:64px;padding-top:88px;padding-bottom:104px}
.pv.tf-meridian .hl-split .hm{aspect-ratio:1;border-radius:28px;box-shadow:0 40px 80px -30px rgba(0,0,0,.6),0 0 0 1px color-mix(in srgb,var(--oi) 15%,transparent)}
.pv.tf-meridian .hl-split p{font-size:19px;opacity:.85}
.pv.tf-meridian .s-hero+.s-stats{margin-top:-56px;padding-top:0;background:transparent}
.pv.tf-meridian .stt{background:var(--card);color:var(--ink);border:1px solid var(--line);border-radius:20px;padding:28px 8px;box-shadow:0 30px 60px -30px rgba(0,0,0,.35);position:relative}
.pv.tf-meridian .stt b{font-size:40px;letter-spacing:-.03em;color:var(--ink)}
.pv.tf-meridian .stt>div+div{border-left:1px solid var(--line)}
.pv.tf-meridian .tl-steps{gap:16px}
.pv.tf-meridian .tl-steps .ti{background:var(--card);border:1px solid var(--line);border-radius:20px;padding:84px 24px 26px;color:var(--ink)}
.pv.tf-meridian .tl-steps .ti:before{left:24px;top:24px;border-radius:14px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 50%,var(--ink)));box-shadow:0 10px 24px -8px var(--acc)}
.pv.tf-meridian .tl-steps .ti:after{display:none}
.pv.tf-meridian .ls{display:grid;grid-template-columns:1fr 1fr;gap:14px;border:0}
.pv.tf-meridian .lr{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:22px 24px;color:var(--ink);display:grid;grid-template-columns:1fr auto;gap:6px 16px;transition:transform .3s,box-shadow .3s}
.pv.tf-meridian .lr:hover{transform:translateY(-3px);box-shadow:0 20px 40px -24px rgba(0,0,0,.4)}
.pv.tf-meridian .lr strong{font-size:19px;letter-spacing:-.01em}
.pv.tf-meridian .lr span{grid-column:1;font-size:15px}
.pv.tf-meridian .lr .mo{grid-column:2;grid-row:1/3;align-self:center;width:40px;height:40px;border-radius:50%;background:var(--soft);font-size:0;display:grid;place-items:center}
.pv.tf-meridian .lr .mo:after{content:"→";font-size:18px;color:var(--ink)}
.pv.tf-meridian .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-meridian .fm{border-radius:28px}
.pv.tf-meridian .fe h3{font-size:42px;letter-spacing:-.03em}
.pv.tf-meridian .ct>div{background:var(--card);border:1px solid var(--line);border-radius:16px;padding:18px;color:var(--ink)}
.pv.tf-meridian .s-cta,.pv.tf-meridian .s-cta.bg-default{background:transparent}
.pv.tf-meridian .s-cta .w{background:radial-gradient(600px 300px at 80% 0%,color-mix(in srgb,var(--acc) 40%,transparent),transparent 70%),var(--ink);color:var(--oi);border-radius:28px;padding:72px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-meridian .wm-i{border-radius:12px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 50%,var(--ink)))}
.pv.tf-meridian .wm-n{letter-spacing:-.03em;font-size:24px}

/* ---------- Bridge: people first ---------- */
.pv.tf-bridge h1{font-size:72px;line-height:1.05}
.pv.tf-bridge h2{font-size:44px}
.pv.tf-bridge .bt{border-radius:999px;padding:15px 28px;font-weight:700}
.pv.tf-bridge .hd{border-bottom:1px solid var(--line)}
.pv.tf-bridge .ey{color:#fff;letter-spacing:.14em;font-weight:700}
.pv.tf-bridge .hl-overlay .hx{min-height:680px;align-items:center}
.pv.tf-bridge .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(0,0,0,.78),rgba(0,0,0,.35) 55%,rgba(0,0,0,.05))}
.pv.tf-bridge .hl-overlay .ht{max-width:640px}
.pv.tf-bridge .hl-overlay p{font-size:20px}
.pv.tf-bridge .hl-overlay .bt2{color:#fff}
.pv.tf-bridge .s-stats,.pv.tf-bridge .s-stats.bg-default{background:var(--soft)}
.pv.tf-bridge .stt b{font-family:var(--hf);color:var(--acc)}
.pv.tf-bridge .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-bridge .in{text-align:center;margin:0 auto 40px}
.pv.tf-bridge .tl-steps{gap:24px}
.pv.tf-bridge .tl-steps .ti{text-align:center;align-items:center;padding-top:96px}
.pv.tf-bridge .tl-steps .tx{align-items:center}
.pv.tf-bridge .tl-steps .ti:before{left:50%;margin-left:-36px;width:72px;height:72px;font-size:28px;box-shadow:0 0 0 10px var(--soft)}
.pv.tf-bridge .tl-steps .ti:after{left:calc(50% + 46px);right:calc(-50% + 46px);top:36px;border-top:3px dotted var(--acc)}
.pv.tf-bridge .ls{border:0;display:grid;gap:12px;max-width:900px;margin:0 auto}
.pv.tf-bridge .lr{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:20px 24px 20px 72px;position:relative;color:var(--ink)}
.pv.tf-bridge .lr:before{content:"+";position:absolute;left:22px;top:50%;margin-top:-17px;width:34px;height:34px;border-radius:50%;background:var(--soft);display:grid;place-items:center;font-weight:700;color:var(--acc);font-size:20px;line-height:34px;text-align:center}
.pv.tf-bridge .lr strong{font:600 21px var(--hf)}
.pv.tf-bridge .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-bridge .fm{border-radius:32px;aspect-ratio:4/3.4}
.pv.tf-bridge .fe h3{font-size:42px}
.pv.tf-bridge .ct{text-align:center}.pv.tf-bridge .s-contact .w{text-align:center}
.pv.tf-bridge .s-cta,.pv.tf-bridge .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-bridge .s-cta h2{font-size:52px}
.pv.tf-bridge .wm-i{border-radius:50% 50% 50% 8px}
.pv.tf-bridge .wm-n{font-size:24px}

/* run 1: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-council h1{font-size:44px}.pv.tf-meridian h1{font-size:50px}.pv.tf-bridge h1{font-size:54px}
.pv:is(.tf-council,.tf-meridian) .ls{grid-template-columns:1fr}
.pv.tf-council .hl-split .hx,.pv.tf-meridian .hl-split .hx{gap:32px}
}
@container (max-width:599.98px){
.pv.tf-council h1{font-size:36px}.pv.tf-meridian h1{font-size:40px}.pv.tf-bridge h1{font-size:42px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2,.pv.tf-bridge .s-cta h2{font-size:30px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:28px}
.pv:is(.tf-council,.tf-meridian) .hl-split .hx{grid-template-columns:1fr;gap:32px;padding-top:44px;padding-bottom:56px}
.pv:is(.tf-council,.tf-meridian,.tf-bridge,.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv:is(.tf-council,.tf-meridian) .ls{grid-template-columns:1fr}
.pv.tf-council .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-council .stt>div{border:0;padding:0}
.pv.tf-meridian .stt{grid-template-columns:1fr 1fr;row-gap:16px}.pv.tf-meridian .stt>div+div{border:0}
.pv.tf-council .s-cta .w{grid-template-columns:1fr}.pv.tf-council .s-cta .w>.bt{grid-column:1;grid-row:auto;justify-self:start}
.pv.tf-bridge .hl-overlay .hx{min-height:560px}
}

.pv.tf-meridian .s-hero .ey{color:var(--oi);background:color-mix(in srgb,var(--acc) 30%,transparent)}
.pv.tf-bridge .ey{color:var(--acc)}.pv.tf-bridge .s-hero .ey{color:#fff}
.pv.tf-bridge .s-cta .bt{background:var(--bg);color:var(--acc)}
/* Meridian panels that sit on a band keep the page colours */
.pv.tf-meridian .s-hero+.s-stats{background:transparent!important}
.pv.tf-meridian .s.s-hero+.s.s-stats>.w,.pv.tf-meridian .s.s-cta.s>.w{--ink:inherit;--line:inherit;--mute:inherit;--card:inherit;--soft:inherit}
.pv.tf-meridian .s-cta{background:transparent!important}
.pv.tf-meridian .s-cta>.w{color:var(--oi)}
.pv.tf-council .s-cta p{margin-left:0}

/* ======================================================================
   Indigenous business series, run 2 (2026-11-14): movers, storage and logistics. Convoy, Homeward, Freight.
   ====================================================================== */
/* ---------- Convoy: loud and road-ready ---------- */
.pv.tf-convoy{font-size:17px}
.pv.tf-convoy :is(h1,h2,h3,.wm-n){text-transform:uppercase;letter-spacing:.01em}
.pv.tf-convoy h1{font-size:104px;line-height:.9}
.pv.tf-convoy h2{font-size:56px;line-height:.95}
.pv.tf-convoy h3{font-size:26px;line-height:1}
.pv.tf-convoy .hd{background:var(--ink);color:var(--oi);border:0;box-shadow:inset 0 -5px 0 var(--acc)}
.pv.tf-convoy :is(.mn,.dr>summary){text-transform:uppercase;font-weight:700;letter-spacing:.06em;font-size:14px}
.pv.tf-convoy .bt{border-radius:0;text-transform:uppercase;letter-spacing:.08em;font-weight:800;padding:16px 28px;clip-path:polygon(0 0,100% 0,calc(100% - 12px) 100%,0 100%)}
.pv.tf-convoy .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:6px 12px;letter-spacing:.12em;font-weight:800}
.pv.tf-convoy .hl-overlay .hx{min-height:700px;align-items:end;padding-bottom:110px}
.pv.tf-convoy .hl-overlay .ht{max-width:860px}
.pv.tf-convoy .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(0,0,0,.85),rgba(0,0,0,.25) 60%,rgba(0,0,0,.1))}
.pv.tf-convoy .hl-overlay p{font-size:20px;max-width:600px}
.pv.tf-convoy .hl-overlay .bt2{color:#fff;box-shadow:inset 0 0 0 2px #fff}
.pv.tf-convoy .s-hero{position:relative}
.pv.tf-convoy .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:44px;height:6px;background:repeating-linear-gradient(90deg,var(--acc) 0 64px,transparent 64px 104px);opacity:.95;pointer-events:none}
.pv.tf-convoy .s-stats,.pv.tf-convoy .s-stats.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-convoy .stt b{font:800 66px/1 var(--hf);color:var(--oa);white-space:nowrap}
.pv.tf-convoy .stt span{text-transform:uppercase;letter-spacing:.1em;font-weight:700;font-size:13px}
.pv.tf-convoy .sh{border-left:8px solid var(--acc);padding-left:18px}
.pv.tf-convoy .ti{border-radius:0;border:2px solid var(--ink);box-shadow:8px 8px 0 var(--acc)}
.pv.tf-convoy .tim{border-radius:0}
.pv.tf-convoy .tl-steps{gap:0;counter-reset:cv}
.pv.tf-convoy .tl-steps .ti{box-shadow:none;border:0;border-left:2px solid var(--line);padding:84px 24px 8px}
.pv.tf-convoy .tl-steps .ti:before{border-radius:0;background:var(--ink);color:var(--oi);font:800 30px/56px var(--hf);width:56px;height:56px;left:24px}
.pv.tf-convoy .tl-steps .ti:after{display:none}
.pv.tf-convoy .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:0 48px;border-top:2px solid var(--ink)}
.pv.tf-convoy .lr{flex-direction:column;align-items:flex-start;border-bottom:2px solid var(--ink);padding:24px 24px 24px 0}
.pv.tf-convoy .lr strong{font:800 26px/1 var(--hf);text-transform:uppercase}
.pv.tf-convoy .lr .mo{font-weight:800;text-transform:uppercase;letter-spacing:.08em;font-size:13px;color:var(--acc)}
.pv.tf-convoy .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-convoy .fm{border-radius:0;box-shadow:-16px 16px 0 var(--acc)}
.pv.tf-convoy .fe h3{font-size:52px}
.pv.tf-convoy .bk-b{border-radius:0;border:2px solid var(--ink);box-shadow:10px 10px 0 var(--acc)}
.pv.tf-convoy .bk-ar li{border-radius:0;border:2px solid var(--ink);text-transform:uppercase;font-size:13px;letter-spacing:.06em}
.pv.tf-convoy .bk-i b{font:800 24px var(--hf)}
.pv.tf-convoy .tq{border-radius:0}
.pv.tf-convoy .s-cta,.pv.tf-convoy .s-cta.bg-default{background:repeating-linear-gradient(-45deg,var(--ink) 0 22px,color-mix(in srgb,var(--ink) 88%,var(--acc)) 22px 44px);color:var(--oi)}
.pv.tf-convoy .s-cta h2{font-size:72px}
.pv.tf-convoy .wm-i{border-radius:0;background:var(--acc);color:var(--oa)}
.pv.tf-convoy .wm-n{font:800 28px var(--hf)}
.pv.tf-convoy .ft{border-top:6px solid var(--acc)}

/* ---------- Homeward: friendly family mover ---------- */
.pv.tf-homeward{font-size:17px}
.pv.tf-homeward h1{font-size:64px;line-height:1.05;letter-spacing:-.02em}
.pv.tf-homeward h2{font-size:42px;letter-spacing:-.01em}
.pv.tf-homeward .hd{border:0;background:var(--bg)}
.pv.tf-homeward :is(.mn,.dr>summary){font-weight:700}
.pv.tf-homeward .bt{border-radius:999px;font-weight:800;padding:16px 30px;box-shadow:0 10px 24px -10px var(--acc)}
.pv.tf-homeward .bt2{box-shadow:inset 0 0 0 2px var(--line)}
.pv.tf-homeward .ey{display:inline-flex;align-items:center;gap:8px;background:var(--soft);color:var(--ink);padding:8px 16px;border-radius:999px;letter-spacing:0;text-transform:none;font-weight:700;font-size:14px}
.pv.tf-homeward .ey:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 4px color-mix(in srgb,var(--acc) 25%,transparent)}
.pv.tf-homeward .s-hero{background:linear-gradient(180deg,var(--soft),var(--bg))}
.pv.tf-homeward .hl-split .hx{grid-template-columns:1fr 1fr;gap:56px;padding-top:72px;padding-bottom:96px}
.pv.tf-homeward .hl-split .hm{aspect-ratio:5/4.6;border-radius:40px 40px 40px 120px;position:relative;overflow:visible}
.pv.tf-homeward .hl-split .hm>img,.pv.tf-homeward .hl-split .hm>svg{border-radius:inherit}
.pv.tf-homeward .hl-split .hm:after{content:"";position:absolute;right:-18px;bottom:-18px;width:96px;height:96px;border-radius:28px;background:var(--acc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 48 48'%3E%3Cpath d='M8 22L24 9l16 13v17H29V28h-10v11H8z' fill='none' stroke='white' stroke-width='3.4' stroke-linejoin='round'/%3E%3C/svg%3E") center/52% no-repeat;box-shadow:0 18px 36px -12px rgba(0,0,0,.35)}
.pv.tf-homeward .hl-split p{font-size:19px}
.pv.tf-homeward .s-stats,.pv.tf-homeward .s-stats.bg-default{background:var(--bg)}
.pv.tf-homeward .stt{background:var(--card);border:1px solid var(--line);border-radius:28px;padding:30px 12px;box-shadow:0 24px 48px -32px rgba(0,0,0,.35)}
.pv.tf-homeward .stt b{color:var(--acc);font-size:42px}
.pv.tf-homeward .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-homeward .in{text-align:center;margin:0 auto 40px}
.pv.tf-homeward .ti{border-radius:28px;background:var(--card);border:1px solid var(--line);overflow:hidden}
.pv.tf-homeward .tim{border-radius:0}
.pv.tf-homeward .tl-steps{gap:24px}
.pv.tf-homeward .tl-steps .ti{text-align:center;align-items:center;padding:100px 24px 28px}
.pv.tf-homeward .tl-steps .tx{align-items:center}
.pv.tf-homeward .tl-steps .ti:before{left:50%;margin-left:-32px;top:24px;width:64px;height:64px;border-radius:22px;background:var(--acc);color:var(--oa);font-size:26px;box-shadow:0 12px 24px -10px var(--acc)}
.pv.tf-homeward .tl-steps .ti:after{display:none}
.pv.tf-homeward .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.pv.tf-homeward .lr{background:var(--card);border:1px solid var(--line);border-radius:22px;padding:22px 24px 22px 76px;position:relative;color:var(--ink);flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-homeward .lr:before{content:"✓";position:absolute;left:22px;top:22px;width:36px;height:36px;border-radius:12px;background:var(--soft);color:var(--acc);font-weight:900;text-align:center;line-height:36px}
.pv.tf-homeward .lr strong{font:800 19px var(--hf)}
.pv.tf-homeward .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-homeward .fm{border-radius:40px}
.pv.tf-homeward .fe h3{font-size:40px}
.pv.tf-homeward .bk-b{border-radius:32px;padding:32px;border:0;box-shadow:0 30px 60px -30px rgba(0,0,0,.35)}
.pv.tf-homeward .bk-ar li{background:var(--soft);border-color:transparent}
.pv.tf-homeward .tq{border-radius:28px}
.pv.tf-homeward .s-cta,.pv.tf-homeward .s-cta.bg-default{background:transparent}
.pv.tf-homeward .s-cta>.w{background:var(--acc);color:var(--oa);border-radius:40px;padding:72px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-homeward .s-cta .bt{background:var(--bg);color:var(--acc);box-shadow:none}
.pv.tf-homeward .wm-i{border-radius:14px 14px 14px 4px}
.pv.tf-homeward .wm-n{font:800 24px var(--hf);letter-spacing:-.01em}

/* ---------- Freight: logistics manifest ---------- */
.pv.tf-freight{font-size:16px}
.pv.tf-freight h1{font-size:72px;line-height:1;letter-spacing:-.035em}
.pv.tf-freight h2{font-size:44px;letter-spacing:-.03em}
.pv.tf-freight :is(.ey,.stt span,.lr .mo,.bk-at,.bk-n){font-family:"IBM Plex Mono",ui-monospace,monospace}
.pv.tf-freight .hd{border-bottom:1px solid var(--ink)}
.pv.tf-freight :is(.mn,.dr>summary){font-weight:500}
.pv.tf-freight .bt{border-radius:4px;font-weight:600;padding:14px 22px}
.pv.tf-freight .bt:not(.bt2):after{content:" →"}
.pv.tf-freight .ey{color:var(--acc);letter-spacing:.04em;text-transform:uppercase;font-size:13px;font-weight:500}
.pv.tf-freight .ey:before{content:"[ "}.pv.tf-freight .ey:after{content:" ]"}
.pv.tf-freight .s-hero{background:linear-gradient(var(--line) 1px,transparent 1px) 0 0/48px 48px,linear-gradient(90deg,var(--line) 1px,transparent 1px) 0 0/48px 48px,var(--bg)}
.pv.tf-freight .hl-split .hx{grid-template-columns:1.15fr 1fr;gap:56px;padding-top:88px;padding-bottom:88px}
.pv.tf-freight .hl-split .hm{aspect-ratio:4/3.6;border-radius:4px;outline:1px solid var(--ink);outline-offset:10px}
.pv.tf-freight .hl-split p{font-size:19px}
.pv.tf-freight .s-stats,.pv.tf-freight .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-freight .stt{text-align:left;gap:0}
.pv.tf-freight .stt>div{border-left:1px dashed color-mix(in srgb,var(--oi) 35%,transparent);padding:2px 24px}
.pv.tf-freight .stt b{font:700 48px/1.05 var(--hf);color:var(--oi);letter-spacing:-.03em}
.pv.tf-freight .stt span{font-size:12px;text-transform:uppercase;letter-spacing:.06em;opacity:.75}
.pv.tf-freight .sh{border-bottom:1px solid var(--ink);padding-bottom:14px}
.pv.tf-freight .ti{border-radius:4px;border:1px solid var(--ink);background:var(--card)}
.pv.tf-freight .tim{border-radius:0;border-bottom:1px solid var(--ink)}
.pv.tf-freight .tl-steps{gap:0;border:1px solid var(--ink)}
.pv.tf-freight .tl-steps .ti{border:0;border-radius:0;padding:76px 22px 24px}
.pv.tf-freight .tl-steps .ti+.ti{border-left:1px solid var(--ink)}
.pv.tf-freight .tl-steps .ti:before{left:22px;top:22px;border-radius:4px;background:transparent;color:var(--acc);box-shadow:inset 0 0 0 1px var(--acc);font-family:"IBM Plex Mono",monospace;font-weight:500}
.pv.tf-freight .tl-steps .ti:after{display:none}
.pv.tf-freight .ls{border:0;counter-reset:fr;display:grid;grid-template-columns:1fr 1fr;gap:0 40px}
.pv.tf-freight .lr{counter-increment:fr;border-bottom:1px solid var(--ink);padding:20px 0 20px 64px;position:relative;flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-freight .lr:before{content:counter(fr,decimal-leading-zero);position:absolute;left:0;top:20px;font:500 14px "IBM Plex Mono",monospace;color:var(--acc);border:1px solid var(--acc);border-radius:4px;padding:2px 7px}
.pv.tf-freight .lr strong{font:700 20px var(--hf);letter-spacing:-.01em}
.pv.tf-freight .lr .mo{font-size:13px;color:var(--acc)}
.pv.tf-freight .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-freight .fm{border-radius:4px}
.pv.tf-freight .fe h3{font-size:40px;letter-spacing:-.03em}
.pv.tf-freight .bk-b{border-radius:4px;border:1px solid var(--ink);box-shadow:8px 8px 0 color-mix(in srgb,var(--ink) 12%,transparent)}
.pv.tf-freight .bk-ar li{border-radius:4px;font-family:"IBM Plex Mono",monospace;font-weight:500;font-size:13px}
.pv.tf-freight .bk-i b{font-family:"IBM Plex Mono",monospace;font-weight:600}
.pv.tf-freight .ct>div{border:1px solid var(--line);border-radius:4px;padding:16px}
.pv.tf-freight .s-cta,.pv.tf-freight .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-freight .s-cta .w{text-align:left;display:grid;grid-template-columns:2fr 1fr;align-items:center;gap:0 40px}
.pv.tf-freight .s-cta .w>.bt{grid-column:2;grid-row:1/3;justify-self:end;background:var(--ink);color:var(--oi)}
.pv.tf-freight .s-cta p{margin-left:0}
.pv.tf-freight .wm-i{border-radius:4px;background:var(--ink);color:var(--oi)}
.pv.tf-freight .wm-n{font:700 22px var(--hf);letter-spacing:-.02em}

/* run 2: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-convoy h1{font-size:76px}.pv.tf-homeward h1{font-size:50px}.pv.tf-freight h1{font-size:54px}
.pv:is(.tf-homeward,.tf-freight) .hl-split .hx{gap:32px}
.pv.tf-freight .tl-steps .ti+.ti{border-left:0}
}
@container (max-width:599.98px){
.pv.tf-convoy h1{font-size:58px}.pv.tf-homeward h1{font-size:40px}.pv.tf-freight h1{font-size:42px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:32px}.pv.tf-convoy .s-cta h2{font-size:42px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:30px}
.pv.tf-convoy .hl-overlay .hx{min-height:560px;padding-bottom:84px}.pv.tf-convoy .s-hero:after{bottom:30px}
.pv.tf-convoy .stt b{font-size:48px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .ls{grid-template-columns:1fr}
.pv:is(.tf-homeward,.tf-freight) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:44px;padding-bottom:60px}
.pv:is(.tf-convoy,.tf-homeward,.tf-freight,.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-homeward .hl-split .hm:after{width:72px;height:72px;right:-8px;bottom:-12px}
.pv.tf-homeward .s-cta>.w{padding:48px 24px;border-radius:28px}
.pv.tf-freight .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-freight .stt>div{border:0;padding:0}
.pv.tf-freight .tl-steps .ti+.ti{border-left:0;border-top:1px solid var(--ink)}
.pv.tf-freight .s-cta .w{grid-template-columns:1fr}.pv.tf-freight .s-cta .w>.bt{grid-column:1;grid-row:auto;justify-self:start}
}

/* ======================================================================
   Indigenous business series, run 3 (2026-11-14): lodges, cabins and outdoor tourism. Timber, Shoreline, Basecamp.
   ====================================================================== */
/* ---------- Timber: northern lodge (dark) ---------- */
.pv.tf-timber{font-size:17px}
.pv.tf-timber h1{font-size:96px;line-height:.98;letter-spacing:-.01em}
.pv.tf-timber h2{font-size:48px;line-height:1.05}
.pv.tf-timber h3{font-size:24px}
.pv.tf-timber .hd{background:color-mix(in srgb,var(--bg) 92%,transparent);border-bottom:1px solid var(--line)}
.pv.tf-timber :is(.mn,.dr>summary){font-weight:600;letter-spacing:.04em}
.pv.tf-timber .bt{border-radius:3px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:14px;padding:16px 26px}
.pv.tf-timber .ey{color:var(--acc);letter-spacing:.22em;font-weight:700;display:flex;align-items:center;gap:14px}
.pv.tf-timber .ey:after{content:"";height:1px;width:64px;background:currentColor;opacity:.7}
.pv.tf-timber .s-hero .ey{color:#fff}
.pv.tf-timber .hl-overlay .hx{min-height:760px;align-items:end;padding-bottom:96px}
.pv.tf-timber .hl-overlay .ht{max-width:820px}
.pv.tf-timber .hl-overlay .hm:after{background:linear-gradient(0deg,var(--bg) 0%,rgba(0,0,0,.45) 28%,rgba(0,0,0,.12) 70%,rgba(0,0,0,.3))}
.pv.tf-timber .hl-overlay p{font-size:21px;max-width:620px}
.pv.tf-timber .hl-overlay .bt2{color:#fff;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.7)}
.pv.tf-timber .s-stats,.pv.tf-timber .s-stats.bg-default{background:transparent}
.pv.tf-timber .stt{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding:26px 0}
.pv.tf-timber .stt>div+div{border-left:1px solid var(--line)}
.pv.tf-timber .stt b{font:700 52px/1 var(--hf);color:var(--acc);white-space:nowrap}
.pv.tf-timber .stt span{letter-spacing:.12em;text-transform:uppercase;font-size:12px;font-weight:600;opacity:.8}
.pv.tf-timber .sh{align-items:flex-end;border-bottom:1px solid var(--line);padding-bottom:16px}
.pv.tf-timber .ti{background:var(--soft);border-radius:4px;overflow:hidden;border:1px solid var(--line)}
.pv.tf-timber .tim{border-radius:0;aspect-ratio:4/3}
.pv.tf-timber .ti .tx{padding:4px 20px 20px}
.pv.tf-timber .mu-g{background:var(--soft);border:1px solid var(--line);border-radius:4px;padding:36px 40px;gap:28px 56px}
.pv.tf-timber .mu-h{font-family:var(--hf);font-size:22px;letter-spacing:.02em;text-transform:none;border-bottom:2px solid var(--acc)}
.pv.tf-timber .mu-p{font:700 22px var(--hf);color:var(--acc)}
.pv.tf-timber .mu-d{border-bottom:2px dotted color-mix(in srgb,var(--ink) 30%,transparent)}
.pv.tf-timber .fe-split{grid-template-columns:1.1fr 1fr;gap:72px}
.pv.tf-timber .fm{border-radius:4px;box-shadow:24px 24px 0 var(--soft)}
.pv.tf-timber .fe h3{font-size:48px;line-height:1.05}
.pv.tf-timber .bk-b{background:var(--soft);border-radius:4px;border:1px solid var(--line)}
.pv.tf-timber .bk-ar li{border-radius:3px}
.pv.tf-timber .gl{grid-template-columns:2fr 1fr 1fr;grid-auto-rows:220px;gap:10px}
.pv.tf-timber .gl figure:first-child{grid-row:span 2}
.pv.tf-timber .gl figure:nth-child(6):last-child{grid-column:1/-1}
.pv.tf-timber .gl figure{margin:0;position:relative;overflow:hidden;border-radius:4px}
.pv.tf-timber .gl figure>:is(img,svg){width:100%;height:100%;object-fit:cover}
.pv.tf-timber .gl figcaption{position:absolute;left:12px;bottom:10px;color:#fff;font-weight:600;text-shadow:0 1px 6px rgba(0,0,0,.6)}
.pv.tf-timber .qs blockquote{background:transparent;border-left:3px solid var(--acc);border-radius:0;padding:6px 0 6px 24px}
.pv.tf-timber .qs blockquote p{font-size:23px;font-style:italic}
.pv.tf-timber .s-cta,.pv.tf-timber .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-timber .s-cta h2{font-size:60px}
.pv.tf-timber .wm-i{border-radius:3px}
.pv.tf-timber .wm-n{font:700 26px var(--hf)}

/* ---------- Shoreline: calm lake resort ---------- */
.pv.tf-shoreline{font-size:17px}
.pv.tf-shoreline :is(h1,h2,h3,.fe h3){font-weight:600}
.pv.tf-shoreline h1{font-size:84px;line-height:1;font-style:italic;letter-spacing:-.01em}
.pv.tf-shoreline h2{font-size:52px;font-style:italic;line-height:1.05}
.pv.tf-shoreline h3{font-size:26px}
.pv.tf-shoreline .hd{border:0}
.pv.tf-shoreline :is(.mn,.dr>summary){font-weight:400;letter-spacing:.08em;text-transform:uppercase;font-size:13px}
.pv.tf-shoreline .bt{border-radius:999px;padding:15px 30px;letter-spacing:.08em;text-transform:uppercase;font-size:13px;font-weight:500}
.pv.tf-shoreline .bt2{box-shadow:inset 0 0 0 1px var(--ink)}
.pv.tf-shoreline .ey{color:var(--acc);letter-spacing:.24em;font-weight:500;font-size:12px}
.pv.tf-shoreline .s-hero{background:var(--soft);position:relative;padding-bottom:40px}
.pv.tf-shoreline .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:70px;background:var(--bg);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 70' preserveAspectRatio='none'%3E%3Cpath d='M0 40 C150 0 300 0 450 30 S750 70 900 35 1100 5 1200 30 V70 H0Z'/%3E%3C/svg%3E") center/100% 100% no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 70' preserveAspectRatio='none'%3E%3Cpath d='M0 40 C150 0 300 0 450 30 S750 70 900 35 1100 5 1200 30 V70 H0Z'/%3E%3C/svg%3E") center/100% 100% no-repeat}
.pv.tf-shoreline .hl-split .hx{grid-template-columns:1fr 1.15fr;gap:64px;padding-top:72px;padding-bottom:110px}
.pv.tf-shoreline .hl-split .hm{aspect-ratio:1/1.05;border-radius:999px 999px 24px 24px}
.pv.tf-shoreline .hl-split p{font-size:19px}
.pv.tf-shoreline .s-stats,.pv.tf-shoreline .s-stats.bg-default{background:var(--bg)}
.pv.tf-shoreline .stt b{font:600 italic 54px/1 var(--hf);color:var(--ink)}
.pv.tf-shoreline .stt span{letter-spacing:.14em;text-transform:uppercase;font-size:12px;color:var(--mute)}
.pv.tf-shoreline .sh{flex-direction:column;align-items:center;text-align:center;gap:6px}
.pv.tf-shoreline .in{text-align:center;margin:0 auto 44px}
.pv.tf-shoreline .ti{border:0;background:transparent}
.pv.tf-shoreline .tim{border-radius:200px 200px 16px 16px;aspect-ratio:4/5}
.pv.tf-shoreline .ti h3{font-style:italic;font-size:28px}
.pv.tf-shoreline .mu-g{max-width:980px;margin:0 auto}
.pv.tf-shoreline .mu-h{font-family:var(--hf);font-style:italic;font-size:26px;letter-spacing:0;text-transform:none;color:var(--ink);text-align:center;border:0}
.pv.tf-shoreline .mu-l strong{font:600 22px var(--hf)}
.pv.tf-shoreline .mu-p{font:600 italic 22px var(--hf);color:var(--acc)}
.pv.tf-shoreline .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-shoreline .fm{border-radius:24px 200px 24px 24px;aspect-ratio:1}
.pv.tf-shoreline .fe h3{font-size:50px;font-style:italic}
.pv.tf-shoreline .bk-b{border-radius:28px;border:0;box-shadow:0 30px 70px -40px rgba(0,0,0,.4)}
.pv.tf-shoreline .bk-ar li{border-radius:999px;background:var(--soft);border-color:transparent;font-weight:400}
.pv.tf-shoreline .gl{grid-template-columns:repeat(3,1fr);gap:18px}
.pv.tf-shoreline .gl figure{margin:0;border-radius:18px;overflow:hidden}
.pv.tf-shoreline .gl figure:nth-child(3n+2){transform:translateY(28px)}
.pv.tf-shoreline .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3.4;object-fit:cover}
.pv.tf-shoreline .gl figcaption{padding:8px 4px;font-size:14px;color:var(--mute)}
.pv.tf-shoreline .s-gallery .w{padding-bottom:28px}
.pv.tf-shoreline .qs blockquote{background:transparent;text-align:center;border-top:1px solid var(--line);border-radius:0}
.pv.tf-shoreline .qs blockquote p{font-size:25px;font-style:italic}
.pv.tf-shoreline .s-cta,.pv.tf-shoreline .s-cta.bg-default{background:var(--soft);color:var(--ink)}
.pv.tf-shoreline .s-cta h2{font-size:64px}
.pv.tf-shoreline .wm-i{border-radius:50%}
.pv.tf-shoreline .wm-n{font:600 italic 30px var(--hf)}

/* ---------- Basecamp: outfitter and adventure ---------- */
.pv.tf-basecamp{font-size:17px}
.pv.tf-basecamp h1{font-size:80px;line-height:.95;letter-spacing:-.03em;text-transform:uppercase}
.pv.tf-basecamp h2{font-size:48px;letter-spacing:-.02em;text-transform:uppercase;line-height:1}
.pv.tf-basecamp h3{font-size:22px;letter-spacing:-.01em}
.pv.tf-basecamp .hd{border-bottom:3px solid var(--ink)}
.pv.tf-basecamp :is(.mn,.dr>summary){font-weight:700}
.pv.tf-basecamp .bt{border-radius:999px;font-weight:800;padding:16px 28px;border:3px solid var(--ink);box-shadow:4px 4px 0 var(--ink)}
.pv.tf-basecamp .bt2{background:var(--bg)}
.pv.tf-basecamp .ey{display:inline-flex;align-items:center;gap:8px;border:2px solid var(--ink);border-radius:999px;padding:6px 14px 6px 8px;color:var(--ink);letter-spacing:.08em;font-weight:800;font-size:12px;background:var(--bg)}
.pv.tf-basecamp .ey:before{content:"";width:18px;height:18px;border-radius:50%;background:var(--acc) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M3 19L10 7l3 5 2-3 6 10z' fill='white'/%3E%3C/svg%3E") center/70% no-repeat}
.pv.tf-basecamp .s-hero,.pv.tf-basecamp .s-cta{background:repeating-radial-gradient(circle at 78% 40%,transparent 0 22px,color-mix(in srgb,var(--ink) 9%,transparent) 22px 23.5px),var(--soft)}
.pv.tf-basecamp .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:56px;padding-top:80px;padding-bottom:88px}
.pv.tf-basecamp .hl-split .hm{aspect-ratio:4/4.4;border-radius:28px;border:3px solid var(--ink);box-shadow:12px 12px 0 var(--ink);transform:rotate(1.5deg)}
.pv.tf-basecamp .hl-split p{font-size:19px}
.pv.tf-basecamp .s-stats,.pv.tf-basecamp .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-basecamp .stt b{font:800 50px/1 var(--hf);color:var(--acc);white-space:nowrap}
.pv.tf-basecamp .stt span{font-weight:700;font-size:14px}
.pv.tf-basecamp .sh h2{display:flex;align-items:center;gap:14px}
.pv.tf-basecamp .ti{border:3px solid var(--ink);border-radius:22px;background:var(--card);overflow:hidden;box-shadow:6px 6px 0 var(--ink)}
.pv.tf-basecamp .tim{border-radius:0;border-bottom:3px solid var(--ink)}
.pv.tf-basecamp .ti .tx{padding:4px 20px 22px}
.pv.tf-basecamp .ti h3{text-transform:uppercase}
.pv.tf-basecamp .mu-g{gap:24px}
.pv.tf-basecamp .mu-g>*{border:3px solid var(--ink);border-radius:22px;padding:22px 24px;background:var(--card);color:var(--ink)}
.pv.tf-basecamp .mu-h{color:var(--ink);font:800 20px var(--hf);letter-spacing:0;border:0}
.pv.tf-basecamp .mu-p{font-weight:800;background:var(--acc);color:var(--oa);border-radius:999px;padding:2px 12px;font-size:16px}
.pv.tf-basecamp .mu-d{border-bottom:2px dashed var(--line)}
.pv.tf-basecamp .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-basecamp .fm{border-radius:28px;border:3px solid var(--ink);box-shadow:-12px 12px 0 var(--acc)}
.pv.tf-basecamp .fe h3{font-size:46px;text-transform:uppercase;letter-spacing:-.02em;line-height:1}
.pv.tf-basecamp .bk-b{border:3px solid var(--ink);border-radius:22px;box-shadow:8px 8px 0 var(--ink)}
.pv.tf-basecamp .bk-ar li{border:2px solid var(--ink);font-weight:700}
.pv.tf-basecamp .gl{gap:14px}
.pv.tf-basecamp .gl figure{margin:0;border:3px solid var(--ink);border-radius:20px;overflow:hidden}
.pv.tf-basecamp .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover}
.pv.tf-basecamp .gl figcaption{padding:8px 12px;font-weight:700;border-top:3px solid var(--ink);background:var(--card);color:var(--ink)}
.pv.tf-basecamp .qs blockquote{border:3px solid var(--ink);border-radius:22px;background:var(--card)}
.pv.tf-basecamp .s-cta h2{font-size:60px}
.pv.tf-basecamp .s-cta,.pv.tf-basecamp .s-cta.bg-default{color:var(--ink)}
.pv.tf-basecamp .wm-i{border-radius:50%;border:2px solid var(--ink)}
.pv.tf-basecamp .wm-n{font:800 24px var(--hf);text-transform:uppercase;letter-spacing:-.02em}

/* run 3: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-timber h1{font-size:70px}.pv.tf-shoreline h1{font-size:62px}.pv.tf-basecamp h1{font-size:58px}
.pv:is(.tf-shoreline,.tf-basecamp) .hl-split .hx{gap:32px}
.pv.tf-shoreline .gl{grid-template-columns:repeat(2,1fr)}
}
@container (max-width:599.98px){
.pv.tf-timber h1{font-size:52px}.pv.tf-shoreline h1{font-size:48px}.pv.tf-basecamp h1{font-size:44px}
.pv:is(.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:34px}
.pv:is(.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .s-cta h2{font-size:38px}
.pv:is(.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:32px}
.pv.tf-timber .hl-overlay .hx{min-height:600px;padding-bottom:64px}
.pv.tf-timber .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-timber .stt>div+div{border:0}
.pv:is(.tf-timber,.tf-basecamp) .stt b{font-size:38px}
.pv.tf-timber .gl{grid-template-columns:1fr 1fr;grid-auto-rows:150px}
.pv.tf-timber .mu-g{padding:24px 18px}
.pv:is(.tf-shoreline,.tf-basecamp) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:40px;padding-bottom:72px}
.pv:is(.tf-timber,.tf-shoreline,.tf-basecamp,.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-shoreline .gl{grid-template-columns:1fr 1fr}
.pv.tf-basecamp .hl-split .hm{transform:none;box-shadow:8px 8px 0 var(--ink)}
}

/* photo credits for sample photos (Render.credits) */
.pv .ft .pc{grid-column:1/-1;font-size:12px;opacity:.7;margin:-8px 0 0}
.pv .ft .pc a{color:inherit;text-decoration:underline}

/* ======================================================================
   Indigenous business series, run 4 (2026-11-14): film, video and media production. Reel, Marquee, Frame.
   The laurel is an original drawing (two branches of leaves), used as a mask so it takes the accent colour.
   ====================================================================== */
.pv:is(.tf-reel,.tf-marquee) .stt>div{position:relative;padding:46px 8px 0;display:grid;justify-items:center;align-content:start;text-align:center}
.pv:is(.tf-reel,.tf-marquee) .stt b{height:44px;display:flex;align-items:center;justify-content:center;max-width:84px;font-size:clamp(24px,3cqw,36px) !important;letter-spacing:-.02em}
.pv:is(.tf-reel,.tf-marquee) .stt span{margin-top:56px;max-width:160px}
.pv:is(.tf-reel,.tf-marquee) .stt>div:before{content:"";position:absolute;top:0;left:50%;width:136px;height:136px;margin-left:-68px;background:var(--acc);-webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' fill='%23000'%3E%3Cellipse cx='40.6' cy='18.3' rx='4.5' ry='10' transform='rotate%280 40.6 18.3%29'/%3E%3Cellipse cx='79.4' cy='18.3' rx='4.5' ry='10' transform='rotate%28-0 79.4 18.3%29'/%3E%3Cellipse cx='29.2' cy='25.8' rx='4.5' ry='10' transform='rotate%28-17 29.2 25.8%29'/%3E%3Cellipse cx='90.8' cy='25.8' rx='4.5' ry='10' transform='rotate%2817 90.8 25.8%29'/%3E%3Cellipse cx='20.6' cy='36.3' rx='4.5' ry='10' transform='rotate%28-34 20.6 36.3%29'/%3E%3Cellipse cx='99.4' cy='36.3' rx='4.5' ry='10' transform='rotate%2834 99.4 36.3%29'/%3E%3Cellipse cx='15.4' cy='48.9' rx='4.5' ry='10' transform='rotate%28-51 15.4 48.9%29'/%3E%3Cellipse cx='104.6' cy='48.9' rx='4.5' ry='10' transform='rotate%2851 104.6 48.9%29'/%3E%3Cellipse cx='14.1' cy='62.4' rx='4.5' ry='10' transform='rotate%28-68 14.1 62.4%29'/%3E%3Cellipse cx='105.9' cy='62.4' rx='4.5' ry='10' transform='rotate%2868 105.9 62.4%29'/%3E%3Cellipse cx='16.8' cy='75.7' rx='4.5' ry='10' transform='rotate%28-85 16.8 75.7%29'/%3E%3Cellipse cx='103.2' cy='75.7' rx='4.5' ry='10' transform='rotate%2885 103.2 75.7%29'/%3E%3Cellipse cx='23.3' cy='87.7' rx='4.5' ry='10' transform='rotate%28-102 23.3 87.7%29'/%3E%3Cellipse cx='96.7' cy='87.7' rx='4.5' ry='10' transform='rotate%28102 96.7 87.7%29'/%3E%3Cellipse cx='33.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28-119 33.0 97.2%29'/%3E%3Cellipse cx='87.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28119 87.0 97.2%29'/%3E%3C/svg%3E") center/contain no-repeat;mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' fill='%23000'%3E%3Cellipse cx='40.6' cy='18.3' rx='4.5' ry='10' transform='rotate%280 40.6 18.3%29'/%3E%3Cellipse cx='79.4' cy='18.3' rx='4.5' ry='10' transform='rotate%28-0 79.4 18.3%29'/%3E%3Cellipse cx='29.2' cy='25.8' rx='4.5' ry='10' transform='rotate%28-17 29.2 25.8%29'/%3E%3Cellipse cx='90.8' cy='25.8' rx='4.5' ry='10' transform='rotate%2817 90.8 25.8%29'/%3E%3Cellipse cx='20.6' cy='36.3' rx='4.5' ry='10' transform='rotate%28-34 20.6 36.3%29'/%3E%3Cellipse cx='99.4' cy='36.3' rx='4.5' ry='10' transform='rotate%2834 99.4 36.3%29'/%3E%3Cellipse cx='15.4' cy='48.9' rx='4.5' ry='10' transform='rotate%28-51 15.4 48.9%29'/%3E%3Cellipse cx='104.6' cy='48.9' rx='4.5' ry='10' transform='rotate%2851 104.6 48.9%29'/%3E%3Cellipse cx='14.1' cy='62.4' rx='4.5' ry='10' transform='rotate%28-68 14.1 62.4%29'/%3E%3Cellipse cx='105.9' cy='62.4' rx='4.5' ry='10' transform='rotate%2868 105.9 62.4%29'/%3E%3Cellipse cx='16.8' cy='75.7' rx='4.5' ry='10' transform='rotate%28-85 16.8 75.7%29'/%3E%3Cellipse cx='103.2' cy='75.7' rx='4.5' ry='10' transform='rotate%2885 103.2 75.7%29'/%3E%3Cellipse cx='23.3' cy='87.7' rx='4.5' ry='10' transform='rotate%28-102 23.3 87.7%29'/%3E%3Cellipse cx='96.7' cy='87.7' rx='4.5' ry='10' transform='rotate%28102 96.7 87.7%29'/%3E%3Cellipse cx='33.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28-119 33.0 97.2%29'/%3E%3Cellipse cx='87.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28119 87.0 97.2%29'/%3E%3C/svg%3E") center/contain no-repeat;opacity:.9;pointer-events:none}
/* ---------- Reel: cinematic, dark ---------- */
.pv.tf-reel{font-size:17px;letter-spacing:.005em}
.pv.tf-reel h1{font-size:104px;line-height:.95;letter-spacing:-.02em}
.pv.tf-reel h2{font-size:54px;line-height:1}
.pv.tf-reel h3{font-size:24px}
.pv.tf-reel .hd{background:#000;border-bottom:1px solid #ffffff1f}
.pv.tf-reel :is(.mn,.dr>summary){text-transform:uppercase;letter-spacing:.18em;font-size:12px;font-weight:600}
.pv.tf-reel .bt{border-radius:0;text-transform:uppercase;letter-spacing:.2em;font-size:12px;font-weight:700;padding:17px 30px}
.pv.tf-reel .bt2{box-shadow:inset 0 0 0 1px currentColor;background:transparent}
.pv.tf-reel .ey{letter-spacing:.38em;font-size:12px;font-weight:600;color:var(--acc)}
.pv.tf-reel .s-hero{background:#000;padding:56px 0}
.pv.tf-reel .hl-overlay .hx{min-height:620px;align-items:center;justify-items:center;text-align:center}
.pv.tf-reel .hl-overlay .ht{max-width:900px;margin:0 auto}
.pv.tf-reel .hl-overlay .ht .row,.pv.tf-reel .hl-overlay .ht>div:last-child{justify-content:center}
.pv.tf-reel .hl-overlay .hm:after{background:radial-gradient(ellipse at center,rgba(0,0,0,.25),rgba(0,0,0,.78) 80%)}
.pv.tf-reel .hl-overlay p{font-size:20px;max-width:640px;margin-left:auto;margin-right:auto;opacity:.9}
.pv.tf-reel .hl-overlay .ey{color:#fff}
.pv.tf-reel .hl-overlay .bt2{color:#fff}
.pv.tf-reel .s-stats,.pv.tf-reel .s-stats.bg-default{background:transparent}
.pv.tf-reel .stt b{font-family:var(--hf);font-weight:400;color:var(--ink)}
.pv.tf-reel .stt span{max-width:150px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;opacity:.8;line-height:1.4}
.pv.tf-reel .sh{flex-direction:column;align-items:center;text-align:center;gap:8px}
.pv.tf-reel .in{text-align:center;margin:0 auto 44px}
.pv.tf-reel .vt{border-radius:0;box-shadow:0 30px 80px -30px #000}
.pv.tf-reel .vi.big .vx h3{font:400 40px/1.05 var(--hf)}
.pv.tf-reel .vx .meta{letter-spacing:.2em;text-transform:uppercase;font-size:11px;color:var(--acc)}
.pv.tf-reel .play{background:transparent;box-shadow:0 0 0 1.5px #fff;backdrop-filter:blur(4px)}
.pv.tf-reel .ti{background:transparent;border:0;border-radius:0}
.pv.tf-reel .tim{border-radius:0;aspect-ratio:2.39/1}
.pv.tf-reel .ti h3{font:400 28px var(--hf)}
.pv.tf-reel .ls{border:0;display:grid;grid-template-columns:1fr;gap:22px;max-width:640px;margin:0 auto;text-align:center}
.pv.tf-reel .lr{flex-direction:column;align-items:center;border:0;padding:0;gap:4px}
.pv.tf-reel .lr strong{font-size:11px;letter-spacing:.32em;text-transform:uppercase;color:var(--acc);font-weight:600}
.pv.tf-reel .lr span{font:400 26px/1.2 var(--hf);color:var(--ink)}
.pv.tf-reel .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-reel .fm{border-radius:0}
.pv.tf-reel .fe h3{font-size:50px;line-height:1.02}
.pv.tf-reel .qs blockquote{background:transparent;text-align:center;border-radius:0;padding:0 12px}
.pv.tf-reel .qs blockquote p{font-size:26px;line-height:1.3}
.pv.tf-reel .qs cite{letter-spacing:.2em;text-transform:uppercase;font-size:11px;font-style:normal;color:var(--acc)}
.pv.tf-reel .gl{grid-template-columns:repeat(3,1fr);gap:4px}
.pv.tf-reel .gl figure{margin:0;position:relative}
.pv.tf-reel .gl figure>:is(img,svg){width:100%;aspect-ratio:16/9;object-fit:cover;filter:saturate(.85) contrast(1.05)}
.pv.tf-reel .gl figcaption{position:absolute;left:14px;bottom:10px;color:#fff;font-size:11px;letter-spacing:.2em;text-transform:uppercase;text-shadow:0 1px 8px #000}
.pv.tf-reel .s-cta,.pv.tf-reel .s-cta.bg-default{background:#000;color:#fff}
.pv.tf-reel .s-cta h2{font-size:64px}
.pv.tf-reel .wm-i{border-radius:0;background:transparent;box-shadow:inset 0 0 0 1.5px currentColor;color:var(--ink)}
.pv.tf-reel .wm-n{font:400 26px var(--hf);letter-spacing:.02em}
.pv.tf-reel .ft{background:#000;color:#f2efe9;--ink:#f2efe9;--mute:#bdb7ad;--line:#ffffff26}

/* ---------- Marquee: festival poster ---------- */
.pv.tf-marquee{font-size:17px}
.pv.tf-marquee :is(h1,h2,.fe h3){letter-spacing:-.035em;line-height:.92}
.pv.tf-marquee h1{font-size:112px}
.pv.tf-marquee h2{font-size:64px}
.pv.tf-marquee h3{font-size:24px;letter-spacing:-.01em}
.pv.tf-marquee .hd{border-bottom:2px solid var(--ink)}
.pv.tf-marquee :is(.mn,.dr>summary){font-weight:700}
.pv.tf-marquee .bt{border-radius:999px;font-weight:700;padding:16px 28px}
.pv.tf-marquee .bt2{box-shadow:inset 0 0 0 2px var(--ink)}
.pv.tf-marquee .ey{display:inline-block;background:var(--ink);color:var(--bg);padding:6px 12px;letter-spacing:.14em;font-weight:700;font-size:12px;transform:rotate(-2deg)}
.pv.tf-marquee .s-hero{background:var(--acc);color:var(--oa);overflow:hidden;position:relative}
.pv.tf-marquee .s-hero:before{content:"FILM FILM FILM FILM FILM FILM FILM FILM";position:absolute;left:-40px;right:-40px;bottom:-34px;font:800 180px/1 var(--hf);letter-spacing:-.04em;white-space:nowrap;color:transparent;-webkit-text-stroke:1.5px color-mix(in srgb,var(--oa) 35%,transparent);pointer-events:none}
.pv.tf-marquee .hl-split .hx{grid-template-columns:1.3fr 1fr;gap:56px;padding-top:80px;padding-bottom:120px;position:relative}
.pv.tf-marquee .hl-split .hm{aspect-ratio:2/3;border:10px solid var(--bg);box-shadow:0 40px 80px -30px rgba(0,0,0,.55);transform:rotate(2.5deg);border-radius:0;max-width:420px;justify-self:center}
.pv.tf-marquee .hl-split p{font-size:20px}
.pv.tf-marquee .s-hero .bt:not(.bt2){background:var(--ink);color:var(--oi)}
.pv.tf-marquee .s-hero .bt2{color:var(--oa);box-shadow:inset 0 0 0 2px var(--oa)}
.pv.tf-marquee .s-hero .ey{background:var(--bg);color:var(--ink)}
.pv.tf-marquee .s-stats,.pv.tf-marquee .s-stats.bg-default{background:var(--bg)}
.pv.tf-marquee .stt b{font-family:var(--hf);font-weight:800;color:var(--ink)}
.pv.tf-marquee .stt span{max-width:150px;font-size:13px;font-weight:600;line-height:1.3}
.pv.tf-marquee .stt>div:before{background:var(--ink);opacity:.85}
.pv.tf-marquee .sh{border-bottom:2px solid var(--ink);padding-bottom:16px}
.pv.tf-marquee .tl{gap:28px}
.pv.tf-marquee .ti{background:transparent;border:0;border-radius:0}
.pv.tf-marquee .tim{border-radius:0;aspect-ratio:2/3;box-shadow:0 24px 50px -28px rgba(0,0,0,.6);transition:transform .35s}
.pv.tf-marquee .ti:hover .tim{transform:rotate(-1.5deg) translateY(-4px)}
.pv.tf-marquee .ti h3{font-size:26px;letter-spacing:-.03em}
.pv.tf-marquee .vt{border-radius:0}
.pv.tf-marquee .vx h3{font-weight:700;letter-spacing:-.02em}
.pv.tf-marquee .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:0 40px}
.pv.tf-marquee .lr{flex-direction:column;align-items:flex-start;border-bottom:2px solid var(--ink);padding:18px 0;gap:4px}
.pv.tf-marquee .lr strong{font:800 24px var(--hf);letter-spacing:-.03em}
.pv.tf-marquee .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-marquee .fm{border-radius:0;box-shadow:16px 16px 0 var(--acc)}
.pv.tf-marquee .fe h3{font-size:60px}
.pv.tf-marquee .qs blockquote{background:var(--ink);color:var(--oi);border-radius:0}
.pv.tf-marquee .qs blockquote p{font-size:24px;font-weight:700;letter-spacing:-.02em}
.pv.tf-marquee .qs cite{color:var(--acc)}
.pv.tf-marquee .gl{gap:12px}
.pv.tf-marquee .gl figure{margin:0}
.pv.tf-marquee .gl figure>:is(img,svg){width:100%;aspect-ratio:16/9;object-fit:cover}
.pv.tf-marquee .s-cta,.pv.tf-marquee .s-cta.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-marquee .s-cta h2{font-size:80px}
.pv.tf-marquee .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-marquee .wm-i{border-radius:0;transform:rotate(-4deg)}
.pv.tf-marquee .wm-n{font:800 26px var(--hf);letter-spacing:-.04em}

/* ---------- Frame: quiet gallery wall ---------- */
.pv.tf-frame{font-size:17px}
.pv.tf-frame :is(h1,h2,h3){font-weight:400}
.pv.tf-frame h1{font-size:92px;line-height:1;letter-spacing:-.03em}
.pv.tf-frame h1 em,.pv.tf-frame h2{font-style:italic}
.pv.tf-frame h2{font-size:52px;letter-spacing:-.02em}
.pv.tf-frame h3{font-size:28px;letter-spacing:-.01em}
.pv.tf-frame .hd{border:0}
.pv.tf-frame :is(.mn,.dr>summary){font-size:14px}
.pv.tf-frame .bt{border-radius:0;background:transparent;color:var(--ink);box-shadow:none;padding:6px 0;border-bottom:1px solid var(--ink);font-weight:500}
.pv.tf-frame .bt:after{content:" ↗"}
.pv.tf-frame .bt2{opacity:.65}
.pv.tf-frame .ey{letter-spacing:.06em;text-transform:none;font-size:14px;color:var(--mute);font-weight:400}
.pv.tf-frame .hl-editorial .ht{border:0;max-width:1000px;padding-bottom:12px}
.pv.tf-frame .hl-editorial .hm{aspect-ratio:2.39/1;border-radius:0}
.pv.tf-frame .hl-editorial p{font-size:20px;max-width:560px;color:var(--mute)}
.pv.tf-frame .s-stats,.pv.tf-frame .s-stats.bg-default{background:transparent}
.pv.tf-frame .stt{border-top:1px solid var(--line);padding-top:24px;text-align:left}
.pv.tf-frame .stt b{font:400 italic 44px/1 var(--hf)}
.pv.tf-frame .stt span{font-size:13px;color:var(--mute)}
.pv.tf-frame .sh{border-top:1px solid var(--ink);padding-top:14px}
.pv.tf-frame .tl{grid-template-columns:1fr !important;gap:64px;counter-reset:fr}
.pv.tf-frame .ti{display:grid;grid-template-columns:1.6fr 1fr;gap:40px;align-items:end;background:transparent;border:0;border-radius:0;counter-increment:fr}
.pv.tf-frame .ti:nth-child(even){grid-template-columns:1fr 1.6fr}
.pv.tf-frame .ti:nth-child(even) .tim{order:2}
.pv.tf-frame .tim{border-radius:0;aspect-ratio:16/9;margin:0}
.pv.tf-frame .ti .tx:before{content:counter(fr,decimal-leading-zero);display:block;font:italic 400 18px var(--hf);color:var(--mute);margin-bottom:10px}
.pv.tf-frame .ti h3{font-size:36px;font-style:italic}
.pv.tf-frame .vt{border-radius:0}
.pv.tf-frame .play{background:var(--bg);box-shadow:none}
.pv.tf-frame .play:after{border-color:transparent transparent transparent var(--ink)}
.pv.tf-frame .vx h3{font:400 italic 22px var(--hf)}
.pv.tf-frame .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:0 48px}
.pv.tf-frame .lr{flex-direction:column;align-items:flex-start;border-top:1px solid var(--line);border-bottom:0;padding:16px 0;gap:2px}
.pv.tf-frame .lr strong{font-size:13px;color:var(--mute);font-weight:400}
.pv.tf-frame .lr span{font:400 22px var(--hf);color:var(--ink)}
.pv.tf-frame .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-frame .fm{border-radius:0;aspect-ratio:4/5}
.pv.tf-frame .fe h3{font-size:48px;font-style:italic}
.pv.tf-frame .qs blockquote{background:transparent;border-top:1px solid var(--ink);border-radius:0;padding:20px 0 0}
.pv.tf-frame .qs blockquote p{font-size:26px;font-style:italic}
.pv.tf-frame .gl{grid-template-columns:repeat(3,1fr);gap:20px 20px}
.pv.tf-frame .gl figure{margin:0}
.pv.tf-frame .gl figure:is(:nth-child(1),:nth-child(4),:nth-child(6)){grid-column:span 2}
.pv.tf-frame .gl figure>:is(img,svg){width:100%;height:340px;object-fit:cover}
.pv.tf-frame .gl figcaption{font:italic 15px var(--hf);color:var(--mute);padding-top:8px}
.pv.tf-frame .s-cta,.pv.tf-frame .s-cta.bg-default{background:transparent;border-top:1px solid var(--ink)}
.pv.tf-frame .s-cta h2{font-size:72px}
.pv.tf-frame .wm-i{display:none}
.pv.tf-frame .wm-n{font:400 italic 28px var(--hf);letter-spacing:-.02em}

/* run 4: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-reel h1{font-size:72px}.pv.tf-marquee h1{font-size:76px}.pv.tf-frame h1{font-size:66px}
.pv.tf-marquee .hl-split .hx{gap:28px}
}
@container (max-width:599.98px){
.pv.tf-reel h1{font-size:52px}.pv.tf-marquee h1{font-size:58px}.pv.tf-frame h1{font-size:48px}
.pv:is(.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:36px}
.pv:is(.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .s-cta h2{font-size:40px}
.pv:is(.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:34px}
.pv.tf-reel .hl-overlay .hx{min-height:520px}
.pv:is(.tf-reel,.tf-marquee) .stt{grid-template-columns:1fr 1fr;row-gap:10px}
.pv:is(.tf-reel,.tf-marquee) .stt{row-gap:28px}
.pv.tf-marquee .hl-split .hx{grid-template-columns:1fr;padding-top:44px;padding-bottom:90px}
.pv.tf-marquee .hl-split .hm{max-width:260px}
.pv.tf-marquee .s-hero:before{font-size:100px;bottom:-18px}
.pv:is(.tf-reel,.tf-marquee,.tf-frame,.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv:is(.tf-marquee,.tf-frame) .ls{grid-template-columns:1fr}
.pv.tf-frame .ti,.pv.tf-frame .ti:nth-child(even){grid-template-columns:1fr;gap:16px}
.pv.tf-frame .ti:nth-child(even) .tim{order:0}
.pv.tf-reel .gl,.pv.tf-frame .gl{grid-template-columns:1fr 1fr}
.pv.tf-frame .gl figure:is(:nth-child(1),:nth-child(4),:nth-child(6)){grid-column:span 2}
.pv.tf-frame .gl figure>:is(img,svg){height:180px}
}

.pv.tf-marquee .vg{grid-template-columns:repeat(4,1fr)}
.pv.tf-marquee .vg>.vi:first-child{grid-column:span 2;grid-row:span 2}
.pv.tf-marquee .vg>.vi:first-child .vx h3{font-size:30px}
@container (max-width:599.98px){.pv.tf-marquee .vg{grid-template-columns:1fr 1fr}.pv.tf-marquee .vg>.vi:first-child{grid-row:auto}}

.pv.tf-marquee .stt b{font-size:24px !important;letter-spacing:-.04em}
.pv.tf-reel .ft :is(.wm,.wm-n,.wm-i){color:#f2efe9 !important}

/* ======================================================================
   Indigenous business series, run 5 (2026-11-14): marinas, boating and waterfront. Harbour, Waterline, Dockside.
   ====================================================================== */
/* ---------- Harbour: classic nautical ---------- */
.pv.tf-harbour{font-size:17px}
.pv.tf-harbour h1{font-size:92px;line-height:.98;letter-spacing:-.02em}
.pv.tf-harbour h2{font-size:50px;line-height:1.04}
.pv.tf-harbour h3{font-size:24px}
.pv.tf-harbour .hd{background:var(--ink);color:var(--oi);border:0;box-shadow:0 4px 0 var(--acc),0 8px 0 var(--bg),0 12px 0 var(--ink)}
.pv.tf-harbour :is(.mn,.dr>summary){letter-spacing:.06em;font-weight:500}
.pv.tf-harbour .bt{border-radius:2px;font-weight:600;letter-spacing:.04em;padding:16px 28px}
.pv.tf-harbour .ey{font-family:ui-monospace,"SFMono-Regular",Menlo,monospace;letter-spacing:.12em;font-size:13px;color:var(--acc);display:flex;align-items:center;gap:12px}
.pv.tf-harbour .ey:before{content:"";width:22px;height:22px;flex:0 0 22px;background:conic-gradient(var(--acc) 0 25%,#fff 0 50%,var(--acc) 0 75%,#fff 0)}
.pv.tf-harbour .s-hero .ey{color:#fff}
.pv.tf-harbour .hl-overlay .hx{min-height:720px;align-items:end;padding-bottom:110px}
.pv.tf-harbour .hl-overlay .ht{max-width:820px}
.pv.tf-harbour .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(6,22,40,.9),rgba(6,22,40,.55) 45%,rgba(6,22,40,.1) 80%),linear-gradient(0deg,rgba(6,22,40,.6),transparent 40%)}
.pv.tf-harbour .hl-overlay p{font-size:20px;max-width:600px}
.pv.tf-harbour .hl-overlay .bt2{color:#fff;box-shadow:inset 0 0 0 1.5px rgba(255,255,255,.75)}
.pv.tf-harbour .s-stats,.pv.tf-harbour .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-harbour .stt>div+div{border-left:1px solid color-mix(in srgb,var(--oi) 22%,transparent)}
.pv.tf-harbour .stt b{font:600 50px/1 var(--hf);color:var(--oi)}
.pv.tf-harbour .stt span{font-size:13px;letter-spacing:.08em;text-transform:uppercase;opacity:.75}
.pv.tf-harbour .sh{border-bottom:2px solid var(--ink);padding-bottom:14px;position:relative}
.pv.tf-harbour .sh:after{content:"";position:absolute;left:0;bottom:-6px;width:96px;height:4px;background:var(--acc)}
.pv.tf-harbour .ti{border:1px solid var(--line);border-radius:2px;background:var(--card);overflow:hidden}
.pv.tf-harbour .tim{border-radius:0}
.pv.tf-harbour .ti .tx{padding:4px 22px 22px}
.pv.tf-harbour .mu-g{background:var(--ink);color:var(--oi);padding:40px 44px;border-radius:2px;outline:2px solid var(--ink);outline-offset:6px;--mute:color-mix(in srgb,var(--oi) 65%,transparent)}
.pv.tf-harbour .mu-h{color:var(--acc);font:600 22px var(--hf);letter-spacing:0;text-transform:none;border-color:color-mix(in srgb,var(--oi) 25%,transparent)}
.pv.tf-harbour .mu-l strong{color:var(--oi)}
.pv.tf-harbour .mu-p{font-family:ui-monospace,Menlo,monospace;font-size:17px;color:var(--oi)}
.pv.tf-harbour .mu-d{border-bottom:1px dashed color-mix(in srgb,var(--oi) 35%,transparent)}
.pv.tf-harbour .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:0 36px}
.pv.tf-harbour .lr{border-bottom:1px solid var(--line);padding:16px 0 16px 34px;position:relative;flex-direction:column;align-items:flex-start;gap:2px}
.pv.tf-harbour .lr:before{content:"";position:absolute;left:0;top:19px;width:18px;height:18px;border-radius:50%;border:4px solid var(--acc);box-sizing:border-box}
.pv.tf-harbour .lr strong{font:600 19px var(--hf)}
.pv.tf-harbour .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-harbour .fm{border-radius:2px;outline:2px solid var(--ink);outline-offset:10px}
.pv.tf-harbour .fe h3{font-size:46px}
.pv.tf-harbour .bk-b{border-radius:2px;border-top:6px solid var(--acc)}
.pv.tf-harbour .bk-ar li{border-radius:2px}
.pv.tf-harbour .gl{grid-template-columns:repeat(3,1fr);gap:8px}
.pv.tf-harbour .gl figure{margin:0}
.pv.tf-harbour .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover}
.pv.tf-harbour .gl figcaption{font-size:13px;color:var(--mute);padding-top:6px}
.pv.tf-harbour .s-cta,.pv.tf-harbour .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-harbour .s-cta h2{font-size:58px}
.pv.tf-harbour .s-cta .bt{background:var(--ink);color:var(--oi)}
.pv.tf-harbour .ft{border-top:4px solid var(--acc)}
.pv.tf-harbour .wm-i{border-radius:50%;background:var(--acc);color:var(--oa)}
.pv.tf-harbour .wm-n{font:600 26px var(--hf)}

/* ---------- Waterline: bright and modern ---------- */
.pv.tf-waterline{font-size:17px}
.pv.tf-waterline h1{font-size:72px;line-height:1.02;letter-spacing:-.035em}
.pv.tf-waterline h2{font-size:46px;letter-spacing:-.03em}
.pv.tf-waterline h3{letter-spacing:-.015em}
.pv.tf-waterline .hd{border:0;background:color-mix(in srgb,var(--bg) 90%,transparent)}
.pv.tf-waterline .bt{border-radius:14px;font-weight:600;padding:16px 26px}
.pv.tf-waterline .bt2{background:var(--card);box-shadow:inset 0 0 0 1px var(--line)}
.pv.tf-waterline .ey{display:inline-flex;gap:8px;align-items:center;background:var(--card);border:1px solid var(--line);border-radius:999px;padding:7px 14px;letter-spacing:0;text-transform:none;font-size:14px;font-weight:500;color:var(--ink)}
.pv.tf-waterline .ey:before{content:"";width:8px;height:8px;border-radius:50%;background:#2fbf71;box-shadow:0 0 0 4px #2fbf7133}
.pv.tf-waterline .s-hero{background:linear-gradient(180deg,var(--bg) 0 60%,var(--soft) 60%);position:relative}
.pv.tf-waterline .s-hero:after{content:"";position:absolute;left:0;right:0;top:60%;height:28px;margin-top:-14px;background:radial-gradient(14px 14px at 14px 0,var(--bg) 13px,transparent 14px) 0 0/28px 28px repeat-x;pointer-events:none}
.pv.tf-waterline .hl-split .hx{grid-template-columns:1fr 1.15fr;gap:56px;padding-top:72px;padding-bottom:96px;position:relative;z-index:1}
.pv.tf-waterline .hl-split .hm{aspect-ratio:5/4;border-radius:32px;box-shadow:0 40px 80px -40px rgba(0,40,70,.5)}
.pv.tf-waterline .hl-split p{font-size:19px}
.pv.tf-waterline .s-stats,.pv.tf-waterline .s-stats.bg-default{background:var(--soft)}
.pv.tf-waterline .stt{gap:14px}
.pv.tf-waterline .stt>div{background:var(--card);border-radius:20px;padding:22px 12px}
.pv.tf-waterline .stt b{font-size:40px;letter-spacing:-.04em;color:var(--acc)}
.pv.tf-waterline .ti{border-radius:24px;background:var(--card);border:1px solid var(--line);overflow:hidden}
.pv.tf-waterline .tim{border-radius:0}
.pv.tf-waterline .ti .tx{padding:4px 22px 22px}
.pv.tf-waterline .mu-g{gap:20px}
.pv.tf-waterline .mu-g>*{background:var(--card);border:1px solid var(--line);border-radius:24px;padding:24px 26px;color:var(--ink)}
.pv.tf-waterline .mu-h{color:var(--ink);font:700 19px var(--hf);letter-spacing:-.01em;text-transform:none}
.pv.tf-waterline .mu-p{color:var(--acc);font-weight:700}
.pv.tf-waterline .ls{border:0;display:flex;flex-wrap:wrap;gap:10px}
.pv.tf-waterline .lr{border:1px solid var(--line);border-radius:999px;padding:10px 18px 10px 14px;background:var(--card);flex-direction:row;align-items:center;gap:8px}
.pv.tf-waterline .lr:before{content:"✓";width:22px;height:22px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:12px;font-weight:700;display:grid;place-items:center;flex:0 0 22px;line-height:22px;text-align:center}
.pv.tf-waterline .lr strong{font-size:15px;font-weight:600}
.pv.tf-waterline .lr span{display:none}
.pv.tf-waterline .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-waterline .fm{border-radius:32px}
.pv.tf-waterline .fe h3{font-size:44px;letter-spacing:-.03em}
.pv.tf-waterline .bk-b{border-radius:28px;border:0;box-shadow:0 30px 70px -36px rgba(0,40,70,.45)}
.pv.tf-waterline .bk-ar li{background:var(--soft);border-color:transparent}
.pv.tf-waterline .gl{gap:12px}
.pv.tf-waterline .gl figure{margin:0;border-radius:20px;overflow:hidden}
.pv.tf-waterline .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover}
.pv.tf-waterline .gl figcaption{display:none}
.pv.tf-waterline .s-cta,.pv.tf-waterline .s-cta.bg-default{background:transparent}
.pv.tf-waterline .s-cta>.w{background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 55%,var(--ink)));color:var(--oa);border-radius:32px;padding:72px 40px;max-width:calc(1200px - 2 * var(--pad))}
.pv.tf-waterline .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-waterline .wm-i{border-radius:12px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 55%,var(--ink)))}
.pv.tf-waterline .wm-n{font:700 22px var(--hf);letter-spacing:-.03em}

/* ---------- Dockside: summer on the dock ---------- */
.pv.tf-dockside{font-size:17px}
.pv.tf-dockside h1{font-size:84px;line-height:.95;letter-spacing:-.035em}
.pv.tf-dockside h2{font-size:52px;letter-spacing:-.03em;line-height:1}
.pv.tf-dockside .hd{border-bottom:1px solid var(--line)}
.pv.tf-dockside .bt{border-radius:999px;font-weight:700;padding:16px 28px}
.pv.tf-dockside .ey{color:var(--acc);font-weight:800;letter-spacing:.12em}
.pv.tf-dockside .s-hero{background:var(--soft)}
.pv.tf-dockside .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:56px;padding-top:72px;padding-bottom:88px}
.pv.tf-dockside .hl-split .hm{aspect-ratio:4/4.6;border-radius:6px;border:12px solid #fff;border-bottom-width:56px;box-shadow:0 30px 60px -30px rgba(0,0,0,.45);transform:rotate(2deg)}
.pv.tf-dockside .hl-split p{font-size:19px}
.pv.tf-dockside .s-stats,.pv.tf-dockside .s-stats.bg-default{background:repeating-linear-gradient(0deg,color-mix(in srgb,var(--acc) 92%,#000) 0 2px,var(--acc) 2px 46px);color:var(--oa)}
.pv.tf-dockside .stt b{font:800 52px/1 var(--hf);letter-spacing:-.04em;color:var(--oa)}
.pv.tf-dockside .stt span{font-weight:700}
.pv.tf-dockside .tl{gap:28px}
.pv.tf-dockside .ti{background:var(--card);border-radius:18px 18px 18px 18px;padding:10px;border:1px solid var(--line);position:relative;box-shadow:0 18px 30px -24px rgba(0,0,0,.4)}
.pv.tf-dockside .ti:before{content:"";position:absolute;top:22px;left:50%;width:16px;height:16px;margin-left:-8px;border-radius:50%;background:var(--bg);box-shadow:inset 0 0 0 3px var(--line);z-index:2}
.pv.tf-dockside .tim{border-radius:12px}
.pv.tf-dockside .ti .tx{padding:6px 12px 14px}
.pv.tf-dockside .ti:nth-child(odd){transform:rotate(-1deg)}.pv.tf-dockside .ti:nth-child(even){transform:rotate(1deg)}
.pv.tf-dockside .mu-g{gap:28px}
.pv.tf-dockside .mu-g>*{background:var(--card);border-radius:18px;padding:22px 24px;color:var(--ink);border:1px solid var(--line)}
.pv.tf-dockside .mu-h{font:800 22px var(--hf);letter-spacing:-.02em;text-transform:none;color:var(--ink)}
.pv.tf-dockside .mu-p{font-weight:800;color:var(--acc)}
.pv.tf-dockside .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:12px}
.pv.tf-dockside .lr{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px 20px;flex-direction:column;align-items:flex-start;gap:2px}
.pv.tf-dockside .lr strong{font:800 18px var(--hf)}
.pv.tf-dockside .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-dockside .fm{border-radius:6px;border:12px solid #fff;border-bottom-width:48px;box-shadow:0 30px 60px -30px rgba(0,0,0,.45);transform:rotate(-1.5deg)}
.pv.tf-dockside .fe h3{font-size:50px;letter-spacing:-.03em}
.pv.tf-dockside .bk-b{border-radius:22px}
.pv.tf-dockside .gl{grid-template-columns:repeat(3,1fr);gap:22px}
.pv.tf-dockside .gl figure{margin:0;background:#fff;padding:10px 10px 0;box-shadow:0 18px 30px -22px rgba(0,0,0,.45)}
.pv.tf-dockside .gl figure:nth-child(odd){transform:rotate(-1.5deg)}.pv.tf-dockside .gl figure:nth-child(even){transform:rotate(1.5deg)}
.pv.tf-dockside .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover}
.pv.tf-dockside .gl figcaption{padding:10px 2px 12px;font:700 15px var(--hf);color:#333}
.pv.tf-dockside .qs blockquote{border-radius:18px}
.pv.tf-dockside .s-cta,.pv.tf-dockside .s-cta.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-dockside .s-cta h2{font-size:64px}
.pv.tf-dockside .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-dockside .wm-i{border-radius:50% 50% 50% 4px}
.pv.tf-dockside .wm-n{font:800 24px var(--hf);letter-spacing:-.03em}

/* run 5: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-harbour h1{font-size:66px}.pv.tf-waterline h1{font-size:54px}.pv.tf-dockside h1{font-size:62px}
.pv.tf-harbour .ls{grid-template-columns:1fr 1fr}
.pv:is(.tf-waterline,.tf-dockside) .hl-split .hx{gap:32px}
}
@container (max-width:599.98px){
.pv.tf-harbour h1{font-size:48px}.pv.tf-waterline h1{font-size:42px}.pv.tf-dockside h1{font-size:48px}
.pv:is(.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:34px}
.pv:is(.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .s-cta h2{font-size:38px}
.pv:is(.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:32px}
.pv.tf-harbour .hl-overlay .hx{min-height:560px;padding-bottom:72px}
.pv.tf-harbour .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-harbour .stt>div+div{border:0}
.pv.tf-harbour .stt b,.pv.tf-dockside .stt b{font-size:38px}
.pv.tf-harbour .mu-g{padding:26px 20px}
.pv:is(.tf-harbour,.tf-dockside) .ls{grid-template-columns:1fr}
.pv:is(.tf-waterline,.tf-dockside) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:40px;padding-bottom:64px}
.pv:is(.tf-harbour,.tf-waterline,.tf-dockside,.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-waterline .s-hero{background:var(--bg)}.pv.tf-waterline .s-hero:after{display:none}
.pv.tf-waterline .stt{grid-template-columns:1fr 1fr}
.pv.tf-waterline .s-cta>.w{padding:48px 24px;border-radius:24px}
.pv.tf-dockside .hl-split .hm{transform:none;border-width:8px 8px 36px}
.pv:is(.tf-harbour,.tf-dockside) .gl{grid-template-columns:1fr 1fr}
}

/* ======================================================================
   Indigenous business series, run 6 (2026-11-15): custom apparel, embroidery and printing. Press, Stitch, Merch.
   ====================================================================== */
/* ---------- Press: screen-print poster ---------- */
.pv.tf-press{font-size:17px}
.pv.tf-press :is(h1,h2,h3){text-transform:uppercase;letter-spacing:.005em;line-height:.9}
.pv.tf-press h1{font-size:128px;text-shadow:5px 4px 0 color-mix(in srgb,#00b8d9 70%,transparent),-4px -3px 0 color-mix(in srgb,#ff2e88 60%,transparent)}
.pv.tf-press h2{font-size:72px;text-shadow:3px 2px 0 color-mix(in srgb,#00b8d9 55%,transparent)}
.pv.tf-press h3{font-size:30px}
.pv.tf-press .hd{border-bottom:3px solid var(--ink)}
.pv.tf-press :is(.mn,.dr>summary){text-transform:uppercase;font-weight:800;letter-spacing:.06em;font-size:14px}
.pv.tf-press .bt{border-radius:0;text-transform:uppercase;font-weight:800;letter-spacing:.08em;padding:16px 26px;border:3px solid var(--ink);box-shadow:5px 5px 0 #00b8d9}
.pv.tf-press .bt2{background:var(--bg);box-shadow:5px 5px 0 #ff2e88}
.pv.tf-press .ey{display:inline-flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.16em;color:var(--ink)}
.pv.tf-press .ey:before{content:"";width:22px;height:22px;border-radius:50%;border:2px solid var(--ink);background:linear-gradient(var(--ink),var(--ink)) center/100% 2px no-repeat,linear-gradient(var(--ink),var(--ink)) center/2px 100% no-repeat}
.pv.tf-press .s-hero{background:radial-gradient(circle,color-mix(in srgb,var(--acc) 30%,transparent) 2.2px,transparent 2.6px) 0 0/14px 14px,var(--bg);border-bottom:3px solid var(--ink)}
.pv.tf-press .hl-split .hx{grid-template-columns:1.2fr 1fr;gap:48px;padding-top:72px;padding-bottom:84px}
.pv.tf-press .hl-split .hm{aspect-ratio:4/4.4;border-radius:0;border:3px solid var(--ink);box-shadow:14px 14px 0 var(--acc);filter:contrast(1.08) saturate(1.15)}
.pv.tf-press .hl-split p{font-size:20px}
.pv.tf-press .s-stats,.pv.tf-press .s-stats.bg-default{background:var(--ink);color:var(--oi)}
.pv.tf-press .stt b{font:900 72px/1 var(--hf);color:var(--oi);text-shadow:3px 2px 0 #ff2e88}
.pv.tf-press .stt span{text-transform:uppercase;font-weight:800;letter-spacing:.1em;font-size:13px}
.pv.tf-press .sh{border-bottom:3px solid var(--ink);padding-bottom:12px}
.pv.tf-press .ti{border:3px solid var(--ink);border-radius:0;background:var(--card);box-shadow:8px 8px 0 var(--ink)}
.pv.tf-press .tim{border-radius:0;border-bottom:3px solid var(--ink)}
.pv.tf-press .ti .tx{padding:4px 20px 20px}
.pv.tf-press .tl-steps .ti:before{border-radius:0;background:var(--acc);color:var(--oa);font:900 34px/56px var(--hf);width:56px;height:56px}
.pv.tf-press .tl-steps .ti:after{display:none}
.pv.tf-press .pr-im{border-radius:0;border:3px solid var(--ink)}
.pv.tf-press .pr-t h3{font-size:26px}
.pv.tf-press .pr-p{font:900 26px var(--hf);color:var(--acc)}
.pv.tf-press .pr-bd{border-radius:0;background:var(--acc);color:var(--oa)}
.pv.tf-press .ls{border:0;display:flex;flex-wrap:wrap;gap:12px}
.pv.tf-press .lr{border:3px solid var(--ink);padding:12px 20px;background:var(--card)}
.pv.tf-press .lr strong{font:900 24px var(--hf);text-transform:uppercase}
.pv.tf-press .lr span{display:none}
.pv.tf-press .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-press .fm{border-radius:0;border:3px solid var(--ink);box-shadow:-12px 12px 0 #00b8d9}
.pv.tf-press .fe h3{font-size:68px}
.pv.tf-press .qs blockquote{border:3px solid var(--ink);border-radius:0;background:var(--card)}
.pv.tf-press .s-cta,.pv.tf-press .s-cta.bg-default{background:radial-gradient(circle,color-mix(in srgb,var(--oa) 25%,transparent) 2.2px,transparent 2.6px) 0 0/14px 14px,var(--acc);color:var(--oa)}
.pv.tf-press .s-cta h2{font-size:96px;text-shadow:4px 3px 0 var(--ink)}
.pv.tf-press .s-cta .bt{background:var(--ink);color:var(--oi);border-color:var(--ink)}
.pv.tf-press .wm-i{border-radius:0;border:2px solid var(--ink);box-shadow:3px 3px 0 #ff2e88}
.pv.tf-press .wm-n{font:900 30px var(--hf);text-transform:uppercase}

/* ---------- Stitch: embroidery and workwear ---------- */
.pv.tf-stitch{font-size:17px}
.pv.tf-stitch h1{font-size:76px;line-height:1;letter-spacing:-.03em}
.pv.tf-stitch h2{font-size:46px;letter-spacing:-.02em}
.pv.tf-stitch .hd{border-bottom:2px dashed var(--line)}
.pv.tf-stitch .bt{border-radius:12px;font-weight:700;padding:15px 26px;outline:2px dashed color-mix(in srgb,var(--oa) 60%,transparent);outline-offset:-6px}
.pv.tf-stitch .bt2{outline-color:var(--line)}
.pv.tf-stitch .ey{display:inline-block;background:var(--acc);color:var(--oa);padding:8px 16px;border-radius:999px;outline:2px dashed color-mix(in srgb,var(--oa) 70%,transparent);outline-offset:-5px;letter-spacing:.1em;font-weight:800;font-size:12px}
.pv.tf-stitch .s-hero{background:var(--ink);color:var(--oi)}
.pv.tf-stitch .s-hero .bt2{color:var(--oi);background:transparent;box-shadow:inset 0 0 0 2px color-mix(in srgb,var(--oi) 40%,transparent);outline:0}
.pv.tf-stitch .hl-split .hx{grid-template-columns:1fr 1.05fr;gap:56px;padding-top:80px;padding-bottom:88px}
.pv.tf-stitch .hl-split .hm{aspect-ratio:1;border-radius:50%;outline:3px dashed var(--acc);outline-offset:12px}
.pv.tf-stitch .hl-split p{font-size:19px;opacity:.9}
.pv.tf-stitch .s-stats,.pv.tf-stitch .s-stats.bg-default{background:var(--soft)}
.pv.tf-stitch .stt>div{background:var(--card);border-radius:22px;padding:22px 10px;outline:2px dashed var(--line);outline-offset:-8px}
.pv.tf-stitch .stt b{font:800 42px/1 var(--hf);color:var(--acc);letter-spacing:-.03em}
.pv.tf-stitch .stt{gap:16px}
.pv.tf-stitch .ti{border-radius:20px;background:var(--card);border:1px solid var(--line);overflow:hidden;outline:2px dashed var(--line);outline-offset:-8px}
.pv.tf-stitch .tim{border-radius:0}
.pv.tf-stitch .ti .tx{padding:4px 22px 24px}
.pv.tf-stitch .tl-steps .ti:before{border-radius:50%;background:var(--acc);outline:2px dashed color-mix(in srgb,var(--oa) 70%,transparent);outline-offset:-5px}
.pv.tf-stitch .tl-steps .ti:after{border-top-style:dashed}
.pv.tf-stitch .pr-im{border-radius:20px;outline:2px dashed color-mix(in srgb,var(--ink) 25%,transparent);outline-offset:-8px}
.pv.tf-stitch .pr-p{font-weight:800;color:var(--acc)}
.pv.tf-stitch .pr-bd{background:var(--acc);color:var(--oa)}
.pv.tf-stitch .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.pv.tf-stitch .lr{flex-direction:column;align-items:center;text-align:center;border:0;background:var(--card);border-radius:999px;padding:16px 18px;outline:2px dashed var(--acc);outline-offset:-6px}
.pv.tf-stitch .lr strong{font:800 17px var(--hf)}
.pv.tf-stitch .lr span{font-size:13px;color:var(--mute)}
.pv.tf-stitch .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-stitch .fm{border-radius:28px;outline:3px dashed var(--acc);outline-offset:10px}
.pv.tf-stitch .fe h3{font-size:44px;letter-spacing:-.02em}
.pv.tf-stitch .gl{gap:14px}
.pv.tf-stitch .gl figure{margin:0;border-radius:18px;overflow:hidden;outline:2px dashed color-mix(in srgb,#fff 70%,transparent);outline-offset:-8px}
.pv.tf-stitch .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover}
.pv.tf-stitch .gl figcaption{display:none}
.pv.tf-stitch .qs blockquote{border-radius:20px;outline:2px dashed var(--line);outline-offset:-8px}
.pv.tf-stitch .s-cta,.pv.tf-stitch .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-stitch .s-cta .w{outline:3px dashed color-mix(in srgb,var(--oa) 55%,transparent);outline-offset:-4px;border-radius:28px;padding-top:56px;padding-bottom:56px}
.pv.tf-stitch .s-cta .bt{background:var(--ink);color:var(--oi)}
.pv.tf-stitch .wm-i{border-radius:50%;outline:2px dashed color-mix(in srgb,var(--oa) 70%,transparent);outline-offset:-4px}
.pv.tf-stitch .wm-n{font:800 24px var(--hf);letter-spacing:-.02em}

/* ---------- Merch: clean storefront ---------- */
.pv.tf-merch{font-size:16px}
.pv.tf-merch h1{font-size:76px;line-height:1;letter-spacing:-.045em}
.pv.tf-merch h2{font-size:42px;letter-spacing:-.035em}
.pv.tf-merch h3{letter-spacing:-.02em}
.pv.tf-merch .hd{border-bottom:1px solid var(--line)}
.pv.tf-merch .bt{border-radius:10px;font-weight:600;padding:15px 24px}
.pv.tf-merch .bt2{box-shadow:inset 0 0 0 1px var(--line);background:var(--card)}
.pv.tf-merch .ey{color:var(--acc);letter-spacing:0;text-transform:none;font-weight:600;font-size:15px}
.pv.tf-merch .s-hero{background:var(--bg)}
.pv.tf-merch .hl-split .hx{grid-template-columns:1fr 1.25fr;gap:48px;padding-top:56px;padding-bottom:64px}
.pv.tf-merch .hl-split .hm{aspect-ratio:5/4;border-radius:20px}
.pv.tf-merch .hl-split .ht{align-self:center}
.pv.tf-merch .hl-split p{font-size:18px;color:var(--mute)}
.pv.tf-merch .s-stats,.pv.tf-merch .s-stats.bg-default{background:var(--soft)}
.pv.tf-merch .stt{text-align:left}
.pv.tf-merch .stt>div{display:flex;flex-direction:column;gap:2px;padding-left:16px;border-left:3px solid var(--acc)}
.pv.tf-merch .stt b{font:700 34px/1.1 var(--hf);letter-spacing:-.04em}
.pv.tf-merch .stt span{font-size:14px;color:var(--mute)}
.pv.tf-merch .pr-g{gap:22px}
.pv.tf-merch .pr-i{background:var(--card);border:1px solid var(--line);border-radius:18px;padding:10px 10px 16px;transition:transform .2s,box-shadow .2s}
.pv.tf-merch .pr-i:hover{transform:translateY(-3px);box-shadow:0 18px 40px -26px rgba(0,0,0,.4)}
.pv.tf-merch .pr-im{border-radius:12px;background:var(--soft)}
.pv.tf-merch .pr-x{padding:0 6px}
.pv.tf-merch .pr-p{font-weight:700}
.pv.tf-merch .pr-btn{display:inline-block;margin-top:2px}
.pv.tf-merch .ti{border-radius:18px;border:1px solid var(--line);background:var(--card);overflow:hidden}
.pv.tf-merch .tim{border-radius:0}
.pv.tf-merch .ti .tx{padding:4px 20px 20px}
.pv.tf-merch .tl-steps{gap:0;background:var(--ink);color:var(--oi);border-radius:22px;padding:8px}
.pv.tf-merch .tl-steps .ti{background:transparent;border:0;color:var(--oi);padding:76px 24px 24px}
.pv.tf-merch .tl-steps .ti+.ti{border-left:1px solid color-mix(in srgb,var(--oi) 18%,transparent)}
.pv.tf-merch .tl-steps .ti p{color:color-mix(in srgb,var(--oi) 75%,transparent)}
.pv.tf-merch .tl-steps .ti:before{background:var(--acc);color:var(--oa);border-radius:12px}
.pv.tf-merch .tl-steps .ti:after{display:none}
.pv.tf-merch .ls{border:0;display:flex;flex-wrap:wrap;gap:10px}
.pv.tf-merch .lr{border:1px solid var(--line);border-radius:999px;padding:10px 18px;background:var(--card)}
.pv.tf-merch .lr strong{font-weight:600;font-size:15px}
.pv.tf-merch .lr span{display:none}
.pv.tf-merch .fe-split{grid-template-columns:1fr 1fr;gap:56px}
.pv.tf-merch .fm{border-radius:20px}
.pv.tf-merch .fe h3{font-size:40px;letter-spacing:-.035em}
.pv.tf-merch .gl{gap:12px}
.pv.tf-merch .gl figure{margin:0;border-radius:16px;overflow:hidden}
.pv.tf-merch .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover}
.pv.tf-merch .gl figcaption{display:none}
.pv.tf-merch .qs blockquote{border-radius:18px;background:var(--card);border:1px solid var(--line)}
.pv.tf-merch .s-cta,.pv.tf-merch .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-merch .s-cta .bt{background:var(--bg);color:var(--ink)}
.pv.tf-merch .wm-i{border-radius:10px}
.pv.tf-merch .wm-n{font:700 22px var(--hf);letter-spacing:-.04em}

/* run 6: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-press h1{font-size:88px}.pv.tf-stitch h1{font-size:56px}.pv.tf-merch h1{font-size:54px}
.pv:is(.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .hl-split .hx{gap:28px}
.pv.tf-stitch .ls{grid-template-columns:1fr 1fr}
.pv.tf-merch .tl-steps .ti+.ti{border-left:0}
}
@container (max-width:599.98px){
.pv.tf-press h1{font-size:64px}.pv.tf-stitch h1{font-size:42px}.pv.tf-merch h1{font-size:42px}
.pv:is(.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:36px}.pv.tf-press h2{font-size:46px}
.pv.tf-press .s-cta h2{font-size:52px}.pv.tf-press .fe h3{font-size:44px}
.pv:is(.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:32px}
.pv:is(.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .hl-split .hx{grid-template-columns:1fr;gap:36px;padding-top:40px;padding-bottom:64px}
.pv.tf-press .stt b{font-size:48px}
.pv.tf-stitch .stt{grid-template-columns:1fr 1fr}
.pv.tf-stitch .ls{grid-template-columns:1fr}
.pv.tf-stitch .hl-split .hm{max-width:300px;justify-self:center}
.pv:is(.tf-press,.tf-stitch,.tf-merch,.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-merch .tl-steps .ti+.ti{border-left:0;border-top:1px solid color-mix(in srgb,var(--oi) 18%,transparent)}
.pv.tf-merch .stt{grid-template-columns:1fr 1fr;row-gap:18px}
}

/* ======================================================================
   Indigenous business series, run 7 (2026-11-15): sports bars, pubs, roadside motels and riverside restaurants. Taproom, Roadside, Patio.
   ====================================================================== */
/* ---------- Taproom: sports bar scoreboard (dark) ---------- */
.pv.tf-taproom{font-size:17px}
.pv.tf-taproom :is(h1,h2,h3){text-transform:uppercase;letter-spacing:.01em;line-height:.92}
.pv.tf-taproom h1{font-size:136px}
.pv.tf-taproom h2{font-size:72px}
.pv.tf-taproom h3{font-size:30px}
.pv.tf-taproom .hd{border-bottom:0;box-shadow:0 4px 0 var(--acc)}
.pv.tf-taproom :is(.mn,.dr>summary){text-transform:uppercase;font-weight:700;letter-spacing:.08em;font-size:14px}
.pv.tf-taproom .bt{border-radius:4px;text-transform:uppercase;font-weight:800;letter-spacing:.1em;padding:16px 28px;font-size:15px}
.pv.tf-taproom .ey{display:inline-flex;align-items:center;gap:10px;font-weight:800;letter-spacing:.18em;font-size:13px}
.pv.tf-taproom .ey:before{content:"";width:10px;height:10px;border-radius:50%;background:#ff3b30;box-shadow:0 0 0 4px color-mix(in srgb,#ff3b30 30%,transparent)}
.pv.tf-taproom .hl-overlay .hx{min-height:740px;padding-bottom:96px;align-items:flex-end}
.pv.tf-taproom .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(6,8,12,.94) 4%,rgba(6,8,12,.45) 55%,rgba(6,8,12,.2)),repeating-linear-gradient(0deg,rgba(0,0,0,.18) 0 2px,transparent 2px 4px)}
.pv.tf-taproom .hl-overlay h1{text-shadow:0 4px 30px rgba(0,0,0,.5)}
.pv.tf-taproom .hl-overlay p{font-size:21px;max-width:620px}
.pv.tf-taproom .hl-overlay .bt2{color:#fff;background:transparent;box-shadow:inset 0 0 0 2px rgba(255,255,255,.8)}
.pv.tf-taproom .s-stats,.pv.tf-taproom .s-stats.bg-default{background:color-mix(in srgb,var(--bg) 70%,#000);border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-taproom .stt{gap:14px}
.pv.tf-taproom .stt>div{position:relative;background:#06080b;border:2px solid color-mix(in srgb,var(--ink) 18%,transparent);border-radius:6px;padding:22px 12px 18px;box-shadow:inset 0 0 30px rgba(0,0,0,.8)}
.pv.tf-taproom .stt>div:before,.pv.tf-taproom .stt>div:after{content:"";position:absolute;top:8px;width:6px;height:6px;border-radius:50%;background:color-mix(in srgb,var(--ink) 35%,transparent)}
.pv.tf-taproom .stt>div:before{left:8px}.pv.tf-taproom .stt>div:after{right:8px}
.pv.tf-taproom .stt b{font:600 76px/1 var(--hf);color:var(--acc);letter-spacing:.02em;text-shadow:0 0 18px color-mix(in srgb,var(--acc) 65%,transparent)}
.pv.tf-taproom .stt span{display:block;margin-top:6px;text-transform:uppercase;letter-spacing:.14em;font-size:12px;font-weight:700;opacity:.8}
.pv.tf-taproom .sh h2{display:flex;align-items:center;gap:18px;flex:1}
.pv.tf-taproom .sh h2:after{content:"";flex:1;height:4px;background:repeating-linear-gradient(90deg,var(--acc) 0 22px,transparent 22px 30px)}
.pv.tf-taproom .mu-g{position:relative;background:radial-gradient(ellipse at 30% 20%,rgba(255,255,255,.06),transparent 60%),#1b221f;border-radius:6px;padding:44px 48px;box-shadow:0 0 0 12px #5a3d22,0 0 0 14px #2a1c10,0 30px 60px -20px rgba(0,0,0,.8);margin:14px;color:#f1efe6;--mute:rgba(241,239,230,.62)}
.pv.tf-taproom .mu-h{font:600 32px/1 var(--hf);color:var(--acc);letter-spacing:.04em;border-bottom:2px dashed rgba(241,239,230,.25)}
.pv.tf-taproom .mu-l strong{font-size:19px;color:#f1efe6}
.pv.tf-taproom .mu-p{font:600 28px/1 var(--hf);color:#f1efe6}
.pv.tf-taproom .mu-d{border-bottom:2px dotted rgba(241,239,230,.3)}
.pv.tf-taproom .mu-im{border-radius:50%;box-shadow:0 0 0 3px rgba(241,239,230,.2)}
.pv.tf-taproom .ti{position:relative;background:var(--card);border:1px solid var(--line);border-radius:6px;overflow:hidden}
.pv.tf-taproom .tim{border-radius:0;margin:0 0 14px}
.pv.tf-taproom .ti .tx{padding:4px 22px 22px}
.pv.tf-taproom .ti h3{font-size:32px}
.pv.tf-taproom .ti .meta{display:inline-block;align-self:flex-start;background:var(--acc);color:var(--oa);font-weight:800;letter-spacing:.1em;padding:4px 10px;border-radius:3px}
.pv.tf-taproom .tl-steps .ti:before{border-radius:4px;background:var(--acc);color:var(--oa);font:600 34px/56px var(--hf)}
.pv.tf-taproom .ls{border:0;display:grid;gap:10px}
.pv.tf-taproom .lr{background:var(--card);border:1px solid var(--line);border-left:6px solid var(--acc);border-radius:4px;padding:18px 22px;gap:24px}
.pv.tf-taproom .lr strong{font:600 30px/1 var(--hf);text-transform:uppercase;letter-spacing:.02em;flex:0 0 240px;min-width:0}
.pv.tf-taproom .lr span{font-size:16px}
.pv.tf-taproom .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-taproom .fm{border-radius:6px;box-shadow:16px 16px 0 var(--acc)}
.pv.tf-taproom .fe h3{font-size:68px}
.pv.tf-taproom .bk-b{background:var(--card);border:1px solid var(--line);border-radius:6px;position:relative;border-top:8px solid var(--acc)}
.pv.tf-taproom .bk-b:before,.pv.tf-taproom .bk-b:after{content:"";position:absolute;top:50%;width:28px;height:28px;border-radius:50%;background:var(--bg);transform:translateY(-50%)}
.pv.tf-taproom .bk-b:before{left:-15px}.pv.tf-taproom .bk-b:after{right:-15px}
.pv.tf-taproom .bk-b h3{font-size:34px}
.pv.tf-taproom .bk-i b{font:600 28px var(--hf);color:var(--acc)}
.pv.tf-taproom .bk-ar li{border-radius:4px;text-transform:uppercase;letter-spacing:.06em;font-size:12px}
.pv.tf-taproom .gl{grid-template-columns:repeat(3,1fr);gap:6px}
.pv.tf-taproom .gl figure{margin:0;border-radius:4px;overflow:hidden}
.pv.tf-taproom .gl figure:first-child{grid-column:span 2;grid-row:span 2}
.pv.tf-taproom .gl figure>:is(img,svg){width:100%;height:100%;aspect-ratio:1;object-fit:cover;filter:contrast(1.06) saturate(1.1)}
.pv.tf-taproom .gl figcaption{display:none}
.pv.tf-taproom .qs blockquote{background:var(--card);border:1px solid var(--line);border-radius:6px;position:relative}
.pv.tf-taproom .qs blockquote p{font-family:var(--bf);font-size:18px;font-weight:500}
.pv.tf-taproom .qs blockquote:before{content:"★★★★★";display:block;color:var(--acc);letter-spacing:.2em;font-size:15px;margin-bottom:10px}
.pv.tf-taproom .s-cta,.pv.tf-taproom .s-cta.bg-default{background:repeating-linear-gradient(-45deg,transparent 0 26px,rgba(0,0,0,.12) 26px 52px),var(--acc);color:var(--oa);border-top:10px solid #06080b;box-shadow:inset 0 10px 0 var(--oa)}
.pv.tf-taproom .s-cta h2{font-size:104px}
.pv.tf-taproom .s-cta .bt{background:#06080b;color:#fff}
.pv.tf-taproom .ft{border-top:4px solid var(--acc)}
.pv.tf-taproom .wm-i{border-radius:4px;background:var(--acc);color:var(--oa);font-family:var(--hf);font-weight:600}
.pv.tf-taproom .wm-n{font:600 34px/1 var(--hf);text-transform:uppercase;letter-spacing:.02em}

/* ---------- Roadside: retro motel and diner ---------- */
.pv.tf-roadside{font-size:17px}
.pv.tf-roadside :is(h1,h2,h3){font-weight:400;letter-spacing:-.005em}
.pv.tf-roadside h1{font-size:96px;line-height:.98}
.pv.tf-roadside h2{font-size:54px;line-height:1.02}
.pv.tf-roadside h3{font-size:24px}
.pv.tf-roadside .hd{border-bottom:0;box-shadow:none}
.pv.tf-roadside .hd:after{content:"";position:absolute;left:0;right:0;top:100%;height:12px;background:linear-gradient(var(--acc) 0 4px,var(--bg) 4px 8px,var(--ink) 8px 12px)}
.pv.tf-roadside :is(.mn,.dr>summary){font-weight:800;letter-spacing:.02em}
.pv.tf-roadside .bt{border-radius:999px;font-weight:800;padding:16px 30px;box-shadow:0 5px 0 color-mix(in srgb,var(--acc) 55%,#000)}
.pv.tf-roadside .bt2{box-shadow:inset 0 0 0 3px var(--ink),0 5px 0 var(--ink);background:var(--card)}
.pv.tf-roadside .ey,.pv.tf-roadside .s-hero .ey{font:400 40px/1 'Yellowtail',cursive;letter-spacing:0;text-transform:none;color:var(--acc);text-shadow:0 0 1px var(--acc),0 0 14px color-mix(in srgb,var(--acc) 45%,transparent);margin-bottom:.25em}
.pv.tf-roadside .s-hero{background:repeating-conic-gradient(from 0deg at 85% 110%,color-mix(in srgb,var(--acc) 12%,var(--bg)) 0 6deg,var(--bg) 6deg 12deg);border-bottom:12px solid var(--ink);padding-top:12px}
.pv.tf-roadside .hl-split .hx{grid-template-columns:1.1fr 1fr;gap:56px;padding-top:80px;padding-bottom:96px}
.pv.tf-roadside .hl-split .hm{aspect-ratio:4/4.5;border-radius:36px;border:10px solid var(--ink);box-shadow:16px 16px 0 var(--acc);transform:rotate(1.5deg)}
.pv.tf-roadside .hl-split p{font-size:20px}
.pv.tf-roadside .s-stats,.pv.tf-roadside .s-stats.bg-default{background:var(--soft)}
.pv.tf-roadside .stt{gap:22px}
.pv.tf-roadside .stt>div{background:var(--ink);color:var(--oi);padding:36px 14px 34px;border-radius:12px 12px 50% 50% / 12px 12px 26% 26%;border-top:16px solid var(--acc);box-shadow:inset 0 0 0 4px var(--ink),inset 0 0 0 7px color-mix(in srgb,var(--oi) 85%,transparent)}
.pv.tf-roadside .stt b{font:400 54px/1 var(--hf);color:var(--oi)}
.pv.tf-roadside .stt span{display:block;margin-top:6px;font-weight:800;letter-spacing:.08em;text-transform:uppercase;font-size:12px;opacity:.85}
.pv.tf-roadside .mu-g{background:var(--card);border:4px solid var(--ink);border-radius:18px;padding:52px 48px 40px;position:relative;box-shadow:12px 12px 0 var(--ink)}
.pv.tf-roadside .mu-g:before{content:"";position:absolute;left:0;right:0;top:0;height:22px;border-radius:12px 12px 0 0;background:repeating-conic-gradient(var(--acc) 0 25%,var(--card) 0 50%) 0 0/22px 22px}
.pv.tf-roadside .mu-h{font:400 30px/1 var(--hf);text-transform:none;letter-spacing:0;color:var(--acc);border-bottom:3px solid var(--ink)}
.pv.tf-roadside .mu-l strong{font-weight:800}
.pv.tf-roadside .mu-p{font:400 24px var(--hf);color:var(--acc)}
.pv.tf-roadside .mu-im{border-radius:50%;border:3px solid var(--ink)}
.pv.tf-roadside .ti{background:var(--card);border:3px solid var(--ink);border-radius:22px;overflow:hidden;box-shadow:8px 8px 0 var(--acc)}
.pv.tf-roadside .tim{border-radius:0;border-bottom:3px solid var(--ink);margin:0 0 14px}
.pv.tf-roadside .ti .tx{padding:4px 22px 22px}
.pv.tf-roadside .ti .meta{color:var(--acc);font-weight:800}
.pv.tf-roadside .tl-steps .ti:before{border-radius:50%;background:var(--acc);color:var(--oa);font:400 30px/56px var(--hf)}
.pv.tf-roadside .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.pv.tf-roadside .lr{border:3px solid var(--ink);border-radius:18px;padding:16px 22px;background:var(--card);gap:4px 12px;display:grid;grid-template-columns:auto 1fr;align-items:baseline}
.pv.tf-roadside .lr:before{content:"★";color:var(--acc);font-size:20px;grid-row:span 2}
.pv.tf-roadside .lr strong{font:400 24px var(--hf);min-width:0}
.pv.tf-roadside .lr span{color:var(--mute)}
.pv.tf-roadside .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-roadside .fm{border-radius:28px;border:8px solid var(--ink);box-shadow:-14px 14px 0 var(--acc)}
.pv.tf-roadside .fe h3{font-size:52px}
.pv.tf-roadside .bk-b{position:relative;background:var(--ink);color:var(--oi);border-radius:40px 40px 140px 140px / 40px 40px 70px 70px;padding:72px 40px 64px;--mute:color-mix(in srgb,var(--oi) 70%,transparent)}
.pv.tf-roadside .bk-b:before{content:"";position:absolute;top:24px;left:50%;width:26px;height:26px;margin-left:-13px;border-radius:50%;background:var(--bg);box-shadow:0 0 0 5px var(--acc)}
.pv.tf-roadside .bk-b h3{font-size:32px;text-align:center}
.pv.tf-roadside .bk-i{border-color:color-mix(in srgb,var(--oi) 22%,transparent)!important}
.pv.tf-roadside .bk-i b{font:400 24px var(--hf);color:var(--acc)}
.pv.tf-roadside .bk-b .bt{width:100%;justify-content:center;box-shadow:none}
.pv.tf-roadside .bk-n{text-align:center}
.pv.tf-roadside .bk-ar li{border:2px solid var(--ink);font-weight:800}
.pv.tf-roadside .gl{gap:16px}
.pv.tf-roadside .gl figure{margin:0;border:4px solid var(--ink);border-radius:20px;overflow:hidden;background:var(--ink)}
.pv.tf-roadside .gl figure:nth-child(odd){transform:rotate(-1.2deg)}.pv.tf-roadside .gl figure:nth-child(even){transform:rotate(1.2deg)}
.pv.tf-roadside .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:0}
.pv.tf-roadside .gl figcaption{color:var(--oi);font-weight:800;padding:8px 14px;margin:0}
.pv.tf-roadside .qs blockquote{background:var(--card);border:3px solid var(--ink);border-radius:22px}
.pv.tf-roadside .s-cta,.pv.tf-roadside .s-cta.bg-default{background:var(--ink);color:var(--oi);position:relative;padding-top:calc(var(--sy,88px) + 22px)}
.pv.tf-roadside .s-cta:before{content:"";position:absolute;left:0;right:0;top:0;height:22px;background:repeating-conic-gradient(var(--acc) 0 25%,var(--oi) 0 50%) 0 0/22px 22px}
.pv.tf-roadside .s-cta h2{font-size:68px;color:var(--oi);text-shadow:0 0 2px var(--acc),0 0 22px color-mix(in srgb,var(--acc) 70%,transparent)}
.pv.tf-roadside .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-roadside .ft{border-top:12px solid var(--ink);box-shadow:inset 0 4px 0 var(--acc)}
.pv.tf-roadside .wm-i{border-radius:50%;background:var(--acc);color:var(--oa);font-family:var(--hf);box-shadow:0 0 0 3px var(--ink)}
.pv.tf-roadside .wm-n{font:400 26px var(--hf)}

/* ---------- Patio: riverside restaurant and inn ---------- */
.pv.tf-patio{font-size:17px}
.pv.tf-patio :is(h1,h2,h3){letter-spacing:-.02em;font-variation-settings:"SOFT" 100,"WONK" 1}
.pv.tf-patio h1{font-size:84px;line-height:1}
.pv.tf-patio h2{font-size:52px;line-height:1.04}
.pv.tf-patio h3{font-size:24px}
.pv.tf-patio .hd{border-bottom:0;box-shadow:none}
.pv.tf-patio .hd:after{content:"";position:absolute;left:0;right:0;top:100%;height:16px;background:radial-gradient(circle at 14px 0,var(--acc) 14px,transparent 14.5px) 0 0/28px 16px repeat-x}
.pv.tf-patio .bt{border-radius:999px;font-weight:600;padding:16px 28px}
.pv.tf-patio .bt2{box-shadow:inset 0 0 0 1.5px var(--line);background:var(--card)}
.pv.tf-patio .ey{font:italic 500 19px var(--hf);letter-spacing:0;text-transform:none;color:var(--acc)}
.pv.tf-patio .hl-overlay .hx{min-height:780px;align-items:flex-end;padding-bottom:72px}
.pv.tf-patio .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(0,0,0,.35),transparent 50%)}
.pv.tf-patio .hl-overlay .ht{background:var(--bg);color:var(--ink);border-radius:28px;padding:48px 52px;max-width:640px;box-shadow:0 40px 80px -30px rgba(0,0,0,.55);position:relative}
.pv.tf-patio .hl-overlay .ht:before{content:"";position:absolute;left:28px;right:28px;top:-14px;height:14px;background:repeating-linear-gradient(90deg,var(--acc) 0 22px,var(--card) 22px 44px);border-radius:10px 10px 0 0}
.pv.tf-patio .hl-overlay .ey{color:var(--acc)}
.pv.tf-patio .hl-overlay p{color:var(--mute);font-size:19px}
.pv.tf-patio .hl-overlay .bt2{color:var(--ink)}
.pv.tf-patio .s-stats,.pv.tf-patio .s-stats.bg-default{background:var(--soft)}
.pv.tf-patio .stt{gap:24px;justify-items:center}
.pv.tf-patio .stt>div{width:176px;aspect-ratio:1;border-radius:50%;background:var(--card);display:flex;flex-direction:column;justify-content:center;align-items:center;padding:12px;box-shadow:0 0 0 10px color-mix(in srgb,var(--card) 60%,transparent),0 24px 40px -24px rgba(0,0,0,.4)}
.pv.tf-patio .stt b{font:600 44px/1 var(--hf);color:var(--acc);letter-spacing:-.03em}
.pv.tf-patio .stt span{font-size:14px;color:var(--mute);margin-top:4px;max-width:130px}
.pv.tf-patio .sh h2:after{content:"";display:block;width:84px;height:10px;margin-top:14px;background:radial-gradient(circle at 7px 10px,transparent 6px,var(--acc) 6.5px 8px,transparent 8.5px) 0 0/14px 10px repeat-x}
.pv.tf-patio .al-center .sh h2:after,.pv.tf-patio .sh.c h2:after{margin-left:auto;margin-right:auto}
.pv.tf-patio .mu-g{gap:44px 64px}
.pv.tf-patio .mu-h{font:italic 600 30px var(--hf);text-transform:none;letter-spacing:-.01em;color:var(--ink);border-bottom:0;padding-bottom:0}
.pv.tf-patio .mu-h:after{content:"";display:block;width:56px;height:3px;border-radius:3px;background:var(--acc);margin-top:10px}
.pv.tf-patio .mu-im{border-radius:50%;flex-basis:76px;width:76px;height:76px;box-shadow:0 0 0 4px var(--card),0 10px 20px -10px rgba(0,0,0,.45)}
.pv.tf-patio .mu-l strong{font:600 20px var(--hf)}
.pv.tf-patio .mu-p{font:600 20px var(--hf);color:var(--acc)}
.pv.tf-patio .ti{background:transparent}
.pv.tf-patio .tim{border-radius:24px;aspect-ratio:4/3.2;margin-bottom:16px;box-shadow:0 22px 40px -28px rgba(0,0,0,.6)}
.pv.tf-patio .ti h3{font-size:26px}
.pv.tf-patio .ti .meta{color:var(--acc);font-style:italic;font-family:var(--hf);letter-spacing:0;text-transform:none;font-size:16px}
.pv.tf-patio .tl-steps .ti:before{background:var(--acc);color:var(--oa);font:600 26px/56px var(--hf)}
.pv.tf-patio .ls{border:0;display:grid;grid-template-columns:repeat(2,1fr);gap:4px 40px}
.pv.tf-patio .lr{border-bottom:1px solid var(--line);padding:14px 0 14px 34px;position:relative;flex-direction:column;align-items:flex-start;gap:2px}
.pv.tf-patio .lr:before{content:"✓";position:absolute;left:0;top:13px;width:22px;height:22px;border-radius:50%;background:var(--acc);color:var(--oa);font-size:13px;font-weight:700;display:grid;place-items:center}
.pv.tf-patio .lr strong{font:600 20px var(--hf);min-width:0;flex:none}
.pv.tf-patio .lr span{flex:none}
.pv.tf-patio .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-patio .fm{border-radius:220px 220px 28px 28px;aspect-ratio:4/4.6}
.pv.tf-patio .fe h3{font-size:50px}
.pv.tf-patio .bk-b{background:var(--card);border-radius:24px;overflow:hidden;position:relative;padding-top:52px;box-shadow:0 30px 60px -36px rgba(0,0,0,.5);border:1px solid var(--line)}
.pv.tf-patio .bk-b:before{content:"";position:absolute;left:0;right:0;top:0;height:22px;background:radial-gradient(circle at 14px 22px,var(--card) 13px,transparent 13.5px) 0 0/28px 22px repeat-x,repeating-linear-gradient(90deg,var(--acc) 0 28px,color-mix(in srgb,var(--acc) 15%,var(--card)) 28px 56px)}
.pv.tf-patio .bk-b h3{font-size:30px}
.pv.tf-patio .bk-i b{font:600 22px var(--hf);color:var(--acc)}
.pv.tf-patio .bk-ar li{background:var(--card)}
.pv.tf-patio .gl{grid-template-columns:repeat(3,1fr);gap:14px;grid-auto-flow:dense}
.pv.tf-patio .gl figure{margin:0;border-radius:20px;overflow:hidden}
.pv.tf-patio .gl figure:nth-child(3n+1){grid-row:span 2}
.pv.tf-patio .gl figure>:is(img,svg){width:100%;height:100%;min-height:220px;object-fit:cover;border-radius:0;aspect-ratio:auto}
.pv.tf-patio .gl figcaption{display:none}
.pv.tf-patio .qs blockquote{background:var(--card);border-radius:24px;box-shadow:0 20px 40px -30px rgba(0,0,0,.45)}
.pv.tf-patio .qs blockquote p{font-style:italic}
.pv.tf-patio .s-cta,.pv.tf-patio .s-cta.bg-default{background:var(--ink);color:var(--oi);position:relative}
.pv.tf-patio .s-cta:before{content:"";position:absolute;left:0;right:0;top:0;height:16px;background:radial-gradient(circle at 14px 0,var(--bg) 14px,transparent 14.5px) 0 0/28px 16px repeat-x}
.pv.tf-patio .s-cta h2{font-size:60px}
.pv.tf-patio .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-patio .wm-i{border-radius:50%;background:var(--acc);color:var(--oa);font-family:var(--hf);font-style:italic}
.pv.tf-patio .wm-n{font:600 26px var(--hf);letter-spacing:-.02em}

/* run 7: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-taproom h1{font-size:96px}.pv.tf-roadside h1{font-size:64px}.pv.tf-patio h1{font-size:60px}
.pv.tf-roadside .hl-split .hx{gap:32px}
.pv.tf-patio .ls{grid-template-columns:1fr 1fr}
}
@container (max-width:599.98px){
.pv.tf-taproom h1{font-size:76px}.pv.tf-roadside h1{font-size:52px}.pv.tf-patio h1{font-size:44px}
.pv.tf-taproom h2{font-size:50px}.pv.tf-taproom .s-cta h2{font-size:58px}.pv.tf-taproom .fe h3{font-size:46px}
.pv:is(.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) h2{font-size:36px}.pv.tf-roadside .s-cta h2{font-size:42px}.pv.tf-patio .s-cta h2{font-size:40px}
.pv:is(.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe h3{font-size:34px}
.pv.tf-taproom .hl-overlay .hx{min-height:600px;padding-bottom:56px}
.pv.tf-taproom .stt{grid-template-columns:1fr 1fr}.pv.tf-taproom .stt b{font-size:56px}
.pv.tf-taproom .mu-g{padding:28px 22px;margin:10px}
.pv.tf-taproom .lr strong{flex-basis:auto}
.pv.tf-taproom .gl{grid-template-columns:1fr 1fr}
.pv.tf-roadside .ey{font-size:32px}
.pv.tf-roadside .hl-split .hx{grid-template-columns:1fr;gap:40px;padding-top:44px;padding-bottom:64px}
.pv.tf-roadside .hl-split .hm{border-width:7px;box-shadow:10px 10px 0 var(--acc)}
.pv.tf-roadside .stt{grid-template-columns:1fr 1fr;gap:14px}.pv.tf-roadside .stt b{font-size:40px}
.pv.tf-roadside .mu-g{padding:44px 20px 28px;box-shadow:8px 8px 0 var(--ink)}
.pv.tf-roadside .bk-b{padding:64px 24px 56px}
.pv.tf-roadside .gl{grid-template-columns:1fr 1fr;gap:12px}
.pv.tf-roadside .ls{grid-template-columns:1fr}
.pv.tf-patio .hl-overlay .hx{min-height:640px;padding-bottom:28px}
.pv.tf-patio .hl-overlay .ht{padding:32px 26px;border-radius:22px}
.pv.tf-patio .stt{grid-template-columns:1fr 1fr;gap:16px}.pv.tf-patio .stt>div{width:140px}.pv.tf-patio .stt b{font-size:32px}.pv.tf-patio .stt span{font-size:12px}
.pv.tf-patio .ls{grid-template-columns:1fr}
.pv.tf-patio .gl{grid-template-columns:1fr 1fr}
.pv:is(.tf-taproom,.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv.tf-patio .fm{border-radius:160px 160px 24px 24px}
}
/* run 7: stats keep the page colours on banded variants (shields and plates have their own backgrounds) */
.pv:is(.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .s-stats:is(.bg-ink,.bg-acc){background:var(--soft);color:var(--ink)}
.pv:is(.tf-roadside,.tf-patio,.tf-bedrock,.tf-breakwater,.tf-rebar) .s-stats:is(.bg-ink,.bg-acc)>.w{--ink:inherit;--line:inherit;--mute:inherit;--card:inherit;--soft:inherit}

/* ======================================================================
   Indigenous business series, run 8 (2026-11-15): civil, excavation, concrete and shoreline contractors. Bedrock, Breakwater, Rebar.
   ====================================================================== */
/* ---------- Bedrock: heavy civil ---------- */
.pv.tf-bedrock{font-size:17px}
.pv.tf-bedrock :is(h1,h2,h3){text-transform:uppercase;letter-spacing:.005em;line-height:.92}
.pv.tf-bedrock h1{font-size:120px}
.pv.tf-bedrock h2{font-size:64px}
.pv.tf-bedrock h3{font-size:28px}
.pv.tf-bedrock .hd{border-bottom:0;box-shadow:0 5px 0 var(--acc)}
.pv.tf-bedrock :is(.mn,.dr>summary){text-transform:uppercase;font-weight:700;letter-spacing:.08em;font-size:14px}
.pv.tf-bedrock .bt{border-radius:0;text-transform:uppercase;font-weight:800;letter-spacing:.1em;padding:17px 28px;font-size:15px;clip-path:polygon(0 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%)}
.pv.tf-bedrock .ey{display:inline-flex;align-items:center;gap:12px;font-weight:800;letter-spacing:.18em;font-size:13px}
.pv.tf-bedrock .ey:before{content:"";width:34px;height:12px;background:repeating-linear-gradient(-45deg,var(--acc) 0 6px,transparent 6px 12px)}
.pv.tf-bedrock .s-hero{position:relative}
.pv.tf-bedrock .s-hero:after{content:"";position:absolute;left:0;right:0;bottom:0;height:22px;z-index:2;background:repeating-linear-gradient(-45deg,var(--acc) 0 22px,#111 22px 44px)}
.pv.tf-bedrock .hl-overlay .hx{min-height:720px;padding-bottom:110px;align-items:flex-end}
.pv.tf-bedrock .hl-overlay .hm:after{background:linear-gradient(90deg,rgba(12,12,12,.88),rgba(12,12,12,.5) 50%,rgba(12,12,12,.1)),linear-gradient(0deg,rgba(12,12,12,.55),transparent 45%)}
.pv.tf-bedrock .hl-overlay p{font-size:20px;max-width:600px}
.pv.tf-bedrock .hl-overlay .bt2{color:#fff;background:transparent;box-shadow:inset 0 0 0 2px rgba(255,255,255,.85);clip-path:none}
.pv.tf-bedrock .s-stats,.pv.tf-bedrock .s-stats.bg-default{background:var(--soft)}
.pv.tf-bedrock .stt{text-align:left;gap:0}
.pv.tf-bedrock .stt>div{border-top:8px solid var(--acc);padding:18px 22px 6px 0}
.pv.tf-bedrock .stt>div+div{padding-left:22px;border-left:1px solid var(--line)}
.pv.tf-bedrock .stt b{font:800 78px/1 var(--hf);color:var(--ink)}
.pv.tf-bedrock .stt span{display:block;margin-top:6px;text-transform:uppercase;letter-spacing:.12em;font-size:12px;font-weight:700;color:var(--mute)}
.pv.tf-bedrock .sh{border-bottom:3px solid var(--ink);padding-bottom:14px}
.pv.tf-bedrock .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:0 36px;counter-reset:cap}
.pv.tf-bedrock .lr{counter-increment:cap;display:grid;grid-template-columns:56px 1fr;align-items:baseline;gap:2px 10px;border-bottom:1px solid var(--line);padding:16px 0}
.pv.tf-bedrock .lr:before{content:counter(cap,decimal-leading-zero);grid-row:span 2;font:800 34px/1 var(--hf);color:var(--acc)}
.pv.tf-bedrock .lr strong{font:800 22px/1.05 var(--hf);text-transform:uppercase;min-width:0}
.pv.tf-bedrock .lr span{font-size:15px}
.pv.tf-bedrock .ti{background:var(--card);border:1px solid var(--line);border-bottom:6px solid var(--ink);border-radius:0;overflow:hidden;position:relative}
.pv.tf-bedrock .tim{border-radius:0;margin:0 0 14px}
.pv.tf-bedrock .ti .tx{padding:4px 22px 22px}
.pv.tf-bedrock .ti h3{font-size:30px}
.pv.tf-bedrock .ti .meta{display:inline-block;align-self:flex-start;background:var(--acc);color:var(--oa);font-weight:800;letter-spacing:.12em;padding:5px 10px}
.pv.tf-bedrock .tl-steps .ti{border-bottom-width:1px;border-top:6px solid var(--acc)}
.pv.tf-bedrock .tl-steps .ti:before{border-radius:0;background:var(--ink);color:var(--oi);font:800 30px/56px var(--hf)}
.pv.tf-bedrock .tl-steps .ti:after{display:none}
.pv.tf-bedrock .fe-split{grid-template-columns:1.1fr 1fr;gap:64px}
.pv.tf-bedrock .fm{border-radius:0;clip-path:polygon(0 0,100% 0,100% 86%,86% 100%,0 100%)}
.pv.tf-bedrock .fe h3{font-size:60px}
.pv.tf-bedrock .bk-b{background:var(--card);border:2px solid var(--ink);border-radius:0;position:relative;padding-top:56px}
.pv.tf-bedrock .bk-b:before{content:"";position:absolute;left:0;right:0;top:0;height:16px;background:repeating-linear-gradient(-45deg,var(--acc) 0 12px,#111 12px 24px)}
.pv.tf-bedrock .bk-b h3{font-size:32px}
.pv.tf-bedrock .bk-i b{font:800 22px var(--hf);color:var(--acc)}
.pv.tf-bedrock .bk-ar li{border-radius:0;text-transform:uppercase;letter-spacing:.06em;font-size:12px;border-color:var(--ink)}
.pv.tf-bedrock .gl{gap:6px}
.pv.tf-bedrock .gl figure{margin:0;position:relative}
.pv.tf-bedrock .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:0}
.pv.tf-bedrock .gl figcaption{position:absolute;left:0;bottom:0;background:var(--ink);color:var(--oi);font-weight:700;text-transform:uppercase;letter-spacing:.1em;font-size:11px;padding:6px 10px;margin:0}
.pv.tf-bedrock .qs blockquote{background:var(--card);border-left:6px solid var(--acc);border-radius:0}
.pv.tf-bedrock .s-cta,.pv.tf-bedrock .s-cta.bg-default{background:#121212;color:#fff;position:relative;padding-top:calc(var(--sy,88px) + 22px)}
.pv.tf-bedrock .s-cta:before{content:"";position:absolute;left:0;right:0;top:0;height:22px;background:repeating-linear-gradient(-45deg,var(--acc) 0 22px,#121212 22px 44px)}
.pv.tf-bedrock .s-cta h2{font-size:96px;color:#fff}
.pv.tf-bedrock .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-bedrock .wm-i{border-radius:0;background:var(--acc);color:var(--oa);font-family:var(--hf);font-weight:800}
.pv.tf-bedrock .wm-n{font:800 30px/1 var(--hf);text-transform:uppercase}

/* ---------- Breakwater: shoreline and environmental ---------- */
.pv.tf-breakwater{font-size:17px}
.pv.tf-breakwater :is(h1,h2,h3){font-weight:400;letter-spacing:-.015em}
.pv.tf-breakwater h1{font-size:80px;line-height:1.02}
.pv.tf-breakwater h2{font-size:50px;line-height:1.06}
.pv.tf-breakwater h3{font-size:23px}
.pv.tf-breakwater .hd{border-bottom:1px solid var(--line)}
.pv.tf-breakwater .bt{border-radius:999px;font-weight:600;padding:16px 28px}
.pv.tf-breakwater .bt2{box-shadow:inset 0 0 0 1.5px var(--ink);background:transparent}
.pv.tf-breakwater .ey{font-weight:600;letter-spacing:.14em;font-size:12.5px;display:inline-flex;align-items:center;gap:10px}
.pv.tf-breakwater .ey:before{content:"";width:26px;height:10px;background:radial-gradient(circle at 5px 10px,transparent 4px,var(--acc) 4.5px 6px,transparent 6.5px) 0 0/10px 10px repeat-x}
.pv.tf-breakwater .s-hero{background:linear-gradient(180deg,var(--bg) 70%,var(--soft) 70%)}
.pv.tf-breakwater .hl-split .hx{grid-template-columns:1fr 1.1fr;gap:64px;padding-top:80px;padding-bottom:96px}
.pv.tf-breakwater .hl-split .hm{aspect-ratio:5/4.4;border-radius:48% 52% 30px 30px / 18% 22% 30px 30px;position:relative;overflow:visible}
.pv.tf-breakwater .hl-split .hm>:is(img,svg){border-radius:inherit}
.pv.tf-breakwater .hl-split .hm:after{content:"";position:absolute;left:-28px;bottom:-26px;width:190px;height:64px;background:radial-gradient(ellipse 34px 24px at 30px 40px,#8f948f 96%,transparent),radial-gradient(ellipse 40px 26px at 92px 38px,#a9ada6 96%,transparent),radial-gradient(ellipse 30px 22px at 150px 42px,#7f857f 96%,transparent),radial-gradient(ellipse 28px 20px at 62px 18px,#b8bbb4 96%,transparent),radial-gradient(ellipse 30px 20px at 120px 16px,#9a9e97 96%,transparent)}
.pv.tf-breakwater .hl-split p{font-size:19px;color:var(--mute)}
.pv.tf-breakwater .s-stats,.pv.tf-breakwater .s-stats.bg-default{background:repeating-linear-gradient(180deg,transparent 0 26px,color-mix(in srgb,var(--oi) 7%,transparent) 26px 28px),var(--ink);color:var(--oi)}
.pv.tf-breakwater .stt b{font:400 54px/1 var(--hf);color:var(--oi)}
.pv.tf-breakwater .stt span{opacity:.8;font-size:14px}
.pv.tf-breakwater .stt>div+div{border-left:1px solid color-mix(in srgb,var(--oi) 20%,transparent)}
.pv.tf-breakwater .sh h2:after{content:"";display:block;width:90px;height:10px;margin-top:14px;background:radial-gradient(circle at 7px 10px,transparent 6px,var(--acc) 6.5px 8px,transparent 8.5px) 0 0/14px 10px repeat-x}
.pv.tf-breakwater .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:6px 48px}
.pv.tf-breakwater .lr{display:grid;grid-template-columns:30px 1fr;gap:2px 12px;border-bottom:1px solid var(--line);padding:16px 0;align-items:baseline}
.pv.tf-breakwater .lr:before{content:"";grid-row:span 2;width:22px;height:16px;align-self:center;background:#9a9e97;border-radius:46% 54% 40% 60% / 58% 46% 54% 42%;box-shadow:inset -3px -3px 0 rgba(0,0,0,.15)}
.pv.tf-breakwater .lr:nth-child(3n+2):before{background:#b3b6af;border-radius:60% 40% 55% 45% / 45% 60% 40% 55%}
.pv.tf-breakwater .lr:nth-child(3n):before{background:#858a84;border-radius:40% 60% 45% 55% / 55% 40% 60% 45%}
.pv.tf-breakwater .lr strong{font:400 21px var(--hf);min-width:0}
.pv.tf-breakwater .lr span{font-size:15px}
.pv.tf-breakwater .ti{background:var(--card);border-radius:22px;overflow:hidden;border:1px solid var(--line)}
.pv.tf-breakwater .tim{border-radius:0;margin:0 0 14px;aspect-ratio:4/3}
.pv.tf-breakwater .ti .tx{padding:4px 22px 22px}
.pv.tf-breakwater .ti .meta{color:var(--acc);font-weight:600;letter-spacing:.1em}
.pv.tf-breakwater .tl-steps .ti:before{background:var(--soft);color:var(--ink);font:400 26px/56px var(--hf);border-radius:46% 54% 40% 60% / 58% 46% 54% 42%}
.pv.tf-breakwater .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-breakwater .fm{border-radius:42% 58% 46% 54% / 34% 40% 60% 66%;aspect-ratio:1}
.pv.tf-breakwater .fe h3{font-size:46px}
.pv.tf-breakwater .bk-b{background:var(--card);border-radius:26px;border:1px solid var(--line);box-shadow:0 30px 60px -40px rgba(0,0,0,.5)}
.pv.tf-breakwater .bk-i b{font:400 21px var(--hf);color:var(--acc)}
.pv.tf-breakwater .gl{gap:12px}
.pv.tf-breakwater .gl figure{margin:0;overflow:hidden;border-radius:26px}
.pv.tf-breakwater .gl figure:nth-child(3n+1){border-radius:46% 54% 26px 26px / 22% 26px 26px 26px}
.pv.tf-breakwater .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover;border-radius:0}
.pv.tf-breakwater .gl figcaption{display:none}
.pv.tf-breakwater .qs blockquote{background:var(--card);border-radius:26px;border:1px solid var(--line)}
.pv.tf-breakwater .s-cta,.pv.tf-breakwater .s-cta.bg-default{background:var(--acc);color:var(--oa);position:relative;padding-top:calc(var(--sy,88px) + 28px)}
.pv.tf-breakwater .s-cta:before{content:"";position:absolute;left:0;right:0;top:-1px;height:30px;background:radial-gradient(ellipse 36px 22px at 36px 0,var(--bg) 96%,transparent) 0 0/120px 30px repeat-x,radial-gradient(ellipse 26px 18px at 92px 0,var(--bg) 96%,transparent) 0 0/120px 30px repeat-x}
.pv.tf-breakwater .s-cta h2{font-size:56px}
.pv.tf-breakwater .s-cta .bt{background:var(--ink);color:var(--oi)}
.pv.tf-breakwater .wm-i{border-radius:46% 54% 40% 60% / 58% 46% 54% 42%;background:var(--ink);color:var(--oi);font-family:var(--hf)}
.pv.tf-breakwater .wm-n{font:400 25px var(--hf)}

/* ---------- Rebar: concrete and foundations ---------- */
.pv.tf-rebar{font-size:17px}
.pv.tf-rebar h1{font-size:84px;line-height:.98;letter-spacing:-.035em}
.pv.tf-rebar h2{font-size:50px;letter-spacing:-.03em;line-height:1.02}
.pv.tf-rebar h3{letter-spacing:-.015em}
.pv.tf-rebar .hd{border-bottom:2px solid var(--ink)}
.pv.tf-rebar .bt{border-radius:6px;font-weight:700;padding:16px 26px}
.pv.tf-rebar .bt2{box-shadow:inset 0 0 0 2px var(--ink);background:var(--card)}
.pv.tf-rebar .ey{display:inline-flex;align-items:center;gap:10px;font-weight:700;letter-spacing:.14em;font-size:12.5px;color:var(--ink)}
.pv.tf-rebar .ey:before{content:"";width:16px;height:16px;border-radius:50% 50% 4px 4px;background:#ff6a13;box-shadow:0 3px 0 -1px #c84d06}
.pv.tf-rebar .s-hero{background:radial-gradient(circle,#ff6a13 4px,transparent 4.5px) 22px 22px/88px 88px,repeating-linear-gradient(0deg,transparent 0 41px,color-mix(in srgb,var(--ink) 22%,transparent) 41px 44px) 0 0/88px 44px,repeating-linear-gradient(90deg,transparent 0 41px,color-mix(in srgb,var(--ink) 22%,transparent) 41px 44px) 0 0/44px 88px,color-mix(in srgb,var(--bg) 85%,#9a9a96);border-bottom:2px solid var(--ink)}
.pv.tf-rebar .hl-split .hx{grid-template-columns:1fr 1.05fr;gap:56px;padding-top:80px;padding-bottom:88px}
.pv.tf-rebar .hl-split .ht{background:var(--bg);padding:40px 40px 44px;border:2px solid var(--ink);border-radius:8px;box-shadow:10px 10px 0 var(--ink)}
.pv.tf-rebar .hl-split .hm{aspect-ratio:4/4.4;border-radius:8px;border:2px solid var(--ink);box-shadow:-10px 10px 0 #ff6a13}
.pv.tf-rebar .hl-split p{font-size:18.5px;color:var(--mute)}
.pv.tf-rebar .s-stats,.pv.tf-rebar .s-stats.bg-default{background:var(--bg)}
.pv.tf-rebar .stt{gap:16px}
.pv.tf-rebar .stt>div{position:relative;background:color-mix(in srgb,var(--bg) 70%,#8f8f8a);border-radius:4px;padding:30px 12px 24px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.08)}
.pv.tf-rebar .stt>div:before,.pv.tf-rebar .stt>div:after{content:"";position:absolute;top:12px;width:9px;height:9px;border-radius:50%;background:color-mix(in srgb,var(--ink) 55%,transparent);box-shadow:inset 1px 1px 2px rgba(0,0,0,.5)}
.pv.tf-rebar .stt>div:before{left:12px}.pv.tf-rebar .stt>div:after{right:12px}
.pv.tf-rebar .stt b{font:700 50px/1 var(--hf);color:var(--ink);letter-spacing:-.04em}
.pv.tf-rebar .stt span{font-size:14px;color:var(--ink);opacity:.75}
.pv.tf-rebar .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:4px 32px}
.pv.tf-rebar .lr{display:grid;grid-template-columns:24px 1fr;gap:2px 12px;align-items:baseline;border-bottom:2px dotted color-mix(in srgb,var(--ink) 30%,transparent);padding:14px 0}
.pv.tf-rebar .lr:before{content:"";grid-row:span 2;width:16px;height:16px;border-radius:50% 50% 4px 4px;background:#ff6a13;box-shadow:0 3px 0 -1px #c84d06;align-self:center}
.pv.tf-rebar .lr strong{font-weight:700;min-width:0}
.pv.tf-rebar .lr span{font-size:15px}
.pv.tf-rebar .ti{background:var(--card);border:2px solid var(--ink);border-radius:8px;overflow:hidden}
.pv.tf-rebar .tim{border-radius:0;border-bottom:2px solid var(--ink);margin:0 0 14px}
.pv.tf-rebar .ti .tx{padding:4px 20px 20px}
.pv.tf-rebar .ti .meta{display:inline-flex;align-items:center;gap:6px;align-self:flex-start;font-weight:700;letter-spacing:.08em;color:var(--ink)}
.pv.tf-rebar .ti .meta:before{content:"";width:10px;height:10px;border-radius:50% 50% 3px 3px;background:#ff6a13}
.pv.tf-rebar .tl-steps .ti:before{background:#ff6a13;color:#1a1a1a;border-radius:50% 50% 8px 8px;font:700 24px/56px var(--hf)}
.pv.tf-rebar .fe-split{grid-template-columns:1fr 1fr;gap:64px}
.pv.tf-rebar .fm{border-radius:8px;border:2px solid var(--ink);box-shadow:10px 10px 0 var(--ink)}
.pv.tf-rebar .fe h3{font-size:46px;letter-spacing:-.03em}
.pv.tf-rebar .bk-b{background:var(--card);border:2px solid var(--ink);border-radius:8px;box-shadow:10px 10px 0 #ff6a13}
.pv.tf-rebar .bk-i b{font-weight:700;color:var(--ink)}
.pv.tf-rebar .bk-ar li{border:2px solid var(--ink);border-radius:6px}
.pv.tf-rebar .gl{gap:10px}
.pv.tf-rebar .gl figure{margin:0;border:2px solid var(--ink);border-radius:8px;overflow:hidden}
.pv.tf-rebar .gl figure>:is(img,svg){width:100%;aspect-ratio:4/3;object-fit:cover;border-radius:0}
.pv.tf-rebar .gl figcaption{font-weight:700;font-size:13px;padding:8px 12px;margin:0;border-top:2px solid var(--ink);background:var(--card)}
.pv.tf-rebar .qs blockquote{background:var(--card);border:2px solid var(--ink);border-radius:8px}
.pv.tf-rebar .s-cta,.pv.tf-rebar .s-cta.bg-default{background:radial-gradient(circle,#ff6a13 4px,transparent 4.5px) 22px 22px/88px 88px,repeating-linear-gradient(0deg,transparent 0 41px,rgba(255,255,255,.12) 41px 44px) 0 0/88px 44px,repeating-linear-gradient(90deg,transparent 0 41px,rgba(255,255,255,.12) 41px 44px) 0 0/44px 88px,#1d1f21;color:#fff}
.pv.tf-rebar .s-cta .w{background:#1d1f21;border-radius:10px;padding-top:48px;padding-bottom:48px;max-width:860px;box-shadow:0 0 0 2px rgba(255,255,255,.2)}
.pv.tf-rebar .s-cta h2{color:#fff}
.pv.tf-rebar .s-cta .bt{background:#ff6a13;color:#1a1a1a}
.pv.tf-rebar .wm-i{border-radius:50% 50% 6px 6px;background:#ff6a13;color:#1a1a1a}
.pv.tf-rebar .wm-n{font:700 24px var(--hf);letter-spacing:-.03em}

/* run 8: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-bedrock h1{font-size:84px}.pv.tf-breakwater h1{font-size:56px}.pv.tf-rebar h1{font-size:58px}
.pv:is(.tf-bedrock,.tf-rebar) .ls{grid-template-columns:1fr 1fr}
.pv:is(.tf-breakwater,.tf-rebar) .hl-split .hx{gap:32px}
}
@container (max-width:599.98px){
.pv.tf-bedrock h1{font-size:62px}.pv.tf-breakwater h1{font-size:42px}.pv.tf-rebar h1{font-size:44px}
.pv.tf-bedrock h2{font-size:44px}.pv.tf-bedrock .s-cta h2{font-size:52px}.pv.tf-bedrock .fe h3{font-size:42px}
.pv:is(.tf-breakwater,.tf-rebar) .fe h3{font-size:32px}
.pv.tf-bedrock .hl-overlay .hx{min-height:600px;padding-bottom:72px}
.pv.tf-bedrock .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-bedrock .stt>div+div{border-left:0;padding-left:0}.pv.tf-bedrock .stt b{font-size:56px}
.pv:is(.tf-bedrock,.tf-breakwater,.tf-rebar) .ls{grid-template-columns:1fr}
.pv:is(.tf-breakwater,.tf-rebar) .hl-split .hx{grid-template-columns:1fr;gap:40px;padding-top:40px;padding-bottom:64px}
.pv.tf-rebar .hl-split .ht{padding:26px 22px 28px;box-shadow:6px 6px 0 var(--ink)}
.pv.tf-breakwater .stt{grid-template-columns:1fr 1fr;row-gap:20px}.pv.tf-breakwater .stt>div+div{border:0}.pv.tf-breakwater .stt b{font-size:40px}
.pv.tf-rebar .stt{grid-template-columns:1fr 1fr}.pv.tf-rebar .stt b{font-size:38px}
.pv:is(.tf-bedrock,.tf-breakwater,.tf-rebar) .fe-split{grid-template-columns:1fr;gap:28px}
.pv:is(.tf-bedrock,.tf-breakwater,.tf-rebar) .gl{grid-template-columns:1fr 1fr}
}

/* ======================================================================
   Reel 2.0 (2026-11-15): pushing Reel from 88 toward 92+.
   Original art, all drawn here in CSS/SVG (no outside images): film grain, viewfinder corners, numbered title cards,
   a 35 mm film strip with sprocket holes and edge numbers for the gallery, festival laurels on the quotes,
   a projector beam behind the closing call to action, and a cinema-listing style for screenings and rates.
   Motion: the letterbox opens and the title tracks in on load, grain flickers, credits roll as you scroll, the beam breathes.
   All motion switches off for visitors who ask for less motion (and in graded screenshots).
   ====================================================================== */
.pv.tf-reel{--grain:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.85' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 .55 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  --corner:linear-gradient(currentColor,currentColor);overflow:clip}
.pv.tf-reel:after{content:"";position:absolute;inset:0;z-index:40;pointer-events:none;background:var(--grain) 0 0/180px 180px;opacity:.05;mix-blend-mode:overlay}

/* Hero: a real 2.39:1 frame inside the letterbox, with viewfinder corners and frame markings */
.pv.tf-reel .s-hero{padding:64px 0;position:relative}
.pv.tf-reel .s-hero:before,.pv.tf-reel .s-hero:after{position:absolute;left:max(24px,calc((100% - 1200px)/2));right:max(24px,calc((100% - 1200px)/2));font:500 10px/1 var(--bf);letter-spacing:.42em;text-transform:uppercase;color:#ffffff73;display:flex;justify-content:space-between;z-index:2}
.pv.tf-reel .s-hero:before{content:"◂  A";top:26px}
.pv.tf-reel .s-hero:after{content:"2.39 : 1";bottom:26px;justify-content:flex-end}
.pv.tf-reel .hl-overlay .hx{min-height:640px}
.pv.tf-reel .hl-overlay .hx:before{content:"";position:absolute;inset:28px;z-index:1;pointer-events:none;color:#ffffffa6;
  background:var(--corner) 0 0/34px 1.5px,var(--corner) 0 0/1.5px 34px,var(--corner) 100% 0/34px 1.5px,var(--corner) 100% 0/1.5px 34px,
             var(--corner) 0 100%/34px 1.5px,var(--corner) 0 100%/1.5px 34px,var(--corner) 100% 100%/34px 1.5px,var(--corner) 100% 100%/1.5px 34px;background-repeat:no-repeat}
.pv.tf-reel .hl-overlay .hm:after{background:radial-gradient(ellipse 70% 80% at 50% 55%,rgba(0,0,0,.18),rgba(0,0,0,.82) 85%),linear-gradient(0deg,rgba(0,0,0,.55),transparent 40%)}
.pv.tf-reel .hl-overlay .hm>img{filter:saturate(.9) contrast(1.06)}
.pv.tf-reel h1{text-wrap:balance;text-shadow:0 2px 40px rgba(0,0,0,.45)}
.pv.tf-reel .hl-overlay .ey{display:inline-flex;align-items:center;gap:16px;white-space:nowrap}
.pv.tf-reel .hl-overlay .ey:before,.pv.tf-reel .hl-overlay .ey:after{content:"";width:36px;height:1px;background:currentColor;opacity:.6}

/* Numbered title cards for every section heading: — 01 — */
.pv.tf-reel main{counter-reset:reel}
.pv.tf-reel main>.s:not(.s-hero):not(.s-cta) .sh h2:before,.pv.tf-reel main>.s-booking .bk-a h2:before{counter-increment:reel;content:"— " counter(reel,decimal-leading-zero) " —";display:block;font:600 12px/1 var(--bf);letter-spacing:.5em;color:var(--acc);margin:0 0 20px}
.pv.tf-reel h2{text-wrap:balance}
.pv.tf-reel .in{color:var(--mute);font-size:17px}

/* Laurels on the stats: a touch more presence */
.pv.tf-reel .s-stats .w{border-top:1px solid var(--line);border-bottom:1px solid var(--line);padding-top:56px;padding-bottom:56px}

/* Films: the lead film sits in a viewfinder; rail items get a thin frame line */
.pv.tf-reel .vi.big .vt:after,.pv.tf-reel .ti .tim:after{content:"";position:absolute;inset:16px;pointer-events:none;color:#ffffffb3;
  background:var(--corner) 0 0/26px 1.5px,var(--corner) 0 0/1.5px 26px,var(--corner) 100% 0/26px 1.5px,var(--corner) 100% 0/1.5px 26px,
             var(--corner) 0 100%/26px 1.5px,var(--corner) 0 100%/1.5px 26px,var(--corner) 100% 100%/26px 1.5px,var(--corner) 100% 100%/1.5px 26px;background-repeat:no-repeat}
.pv.tf-reel .vt,.pv.tf-reel .tim{position:relative}
.pv.tf-reel .ti .tim:after{inset:10px;opacity:0;transform:scale(1.08);transition:opacity .4s,transform .5s cubic-bezier(.2,.7,.2,1)}
.pv.tf-reel .ti:hover .tim:after{opacity:1;transform:none}
.pv.tf-reel .vi.big .vt img{aspect-ratio:2.39/1;object-fit:cover}
.pv.tf-reel .vi.big .vx{padding-top:18px}
.pv.tf-reel .vi.big .vx p{color:var(--mute);max-width:560px}
.pv.tf-reel .rail .vt{box-shadow:none;outline:1px solid var(--line);outline-offset:3px}
.pv.tf-reel .du{font:500 11px/1 var(--bf);letter-spacing:.14em;background:rgba(0,0,0,.6);border-radius:0;padding:5px 7px}

/* Selected work: wider stills, a quiet grade that warms up on hover */
.pv.tf-reel .tl.c3{gap:44px 28px}
.pv.tf-reel .tl .tim{aspect-ratio:2/1}
.pv.tf-reel .tim>img{filter:saturate(.75) brightness(.92);transition:filter .6s,transform .8s cubic-bezier(.2,.7,.2,1)}
.pv.tf-reel .ti:hover .tim>img{filter:none}
.pv.tf-reel .ti .meta{display:block;letter-spacing:.24em;text-transform:uppercase;font-size:10.5px;color:var(--acc);margin:16px 0 6px}
.pv.tf-reel .ti h3{margin-top:0}
.pv.tf-reel .ti p{color:var(--mute);font-size:15px}

/* Credits: an end-credits crawl that fades in and out at the edges */
.pv.tf-reel .s-list .ls{gap:30px;padding:36px 0;-webkit-mask:linear-gradient(transparent,#000 14%,#000 86%,transparent);mask:linear-gradient(transparent,#000 14%,#000 86%,transparent)}
.pv.tf-reel .lr span{font-size:30px}

/* Praise: festival laurels around each quote (same original laurel drawing as the stats) */
.pv.tf-reel{--laurel:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120' fill='%23000'%3E%3Cellipse cx='29.2' cy='25.8' rx='4.5' ry='10' transform='rotate%28-17 29.2 25.8%29'/%3E%3Cellipse cx='90.8' cy='25.8' rx='4.5' ry='10' transform='rotate%2817 90.8 25.8%29'/%3E%3Cellipse cx='20.6' cy='36.3' rx='4.5' ry='10' transform='rotate%28-34 20.6 36.3%29'/%3E%3Cellipse cx='99.4' cy='36.3' rx='4.5' ry='10' transform='rotate%2834 99.4 36.3%29'/%3E%3Cellipse cx='15.4' cy='48.9' rx='4.5' ry='10' transform='rotate%28-51 15.4 48.9%29'/%3E%3Cellipse cx='104.6' cy='48.9' rx='4.5' ry='10' transform='rotate%2851 104.6 48.9%29'/%3E%3Cellipse cx='14.1' cy='62.4' rx='4.5' ry='10' transform='rotate%28-68 14.1 62.4%29'/%3E%3Cellipse cx='105.9' cy='62.4' rx='4.5' ry='10' transform='rotate%2868 105.9 62.4%29'/%3E%3Cellipse cx='16.8' cy='75.7' rx='4.5' ry='10' transform='rotate%28-85 16.8 75.7%29'/%3E%3Cellipse cx='103.2' cy='75.7' rx='4.5' ry='10' transform='rotate%2885 103.2 75.7%29'/%3E%3Cellipse cx='23.3' cy='87.7' rx='4.5' ry='10' transform='rotate%28-102 23.3 87.7%29'/%3E%3Cellipse cx='96.7' cy='87.7' rx='4.5' ry='10' transform='rotate%28102 96.7 87.7%29'/%3E%3Cellipse cx='33.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28-119 33.0 97.2%29'/%3E%3Cellipse cx='87.0' cy='97.2' rx='4.5' ry='10' transform='rotate%28119 87.0 97.2%29'/%3E%3C/svg%3E")}
.pv.tf-reel .qs{gap:48px}
.pv.tf-reel .qs blockquote{position:relative;padding-top:86px}
.pv.tf-reel .qs blockquote:before{content:"";position:absolute;top:0;left:50%;width:72px;height:72px;margin-left:-36px;background:var(--acc);opacity:.85;-webkit-mask:var(--laurel) center/contain no-repeat;mask:var(--laurel) center/contain no-repeat}
.pv.tf-reel .qs cite{display:inline-block;margin-top:18px;padding-top:14px;border-top:1px solid var(--line)}

/* Stills: a strip of 35 mm film. Sprocket holes top and bottom, orange edge numbers like real film stock. */
.pv.tf-reel .gl{counter-reset:frame;background:#0a0908;padding:40px 22px;gap:10px;position:relative}
.pv.tf-reel .gl:before,.pv.tf-reel .gl:after{content:"";position:absolute;left:0;right:0;height:16px;background:#d8d0c2;opacity:.9;
  -webkit-mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='16'%3E%3Crect x='8' y='3' width='14' height='10' rx='2.5'/%3E%3C/svg%3E") 0 0/30px 16px repeat-x;
  mask:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='16'%3E%3Crect x='8' y='3' width='14' height='10' rx='2.5'/%3E%3C/svg%3E") 0 0/30px 16px repeat-x}
.pv.tf-reel .gl:before{top:12px}.pv.tf-reel .gl:after{bottom:12px}
.pv.tf-reel .gl figure{counter-increment:frame;border-radius:0}
.pv.tf-reel .gl figure:after{content:"▸ " counter(frame) "A";position:absolute;top:8px;right:10px;font:600 10px/1 var(--bf);letter-spacing:.18em;color:#f08a24;text-shadow:0 0 6px rgba(240,138,36,.45)}

/* Screenings (Menu with prices) as a cinema listing: date tickets on the right */
.pv.tf-reel .s-menu .mu-h{font:500 11px/1 var(--bf);letter-spacing:.42em;text-transform:uppercase;color:var(--acc);border-bottom:1px solid var(--line);padding-bottom:14px}
.pv.tf-reel .s-menu .mu-l strong{font:400 26px/1.15 var(--hf)}
.pv.tf-reel .s-menu .mu-d{border-bottom:1px dotted var(--line)}
.pv.tf-reel .s-menu .mu-p{font:600 12px/1 var(--bf);letter-spacing:.16em;text-transform:uppercase;border:1px solid var(--acc);color:var(--acc);padding:8px 10px;white-space:nowrap}
.pv.tf-reel .s-menu .mu-x p{color:var(--mute);font-size:15px}

/* Work with us (Booking): a rate card, like a production sheet */
.pv.tf-reel .s-booking .bk-b{background:transparent;border:1px solid var(--line);border-radius:0;box-shadow:none}
.pv.tf-reel .s-booking .bk-b h3{font:500 11px/1 var(--bf);letter-spacing:.42em;text-transform:uppercase;color:var(--acc)}
.pv.tf-reel .s-booking .bk-i{border-color:var(--line)}
.pv.tf-reel .s-booking .bk-i strong{font:400 22px/1.2 var(--hf)}
.pv.tf-reel .s-booking .bk-i b{font:400 22px/1.2 var(--hf);color:var(--ink);white-space:nowrap}
.pv.tf-reel .s-booking .bk-ar li{border-radius:0;background:transparent;border:1px solid var(--line);letter-spacing:.06em}

/* Closing call to action under a projector beam */
.pv.tf-reel .s-cta{position:relative;overflow:hidden;padding-top:120px;padding-bottom:120px}
.pv.tf-reel .s-cta:before{content:"";position:absolute;inset:-10% -20% 0;height:auto;pointer-events:none;
  background:conic-gradient(from 180deg at 50% -6%,transparent 0 156deg,rgba(255,232,196,.09) 166deg,rgba(255,232,196,.22) 180deg,rgba(255,232,196,.09) 194deg,transparent 204deg),
             radial-gradient(ellipse 26% 20% at 50% 0,rgba(255,232,196,.3),transparent 70%)}
.pv.tf-reel .s-cta .w{position:relative;z-index:1}
.pv.tf-reel .s-cta p{color:#ffffffc7}

@media (prefers-reduced-motion:no-preference){
  .pv.tf-reel:after{animation:reel-grain .9s steps(6) infinite}
  .pv.tf-reel .hl-overlay .hx{animation:reel-open 1.6s cubic-bezier(.7,0,.2,1) both}
  .pv.tf-reel .hl-overlay h1{animation:reel-track 2.2s cubic-bezier(.2,.7,.2,1) .4s both}
  .pv.tf-reel .hl-overlay .ht>:not(h1){animation:reel-fade 1.2s ease 1.1s both}
  .pv.tf-reel .s-cta:before{animation:reel-flicker 5s steps(1) infinite}
  @supports (animation-timeline:view()){
    .pv.tf-reel .s-list .lr{animation:reel-roll linear both;animation-timeline:view();animation-range:entry 0% exit 100%}
    .pv.tf-reel .gl figure>img{animation:reel-pan linear both;animation-timeline:view();animation-range:entry 0% exit 100%}
  }
}
@keyframes reel-grain{0%{background-position:0 0}20%{background-position:-40px 22px}40%{background-position:30px -18px}60%{background-position:-22px -36px}80%{background-position:44px 12px}100%{background-position:0 0}}
@keyframes reel-open{from{clip-path:inset(42% 0)}to{clip-path:inset(0)}}
@keyframes reel-track{from{letter-spacing:.14em;opacity:0;filter:blur(6px)}to{letter-spacing:-.02em;opacity:1;filter:none}}
@keyframes reel-fade{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
@keyframes reel-flicker{0%,100%{opacity:1}31%{opacity:.86}33%{opacity:1}64%{opacity:.92}66%{opacity:1}}
@keyframes reel-roll{from{transform:translateY(60px);opacity:.2}35%,65%{transform:none;opacity:1}to{transform:translateY(-60px);opacity:.2}}
@keyframes reel-pan{from{transform:scale(1.12) translateX(-3%)}to{transform:scale(1.12) translateX(3%)}}

@container (max-width:1023.98px){
  .pv.tf-reel .s-hero:before,.pv.tf-reel .s-hero:after{display:none}
  .pv.tf-reel .hl-overlay .hx:before{inset:16px}
  .pv.tf-reel .s-cta{padding-top:88px;padding-bottom:88px}
}
@container (max-width:599.98px){
  .pv.tf-reel .s-hero{padding:36px 0}
  .pv.tf-reel .hl-overlay .hx{min-height:560px}
  .pv.tf-reel .hl-overlay .ey{white-space:normal;letter-spacing:.24em}
  .pv.tf-reel .hl-overlay .ey:before,.pv.tf-reel .hl-overlay .ey:after{display:none}
  .pv.tf-reel .lr span{font-size:24px}
  .pv.tf-reel .gl{padding:34px 12px;gap:6px}
  .pv.tf-reel .s-menu .mu-l strong,.pv.tf-reel .s-booking .bk-i :is(strong,b){font-size:20px}
  .pv.tf-reel .s-menu .mu-p{font-size:10.5px;padding:6px 8px}
}

/* ======================================================================
   Pitch run 2026-11-15: Trapline, Tannery, Birchbark (trappers, tanners, traditional-skills keepers).
   All art drawn here in CSS/SVG: paw-print trails, pelt tags, a stretched hide on a frame,
   saddle stitching, a maker's stamp, birch-bark texture and cedar leaves.
   ====================================================================== */
.pv:is(.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard){
  --paw:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cellipse cx='20' cy='27' rx='8' ry='7'/%3E%3Cellipse cx='9' cy='16' rx='3.4' ry='4.4' transform='rotate(-20 9 16)'/%3E%3Cellipse cx='16' cy='10' rx='3.4' ry='4.6'/%3E%3Cellipse cx='24' cy='10' rx='3.4' ry='4.6'/%3E%3Cellipse cx='31' cy='16' rx='3.4' ry='4.4' transform='rotate(20 31 16)'/%3E%3C/svg%3E");
  --leaf:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 40'%3E%3Cpath d='M20 2c9 6 13 15 11 24-2 7-7 11-11 12-4-1-9-5-11-12C7 17 11 8 20 2z'/%3E%3Cpath d='M20 10v30' stroke='%23fff' stroke-width='1.6' fill='none'/%3E%3C/svg%3E")}

/* ---------- Trapline: dark bush at dawn, tracks, pelt tags ---------- */
.pv.tf-trapline{--bg:#15120e!important;--ink:#efe6d6!important;--card:#1e1914!important;--soft:#211b15!important;--line:rgba(239,230,214,.14)!important;--mute:#b8ab96!important;--oi:#15120e!important;background:var(--bg);color:var(--ink);font-size:17px}
.pv.tf-trapline :is(h1,h2,h3){letter-spacing:-.01em;line-height:1.02}
.pv.tf-trapline h1{font-size:96px}.pv.tf-trapline h2{font-size:54px}.pv.tf-trapline h3{font-size:24px}
.pv.tf-trapline .hd{background:#15120ef2;border-bottom:1px solid var(--line)}
.pv.tf-trapline :is(.mn,.dr>summary){font-weight:600;letter-spacing:.04em}
.pv.tf-trapline .bt{border-radius:3px;font-weight:700;letter-spacing:.06em;text-transform:uppercase;font-size:14px;padding:16px 26px}
.pv.tf-trapline .bt2{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px currentColor}
.pv.tf-trapline .ey{display:inline-flex;align-items:center;gap:12px;text-transform:uppercase;letter-spacing:.22em;font-weight:700;font-size:12.5px;color:var(--acc)}
.pv.tf-trapline .ey:before{content:"";width:46px;height:18px;background:currentColor;-webkit-mask:var(--paw) 0 4px/14px 14px repeat-x;mask:var(--paw) 0 4px/14px 14px repeat-x;opacity:.9}
.pv.tf-trapline .hl-overlay .hx{min-height:760px;align-items:flex-end;padding-bottom:120px}
.pv.tf-trapline .hl-overlay .hm:after{background:linear-gradient(180deg,rgba(21,18,14,.2),rgba(21,18,14,.35) 40%,rgba(21,18,14,.95)),linear-gradient(90deg,rgba(21,18,14,.75),transparent 70%)}
.pv.tf-trapline .hl-overlay p{font-size:20px;max-width:580px;color:#e9dfcf}
.pv.tf-trapline .s-hero{position:relative}
.pv.tf-trapline .s-hero:after{content:"";position:absolute;left:8%;bottom:34px;width:min(520px,70%);height:40px;z-index:2;background:var(--acc);opacity:.75;transform:rotate(-4deg);
  -webkit-mask:var(--paw) 0 0/22px 22px space no-repeat,var(--paw) 0 0/22px 22px;-webkit-mask-repeat:repeat-x;-webkit-mask-size:22px 22px;-webkit-mask-position:0 0,22px 18px;
  mask:var(--paw) 0 0/22px 22px repeat-x,var(--paw) 22px 18px/22px 22px repeat-x;-webkit-mask:var(--paw) 0 0/22px 22px repeat-x,var(--paw) 22px 18px/22px 22px repeat-x;mask-repeat:space no-repeat,space no-repeat}
.pv.tf-trapline .sh{text-align:left}
.pv.tf-trapline .sh h2:after{content:"";display:block;width:130px;height:18px;margin-top:16px;background:var(--acc);opacity:.7;-webkit-mask:var(--paw) 0 0/16px 16px repeat-x;mask:var(--paw) 0 0/16px 16px repeat-x;-webkit-mask-size:16px 16px;mask-size:16px 16px;-webkit-mask-repeat:space no-repeat;mask-repeat:space no-repeat}
.pv.tf-trapline .s-stats,.pv.tf-trapline .s-stats.bg-default{background:var(--soft)}
.pv.tf-trapline .stt{gap:22px}
.pv.tf-trapline .stt>div{position:relative;background:#e8dcc5;color:#2a2016;border-radius:6px 6px 14px 14px;padding:34px 18px 22px;text-align:center;transform:rotate(var(--r,-1.5deg));box-shadow:0 10px 24px rgba(0,0,0,.35)}
.pv.tf-trapline .stt>div:nth-child(2){--r:1.2deg}.pv.tf-trapline .stt>div:nth-child(3){--r:-.6deg}.pv.tf-trapline .stt>div:nth-child(4){--r:1.8deg}
.pv.tf-trapline .stt>div:before{content:"";position:absolute;top:12px;left:50%;width:12px;height:12px;margin-left:-6px;border-radius:50%;background:var(--soft);box-shadow:0 0 0 3px #b59b74}
.pv.tf-trapline .stt>div:after{content:"";position:absolute;bottom:100%;left:50%;width:1.5px;height:26px;background:#b59b74}
.pv.tf-trapline .stt b{font:700 52px/1 var(--hf);color:#2a2016}
.pv.tf-trapline .stt span{display:block;margin-top:8px;font-size:12px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;color:#6b5a43}
.pv.tf-trapline .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:0 34px;counter-reset:tl}
.pv.tf-trapline .lr{counter-increment:tl;display:block;border-bottom:1px solid var(--line);padding:20px 0 20px 0;position:relative}
.pv.tf-trapline .lr:before{content:"No. " counter(tl,decimal-leading-zero);display:block;font:700 11px/1 var(--bf);letter-spacing:.2em;color:var(--acc);margin-bottom:10px}
.pv.tf-trapline .lr strong{display:block;font:700 22px/1.15 var(--hf);margin-bottom:4px}
.pv.tf-trapline .lr span{color:var(--mute);font-size:15px}
.pv.tf-trapline .s-menu .mu-h{font:700 12px/1 var(--bf);letter-spacing:.24em;text-transform:uppercase;color:var(--acc);padding-bottom:12px;border-bottom:1px solid var(--line)}
.pv.tf-trapline .s-menu .mu-l strong{font:700 21px/1.2 var(--hf)}
.pv.tf-trapline .s-menu .mu-d{border-bottom:2px dotted rgba(239,230,214,.25)}
.pv.tf-trapline .s-menu .mu-p{font:700 22px/1 var(--hf);color:var(--acc)}
.pv.tf-trapline .s-menu .mu-x p{color:var(--mute);font-size:14.5px}
.pv.tf-trapline .ti{background:var(--card);border:1px solid var(--line);border-radius:4px;overflow:hidden}
.pv.tf-trapline .tim{border-radius:0;margin:0 0 16px}
.pv.tf-trapline .tim>img{filter:saturate(.85) contrast(1.05)}
.pv.tf-trapline .ti .tx{padding:0 22px 22px}
.pv.tf-trapline .ti .meta{color:var(--acc);text-transform:uppercase;letter-spacing:.18em;font-size:11px;font-weight:700}
.pv.tf-trapline .ti p{color:var(--mute)}
.pv.tf-trapline .fm{border-radius:4px}
.pv.tf-trapline .fe h3{font-size:48px}
.pv.tf-trapline .bk-b{background:#e8dcc5;color:#2a2016;border-radius:6px;--ink:#2a2016;--mute:#6b5a43;--line:rgba(42,32,22,.18)}
.pv.tf-trapline .bk-b h3{font:700 26px var(--hf)}
.pv.tf-trapline .bk-i b{font:700 18px var(--hf);color:#8a3b12}
.pv.tf-trapline .bk-ar li{border-radius:3px;border-color:var(--line);color:var(--ink)}
.pv.tf-trapline .gl{gap:8px}
.pv.tf-trapline .gl figure{margin:0;position:relative}
.pv.tf-trapline .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover;border-radius:3px;filter:saturate(.85)}
.pv.tf-trapline .gl figcaption{position:absolute;left:10px;bottom:10px;background:#e8dcc5;color:#2a2016;font-weight:700;font-size:11px;letter-spacing:.12em;text-transform:uppercase;padding:5px 9px;border-radius:2px;margin:0}
.pv.tf-trapline .qs blockquote{background:var(--card);border:1px solid var(--line);border-radius:4px;position:relative}
.pv.tf-trapline .qs blockquote:before{content:"";display:block;width:26px;height:26px;margin-bottom:14px;background:var(--acc);-webkit-mask:var(--paw) center/contain no-repeat;mask:var(--paw) center/contain no-repeat}
.pv.tf-trapline .s-cta,.pv.tf-trapline .s-cta.bg-default{background:var(--acc);color:var(--oa)}
.pv.tf-trapline .s-cta h2{font-size:60px;max-width:900px;margin-left:auto;margin-right:auto}
.pv.tf-trapline .s-cta .bt{background:#15120e;color:#efe6d6}
.pv.tf-trapline .wm-i{border-radius:3px;font-family:var(--hf);font-weight:700}
.pv.tf-trapline .wm-n{font:700 24px/1 var(--hf)}


/* ---------- Tannery: buckskin, a hide on a frame, saddle stitching, a maker's stamp ---------- */
.pv.tf-tannery{--card:#fbf6ee;font-size:17.5px}
.pv.tf-tannery :is(h1,h2,h3){line-height:1.04;letter-spacing:-.01em}
.pv.tf-tannery h1{font-size:76px}.pv.tf-tannery h2{font-size:50px}.pv.tf-tannery h3{font-size:25px}
.pv.tf-tannery .hd{border-bottom:2px dashed color-mix(in srgb,var(--acc) 55%,transparent)}
.pv.tf-tannery .bt{border-radius:999px;font-weight:700;padding:15px 28px;outline:1.5px dashed color-mix(in srgb,var(--oa) 60%,transparent);outline-offset:-6px}
.pv.tf-tannery .bt2{outline-color:color-mix(in srgb,var(--ink) 40%,transparent)}
.pv.tf-tannery .ey{display:inline-block;border:2px solid var(--acc);color:var(--acc);border-radius:50%;padding:12px 24px;font-weight:800;font-size:11.5px;letter-spacing:.14em;white-space:nowrap;text-transform:uppercase;transform:rotate(-4deg);box-shadow:inset 0 0 0 4px var(--bg),inset 0 0 0 5px var(--acc)}
.pv.tf-tannery .hl-split .hx{grid-template-columns:1fr 1.05fr;gap:56px;align-items:center}
.pv.tf-tannery .hl-split .hm{position:relative;aspect-ratio:1/1.02;border-radius:0;padding:26px;background:
   linear-gradient(90deg,#7a4f2c 0 22px,transparent 22px calc(100% - 22px),#7a4f2c calc(100% - 22px)),
   linear-gradient(180deg,#8a5a35 0 22px,transparent 22px calc(100% - 22px),#8a5a35 calc(100% - 22px)),
   repeating-linear-gradient(90deg,transparent 0 60px,rgba(0,0,0,.06) 60px 61px);
   box-shadow:0 18px 40px rgba(60,35,15,.25);overflow:visible}
.pv.tf-tannery .hl-split .hm>img{width:100%;height:100%;object-fit:cover;border-radius:0;
   clip-path:polygon(50% 3%,58% 9%,70% 4%,76% 12%,90% 9%,88% 22%,97% 30%,90% 40%,95% 52%,89% 62%,96% 74%,86% 80%,88% 93%,74% 90%,64% 97%,52% 91%,40% 98%,30% 90%,15% 93%,14% 80%,4% 72%,11% 62%,5% 50%,11% 40%,3% 29%,13% 22%,11% 9%,25% 12%,32% 4%,42% 9%)}
.pv.tf-tannery .hl-split .hm:before{content:"";position:absolute;inset:22px;pointer-events:none;z-index:1;
   background:
   repeating-linear-gradient(90deg,transparent 0 46px,rgba(240,230,210,.9) 46px 47.5px) 0 0/100% 30px no-repeat,
   repeating-linear-gradient(90deg,transparent 0 46px,rgba(240,230,210,.9) 46px 47.5px) 0 100%/100% 30px no-repeat,
   repeating-linear-gradient(0deg,transparent 0 46px,rgba(240,230,210,.9) 46px 47.5px) 0 0/30px 100% no-repeat,
   repeating-linear-gradient(0deg,transparent 0 46px,rgba(240,230,210,.9) 46px 47.5px) 100% 0/30px 100% no-repeat}
.pv.tf-tannery .hl-split p{font-size:19px}
.pv.tf-tannery .sh h2:after{content:"";display:block;width:120px;margin:18px auto 0;border-top:2px dashed var(--acc)}
.pv.tf-tannery .sh[style*="left"] h2:after{margin-left:0}
.pv.tf-tannery .s-stats,.pv.tf-tannery .s-stats.bg-default{background:var(--soft)}
.pv.tf-tannery .stt>div{display:grid;place-items:center;align-content:center;aspect-ratio:1;max-width:190px;margin:0 auto;width:100%;border-radius:50%;background:var(--card);box-shadow:inset 0 0 0 3px var(--acc),inset 0 0 0 9px var(--card),inset 0 0 0 10.5px color-mix(in srgb,var(--acc) 60%,transparent)}
.pv.tf-tannery .stt b{font:800 44px/1 var(--hf);color:var(--acc)}
.pv.tf-tannery .stt span{font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;font-weight:700;max-width:120px;text-align:center;margin-top:6px;color:var(--mute)}
.pv.tf-tannery .ls{border:0;display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
.pv.tf-tannery .lr{display:block;background:var(--card);border-radius:14px;padding:22px 24px;outline:1.5px dashed color-mix(in srgb,var(--acc) 55%,transparent);outline-offset:-8px;border:0}
.pv.tf-tannery .lr strong{display:block;font:800 21px/1.2 var(--hf);margin-bottom:4px}
.pv.tf-tannery .lr span{color:var(--mute);font-size:15.5px}
.pv.tf-tannery .s-menu .mu-h{font:800 26px/1.1 var(--hf);color:var(--acc);border-bottom:2px dashed color-mix(in srgb,var(--acc) 50%,transparent);padding-bottom:10px}
.pv.tf-tannery .s-menu .mu-l strong{font:700 20px/1.2 var(--hf)}
.pv.tf-tannery .s-menu .mu-p{font:800 20px/1 var(--hf);color:var(--acc)}
.pv.tf-tannery .ti{background:var(--card);border-radius:18px;overflow:hidden;outline:1.5px dashed color-mix(in srgb,var(--acc) 55%,transparent);outline-offset:-9px}
.pv.tf-tannery .tim{border-radius:0;margin:0 0 14px}
.pv.tf-tannery .ti .tx{padding:2px 24px 26px}
.pv.tf-tannery .ti .meta{color:var(--acc);font-weight:800;letter-spacing:.14em;text-transform:uppercase;font-size:11px}
.pv.tf-tannery .fm{border-radius:18px;outline:1.5px dashed rgba(255,255,255,.7);outline-offset:-12px}
.pv.tf-tannery .fe h3{font-size:46px}
.pv.tf-tannery .bk-b{background:var(--card);border-radius:18px;outline:1.5px dashed color-mix(in srgb,var(--acc) 55%,transparent);outline-offset:-10px;box-shadow:0 14px 34px rgba(60,35,15,.12)}
.pv.tf-tannery .bk-i b{font:800 18px var(--hf);color:var(--acc)}
.pv.tf-tannery .bk-ar li{border-style:dashed}
.pv.tf-tannery .gl{gap:14px}
.pv.tf-tannery .gl figure{margin:0;position:relative}
.pv.tf-tannery .gl figure>:is(img,svg){width:100%;aspect-ratio:4/5;object-fit:cover;border-radius:14px}
.pv.tf-tannery .gl figcaption{text-align:center;font-weight:700;font-size:14px;margin-top:8px}
.pv.tf-tannery .qs blockquote{background:var(--card);border-radius:18px;outline:1.5px dashed color-mix(in srgb,var(--acc) 50%,transparent);outline-offset:-9px}
.pv.tf-tannery .s-cta,.pv.tf-tannery .s-cta.bg-default{background:#3a2516;color:#f5ead8;position:relative}
.pv.tf-tannery .s-cta .w{position:relative;z-index:1}
.pv.tf-tannery .s-cta:before{content:"";position:absolute;inset:16px;border:2px dashed rgba(245,234,216,.35);border-radius:22px;pointer-events:none}
.pv.tf-tannery .s-cta h2{font-size:56px;color:#f5ead8;max-width:860px;margin-left:auto;margin-right:auto}
.pv.tf-tannery .s-cta .bt{background:#f5ead8;color:#3a2516;outline-color:rgba(58,37,22,.4)}
.pv.tf-tannery .wm-i{border-radius:50%;font-family:var(--hf);font-weight:800;box-shadow:inset 0 0 0 2px var(--bg)}
.pv.tf-tannery .wm-n{font:800 25px/1 var(--hf)}

/* ---------- Birchbark: birch bark, cedar leaves, an arched photo, a field journal ---------- */
.pv.tf-birchbark{--birch:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='240' height='140'%3E%3Cg fill='%23332d26' fill-opacity='.55'%3E%3Crect x='12' y='14' width='38' height='2.4' rx='1.2'/%3E%3Crect x='96' y='9' width='22' height='1.8' rx='.9'/%3E%3Crect x='160' y='22' width='52' height='3' rx='1.5'/%3E%3Crect x='40' y='48' width='18' height='1.6' rx='.8'/%3E%3Crect x='118' y='56' width='44' height='2.6' rx='1.3'/%3E%3Crect x='200' y='64' width='26' height='1.8' rx='.9'/%3E%3Crect x='8' y='86' width='58' height='3.2' rx='1.6'/%3E%3Crect x='92' y='98' width='16' height='1.5' rx='.75'/%3E%3Crect x='150' y='104' width='34' height='2.2' rx='1.1'/%3E%3Crect x='60' y='124' width='28' height='2' rx='1'/%3E%3Crect x='206' y='128' width='20' height='1.6' rx='.8'/%3E%3C/g%3E%3Cg fill='%23a58b6a' fill-opacity='.18'%3E%3Crect x='0' y='34' width='240' height='5'/%3E%3Crect x='0' y='112' width='240' height='3'/%3E%3C/g%3E%3C/svg%3E");
  --cedar:#3f6b45;font-size:17.5px}
.pv.tf-birchbark :is(h1,h2,h3){line-height:1.08}
.pv.tf-birchbark h1{font-size:70px;font-weight:600}.pv.tf-birchbark h2{font-size:46px}.pv.tf-birchbark h3{font-size:24px}
.pv.tf-birchbark .hd{border-bottom:0;box-shadow:0 1px 0 var(--line)}
.pv.tf-birchbark .bt{border-radius:6px;font-weight:600;padding:15px 26px}
.pv.tf-birchbark .ey{display:inline-flex;align-items:center;gap:10px;color:var(--cedar);font-weight:700;letter-spacing:.16em;font-size:12.5px;text-transform:uppercase}
.pv.tf-birchbark .ey:before{content:"";width:18px;height:18px;background:var(--cedar);-webkit-mask:var(--leaf) center/contain no-repeat;mask:var(--leaf) center/contain no-repeat;transform:rotate(-30deg)}
.pv.tf-birchbark .s-hero{background:#f8f6f0 var(--birch) 0 0/240px 140px}
.pv.tf-birchbark .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:64px;align-items:center}
.pv.tf-birchbark .hl-split .ht{background:var(--bg);padding:44px 44px 48px;border-radius:10px;box-shadow:0 12px 40px rgba(50,45,38,.12)}
.pv.tf-birchbark .hl-split .hm{aspect-ratio:4/5;border-radius:999px 999px 10px 10px;overflow:hidden;box-shadow:0 0 0 10px var(--bg),0 20px 50px rgba(50,45,38,.22)}
.pv.tf-birchbark .hl-split .hm>img{width:100%;height:100%;object-fit:cover}
.pv.tf-birchbark .sh h2:before{content:"";display:block;width:26px;height:26px;margin:0 0 14px;background:var(--cedar);-webkit-mask:var(--leaf) center/contain no-repeat;mask:var(--leaf) center/contain no-repeat}
.pv.tf-birchbark .sh[style*=center] h2:before{margin:0 auto 14px}
.pv.tf-birchbark .s-stats,.pv.tf-birchbark .s-stats.bg-default{background:#f8f6f0 var(--birch) 60px 20px/240px 140px;color:#26221d}
.pv.tf-birchbark .stt>div{background:rgba(255,255,255,.88);border-radius:10px;padding:26px 18px;box-shadow:0 6px 18px rgba(50,45,38,.08)}
.pv.tf-birchbark .stt b{font:600 50px/1 var(--hf);color:var(--cedar)}
.pv.tf-birchbark .stt span{display:block;margin-top:8px;font-size:13px;letter-spacing:.08em;text-transform:uppercase;color:#5d554b}
.pv.tf-birchbark .ls{border:0;display:grid;grid-template-columns:repeat(2,1fr);gap:4px 56px}
.pv.tf-birchbark .lr{display:grid;grid-template-columns:30px 1fr;gap:2px 12px;border-bottom:1px solid var(--line);padding:18px 0}
.pv.tf-birchbark .lr:before{content:"";grid-row:span 2;width:22px;height:22px;margin-top:3px;background:var(--cedar);-webkit-mask:var(--leaf) center/contain no-repeat;mask:var(--leaf) center/contain no-repeat;transform:rotate(-25deg)}
.pv.tf-birchbark .lr strong{font:600 21px/1.25 var(--hf)}
.pv.tf-birchbark .lr span{color:var(--mute);font-size:15.5px}
.pv.tf-birchbark .s-menu .mu-h{font:600 24px/1.1 var(--hf);color:var(--cedar);border-bottom:1px solid var(--line);padding-bottom:10px}
.pv.tf-birchbark .s-menu .mu-l strong{font:600 20px/1.25 var(--hf)}
.pv.tf-birchbark .s-menu .mu-p{font:600 19px/1 var(--hf);color:var(--cedar)}
.pv.tf-birchbark .ti{background:var(--card);border:1px solid var(--line);border-radius:10px;overflow:hidden}
.pv.tf-birchbark .tim{border-radius:999px 999px 0 0;margin:14px 14px 16px;overflow:hidden}
.pv.tf-birchbark .ti .tx{padding:0 24px 24px}
.pv.tf-birchbark .ti .meta{color:var(--cedar);font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:11px}
.pv.tf-birchbark .fm{border-radius:10px}
.pv.tf-birchbark .fe h3{font-size:44px}
.pv.tf-birchbark .bk-b{background:#f8f6f0 var(--birch) 0 0/240px 140px;border:0;border-radius:10px;color:#26221d;box-shadow:inset 0 0 0 1000px rgba(255,255,255,.78)}
.pv.tf-birchbark .bk-i b{font:600 18px var(--hf);color:var(--cedar)}
.pv.tf-birchbark .gl{grid-auto-flow:dense;gap:12px}
.pv.tf-birchbark .gl figure{margin:0;position:relative}
.pv.tf-birchbark .gl figure:first-child{grid-row:span 2;grid-column:span 2}
.pv.tf-birchbark .gl figure>:is(img,svg){width:100%;height:100%;aspect-ratio:1;object-fit:cover;border-radius:10px}
.pv.tf-birchbark .gl figcaption{position:absolute;left:12px;bottom:12px;background:rgba(255,255,255,.92);color:#26221d;font-size:12.5px;font-weight:600;padding:5px 10px;border-radius:999px;margin:0}
.pv.tf-birchbark .qs blockquote{background:var(--card);border:1px solid var(--line);border-radius:10px;border-top:4px solid var(--cedar)}
.pv.tf-birchbark .s-cta,.pv.tf-birchbark .s-cta.bg-default{background:#f8f6f0 var(--birch) 0 0/240px 140px;color:#26221d}
.pv.tf-birchbark .s-cta .w{background:rgba(255,255,255,.9);border-radius:12px;padding:64px 48px;box-shadow:0 12px 40px rgba(50,45,38,.1);max-width:940px}
.pv.tf-birchbark .s-cta h2{font-size:48px;color:#26221d}
.pv.tf-birchbark .s-cta .bt{background:var(--cedar);color:#fff}
.pv.tf-birchbark .wm-i{border-radius:999px 999px 6px 6px;font-family:var(--hf);font-weight:600;background:var(--cedar);color:#fff}
.pv.tf-birchbark .wm-n{font:600 25px/1 var(--hf)}

@media (prefers-reduced-motion:no-preference){
  .pv.tf-trapline .s-hero:after{animation:tl-walk 2.4s steps(6) both .6s}
  .pv.tf-tannery .hl-split .hm{animation:tn-stretch 1.4s cubic-bezier(.2,.8,.2,1) both}
  .pv.tf-birchbark .hl-split .hm{animation:bb-rise 1.4s cubic-bezier(.2,.8,.2,1) both}
}
@keyframes tl-walk{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes tn-stretch{from{transform:scale(.94) rotate(-1deg)}to{transform:none}}
@keyframes bb-rise{from{transform:translateY(24px)}to{transform:none}}

@container (min-width:600px) and (max-width:1023.98px){
  .pv.tf-trapline h1{font-size:68px}.pv.tf-tannery h1{font-size:56px}.pv.tf-birchbark h1{font-size:52px}
  .pv.tf-trapline .ls{grid-template-columns:1fr 1fr}
  .pv.tf-trapline .stt{grid-template-columns:1fr 1fr;row-gap:44px}
  .pv:is(.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .hl-split .hx{gap:36px}
}
@container (max-width:599.98px){
  .pv.tf-trapline h1{font-size:50px}.pv.tf-trapline h2{font-size:36px}.pv.tf-trapline .s-cta h2{font-size:38px}.pv.tf-trapline .fe h3{font-size:34px}
  .pv.tf-trapline .hl-overlay .hx{min-height:620px;padding-bottom:96px}
  .pv.tf-trapline .stt{grid-template-columns:1fr 1fr;gap:40px 14px}.pv.tf-trapline .stt b{font-size:38px}
  .pv.tf-trapline .ls{grid-template-columns:1fr}
  .pv.tf-trapline .gl{grid-template-columns:1fr 1fr}
  .pv.tf-tannery h1{font-size:44px}.pv.tf-tannery h2{font-size:34px}.pv.tf-tannery .s-cta h2{font-size:36px}.pv.tf-tannery .fe h3{font-size:32px}
  .pv.tf-tannery .hl-split .hx{grid-template-columns:1fr;gap:28px}
  .pv.tf-tannery .ey{white-space:normal;border-radius:22px;padding:9px 16px;font-size:10.5px;letter-spacing:.12em;transform:rotate(-2deg);max-width:100%}
  .pv.tf-tannery .hl-split .ht{min-width:0}
  .pv.tf-tannery .hl-split .hm{padding:18px}
  .pv.tf-tannery .stt{grid-template-columns:1fr 1fr;gap:14px}.pv.tf-tannery .stt b{font-size:32px}
  .pv.tf-tannery .ls{grid-template-columns:1fr}
  .pv.tf-tannery .gl{grid-template-columns:1fr 1fr}
  .pv.tf-birchbark h1{font-size:42px}.pv.tf-birchbark h2{font-size:32px}.pv.tf-birchbark .s-cta h2{font-size:32px}.pv.tf-birchbark .fe h3{font-size:30px}
  .pv.tf-birchbark .hl-split .hx{grid-template-columns:1fr;gap:28px}
  .pv.tf-birchbark .hl-split .ht{padding:28px 22px}
  .pv.tf-birchbark .ls{grid-template-columns:1fr}
  .pv.tf-birchbark .stt{grid-template-columns:1fr 1fr;gap:12px}.pv.tf-birchbark .stt b{font-size:36px}
  .pv.tf-birchbark .gl{grid-template-columns:1fr 1fr}
  .pv.tf-birchbark .s-cta .w{padding:40px 22px}
}
.pv.tf-trapline .ey{white-space:nowrap}
@container (max-width:599.98px){.pv.tf-trapline .ey{white-space:normal}}
/* ======================================================================
   Pitch run 2026-11-15: Gauge, Flowline, Ledger (water savings, plumbing and building-efficiency products).
   Made for a family pitch; the demo business Clearwell Water Savings is invented.
   All art drawn here in CSS/SVG: pressure-gauge dials, a blueprint grid, crop marks, water drops,
   wave edges, receipt edges, a SAVED stamp and statement rules.
   ====================================================================== */
.pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard){
  --drop:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 40 52'%3E%3Cpath d='M20 0C20 0 2 22 2 33a18 18 0 0 0 36 0C38 22 20 0 20 0z'/%3E%3C/svg%3E");
  --wave:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 80' preserveAspectRatio='none'%3E%3Cpath d='M0 40 C150 0 300 0 450 40 S750 80 900 40 S1100 0 1200 30 V80 H0z'/%3E%3C/svg%3E");
  --zig:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 10' preserveAspectRatio='none'%3E%3Cpath d='M0 0H20V0L10 10z'/%3E%3C/svg%3E")}

/* ---------- Gauge: blueprint grid, pressure-gauge dials, a spec sheet ---------- */
.pv.tf-gauge{font-size:17px;--grid:color-mix(in srgb,var(--ink) 9%,transparent)}
.pv.tf-gauge :is(h1,h2,h3){letter-spacing:-.02em;line-height:1.02}
.pv.tf-gauge h1{font-size:76px}.pv.tf-gauge h2{font-size:46px}.pv.tf-gauge h3{font-size:22px}
.pv.tf-gauge :is(.ey,.stt span,.meta,.bk-at,.bk-n,.du,.lr:before,.tl-steps .ti:before,.ct dt){font-family:"IBM Plex Mono",ui-monospace,monospace}
.pv.tf-gauge .hd{border-bottom:1px solid var(--line);background:color-mix(in srgb,var(--bg) 94%,transparent)}
.pv.tf-gauge .bt{border-radius:2px;font-weight:700;padding:16px 24px;letter-spacing:.01em}
.pv.tf-gauge .bt2{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink)}
.pv.tf-gauge .ey{display:inline-flex;align-items:center;gap:10px;font-size:12.5px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;color:var(--acc)}
.pv.tf-gauge .ey:before{content:"";width:12px;height:12px;border-radius:50%;box-shadow:inset 0 0 0 2px currentColor,inset 0 0 0 4px var(--bg),inset 0 0 0 6px currentColor}
.pv.tf-gauge .s-hero{background:var(--bg) linear-gradient(var(--grid) 1px,transparent 1px) 0 0/32px 32px,linear-gradient(90deg,var(--grid) 1px,transparent 1px) 0 0/32px 32px;background-image:linear-gradient(var(--grid) 1px,transparent 1px),linear-gradient(90deg,var(--grid) 1px,transparent 1px);background-size:32px 32px}
.pv.tf-gauge .hl-split .hx{grid-template-columns:1.1fr 1fr;gap:56px;align-items:center;min-height:620px}
.pv.tf-gauge .hl-split .ht p{font-size:19px;max-width:560px}
.pv.tf-gauge .hl-split .hm{position:relative;border-radius:0;padding:14px;border:1px solid var(--line);background:var(--bg)}
.pv.tf-gauge .hl-split .hm>img{aspect-ratio:4/5;object-fit:cover;width:100%;height:auto;display:block}
.pv.tf-gauge .hl-split .hm:before,.pv.tf-gauge .hl-split .hm:after{content:"";position:absolute;width:26px;height:26px;border:2px solid var(--acc);z-index:2}
.pv.tf-gauge .hl-split .hm:before{top:-7px;left:-7px;border-right:0;border-bottom:0}.pv.tf-gauge .hl-split .hm:after{bottom:-7px;right:-7px;border-left:0;border-top:0}
.pv.tf-gauge .hl-overlay .hm:after{background:linear-gradient(90deg,color-mix(in srgb,var(--ink) 88%,transparent),transparent 75%)}
.pv.tf-gauge .sh{text-align:left;border-top:2px solid var(--ink);padding-top:18px}
.pv.tf-gauge .s-stats,.pv.tf-gauge .s-stats.bg-default{background:var(--ink);color:var(--oi);--line:color-mix(in srgb,var(--oi) 22%,transparent)}
.pv.tf-gauge .stt{gap:22px}
.pv.tf-gauge .stt>div{position:relative;padding:118px 12px 4px;text-align:center}
.pv.tf-gauge .stt>div:before{content:"";position:absolute;top:0;left:50%;width:176px;height:88px;margin-left:-88px;border-radius:88px 88px 0 0;
  background:conic-gradient(from -90deg at 50% 100%,var(--acc) 0 var(--p,120deg),color-mix(in srgb,var(--oi) 18%,transparent) var(--p,120deg) 180deg,transparent 180deg);
  -webkit-mask:radial-gradient(circle at 50% 100%,transparent 66px,#000 67px 88px,transparent 89px),repeating-conic-gradient(from -90deg at 50% 100%,#000 0 1.2deg,transparent 1.2deg 9deg);mask:radial-gradient(circle at 50% 100%,transparent 66px,#000 67px 88px,transparent 89px)}
.pv.tf-gauge .stt>div:after{content:"";position:absolute;top:22px;left:50%;width:3px;height:66px;margin-left:-1.5px;background:var(--oi);border-radius:3px;transform-origin:50% 100%;transform:rotate(calc(var(--p,120deg) - 90deg));box-shadow:0 0 0 0 transparent}
.pv.tf-gauge .stt>div:nth-child(1){--p:94deg}.pv.tf-gauge .stt>div:nth-child(2){--p:108deg}.pv.tf-gauge .stt>div:nth-child(3){--p:138deg}.pv.tf-gauge .stt>div:nth-child(4){--p:162deg}
.pv.tf-gauge .stt b{font:800 44px/1 var(--hf);color:var(--oi);position:relative}
.pv.tf-gauge .stt b:before{content:"";position:absolute;left:50%;top:-34px;width:14px;height:14px;margin-left:-7px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 4px var(--ink)}
.pv.tf-gauge .stt span{display:block;margin-top:10px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:color-mix(in srgb,var(--oi) 72%,transparent)}
.pv.tf-gauge .tl-steps{counter-reset:stp;gap:0;border:1px solid var(--line)}
.pv.tf-gauge .tl-steps .ti{padding:62px 24px 26px;border-right:1px solid var(--line);background:var(--card)}
.pv.tf-gauge .tl-steps .ti:last-child{border-right:0}
.pv.tf-gauge .tl-steps .ti:before{content:"STEP " counter(stp,decimal-leading-zero);left:24px;top:24px;width:auto;height:auto;background:none;color:var(--acc);font-size:12px;font-weight:600;letter-spacing:.12em;border-radius:0}
.pv.tf-gauge .tl-steps .ti:after{content:"";position:absolute;top:30px;right:-7px;width:12px;height:12px;border-top:1.5px solid var(--acc);border-right:1.5px solid var(--acc);transform:rotate(45deg);background:var(--card);z-index:2}
.pv.tf-gauge .tl-steps .ti:last-child:after{display:none}
.pv.tf-gauge .tl-cards .ti{position:relative;background:var(--card);border:1px solid var(--line);border-radius:0;padding:12px}
.pv.tf-gauge .tl-cards .tim{border-radius:0;margin:0 0 16px}
.pv.tf-gauge .tl-cards .tim>img{filter:saturate(.8) contrast(1.05)}
.pv.tf-gauge .tl-cards .ti .tx{padding:0 8px 10px}
.pv.tf-gauge .tl-cards .ti .meta{position:absolute;top:24px;left:24px;background:var(--acc);color:var(--oa);font-size:13px;font-weight:600;letter-spacing:.04em;padding:6px 10px;z-index:2}
.pv.tf-gauge .tl-cards .ti b{color:var(--acc)}
.pv.tf-gauge .fm{border-radius:0;outline:1px solid var(--line);outline-offset:10px}
.pv.tf-gauge .fe h3{font-size:42px}
.pv.tf-gauge .ls{border:0;display:grid;grid-template-columns:repeat(2,1fr);gap:0 40px;counter-reset:gg}
.pv.tf-gauge .lr{counter-increment:gg;display:block;border-top:1px solid var(--line);padding:20px 0 20px 58px;position:relative}
.pv.tf-gauge .lr:before{content:counter(gg,decimal-leading-zero);position:absolute;left:0;top:22px;font-size:13px;font-weight:600;color:var(--acc);border:1px solid var(--acc);padding:3px 6px}
.pv.tf-gauge .lr strong{display:block;font:800 21px/1.2 var(--hf);margin-bottom:4px}
.pv.tf-gauge .lr span{color:var(--mute);font-size:15.5px}
.pv.tf-gauge .bk-b{border:1.5px solid var(--ink);border-radius:0;background:var(--card);box-shadow:10px 10px 0 color-mix(in srgb,var(--acc) 22%,transparent)}
.pv.tf-gauge .bk-b h3{background:var(--ink);color:var(--oi);margin:-1px -1px 18px;padding:14px 22px;font-size:15px;letter-spacing:.08em;text-transform:uppercase;font-family:"IBM Plex Mono",monospace}
.pv.tf-gauge .bk-i b{font-family:"IBM Plex Mono",monospace;color:var(--acc)}
.pv.tf-gauge .bk-ar li{border-radius:0;font-family:"IBM Plex Mono",monospace;font-size:13px}
.pv.tf-gauge .vt{border-radius:0}
.pv.tf-gauge .play{border-radius:50%;background:var(--acc);box-shadow:0 0 0 8px color-mix(in srgb,var(--acc) 30%,transparent)}
.pv.tf-gauge .qs blockquote{border-left:3px solid var(--acc);border-radius:0;background:var(--card)}
.pv.tf-gauge .s-cta,.pv.tf-gauge .s-cta.bg-default{background:var(--ink);color:var(--oi);background-image:linear-gradient(color-mix(in srgb,var(--oi) 7%,transparent) 1px,transparent 1px),linear-gradient(90deg,color-mix(in srgb,var(--oi) 7%,transparent) 1px,transparent 1px);background-size:32px 32px}
.pv.tf-gauge .s-cta h2{font-size:54px}
.pv.tf-gauge .wm-i{border-radius:50%;box-shadow:inset 0 0 0 3px var(--bg),0 0 0 2px var(--acc)}
.pv.tf-gauge .wm-n{font:800 22px/1 var(--hf);letter-spacing:-.02em}

/* ---------- Flowline: water opener with a wave edge, drops, flowing sections ---------- */
.pv.tf-flowline{font-size:17.5px;--deep:color-mix(in srgb,var(--ink) 82%,var(--acc))}
.pv.tf-flowline :is(h1,h2,h3){letter-spacing:-.025em;line-height:1.04}
.pv.tf-flowline h1{font-size:84px}.pv.tf-flowline h2{font-size:48px}.pv.tf-flowline h3{font-size:23px}
.pv.tf-flowline .bt{border-radius:999px;font-weight:600;padding:16px 28px;box-shadow:0 10px 24px color-mix(in srgb,var(--acc) 35%,transparent)}
.pv.tf-flowline .bt2{background:color-mix(in srgb,#fff 16%,transparent);color:inherit;box-shadow:inset 0 0 0 1.5px currentColor;backdrop-filter:blur(6px)}
.pv.tf-flowline .ey{display:inline-flex;align-items:center;gap:10px;font-weight:600;font-size:14px;letter-spacing:.02em;color:var(--acc)}
.pv.tf-flowline .ey:before{content:"";width:14px;height:18px;background:currentColor;-webkit-mask:var(--drop) center/contain no-repeat;mask:var(--drop) center/contain no-repeat}
.pv.tf-flowline .s-hero{position:relative}
.pv.tf-flowline .hl-overlay .hx{min-height:720px;align-items:center;padding-bottom:90px}
.pv.tf-flowline .hl-overlay .hm:after{background:linear-gradient(100deg,color-mix(in srgb,var(--deep) 92%,transparent) 10%,color-mix(in srgb,var(--deep) 55%,transparent) 55%,transparent)}
.pv.tf-flowline .hl-overlay :is(h1,p){color:#fff}.pv.tf-flowline .hl-overlay .ey{color:color-mix(in srgb,var(--acc) 45%,#fff)}
.pv.tf-flowline .hl-overlay p{font-size:20px;max-width:600px;opacity:.92}
.pv.tf-flowline .s-hero:after,.pv.tf-flowline .s-cta:before{content:"";position:absolute;left:0;right:0;height:70px;z-index:3;background:var(--bg);-webkit-mask:var(--wave) 0 0/100% 100% no-repeat;mask:var(--wave) 0 0/100% 100% no-repeat}
.pv.tf-flowline .s-hero:after{bottom:-1px}
.pv.tf-flowline .hl-split .hm{border-radius:46% 54% 42% 58%/52% 44% 56% 48%;overflow:hidden}
.pv.tf-flowline .sh{text-align:center;justify-content:center;flex-direction:column;align-items:center;gap:10px}.pv.tf-flowline .in{text-align:center;margin-left:auto;margin-right:auto}
.pv.tf-flowline .stt{gap:20px}
.pv.tf-flowline .stt>div{position:relative;padding:76px 16px 26px;background:var(--card);border-radius:28px;box-shadow:0 14px 40px color-mix(in srgb,var(--ink) 10%,transparent)}
.pv.tf-flowline .stt>div:before{content:"";position:absolute;top:22px;left:50%;width:30px;height:39px;margin-left:-15px;background:linear-gradient(180deg,color-mix(in srgb,var(--acc) 55%,#fff),var(--acc));-webkit-mask:var(--drop) center/contain no-repeat;mask:var(--drop) center/contain no-repeat}
.pv.tf-flowline .stt b{font:700 48px/1 var(--hf);background:linear-gradient(180deg,var(--acc),var(--deep));-webkit-background-clip:text;background-clip:text;color:transparent}
.pv.tf-flowline .stt span{display:block;margin-top:10px;color:var(--mute);font-size:15px}
.pv.tf-flowline .tl-steps{counter-reset:stp;position:relative}
.pv.tf-flowline .tl-steps:before{content:"";position:absolute;left:6%;right:6%;top:24px;height:22px;background:color-mix(in srgb,var(--acc) 40%,transparent);-webkit-mask:var(--wave) 0 0/220px 100% repeat-x;mask:var(--wave) 0 0/220px 100% repeat-x}
.pv.tf-flowline .tl-steps .ti{text-align:center;padding-top:84px}
.pv.tf-flowline .tl-steps .ti:before{left:50%;margin-left:-28px;width:56px;height:56px;background:var(--acc);color:var(--oa);border-radius:50% 50% 50% 0;transform:rotate(-45deg);font-size:0}
.pv.tf-flowline .tl-steps .ti:after{content:counter(stp);position:absolute;left:50%;top:0;width:56px;margin-left:-28px;line-height:56px;text-align:center;color:var(--oa);font:700 22px/56px var(--hf);z-index:2}
.pv.tf-flowline .tl-cards .ti{background:var(--card);border-radius:26px;overflow:hidden;box-shadow:0 14px 40px color-mix(in srgb,var(--ink) 9%,transparent)}
.pv.tf-flowline .tl-cards .tim{border-radius:0;margin:0;position:relative}
.pv.tf-flowline .tl-cards .tim:after{content:"";position:absolute;left:0;right:0;bottom:-1px;height:30px;background:var(--card);-webkit-mask:var(--wave) 0 0/100% 100% no-repeat;mask:var(--wave) 0 0/100% 100% no-repeat}
.pv.tf-flowline .tl-cards .ti .tx{padding:14px 26px 28px}
.pv.tf-flowline .tl-cards .ti .meta{display:inline-block;background:color-mix(in srgb,var(--acc) 14%,transparent);color:var(--acc);font-weight:700;font-size:14px;padding:6px 14px;border-radius:999px;margin-bottom:10px}
.pv.tf-flowline .tl-cards .ti b{color:var(--acc)}
.pv.tf-flowline .fm{border-radius:46% 54% 42% 58%/52% 44% 56% 48%;overflow:hidden}
.pv.tf-flowline .fe h3{font-size:44px}
.pv.tf-flowline .ls{border:0;display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
.pv.tf-flowline .lr{display:block;border:0;background:var(--card);border-radius:22px;padding:26px 24px 24px 66px;position:relative;box-shadow:0 8px 26px color-mix(in srgb,var(--ink) 7%,transparent)}
.pv.tf-flowline .lr:before{content:"";position:absolute;left:26px;top:28px;width:22px;height:29px;background:var(--acc);-webkit-mask:var(--drop) center/contain no-repeat;mask:var(--drop) center/contain no-repeat}
.pv.tf-flowline .lr strong{display:block;font:700 20px/1.2 var(--hf);margin-bottom:6px}
.pv.tf-flowline .lr span{color:var(--mute);font-size:15.5px}
.pv.tf-flowline .bk-b{border-radius:28px;background:linear-gradient(160deg,var(--deep),color-mix(in srgb,var(--acc) 70%,var(--deep)));color:#fff;--ink:#fff;--mute:rgba(255,255,255,.75);--line:rgba(255,255,255,.2);box-shadow:0 20px 50px color-mix(in srgb,var(--acc) 30%,transparent)}
.pv.tf-flowline .bk-b .bt{background:#fff;color:var(--deep)}
.pv.tf-flowline .bk-i b{color:#fff}
.pv.tf-flowline .bk-ar li{border-radius:999px}
.pv.tf-flowline .vt{border-radius:26px}
.pv.tf-flowline .play{background:color-mix(in srgb,var(--acc) 85%,transparent);box-shadow:0 0 0 10px color-mix(in srgb,#fff 35%,transparent)}
.pv.tf-flowline .qs blockquote{background:var(--card);border-radius:26px 26px 26px 4px;box-shadow:0 10px 30px color-mix(in srgb,var(--ink) 8%,transparent)}
.pv.tf-flowline .s-cta,.pv.tf-flowline .s-cta.bg-default{position:relative;background:linear-gradient(160deg,var(--deep),color-mix(in srgb,var(--acc) 75%,var(--deep)));color:#fff;padding-top:120px}
.pv.tf-flowline .s-cta:before{top:-1px;transform:scaleY(-1)}
.pv.tf-flowline .s-cta .bt{background:#fff;color:var(--deep)}
.pv.tf-flowline .s-cta h2{font-size:56px}
.pv.tf-flowline .wm-i{border-radius:50% 50% 50% 0;transform:rotate(-45deg)}
.pv.tf-flowline .wm-i{font-size:0;background:var(--acc)}
.pv.tf-flowline .wm-n{font:700 23px/1 var(--hf);letter-spacing:-.02em}

/* ---------- Ledger: a utility statement, receipts and a SAVED stamp ---------- */
.pv.tf-ledger{font-size:17px;--paper:color-mix(in srgb,var(--bg) 70%,#f7f3e8);--save:#1f7a4d}
.pv.tf-ledger :is(.ey,.stt span,.meta,.bk-at,.bk-n,.bk-i b,.lr:before,.tl-steps .ti:before,.ct dt,.du){font-family:"DM Mono",ui-monospace,monospace}
.pv.tf-ledger :is(h1,h2,h3){letter-spacing:-.01em;line-height:1.05;font-weight:400}
.pv.tf-ledger h1{font-size:80px}.pv.tf-ledger h2{font-size:48px}.pv.tf-ledger h3{font-size:25px}
.pv.tf-ledger .hd{border-bottom:3px double var(--ink)}
.pv.tf-ledger .bt{border-radius:3px;font-weight:600;padding:16px 26px}
.pv.tf-ledger .bt2{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1.5px var(--ink)}
.pv.tf-ledger .ey{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--mute);border-top:1px solid var(--ink);border-bottom:1px solid var(--ink);padding:7px 0;display:inline-block}
.pv.tf-ledger .s-hero{background:var(--paper)}
.pv.tf-ledger .hl-split .hx{grid-template-columns:1.05fr 1fr;gap:60px;align-items:center;min-height:600px}
.pv.tf-ledger .hl-split .ht p{font-size:19px;max-width:560px}
.pv.tf-ledger .hl-split .hm{position:relative;background:#fff;padding:16px 16px 70px;box-shadow:0 18px 50px rgba(0,0,0,.14);transform:rotate(1.6deg)}
.pv.tf-ledger .hl-split .hm>img{aspect-ratio:1/1;object-fit:cover;width:100%;height:auto;display:block}
.pv.tf-ledger .hl-split .hm:after{content:"SAVED";position:absolute;right:26px;bottom:18px;font:700 26px/1 "DM Mono",monospace;letter-spacing:.18em;color:var(--save);border:3px solid var(--save);border-radius:6px;padding:8px 14px;transform:rotate(-8deg);opacity:.85}
.pv.tf-ledger .sh{text-align:left;border-bottom:1px solid var(--ink);padding-bottom:14px}
.pv.tf-ledger .s-stats,.pv.tf-ledger .s-stats.bg-default{background:var(--paper)}
.pv.tf-ledger .stt{gap:0;border-top:3px double var(--ink);border-bottom:3px double var(--ink);text-align:left}
.pv.tf-ledger .stt>div{padding:28px 24px;border-right:1px dashed var(--line)}
.pv.tf-ledger .stt>div:last-child{border-right:0}
.pv.tf-ledger .stt b{font:400 56px/1 var(--hf);color:var(--save)}
.pv.tf-ledger .stt span{display:block;margin-top:12px;font-size:12px;letter-spacing:.06em;text-transform:uppercase;color:var(--mute)}
.pv.tf-ledger .tl-steps{counter-reset:stp;gap:0;border-top:1px solid var(--ink)}
.pv.tf-ledger .tl-steps .ti{padding:58px 22px 22px 0;border-right:1px dashed var(--line);margin-right:22px}
.pv.tf-ledger .tl-steps .ti:last-child{border-right:0}
.pv.tf-ledger .tl-steps .ti:before{content:"Line " counter(stp,decimal-leading-zero);top:20px;left:0;width:auto;height:auto;background:none;color:var(--acc);font-size:12px;letter-spacing:.1em;text-transform:uppercase;border-radius:0}
.pv.tf-ledger .tl-cards .ti{position:relative;background:#fff;color:#1d1d1b;--mute:#5d5a52;border-radius:0;padding:14px 14px 34px;box-shadow:0 10px 30px rgba(0,0,0,.08)}
.pv.tf-ledger .tl-cards .ti:after{content:"";position:absolute;left:0;right:0;bottom:-11px;height:12px;background:#fff;-webkit-mask:var(--zig) 0 0/20px 12px repeat-x;mask:var(--zig) 0 0/20px 12px repeat-x}
.pv.tf-ledger .tl-cards .tim{border-radius:0;margin:0 0 18px;filter:grayscale(.25)}
.pv.tf-ledger .tl-cards .ti .tx{padding:0 8px;border-top:1px dashed #c9c4b6;padding-top:16px}
.pv.tf-ledger .tl-cards .ti .meta{position:absolute;top:30px;right:26px;z-index:2;font-size:15px;font-weight:500;letter-spacing:.1em;text-transform:uppercase;color:var(--save);background:rgba(255,255,255,.88);border:2.5px solid var(--save);border-radius:5px;padding:6px 10px;transform:rotate(-7deg)}
.pv.tf-ledger .tl-cards .ti b{color:var(--save)}
.pv.tf-ledger .fm{border-radius:0;background:#fff;padding:14px;box-shadow:0 14px 40px rgba(0,0,0,.12);transform:rotate(-1.2deg)}
.pv.tf-ledger .fe h3{font-size:44px}
.pv.tf-ledger .ls{border:0;counter-reset:lg;display:grid;grid-template-columns:repeat(2,1fr);gap:0 44px}
.pv.tf-ledger .lr{counter-increment:lg;display:grid;grid-template-columns:44px 1fr;column-gap:8px;border-bottom:1px dashed var(--line);padding:18px 0}
.pv.tf-ledger .lr:before{content:counter(lg,decimal-leading-zero);grid-row:span 2;font-size:13px;color:var(--acc);padding-top:5px}
.pv.tf-ledger .lr strong{font:400 22px/1.2 var(--hf)}
.pv.tf-ledger .lr span{grid-column:2;color:var(--mute);font-size:15.5px}
.pv.tf-ledger .bk-b{background:#fff;color:#1d1d1b;--ink:#1d1d1b;--mute:#5d5a52;--line:#d8d3c6;border-radius:0;border-top:6px solid var(--acc);box-shadow:0 16px 44px rgba(0,0,0,.12);position:relative}
.pv.tf-ledger .bk-b:after{content:"";position:absolute;left:0;right:0;bottom:-11px;height:12px;background:#fff;-webkit-mask:var(--zig) 0 0/20px 12px repeat-x;mask:var(--zig) 0 0/20px 12px repeat-x}
.pv.tf-ledger .bk-b h3{font-size:14px;font-family:"DM Mono",monospace;letter-spacing:.12em;text-transform:uppercase}
.pv.tf-ledger .bk-i{border-bottom:1px dashed var(--line)}
.pv.tf-ledger .bk-i b{color:var(--save)}
.pv.tf-ledger .bk-ar li{border-radius:3px;font-family:"DM Mono",monospace;font-size:13px}
.pv.tf-ledger .vt{border-radius:0}
.pv.tf-ledger .play{background:var(--save)}
.pv.tf-ledger .qs blockquote{background:#fff;color:#1d1d1b;border-radius:0;border-top:3px double #1d1d1b;box-shadow:0 8px 24px rgba(0,0,0,.06)}
.pv.tf-ledger .qs blockquote p{font:400 21px/1.4 var(--hf)}
.pv.tf-ledger .s-cta,.pv.tf-ledger .s-cta.bg-default{background:#16261d;color:#f4efe2}
.pv.tf-ledger .s-cta h2{font-size:58px}
.pv.tf-ledger .s-cta .bt{background:#f4efe2;color:#16261d}
.pv.tf-ledger .wm-i{border-radius:3px;font-family:var(--hf);font-weight:400}
.pv.tf-ledger .wm-n{font:400 26px/1 var(--hf)}
@media (max-width:760px){
  .pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) h1{font-size:44px}
  .pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) h2{font-size:32px}
  .pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) :is(.hl-split .hx){grid-template-columns:1fr;gap:28px;min-height:0}
  .pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) :is(.ls){grid-template-columns:1fr}
  .pv:is(.tf-gauge,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .tl-steps .ti{border-right:0;border-bottom:1px solid var(--line);margin-right:0}
  .pv:is(.tf-gauge,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .tl-steps .ti:after{display:none}
  .pv.tf-flowline .tl-steps:before{display:none}
  .pv.tf-flowline .hl-overlay .hx{min-height:600px}
  .pv.tf-ledger .stt>div{border-right:0;border-bottom:1px dashed var(--line)}
  .pv:is(.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .s-cta h2{font-size:34px}
}

/* a picture-only logo mark beside the business name (wordmark families) */
.pv .wm-pic{display:inline-flex;align-items:center;gap:10px}
.pv .wm-m{height:42px;width:auto;max-width:90px;object-fit:contain;display:block}

/* phones: a long business name or a wide logo image shrinks to fit beside the Menu button instead of pushing the page sideways */
@container (max-width:599.98px){
  .pv:is(.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .hd .lg{flex:0 1 auto;min-width:0}
  .pv:is(.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .hd .lg img{height:auto;max-height:34px;max-width:100%;object-fit:contain}
  .pv:is(.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .wm{min-width:0}
  .pv:is(.tf-trapline,.tf-tannery,.tf-birchbark,.tf-gauge,.tf-flowline,.tf-ledger,.tf-whip,.tf-pourover,.tf-letterboard) .wm-n{white-space:normal;line-height:1.05}
}

/* ======================================================================
   Pitch run (2026-11-15): specialty drink cafés, coffee houses and drive-thrus. Whip, Pourover, Letterboard.
   ====================================================================== */
/* ---------- Whip: specialty drink bar (whipped cream, syrup drips, sprinkles, straw stripes) ---------- */
.pv.tf-whip{font-size:17px}
.pv.tf-whip :is(h1,h2,h3){font-weight:400;letter-spacing:-.01em}
.pv.tf-whip h1{font-size:94px;line-height:.98}
.pv.tf-whip h2{font-size:56px;line-height:1.02}
.pv.tf-whip h3{font-size:25px}
.pv.tf-whip .hd{border-bottom:0;box-shadow:none}
/* syrup drips under the header */
.pv.tf-whip .hd:after{content:"";position:absolute;left:0;right:0;top:100%;height:24px;pointer-events:none;z-index:3;background:
  radial-gradient(9px 20px at 34px 0,var(--acc) 96%,transparent 100%) 0 0/150px 24px repeat-x,
  radial-gradient(7px 12px at 78px 0,var(--acc) 96%,transparent 100%) 0 0/150px 24px repeat-x,
  radial-gradient(6px 17px at 121px 0,var(--acc) 96%,transparent 100%) 0 0/150px 24px repeat-x,
  linear-gradient(var(--acc),var(--acc)) 0 0/100% 6px no-repeat}
.pv.tf-whip :is(.mn,.dr>summary){font-weight:700}
.pv.tf-whip .bt{border-radius:999px;font-weight:800;padding:17px 30px;box-shadow:0 6px 0 color-mix(in srgb,var(--acc) 60%,#000)}
.pv.tf-whip .bt2{background:var(--card);color:var(--ink);box-shadow:inset 0 0 0 2.5px var(--ink),0 6px 0 var(--ink)}
.pv.tf-whip .ey{display:inline-block;font:400 18px var(--hf);letter-spacing:.01em;text-transform:none;color:var(--oa);background:var(--acc);padding:7px 18px 8px;border-radius:999px;transform:rotate(-2deg);box-shadow:3px 3px 0 var(--ink)}
.pv.tf-whip .s-hero{background:
  radial-gradient(circle at 18px 26px,color-mix(in srgb,var(--acc) 60%,transparent) 0 3.2px,transparent 3.8px) 0 0/96px 84px,
  radial-gradient(circle at 66px 58px,#f4c430 0 3.2px,transparent 3.8px) 0 0/96px 84px,
  radial-gradient(circle at 44px 8px,#59b7e0 0 2.8px,transparent 3.4px) 0 0/96px 84px,
  radial-gradient(circle at 86px 30px,#7ac36a 0 2.6px,transparent 3.2px) 0 0/96px 84px,var(--soft);padding-top:24px}
.pv.tf-whip .hl-split .hx{grid-template-columns:1.1fr .9fr;gap:64px;padding-top:84px;padding-bottom:104px;position:relative}
.pv.tf-whip .hl-split .hm{position:relative;z-index:1;aspect-ratio:4/4.8;border-radius:999px 999px 46px 46px;border:10px solid var(--card);box-shadow:0 0 0 3px var(--ink),18px 22px 0 var(--acc)}
/* a striped straw poking out of the cup */
.pv.tf-whip .hl-split .hx:after{content:"";position:absolute;right:15%;top:24px;width:20px;height:190px;border-radius:10px;background:repeating-linear-gradient(-45deg,var(--acc) 0 10px,var(--card) 10px 20px);box-shadow:0 0 0 3px var(--ink);transform:rotate(16deg);z-index:0}
.pv.tf-whip .hl-split p{font-size:20px}
.pv.tf-whip .s-stats.bg-default{background:var(--bg)}
.pv.tf-whip .stt{gap:22px}
.pv.tf-whip .stt>div{background:var(--card);border:3px solid var(--ink);border-radius:999px 999px 26px 26px;padding:44px 16px 30px;box-shadow:7px 7px 0 var(--acc);position:relative}
.pv.tf-whip .stt>div:before{content:"";position:absolute;left:50%;top:-14px;width:22px;height:22px;margin-left:-11px;border-radius:50%;background:var(--acc);box-shadow:0 0 0 3px var(--ink)}
.pv.tf-whip .stt b{font:400 50px/1 var(--hf);color:var(--acc)}
.pv.tf-whip .stt span{display:block;margin-top:8px;font-weight:700;font-size:14px;color:var(--ink)}
.pv.tf-whip .sh h2:after{content:"";display:block;width:96px;height:12px;margin-top:14px;border-radius:6px;background:repeating-linear-gradient(-45deg,var(--acc) 0 8px,transparent 8px 16px);box-shadow:inset 0 0 0 2px var(--acc)}
.pv.tf-whip .al-center .sh h2:after,.pv.tf-whip .sh.c h2:after{margin-left:auto;margin-right:auto}
.pv.tf-whip .mu-g{gap:28px}
.pv.tf-whip .mu-c{background:var(--card);border:3px solid var(--ink);border-radius:30px;padding:46px 30px 26px;position:relative;box-shadow:8px 8px 0 var(--ink);overflow:hidden}
.pv.tf-whip .mu-c:before{content:"";position:absolute;left:0;right:0;top:0;height:16px;background:repeating-linear-gradient(-45deg,var(--acc) 0 12px,var(--card) 12px 24px);border-bottom:3px solid var(--ink)}
.pv.tf-whip .mu-h{font:400 30px/1.05 var(--hf);text-transform:none;letter-spacing:0;color:var(--acc);border-bottom:0;padding-bottom:4px}
.pv.tf-whip .mu-im{border-radius:50%;flex-basis:74px;width:74px;height:74px;border:3px solid var(--ink);box-shadow:3px 3px 0 var(--acc)}
.pv.tf-whip .mu-l strong{font-weight:800;font-size:18px}
.pv.tf-whip .mu-d{border-bottom:2px dotted color-mix(in srgb,var(--acc) 55%,transparent)}
.pv.tf-whip .mu-p{background:var(--acc);color:var(--oa);font:400 16px/1 var(--hf);padding:6px 11px 7px;border-radius:999px;white-space:nowrap}
.pv.tf-whip .ti{background:var(--card);border:3px solid var(--ink);border-radius:30px;overflow:hidden;box-shadow:7px 7px 0 var(--acc);padding:12px}
.pv.tf-whip .ti:nth-child(odd){transform:rotate(-1deg)}.pv.tf-whip .ti:nth-child(even){transform:rotate(1deg)}
.pv.tf-whip .tim{border-radius:22px;margin:0 0 14px;aspect-ratio:4/3.3}
.pv.tf-whip .ti .tx{padding:2px 10px 12px}
.pv.tf-whip .ti .meta{display:inline-block;background:var(--soft);color:var(--ink);font-weight:800;letter-spacing:.04em;padding:4px 10px;border-radius:999px}
.pv.tf-whip .ti b{color:var(--acc)}
.pv.tf-whip .tl-steps .ti:before{border-radius:50%;background:var(--acc);color:var(--oa);font:400 28px/56px var(--hf);box-shadow:0 0 0 3px var(--ink)}
.pv.tf-whip .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:14px}
.pv.tf-whip .lr{background:var(--card);border:3px solid var(--ink);border-radius:999px;padding:16px 28px 16px 64px;position:relative;flex-direction:column;align-items:flex-start;gap:2px}
.pv.tf-whip .lr:before{content:"";position:absolute;left:18px;top:50%;width:30px;height:30px;margin-top:-15px;border-radius:50%;background:radial-gradient(circle at 35% 35%,var(--card) 0 3px,transparent 3.5px),var(--acc);box-shadow:0 0 0 3px var(--ink)}
.pv.tf-whip .lr strong{font:400 22px var(--hf);min-width:0;flex:none}
.pv.tf-whip .lr span{flex:none;color:var(--mute)}
.pv.tf-whip .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-whip .fm{border-radius:999px 999px 40px 40px;aspect-ratio:4/4.7;border:10px solid var(--card);box-shadow:0 0 0 3px var(--ink),-16px 16px 0 var(--acc)}
.pv.tf-whip .fe h3{font-size:52px}
.pv.tf-whip .bk-b{background:var(--card);border:3px solid var(--ink);border-radius:32px;padding:62px 36px 34px;position:relative;box-shadow:10px 10px 0 var(--acc);overflow:hidden}
.pv.tf-whip .bk-b:before{content:"";position:absolute;left:0;right:0;top:0;height:30px;background:radial-gradient(circle at 15px 30px,var(--card) 0 11px,transparent 11.5px) 0 0/30px 30px repeat-x,var(--acc);border-bottom:0}
.pv.tf-whip .bk-b h3{font-size:30px}
.pv.tf-whip .bk-i b{font:400 22px var(--hf);color:var(--acc)}
.pv.tf-whip .bk-ar li{background:var(--card);border:2px solid var(--ink);font-weight:700}
.pv.tf-whip .gl{grid-template-columns:repeat(3,1fr);gap:16px}
.pv.tf-whip .gl figure{margin:0;border:3px solid var(--ink);border-radius:26px;overflow:hidden;background:var(--card)}
.pv.tf-whip .gl figure:nth-child(3n+2){border-radius:999px 999px 26px 26px}
.pv.tf-whip .gl figure>:is(img,svg){width:100%;aspect-ratio:4/4.4;object-fit:cover;border-radius:0}
.pv.tf-whip .gl figcaption{font-weight:800;padding:8px 14px;margin:0}
.pv.tf-whip .qs blockquote{background:var(--card);border:3px solid var(--ink);border-radius:30px 30px 30px 6px;box-shadow:6px 6px 0 var(--acc)}
.pv.tf-whip .qs cite{color:var(--acc);font-weight:800}
.pv.tf-whip .s-cta,.pv.tf-whip .s-cta.bg-default{background:var(--acc);color:var(--oa);position:relative;padding-top:calc(var(--sy,88px) + 30px)}
.pv.tf-whip .s-cta:before{content:"";position:absolute;left:0;right:0;top:0;height:30px;background:
  radial-gradient(12px 26px at 40px 0,var(--bg) 96%,transparent 100%) 0 0/170px 30px repeat-x,
  radial-gradient(9px 15px at 92px 0,var(--bg) 96%,transparent 100%) 0 0/170px 30px repeat-x,
  radial-gradient(8px 22px at 138px 0,var(--bg) 96%,transparent 100%) 0 0/170px 30px repeat-x,
  linear-gradient(var(--bg),var(--bg)) 0 0/100% 8px no-repeat}
.pv.tf-whip .s-cta h2{font-size:66px;color:var(--oa)}
.pv.tf-whip .s-cta .bt{background:var(--card);color:var(--ink);box-shadow:0 6px 0 var(--ink)}
.pv.tf-whip .ft{border-top:6px solid var(--acc)}
.pv.tf-whip .wm-i{border-radius:50%;background:var(--acc);color:var(--oa);font-family:var(--hf);box-shadow:0 0 0 3px var(--ink)}
.pv.tf-whip .wm-n{font:400 27px var(--hf)}

/* ---------- Pourover: coffee house and roaster (kraft paper, coffee rings, origin tags, tasting cards) ---------- */
.pv.tf-pourover{font-size:17px;background:radial-gradient(1100px 600px at 90% -10%,color-mix(in srgb,var(--acc) 9%,transparent),transparent 70%),var(--bg)}
.pv.tf-pourover :is(h1,h2,h3){font-weight:400;letter-spacing:-.015em}
.pv.tf-pourover h1{font-size:112px;line-height:.92}
.pv.tf-pourover h2{font-size:64px;line-height:1}
.pv.tf-pourover h3{font-size:30px;line-height:1.08}
.pv.tf-pourover .hd{border-bottom:1px solid var(--line);box-shadow:none}
.pv.tf-pourover :is(.mn,.dr>summary){font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase}
.pv.tf-pourover .bt{border-radius:2px;font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;padding:19px 28px}
.pv.tf-pourover .bt2{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 1px var(--ink)}
.pv.tf-pourover .ey{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.24em;text-transform:uppercase;color:var(--acc);display:flex;align-items:center;gap:12px}
.pv.tf-pourover .ey:before{content:"";width:34px;height:1px;background:currentColor}
.pv.tf-pourover .hl-split .hx{grid-template-columns:1.15fr .85fr;gap:72px;padding-top:88px;padding-bottom:110px;position:relative;align-items:end}
.pv.tf-pourover .hl-split h1{font-style:italic}
.pv.tf-pourover .hl-split .hm{aspect-ratio:4/5.2;border-radius:2px;position:relative;z-index:1;box-shadow:0 40px 70px -40px rgba(0,0,0,.6)}
/* a coffee-cup ring stamped on the page next to the photo */
.pv.tf-pourover .hl-split .hx:after{content:"";position:absolute;right:calc(40% - 40px);bottom:48px;width:170px;height:170px;border-radius:50%;background:radial-gradient(circle,transparent 0 70px,color-mix(in srgb,var(--acc) 26%,transparent) 71px 76px,color-mix(in srgb,var(--acc) 12%,transparent) 77px 79px,transparent 80px);transform:rotate(-18deg) scaleX(1.04);z-index:2;pointer-events:none}
.pv.tf-pourover .hl-split p{font-size:19px;max-width:520px}
.pv.tf-pourover .s-stats.bg-default{background:transparent}
.pv.tf-pourover .s-stats{border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
.pv.tf-pourover .stt{gap:0}
.pv.tf-pourover .stt>div{border-left:1px solid var(--line);padding:8px 28px;text-align:left}
.pv.tf-pourover .stt>div:first-child{border-left:0}
.pv.tf-pourover .stt b{font:400 66px/1 var(--hf);color:var(--ink);font-style:italic}
.pv.tf-pourover .stt span{display:block;margin-top:10px;font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:var(--mute)}
.pv.tf-pourover .sh h2{font-style:italic}
.pv.tf-pourover .mu-g{gap:28px}
.pv.tf-pourover .mu-c{background:var(--card);border:1px solid var(--line);padding:40px 34px 28px;position:relative;box-shadow:0 30px 50px -40px rgba(0,0,0,.45)}
.pv.tf-pourover .mu-c:after{content:"";position:absolute;right:-26px;top:-30px;width:110px;height:110px;border-radius:50%;background:radial-gradient(circle,transparent 0 44px,color-mix(in srgb,var(--acc) 22%,transparent) 45px 49px,transparent 50px);pointer-events:none}
.pv.tf-pourover .mu-h{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.22em;text-transform:uppercase;color:var(--acc);border-bottom:1px solid var(--line);padding-bottom:14px;margin-bottom:6px}
.pv.tf-pourover .mu-im{border-radius:2px;flex-basis:70px;width:70px;height:70px}
.pv.tf-pourover .mu-l strong{font:400 25px var(--hf)}
.pv.tf-pourover .mu-d{border-bottom:1px dotted var(--line)}
.pv.tf-pourover .mu-p{font:500 14px 'IBM Plex Mono',monospace;color:var(--ink)}
.pv.tf-pourover .mu-x p{font-size:15px}
.pv.tf-pourover .ti{background:transparent}
.pv.tf-pourover .tim{border-radius:2px;aspect-ratio:4/5;margin-bottom:18px}
.pv.tf-pourover .ti h3{font-size:32px}
.pv.tf-pourover .ti .meta{display:inline-block;position:relative;border:1px dashed var(--acc);border-radius:3px;padding:4px 10px 4px 22px;font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--acc);margin-bottom:10px}
.pv.tf-pourover .ti .meta:before{content:"";position:absolute;left:8px;top:50%;width:6px;height:6px;margin-top:-3px;border-radius:50%;box-shadow:inset 0 0 0 1px var(--acc)}
.pv.tf-pourover .ti b{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--acc)}
.pv.tf-pourover .tl-steps .ti:before{border-radius:50%;background:transparent;color:var(--acc);box-shadow:inset 0 0 0 1px var(--acc);font:italic 400 28px/56px var(--hf)}
.pv.tf-pourover .ls{border:0;counter-reset:brew;display:grid;grid-template-columns:1fr 1fr;gap:0 56px}
.pv.tf-pourover .lr{counter-increment:brew;border-bottom:1px solid var(--line);padding:22px 0 22px 64px;position:relative;flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-pourover .lr:before{content:counter(brew,decimal-leading-zero);position:absolute;left:0;top:22px;font:500 13px 'IBM Plex Mono',monospace;letter-spacing:.1em;color:var(--acc)}
.pv.tf-pourover .lr strong{font:400 26px var(--hf);min-width:0;flex:none}
.pv.tf-pourover .lr span{flex:none;color:var(--mute)}
.pv.tf-pourover .fe{position:relative}
.pv.tf-pourover .fe-split{grid-template-columns:1fr 1fr;gap:84px}
.pv.tf-pourover .fm{border-radius:2px;aspect-ratio:4/4.8}
.pv.tf-pourover .fe:after{content:"";position:absolute;left:calc(50% - 150px);top:-40px;width:140px;height:140px;border-radius:50%;background:radial-gradient(circle,transparent 0 57px,color-mix(in srgb,var(--acc) 24%,transparent) 58px 63px,transparent 64px);transform:rotate(20deg);pointer-events:none}
.pv.tf-pourover .fe h3{font-size:58px;font-style:italic}
.pv.tf-pourover .bk-b{background:var(--card);border:1px solid var(--line);border-radius:0;padding:44px 36px 36px;position:relative;box-shadow:0 30px 50px -40px rgba(0,0,0,.5);margin-bottom:16px}
.pv.tf-pourover .bk-b:after{content:"";position:absolute;left:-1px;right:-1px;top:100%;height:14px;background:linear-gradient(135deg,var(--card) 50%,transparent 50%) 0 0/14px 14px repeat-x,linear-gradient(-135deg,var(--card) 50%,transparent 50%) 0 0/14px 14px repeat-x}
.pv.tf-pourover .bk-b h3{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.22em;text-transform:uppercase;color:var(--acc);border-bottom:1px dashed var(--line);padding-bottom:14px}
.pv.tf-pourover .bk-i{border-bottom:1px dashed var(--line)!important}
.pv.tf-pourover .bk-i strong{font:400 22px var(--hf)}
.pv.tf-pourover .bk-i b{font:500 15px 'IBM Plex Mono',monospace;color:var(--ink)}
.pv.tf-pourover .bk-ar li{background:transparent;border:1px solid var(--line);border-radius:2px;font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.08em}
.pv.tf-pourover .bk-n{font:500 12px 'IBM Plex Mono',monospace;letter-spacing:.06em}
.pv.tf-pourover .gl{grid-template-columns:repeat(4,1fr);gap:10px}
.pv.tf-pourover .gl figure{margin:0}
.pv.tf-pourover .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover;border-radius:2px}
.pv.tf-pourover .gl figcaption{font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:var(--mute);padding:10px 0 0;margin:0}
.pv.tf-pourover .qs blockquote{background:transparent;border:0;border-top:1px solid var(--ink);border-radius:0;padding:28px 0 0}
.pv.tf-pourover .qs blockquote p{font:italic 400 27px/1.25 var(--hf)}
.pv.tf-pourover .qs cite{font:500 11px 'IBM Plex Mono',monospace;letter-spacing:.18em;text-transform:uppercase;color:var(--acc)}
.pv.tf-pourover .s-cta,.pv.tf-pourover .s-cta.bg-default{background:var(--ink);color:var(--oi);position:relative;overflow:hidden}
.pv.tf-pourover .s-cta:after{content:"";position:absolute;right:6%;top:50%;width:300px;height:300px;margin-top:-150px;border-radius:50%;background:radial-gradient(circle,transparent 0 124px,color-mix(in srgb,var(--oi) 14%,transparent) 125px 133px,color-mix(in srgb,var(--oi) 6%,transparent) 134px 138px,transparent 139px);pointer-events:none}
.pv.tf-pourover .s-cta h2{font-size:76px;font-style:italic;color:var(--oi)}
.pv.tf-pourover .s-cta .bt{background:var(--acc);color:var(--oa)}
.pv.tf-pourover .ft{border-top:1px solid var(--line)}
.pv.tf-pourover .wm-i{border-radius:50%;background:transparent;color:var(--acc);box-shadow:inset 0 0 0 1.5px var(--acc);font:italic 400 22px var(--hf)}
.pv.tf-pourover .wm-n{font:italic 400 30px var(--hf);letter-spacing:-.01em}

/* ---------- Letterboard: drive-thru and coffee stand (felt letterboard menu, lane stripes, punch card, gift card) ---------- */
.pv.tf-letterboard{font-size:17px}
.pv.tf-letterboard :is(h1,h2,h3){text-transform:uppercase;letter-spacing:.04em;line-height:.95;text-shadow:0 2px 0 rgba(0,0,0,.45)}
.pv.tf-letterboard h1{font-size:144px}
.pv.tf-letterboard h2{font-size:78px}
.pv.tf-letterboard h3{font-size:34px}
.pv.tf-letterboard main>.s.bg-default{background-image:repeating-linear-gradient(0deg,color-mix(in srgb,var(--ink) 5%,transparent) 0 1px,transparent 1px 9px)}
.pv.tf-letterboard .hd{border-bottom:0;box-shadow:0 6px 0 #f2c230}
.pv.tf-letterboard :is(.mn,.dr>summary){text-transform:uppercase;font-weight:700;letter-spacing:.08em;font-size:14px}
.pv.tf-letterboard .bt{border-radius:6px;font:400 22px/1 var(--hf);letter-spacing:.08em;text-transform:uppercase;padding:16px 28px 14px}
.pv.tf-letterboard .bt2{background:transparent;color:var(--ink);box-shadow:inset 0 0 0 2px var(--ink)}
.pv.tf-letterboard .ey{display:inline-block;background:#f2c230;color:#1b1b1b;font:400 20px/1 var(--hf);letter-spacing:.12em;text-transform:uppercase;padding:9px 14px 7px;border-radius:4px;box-shadow:0 0 0 3px #1b1b1b,0 0 0 5px #f2c230}
.pv.tf-letterboard .hl-overlay .hx{min-height:760px;align-items:flex-end;padding-bottom:100px}
.pv.tf-letterboard .hl-overlay .hm:after{background:linear-gradient(0deg,rgba(8,8,10,.94) 6%,rgba(8,8,10,.5) 52%,rgba(8,8,10,.15)),repeating-linear-gradient(0deg,rgba(0,0,0,.2) 0 1px,transparent 1px 9px)}
.pv.tf-letterboard .hl-overlay p{font-size:20px;max-width:620px}
/* drive-thru lane stripes above and below the numbers */
.pv.tf-letterboard .s-stats,.pv.tf-letterboard .s-stats.bg-default{background:repeating-linear-gradient(90deg,#f2c230 0 56px,transparent 56px 96px) 0 0/100% 6px no-repeat,repeating-linear-gradient(90deg,#f2c230 0 56px,transparent 56px 96px) 0 100%/100% 6px no-repeat,color-mix(in srgb,var(--bg) 70%,#000)}
.pv.tf-letterboard .stt{gap:20px}
.pv.tf-letterboard .stt>div{text-align:center;padding:10px}
.pv.tf-letterboard .stt b{font:400 92px/1 var(--hf);color:#f2c230;letter-spacing:.02em}
.pv.tf-letterboard .stt span{display:block;margin-top:8px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;font-size:12px;color:var(--mute)}
/* the menu as a framed felt letterboard */
.pv.tf-letterboard .mu-g{gap:8px 56px;background:repeating-linear-gradient(0deg,rgba(255,255,255,.06) 0 1px,transparent 1px 8px),#141416;border:16px solid #3a2a1c;border-radius:6px;padding:52px 52px 40px;box-shadow:inset 0 0 0 2px rgba(0,0,0,.6),inset 0 10px 30px rgba(0,0,0,.55),0 36px 60px -30px rgba(0,0,0,.8);color:#f4f1ea;--mute:rgba(244,241,234,.65)}
.pv.tf-letterboard .mu-h{font:400 36px/1 var(--hf);letter-spacing:.1em;color:var(--acc);border-bottom:2px dashed rgba(244,241,234,.25);padding-bottom:12px;text-shadow:0 2px 0 rgba(0,0,0,.6)}
.pv.tf-letterboard .mu-im{border-radius:4px;border:3px solid #f4f1ea}
.pv.tf-letterboard .mu-l strong{font:400 27px var(--hf);letter-spacing:.06em;text-transform:uppercase;color:#f4f1ea;text-shadow:0 2px 0 rgba(0,0,0,.6)}
.pv.tf-letterboard .mu-d{border-bottom:3px dotted rgba(244,241,234,.3)}
.pv.tf-letterboard .mu-p{font:400 28px var(--hf);letter-spacing:.04em;color:#f2c230}
.pv.tf-letterboard .mu-x p{color:rgba(244,241,234,.7)}
.pv.tf-letterboard .ti{background:var(--card);padding:14px 14px 4px;border-radius:4px;position:relative;box-shadow:0 26px 40px -26px rgba(0,0,0,.8)}
.pv.tf-letterboard .ti:before{content:"";position:absolute;left:50%;top:-11px;width:84px;height:22px;margin-left:-42px;background:color-mix(in srgb,#f2c230 80%,transparent);transform:rotate(-3deg);z-index:2}
.pv.tf-letterboard .tim{border-radius:2px;margin:0 0 14px}
.pv.tf-letterboard .ti h3{font-size:34px}
.pv.tf-letterboard .ti .meta{color:#f2c230;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
.pv.tf-letterboard .ti b{color:var(--acc);text-transform:uppercase;letter-spacing:.08em;font-size:14px}
.pv.tf-letterboard .tl-steps .ti:before{position:static;display:block;margin:0;width:56px;height:56px;transform:none;border-radius:6px;background:#f2c230;color:#1b1b1b;font:400 34px/58px var(--hf)}
.pv.tf-letterboard .ls{border:0;display:grid;grid-template-columns:1fr 1fr;gap:0 48px}
.pv.tf-letterboard .lr{border-bottom:2px dashed var(--line);padding:18px 0;flex-direction:column;align-items:flex-start;gap:4px}
.pv.tf-letterboard .lr strong{font:400 32px var(--hf);letter-spacing:.05em;text-transform:uppercase;min-width:0;flex:none}
.pv.tf-letterboard .lr strong:before{content:"▸ ";color:#f2c230}
.pv.tf-letterboard .lr span{flex:none;color:var(--mute)}
.pv.tf-letterboard .fe-split{grid-template-columns:1fr 1fr;gap:72px}
.pv.tf-letterboard .fm{border-radius:4px;border:12px solid #3a2a1c;box-shadow:0 36px 60px -30px rgba(0,0,0,.8)}
.pv.tf-letterboard .fe h3{font-size:68px}
/* the loyalty punch card: four stamps punched, the rest waiting */
.pv.tf-letterboard .bk-b{background:var(--ink);color:var(--bg);--mute:color-mix(in srgb,var(--bg) 68%,transparent);--line:color-mix(in srgb,var(--bg) 18%,transparent);border-radius:18px;padding:92px 34px 34px;position:relative;box-shadow:0 36px 60px -30px rgba(0,0,0,.8)}
.pv.tf-letterboard .bk-b:before,.pv.tf-letterboard .bk-b:after{content:"";position:absolute;left:28px;top:28px;height:40px}
.pv.tf-letterboard .bk-b:before{right:28px;background:radial-gradient(circle at 20px 20px,transparent 0 14px,color-mix(in srgb,var(--bg) 45%,transparent) 14.5px 16.5px,transparent 17px) 0 0/48px 40px repeat-x}
.pv.tf-letterboard .bk-b:after{width:192px;background:radial-gradient(circle at 20px 20px,var(--acc) 0 15.5px,transparent 16.5px) 0 0/48px 40px repeat-x}
.pv.tf-letterboard .bk-b h3{color:var(--bg);text-shadow:none;font-size:38px}
.pv.tf-letterboard .bk-i strong{font-weight:800}
.pv.tf-letterboard .bk-i b{font:400 28px var(--hf);color:var(--acc)}
.pv.tf-letterboard .bk-ar li{background:transparent;border:2px solid var(--line);font-weight:700;text-transform:uppercase;letter-spacing:.06em;font-size:13px}
.pv.tf-letterboard .gl{grid-template-columns:repeat(3,1fr);gap:18px}
.pv.tf-letterboard .gl figure{margin:0;background:#f4f1ea;padding:10px 10px 0;border-radius:2px;box-shadow:0 22px 34px -22px rgba(0,0,0,.85)}
.pv.tf-letterboard .gl figure:nth-child(odd){transform:rotate(-1.4deg)}.pv.tf-letterboard .gl figure:nth-child(even){transform:rotate(1.2deg)}
.pv.tf-letterboard .gl figure>:is(img,svg){width:100%;aspect-ratio:1;object-fit:cover;border-radius:0}
.pv.tf-letterboard .gl figcaption{color:#1b1b1b;font:400 20px var(--hf);letter-spacing:.08em;text-transform:uppercase;padding:8px 4px 10px;margin:0;text-align:center}
.pv.tf-letterboard .qs blockquote{background:var(--card);border-left:6px solid #f2c230;border-radius:4px}
.pv.tf-letterboard .qs cite{font:400 20px var(--hf);letter-spacing:.1em;text-transform:uppercase;color:var(--acc)}
/* the call to action as a gift card */
.pv.tf-letterboard .s-cta,.pv.tf-letterboard .s-cta.bg-default{background:transparent}
.pv.tf-letterboard .s-cta .w{max-width:880px;background:linear-gradient(135deg,var(--acc),color-mix(in srgb,var(--acc) 55%,#000));color:var(--oa);border-radius:28px;padding:96px 64px 64px;position:relative;box-shadow:0 40px 70px -34px rgba(0,0,0,.85);overflow:hidden}
.pv.tf-letterboard .s-cta .w:before{content:"";position:absolute;left:64px;top:40px;width:58px;height:44px;border-radius:8px;background:linear-gradient(90deg,transparent 48%,rgba(0,0,0,.25) 48% 52%,transparent 52%),linear-gradient(0deg,transparent 32%,rgba(0,0,0,.25) 32% 36%,transparent 36% 64%,rgba(0,0,0,.25) 64% 68%,transparent 68%),linear-gradient(135deg,#f7dc7c,#c99a2e)}
.pv.tf-letterboard .s-cta .w:after{content:"";position:absolute;right:-90px;bottom:-90px;width:300px;height:300px;border-radius:50%;box-shadow:0 0 0 30px rgba(255,255,255,.08),0 0 0 70px rgba(255,255,255,.05)}
.pv.tf-letterboard .s-cta h2{font-size:84px;color:var(--oa)}
.pv.tf-letterboard .s-cta .bt{background:#f2c230;color:#1b1b1b}
.pv.tf-letterboard .ft{border-top:6px solid #f2c230}
.pv.tf-letterboard .wm-i{border-radius:6px;background:#f2c230;color:#1b1b1b;font-family:var(--hf)}
.pv.tf-letterboard .wm-n{font:400 32px var(--hf);letter-spacing:.06em;text-transform:uppercase}

/* polish after the first screenshots */
.pv.tf-whip .mu-l{display:block}
.pv.tf-whip .mu-d{display:none}
.pv.tf-whip .mu-p{display:inline-block;margin-top:7px}
.pv.tf-whip .mu-im{flex-basis:64px;width:64px;height:64px}
.pv.tf-pourover .gl{grid-template-columns:repeat(3,1fr)}
.pv.tf-pourover .gl figure>:is(img,svg){aspect-ratio:4/3.4}
.pv.tf-pourover .mu-c:after{opacity:.6}
.pv.tf-letterboard .qs blockquote p{font:400 18px/1.55 var(--bf);text-transform:none;letter-spacing:0;text-shadow:none}
.pv.tf-letterboard .bk-b:before{right:auto;width:384px;max-width:calc(100% - 56px)}
.pv.tf-letterboard .ft{background:color-mix(in srgb,var(--bg) 70%,#000);color:var(--ink);--mute:color-mix(in srgb,var(--ink) 65%,transparent)}
.pv.tf-letterboard .ft a{color:var(--ink)}

.pv:is(.tf-whip,.tf-pourover,.tf-letterboard) .mu-d:last-child{visibility:hidden}

/* Whip, Pourover, Letterboard: tablet and phone */
@container (min-width:600px) and (max-width:1023.98px){
.pv.tf-whip h1{font-size:66px}.pv.tf-pourover h1{font-size:80px}.pv.tf-letterboard h1{font-size:100px}
.pv:is(.tf-whip,.tf-pourover) .hl-split .hx{gap:36px}
.pv:is(.tf-whip,.tf-pourover,.tf-letterboard) .ls{grid-template-columns:1fr 1fr}
.pv.tf-pourover .gl{grid-template-columns:repeat(3,1fr)}
}
@container (max-width:599.98px){
.pv.tf-whip h1{font-size:54px}.pv.tf-pourover h1{font-size:62px}.pv.tf-letterboard h1{font-size:82px}
.pv.tf-whip h2{font-size:38px}.pv.tf-pourover h2{font-size:44px}.pv.tf-letterboard h2{font-size:54px}
.pv.tf-whip .s-cta h2{font-size:42px}.pv.tf-pourover .s-cta h2{font-size:50px}.pv.tf-letterboard .s-cta h2{font-size:56px}
.pv.tf-whip .fe h3{font-size:36px}.pv.tf-pourover .fe h3{font-size:42px}.pv.tf-letterboard .fe h3{font-size:50px}
.pv:is(.tf-whip,.tf-pourover,.tf-letterboard) .fe-split{grid-template-columns:1fr;gap:28px}
.pv:is(.tf-whip,.tf-pourover) .hl-split .hx{grid-template-columns:1fr;gap:44px;padding-top:44px;padding-bottom:64px}
.pv.tf-whip .hl-split .hx:after{right:18%;top:auto;bottom:calc(100% - 44px - 1px);display:none}
.pv.tf-whip .hl-split .hm{border-width:7px;box-shadow:0 0 0 3px var(--ink),10px 12px 0 var(--acc)}
.pv.tf-pourover .hl-split .hx:after{display:none}
.pv.tf-whip .stt,.pv.tf-pourover .stt,.pv.tf-letterboard .stt{grid-template-columns:1fr 1fr;gap:14px}
.pv.tf-whip .stt b{font-size:38px}.pv.tf-pourover .stt b{font-size:46px}.pv.tf-letterboard .stt b{font-size:64px}
.pv.tf-pourover .stt>div{border-left:0;border-top:1px solid var(--line);padding:16px 4px}
.pv.tf-whip .mu-c{padding:40px 18px 20px;box-shadow:5px 5px 0 var(--ink)}
.pv.tf-pourover .mu-c{padding:30px 20px 20px}
.pv.tf-letterboard .mu-g{border-width:10px;padding:32px 18px 24px}
.pv.tf-letterboard .mu-l strong{font-size:22px}.pv.tf-letterboard .mu-p{font-size:22px}
.pv:is(.tf-whip,.tf-pourover,.tf-letterboard) .ls{grid-template-columns:1fr}
.pv.tf-whip .lr{border-radius:26px}
.pv:is(.tf-whip,.tf-letterboard) .gl{grid-template-columns:1fr 1fr;gap:12px}
.pv.tf-pourover .gl{grid-template-columns:1fr 1fr}
.pv.tf-letterboard .hl-overlay .hx{min-height:600px;padding-bottom:56px}
.pv.tf-letterboard .s-cta .w{padding:88px 24px 40px;border-radius:20px}
.pv.tf-letterboard .s-cta .w:before{left:24px;top:28px}
.pv.tf-whip .ti:nth-child(n){transform:none}
.pv.tf-letterboard .bk-b:before{width:288px}
}
`,J=`modulepreload`,Y=function(e,t){return new URL(e,t).href},X={},ye=function(e){return e.pathname.endsWith(`.css`)},be=function(e,t,n){if(t in e)return e[t];let r=n();if(!r){e[t]=void 0;return}let i=r.then(()=>{e[t]=void 0},n=>{throw e[t]=void 0,n});return e[t]=i,i},xe=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e,i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}function s(e){return import.meta.resolve?new URL(import.meta.resolve(e)):new URL(e,import.meta.url)}r=o(t.map(t=>{t=Y(t,n);let r=s(t),i=ye(r);return be(X,r.href,()=>{if(e===void 0){e={all:new Set,styles:new Set};let t=document.getElementsByTagName(`link`);for(let n=t.length-1;n>=0;n--){let r=t[n];e.all.add(r.href),r.rel===`stylesheet`&&e.styles.add(r.href)}}if((i?e.styles:e.all).has(r.href))return;let t=document.createElement(`link`);if(t.rel=i?`stylesheet`:J,i||(t.as=`script`),t.crossOrigin=``,t.href=r.href,a&&t.setAttribute(`nonce`,a),document.head.appendChild(t),i)return new Promise((e,n)=>{let i=a=>{t.removeEventListener(`load`,i),t.removeEventListener(`error`,i),a.type===`error`?n(Error(`Unable to preload CSS for ${r}`)):e(a)};t.addEventListener(`load`,i),t.addEventListener(`error`,i)})})}).filter(e=>e!==void 0))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Z=null,Q=null;function Se(){return Z?Promise.resolve(Z):xe(()=>import(`./gfonts-CkimgZd4.js`).then(e=>(Z=e.default,Q={},Z.forEach(e=>{Q[e[0]]=e}),Z)),[],import.meta.url)}var Ce={s:`Sans serif`,r:`Serif`,d:`Display`,h:`Handwriting`,m:`Monospace`};function we(e){return Q&&Q[e]}function Te(e,t){return e.reduce((e,n)=>Math.abs(n-t)<Math.abs(e-t)?n:e,e[0])}var Ee={},De={},Oe={},ke={};function Ae(e){return Ee[e]||(Ee[e]=fetch(e).then(e=>{if(!e.ok)throw Error(`font file`);return e.blob()}).then(e=>new Promise(t=>{let n=new FileReader;n.onload=()=>t(n.result),n.readAsDataURL(e)})))}function je(e,t,n){return`https://fonts.googleapis.com/css2?family=`+encodeURIComponent(e).replace(/%20/g,`+`)+`:wght@`+t.join(`;`)+`&display=block`+(n?`&text=`+encodeURIComponent(n):``)}function Me(e,t){let n=e+`:`+t.join(`,`);return De[n]||(De[n]=fetch(je(e,t)).then(e=>{if(!e.ok)throw Error(`font css`);return e.text()}).then(e=>{let n=e.split(/(?=\/\* [\w-]+ \*\/)/).filter(e=>/@font-face/.test(e)),r=n.filter(e=>/^\/\* latin \*\//.test(e));return r.length||(r=n.slice(0,t.length)),Promise.all(r.map(e=>{let t=/url\((https:[^)]+)\)/.exec(e);return t?Ae(t[1]).then(n=>e.replace(t[1],n)).catch(()=>``):e}))}).then(e=>e.join(`
`)).catch(()=>``)),De[n]}async function Ne(e){if(!e)return``;await Se();let t=await Promise.all(e.split(`|`).map(e=>{let t=e.lastIndexOf(`:`),n=e.slice(0,t),r=Q[n];if(!r)return null;let i=[...new Set(e.slice(t+1).split(`,`).map(e=>Te(r[2],+e)))].sort((e,t)=>e-t);return Me(n,i).then(e=>({fam:n,ws:i,css:e}))})),n=``;for(let e of t)if(e&&e.css&&(n+=e.css+`
`,!Oe[e.css])){let t=document.createElement(`style`);t.dataset.gf=e.fam,t.textContent=e.css,document.head.appendChild(t),Oe[e.css]=1}return await Promise.all(t.filter(e=>e&&e.css).flatMap(e=>e.ws.map(t=>document.fonts.load(t+` 16px "`+e.fam+`"`).catch(()=>null)))),n}var Pe=e=>`bake-preview `+e;function Fe(e){if(ke[e]||!Q||!Q[e])return;ke[e]=1;let t=Q[e];fetch(je(e,[Te(t[2],400)],e+` Aa0123`)).then(e=>e.ok?e.text():``).then(t=>{if(!t)return;let n=document.createElement(`style`);n.dataset.gfPreview=e,n.textContent=t.replace(/font-family:\s*'[^']*'/g,`font-family:'`+Pe(e).replace(/'/g,``)+`'`),document.head.appendChild(n)}).catch(()=>{ke[e]=0})}var Ie=(function(){var e=null,t={},n={},r=[];function i(){return e||=Promise.resolve(ve),e}function a(e){return/^data:/.test(e)?Promise.resolve(e):(t[e]||(t[e]=fetch(e).then(function(e){if(!e.ok)throw 0;return e.blob()}).then(function(e){return new Promise(function(t){var n=new FileReader;n.onload=function(){t(n.result)},n.onerror=function(){t(``)},n.readAsDataURL(e)})}).catch(function(){return``})),t[e])}function o(e,t){return n[e]=t,r.push(e),r.length>80&&delete n[r.shift()],t}var s={section:0,item:1,text:2,image:2};function c(e,t,n){var r=e.getBoundingClientRect(),i=[],a={};function o(e){var i=e.getBoundingClientRect(),a=Math.max(0,i.left-r.left),o=Math.max(0,i.top-r.top),s=Math.min(t,i.right-r.left),c=Math.min(n,i.bottom-r.top);return s-a>=2&&c-o>=2?{x:Math.round(a),y:Math.round(o),width:Math.round(s-a),height:Math.round(c-o)}:null}function c(e,t,n,r,s){var c=o(e);if(c){var l=n.dataset.sec+(r?`:`+r.dataset.ii:``)+(s?`:`+s:``)+(t==`item`?`:item`:``);a[l]=(a[l]||0)+1,a[l]>1&&(l+=`:`+a[l]),i.push({id:l,type:t,sectionIndex:+n.dataset.si,x:c.x,y:c.y,width:c.width,height:c.height,sectionId:n.dataset.sec,sectionType:n.dataset.type,itemIndex:r?+r.dataset.ii:null,field:s||null})}}Array.prototype.forEach.call(e.querySelectorAll(`[data-sec]`),function(e){c(e,`section`,e),Array.prototype.forEach.call(e.querySelectorAll(`[data-ii]`),function(t){c(t,`item`,e,t)}),Array.prototype.forEach.call(e.querySelectorAll(`[data-fk]`),function(t){var n=t.closest(`[data-ii]`);n&&!e.contains(n)&&(n=null),c(t,/^(img|svg)$/i.test(t.tagName)?`image`:`text`,e,n,t.dataset.fk)})}),i.sort(function(e,t){return s[e.type]-s[t.type]});var l=[];return Array.prototype.forEach.call(e.querySelectorAll(`a[href]`),function(e){var t=o(e),n=e.getAttribute(`href`);t&&n&&n!=`#`&&l.push({x:t.x,y:t.y,width:t.width,height:t.height,href:n,label:(e.textContent||``).trim().slice(0,80)})}),{width:t,height:n,boxes:i,links:l}}async function l(e,t,r){r||={};var s=t+`|`+(r.maxH||0)+`|`+(r.scale||1)+`|`+e;if(n[s])return n[s];var l=await i(),u=/data-gf="([^"]*)"/.exec(e);u&&(l=await Ne(u[1].replace(/&amp;/g,`&`))+l);var d=document.createElement(`div`);d.className=`cq`,d.style.cssText=`position:absolute;left:-100000px;top:0;width:`+t+`px`,d.innerHTML=e,document.body.appendChild(d);var f=Array.prototype.slice.call(d.querySelectorAll(`img`));f.forEach(function(e){e.removeAttribute(`loading`)}),await Promise.all(f.map(function(e){return a(e.getAttribute(`src`)).then(function(t){t?e.setAttribute(`src`,t):e.removeAttribute(`src`)})})),await Promise.all(f.map(function(e){return Promise.race([e.decode?e.decode().catch(function(){}):null,new Promise(function(e){setTimeout(e,4e3)})])}));var p=d.scrollHeight,m=Math.min(p,r.maxH||p,3e4),h=c(d,t,m),g=h.boxes.filter(function(e){return e.type==`section`}).map(function(e){return{id:e.sectionId,y:e.y,h:e.height}});d.style.cssText=`width:`+t+`px`;var _=new XMLSerializer().serializeToString(d);d.remove();var v=`<svg xmlns="http://www.w3.org/2000/svg" width="`+t+`" height="`+m+`"><foreignObject width="100%" height="100%"><div xmlns="http://www.w3.org/1999/xhtml"><style>`+l.replace(/</g,`&lt;`)+`</style>`+_+`</div></foreignObject></svg>`,y=new Image;y.src=`data:image/svg+xml;charset=utf-8,`+encodeURIComponent(v),await y.decode();var b=r.scale||1,x=document.createElement(`canvas`);x.width=Math.round(t*b),x.height=Math.round(m*b);var S=x.getContext(`2d`);return S.scale(b,b),S.drawImage(y,0,0),o(s,{url:await new Promise(function(e){x.toBlob(function(t){e(URL.createObjectURL(t))},r.type||`image/png`,.9)}),w:t,h:m,full:p,secs:g,map:h})}return{take:l}})(),Le=e=>JSON.parse(JSON.stringify(e)),Re=(e,t)=>{if(e=String(e||``).trim(),/^(mailto:|tel:|sms:)/i.test(e))return!0;if(!/^https?:\/\//i.test(e))return!1;let n=e=>{try{return new URL(e).hostname.replace(/^www\./,``)}catch{return``}};return!t||n(e)!=n(t)},ze=e=>e.reduce((e,t)=>e.concat(t.children&&t.children.length?t.children:[t]),[]),Be=e=>String(e||``).replace(/\s+/g,` `).trim(),Ve=e=>{e=Be(e);let t=/^(.{20,160}?[.!?])(\s|$)/.exec(e);return t?t[1]:e.slice(0,160)};function He(e,t={}){if(!e||!e.pages||!e.pages.length)return e;let n=Le(e),r=n.pages[0].sections||[],i=e.source&&e.source.url,a=ze(n.menu&&n.menu.items||[]).filter(e=>Be(e.label)&&!Re(e.href,i));if(!a.length)return e;let o=e=>r.filter(t=>t.type==e)[0],s=o(`cta`),c=o(`contact`),l={},u=0;n.pages.forEach(e=>{l[Be(e.name).toLowerCase()]=1});for(let i of a.slice(0,t.max||12)){let t=Be(i.label),a=t.toLowerCase();if(l[a]){a!=`home`&&!/^https?:/i.test(i.href||``)&&(i.href=`#`);continue}l[a]=1,u++;let o=/\b(contact|find us|reach|location|directions|hours|visit)\b/i.test(t)&&c?c:q.matchSection(e,r,t);o&&(o.type==`hero`||o.type==`pagehead`)&&(o=null);let d=[];o&&d.push(o);let f=o&&q.matchSection(e,r.filter(e=>e!==o),t);f&&f!==s&&f!==c&&f.type!=`hero`&&d.push(f);let p=o===c?s:s||(o===c?null:c);p&&!d.includes(p)&&d.push(p),!o&&c&&!d.includes(c)&&d.push(c);let m=o?o.text||o.headline||o.items&&o.items[0]&&o.items[0].text:``,h=`x`+u+`-`,g={id:`pg-`+u+`-`+a.replace(/[^a-z0-9]+/g,`-`).slice(0,24),name:t,url:/^https?:/i.test(i.href||``)?i.href:``,status:`new`,sections:[{id:h+`head`,type:`pagehead`,title:t,text:Ve(m)||e.biz&&e.biz.desc||``}].concat(d.map((e,t)=>Object.assign(Le(e),{id:h+t+`-`+e.id})))};n.pages.push(g),i.href=`#`}if(!t.enrich)return n;let d=e=>(e.text||``).length+(e.items||[]).reduce((e,t)=>e+(t.title||``).length+(t.text||``).length,0);return n.pages.slice(1).forEach((t,n)=>{let i=t.sections||=[],a=`y`+n+`-`;if(i.reduce((e,t)=>e+d(t),0)<300){let n=q.matchSection(e,r.filter(e=>e!==s&&e!==c),t.name);n&&n.type!=`hero`&&n.type!=`pagehead`&&!i.some(e=>e.type==n.type&&e.title==n.title)&&i.push(Object.assign(Le(n),{id:a+`m-`+n.id}))}if(!i.some(e=>/^(cta|contact|booking)$/.test(e.type))){let e=s||c;e&&i.push(Object.assign(Le(e),{id:a+`e-`+e.id}))}}),n}var $=e=>String(e??``).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]);function Ue(e){let t=/data-gf="([^"]*)"/.exec(e);if(!t)return``;let n=t[1].replace(/&amp;/g,`&`).split(`|`).filter(Boolean).map(e=>{let[t,n]=e.split(`:`),r=(n||`400`).split(`,`).map(Number).sort((e,t)=>e-t);return`family=`+encodeURIComponent(t).replace(/%20/g,`+`)+`:wght@`+r.join(`;`)});return n.length?`https://fonts.googleapis.com/css2?`+n.join(`&`)+`&display=swap`:``}function We(e,t){return t==0?`index`:(String(e.name||`page`).toLowerCase().normalize(`NFKD`).replace(/[^\w\s-]/g,``).trim().replace(/[\s_]+/g,`-`).replace(/-+/g,`-`)||`page`)+``}function Ge(e){let t={},n=[];return e.pages.forEach((e,r)=>{let i=We(e,r),a=2;for(;t[i];)i=We(e,r)+`-`+a++;t[i]=1,n.push({id:e.id,file:i+`.html`,url:e.url||``,name:e.name})}),n}function Ke(e,t){let n=e=>String(e||``).replace(/^https?:\/\/(www\.)?/i,``).replace(/[#?].*$/,``).replace(/\/+$/,``).toLowerCase(),r={};t.forEach(e=>{e.url&&(r[n(e.url)]=e.file)});let i=t[0],a={};return t.forEach(e=>{a[String(e.name||``).trim().toLowerCase()]=e.file}),e=e.replace(/<a([^>]*?)href="#"([^>]*)>([^<]*)<\/a>/g,(e,t,n,r)=>{let i=a[r.replace(/&amp;/g,`&`).trim().toLowerCase()];return i?`<a`+t+`href="`+i+`"`+n+`>`+r+`</a>`:e}),e=e.replace(/href="#@([^"]*)"/g,(e,t)=>{let n=a[decodeURIComponent(t)];return n?`href="`+n+`"`:e}),t.length>1&&(e=e.replace(/class="lg" href="#top"/g,`class="lg" href="index.html"`)),e.replace(/href="([^"]*)"/g,(e,t)=>{let a=t.replace(/&amp;/g,`&`);return r[n(a)]?`href="`+r[n(a)]+`"`:i&&(a==`/`||i.url&&n(a)==n(i.url))?`href="index.html"`:e})}function qe(e,t,n={}){let r=q.page(e,t,{pageId:n.pageId});n.map&&(r=Ke(r,n.map));let i=e.pages.filter(e=>e.id==n.pageId)[0]||e.pages[0]||{},a=n.title||(i.name&&i.name!=`Home`?i.name+` | `:``)+(e.biz.name||`My site`),o=Ue(r);return`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>`+$(a)+`</title>
`+(e.biz.desc?`<meta name="description" content="`+$(e.biz.desc)+`">
`:``)+`<meta name="generator" content="BAKE Studio (bakeaweb.com)">
`+(o?`<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="`+$(o)+`">
`:``)+`<style>
body{margin:0}
`+ve+`
</style>
</head>
<body>
<div class="cq">`+r+`</div>
</body>
</html>
`}function Je(e,t){let n=Ge(e);return n.map(r=>({path:r.file,content:qe(e,t,{pageId:r.id,map:n})}))}async function Ye(e,t,n={}){let r=Ge(e),i=r.filter(e=>e.id==n.pageId)[0]||r[0],a=Ke(q.page(e,t,{pageId:i.id}),r),o=[[`desktop`,1280],[`phone`,390]],s=[],c=[];for(let[t,n]of o){let r=await Ie.take(a,n,{scale:t==`phone`?2:1,type:`image/webp`}),o=await(await fetch(r.url)).blob(),l=i.file.replace(/\.html$/,``)+`-`+t+`.webp`;s.push({path:l,blob:o});let u=(e,t)=>(e/t*100).toFixed(3)+`%`,d=(r.map.links||[]).map(e=>`<a href="`+$(e.href)+`" style="left:`+u(e.x,r.w)+`;top:`+u(e.y,r.h)+`;width:`+u(e.width,r.w)+`;height:`+u(e.height,r.h)+`"`+(e.label?` aria-label="`+$(e.label)+`"`:``)+`></a>`).join(``);c.push(`<div class="pic pic-`+t+`" style="max-width:`+n+`px"><img src="`+l+`" alt="`+$((i.name||`Page`)+` of `+(e.biz.name||`this site`))+`" width="`+n+`" height="`+r.h+`">`+d+`</div>`)}return{html:`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>`+$(n.title||e.biz.name||`Portfolio`)+`</title>
<style>body{margin:0;background:#f4f4f2}.pic{position:relative;margin:0 auto}.pic img{display:block;width:100%;height:auto}.pic a{position:absolute;display:block}.pic a:hover,.pic a:focus{outline:2px solid rgba(37,99,235,.7);outline-offset:1px;border-radius:4px}.pic-phone{display:none}@media (max-width:700px){.pic-desktop{display:none}.pic-phone{display:block}}</style>
</head>
<body>
`+c.join(`
`)+`
</body>
</html>
`,images:s}}function Xe(e,t){let n=e&&e.project,r=t||{},i=n?(n.pages||[]).length>1||(r.pages||[]).length<2?n:Object.assign({},n,{pages:[n.pages[0]].concat(r.pages.slice(1))}):r;try{i&&i.menu&&i.pages&&(i=He(i,{enrich:!0}))}catch{}return i}function Ze(e,t,n){let r=String(n||``).trim().toLowerCase(),i=Math.max(0,e.pages.findIndex(e=>String(e.name||``).trim().toLowerCase()==r)),a=qe(e,t,{pageId:e.pages[i].id});return i>0&&(a=a.replace(/class="lg" href="#top"/g,`class="lg" href="#@home"`)),a}var Qe={html:qe,previewPage:Ze,pitchProject:Xe,files:Je,shotSite:Ye,fontLink:Ue,slug:We},$e=`2026-11-15`,et={framer:{name:`Framer Marketplace survey (Schmalbach, Nov 4, 2026)`,url:`https://www.vincentschmalbach.com/are-framer-templates-free/`,says:`57 of the top 100 trending templates were free. Of the first 224 paid ones, half cost US$69 or less, a quarter US$100 or more, and none over US$149.`},webflow:{name:`Webflow Marketplace, Business templates (FlowRadar listing)`,url:`https://www.flowradar.com/templates-categories/business/3`,says:`Business templates are listed from free to US$149, most at US$49 or US$79.`},shift8:{name:`Shift8, Pricing web design in Toronto (2026)`,url:`https://shift8web.ca/?p=9533`,says:`Brochure sites (1–5 pages) C$3,000–7,500; small business sites (6–20 pages) C$7,500–20,000.`},parachute:{name:`Parachute Design, Canadian agency budgets (2026)`,url:`https://parachutedesign.ca/blog/how-to-choose-a-web-design-agency/`,says:`Simple brochure site with custom design: C$10,000–30,000. Low tier, template-based: C$1,000–5,000.`},harmonic:{name:`Harmonic Design, website cost in Hamilton (July 2026)`,url:`https://harmonicdesign.ca/?p=868`,says:`A professional custom website for a small to medium business: C$4,000–15,000.`}},tt=[{min:90,tpl:{lo:129,hi:149,what:`the most expensive templates on Framer and Webflow`,src:[`framer`,`webflow`]},agency:{lo:1e4,hi:3e4,what:`a custom-designed brochure site from a Canadian agency`,src:[`parachute`]}},{min:85,tpl:{lo:100,hi:149,what:`a top-quarter Framer or Webflow template`,src:[`framer`,`webflow`]},agency:{lo:4e3,hi:15e3,what:`a custom small-business site from an Ontario agency`,src:[`harmonic`]}},{min:75,tpl:{lo:49,hi:79,what:`a typical paid Framer or Webflow template`,src:[`framer`,`webflow`]},agency:{lo:3e3,hi:7500,what:`a 1–5 page brochure site from a Toronto agency`,src:[`shift8`]}},{min:0,tpl:{lo:0,hi:49,what:`a free or low-cost Framer or Webflow template`,src:[`framer`,`webflow`]},agency:{lo:1e3,hi:5e3,what:`a basic template-based site from a Canadian agency`,src:[`parachute`]}}],nt=e=>Number(e).toLocaleString(`en-US`),rt=(e,t)=>(e?`US$`+nt(e):`Free`)+`–`+nt(t),it=(e,t)=>`C$`+nt(e)+`–`+nt(t);function at(e,t){if(t==null)return null;let n=tt.find(t=>(+e||0)>=t.min),r=[...new Set(n.tpl.src.concat(n.agency.src))];return{tpl:{...n.tpl,label:rt(n.tpl.lo,n.tpl.hi)},agency:{...n.agency,label:it(n.agency.lo,n.agency.hi)},below:{tpl:t<=n.tpl.hi,agency:t<=n.agency.lo},sources:r.map(e=>et[e])}}function ot(e,t,n,{forProspect:r}={}){let i=at(e,t);if(!i)return``;let a=e=>String(e).replace(/[&<>"]/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`})[e]),o=t?n(t)+` one time`:`Free`;return`<div class="cmp"><div class="cmp-row"><span class="cmp-k">${r?`With BAKE`:`BAKE`}</span><b>${a(o)}</b></div>
    <div class="cmp-row"><span class="cmp-k">Template elsewhere</span><span>${a(i.tpl.label)} <small>(${a(i.tpl.what)}; you set it up yourself)</small></span></div>
    <div class="cmp-row"><span class="cmp-k">Agency</span><span>${a(i.agency.label)} <small>(${a(i.agency.what)})</small></span></div>
    <details><summary>Where these numbers come from (checked ${$e})</summary><ul>${i.sources.map(e=>`<li><a href="${a(e.url)}" target="_blank" rel="noopener">${a(e.name)}</a>: ${a(e.says)}</li>`).join(``)}</ul>
    <p>Template prices are in US dollars, agency prices in Canadian dollars. Prices vary; these are published ranges, not quotes.</p></details></div>`}export{w as A,i as B,ue as C,he as D,W as E,K as F,n as G,p as H,c as I,l as L,ge as M,L as N,R as O,me as P,s as R,g as S,F as T,a as U,m as V,d as W,q as _,Ue as a,v as b,Ie as c,Se as d,Te as f,ve as g,xe as h,Qe as i,B as j,U as k,Ce as l,Pe as m,at as n,Xe as o,Fe as p,ot as r,He as s,$e as t,we as u,_e as v,I as w,H as x,h as y,r as z};