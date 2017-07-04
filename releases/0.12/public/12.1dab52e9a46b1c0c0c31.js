webpackJsonp([12],{373:function(e,t,o){function s(e){o(643)}var i=o(0)(o(558),o(732),s,null,null);e.exports=i.exports},558:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{doc:{title:"Select",desc:"Select fields components are used for collecting user provided information from a list of options.",component:"select",edit:"SelectView",examples:[{header:"Light theme",file:"selects/1",desc:"A standard single select has a multitude of configuration options."},{header:"Dark theme",file:"selects/2",desc:"Selects also support themeing, dark and light."},{header:"Icons",file:"selects/3",desc:"Use a custom prepended or appended icon."},{header:"Multiple",file:"selects/4",desc:"A multi-select can utilize v-chip as the display for selected items."},{header:"Scoped slots",file:"selects/5",desc:"With the power of scoped slots, you can customize the visual output of the select. In this example we add a profile picture for both the chips and list items."},{header:"Customized item text and value",file:"selects/6",desc:"You can specify the specific properties within your items array correspond to the text and value fields. By default, this is <strong>text</strong> and <strong>value</strong>. In this example we also use the <code>return-object</code> prop which will return the entire object of the selected item on selection."}],props:{"v-select":{params:[["chips","Boolean","False","Changes display of selections to chips"],["items","Array","[]","Can be an array of objects or array of strings. When using objects, will look for a <strong>text</strong> and <strong>value</strong> field. This can be changed using the <code>item-text</code> and <code>item-value</code> props."],["item-text","String","text","Set property of <code>items</code> will be displayed on option"],["item-value","String","value","Set property of <code>items</code> define option's value"],["max-height","Number, String","200","Sets the maximum height for the select menu"],["multiple","Boolean","False","Changes select to multiple. Accepts array for v-model"],["single-line","Boolean","False","Removes floating label"],["light","Boolean","True","Applies the light theme"],["dark","Boolean","False","Applies the dark theme"],["disabled","Boolean","False","Disables input"],["hint","String","-","Sets hint text"],["persistent-hint","Boolean","False","Forces hint visible"],["label","String","-","Sets select label"],["append-icon","String","arrow_drop_down","Changes the dropdown icon"],["prepend-icon","String","-","Prepend an icon to the select"],["required","Boolean","False","Designates the input as required"],["rules","Array","[]","Array of functions that return either True or a String with an error message"]],model:{types:["Array","Object"],default:"-",description:"Single select requires model, multiple requires array"}}},events:{"v-select":{params:[["input","String","Selected value"]]}}}}}}},598:function(e,t,o){t=e.exports=o(129)(void 0),t.push([e.i,"#forms-view .with{min-height:0}#forms-view main{min-height:0;padding-left:0}#forms-view .toolbar{max-height:64px}#forms-view .component-example__container{-ms-flex-pack:justify;justify-content:space-between;-ms-flex-wrap:wrap;flex-wrap:wrap}#forms-view .component-example__container>div>*{margin:2rem 0;-ms-flex:1 0 100%;flex:1 0 100%}",""])},643:function(e,t,o){var s=o(598);"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o(130)("0f9013cb",s,!0)},732:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("component-view",{attrs:{doc:e.doc}})},staticRenderFns:[]}}});