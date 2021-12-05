(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[83],{1047:function(t,e,n){"use strict";var o=n(1),r=n(70);function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function s(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}function c(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&l(t,e)}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},u(t)}function l(t,e){return l=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},l(t,e)}function p(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,o=u(t);if(e){var r=u(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return p(this,n)}}function m(t){return function(t){if(Array.isArray(t))return d(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"===typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=new Array(e);n<e;n++)o[n]=t[n];return o}function h(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=String(t);if(0===e)return n;var o=n.match(/(.*?)([0-9]+)(.*)/),r=o?o[1]:"",i=o?o[3]:"",a=o?o[2]:n,s=a.length>=e?a:(m(Array(e)).map((function(){return"0"})).join("")+a).slice(-1*e);return"".concat(r).concat(s).concat(i)}var v={daysInHours:!1,zeroPadTime:2};function b(t,e){var n=t.days,o=t.hours,r=t.minutes,i=t.seconds,a=Object.assign(Object.assign({},v),e),s=a.daysInHours,c=a.zeroPadTime,u=a.zeroPadDays,l=void 0===u?c:u,p=Math.min(2,c),f=s?h(o+24*n,c):h(o,p);return{days:s?"":h(n,l),hours:f,minutes:h(r,p),seconds:h(i,p)}}var y=function(t){c(n,t);var e=f(n);function n(){var t;return i(this,n),(t=e.apply(this,arguments)).state={count:t.props.count||3},t.startCountdown=function(){t.interval=window.setInterval((function(){0===t.state.count-1?(t.stopCountdown(),t.props.onComplete&&t.props.onComplete()):t.setState((function(t){return{count:t.count-1}}))}),1e3)},t.stopCountdown=function(){clearInterval(t.interval)},t.addTime=function(e){t.stopCountdown(),t.setState((function(t){return{count:t.count+e}}),t.startCountdown)},t}return s(n,[{key:"componentDidMount",value:function(){this.startCountdown()}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){return this.props.children?Object(o.cloneElement)(this.props.children,{count:this.state.count}):null}}]),n}(o.Component);y.propTypes={count:r.number,children:r.element,onComplete:r.func};var T=function(t){c(n,t);var e=f(n);function n(t){var r;if(i(this,n),(r=e.call(this,t)).mounted=!1,r.initialTimestamp=r.calcOffsetStartTimestamp(),r.offsetStartTimestamp=r.props.autoStart?0:r.initialTimestamp,r.offsetTime=0,r.legacyMode=!1,r.legacyCountdownRef=Object(o.createRef)(),r.tick=function(){var t=r.calcTimeDelta(),e=t.completed&&!r.props.overtime?void 0:r.props.onTick;r.setTimeDeltaState(t,void 0,e)},r.start=function(){if(!r.isStarted()){var t=r.offsetStartTimestamp;r.offsetStartTimestamp=0,r.offsetTime+=t?r.calcOffsetStartTimestamp()-t:0;var e=r.calcTimeDelta();r.setTimeDeltaState(e,"STARTED",r.props.onStart),r.props.controlled||e.completed&&!r.props.overtime||(r.clearTimer(),r.interval=window.setInterval(r.tick,r.props.intervalDelay))}},r.pause=function(){r.isPaused()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.setTimeDeltaState(r.state.timeDelta,"PAUSED",r.props.onPause))},r.stop=function(){r.isStopped()||(r.clearTimer(),r.offsetStartTimestamp=r.calcOffsetStartTimestamp(),r.offsetTime=r.offsetStartTimestamp-r.initialTimestamp,r.setTimeDeltaState(r.calcTimeDelta(),"STOPPED",r.props.onStop))},r.isStarted=function(){return r.isStatus("STARTED")},r.isPaused=function(){return r.isStatus("PAUSED")},r.isStopped=function(){return r.isStatus("STOPPED")},r.isCompleted=function(){return r.isStatus("COMPLETED")},r.handleOnComplete=function(t){r.props.onComplete&&r.props.onComplete(t)},t.date){var a=r.calcTimeDelta();r.state={timeDelta:a,status:a.completed?"COMPLETED":"STOPPED"}}else r.legacyMode=!0;return r}return s(n,[{key:"componentDidMount",value:function(){this.legacyMode||(this.mounted=!0,this.props.onMount&&this.props.onMount(this.calcTimeDelta()),this.props.autoStart&&this.start())}},{key:"componentDidUpdate",value:function(t){this.legacyMode||this.props.date!==t.date&&(this.initialTimestamp=this.calcOffsetStartTimestamp(),this.offsetStartTimestamp=this.initialTimestamp,this.offsetTime=0,this.setTimeDeltaState(this.calcTimeDelta()))}},{key:"componentWillUnmount",value:function(){this.legacyMode||(this.mounted=!1,this.clearTimer())}},{key:"calcTimeDelta",value:function(){var t=this.props,e=t.date,n=t.now,o=t.precision,r=t.controlled,i=t.overtime;return function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.now,r=void 0===o?Date.now:o,i=n.precision,a=void 0===i?0:i,s=n.controlled,c=n.offsetTime,u=void 0===c?0:c,l=n.overtime;e="string"===typeof t?new Date(t).getTime():t instanceof Date?t.getTime():t,s||(e+=u);var p=s?e:e-r(),f=Math.min(20,Math.max(0,a)),m=Math.round(1e3*parseFloat(((l?p:Math.max(0,p))/1e3).toFixed(f))),d=Math.abs(m)/1e3;return{total:m,days:Math.floor(d/86400),hours:Math.floor(d/3600%24),minutes:Math.floor(d/60%60),seconds:Math.floor(d%60),milliseconds:Number((d%1*1e3).toFixed()),completed:m<=0}}(e,{now:n,precision:o,controlled:r,offsetTime:this.offsetTime,overtime:i})}},{key:"calcOffsetStartTimestamp",value:function(){return Date.now()}},{key:"addTime",value:function(t){this.legacyCountdownRef.current.addTime(t)}},{key:"clearTimer",value:function(){window.clearInterval(this.interval)}},{key:"isStatus",value:function(t){return this.state.status===t}},{key:"setTimeDeltaState",value:function(t,e,n){var o=this;if(this.mounted){var r;!this.state.timeDelta.completed&&t.completed&&(this.props.overtime||this.clearTimer(),r=this.handleOnComplete);return this.setState((function(n){var r=e||n.status;return t.completed&&!o.props.overtime?r="COMPLETED":e||"COMPLETED"!==r||(r="STOPPED"),{timeDelta:t,status:r}}),(function(){n&&n(o.state.timeDelta),r&&r(o.state.timeDelta)}))}}},{key:"getApi",value:function(){return this.api=this.api||{start:this.start,pause:this.pause,stop:this.stop,isStarted:this.isStarted,isPaused:this.isPaused,isStopped:this.isStopped,isCompleted:this.isCompleted}}},{key:"getRenderProps",value:function(){var t=this.props,e=t.daysInHours,n=t.zeroPadTime,o=t.zeroPadDays,r=this.state.timeDelta;return Object.assign(Object.assign({},r),{api:this.getApi(),props:this.props,formatted:b(r,{daysInHours:e,zeroPadTime:n,zeroPadDays:o})})}},{key:"render",value:function(){if(this.legacyMode){var t=this.props,e=t.count,n=t.children,r=t.onComplete;return Object(o.createElement)(y,{ref:this.legacyCountdownRef,count:e,onComplete:r},n)}var i=this.props,a=i.className,s=i.overtime,c=i.children,u=i.renderer,l=this.getRenderProps();if(u)return u(l);if(c&&this.state.timeDelta.completed&&!s)return Object(o.cloneElement)(c,{countdown:l});var p=l.formatted,f=p.days,m=p.hours,d=p.minutes,h=p.seconds;return Object(o.createElement)("span",{className:a},l.total<0?"-":"",f,f?":":"",m,":",d,":",h)}}]),n}(o.Component);T.defaultProps=Object.assign(Object.assign({},v),{controlled:!1,intervalDelay:1e3,precision:0,autoStart:!0}),T.propTypes={date:Object(r.oneOfType)([Object(r.instanceOf)(Date),r.string,r.number]),daysInHours:r.bool,zeroPadTime:r.number,zeroPadDays:r.number,controlled:r.bool,intervalDelay:r.number,precision:r.number,autoStart:r.bool,overtime:r.bool,className:r.string,children:r.element,renderer:r.func,now:r.func,onMount:r.func,onStart:r.func,onPause:r.func,onStop:r.func,onTick:r.func,onComplete:r.func},e.a=T},1884:function(t,e,n){"use strict";n.r(e);var o=n(685),r=n(1),i=n(664),a=n(735),s=n.n(a),c=n(1047),u=n(18);e.default=function(){var t=Object(r.useState)(null),e=Object(o.a)(t,2),n=e[0],a=e[1];Object(r.useEffect)((function(){null==n&&l()}),[n]);var l=function(){s.a.get("".concat("https://acsasurabaya2021.com/wp-content/plugins/perki/PerkiAPi.php","?function=getOralZoom")).then((function(t){if(1==t.data.status){var e=t.data.data;""!=e.zoom_room_id?a(e):a([])}else a([])})).catch((function(t){return console.log(t)}))};return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(i.j,{children:[Object(u.jsx)(i.n,{style:{fontSize:"25px"},children:Object(u.jsx)("span",{className:"badge badge-info",children:"Oral Presentation"})}),Object(u.jsx)(i.k,{children:Object(u.jsx)(i.tb,{children:Object(u.jsxs)("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center",children:[n?Object(u.jsx)(u.Fragment,{children:void 0!=n.name?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h4",{children:n.name}),Object(u.jsx)("p",{children:n.desc}),Object(u.jsx)(c.a,{date:new Date("12/05/2021 09:00:00")}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;e=null!=e?"?pwd="+e:"",window.open("https://us04web.zoom.us/j/".concat(t).concat(e))}(n.zoom_room_id,n.passcode)},children:"Join Now"}),Object(u.jsx)("br",{})]}):null}):Object(u.jsx)("h4",{children:"Please wait"}),n&&Object(u.jsx)(u.Fragment,{children:0==n.length?Object(u.jsx)("h4",{children:"No Data"}):null})]})})})]})})}}}]);
//# sourceMappingURL=83.5c131f8e.chunk.js.map