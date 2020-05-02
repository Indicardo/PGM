(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{144:function(e,t,l){"use strict";l.r(t),l.d(t,"frontMatter",(function(){return i})),l.d(t,"metadata",(function(){return o})),l.d(t,"rightToc",(function(){return s})),l.d(t,"default",(function(){return c}));var a=l(1),n=l(9),b=(l(0),l(163)),i={id:"tutorial",title:"Map Tutorial"},o={id:"modules/tutorial",title:"Map Tutorial",description:"The tutorial module is used to create a tutorial for the map. Tutorials are split up into stages which have a message and a teleport position.",source:"@site/docs/modules/tutorial.mdx",permalink:"/PGM/docs/modules/tutorial",editUrl:"https://github.com/Electroid/PGM/edit/docs/docs/modules/tutorial.mdx",sidebar:"Modules",previous:{title:"Includes & Conditionals",permalink:"/PGM/docs/modules/includes-conditionals"}},s=[],r={rightToc:s};function c(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},r,l,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"The tutorial module is used to create a tutorial for the map. Tutorials are split up into stages which have a message and a teleport position."),Object(b.b)("p",null,"Tutorials are intended for players with zero playing experience, thus they should be written as simple as possible, without any abbreviations or acronyms. If abbreviations are used it is recommended that they are explained or written out, e.g. ",Object(b.b)("inlineCode",{parentName:"p"},"Capture the Wool (CTW)")),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"tutorial.xml")," defines the default messages that will be sent at the beginning and end of the tutorial."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"NOTE:")," This file ",Object(b.b)("strong",{parentName:"p"},"must")," be included."),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},'<include src="tutorial.xml"/>')),Object(b.b)("p",null,"Tutorial stages contain a message with multiple lines and a teleport. A stage's title shouldn't be too long since it is displayed in the tool-tip of the tutorial item.\nThe message element can contain multiple lines, color and ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/reference/formatting"}),"formatting codes")," can be used for fancy text. Message lines are used to insert a hard line break, you can also put all the text into a single ",Object(b.b)("inlineCode",{parentName:"p"},"<line>")," however you won't have any control over where lines start to wrap."),Object(b.b)("p",null,"Teleports are optional, if they are not defined just the message will be displayed for that stage. They can contain ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/modules/regions"}),"regions")," or ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/modules/regions#pointProviders"}),"point providers"),", it is recommended that you use a point provider to control precisely where the player spawns. If a point is obstructed the player will not be teleported. However, the stage message will still be displayed."),Object(b.b)("p",null,"Stages are displayed in the order that they are defined as in the XML."),Object(b.b)("div",{class:"table-container"},Object(b.b)("table",{class:"table"},Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Tutorial Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<tutorial> </tutorial>")),Object(b.b)("td",null,"Node containing all the defined tutorial stages."),Object(b.b)("td",null)),Object(b.b)("tr",null,Object(b.b)("th",{colspan:"2"},"Sub-elements"),Object(b.b)("th",null,"Value/Children")),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<stage> </stage>")),Object(b.b)("td",null,"A single tutorial stage."),Object(b.b)("td",null,Object(b.b)("span",{class:"badge badge--default"},"Stage Sub-elements")))))),Object(b.b)("h5",{id:"tutorial-stage-attributes"},"Tutorial Stage Attributes"),Object(b.b)("div",{class:"table-container"},Object(b.b)("table",{class:"table"},Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Attribute"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"title")),Object(b.b)("td",null,Object(b.b)("span",{class:"badge badge--danger"},"Required"),"Short title for this stage."),Object(b.b)("td",null,Object(b.b)("span",{class:"badge badge--primary"},"String")))))),Object(b.b)("h5",{id:"tutorial-stage-sub-elements"},"Tutorial Stage Sub-elements"),Object(b.b)("div",{class:"table-container"},Object(b.b)("table",{class:"table"},Object(b.b)("thead",null,Object(b.b)("tr",null,Object(b.b)("th",null,"Element"),Object(b.b)("th",null,"Description"),Object(b.b)("th",null,"Value/Children"))),Object(b.b)("tbody",null,Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<message>")),Object(b.b)("td",null,"Container for the tutorial message lines."),Object(b.b)("td",null,Object(b.b)("label",null,"<line>"))),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<line>")),Object(b.b)("td",null,"The message lines for this stage. Used in",Object(b.b)("label",null,"<message>")),Object(b.b)("td",null,Object(b.b)("span",{class:"badge badge--primary"},"String"))),Object(b.b)("tr",null,Object(b.b)("td",null,Object(b.b)("label",null,"<teleport>")),Object(b.b)("td",null,"The viewing location for this stage."),Object(b.b)("td",null,Object(b.b)("a",{href:"/modules/regions"},"Regions")))))),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-xml"}),'<tutorial>\n  <stage title="Capture the Wool">\n    <message>\n      <line>`rThis map is a `a`lCapture the Wool `r(CTW) map</line>\n      <line>The objective is to grab the wool on the other team\'s side and return it to your base.</line>\n    </message>\n    <teleport>\n        <point yaw="90" pitch="50">44,60,0</point>\n    </teleport>\n  </stage>\n  \x3c!-- next stages --\x3e\n</tutorial>\n')))}c.isMDXComponent=!0}}]);