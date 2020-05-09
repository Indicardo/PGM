(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{167:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return c})),l.d(t,"metadata",(function(){return a})),l.d(t,"rightToc",(function(){return r})),l.d(t,"default",(function(){return i}));var b=l(1),n=l(9),o=(l(0),l(205)),c={id:"ctw",title:"Capture the Wool"},a={id:"modules/objectives/ctw",title:"Capture the Wool",description:"Players have to retrieve wool blocks from the enemy teams side of the map and then put them on their victory monument(s). The area a wool has to be placed in is protected by default to prevent it from being blocked with another block.",source:"@site/docs/modules/objectives/ctw.mdx",permalink:"/docs/modules/objectives/ctw",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/objectives/ctw.mdx",sidebar:"Modules",previous:{title:"Teams",permalink:"/docs/modules/format/teams"},next:{title:"Capture the Flag",permalink:"/docs/modules/objectives/ctf"}},r=[],u={rightToc:r};function i(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(b.a)({},u,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Players have to retrieve wool blocks from the enemy teams side of the map and then put them on their victory monument(s). The area a wool has to be placed in is protected by default to prevent it from being blocked with another block."),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<wools>\n    <wool team="blue" color="lime">\n        <monument><block>0.5,11,-92.5</block></monument>\n        \x3c!-- Blue team has to place a lime wool block at 0.5,11,-92.5 to win --\x3e\n    </wool>\n    <wool team="green" color="light blue" craftable="false">\n        <monument><block>0.5,11,93.5</block></monument>\n        \x3c!-- Light blue wool can not be crafted, it must be picked up --\x3e\n    </wool>\n</wools>\n')),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",{className:"table"},Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Wools Element"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null,"Value/Children"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<wools> </wools>")),Object(o.b)("td",null,"Node containing all the wools for this map."),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("th",null,"Sub-elements"),Object(o.b)("th",null),Object(o.b)("th",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<wool> </wool>")),Object(o.b)("td",null,"A wool victory monument."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--secondary"},"Wool Sub-elements")))))),Object(o.b)("h5",{id:"wool-attributes"},"Wool Attributes"),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Attribute"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null,"Value"),Object(o.b)("th",null,"Default"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"id")),Object(o.b)("td",null,"Unique identifier used to reference wool monuments from other places in the XML."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"String")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"required")),Object(o.b)("td",null,"Specify if this objective is required to win the match.",Object(o.b)("br",null),"Teams completing all of their required objectives will win regardless of score or blitz configuration."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"true/false")),Object(o.b)("td",null,"true")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"team")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"The team which has to place the wool."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/modules/format/teams"},"Team ID")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"color")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger"},"Required"),"The wools color."),Object(o.b)("td",null,Object(o.b)("a",{href:"/reference/colors"},"Dye Color Name")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"monument")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--secondary",title:"Can be either this attribute or a sub-element."},"Property"),Object(o.b)("span",{className:"badge badge--danger"},"Required"),"The monument where the wool has to be placed."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"craftable")),Object(o.b)("td",null,"Specify if the wool can be crafted, e.g. with white wool and dye."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"true/false")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"show")),Object(o.b)("td",null,"Specify if the objective should be hidden from all visible locations to the player. These locations include chat, the boss bar, and the scoreboard.",Object(o.b)("br",null),Object(o.b)("i",null,"If set to false, the objective will not be logged to the database and the player will not receive any raindrops upon completion.")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"true/false")),Object(o.b)("td",null,"true")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"location")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--danger",title:"Required after proto 1.3.4"},"Required"),"Location where the wool can be found at, used to determine proximity."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"X,Y,Z")),Object(o.b)("td",null)),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"wool-proximity-metric")),Object(o.b)("td",null,"Metric used to determine proximity to the wool.",Object(o.b)("br",null),"Accepts ",Object(o.b)("label",null,"closest player"),", ",Object(o.b)("label",null,"closest block")," or"," ",Object(o.b)("label",null,"closest kill")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"Proximity Metric")),Object(o.b)("td",null,Object(o.b)("label",null,"closest kill"))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"wool-proximity-horizontal")),Object(o.b)("td",null,"Only calculate horizontal distance for wool proximity."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"true/false")),Object(o.b)("td",null,"false")),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"monument-proximity-metric")),Object(o.b)("td",null,"Metric used to determine proximity to the monument.",Object(o.b)("br",null),"Accepts ",Object(o.b)("label",null,"closest player"),", ",Object(o.b)("label",null,"closest block")," or"," ",Object(o.b)("label",null,"closest kill")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"Proximity Metric")),Object(o.b)("td",null,Object(o.b)("label",null,"closest block"))),Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"monument-proximity-horizontal")),Object(o.b)("td",null,"Only calculate horizontal distance for monument proximity."),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--primary"},"true/false")),Object(o.b)("td",null,"false"))))),Object(o.b)("h5",{id:"wool-sub-elements"},"Wool Sub-elements"),Object(o.b)("div",{className:"table-container"},Object(o.b)("table",null,Object(o.b)("thead",null,Object(o.b)("tr",null,Object(o.b)("th",null,"Element"),Object(o.b)("th",null,"Description"),Object(o.b)("th",null,"Value"))),Object(o.b)("tbody",null,Object(o.b)("tr",null,Object(o.b)("td",null,Object(o.b)("label",null,"<monument>")),Object(o.b)("td",null,Object(o.b)("span",{className:"badge badge--secondary",title:"Can be either this sub-element or an attribute."},"Property"),Object(o.b)("span",{className:"badge badge--danger"},"Required"),"The monument where the wool has to be placed."),Object(o.b)("td",null,Object(o.b)("a",{href:"/docs/modules/mechanics/regions"},"Region")))))),Object(o.b)("p",null,"You can group multiple victory monuments from the same team inside a single ",Object(o.b)("inlineCode",{parentName:"p"},'<wools team="team-id">')," element; and then define that teams individual wool colors inside of a ",Object(o.b)("inlineCode",{parentName:"p"},"<wool>")," element."),Object(o.b)("pre",null,Object(o.b)("code",Object(b.a)({parentName:"pre"},{className:"language-xml"}),'<wools team="red">\n    <wool color="cyan" location="32.5,14,0.5">\n        <monument><block>-60,26,-118</block></monument>\n    </wool>\n    <wool color="lime" location="0.5,10,21.5">\n        <monument><block>-60,26,-121</block></monument>\n    </wool>\n</wools>\n\n<wools team="blue">\n    <wool color="magenta" location="-32.5,14,0.5" monument="magenta-monument"/>\n    <wool color="lime" location="0.5,10,21.5" monument="lime-monument"/>\n</wools>\n')))}i.isMDXComponent=!0},205:function(e,t,l){"use strict";l.d(t,"a",(function(){return s})),l.d(t,"b",(function(){return O}));var b=l(0),n=l.n(b);function o(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function c(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,b)}return l}function a(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?c(Object(l),!0).forEach((function(t){o(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):c(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,b,n=function(e,t){if(null==e)return{};var l,b,n={},o=Object.keys(e);for(b=0;b<o.length;b++)l=o[b],t.indexOf(l)>=0||(n[l]=e[l]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(b=0;b<o.length;b++)l=o[b],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var u=n.a.createContext({}),i=function(e){var t=n.a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):a({},t,{},e)),l},s=function(e){var t=i(e.components);return n.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var l=e.components,b=e.mdxType,o=e.originalType,c=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),s=i(l),m=b,O=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return l?n.a.createElement(O,a({ref:t},u,{components:l})):n.a.createElement(O,a({ref:t},u))}));function O(e,t){var l=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var o=l.length,c=new Array(o);c[0]=m;var a={};for(var r in t)hasOwnProperty.call(t,r)&&(a[r]=t[r]);a.originalType=e,a.mdxType="string"==typeof e?e:b,c[1]=a;for(var u=2;u<o;u++)c[u]=l[u];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,l)}m.displayName="MDXCreateElement"}}]);