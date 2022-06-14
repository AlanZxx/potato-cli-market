(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6cc3b8c0"],{"4f04":function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mall"},[n("div",{staticClass:"other"},[n("el-button",{staticClass:"button",attrs:{type:"success",icon:"el-icon-circle-plus-outline"},on:{click:e.add}}),n("el-button",{attrs:{calss:"button",type:"warning",icon:"el-icon-edit"},on:{click:e.modify}}),n("el-button",{staticClass:"button",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.del}})],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],ref:"multipleTable",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark",border:""},on:{"selection-change":e.handleSelectionChange}},[n("el-table-column",{attrs:{type:"selection"}}),n("el-table-column",{attrs:{prop:"saleTypeId",label:"销售种类Id"}}),n("el-table-column",{attrs:{prop:"saleTypeName",label:"销售种类名称"}}),n("el-table-column",{attrs:{label:"下属商品数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{style:{color:t.row.goodsCount>5?"blue":"red"}},[e._v(e._s(t.row.goodsCount))])]}}])}),n("el-table-column",{attrs:{label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{staticStyle:{color:"gray"}},[e._v(e._s(t.row.detail))])]}}])}),n("el-table-column",{attrs:{label:"添加日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.addTime)))]}}])}),n("el-table-column",{attrs:{label:"修改日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.updateTime)))]}}])})],1),n("el-dialog",{attrs:{title:e.operaTypeTitle,visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[n("el-form-item",{attrs:{label:"名称",prop:"saleTypeName",rules:[{required:!0,message:"销售方式名称不能为空",trigger:"blur"}]}},[n("el-input",{attrs:{type:"text",placeholder:"请输入销售方式名称",maxlength:"20","show-word-limit":"",clearable:""},model:{value:e.form.saleTypeName,callback:function(t){e.$set(e.form,"saleTypeName",t)},expression:"form.saleTypeName"}})],1),n("el-form-item",{attrs:{label:"备注"}},[n("el-input",{attrs:{type:"textarea",placeholder:"请输入备注",maxlength:"255","show-word-limit":"",clearable:""},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:e.dialogCancel}},[e._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)},o=[],a=(n("e9c4"),n("d81d"),n("7e1e")),i={name:"saleTypeManage",data:function(){return{dialogVisible:!1,fullscreenLoading:!1,operaTypeId:-1,operaTypeTitle:"",tableData:[{saleTypeId:"",saleTypeName:"",goodsCount:"",detail:"",addTime:"",updateTime:""}],multipleSelection:[],form:{saleTypeId:"",saleTypeName:"",goodsCount:"",detail:"",addTime:"",updateTime:""},mallTypeList:[],saleTypeList:[],saleType:[{saleTypeId:"01",saleTypeName:"按G"}],salePrice:[{saleTypeId:"02",saleTypeName:"袋重"}]}},watch:{operaTypeId:function(e){this.operaTypeTitle=this.$store.state.commonmessage.saleType[e].dialogtitile}},mounted:function(){this.operaTypeId=-1,this.getInitData()},methods:{getInitData:function(){var e=this;this.fullscreenLoading=!0,console.log("@@@@@@@@@@ getSaleTypeList"),Object(a["h"])().then((function(t){var n=t.data,r=n.code,o=n.data;200===r&&(console.log(t),e.tableData=o)})),this.fullscreenLoading=!1},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e)},handleClose:function(e){var t=this;this.$confirm("确认关闭?").then((function(n){t.dialogCancel(),e()}))["catch"]((function(e){}))},copyMessage:function(e){return JSON.parse(JSON.stringify(e))},dialogCancel:function(){this.dialogVisible=!1;var e=this.copyMessage(this.$store.state.commonmessage.saleType[this.operaTypeId].cancel);this.$message(e)},submit:function(){switch(this.operaTypeId){case 0:this.addConfirm();break;case 3:this.modifyConfirm();break}},del:function(){var e=this;if(this.operaTypeId=1,this.multipleSelection.length<1)this.$message.error("请选择要删除的选项");else{var t=this.$store.state.commonmessage.saleType[this.operaTypeId]["delete"].message;this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.fullscreenLoading=!0;var t=e.multipleSelection.map((function(e,t){return e.saleTypeId})),n={idList:t};Object(a["d"])(n).then((function(t){var n=t.data,r=n.code,o=n.message;n.data;200===r&&(e.$message(e.copyMessage(e.$store.state.commonmessage.saleType[e.operaTypeId].success)),e.getInitData(),e.fullscreenLoading=!1),500===r&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1}))}))["catch"]((function(){e.dialogCancel()}))}},add:function(){this.operaTypeId=0,this.initForm(),this.dialogVisible=!0},addConfirm:function(){var e=this;Object(a["b"])(this.form).then((function(t){var n=t.data,r=n.code,o=n.message;n.data;if(200===r){e.dialogVisible=!1,e.getInitData();var a=e.copyMessage(e.$store.state.commonmessage.saleType[e.operaTypeId].success);e.$message(a),e.fullscreenLoading=!1}500===r&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1})),this.fullscreenLoading=!1},query:function(){console.log("query"),console.log(this.multipleSelection)},modify:function(){this.operaTypeId=3,console.log("modify"),1==this.multipleSelection.length?(this.form=this.copyMessage(this.multipleSelection[0]),this.dialogVisible=!0):this.$message({message:"只能选择一项进行修改",type:"warning"})},modifyConfirm:function(){var e=this;this.form;console.log(this.form),Object(a["j"])(this.form).then((function(t){var n=t.data,r=n.code,o=n.message;n.data;200===r&&(e.$message(e.copyMessage(e.$store.state.commonmessage.saleType[e.operaTypeId].success)),e.getInitData(),e.fullscreenLoading=!1,e.dialogVisible=!1),500===r&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1}))},handleEdit:function(e,t){console.log(e,t)},initForm:function(){this.form.saleTypeId="",this.form.saleTypeName="",this.form.goodsCount="",this.form.detail="",this.form.addTime="",this.form.updateTime=""}}},s=i,l=(n("c056"),n("2877")),c=Object(l["a"])(s,r,o,!1,null,"392ad12d",null);t["default"]=c.exports},"6d87":function(e,t,n){},7156:function(e,t,n){var r=n("1626"),o=n("861d"),a=n("d2bb");e.exports=function(e,t,n){var i,s;return a&&r(i=t.constructor)&&i!==n&&o(s=i.prototype)&&s!==n.prototype&&a(e,s),e}},"7e1e":function(e,t,n){"use strict";n.d(t,"g",(function(){return p})),n.d(t,"f",(function(){return m})),n.d(t,"a",(function(){return g})),n.d(t,"c",(function(){return h})),n.d(t,"i",(function(){return y})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return v})),n.d(t,"h",(function(){return T})),n.d(t,"d",(function(){return w})),n.d(t,"j",(function(){return C}));n("d3b7");var r=n("5530");n("d9e2"),n("d401");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n("7a82");function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&a(e.prototype,t),n&&a(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var s=n("bc3a"),l=n.n(s),c={title:"admin",baseUrl:{dev:"/potato-web-market/",pro:""}},u=c.baseUrl.pro,d=function(){function e(t){o(this,e),this.baseURL=t}return i(e,[{key:"getInsideConfig",value:function(){var e={baseURL:this.baseURL,header:{}};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return console.log("拦截处理请求"),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return console.log("处理响应"),e}),(function(e){return console.log(e),Promise.reject(e)}))}},{key:"request",value:function(e){var t=l.a.create();return e=Object(r["a"])(Object(r["a"])({},this.getInsideConfig()),e),this.interceptors(t),t(e)}},{key:"requestFormData",value:function(e){var t=l.a.create();return t.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",t.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",t.defaults.transformRequest=[function(e){var t="";for(var n in e)t+=encodeURIComponent(n)+"="+encodeURIComponent(e[n])+"&";return t}],e=Object(r["a"])(Object(r["a"])({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),f=new d(u),p=function(){return f.request({url:"/getMenuDataList",method:"get"})},m=function(){return f.request({url:"/getMallTypeList",method:"get"})},g=function(e){return f.request({url:"/addMallType",method:"post",data:e})},h=function(e){return f.requestFormData({url:"/delMallType",method:"post",data:e})},y=function(e){return f.request({url:"/modMallType",method:"post",data:e})},b=function(){return f.request({url:"/getGoodList",method:"get"})},v=function(e){return f.request({url:"/addSaleType",method:"post",data:e})},T=function(){return f.request({url:"/getSaleTypeList",method:"get"})},w=function(e){return f.requestFormData({url:"/delSaleType",method:"post",data:e})},C=function(e){return f.request({url:"/modSaleType",method:"post",data:e})}},aa1f:function(e,t,n){"use strict";var r=n("83ab"),o=n("d039"),a=n("825a"),i=n("7c73"),s=n("e391"),l=Error.prototype.toString,c=o((function(){if(r){var e=i(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==l.call(e))return!0}return"2: 1"!==l.call({message:1,name:2})||"Error"!==l.call({})}));e.exports=c?function(){var e=a(this),t=s(e.name,"Error"),n=s(e.message);return t?n?t+": "+n:t:n}:l},ab36:function(e,t,n){var r=n("861d"),o=n("9112");e.exports=function(e,t){r(t)&&"cause"in t&&o(e,"cause",t.cause)}},b980:function(e,t,n){var r=n("d039"),o=n("5c6c");e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},c056:function(e,t,n){"use strict";n("6d87")},c770:function(e,t,n){var r=n("e330"),o=r("".replace),a=function(e){return String(Error(e).stack)}("zxcasd"),i=/\n\s*at [^:]*:[^\n]*/,s=i.test(a);e.exports=function(e,t){if(s&&"string"==typeof e)while(t--)e=o(e,i,"");return e}},d401:function(e,t,n){var r=n("6eeb"),o=n("aa1f"),a=Error.prototype;a.toString!==o&&r(a,"toString",o)},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,a=n("1dde"),i=a("map");r({target:"Array",proto:!0,forced:!i},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},d9e2:function(e,t,n){var r=n("23e7"),o=n("da84"),a=n("2ba4"),i=n("e5cb"),s="WebAssembly",l=o[s],c=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=i(e,t,c),r({global:!0,forced:c},n)},d=function(e,t){if(l&&l[e]){var n={};n[e]=i(s+"."+e,t,c),r({target:s,stat:!0,forced:c},n)}};u("Error",(function(e){return function(t){return a(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return a(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return a(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return a(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return a(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return a(e,this,arguments)}})),u("URIError",(function(e){return function(t){return a(e,this,arguments)}})),d("CompileError",(function(e){return function(t){return a(e,this,arguments)}})),d("LinkError",(function(e){return function(t){return a(e,this,arguments)}})),d("RuntimeError",(function(e){return function(t){return a(e,this,arguments)}}))},e391:function(e,t,n){var r=n("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},e5cb:function(e,t,n){"use strict";var r=n("d066"),o=n("1a2d"),a=n("9112"),i=n("3a9b"),s=n("d2bb"),l=n("e893"),c=n("7156"),u=n("e391"),d=n("ab36"),f=n("c770"),p=n("b980"),m=n("c430");e.exports=function(e,t,n,g){var h=g?2:1,y=e.split("."),b=y[y.length-1],v=r.apply(null,y);if(v){var T=v.prototype;if(!m&&o(T,"cause")&&delete T.cause,!n)return v;var w=r("Error"),C=t((function(e,t){var n=u(g?t:e,void 0),r=g?new v(e):new v;return void 0!==n&&a(r,"message",n),p&&a(r,"stack",f(r.stack,2)),this&&i(T,this)&&c(r,this,C),arguments.length>h&&d(r,arguments[h]),r}));if(C.prototype=T,"Error"!==b&&(s?s(C,w):l(C,w,{name:!0})),l(C,v),!m)try{T.name!==b&&a(T,"name",b),T.constructor=C}catch(k){}return C}}},e9c4:function(e,t,n){var r=n("23e7"),o=n("da84"),a=n("d066"),i=n("2ba4"),s=n("e330"),l=n("d039"),c=o.Array,u=a("JSON","stringify"),d=s(/./.exec),f=s("".charAt),p=s("".charCodeAt),m=s("".replace),g=s(1..toString),h=/[\uD800-\uDFFF]/g,y=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,v=function(e,t,n){var r=f(n,t-1),o=f(n,t+1);return d(y,e)&&!d(b,o)||d(b,e)&&!d(y,r)?"\\u"+g(p(e,0),16):e},T=l((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&r({target:"JSON",stat:!0,forced:T},{stringify:function(e,t,n){for(var r=0,o=arguments.length,a=c(o);r<o;r++)a[r]=arguments[r];var s=i(u,null,a);return"string"==typeof s?m(s,h,v):s}})}}]);
//# sourceMappingURL=chunk-6cc3b8c0.0939d0f1.js.map