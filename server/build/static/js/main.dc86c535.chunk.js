(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},117:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(28),i=a(147),m=a(151),u=a(152),s=Object(i.a)((function(e){return{root:{margin:e.spacing(2),background:"B92626"},large:{width:e.spacing(25),height:e.spacing(25),marginTop:"50px"}}}));function p(){var e=s();return r.a.createElement("div",{className:e.root},r.a.createElement("img",{alt:"winecheese",src:"https://image.flaticon.com/icons/svg/2720/2720205.svg",className:e.large}))}var f=a(149),d=Object(i.a)((function(e){return{root:{"& > *":{margin:e.spacing(2),background:"#B92626",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"white",height:48,wdith:80,padding:"0 50px"}}}}));function E(){var e=d();return r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null,"  Get Started  "))}var h=Object(i.a)((function(e){return{root:{"& > *":{margin:e.spacing(1),background:"white",border:0,borderRadius:3,boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)",color:"B92626",height:48,wdith:50,padding:"0 30px"}}}}));function b(){var e=h();return r.a.createElement("center",null,r.a.createElement("div",{className:e.root},r.a.createElement(f.a,null,"See How It Works")))}var g=Object(i.a)((function(e){return{root:{"& > *":{margin:e.spacing(4),color:"#B92626"}}}}));function v(){var e=g();return r.a.createElement("div",{className:e.root},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,null,"Create Account"))}var x=Object(i.a)((function(e){return{root:{"& > *":{margin:e.spacing(4),color:"#B92626"}}}}));function w(){var e=x();return r.a.createElement("div",{className:e.root},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,null,"Login"))}a(95);var y=a(7),C=Object(i.a)({textStyle:{fontStyle:"oblique",color:"B92626",fontSize:"15px"}}),j=function(){var e=C();return r.a.createElement("div",{className:"Home",id:"background"},r.a.createElement(m.a,{container:!0,direction:"column"},r.a.createElement(m.a,{item:!0}),r.a.createElement(m.a,{item:!0,container:!0},r.a.createElement(m.a,{item:!0,xs:0,sm:2}),r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(p,null)),r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(u.a,{className:e.textStyle,variant:"h1",color:"B92626"},"With Wine Meet Cheese",r.a.createElement("br",null),"you can find a cheese",r.a.createElement("br",null),"to go with your wine",r.a.createElement("br",null),"or you can find a wine",r.a.createElement("br",null),"to go with your cheese",r.a.createElement("br",null))),r.a.createElement(m.a,{container:!0,direction:"column",justify:"center",alignItems:"center"},r.a.createElement(y.a,{to:"/createaccount"},r.a.createElement(E,null)),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(b,null))),r.a.createElement(m.a,{container:!0,direction:"row",justify:"center",alignItems:"center"},r.a.createElement(y.a,{to:"/createaccount"},r.a.createElement(v,null)),r.a.createElement(y.a,{to:"/login"},r.a.createElement(w,null))),r.a.createElement(m.a,{item:!0,xs:0,sm:2}))))},k=a(8),S=a(119),O=a(161),B=a(153),N=a(160),W=a(75),A=a.n(W),P=a(48),I=a.n(P),z=a(25),G=a(16),q=Object(G.a)(),D=a(76),L=a(159),T=a(71),R=a.n(T),_=a(72),M=a.n(_),Y=a(73),U=a.n(Y),H=a(74),J=a.n(H),F=Object(D.a)(L.a)({display:"flex",justifyContent:"space-around",alignItems:"center",background:"#B92626",height:"87px",position:"fixed",margin:"0px",bottom:"0",width:"100vw",zIndex:"1"}),K=Object(D.a)(R.a)({fontSize:"45px"}),V=Object(D.a)(I.a)({fontSize:"45px"}),Q=Object(D.a)(M.a)({fontSize:"45px"}),X=Object(D.a)(U.a)({fontSize:"45px"}),Z=Object(D.a)(J.a)({color:"#B92626",border:"5px solid #B92626",fontSize:"45px",backgroundColor:"white",padding:"15px",borderRadius:"100px",marginBottom:"5vh"}),$=Object(D.a)(L.a)({display:"flex",flexDirection:"column",opacity:"0.8",alignItems:"center",color:"white",paddingBottom:"20px"}),ee=Object(D.a)(L.a)({display:"flex",flexDirection:"column",alignItems:"center",color:"white",paddingBottom:"20px"}),te=Object(D.a)(L.a)({borderBottom:"5px solid white"}),ae=function(){var e=Object(n.useState)("camera"),t=Object(k.a)(e,2),a=t[0],l=t[1];return""===a?r.a.createElement(F,null,r.a.createElement(y.a,{to:"/searchbar"}," ",r.a.createElement(ee,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved")),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(ee,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search")),r.a.createElement(y.a,{to:"/searchcamera"},r.a.createElement(ee,{onClick:function(){return l("camera")}},r.a.createElement(Z,null))),r.a.createElement(ee,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular"),r.a.createElement(ee,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")):"saved"===a?r.a.createElement(F,null,r.a.createElement(te,null,r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(ee,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved"))),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search")),r.a.createElement(y.a,{to:"/searchcamera"},r.a.createElement($,{onClick:function(){return l("camera")}},r.a.createElement(Z,null))),r.a.createElement($,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular"),r.a.createElement($,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")):"search"===a?r.a.createElement(F,null,r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved")),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(te,null,r.a.createElement(ee,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search"))),r.a.createElement(y.a,{to:"/searchcamera"}," ",r.a.createElement($,{onClick:function(){return l("camera")}},r.a.createElement(Z,null))),r.a.createElement($,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular"),r.a.createElement($,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")):"camera"===a?r.a.createElement(F,null,r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved")),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search")),r.a.createElement(y.a,{to:"/searchcamera"},r.a.createElement(ee,{onClick:function(){return l("camera")}},r.a.createElement(te,null,r.a.createElement(Z,null)))),r.a.createElement($,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular"),r.a.createElement($,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")):"popular"===a?r.a.createElement(F,null,r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved")),r.a.createElement($,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search"),r.a.createElement($,{onClick:function(){return l("camera")}},r.a.createElement(Z,null)),r.a.createElement(te,null,r.a.createElement(ee,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular")),r.a.createElement($,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")):r.a.createElement(F,null,r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("saved")}},r.a.createElement(K,null),"Saved")),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement($,{onClick:function(){return l("search")}},r.a.createElement(V,null),"Search")),r.a.createElement(y.a,{to:"/searchcamera"},r.a.createElement($,{onClick:function(){return l("camera")}},r.a.createElement(Z,null))),r.a.createElement($,{onClick:function(){return l("popular")}},r.a.createElement(Q,null),"Popular"),r.a.createElement(te,null,r.a.createElement(ee,{onClick:function(){return l("profile")}},r.a.createElement(X,null),"Profile")))},ne=Object(i.a)((function(e){return{media:{maxWidth:100,marginTop:e.spacing(45),marginBottom:e.spacing(8),margin:"auto",height:"200",paddingTop:"56.25%"},card:{maxWidth:400,marginTop:e.spacing(45)},title:{position:"absolute",left:"50%",top:"25%",transform:"translate(-50%, -50%)",fontSize:28,flexGrow:.5},largeAvatar:{width:e.spacing(8),height:e.spacing(8)},largeAvatarAlt:{width:e.spacing(7),height:e.spacing(7),opacity:"50%"},rootB:{padding:"2px 4px",display:"flex",alignItems:"center",width:400},inputB:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}})),re=function(){var e=ne(),t=Object(n.useState)(""),a=Object(k.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)("wine"),i=Object(k.a)(o,2),m=i[0],s=i[1],p=Object(n.useState)(e.largeAvatar),f=Object(k.a)(p,2),d=f[0],E=f[1],h=Object(n.useState)(e.largeAvatarAlt),b=Object(k.a)(h,2),g=b[0],v=b[1];return r.a.createElement(S.a,null,r.a.createElement(ae,null),r.a.createElement(z.a,{bodyAttributes:{style:"background-color : #fff8e1"}}),r.a.createElement(u.a,{className:e.title},"What are you searching for?"),r.a.createElement(O.a,{onClick:function(t){s("wine"),v(e.largeAvatarAlt),E(e.largeAvatar)},alt:"wine-logo",src:"https://image.flaticon.com/icons/svg/168/168570.svg",className:d,style:{position:"absolute",left:"35%",top:"45%",transform:"translate(-50%, -50%)",flexGrow:1}}),r.a.createElement(O.a,{onClick:function(t){s("cheese"),E(e.largeAvatarAlt),v(e.largeAvatar)},alt:"cheese-logo",src:"https://image.flaticon.com/icons/svg/601/601469.svg",className:g,style:{position:"absolute",left:"65%",top:"45%",transform:"translate(-50%, -50%)",flexGrow:1}}),r.a.createElement(S.a,{onSubmit:function(e){e.preventDefault(),q.push("/manual/results/".concat(m,"/").concat(l))},component:"form",className:e.rootB,style:{position:"absolute",left:"50%",top:"65%",transform:"translate(-50%, -50%)",width:"80%",flexGrow:1}},r.a.createElement(B.a,{type:"submit",className:e.iconButton,"aria-label":"search"},r.a.createElement(I.a,null)),r.a.createElement(N.a,{className:e.inputB,placeholder:"Search",type:"text",value:l,onChange:function(e){e.preventDefault(),c(e.target.value)}}),r.a.createElement(B.a,{type:"submit",className:e.iconButton,"aria-label":"KeyboardVoiceIcon"},r.a.createElement(A.a,null))))},le=a(38),ce=a.n(le),oe=a(154),ie=a(156),me=a(155),ue=Object(i.a)({root:{minWidth:275,maxWidth:380,margin:"0 auto",marginBottom:"10px"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function se(e){var t=ue();return console.log("props in WineCard: ",e.pair),r.a.createElement(oe.a,{className:t.root},r.a.createElement(me.a,null,r.a.createElement(u.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Wine"),r.a.createElement(u.a,{variant:"h5",component:"h2"},e.pair.wine),r.a.createElement(u.a,{className:t.title,color:"textSecondary",gutterBottom:!0},"Cheese"),r.a.createElement(u.a,{variant:"h5",component:"h2"},e.pair.cheese)),r.a.createElement(ie.a,null,r.a.createElement(f.a,{size:"small"},"Learn More")))}var pe=Object(i.a)({root:{width:"100vw",backgroundColor:"#fff8e1"}}),fe=function(e){var t=e.match,a=pe(),l=Object(n.useState)([]),c=Object(k.a)(l,2),o=c[0],i=c[1],m=t.params.type,u=t.params.term.replace("%20"," "),s=t.params.barcode;Object(n.useEffect)((function(){var e="";e=s?"".concat(m,"/getPairing/barcode/").concat(s):"".concat(m,"/getPairing/").concat(u),ce()({method:"get",url:e,baseURL:"/"}).then((function(e){i(e.data),console.log(e.data)})).catch((function(e){console.log(e)}))}),[]);var p=Object(n.useState)(!0),f=Object(k.a)(p,2);f[0],f[1];return r.a.createElement("div",{class:a.root},r.a.createElement(ae,null),0===o.length?r.a.createElement("p",null,"loading..."):(console.log("These are the pairings:",o),o.map((function(e){return r.a.createElement(se,{pair:e})}))))},de=a(29),Ee=a.n(de),he=function(){Object(n.useEffect)((function(){return Ee.a.init({inputStream:{name:"Live",type:"LiveStream",constraints:{width:"480",height:"640"},numberOfWorkers:navigator.hardwareConcurrency,target:document.querySelector("#barcodeScan")},locate:!0,decoder:{readers:["code_128_reader","upc_reader","upc_e_reader"]}},(function(e){e||Ee.a.start()})),Ee.a.onDetected(e),function(){Ee.a.stop(),Ee.a.offProcessed()}}),[]);var e=function(e){console.log("Code",e.codeResult.code),Ee.a.stop(),Ee.a.offProcessed(),q.push("/barcode/results/wine/".concat(e.codeResult.code))};return r.a.createElement("div",{id:"barcodeScan"})},be=(a(115),Object(D.a)(L.a)({width:"100vw",height:"100vh",display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"#fff8e1"})),ge=(Object(D.a)(L.a)({width:"100vw"}),function(){return r.a.createElement(be,null,r.a.createElement(he,null),r.a.createElement(ae,null))}),ve=a(157),xe=a(158),we=Object(i.a)((function(e){return{paper:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",flexGrow:1,width:"80%"},title:{position:"absolute",left:"50%",top:"10%",transform:"translate(-50%, -50%)",fontSize:28,flexGrow:1},form:{width:"100%",marginTop:e.spacing(8)},submit:{margin:e.spacing(3,0,2)}}})),ye=function(){var e=we(),t=Object(n.useState)(""),a=Object(k.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(k.a)(o,2),s=i[0],p=i[1];return r.a.createElement(ve.a,{margin:"auto",component:"main",maxWidth:"sm"},r.a.createElement(z.a,{bodyAttributes:{style:"background-color : #fff8e1"}}),r.a.createElement(u.a,{className:e.title,textcomponent:"h1",variant:"h5"},"Log In"),r.a.createElement("div",{className:e.paper},r.a.createElement("form",{className:e.form,onSubmit:function(e){e.preventDefault();var t={username:l,password:s};ce.a.post("/users/login",t).then((function(e){console.log(e.data),q.push("/searchbar")})).catch((function(e){console.log(e)}))}},r.a.createElement(m.a,{container:!0,spacing:5},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Username",name:"email",type:"text",autoComplete:"email",value:l,onChange:function(e){return c(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"text",id:"password",autoComplete:"current-password",value:s,onChange:function(e){return p(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",id:"login",style:{backgroundColor:"#B92626"}},"Log In")),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(f.a,{href:"/Account2",type:"submit",fullWidth:!0,variant:"contained",id:"login",style:{backgroundColor:"white"}},"Create an Account")),r.a.createElement(m.a,{container:!0,direction:"column-reverse",justify:"space-between",alignItems:"flex-end"},r.a.createElement(f.a,{href:"/Account2",color:"primary"},"See how it works"))))))},Ce=Object(i.a)((function(e){return{paper:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",flexGrow:1,width:"80%"},title:{position:"absolute",left:"50%",top:"10%",transform:"translate(-50%, -50%)",fontSize:28,flexGrow:1},form:{width:"100%",marginTop:e.spacing(8)},submit:{margin:e.spacing(3,0,2)}}})),je=function(){var e=Ce(),t=Object(n.useState)(""),a=Object(k.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(""),i=Object(k.a)(o,2),s=i[0],p=i[1],d=Object(n.useState)(""),E=Object(k.a)(d,2),h=E[0],b=E[1],g=Object(n.useState)(!1),v=Object(k.a)(g,2);v[0],v[1];return r.a.createElement(ve.a,{margin:"auto",component:"main",maxWidth:"sm"},r.a.createElement(z.a,{bodyAttributes:{style:"background-color : #fff8e1"}}),r.a.createElement(u.a,{className:e.title,textcomponent:"h1",variant:"h5"},"Create Account"),r.a.createElement("div",{className:e.paper},r.a.createElement("form",{className:e.form,onSubmit:function(){q.push("/".concat(l,"/").concat(s,"/").concat(h,"/createaccount"))}},r.a.createElement(m.a,{container:!0,spacing:5},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"First Name",name:"email",type:"text",autoComplete:"email",value:l,onChange:function(e){return c(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Last Name",type:"text",id:"password",autoComplete:"current-password",value:s,onChange:function(e){return p(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{id:"standard-basic",label:"MM-DD-YYYY",value:h,onChange:function(e){return b(e.target.value)}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",id:"login",style:{backgroundColor:"#B92626"}},"Next")),r.a.createElement(m.a,{container:!0,direction:"column-reverse",justify:"space-between",alignItems:"flex-end",item:!0,xs:12},r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(f.a,{color:"primary"},"See how it works")))))))},ke=Object(i.a)((function(e){return{paper:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)",flexGrow:1,width:"80%",height:"100%"},title:{position:"absolute",left:"50%",top:"10%",transform:"translate(-50%, -50%)",fontSize:28,flexGrow:1,height:"15%"},form:{width:"100%",marginTop:e.spacing(8)},submit:{margin:e.spacing(3,0,2)}}})),Se=function(e){var t=e.match,a=ke(),l=Object(n.useState)(""),c=Object(k.a)(l,2),o=c[0],i=c[1],s=Object(n.useState)(""),p=Object(k.a)(s,2),d=p[0],E=p[1],h=Object(n.useState)(""),b=Object(k.a)(h,2),g=b[0],v=b[1],x=Object(n.useState)(""),w=Object(k.a)(x,2),C=w[0],j=w[1];return r.a.createElement(m.a,{overflow:"scroll",margin:"auto",component:"main",maxWidth:"sm"},r.a.createElement(z.a,{bodyAttributes:{style:"background-color : #fff8e1"}}),r.a.createElement(u.a,{className:a.title,textcomponent:"h1",variant:"h5"},"Create Account"),r.a.createElement("div",{className:a.paper},r.a.createElement("form",{className:a.form,onSubmit:function(e){e.preventDefault();var a={firstname:t.params.firstname,lastname:t.params.lastname,age:t.params.age,username:o,password:g,email:d};ce.a.post("/users/create_user",a).then((function(e){console.log(e.data),q.push("/searchbar")})).catch((function(e){console.log(e)}))}},r.a.createElement(m.a,{container:!0,spacing:5},r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Username",type:"tex",value:o,onChange:function(e){return i(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Email",type:"tex",value:d,onChange:function(e){return E(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,label:"Password",type:"password",value:g,onChange:function(e){return v(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(xe.a,{variant:"outlined",required:!0,fullWidth:!0,label:"ConfirmPassword",type:"password",value:C,onChange:function(e){return j(e.target.value)},style:{backgroundColor:"white"}})),r.a.createElement(m.a,{item:!0,xs:12},r.a.createElement(f.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",id:"login",style:{backgroundColor:"#B92626"}},"Create Account")),r.a.createElement(m.a,{container:!0,direction:"row",justify:"flex-end",alignItems:"center",style:{justifyContent:"space-between",flexGrow:1},xs:12},r.a.createElement(f.a,{href:"/Account",color:"primary"},"Go Back"),r.a.createElement(y.a,{to:"/searchbar"},r.a.createElement(f.a,{float:"right",href:"/Account",color:"primary"},"See how it works")))))))},Oe=function(){return r.a.createElement(o.c,null,r.a.createElement(o.a,{path:"/",exact:!0,component:j}),r.a.createElement(o.a,{path:"/login",component:ye}),r.a.createElement(o.a,{path:"/createaccount",component:je}),r.a.createElement(o.a,{path:"/:firstname/:lastname/:birthday/createaccount",component:Se}),r.a.createElement(o.a,{path:"/searchbar",component:re}),r.a.createElement(o.a,{path:"/searchcamera",component:ge}),r.a.createElement(o.a,{path:"/manual/results/:type/:term",component:fe}),r.a.createElement(o.a,{path:"/barcode/results/:type/:barcode",component:fe}))},Be=function(){return r.a.createElement(o.b,{history:q},r.a.createElement(Oe,null))};a(116);c.a.render(r.a.createElement(Be,null),document.getElementById("root"))},87:function(e,t,a){e.exports=a(117)},95:function(e,t,a){}},[[87,1,2]]]);
//# sourceMappingURL=main.dc86c535.chunk.js.map