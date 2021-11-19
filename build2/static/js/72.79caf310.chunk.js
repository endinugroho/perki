(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[72],{1633:function(e,r,a){"use strict";a.r(r);var t=a(173),s=a(39),c=(a(1),a(650)),i=a(658),n=a(1867),o=a(1863),l=a(14),d=function(e){return o.b().shape({firstName:o.c().min(2,"First name has to be at least 2 characters").required("First name is required"),lastName:o.c().min(1,"Last name has to be at least 1 character").required("Last name is required"),userName:o.c().min(5,"Username has to be at least 5 characters").required("Username is required"),email:o.c().email("Invalid email address").required("Email is required!"),password:o.c().min(6,"Password has to be at least ".concat(6," characters!")).matches(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/,"Password must contain: numbers, uppercase and lowercase letters\n").required("Password is required"),confirmPassword:o.c().oneOf([e.password],"Passwords must match").required("Password confirmation is required"),accept:o.a().required("* required").test("accept","You have to accept our Terms and Conditions!",(function(e){return!0===e}))})},m=function(e){return e.inner.reduce((function(e,r){return Object(s.a)(Object(s.a)({},e),{},Object(t.a)({},r.path,r.errors[0]))}),{})},u={firstName:"",lastName:"",userName:"",email:"",password:"",confirmPassword:"",accept:!1},j=function(e,r){var a=r.setSubmitting;r.setErrors;setTimeout((function(){alert(JSON.stringify(e,null,2)),a(!1)}),2e3)},h=function(e){!function(e,r){for(var a=document.forms[e],t=0;t<a.length;t++)if(r(a[t].name)){a[t].focus();break}}("simpleForm",(function(r){return Boolean(e[r])}))};r.default=function(){return Object(l.jsxs)(c.j,{children:[Object(l.jsxs)(c.n,{children:["Form Validation",Object(l.jsx)(i.b,{}),Object(l.jsx)(i.a,{href:"https://github.com/jaredpalmer/formik"})]}),Object(l.jsxs)(c.k,{children:[Object(l.jsx)("a",{href:"https://github.com/jaredpalmer/formik",target:"_blank",rel:"noreferrer noopener",children:"Formik"})," ",Object(l.jsx)("cite",{children:"Build forms in React, without the tears"})," with",Object(l.jsx)("a",{href:"https://github.com/jquense/yup",target:"_blank",rel:"noreferrer noopener",children:"Yup"})," ",Object(l.jsx)("cite",{children:"Dead simple Object schema validation"}),Object(l.jsx)("hr",{}),Object(l.jsx)(n.a,{initialValues:u,validate:(e=d,function(r){var a=e(r);try{return a.validateSync(r,{abortEarly:!1}),{}}catch(t){return m(t)}}),onSubmit:j,children:function(e){var r=e.values,a=e.errors,t=e.touched,s=(e.status,e.dirty,e.handleChange),i=e.handleBlur,n=e.handleSubmit,o=e.isSubmitting,d=e.isValid,m=e.handleReset,u=e.setTouched;return Object(l.jsxs)(c.tb,{children:[Object(l.jsx)(c.u,{lg:"6",children:Object(l.jsxs)(c.J,{onSubmit:n,noValidate:!0,name:"simpleForm",children:[Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"firstName",children:"First Name"}),Object(l.jsx)(c.P,{type:"text",name:"firstName",id:"firstName",placeholder:"First Name",autoComplete:"given-name",valid:!a.firstName,invalid:t.firstName&&!!a.firstName,autoFocus:!0,required:!0,onChange:s,onBlur:i,value:r.firstName}),Object(l.jsx)(c.X,{children:a.firstName})]}),Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"lastName",children:"Last Name"}),Object(l.jsx)(c.P,{type:"text",name:"lastName",id:"lastName",placeholder:"Last Name",autoComplete:"family-name",valid:!a.lastName,invalid:t.lastName&&!!a.lastName,required:!0,onChange:s,onBlur:i,value:r.lastName}),Object(l.jsx)(c.X,{children:a.lastName})]}),Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"userName",children:"User Name"}),Object(l.jsx)(c.P,{type:"text",name:"userName",id:"userName",placeholder:"User Name",autoComplete:"username",valid:!a.userName,invalid:t.userName&&!!a.userName,required:!0,onChange:s,onBlur:i,value:r.userName}),Object(l.jsx)(c.X,{children:a.userName})]}),Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"email",children:"Email"}),Object(l.jsx)(c.P,{type:"email",name:"email",id:"email",placeholder:"Email",autoComplete:"email",valid:!a.email,invalid:t.email&&!!a.email,required:!0,onChange:s,onBlur:i,value:r.email}),Object(l.jsx)(c.X,{children:a.email})]}),Object(l.jsxs)(c.tb,{children:[Object(l.jsx)(c.u,{md:6,children:Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"password",children:"Password"}),Object(l.jsx)(c.P,{type:"password",name:"password",id:"password",placeholder:"Password",autoComplete:"new-password",valid:!a.password,invalid:t.password&&!!a.password,required:!0,onChange:s,onBlur:i,value:r.password}),Object(l.jsx)(c.X,{children:a.password})]})}),Object(l.jsx)(c.u,{md:6,children:Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.Z,{htmlFor:"confirmPassword",children:"Password"}),Object(l.jsx)(c.P,{type:"password",name:"confirmPassword",id:"confirmPassword",placeholder:"Confirm password",autoComplete:"new-password",valid:!a.confirmPassword,invalid:t.confirmPassword&&!!a.confirmPassword,required:!0,onChange:s,onBlur:i,value:r.confirmPassword}),Object(l.jsx)(c.X,{children:a.confirmPassword})]})})]}),Object(l.jsxs)(c.K,{variant:"custom-checkbox",className:"pb-3",children:[Object(l.jsx)(c.Q,{custom:!0,id:"accept",required:!0,valid:!a.accept,invalid:t.accept&&!!a.accept,onChange:s,onBlur:i}),Object(l.jsx)(c.Z,{variant:"custom-checkbox",htmlFor:"accept",children:"I accept the terms of use"}),Object(l.jsx)(c.X,{children:a.accept})]}),Object(l.jsxs)(c.K,{children:[Object(l.jsx)(c.f,{type:"submit",color:"primary",className:"mr-1",disabled:o||!d,children:o?"Wait...":"Submit"}),Object(l.jsx)(c.f,{type:"button",color:"success",className:"mr-1",onClick:function(){return function(e,r){e({firstName:!0,lastName:!0,userName:!0,email:!0,password:!0,confirmPassword:!0,accept:!0}),h(r)}(u,a)},disabled:d,children:"Validate"}),Object(l.jsx)(c.f,{type:"reset",color:"danger",className:"mr-1",onClick:m,children:"Reset"})]})]})}),Object(l.jsx)(c.u,{lg:"6",children:Object(l.jsx)(c.j,{color:d?"gradient-info":"gradient-secondary",children:Object(l.jsxs)(c.k,{children:[Object(l.jsxs)("pre",{children:["values: ",JSON.stringify(r,null,2)]}),Object(l.jsxs)("pre",{children:["errors: ",JSON.stringify(a,null,2)]}),Object(l.jsxs)("pre",{children:["touched: ",JSON.stringify(t,null,2)]})]})})})]})}})]})]});var e}},658:function(e,r,a){"use strict";a.d(r,"a",(function(){return m})),a.d(r,"b",(function(){return h}));var t=a(39),s=a(164),c=a(1),i=a.n(c),n=a(650),o=a(14),l=["name","text"],d=function(e){var r=e.name,a=e.text,c=Object(s.a)(e,l),i=r?"https://coreui.io/react/docs/components/".concat(r):e.href;return Object(o.jsx)("div",{className:"card-header-actions",children:Object(o.jsx)(n.ab,Object(t.a)(Object(t.a)({},c),{},{href:i,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(o.jsx)("small",{className:"text-muted",children:a||"docs"})}))})},m=i.a.memo(d),u=["children"],j=function(e){var r=Object(t.a)({},e),a=r.children,c=Object(s.a)(r,u);return Object(o.jsx)(n.b,Object(t.a)(Object(t.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},c),{},{children:a||"CoreUI Pro Component"}))},h=i.a.memo(j)}}]);
//# sourceMappingURL=72.79caf310.chunk.js.map