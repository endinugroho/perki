(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[73],{1673:function(e,t,a){"use strict";a.r(t);var n=a(689),r=a(1),c=a.n(r),o=a(650),l=a(1674),i=a(658),s=a(14),b={lat:37.431489,lng:-122.163719},j=[{lat:37.431489,lng:-122.163719,label:"S",draggable:!1,title:"Stanford",www:"https://www.stanford.edu/"},{lat:37.394694,lng:-122.150333,label:"T",draggable:!1,title:"Tesla",www:"https://www.tesla.com/"},{lat:37.331681,lng:-122.0301,label:"A",draggable:!1,title:"Apple",www:"https://www.apple.com/"},{lat:37.484722,lng:-122.148333,label:"F",draggable:!1,title:"Facebook",www:"https://www.facebook.com/"}],p=function(){return j.map((function(e,t){return Object(s.jsx)(d,{location:e},t.toString())}))},d=function(e){var t=e.location,a=c.a.useState(!1),r=Object(n.a)(a,2),i=r[0],b=r[1];return Object(s.jsx)(l.Marker,{onClick:function(){return b(!i)},position:t,title:t.title,label:t.label,children:i&&Object(s.jsx)(l.InfoWindow,{onCloseClick:function(){return b(!1)},children:Object(s.jsx)(o.kb,{href:t.www,target:"_blank",children:t.title})})})},h=Object(l.withScriptjs)(Object(l.withGoogleMap)((function(){return Object(s.jsx)(l.GoogleMap,{defaultZoom:11,defaultCenter:b,children:Object(s.jsx)(p,{locations:j})})})));t.default=function(){return Object(s.jsxs)(o.j,{children:[Object(s.jsxs)(o.n,{children:["React Google Maps"," ",Object(s.jsx)(i.b,{}),Object(s.jsx)(i.a,{href:"https://github.com/tomchentw/react-google-maps"})]}),Object(s.jsx)(o.k,{children:Object(s.jsx)(h,{googleMapURL:"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=".concat("AIzaSyASyYRBZmULmrmw_P9kgr7_266OhFNinPA"),loadingElement:Object(s.jsx)("div",{style:{height:"100%"}}),containerElement:Object(s.jsx)("div",{style:{height:"400px"}}),mapElement:Object(s.jsx)("div",{style:{height:"100%"}})},"map")})]})}},658:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return h}));var n=a(39),r=a(164),c=a(1),o=a.n(c),l=a(650),i=a(14),s=["name","text"],b=function(e){var t=e.name,a=e.text,c=Object(r.a)(e,s),o=t?"https://coreui.io/react/docs/components/".concat(t):e.href;return Object(i.jsx)("div",{className:"card-header-actions",children:Object(i.jsx)(l.ab,Object(n.a)(Object(n.a)({},c),{},{href:o,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(i.jsx)("small",{className:"text-muted",children:a||"docs"})}))})},j=o.a.memo(b),p=["children"],d=function(e){var t=Object(n.a)({},e),a=t.children,c=Object(r.a)(t,p);return Object(i.jsx)(l.b,Object(n.a)(Object(n.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},c),{},{children:a||"CoreUI Pro Component"}))},h=o.a.memo(d)}}]);
//# sourceMappingURL=73.7578d106.chunk.js.map