webpackJsonp([0],{"+708":function(t,e,i){"use strict";var s={name:"vue-particles",props:{color:{type:String,default:"#dedede"},particleOpacity:{type:Number,default:.7},particlesNumber:{type:Number,default:80},shapeType:{type:String,default:"circle"},particleSize:{type:Number,default:4},linesColor:{type:String,default:"#dedede"},linesWidth:{type:Number,default:1},lineLinked:{type:Boolean,default:!0},lineOpacity:{type:Number,default:.4},linesDistance:{type:Number,default:150},moveSpeed:{type:Number,default:3},hoverEffect:{type:Boolean,default:!0},hoverMode:{type:String,default:"grab"},clickEffect:{type:Boolean,default:!0},clickMode:{type:String,default:"push"}},mounted:function(){var t=this;i("JAHf"),this.$nextTick(function(){t.initParticleJS(t.color,t.particleOpacity,t.particlesNumber,t.shapeType,t.particleSize,t.linesColor,t.linesWidth,t.lineLinked,t.lineOpacity,t.linesDistance,t.moveSpeed,t.hoverEffect,t.hoverMode,t.clickEffect,t.clickMode)})},methods:{initParticleJS:function(t,e,i,s,a,r,n,o,c,l,p,d,v,h,g){particlesJS("particles-js",{particles:{number:{value:i,density:{enable:!0,value_area:800}},color:{value:t},shape:{type:s,stroke:{width:0,color:"#192231"},polygon:{nb_sides:5}},opacity:{value:e,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:a,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:o,distance:l,color:r,opacity:c,width:n},move:{enable:!0,speed:p,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:d,mode:v},onclick:{enable:h,mode:g},onresize:{enable:!0,density_auto:!0,density_area:400}},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},a={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{attrs:{id:"particles-js",color:t.color,particleOpacity:t.particleOpacity,linesColor:t.linesColor,particlesNumber:t.particlesNumber,shapeType:t.shapeType,particleSize:t.particleSize,linesWidth:t.linesWidth,lineLinked:t.lineLinked,lineOpacity:t.lineOpacity,linesDistance:t.linesDistance,moveSpeed:t.moveSpeed,hoverEffect:t.hoverEffect,hoverMode:t.hoverMode,clickEffect:t.clickEffect,clickMode:t.clickMode}})},staticRenderFns:[]},r=i("VU/8")(s,a,!1,null,null,null);e.a=r.exports},"/LkK":function(t,e,i){t.exports=i.p+"static/img/bg2.f1e6b4d.jpg"},"0EYt":function(t,e){},1296:function(t,e){},"2Bxi":function(t,e,i){t.exports=i.p+"static/img/2.e06da15.jpg"},"4dVs":function(t,e){},"6xA4":function(t,e,i){t.exports=i.p+"static/img/bg3.fe6fd70.jpg"},"B/C8":function(t,e,i){t.exports=i.p+"static/img/bg5.5bfbdc2.jpg"},N9yS:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("7t+N"),r=i.n(a);r()(document).ready(function(){r()("#github").tooltip(),r()("#weixin").tooltip(),r()("#qq").tooltip(),r()("#weibo").tooltip(),r()("#csdn").tooltip(),r()("#pgithub").tooltip(),r()("#pweixin").tooltip(),r()("#pqq").tooltip(),r()("#pweibo").tooltip(),r()("#pcsdn").tooltip()});var n={name:"App",data:function(){return{myHeight:document.documentElement.clientHeight+"px"}},created:function(){try{setTimeout(function(){var t=document.getElementById("loading");null!=t&&document.body.removeChild(t)},5e3)}catch(t){}},mounted:function(){var t=this;window.onresize=function(){t.myHeight=document.documentElement.clientHeight+"px"}}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{style:{height:this.myHeight},attrs:{id:"app"}},[e("router-view",{attrs:{myHeight:this.myHeight}})],1)},staticRenderFns:[]};var c=i("VU/8")(n,o,!1,function(t){i("N9yS")},null,null).exports,l=i("/ocq"),p=(i("v2ns"),i("7QTg")),d=i.n(p),v={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"topmaincontent"},[s("div",{staticClass:"bg-imgs animated flipInX"},[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{style:{height:t.topHeight},attrs:{src:i("tGse")}})]),t._v(" "),s("swiper-slide",[s("img",{style:{height:t.topHeight},attrs:{src:i("2Bxi")}})]),t._v(" "),s("swiper-slide",[s("img",{style:{height:t.topHeight},attrs:{src:i("lQgp")}})]),t._v(" "),s("swiper-slide",[s("img",{style:{height:t.topHeight},attrs:{src:i("poA4")}})])],1)],1),t._v(" "),s("div",{staticClass:"somecontent"},[s("div",{staticClass:"mid-content"},[s("div",{staticClass:"card",class:t.cardani,on:{mouseenter:t.addcardAnimate,mouseleave:t.delcardAnimate}},[s("div",{staticClass:"particles"},[s("vue-particles",{attrs:{color:"#7DF031",particleOpacity:.5,linesColor:"#D5D5D5",particlesNumber:80,shapeType:"circle",particleSize:5,linesWidth:2,lineLinked:!0,lineOpacity:.4,linesDistance:2,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0,clickMode:"push"}})],1),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"card-body text-center animated flip"},[i("h1",{staticClass:"card-title display-5",staticStyle:{"font-family":"Jokerman"}},[t._v("Welcome,This is my resume")]),t._v(" "),i("h3",{staticClass:"card-text",staticStyle:{"font-family":"Bradley Hand ITC"}},[t._v("Take a little time,take to know me")]),t._v(" "),i("p",[t._v("我叫 欧阳佳豪")]),t._v(" "),i("p",[t._v("正致力于成为一名合格的前端工程师")]),t._v(" "),i("p",[t._v("1019825864@qq.com")])])}]};var h=i("VU/8")({name:"topmain",props:["topHeight"],data:function(){return{swiperOption:{speed:2e3,setWrapperSize:!0,effect:"flip",loop:!0,touchRatio:0,autoHeight:!0,autoplay:{delay:4e3,disableOnInteraction:!1,waitForTransition:!1}},cardani:""}},methods:{addcardAnimate:function(){this.cardani="heartBeat"},delcardAnimate:function(){this.cardani=""}}},v,!1,function(t){i("c7+o")},"data-v-4a045a0a",null).exports,g={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"introcontent"},[e("div",{staticClass:"bg2-img"},[e("img",{style:{height:this.introHeight},attrs:{src:i("mg/2")}})]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"midcontent"},[e("div",{staticClass:"card"},[e("div",{staticClass:"card-body text-center animated flipInX"},[e("h1",{staticClass:"card-title"},[e("img",{staticClass:"introimg",attrs:{src:i("uYAK")}})]),this._v(" "),e("h3",{staticClass:"card-text"},[this._v("您好，我叫欧阳佳豪，坐标成都。 我是四川师范大学计算机科学与技术专业2016级大三的学生，有着一定的编程基础，\n          目前能熟练运用"),e("span",{staticStyle:{"text-decoration":"underline"}},[this._v("HTML5、CSS、Javascript")]),this._v("等前端Web开发技术，\n          熟悉"),e("span",{staticStyle:{"text-decoration":"underline"}},[this._v("bootstrap库、jquery库、Vue框架")]),this._v("等的基础，\n          能基本使用webpack、npm、git等工具,对前端很感兴趣，具有良好的自学能力，目前的规划是先找一份实习工作磨砺自我，积累工作经验，学习更多前端相关知识，\n          想要学习一些后端相关知识以更好的应对前端各种工作，努力的成为一名合格的前端工程师！")])])])])}]};var m=i("VU/8")({name:"introduce",props:["introHeight"]},g,!1,function(t){i("OD5R")},"data-v-edffd7f6",null).exports,u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"skillcontent"},[e("div",{staticClass:"bg3-img"},[e("img",{style:{height:this.skillHeight},attrs:{src:i("6xA4")}})]),this._v(" "),this._m(0)])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"midcontent animated flipInX"},[i("div",{staticClass:"skilltitle display-4 shake-rotate"},[t._v("Skills:")]),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{width:"75px","background-color":"#0e82ff",padding:"2px 5px","border-radius":"7px"}},[t._v("HTML5")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"70%"}})]),t._v(" "),i("br"),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{width:"55px","background-color":"#29a746",padding:"2px 5px","border-radius":"7px"}},[t._v("CSS3")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-success progress-bar-striped progress-bar-animated",staticStyle:{width:"75%"}})]),t._v(" "),i("br"),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{"padding-bottom":"5px",width:"102px","background-color":"#17a2b8",padding:"2px 5px","border-radius":"7px"}},[t._v("JavaScript")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-info progress-bar-striped progress-bar-animated",staticStyle:{width:"65%"}})]),t._v(" "),i("br"),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{"padding-bottom":"5px",width:"101px","background-color":"#ffc107",padding:"2px 5px","border-radius":"7px"}},[t._v("BootStrap")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-warning progress-bar-striped progress-bar-animated",staticStyle:{width:"70%"}})]),t._v(" "),i("br"),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{"padding-bottom":"5px",width:"70px","background-color":"#dc3545",padding:"2px 5px","border-radius":"7px"}},[t._v("Jquery")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-danger progress-bar-striped progress-bar-animated",staticStyle:{width:"60%"}})]),t._v(" "),i("br"),t._v(" "),i("h5",{staticClass:"skillhover shake-little",staticStyle:{"padding-bottom":"5px",width:"106px","background-color":"#343a40",padding:"2px 5px","border-radius":"7px"}},[t._v("Vue技术栈")]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-dark progress-bar-striped progress-bar-animated",staticStyle:{width:"50%"}})])])}]};var _=i("VU/8")({name:"skilll",props:["skillHeight"]},u,!1,function(t){i("rStI")},"data-v-3baf8672",null).exports,f={name:"experience",props:["expHeight"],data:function(){return{imgsrc:"./static/img/zhijingfont.jpg",inAndOut:""}},methods:{changeimg:function(){this.inAndOut="inRotate";var t=this;setTimeout(function(){t.imgsrc="./static/img/changefont.png"},100)},recover:function(){this.inAndOut="outRotate";var t=this;setTimeout(function(){t.imgsrc="./static/img/zhijingfont.jpg"},100)}}},b={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"expcontent"},[s("img",{style:{height:t.expHeight},attrs:{src:i("Vzcp")}}),t._v(" "),s("div",{staticClass:"midcontent"},[s("span",{staticClass:"myexperience"},[t._v("我的经历")]),t._v(" "),s("div",{staticClass:"exp-container animated flipInX"},[s("div",{staticClass:"line"},[s("img",{class:t.inAndOut,attrs:{src:t.imgsrc},on:{mouseenter:t.changeimg,mouseleave:t.recover}}),t._v(" "),t._m(0)])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"exp-point"},[i("div",{staticClass:"point-content"},[i("div",{staticClass:"point"}),t._v(" "),i("div",{staticClass:"timePoint1"},[i("span",[t._v("2019年至今")]),t._v(" "),i("div",{staticClass:"exp-desc"},[i("h4",[t._v("目前正在找实习")]),t._v(" "),i("p",{staticStyle:{color:"green"}},[t._v("[进阶初级前端工程师]")]),t._v(" "),i("h6",[t._v("具备前端基础技能，掌握vue框架基础，能简单运用webpack，git等工具")])])])]),t._v(" "),i("div",{staticClass:"point-content"},[i("div",{staticClass:"point"}),t._v(" "),i("div",{staticClass:"timePoint1"},[i("span",[t._v("20xx年xx月")]),t._v(" "),i("div",{staticClass:"exp-desc"},[i("h4",[t._v("···")]),t._v(" "),i("p",{staticStyle:{color:"green"}},[t._v("[········]")]),t._v(" "),i("h6",[t._v("······················")])])])]),t._v(" "),i("div",{staticClass:"point-content"},[i("div",{staticClass:"point"}),t._v(" "),i("div",{staticClass:"timePoint1"},[i("span",[t._v("2016年9月")]),t._v(" "),i("div",{staticClass:"exp-desc"},[i("h4",[t._v("就读于四川师范大学计算机科学与技术专业")]),t._v(" "),i("p",{staticStyle:{color:"green"}},[t._v("[本科：目前大三在读]")]),t._v(" "),i("h6",[t._v("学校里表现普普通通，一名老实的大学生，没获得过啥证书，也没啥值得炫耀的奖项，前端是我的兴趣，自学能力中等偏上！")])])])])])}]};var y=i("VU/8")(f,b,!1,function(t){i("4dVs")},"data-v-29375eb0",null).exports,C={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"procontent"},[s("img",{style:{height:t.proHeight},attrs:{src:i("/LkK")}}),t._v(" "),s("div",{staticClass:"pro-slider animated flipInX"},[t._m(0),t._v(" "),s("div",{staticClass:"swiperbg"},[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{attrs:{src:i("hNah")}}),s("span",[t._v("粗糙的本简历网站")])]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("Zs7L")}}),s("span",[t._v("纯div+css仿京东网站练习")])]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("liLO")}}),s("span",[t._v("粗糙的漫威blog页面设计")])])],1)],1)])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("h3",{staticClass:"shake-chunk shake-constant"},[this._v("This is picture exhibiton")])])}]};var x=i("VU/8")({name:"production",props:["proHeight"],data:function(){return{swiperOption:{effect:"cube",cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:120,shadowScale:.6},speed:1e3,loop:!0,autoplay:{delay:3e3,disableOnInteraction:!1},autoHeight:!0}}}},C,!1,function(t){i("tZEo")},"data-v-1de6bcb8",null).exports,w={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"bottomcontent"},[s("img",{style:{height:t.bottHeight},attrs:{src:i("B/C8")}}),t._v(" "),s("div",{staticClass:"midcontent animated flipInX"},[s("div",{staticClass:"mytopborder"}),t._v(" "),s("div",{staticClass:"mybottomborder"}),t._v(" "),s("div",{staticClass:"content text-center"},[t._m(0),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("h4",{staticClass:"myh4"},[t._v("学习是一个充实愉悦的过程喜欢尝试，期待新鲜事物前端即兴趣，兴趣即未来行路有良友，便是捷径期待有机会与您共事！")]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"line"}),t._v(" "),s("div",{staticClass:"myconnect"},[s("a",{staticClass:"iconfont",attrs:{href:"http://github.com/nopapername/vue-resume",target:"_blank",id:"github","data-toggle":"tooltip","data-placement":"bottom",title:t.github}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"#",id:"weixin","data-toggle":"tooltip","data-placement":"bottom",title:t.weixin,"data-html":"true"}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"#",id:"qq","data-toggle":"tooltip","data-placement":"bottom",title:t.qq,"data-html":"true"}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"https://weibo.com/u/6020961867?topnav=1&wvr=6&topsug=1",target:"_blank",id:"weibo","data-toggle":"tooltip","data-placement":"bottom",title:t.weibo}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"https://blog.csdn.net/weixin_43388844",target:"_blank",id:"csdn","data-toggle":"tooltip","data-placement":"bottom",title:t.csdn}},[t._v("")])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{staticClass:"myh2"},[e("span",{staticStyle:{color:"blueviolet","margin-left":"15px"}},[this._v("前端 ")]),this._v(" "),e("span",{staticStyle:{color:"darkkhaki","margin-left":"15px"}},[this._v("展望 ")]),this._v(" "),e("span",{staticStyle:{color:"palevioletred","margin-left":"15px"}},[this._v("代码 ")]),this._v(" "),e("span",{staticStyle:{color:"brown","margin-left":"15px"}},[this._v("未来")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{staticClass:"myh1 shake-opacity shake-constant"},[e("span",{staticStyle:{color:"greenyellow"}},[this._v("CONTACT")]),this._v(" ME")])}]};var k=i("VU/8")({name:"bottomotherthing",props:["bottHeight"],data:function(){return{github:"Github",weixin:'<img src="./static/img/weixin.png" width="150px" height="150px">',qq:'<img src="./static/img/qq.png" width="150px" height="150px">',weibo:"新浪微博",csdn:"CSDN"}}},w,!1,function(t){i("0EYt")},"data-v-1e2c8386",null).exports,S={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"page animated zoomIn"},[s("div",{staticClass:"top"},[s("div",{staticClass:"container text-center"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("div",{staticClass:"topcontents"},[s("div",{staticClass:"card-body"},[s("img",{staticClass:"topheadimg",attrs:{src:i("uYAK")}}),t._v(" "),s("h1",{staticClass:"card-title",staticStyle:{"font-family":"Jokerman","font-size":"32px"}},[t._v("Welcome,This is my resume")]),t._v(" "),s("h3",{staticClass:"card-text",staticStyle:{"font-family":"Bradley Hand ITC","font-size":"22px"}},[t._v("Take a little time,take to know me")]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"myconnect"},[s("a",{staticClass:"iconfont",attrs:{href:"http://github.com/nopapername/vue-resume",target:"_blank",id:"pgithub","data-toggle":"tooltip","data-placement":"bottom",title:t.github}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"#",id:"pweixin","data-toggle":"tooltip","data-placement":"bottom",title:t.weixin,"data-html":"true"}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"#",id:"pqq","data-toggle":"tooltip","data-placement":"bottom",title:t.qq,"data-html":"true"}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"https://weibo.com/u/6020961867?topnav=1&wvr=6&topsug=1",target:"_blank",id:"pweibo","data-toggle":"tooltip","data-placement":"bottom",title:t.weibo}},[t._v("")]),t._v(" "),s("a",{staticClass:"iconfont",attrs:{href:"https://blog.csdn.net/weixin_43388844",target:"_blank",id:"pcsdn","data-toggle":"tooltip","data-placement":"bottom",title:t.csdn}},[t._v("")])])])])])])])]),t._v(" "),s("div",{staticClass:"intro text-center"},[t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),s("div",{staticClass:"myproduction"},[s("h3",[t._v("我的作品")]),t._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6 offset-3"},[s("div",{staticClass:"exhibition"},[s("swiper",{attrs:{options:t.swiperOption}},[s("swiper-slide",[s("img",{attrs:{src:i("hNah"),width:"200px",height:"200px;"}})]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("Zs7L"),width:"200px",height:"200px;"}})]),t._v(" "),s("swiper-slide",[s("img",{attrs:{src:i("liLO"),width:"200px",height:"200px;"}})])],1)],1)])])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("我叫 欧阳佳豪"),e("br"),this._v("正致力于成为一名合格的前端工程师"),e("br"),this._v("1019825864@qq.com")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"aboutme"},[e("h3",[this._v("关于我")]),this._v(" "),e("p",[this._v("\n        您好，我叫欧阳佳豪，坐标成都。 我是四川师范大学计算机科学与技术专业2016级大三的学生，有着一定的编程基础，\n        目前能熟练运用HTML5、CSS、Javascript等前端Web开发技术，\n        熟悉bootstrap库、jquery库、Vue框架等的基础，\n        能基本使用webpack、npm、git等工具,对前端很感兴趣，具有良好的自学能力，目前的规划是先找一份实习工作磨砺自我，积累工作经验，学习更多前端相关知识，\n        想要学习一些后端相关知识以更好的应对前端各种工作，努力的成为一名合格的前端工程师！\n      ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"skills"},[i("h3",[t._v("技能掌握")]),t._v(" "),i("p",[t._v("1. 热爱前端，喜欢用最扎实的代码做出效果上最炫，代码上最合理的页面，\n        能够兼容主流各种浏览器，比如ie8以上, chrome,firefox,opera。"),i("br"),t._v("2. 熟悉\n        使用photoshop把设计的图片按照需要交互的要求进行效果实现。"),i("br"),t._v("3. 精通各种\n        Web前端技术，包括HTML、DIV、CSS、Javascript、jQuery、AJAX、JSON、Cookie\n        等。"),i("br"),t._v("4. 使用移动端的rem布局,响应式布局,解决不同移动端设备的适配和兼容问\n        题"),i("br"),t._v("5. 熟悉bootstrap,Jquery类库进行pc端项目快速开发, 熟练使用Swiper,sui等\n        插件进行移动端项目的开发。"),i("br"),t._v("6. 熟练使用github进行代码管理，使用git版本管理\n        工具。"),i("br"),t._v("7. 熟悉原生JS,熟悉JavaScript的面向对象编程，了解作用域以及闭包的原\n        理。"),i("br"),t._v("8. 熟练使用Chrome 、Firefox等主流浏览器的开发人员工具调试页面。"),i("br"),t._v("9. 了\n        解vue框架对模块化开发有着一定的理解。"),i("br"),t._v("10. 了解java,c++后\n        台语言,了解mysql数据库，并对此有兴趣,期待向全栈方向发展"),i("br")]),t._v(" "),i("div",{staticClass:"progressgroup"},[i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped progress-bar-animated",staticStyle:{width:"70%"},attrs:{role:"progressbar"}},[t._v("HTML5")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-success progress-bar-striped progress-bar-animated",staticStyle:{width:"75%"},attrs:{role:"progressbar"}},[t._v("CSS3")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-info progress-bar-striped progress-bar-animated",staticStyle:{width:"65%"},attrs:{role:"progressbar"}},[t._v("JavaScript")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-warning progress-bar-striped progress-bar-animated",staticStyle:{width:"70%"},attrs:{role:"progressbar"}},[t._v("BootStrap")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-danger progress-bar-striped progress-bar-animated",staticStyle:{width:"60%"},attrs:{role:"progressbar"}},[t._v("Jquery")])]),t._v(" "),i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar bg-dark progress-bar-striped progress-bar-animated",staticStyle:{width:"50%"},attrs:{role:"progressbar"}},[t._v("Vue技术栈")])])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"myexperence"},[i("h3",[t._v("我的经历")]),t._v(" "),i("div",{staticClass:"exper"},[i("div",[i("p",[i("i",{staticClass:"circle"}),i("span",{staticClass:"time"},[t._v("2019年至今")])]),t._v(" "),i("p",{staticClass:"pexpcontent"},[t._v("目前正在找实习"),i("br"),i("span",{staticStyle:{"font-size":"12px",color:"green"}},[t._v("[进阶初级前端工程师]")]),i("br"),t._v("具备前端基础技能，掌握vue框架基础，能简单运用webpack，git等工具")])]),t._v(" "),i("div",[i("p",[i("i",{staticClass:"circle"}),i("span",{staticClass:"time"},[t._v("2016年9月")])]),t._v(" "),i("p",{staticClass:"pexpcontent"},[t._v("就读于 四川师范大学计算机科学与技术专业"),i("br"),i("span",{staticStyle:{"font-size":"12px",color:"green"}},[t._v("[本科:目前大三在读]")]),i("br"),t._v("学校里表现普普通通，一名老实的大学生，没获得过啥证书，也没啥值得炫耀的奖项，前端是我的兴趣，自学能力中等偏上！")])])])])}]};var H=i("VU/8")({data:function(){return{github:"Github",weixin:'<img src="./static/img/weixin.png" width="150px" height="150px">',qq:'<img src="./static/img/qq.png" width="150px" height="150px">',weibo:"新浪微博",csdn:"CSDN",swiperOption:{effect:"cube",cubeEffect:{slideShadows:!0,shadow:!0,shadowOffset:40,shadowScale:.5},speed:1e3,loop:!0,autoHeight:!0,autoplay:{delay:3e3,disableOnInteraction:!1}}}}},S,!1,function(t){i("z4GA")},null,null).exports,E={name:"home",props:["myHeight"],data:function(){return{swiperOption:{pagination:{el:".swiper-pagination",clickable:!0},direction:"vertical",autoHeight:!0,mousewheel:!0,setWrapperSize:!0,threshold:5}}},components:{swiper:p.swiper,swiperSlide:p.swiperSlide,topmain:h,introduce:m,skills:_,experience:y,production:x,bottomotherthing:k,phonePage:H}},O={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"d-none d-md-block"},[t._m(0),t._v(" "),i("swiper",{ref:"mySwiper",style:{height:t.myHeight},attrs:{options:t.swiperOption}},[i("swiper-slide",[i("topmain",{attrs:{topHeight:t.myHeight}})],1),t._v(" "),i("swiper-slide",[i("introduce",{attrs:{introHeight:t.myHeight}})],1),t._v(" "),i("swiper-slide",[i("skills",{attrs:{skillHeight:t.myHeight}})],1),t._v(" "),i("swiper-slide",[i("experience",{attrs:{expHeight:t.myHeight}})],1),t._v(" "),i("swiper-slide",[i("production",{attrs:{proHeight:t.myHeight}})],1),t._v(" "),i("swiper-slide",[i("bottomotherthing",{attrs:{bottHeight:t.myHeight}})],1),t._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],1)],1),t._v(" "),i("div",{staticClass:"d-md-none"},[i("phonePage")],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"my-head shake-slow shake-constant shake-constant--hover"},[e("img",{attrs:{src:i("j3w/")}}),this._v(" "),e("h5",[this._v("NoProperName")]),this._v(" "),e("h6",[e("span",[this._v("OYJH")]),this._v(" 's resume")]),this._v(" "),e("p",[this._v("QQ:1019825864")])])}]};var q=i("VU/8")(E,O,!1,function(t){i("t8R1")},null,null).exports;s.a.use(l.a);var N=new l.a({routes:[{path:"/",name:"home",component:q}]}),T=i("mM94"),j=(i("uXP9"),i("qb6w"),i("Bb4J"),i("oPmM")),A=i.n(j);i("1296"),i("muQq");s.a.use(A.a),s.a.use(d.a),s.a.use(T.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:N,components:{App:c},template:"<App/>"})},OD5R:function(t,e){},Vzcp:function(t,e,i){t.exports=i.p+"static/img/bg4.2ef9e20.jpg"},Zs7L:function(t,e,i){t.exports=i.p+"static/img/pro2.7f9cad6.png"},"c7+o":function(t,e){},hNah:function(t,e,i){t.exports=i.p+"static/img/pro1.9a18ea1.png"},"j3w/":function(t,e,i){t.exports=i.p+"static/img/headimg.79cc0f6.jpg"},lQgp:function(t,e,i){t.exports=i.p+"static/img/3.7143a49.jpg"},liLO:function(t,e,i){t.exports=i.p+"static/img/pro3.7021a3f.png"},"mg/2":function(t,e,i){t.exports=i.p+"static/img/bg1.882e7b6.jpg"},muQq:function(t,e){},oPmM:function(t,e){},poA4:function(t,e,i){t.exports=i.p+"static/img/4.59d16e4.jpg"},qb6w:function(t,e){},rStI:function(t,e){},t8R1:function(t,e){},tGse:function(t,e,i){t.exports=i.p+"static/img/1.e6aac53.jpg"},tZEo:function(t,e){},uYAK:function(t,e,i){t.exports=i.p+"static/img/introimg.5f036de.jpg"},v2ns:function(t,e){},z4GA:function(t,e){}},["NHnr"]);