/*! Built with http://stenciljs.com */
const{h:t}=window.webcomponents;import{b as s}from"./chunk-bc34555f.js";import{b as e,c as o}from"./chunk-6a8011c5.js";class i{componentWillLoad(){this.store=o(this),this.unsubscribe=e(this,this.store,["directionState"]),this.dispatch({type:s.setContentEl,contentEl:this.el})}componentDidLoad(){this.dispatch({type:s.toggleArrowEl,arrowEl:this.arrowEl})}componentDidUnload(){this.dispatch({type:s.toggleArrowEl,arrowEl:this.arrowEl}),this.dispatch({type:s.setContentEl,contentEl:void 0}),this.unsubscribe()}dispatch(t){this.store&&this.store.dispatch(t)}hostData(){return{class:{[this.directionState]:!0}}}render(){return t("div",{class:"item"},t("div",{class:"arrow",ref:t=>this.arrowEl=t}),t("div",{class:"body"},t("slot",null)))}static get is(){return"sdx-menu-flyout-content"}static get encapsulation(){return"shadow"}static get properties(){return{directionState:{state:!0},el:{elementRef:!0}}}static get style(){return".sc-sdx-menu-flyout-content-h{-webkit-box-sizing:border-box;box-sizing:border-box}*.sc-sdx-menu-flyout-content, .sc-sdx-menu-flyout-content:after, .sc-sdx-menu-flyout-content:before{-webkit-box-sizing:inherit;box-sizing:inherit}.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:none;position:absolute;background-color:#fff;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.sc-sdx-menu-flyout-content-h{display:block;position:absolute;top:0;left:0;z-index:60000;-webkit-box-shadow:0 0 4px 0 rgba(0,0,0,.2);box-shadow:0 0 4px 0 rgba(0,0,0,.2)}.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .body.sc-sdx-menu-flyout-content{position:relative;background-color:#fff;padding:24px;-webkit-transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1);transition:border-bottom .2s cubic-bezier(.4,0,.6,1),color .2s cubic-bezier(.4,0,.6,1)}.sc-sdx-menu-flyout-content-h:not(:last-of-type) > .item.sc-sdx-menu-flyout-content > .body.sc-sdx-menu-flyout-content{border-bottom:1px solid #e4e9ec}.bottom-left.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content, .bottom-right.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:block;top:-7px;-webkit-box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15);box-shadow:-1px -1px 2px 0 rgba(0,0,0,.15)}.top-left.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content, .top-right.sc-sdx-menu-flyout-content-h > .item.sc-sdx-menu-flyout-content > .arrow.sc-sdx-menu-flyout-content{display:block;bottom:-7px;-webkit-box-shadow:1px 1px 2px 0 rgba(0,0,0,.15);box-shadow:1px 1px 2px 0 rgba(0,0,0,.15)}"}}export{i as SdxMenuFlyoutContent};