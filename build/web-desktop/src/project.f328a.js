window.__require=function e(t,o,n){function r(i,a){if(!o[i]){if(!t[i]){var s=i.split("/");if(s=s[s.length-1],!t[s]){var p="function"==typeof __require&&__require;if(!a&&p)return p(s,!0);if(c)return c(s,!0);throw new Error("Cannot find module '"+i+"'")}i=s}var d=o[i]={exports:{}};t[i][0].call(d.exports,function(e){return r(t[i][1][e]||e)},d,d.exports,e,t,o,n)}return o[i].exports}for(var c="function"==typeof __require&&__require,i=0;i<n.length;i++)r(n[i]);return r}({Camera:[function(e,t,o){"use strict";cc._RF.push(t,"6c0e1744K5Hh76s+n8RcQ4I","Camera");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,o,i):r(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=c.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.heroNode=null,t}return n(t,e),t.prototype.update=function(e){if(this.heroNode){var t=this.heroNode.convertToWorldSpaceAR(cc.v2(0,0));this.node.setPosition(this.node.parent.convertToNodeSpaceAR(t))}},r([a(cc.Node)],t.prototype,"heroNode",void 0),t=r([i],t)}(cc.Component);o.default=s,cc._RF.pop()},{}],Consts:[function(e,t,o){"use strict";cc._RF.push(t,"dd162b66+1K+KLI1VfspaXe","Consts"),Object.defineProperty(o,"__esModule",{value:!0}),function(e){e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(o.Direction||(o.Direction={})),cc._RF.pop()},{}],Hero:[function(e,t,o){"use strict";cc._RF.push(t,"f63dfuVnsBBJ725V0xOhTdV","Hero");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,o,i):r(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=e("./Consts"),i=cc._decorator,a=i.ccclass,s=(i.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._amin=null,t._speed=15e3,t._dir=c.Direction.Down,t._bias=cc.v2(0,0),t._lv=null,t._rigidBody=null,t}return n(t,e),t.prototype.onLoad=function(){this._rigidBody=this.getComponent(cc.RigidBody),this._amin=this.getComponent(cc.Animation),cc.systemEvent.on("keydown",this._onKeyDown,this),cc.systemEvent.on("keyup",this._onKeyUp,this)},t.prototype.onDestroy=function(){cc.systemEvent.off("keydown",this._onKeyDown,this),cc.systemEvent.off("keyup",this._onKeyUp,this)},t.prototype._onKeyUp=function(){this._dir=null,this._amin.stop()},t.prototype._onKeyDown=function(e){switch(e.keyCode){case cc.macro.KEY.w:case cc.macro.KEY.up:this._dir=c.Direction.Up,this._bias=cc.v2(0,1);break;case cc.macro.KEY.s:case cc.macro.KEY.down:this._dir=c.Direction.Down,this._bias=cc.v2(0,-1);break;case cc.macro.KEY.a:case cc.macro.KEY.left:this._dir=c.Direction.Left,this._bias=cc.v2(-1,0);break;case cc.macro.KEY.d:case cc.macro.KEY.right:this._dir=c.Direction.Right,this._bias=cc.v2(1,0)}this._playAnimation()},t.prototype._playAnimation=function(){switch(this._dir){case c.Direction.Up:this._amin.play("move_up");break;case c.Direction.Down:this._amin.play("move_down");break;case c.Direction.Left:this._amin.play("move_left");break;case c.Direction.Right:this._amin.play("move_right")}},t.prototype.update=function(e){this._dir?this._rigidBody.linearVelocity=cc.v2(this._bias.x*this._speed*e,this._bias.y*this._speed*e):this._rigidBody.linearVelocity=cc.Vec2.ZERO},t.prototype.onCollisionEnter=function(e,t){"smog"===e.node.group&&(e.node.getComponent(cc.TiledTile).gid=0)},t.prototype.onCollisionExit=function(e,t){"smog"===e.node.group&&(e.node.getComponent(cc.TiledTile).gid=79)},t=r([a],t)}(cc.Component));o.default=s,cc._RF.pop()},{"./Consts":"Consts"}],game:[function(e,t,o){"use strict";cc._RF.push(t,"e1b90/rohdEk4SdmmEZANaD","game");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),r=this&&this.__decorate||function(e,t,o,n){var r,c=arguments.length,i=c<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,o,n);else for(var a=e.length-1;a>=0;a--)(r=e[a])&&(i=(c<3?r(i):c>3?r(t,o,i):r(t,o))||i);return c>3&&i&&Object.defineProperty(t,o,i),i};Object.defineProperty(o,"__esModule",{value:!0});var c=cc._decorator,i=c.ccclass,a=c.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mapNode=null,t}return n(t,e),t.prototype.onLoad=function(){var e=cc.director.getPhysicsManager();e.enabled=!0,e.debugDrawFlags=0,e.gravity=cc.v2(0,0),cc.director.getCollisionManager().enabled=!0;this._loadMap([["00000","01000","00000"],["00010","11110","00100"],["00000","10000","00000"]])},t.prototype._initMap=function(){for(var e=0,t=this.mapNode.children;e<t.length;e++){var o=t[e].getComponent(cc.TiledMap),n=o.getTileSize(),r=o.getLayer("wall"),c=o.getLayer("smog");c.node.active=!0;for(var i=r.getLayerSize(),a=0;a<i.width;a++)for(var s=0;s<i.height;s++){var p=r.getTiledTileAt(a,s,!0);if(p.node.group="wall",p.gid){p.node.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var d=p.node.addComponent(cc.PhysicsBoxCollider);d.offset=cc.v2(n.width/2,n.height/2),d.size=n,d.apply()}var u=c.getTiledTileAt(a,s,!0);u.node.group="smog";var f=u.node.addComponent(cc.BoxCollider);f.offset=cc.v2(n.width/2,n.height/2),f.size=n}}},t.prototype._loadMap=function(e){for(var t=this,o=0,n=null,r=function(r,c){for(var i=function(c,i){var a=e[r][c];if(!a||"00000"===a)return"continue";o++,cc.loader.loadRes("map/"+a,cc.TiledMapAsset,function(e,i){if(e)throw console.error("load map "+a+" error: ",e),e;n||(n={i:r,j:c});var s=new cc.Node("map"+r+c);s.x=384*(c-n.j),s.y=384*-(r-n.i),s.addComponent(cc.TiledMap).tmxAsset=i,s.anchorX=s.anchorY=0,t.mapNode.addChild(s),--o<=0&&t._initMap()})},a=0,s=e[r].length;r<s;a++)i(a)},c=0,i=e.length;c<i;c++)r(c)},r([a(cc.Node)],t.prototype,"mapNode",void 0),t=r([i],t)}(cc.Component);o.default=s,cc._RF.pop()},{}],use_reversed_rotateTo:[function(e,t,o){"use strict";cc._RF.push(t,"a3842bBTaRIS669QV2G8s9r","use_reversed_rotateTo"),cc.RotateTo._reverse=!0,cc._RF.pop()},{}]},{},["Camera","Consts","Hero","game","use_reversed_rotateTo"]);