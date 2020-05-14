window.__require=function e(t,o,n){function i(c,s){if(!o[c]){if(!t[c]){var a=c.split("/");if(a=a[a.length-1],!t[a]){var p="function"==typeof __require&&__require;if(!s&&p)return p(a,!0);if(r)return r(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=o[c]={exports:{}};t[c][0].call(u.exports,function(e){return i(t[c][1][e]||e)},u,u.exports,e,t,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({Camera:[function(e,t,o){"use strict";cc._RF.push(t,"6c0e1744K5Hh76s+n8RcQ4I","Camera");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,s=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.heroNode=null,t}return n(t,e),t.prototype.update=function(e){if(this.heroNode){var t=this.heroNode.convertToWorldSpaceAR(cc.v2(0,0));this.node.setPosition(this.node.parent.convertToNodeSpaceAR(t))}},i([s(cc.Node)],t.prototype,"heroNode",void 0),t=i([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],Coin:[function(e,t,o){"use strict";cc._RF.push(t,"216cfz26j5PZq3kZ0t3Up2Q","Coin");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(o,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="coin",t.offset=cc.v2(6,8),t}return n(t,e),t.prototype.init=function(t){e.prototype.init.call(this,t)},t}(e("./libs/Pickable").default);o.default=i,cc._RF.pop()},{"./libs/Pickable":"Pickable"}],Game:[function(e,t,o){"use strict";cc._RF.push(t,"1bcd4fr36BKxIa6jNXVrEXm","Game");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=e("./libs/mapTools"),c=e("./Coin"),s=e("./SpeedUp"),a=e("./Hero"),p=cc._decorator,u=p.ccclass,d=p.property,l=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.mapNode=null,t.loadNode=null,t.smogBtnLabel=null,t.coinLabel=null,t.speedLabel=null,t.hero=null,t.texture=null,t._turnSmogOn=!1,t._coin=0,t._speedCounter=0,t._coinBaseCount=10,t._speedUpBaseCount=1,t._timer=0,t}return n(t,e),t.prototype.onLoad=function(){var e=this,t=cc.director.getPhysicsManager();t.enabled=!0,t.gravity=cc.v2(0,0),cc.director.getCollisionManager().enabled=!0,this._loadMap(),cc.loader.loadRes("map/Dungeon_Tileset",cc.Texture2D,function(t,o){if(t)throw console.error("load texture error",t),t;e.texture=o})},t.prototype._loadMap=function(){this.loadNode.active=!0,this.mapNode.removeAllChildren();for(var e=r.default.getMaps(),t=0,o=null,n=0,i=e.length;n<i;n++)for(var c=function(i,r){var c=e[n][i];if(!c||"00000"===c)return"continue";o||(o={i:n,j:i}),t++;var a=s;cc.loader.loadRes("map/"+c,cc.TiledMapAsset,function(e,n){return function(i,r){if(i)throw console.error("load map "+c+" error: ",i),i;var s=new cc.Node("map"+e+n),p=s.addComponent(cc.TiledMap);p.tmxAsset=r,a.mapNode.addChild(s),a._turnSmogOn&&(p.getLayer("smog").node.active=!0),s.anchorX=s.anchorY=0,s.x=384*(n-o.j),s.y=384*-(e-o.i),--t<=0&&a._initMap()}}(n,i))},s=this,a=0,p=e[n].length;a<p;a++)c(a)},t.prototype._initMap=function(){for(var e=0,t=this.mapNode.children;e<t.length;e++){for(var o=t[e].getComponent(cc.TiledMap),n=o.getTileSize(),i=o.getLayer("wall"),r=i.getLayerSize(),a=0;a<r.width;a++)for(var p=0;p<r.height;p++){var u=i.getTiledTileAt(a,p,!0);if(u.node.group="wall",u.gid){u.node.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var d=u.node.addComponent(cc.PhysicsBoxCollider);d.offset=cc.v2(n.width/2,n.height/2),d.size=n,d.apply()}this._createSmog(o,{i:a,j:p})}var l=this._createItem(o);l(this._coinBaseCount,c.default),l(this._speedUpBaseCount,s.default)}this.loadNode.active=!1},t.prototype._createSmog=function(e,t){if(this._turnSmogOn){var o=e.getTileSize(),n=e.getLayer("smog").getTiledTileAt(t.i,t.j,!0);n.node.group="smog";var i=n.node.addComponent(cc.BoxCollider);i.offset=cc.v2(o.width/2,o.height/2),i.size=o}},t.prototype._createItem=function(e){for(var t=e.getLayer("pickarea"),o=t.getLayerSize(),n=[],i=0;i<o.width;i++)for(var r=0;r<o.height;r++){var c=t.getTiledTileAt(i,r,!0);c.gid&&(n.push(c.node.getPosition()),c.node.destroy())}var s=this;return function(t,o){for(var i=t+Math.floor(2*Math.random()),r=0;r<i;r++){var c=n.splice(Math.floor(Math.random()*n.length),1)[0],a=new o;a.init(s.texture),a.node.group="pickable",a.node.anchorX=a.node.anchorY=0,a.node.setPosition(c),a.node.addComponent(cc.RigidBody).type=cc.RigidBodyType.Static;var p=a.node.addComponent(cc.PhysicsBoxCollider);p.sensor=!0,p.size=a.size,p.offset=cc.v2(a.size.width/2,a.size.height/2),p.apply(),e.node.addChild(a.node)}}},t.prototype.toggleSmog=function(){this._turnSmogOn=!this._turnSmogOn,this.smogBtnLabel.string=this._turnSmogOn?"On":"Off",this._loadMap()},t.prototype.incCoin=function(){this._coin++,this.coinLabel.string="Coin: "+this._coin},t.prototype.speedUp=function(){var e=this;this._speedCounter=5,this.hero.setSpeedUp(1.5),this.node.once("speedUpEnd",function(){e.hero.setSpeedUp(1)})},t.prototype.update=function(e){this._speedCounter-=e,this._speedCounter>=0?this.speedLabel.string="SpeedUp: "+parseInt(this._speedCounter+"")+"s":this.node.emit("speedUpEnd")},i([d(cc.Node)],t.prototype,"mapNode",void 0),i([d(cc.Node)],t.prototype,"loadNode",void 0),i([d(cc.Label)],t.prototype,"smogBtnLabel",void 0),i([d(cc.Label)],t.prototype,"coinLabel",void 0),i([d(cc.Label)],t.prototype,"speedLabel",void 0),i([d(a.default)],t.prototype,"hero",void 0),t=i([u],t)}(cc.Component);o.default=l,cc._RF.pop()},{"./Coin":"Coin","./Hero":"Hero","./SpeedUp":"SpeedUp","./libs/mapTools":"mapTools"}],Hero:[function(e,t,o){"use strict";cc._RF.push(t,"f63dfuVnsBBJ725V0xOhTdV","Hero");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(e,t,o,n){var i,r=arguments.length,c=r<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,n);else for(var s=e.length-1;s>=0;s--)(i=e[s])&&(c=(r<3?i(c):r>3?i(t,o,c):i(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=e("./libs/consts"),c=e("./Game"),s=cc._decorator,a=s.ccclass,p=s.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.game=null,t._amin=null,t._speed=15e3,t._dir=r.Direction.Down,t._bias=cc.v2(0,0),t._lv=null,t._rigidBody=null,t._speedUp=1,t}return n(t,e),t.prototype.onLoad=function(){this._rigidBody=this.getComponent(cc.RigidBody),this._amin=this.getComponent(cc.Animation),cc.systemEvent.on("keydown",this._onKeyDown,this),cc.systemEvent.on("keyup",this._onKeyUp,this)},t.prototype.onDestroy=function(){cc.systemEvent.off("keydown",this._onKeyDown,this),cc.systemEvent.off("keyup",this._onKeyUp,this)},t.prototype._onKeyUp=function(){this._dir=null,this._amin.stop()},t.prototype._onKeyDown=function(e){switch(e.keyCode){case cc.macro.KEY.w:case cc.macro.KEY.up:this._dir=r.Direction.Up,this._bias=cc.v2(0,1);break;case cc.macro.KEY.s:case cc.macro.KEY.down:this._dir=r.Direction.Down,this._bias=cc.v2(0,-1);break;case cc.macro.KEY.a:case cc.macro.KEY.left:this._dir=r.Direction.Left,this._bias=cc.v2(-1,0);break;case cc.macro.KEY.d:case cc.macro.KEY.right:this._dir=r.Direction.Right,this._bias=cc.v2(1,0)}this._playAnimation()},t.prototype._playAnimation=function(){switch(this._dir){case r.Direction.Up:this._amin.play("move_up");break;case r.Direction.Down:this._amin.play("move_down");break;case r.Direction.Left:this._amin.play("move_left");break;case r.Direction.Right:this._amin.play("move_right")}},t.prototype.update=function(e){this._dir?this._rigidBody.linearVelocity=cc.v2(this._bias.x*this._speed*e*this._speedUp,this._bias.y*this._speed*e*this._speedUp):this._rigidBody.linearVelocity=cc.Vec2.ZERO},t.prototype.setSpeedUp=function(e){this._speedUp=e},t.prototype.onCollisionEnter=function(e,t){"smog"===e.node.group&&(e.node.getComponent(cc.TiledTile).gid=0)},t.prototype.onCollisionExit=function(e,t){"smog"===e.node.group&&(e.node.getComponent(cc.TiledTile).gid=79)},t.prototype.onBeginContact=function(e,t,o){"pickable"===o.node.group&&("coin"===o.node.name?this.game.incCoin():"speedUp"===o.node.name&&this.game.speedUp(),o.node.active=!1,o.node.destroy())},i([p(c.default)],t.prototype,"game",void 0),t=i([a],t)}(cc.Component);o.default=u,cc._RF.pop()},{"./Game":"Game","./libs/consts":"consts"}],Pickable:[function(e,t,o){"use strict";cc._RF.push(t,"dd162b66+1K+KLI1VfspaXe","Pickable");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(o,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.offset=null,t.node=null,t.size=cc.size(16,16),t}return n(t,e),t.prototype.init=function(e){this.node=new cc.Node(this.name);var t=this.node.addComponent(cc.Sprite),o=new cc.SpriteFrame(e,cc.rect(this.offset.x*this.size.width,this.offset.y*this.size.height,this.size.width,this.size.height));t.spriteFrame=o},t}(cc.Component);o.default=i,cc._RF.pop()},{}],SpeedUp:[function(e,t,o){"use strict";cc._RF.push(t,"adcc1i9OJxN9JJruQHLwjvX","SpeedUp");var n=this&&this.__extends||function(){var e=function(t,o){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o])})(t,o)};return function(t,o){function n(){this.constructor=t}e(t,o),t.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(o,"__esModule",{value:!0});var i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.name="speedUp",t.offset=cc.v2(7,8),t}return n(t,e),t.prototype.init=function(t){e.prototype.init.call(this,t)},t}(e("./libs/Pickable").default);o.default=i,cc._RF.pop()},{"./libs/Pickable":"Pickable"}],consts:[function(e,t,o){"use strict";cc._RF.push(t,"00827M5ZSNAAbtGZGu0IeuT","consts"),Object.defineProperty(o,"__esModule",{value:!0}),function(e){e[e.Up=1]="Up",e[e.Down=2]="Down",e[e.Left=3]="Left",e[e.Right=4]="Right"}(o.Direction||(o.Direction={})),cc._RF.pop()},{}],mapTools:[function(e,t,o){"use strict";cc._RF.push(t,"97ee81aKRFIBrDwZVaDLTYc","mapTools"),Object.defineProperty(o,"__esModule",{value:!0});var n=[{i:-1,j:0},{i:1,j:0},{i:0,j:-1},{i:0,j:1}],i=function(){function e(){this._mapRows=4,this._mapCols=4,this._mapPieces=8,this._mapArr=[],this._mapNameArr=[]}return e.prototype._initMapArr=function(){var e=this._mapArr=[];this._mapNameArr=[];for(var t=0;t<this._mapRows;t++){e[t]=[],this._mapNameArr[t]=[];for(var o=0;o<this._mapCols;o++)e[t][o]=0,this._mapNameArr[t][o]="00000"}var n=Math.floor(Math.random()*this._mapRows),i=Math.floor(Math.random()*this._mapCols);e[n][i]=1,this._mapPieces--;var r=[],c={i:n,j:i};do{if(!(r=this._getNearMaps(c)).length)break;var s=r[Math.floor(Math.random()*r.length)];c=s,e[s.i][s.j]=1,this._mapPieces--}while(this._mapPieces);if(this._mapPieces)for(var a=0;a<this._mapRows;a++)for(var p=0;p<this._mapCols;p++)if(!e[a][p]){if(!this._mapPieces)break;this._getNearMaps({i:a,j:p},!1).length&&(e[a][p]=1,this._mapPieces--)}},e.prototype._getNearMaps=function(e,t){void 0===t&&(t=!0);for(var o=[],i=0,r=n;i<r.length;i++){var c=r[i],s=e.i+c.i,a=e.j+c.j;s<0||s>=this._mapRows||a<0||a>=this._mapCols||!this._mapArr[s][a]===t&&o.push({i:s,j:a})}return o},e.prototype.getMaps=function(){this._initMapArr();for(var e=this._mapArr,t=this._mapNameArr,o=function(e){return function(t,o,i){return t.i-o===n[e].i&&t.j-i===n[e].j}},i=0;i<this._mapRows;i++)for(var r=0;r<this._mapCols;r++){if(e[i][r]){for(var c="0",s="0",a="0",p="0",u=0,d=this._getNearMaps({i:i,j:r},!1);u<d.length;u++){var l=d[u];o(0)(l,i,r)&&(c="1"),o(1)(l,i,r)&&(s="1"),o(2)(l,i,r)&&(a="1"),o(3)(l,i,r)&&(p="1")}t[i][r]=c+s+a+p+"0"}}return t},e}();o.default=new i,cc._RF.pop()},{}],use_reversed_rotateTo:[function(e,t,o){"use strict";cc._RF.push(t,"a3842bBTaRIS669QV2G8s9r","use_reversed_rotateTo"),cc.RotateTo._reverse=!0,cc._RF.pop()},{}]},{},["Camera","Coin","Game","Hero","SpeedUp","Pickable","consts","mapTools","use_reversed_rotateTo"]);