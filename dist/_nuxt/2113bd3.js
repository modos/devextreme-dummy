(window.webpackJsonp=window.webpackJsonp||[]).push([[4,5],{338:function(t,e,n){var content=n(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(156).default)("3bca3fff",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var o=n(350),r={components:{DxDataGrid:o.DxDataGrid,DxColumn:o.DxColumn},props:{templateData:{type:Object,default:function(){}}},data:function(){return{images:this.templateData.data.images}}},l=(n(356),n(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",t._l(t.images,(function(image,i){return e("img",{attrs:{src:image,width:"64",height:"64"}})})),0)}),[],!1,null,null,null);e.default=component.exports},356:function(t,e,n){"use strict";n(338)},357:function(t,e,n){var o=n(155)(!1);o.push([t.i,".master-detail-caption{padding:0 0 5px 10px;font-size:14px;font-weight:700}",""]),t.exports=o},375:function(t,e,n){"use strict";n.r(e);n(48),n(39),n(47),n(16),n(79),n(40),n(80);var o=n(398),r=n(31),l=(n(58),n(376),n(225),n(350)),c=n(394),d=n(94),D=(n(395),n(349));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{DxDataGrid:l.DxDataGrid,DxColumn:l.DxColumn,DxEditing:l.DxEditing,DxLoadPanel:c.DxLoadPanel,DxSorting:l.DxSorting,DxRowDragging:l.DxRowDragging,DxColumnChooser:l.DxColumnChooser,DxScrolling:l.DxScrolling,DxFilterRow:l.DxFilterRow,DxGrouping:l.DxGrouping,DxGroupPanel:l.DxGroupPanel,DxMasterDetail:l.DxMasterDetail,DxSearchPanel:l.DxSearchPanel,NestedTemplate:D.default},data:function(){return{loadPanelPosition:{of:"#gridContainer"}}},computed:x(x({},Object(d.c)(["products","isLoading"])),{},{editRowKey:{get:function(){return this.$store.state.editRowKey},set:function(t){this.setEditRowKey(t)}},changes:{get:function(){return this.$store.state.changes},set:function(t){this.setChanges(t)}},changesText:{get:function(){return JSON.stringify(this.changes.map((function(t){return{type:t.type,key:"insert"!==t.type?t.key:void 0,data:t.data}})),null," ")}}}),beforeMount:function(){this.loadProducts()},methods:x(x({},Object(d.b)(["setEditRowKey","setChanges","loadProducts","insert","update","remove","saveChange"])),{},{onSaving:function(t){console.log(t.changes),t.cancel=!0,t.promise=this.saveChange(t.changes[0])},onReorder:function(t){var e=t.component.getVisibleRows(),n=this.products.findIndex((function(n){return n.id===e[t.toIndex].data.id})),r=this.products.findIndex((function(e){return e.id===t.itemData.id})),l=Object(o.a)(this.products);l.splice(r,1),l.splice(n,0,t.itemData),this.$store.dispatch("reOrder",l)}})},m=n(57),component=Object(m.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("DxLoadPanel",{attrs:{position:t.loadPanelPosition,visible:t.isLoading}}),t._v(" "),e("DxDataGrid",{attrs:{id:"gridContainer","key-expr":"id","data-source":t.products,"show-borders":!1,"repaint-changes-only":!0},on:{saving:t.onSaving},scopedSlots:t._u([{key:"masterDetailTemplate",fn:function(t){var n=t.data;return[e("NestedTemplate",{attrs:{"template-data":n}})]}}])},[e("DxSearchPanel",{attrs:{visible:!0}}),t._v(" "),e("DxScrolling",{attrs:{mode:"infinite"}}),t._v(" "),e("DxRowDragging",{attrs:{"allow-reordering":!0,"on-reorder":t.onReorder,"show-drag-icons":!0}}),t._v(" "),e("DxSorting",{attrs:{mode:"multiple"}}),t._v(" "),e("DxFilterRow",{attrs:{visible:!0}}),t._v(" "),e("DxGrouping",{attrs:{"context-menu-enabled":!0}}),t._v(" "),e("DxGroupPanel",{attrs:{visible:!0}}),t._v(" "),e("DxMasterDetail",{attrs:{enabled:!0,template:"masterDetailTemplate"}}),t._v(" "),e("DxColumnChooser",{attrs:{enabled:!0,mode:"dragAndDrop"}}),t._v(" "),t._v(" "),e("DxEditing",{attrs:{mode:"row","allow-adding":!0,"allow-deleting":!0,"allow-updating":!0},model:{value:t.editRowKey,callback:function(e){t.editRowKey=e},expression:"editRowKey"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{NestedTemplate:n(349).default})}}]);