(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ca78143"],{7156:function(e,t,r){var n=r("1626"),o=r("861d"),a=r("d2bb");e.exports=function(e,t,r){var l,i;return a&&n(l=t.constructor)&&l!==r&&o(i=l.prototype)&&i!==r.prototype&&a(e,i),e}},"7dc2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"mall"},[r("div",{staticClass:"search"},[r("el-input",{staticClass:"input",attrs:{placeholder:"商品名"}}),r("el-input",{staticClass:"input",attrs:{placeholder:"价格范围(大于等于)"}}),r("el-input",{staticClass:"input",attrs:{placeholder:"价格范围(小于等于)"}}),r("el-select",{staticClass:"input",staticStyle:{width:"100%"},attrs:{placeholder:"请选择销售状态"},model:{value:e.form.typeId,callback:function(t){e.$set(e.form,"typeId",t)},expression:"form.typeId"}},e._l(e.mallTypeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),r("el-select",{staticClass:"input",staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属种类"},model:{value:e.form.typeId,callback:function(t){e.$set(e.form,"typeId",t)},expression:"form.typeId"}},e._l(e.mallTypeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1),r("el-button",{staticClass:"button",attrs:{type:"primary",circle:"",icon:"el-icon-search"},on:{click:e.query}}),r("el-input",{staticClass:"input",attrs:{placeholder:"请输入商品编号精确查找"}}),r("el-button",{staticClass:"button",attrs:{type:"primary",circle:"",icon:"el-icon-search"},on:{click:e.query}})],1),r("div",{staticClass:"other"},[r("el-button",{staticClass:"button",attrs:{type:"success",icon:"el-icon-circle-plus-outline"},on:{click:e.add}}),r("el-button",{attrs:{calss:"button",type:"warning",icon:"el-icon-edit"},on:{click:e.modify}}),r("el-button",{staticClass:"button",attrs:{type:"danger",icon:"el-icon-delete"},on:{click:e.del}})],1),r("el-table",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],ref:"multipleTable",staticClass:"table",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[r("el-table-column",{attrs:{type:"selection"}}),r("el-table-column",{attrs:{prop:"goodId",label:"商品编号"}}),r("el-table-column",{attrs:{prop:"goodName",label:"商品名称"}}),r("el-table-column",{attrs:{label:"添加日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.addTime))]}}])}),r("el-table-column",{attrs:{label:"修改日期"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e._f("formatDate")(t.row.updateTime)))]}}])}),r("el-table-column",{attrs:{label:"商品库存"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{style:{color:t.row.counts>5?"blue":"red"}},[e._v(e._s(t.row.counts))])]}}])}),r("el-table-column",{attrs:{label:"商品所属种类"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.typeName)+" ")]}}])}),r("el-table-column",{attrs:{label:"商品售卖方式"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.saleTypeName)+" ")]}}])}),r("el-table-column",{attrs:{label:"备注"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{staticStyle:{color:"gray"}},[e._v(e._s(t.row.detail))])]}}])}),r("el-table-column",{attrs:{label:"图片"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("span",{style:{color:t.row.counts>5?"blue":"red"}},[e._v(e._s(t.row.counts))])]}}])}),r("el-table-column",{attrs:{label:"原定价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.price)+" ")]}}])}),r("el-table-column",{attrs:{label:"折扣价格"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.priceDis)+" ")]}}])}),r("el-table-column",{attrs:{label:"折扣"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.discount)+" ")]}}])}),r("el-table-column",{attrs:{label:"详细管理"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(r){return e.handleEdit(t.$index,t.row)}}},[e._v("编辑 ")])]}}])})],1),r("el-dialog",{attrs:{title:e.operaTypeTitle,visible:e.dialogVisible,width:"30%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[r("el-form-item",{attrs:{label:"名称",prop:"goodName",rules:[{required:!0,message:"名称不能为空",trigger:"blur"}]}},[r("el-input",{attrs:{type:"text",placeholder:"请输入商品名称",maxlength:"20","show-word-limit":""},model:{value:e.form.goodName,callback:function(t){e.$set(e.form,"goodName",t)},expression:"form.goodName"}})],1),r("el-form-item",{attrs:{label:"所属种类",prop:"typeId",rules:[{required:!0,message:"种类不能为空",trigger:"blur"}]}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择所属种类"},model:{value:e.form.typeId,callback:function(t){e.$set(e.form,"typeId",t)},expression:"form.typeId"}},e._l(e.mallTypeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"销售方式",prop:"sallType",rules:[{required:!0,message:"销售方式不能为空",trigger:"blur"}]}},[r("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择销售方式"},model:{value:e.form.sallType,callback:function(t){e.$set(e.form,"sallType",t)},expression:"form.sallType"}},e._l(e.saleTypeList,(function(e){return r("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})})),1)],1),r("el-form-item",{attrs:{label:"库存量",prop:"counts",rules:[{required:!0,message:"库存量不能为空",trigger:"blur"}]}},[r("el-input-number",{staticStyle:{width:"100%"},attrs:{min:1,label:"请输入库存量"},model:{value:e.form.counts,callback:function(t){e.$set(e.form,"counts",t)},expression:"form.counts"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price",rules:[{required:!0,message:"价格不能为空",trigger:"blur"}]}},[r("el-input",{attrs:{type:"number",placeholder:"请输入价格"},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),r("el-form-item",{attrs:{label:"折扣价格"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入商品折扣价"},model:{value:e.form.priceDis,callback:function(t){e.$set(e.form,"priceDis",t)},expression:"form.priceDis"}})],1),r("el-form-item",{attrs:{label:"折扣"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入商品折扣"},model:{value:e.form.discount,callback:function(t){e.$set(e.form,"discount",t)},expression:"form.discount"}})],1),r("el-form-item",{attrs:{label:"备注"}},[r("el-input",{attrs:{type:"text",placeholder:"请输入备注",maxlength:"255","show-word-limit":""},model:{value:e.form.detail,callback:function(t){e.$set(e.form,"detail",t)},expression:"form.detail"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:e.dialogCancel}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确 定")])],1)],1)],1)},o=[],a=(r("d3b7"),r("e9c4"),r("d81d"),r("7e1e")),l={name:"saleTypeManage",data:function(){return{dialogVisible:!1,fullscreenLoading:!1,operaTypeId:-1,operaTypeTitle:"",tableData:[{goodsId:"",goodsName:"",typeId:"",sallType:"",counts:"",detail:"",price:"",priceDis:"",discount:""}],multipleSelection:[],form:{goodsId:"",goodsName:"",typeId:"",sallType:"",counts:"",detail:"",price:"",priceDis:"",discount:""},mallTypeList:[],saleTypeList:[],saleType:[{saleTypeId:"01",saleTypeName:"按G"}],salePrice:[{saleTypeId:"02",saleTypeName:"袋重"}]}},watch:{operaTypeId:function(e){this.operaTypeTitle=this.$store.state.commonmessage.mall[e].dialogtitile}},mounted:function(){this.operaTypeId=-1,this.getInitData()},methods:{getInitData:function(){var e=this;this.fullscreenLoading=!0,console.log("@@@@@@@@@@ getMallType"),Object(a["e"])().then((function(t){var r=t.data,n=r.code,o=r.data;200===n&&(console.log(t),e.tableData=o)}))["catch"]()["finally"]((function(){e.fullscreenLoading=!1}))},handleSelectionChange:function(e){this.multipleSelection=e,console.log(e)},handleClose:function(e){var t=this;this.$confirm("确认关闭?").then((function(r){t.dialogCancel(),e()}))["catch"]((function(e){}))},copyMessage:function(e){return JSON.parse(JSON.stringify(e))},dialogCancel:function(){this.dialogVisible=!1;var e=this.copyMessage(this.$store.state.commonmessage.mall[this.operaTypeId].cancel);this.$message(e)},submit:function(){switch(this.operaTypeId){case 0:this.addConfirm();break;case 3:this.modifyConfirm();break}},del:function(){var e=this;if(this.operaTypeId=1,this.multipleSelection.length<1)this.$message.error("请选择要删除的选项");else{var t=this.$store.state.commonmessage.mall[this.operaTypeId].message;this.$confirm(t,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){e.fullscreenLoading=!0;var t=e.multipleSelection.map((function(e,t){return e.typeId})),r={idList:t};console.log(r),Object(a["c"])(r).then((function(t){var r=t.data,n=r.code,o=r.message;r.data;200===n&&(e.$message(e.copyMessage(e.$store.state.commonmessage.mall[e.operaTypeId].success)),e.getInitData(),e.fullscreenLoading=!1),500===n&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1}))}))["catch"]((function(){e.dialogCancel()}))}},getSelectData:function(){},add:function(){this.operaTypeId=0,this.initForm(),this.getSelectData(),this.dialogVisible=!0},addConfirm:function(){var e=this;Object(a["a"])(this.form).then((function(t){var r=t.data,n=r.code,o=r.message;r.data;if(200===n){e.dialogVisible=!1,e.getInitData();var a=e.copyMessage(e.$store.state.commonmessage.mall[e.operaTypeId].success);e.$message(a),e.fullscreenLoading=!1}500===n&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1})),this.fullscreenLoading=!1},query:function(){console.log("query"),console.log(this.multipleSelection)},modify:function(){this.operaTypeId=3,console.log("modify"),1==this.multipleSelection.length?(this.form=this.copyMessage(this.multipleSelection[0]),this.dialogVisible=!0):this.$message({message:"只能选择一项进行修改",type:"warning"})},modifyConfirm:function(){var e=this;console.log(this.form),Object(a["i"])(this.form).then((function(t){var r=t.data,n=r.code,o=r.message;r.data;200===n&&(e.$message(e.$store.state.commonmessage.mall[e.operaTypeId].success),e.getInitData(),e.fullscreenLoading=!1,e.dialogVisible=!1),500===n&&e.$message.error(o)}))["catch"]((function(){e.fullscreenLoading=!1}))},handleEdit:function(e,t){console.log(e,t)},initForm:function(){this.form={goodsId:"",goodsName:"",typeId:"",sallType:"",counts:"",detail:"",price:"",priceDis:"",discount:""}}}},i=l,s=(r("e124"),r("2877")),c=Object(s["a"])(i,n,o,!1,null,"d2f031c8",null);t["default"]=c.exports},"7e1e":function(e,t,r){"use strict";r.d(t,"g",(function(){return p})),r.d(t,"f",(function(){return m})),r.d(t,"a",(function(){return g})),r.d(t,"c",(function(){return y})),r.d(t,"i",(function(){return h})),r.d(t,"e",(function(){return b})),r.d(t,"b",(function(){return v})),r.d(t,"h",(function(){return T})),r.d(t,"d",(function(){return k})),r.d(t,"j",(function(){return w}));r("d3b7");var n=r("5530");r("d9e2"),r("d401");function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}r("7a82");function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}var i=r("bc3a"),s=r.n(i),c={title:"admin",baseUrl:{dev:"/potato-web-market/",pro:""}},u=c.baseUrl.pro,d=function(){function e(t){o(this,e),this.baseURL=t}return l(e,[{key:"getInsideConfig",value:function(){var e={baseURL:this.baseURL,header:{}};return e}},{key:"interceptors",value:function(e){e.interceptors.request.use((function(e){return console.log("拦截处理请求"),e}),(function(e){return Promise.reject(e)})),e.interceptors.response.use((function(e){return console.log("处理响应"),e}),(function(e){return console.log(e),Promise.reject(e)}))}},{key:"request",value:function(e){var t=s.a.create();return e=Object(n["a"])(Object(n["a"])({},this.getInsideConfig()),e),this.interceptors(t),t(e)}},{key:"requestFormData",value:function(e){var t=s.a.create();return t.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",t.defaults.headers["Content-Type"]="application/x-www-form-urlencoded",t.defaults.transformRequest=[function(e){var t="";for(var r in e)t+=encodeURIComponent(r)+"="+encodeURIComponent(e[r])+"&";return t}],e=Object(n["a"])(Object(n["a"])({},this.getInsideConfig()),e),this.interceptors(t),t(e)}}]),e}(),f=new d(u),p=function(){return f.request({url:"/getMenuDataList",method:"get"})},m=function(){return f.request({url:"/getMallTypeList",method:"get"})},g=function(e){return f.request({url:"/addMallType",method:"post",data:e})},y=function(e){return f.requestFormData({url:"/delMallType",method:"post",data:e})},h=function(e){return f.request({url:"/modMallType",method:"post",data:e})},b=function(){return f.request({url:"/getGoodList",method:"get"})},v=function(e){return f.request({url:"/addSaleType",method:"post",data:e})},T=function(){return f.request({url:"/getSaleTypeList",method:"get"})},k=function(e){return f.requestFormData({url:"/delSaleType",method:"post",data:e})},w=function(e){return f.request({url:"/modSaleType",method:"post",data:e})}},aa1f:function(e,t,r){"use strict";var n=r("83ab"),o=r("d039"),a=r("825a"),l=r("7c73"),i=r("e391"),s=Error.prototype.toString,c=o((function(){if(n){var e=l(Object.defineProperty({},"name",{get:function(){return this===e}}));if("true"!==s.call(e))return!0}return"2: 1"!==s.call({message:1,name:2})||"Error"!==s.call({})}));e.exports=c?function(){var e=a(this),t=i(e.name,"Error"),r=i(e.message);return t?r?t+": "+r:t:r}:s},ab36:function(e,t,r){var n=r("861d"),o=r("9112");e.exports=function(e,t){n(t)&&"cause"in t&&o(e,"cause",t.cause)}},b980:function(e,t,r){var n=r("d039"),o=r("5c6c");e.exports=!n((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",o(1,7)),7!==e.stack)}))},c603:function(e,t,r){},c770:function(e,t,r){var n=r("e330"),o=n("".replace),a=function(e){return String(Error(e).stack)}("zxcasd"),l=/\n\s*at [^:]*:[^\n]*/,i=l.test(a);e.exports=function(e,t){if(i&&"string"==typeof e)while(t--)e=o(e,l,"");return e}},d401:function(e,t,r){var n=r("6eeb"),o=r("aa1f"),a=Error.prototype;a.toString!==o&&n(a,"toString",o)},d81d:function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").map,a=r("1dde"),l=a("map");n({target:"Array",proto:!0,forced:!l},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},d9e2:function(e,t,r){var n=r("23e7"),o=r("da84"),a=r("2ba4"),l=r("e5cb"),i="WebAssembly",s=o[i],c=7!==Error("e",{cause:7}).cause,u=function(e,t){var r={};r[e]=l(e,t,c),n({global:!0,forced:c},r)},d=function(e,t){if(s&&s[e]){var r={};r[e]=l(i+"."+e,t,c),n({target:i,stat:!0,forced:c},r)}};u("Error",(function(e){return function(t){return a(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return a(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return a(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return a(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return a(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return a(e,this,arguments)}})),u("URIError",(function(e){return function(t){return a(e,this,arguments)}})),d("CompileError",(function(e){return function(t){return a(e,this,arguments)}})),d("LinkError",(function(e){return function(t){return a(e,this,arguments)}})),d("RuntimeError",(function(e){return function(t){return a(e,this,arguments)}}))},e124:function(e,t,r){"use strict";r("c603")},e391:function(e,t,r){var n=r("577e");e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:n(e)}},e5cb:function(e,t,r){"use strict";var n=r("d066"),o=r("1a2d"),a=r("9112"),l=r("3a9b"),i=r("d2bb"),s=r("e893"),c=r("7156"),u=r("e391"),d=r("ab36"),f=r("c770"),p=r("b980"),m=r("c430");e.exports=function(e,t,r,g){var y=g?2:1,h=e.split("."),b=h[h.length-1],v=n.apply(null,h);if(v){var T=v.prototype;if(!m&&o(T,"cause")&&delete T.cause,!r)return v;var k=n("Error"),w=t((function(e,t){var r=u(g?t:e,void 0),n=g?new v(e):new v;return void 0!==r&&a(n,"message",r),p&&a(n,"stack",f(n.stack,2)),this&&l(T,this)&&c(n,this,w),arguments.length>y&&d(n,arguments[y]),n}));if(w.prototype=T,"Error"!==b&&(i?i(w,k):s(w,k,{name:!0})),s(w,v),!m)try{T.name!==b&&a(T,"name",b),T.constructor=w}catch(I){}return w}}},e9c4:function(e,t,r){var n=r("23e7"),o=r("da84"),a=r("d066"),l=r("2ba4"),i=r("e330"),s=r("d039"),c=o.Array,u=a("JSON","stringify"),d=i(/./.exec),f=i("".charAt),p=i("".charCodeAt),m=i("".replace),g=i(1..toString),y=/[\uD800-\uDFFF]/g,h=/^[\uD800-\uDBFF]$/,b=/^[\uDC00-\uDFFF]$/,v=function(e,t,r){var n=f(r,t-1),o=f(r,t+1);return d(h,e)&&!d(b,o)||d(b,e)&&!d(h,n)?"\\u"+g(p(e,0),16):e},T=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:T},{stringify:function(e,t,r){for(var n=0,o=arguments.length,a=c(o);n<o;n++)a[n]=arguments[n];var i=l(u,null,a);return"string"==typeof i?m(i,y,v):i}})}}]);
//# sourceMappingURL=chunk-0ca78143.1dd931f3.js.map