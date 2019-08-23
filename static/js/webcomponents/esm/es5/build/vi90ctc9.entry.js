/*! Built with http://stenciljs.com */
import{h}from"../webcomponents.core.js";import{b as SelectActionTypes}from"./chunk-ad9f4763.js";import{c as getStore,b as mapStateToProps}from"./chunk-6a8011c5.js";var SelectOptGroup=function(){function t(){this.name=""}return t.prototype.componentWillLoad=function(){this.store=getStore(this),this.unsubscribe=mapStateToProps(this,this.store,["direction","filter","filterFunction"]),this.dispatch({type:SelectActionTypes.toggleOptGroupEl,optgroupEl:this.el})},t.prototype.componentDidUnload=function(){this.dispatch({type:SelectActionTypes.toggleOptGroupEl,optgroupEl:this.el}),this.unsubscribe()},t.prototype.dispatch=function(t){this.store&&this.store.dispatch(t)},t.prototype.optgroupElMatchesFilter=function(t,e){for(var o=!1,r=0,n=t.querySelectorAll("sdx-select-option");r<n.length;r++)if(this.filterFunction(n[r],e)){o=!0;break}return o},t.prototype.hostData=function(){var t;return{style:{display:this.optgroupElMatchesFilter(this.el,this.filter)?"":"none"},class:(t={},t[this.direction]=!0,t)}},t.prototype.render=function(){return h("div",{class:"wrapper"},this.name&&h("div",{class:"title"},this.name),h("slot",null))},Object.defineProperty(t,"is",{get:function(){return"sdx-select-optgroup"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{direction:{state:!0},el:{elementRef:!0},filter:{state:!0},filterFunction:{state:!0},name:{type:String,attr:"name"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}:host{display:block}:host ::slotted(sdx-select-option){border-top:none;border-bottom:none}:host .wrapper{border-top:1px solid #d6d6d6;border-bottom:1px solid #d6d6d6}:host .wrapper .title{font-weight:600;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;padding:0 16px;height:48px;border-left:1px solid #d6d6d6;border-right:1px solid #d6d6d6}:host(.top) .wrapper{border-top:none}:host(.bottom) .wrapper{border-bottom:none}"},enumerable:!0,configurable:!0}),t}();export{SelectOptGroup as SdxSelectOptgroup};