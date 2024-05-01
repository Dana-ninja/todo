"use strict";(self["webpackChunktask_manager"]=self["webpackChunktask_manager"]||[]).push([[720],{1860:function(s,e,t){t.r(e),t.d(e,{default:function(){return cs}});var n=t(6760);const a={class:"container"};function i(s,e,t,i,o,r){const l=(0,n.E1)("vHeader"),c=(0,n.E1)("vAside"),u=(0,n.E1)("vTasksList");return(0,n.Wz)(),(0,n.An)(n.ae,null,[(0,n.K2)(l),(0,n.QD)("div",a,[(0,n.K2)(c),(0,n.K2)(u)])],64)}var o=t(8752),r=t.p+"img/logout.svg";const l={class:"header"},c=(0,n.QD)("div",{class:"header__logo"},[(0,n.QD)("span",{class:"header__logo-top"},"Tasks"),(0,n.QD)("span",{class:"header__logo header__logo-bottom"},"manager")],-1),u={class:"header__user-name"},d=(0,n.QD)("button",null,[(0,n.QD)("img",{src:r,alt:"icon"})],-1);function k(s,e,t,a,i,r){const k=(0,n.E1)("router-link");return(0,n.Wz)(),(0,n.An)("header",l,[c,(0,n.QD)("div",u,[(0,n.QD)("span",null,(0,o.WA)(a.userName),1),(0,n.K2)(k,{to:"/"},{default:(0,n.Ql)((()=>[d])),_:1})])])}var m=t(8936),v={setup(){const s=(0,m.o3)(),e=(0,n.S6)((()=>s.getters.users[0])),t=(0,n.S6)((()=>e.value?e.value.name:""));return{userName:t}}},p=t(8152);const g=(0,p.c)(v,[["render",k]]);var _=g;const T=s=>((0,n.ED)("data-v-66f44c24"),s=s(),(0,n.ii)(),s),h={class:"aside"},D=T((()=>(0,n.QD)("span",{class:"aside__title"},"Online:",-1))),Q={class:"users-list"},f={class:"user-list__item"},A={class:"user-list__item_name"},w=T((()=>(0,n.QD)("span",{class:"user-list__item_status online"},null,-1)));function W(s,e,t,a,i,r){return(0,n.Wz)(),(0,n.An)("aside",h,[D,(0,n.QD)("ul",Q,[(0,n.QD)("li",f,[(0,n.QD)("span",A,(0,o.WA)(a.userName),1),w])])])}var b={setup(){const s=(0,m.o3)(),e=(0,n.S6)((()=>s.getters.users[0])),t=(0,n.S6)((()=>e.value?e.value.name:""));return{userName:t}}};const E=(0,p.c)(b,[["render",W],["__scopeId","data-v-66f44c24"]]);var z=E;const x={class:"tasks__container"};function C(s,e,t,a,i,r){const l=(0,n.E1)("vForm"),c=(0,n.E1)("vTaskList");return(0,n.Wz)(),(0,n.An)("div",x,[(0,n.QD)("button",{class:"add-task-btn",onClick:e[0]||(e[0]=s=>a.showForm=!a.showForm)},(0,o.WA)(a.showForm?"-":"+"),1),a.showForm?((0,n.Wz)(),(0,n.Az)(l,{key:0})):(0,n.g1)("",!0),(0,n.K2)(c,{tasks:a.tasks},null,8,["tasks"])])}var y=t(5328);const F=(0,n.QD)("button",{class:"form__add-btn",type:"submit"},"Добавить",-1);function K(s,e,t,a,i,o){return(0,n.Wz)(),(0,n.An)("form",{class:"form",onSubmit:e[1]||(e[1]=(0,y.Y7)(((...s)=>a.addTask&&a.addTask(...s)),["prevent"]))},[(0,n.wt)((0,n.QD)("input",{class:"form__input","onUpdate:modelValue":e[0]||(e[0]=s=>a.newTask=s),placeholder:"Добавьте новую задачу"},null,512),[[y.Og,a.newTask]]),F],32)}var L=t(8568),S={setup(){const s=(0,m.o3)(),e=(0,L.IL)(""),t=()=>{if(!e.value.trim())return;const t={id:Date.now(),text:e.value,completed:!1};s.dispatch("addTask",t),e.value=""};return{newTask:e,addTask:t}}};const I=(0,p.c)(S,[["render",K]]);var N=I,O=t.p+"img/tick.svg",j=t.p+"img/pencil.svg",H=t.p+"img/basket.svg";const U={class:"task-list"},V={key:0,class:"item__text"},Y=["onKeydown"],q={class:"item__buttons"},B=["onClick"],G=(0,n.QD)("img",{src:O},null,-1),J=[G],M=["onClick"],P=(0,n.QD)("img",{src:j},null,-1),R=[P],X=["onClick"],Z=(0,n.QD)("img",{src:H},null,-1),$=[Z];function ss(s,e,t,a,i,r){return(0,n.Wz)(),(0,n.An)("ul",U,[((0,n.Wz)(!0),(0,n.An)(n.ae,null,(0,n.mi)(t.tasks,(s=>((0,n.Wz)(),(0,n.An)("li",{class:(0,o.WN)(["task-list__item",{"task-finished":s.completed}]),key:s.id},[s.isEditing?(0,n.wt)(((0,n.Wz)(),(0,n.An)("input",{key:1,class:"item__input","onUpdate:modelValue":e[0]||(e[0]=s=>a.editedText=s),onKeydown:(0,y.jj)((0,y.Y7)((e=>a.updateTask(s.id)),["prevent"]),["enter"]),onBlur:e[1]||(e[1]=(...s)=>a.cancelEditing&&a.cancelEditing(...s))},null,40,Y)),[[y.Og,a.editedText]]):((0,n.Wz)(),(0,n.An)("span",V,(0,o.WA)(s.text),1)),(0,n.QD)("div",q,[(0,n.QD)("button",{onClick:e=>a.finishTask(s.id)},J,8,B),(0,n.QD)("button",{onClick:e=>a.editTask(s.id)},R,8,M),(0,n.QD)("button",{onClick:e=>a.removeTask(s.id)},$,8,X)])],2)))),128))])}var es={props:{tasks:Array},setup(s){const e=(0,m.o3)(),t=(0,L.IL)(""),a=s=>{e.commit("toggleFinishing",s)},i=n=>{e.dispatch("toggleEditing",n),t.value=s.tasks.find((s=>s.id===n)).text},o=s=>{const n=t.value.trim();n&&e.dispatch("updateTaskText",{taskId:s,newText:n})},r=s=>{e.dispatch("toggleEditing",s),t.value=""},l=s=>{e.dispatch("removeTask",s)};return(0,n.q6)((()=>{t.value=""})),{finishTask:a,editedText:t,editTask:i,updateTask:o,cancelEditing:r,removeTask:l}}};const ts=(0,p.c)(es,[["render",ss]]);var ns=ts,as={components:{vForm:N,vTaskList:ns},setup(){const s=(0,m.o3)(),e=(0,L.IL)(!1),t=(0,n.S6)((()=>s.getters.tasks));return{showForm:e,tasks:t}}};const is=(0,p.c)(as,[["render",C]]);var os=is,rs={components:{vHeader:_,vAside:z,vTasksList:os}};const ls=(0,p.c)(rs,[["render",i]]);var cs=ls}}]);
//# sourceMappingURL=720.js.map