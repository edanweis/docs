webpackJsonp([67],{340:function(e,a,t){var n=t(0)(t(526),t(885),null,null,null);e.exports=n.exports},526:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={data:function(){return{doc:{title:"Badge",edit:"Badges",component:"badges",desc:'\n          <p>\n            Badge directives can be applied to any element using the <code>v-badge</code> directive. By default, a badge will use the application\'s defined <strong class="primary--text">primary color</strong>. Parameters can be passed using the arg, <code>v-badge:arg</code>, modifier, <code>v-badge:2.modifier</code>, or by passing an object by expression, <code>v-badge="{ value: 2, overlap: true }"</code>\n          </p>\n          <p>\n            The color can be changed by using the color--after helper class, or by apply a class that modifies the background of the badged elements <strong>:after</strong> psuedo-selector.\n          </p>',examples:[{header:"Character",file:"badges/1",desc:"Any character can be placed with a badge."},{header:"Icon",file:"badges/2",desc:"The icon badge type only supports Material Design icons."},{header:"Inline",file:"badges/3",desc:"Badges can also be placed inline with text."}],props:{"v-badge":{params:[["v-badge:arg.icon","Boolean","False","Specifies the use of an icon"],["v-badge:arg.left","Boolean","False","Positions the badge to the left of the element"],["v-badge:arg.overlap","Boolean","False","Overlaps badge on element"]]}}}}}}},885:function(e,a){e.exports={render:function(){var e=this,a=e.$createElement;return(e._self._c||a)("component-view",{attrs:{doc:e.doc,id:"badges-view"}})},staticRenderFns:[]}}});