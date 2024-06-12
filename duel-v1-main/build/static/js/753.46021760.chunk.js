"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[753],{30697:(e,t,i)=>{i.d(t,{Z:()=>d,r:()=>l});var r,a,n=i(47313);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r])}return e},o.apply(this,arguments)}function s(e,t){let{title:i,titleId:s,...l}=e;return n.createElement("svg",o({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},l),i?n.createElement("title",{id:s},i):null,r||(r=n.createElement("path",{d:"M12.9304 12.9307V15.4827C12.9301 15.9473 12.7454 16.3928 12.417 16.7213C12.0885 17.0499 11.6431 17.2347 11.1786 17.2351H2.75368C2.28879 17.2351 1.84293 17.0505 1.51409 16.7219C1.18525 16.3933 1.00034 15.9476 1 15.4827V7.05783C1.00024 6.59307 1.18496 6.14741 1.51358 5.81876C1.84219 5.49011 2.28783 5.30534 2.75259 5.30505H5.24336",stroke:"#8192AA",strokeWidth:1.34783,strokeMiterlimit:10})),a||(a=n.createElement("path",{d:"M15.4217 1H6.99625C6.02832 1 5.24365 1.78466 5.24365 2.75259V11.178C5.24365 12.146 6.02832 12.9306 6.99625 12.9306H15.4217C16.3896 12.9306 17.1743 12.146 17.1743 11.178V2.75259C17.1743 1.78466 16.3896 1 15.4217 1Z",stroke:"#8192AA",strokeWidth:1.34783,strokeMiterlimit:10})))}const l=n.forwardRef(s),d=i.p+"static/media/copy.174eb3114fb961ef231759097bd0fcae.svg"},37627:(e,t,i)=>{i.d(t,{F:()=>r,c:()=>a});const r=new Array(9).fill(-1).map((()=>new Array(4).fill(-1))),a={roundId:0,user:{id:0,name:"",avatar:"",count:0},difficulty:{level:"Easy",blocksInRow:4,starsInRow:3},status:"",time:Date.now(),tower:r,multiplier:0,betAmount:0,bets:[],expired:!0,clientSeed:"",serverSeed:"",serverSeedHash:"",nonce:0,seedNonce:0,profit:0,paidBalanceType:"chip"}},19095:(e,t,i)=>{i.d(t,{DB:()=>o,Dx:()=>s,Ep:()=>d,MF:()=>n,W2:()=>u,WJ:()=>l,XF:()=>c,hs:()=>x});var r=i(25235),a=i(6262);const n=(0,r.default)(a.kC)`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:hover {
    ${e=>{let{active:t}=e;return t?"":"opacity: 0.4;"}}
  }

  opacity: ${e=>{let{active:t}=e;return t?"1":"0.3"}};

  transition: all 0.3s ease-in;
`,o=(0,r.default)(a.xu)`
  display: flex;
  gap: 40px;
  justify-content: space-between;
  align-items: center;
`,s=(0,r.default)(a.Dr)`
  font-size: 14px;
  color: ${e=>{let{theme:t}=e;return t.coinflip.title}};

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    font-size: 16px;
  }
`,l=(0,r.default)(a.Yd)`
  background-color: #24354c;
  color: #526d90;
  font-size: 13px;
  font-weight: 500;

  border-radius: 37px;
  transition: all 0.3s ease-in;

  &:hover {
    background-color: ${e=>{let{theme:t}=e;return t.coinflip.greenDark}};
    color: ${e=>{let{theme:t}=e;return t.colors.success}};
  }
`,d=(0,r.default)(a.xu)`
  display: grid;
  justify-content: center;
  align-items: center;

  .width_1100 & {
    display: block;
    padding: 0px;
    grid-template-columns: 40% 60%;
    gap: 30px;
    justify-content: space-between;
  }
`,c=((0,r.default)(a.zx)`
  width: 32px;
  height: 32px;
  & > img {
    transform: scale(0.6);
  }

  .width_1100 & {
    width: 52px;
    height: 52px;
    & > img {
      transform: scale(1);
    }
  }
`,(0,r.default)(a.zx)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  color: black;
  width: 230px;
  height: 48px;
  border-radius: 12px;
`),u=((0,r.default)(a.xu)`
  display: grid;
  gap: 24px;
  align-items: end;
  padding: 16px 20px;
  background-color: #1e3248;
  grid-template-columns: max-content 1fr;

  ${c} {
    justify-self: end;
  }

  .width_1100 & {
    background-color: transparent;
    padding: 0;
    gap: 40px;
  }
`,(0,r.default)(a.xu)`
  display: flex;
  flex-direction: column;
  background: ${e=>{let{theme:t}=e;return t.coinflip.gradients.background}};
  border: 2px solid ${e=>{let{theme:t}=e;return t.coinflip.border}};
  border-radius: 16px;
  overflow: hidden;
  padding: 15px 20px;
  text-align: center;
  gap: 30px;

  .width_1100 & {
    display: flex;
    flex-direction: row;
    text-align: inherit;
    justify-content: space-between;
    align-items: start;
    padding: 30px 40px;
  }
`),x=(0,r.default)(a.kC)`
  justify-content: center;

  .width_1100 & {
    justify-content: space-between;
  }
`},69435:(e,t,i)=>{i.d(t,{W2:()=>c,X6:()=>l,XF:()=>o,bs:()=>d,cm:()=>s,xv:()=>n});var r=i(25235),a=i(93813);const n=r.default.span`
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 34px;
`,o=r.default.span`
  color: #4f617b;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 30px;
`,s=(0,r.default)(a.kC)`
  flex-direction: row;
  align-items: end;
  gap: 14px;
`,l=((0,r.default)(a.kC)`
  flex-direction: row;
  justify-content: end;
  gap: 12px;
`,(0,r.default)(a.kC)`
  flex-direction: column;
  margin-bottom: 40px;
  gap: 5px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    flex-direction: row;
    justify-content: space-between;
  }
`),d=(0,r.default)(a.kC)`
  flex-direction: column;
  width: 100%;

  .enter,
  .appear {
    opacity: 0.01;
  }

  .enter.enter-active,
  .appear.appear-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit.exit-active {
    opacity: 0.01;
    transition: opacity 250ms ease-out;
  }
`,c=r.default.section`
  position: relative;
  z-index: 0;
`},88894:(e,t,i)=>{i.d(t,{Z:()=>s});i(47313);var r=i(25235),a=i(30334),n=i(6262),o=i(46417);function s(){const{isHoliday:e}=(0,a.CG)((e=>e.user));return(0,o.jsxs)("div",{style:{position:"relative",paddingTop:"10px"},children:[e&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.gq,{position:"absolute",size:60,top:-12,left:53}),(0,o.jsx)(n.NB,{position:"absolute",size:150,top:-15,right:51})]}),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.gq,{position:"absolute",size:60,bottom:-9,left:-7}),(0,o.jsx)(n.Rj,{position:"absolute",size:70,bottom:13,left:-12}),(0,o.jsx)(n.OF,{position:"absolute",size:60,bottom:25,right:-7}),(0,o.jsx)(n.KS,{position:"absolute",size:70,bottom:"1px",right:-10})]})]}),(0,o.jsx)(l,{className:"dreamtower_dreamtext",children:"DREAM"}),(0,o.jsx)(d,{className:"dreamtower_towertext",children:"Tower"})]})}const l=(0,r.default)(n.xv)`
  font-family: 'Righteous';
  font-size: 64px;
  line-height: 1;
  text-align: center;
  color: transparent;
  position: relative;
  top: 5px;

  -webkit-text-stroke: 1px white;

  text-shadow: 0 0 3px #0680d100, 0 0 5px #0680d100, 0 0 10px #0680d100,
    0 0 20px #0680d1, 0 0 30px #0680d1, 0 0 40px #0680d1, 0 0 50px #0680d1;
`,d=(0,r.default)(n.xv)`
  font-family: 'Mr Dafoe';
  font-size: 50px;
  line-height: 1;
  font-style: italic;
  text-align: center;
  color: transparent;
  rotate: -5deg;

  -webkit-text-stroke: 1px white;

  text-shadow: 0 0 3px #ff4da6, 0 0 5px #ff4da6, 0 0 10px #ff4da6,
    0 0 20px #ff4da6, 0 0 30px #ff4da6, 0 0 40px #ff4da6, 0 0 50px #ff4da6;
`},90950:(e,t,i)=>{i.d(t,{Z:()=>d});var r=i(25235),a=i(6262),n=i(52986),o=i(88894),s=i(89563),l=i(46417);function d(e){let{tower:t,blocksInRow:i=4}=e;return(0,l.jsxs)(c,{children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)(a.kC,{py:"10px",flexDirection:"column-reverse",children:t.map(((e,t)=>(0,l.jsx)(s.Z,{value:e,isNext:!1,isHighlight:!1,isClickable:!1,isUnderBroken:!1,selectedIndex:void 0,nextMultiplier:-1,blocksInRow:i,handleClickSquare:()=>{}},t)))})]})}const c=(0,r.default)(a.xu)`
  width: 320px;
  height: 780px;
  background-image: url(${n});
  background-size: cover;
  position: relative;
`},89563:(e,t,i)=>{i.d(t,{Z:()=>u});var r=i(6262),a=i(47313),n=i(25235),o=i(30334),s=i(46417);const l=(0,n.default)(r.zx)`
  height: 60px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  /* background: #1c2c45; */
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;

  ${e=>{let{blocks:t}=e;return n.css`
      width: ${240/t}px;
    `}}

  ${e=>{let{disabled:t}=e;if(t)return n.css`
        opacity: 1;
        cursor: not-allowed;
        pointer-events: none;
      `}}

  ${e=>{let{isNext:t,towerMode:i}=e;if(t)return"manual"===i?"box-shadow: 0px 0px 20px rgba(219, 0, 255, 0.25); background: rgba(184, 0, 154, 0.25); border: 1px solid #CB72E9;":"box-shadow: 0px 0px 20px rgba(0, 71, 255, 0.25); background: rgba(3, 13, 108, 0.25); border: 1px solid #4154FF;"}}
    
  ${e=>{let{isStar:t,isSelected:i,isInPath:r}=e;return i?t?"border: 1px solid #FBD92B; box-shadow: inset 0px 0px 20px rgba(255, 199, 0, 0.25);":"border: 1px solid #D70606;":r?"box-shadow: 0px 0px 20px rgba(0, 71, 255, 0.25); background: rgba(3, 13, 108, 0.25); border: 1px solid #4154FF;":void 0}}
`,d=e=>{let{roundId:t=0,isNext:i=!1,towerMode:n="manual",isClickable:d,isStar:c,isSelected:u,isInPath:x,nextMultiplier:p,blocks:h,handleClick:f}=e;const g=(0,a.useMemo)((()=>"auto"===n),[n]),m=(0,o.CG)((e=>e.user.isHoliday));return(0,s.jsxs)(l,{roundId:t,isNext:i,isStar:c,isSelected:u,isInPath:x,disabled:!d,blocks:h,towerMode:n,onClick:d?f:null,children:[i&&(0,s.jsxs)(s.Fragment,{children:[p.toFixed(2),"x"]}),c&&u&&(m?(0,s.jsx)(r.Dk,{size:68,isAuto:g,roundId:t}):(0,s.jsx)(r.r7,{isAuto:g,roundId:t})),c&&!u&&(m?(0,s.jsx)(r.Dk,{size:68,isAuto:g,isSelected:u,roundId:t,opacity:.15}):(0,s.jsx)(r.r7,{isAuto:g,isSelected:u,roundId:t,opacity:.15})),!c&&u&&(0,s.jsx)(r.pk,{})]})},c=(0,n.default)(r.kC)`
  justify-content: space-between;
  padding: 5px 20px;
  border-width: 0px 2px 0px 2px;
  /* background: #e8caee; */
  /* box-shadow: 0px 0px 7px 3px rgba(255, 18, 246, 0.25); */

  ${e=>{let{highlight:t}=e;return t&&"\n        border-color: #e8caee;\n        border-style: solid;\n      "}}
`,u=e=>{let{roundId:t=0,value:i,isNext:r,towerMode:a="manual",isHighlight:n,isClickable:o,selectedIndex:l,isUnderBroken:u,nextMultiplier:x,blocksInRow:p,handleClickSquare:h}=e;return(0,s.jsx)(c,{className:"dreamtower_row",highlight:n,children:i.map(((e,n)=>(0,s.jsx)(d,{roundId:t,isNext:r,isClickable:o,isStar:1===i[n],isInPath:l===n,isSelected:u&&l===n,towerMode:a,nextMultiplier:x,blocks:p,handleClick:()=>h(n)},n)))})}},5848:(e,t,i)=>{i.r(t),i.d(t,{default:()=>He});var r=i(47313),a=i(48446);const n=i.p+"static/media/explosion0.629909247eca0f785342.mp3",o=i.p+"static/media/explosion1.c3ea12687edeade727a1.mp3",s=i.p+"static/media/explosion2.1a4728c7d1ce52635054.mp3";var l=i(6262),d=i(25235),c=i(35169),u=i(52986);const x=(0,d.default)(l.xu)`
  width: 100%;
  .width_700 & {
    width: auto;
  }
`,p=(0,d.default)(l.kC)`
  gap: 10px;
  margin-top: 10px;
  flex-direction: column;
  .width_700 & {
    flex-direction: row;
  }
`,h=(0,d.default)(l.xu)`
  width: 320px;
  height: 840px;
  background-image: url(${u});
  background-size: cover;
  position: relative;
  ${e=>{let{isHoliday:t}=e;return!t&&"margin-bottom: 30px;"}}

  transform-origin: center top;
  scale: ${e=>{let{scale:t}=e;return t}};

  .width_900 & {
    margin-top: ${e=>{let{isHoliday:t}=e;return t?"-30px":"00px"}};
  }
`,f=(0,d.default)(c.mQ)`
  .react-tabs__tab-list {
    display: flex;
    .width_700 & {
      width: 580px;
    }
    margin: 0;
    border: none;
    div {
      background: #202e3f;
      border-radius: 10px 10px 0 0;
    }
    .react-tabs__tab {
      bottom: 0;
      padding: 12px 15px;

      border-top-right-radius: 10px;

      font-family: 'Inter';
      font-style: normal;
      font-weight: 600;
      font-size: 10px;

      ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
        font-size: 14px;
      }

      line-height: 10px;
      text-align: center;
      letter-spacing: 0.18em;
      color: #697e9c;
      text-transform: uppercase;

      :focus:after {
        display: none !important;
      }

      b {
        position: absolute;
        left: 50%;
        top: -2px;
        transform: translateX(-50%);
        background-color: #4fff8b;
        width: 0%;
        height: 2px;
        border-radius: 2px;
        overflow: hidden;
        transition: all 0.3s ease-in;
      }

      :hover b {
        width: 60%;
      }
    }

    .react-tabs__tab--selected {
      background: #101b2c;

      border: 2px solid #4f617b;
      border-radius: 10px 10px 0 0;
      border-bottom: 0;
      color: #4fff8b;

      ::before {
        position: absolute;
        background: #101b2c;
        content: '';
        display: block;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: -2px;
        pointer-events: none;
        z-index: 10;
      }

      b {
        width: 60%;
      }
    }
  }
`,g=(0,d.default)(c.x4)`
  .container {
    position: relative;
    max-width: 580px;

    border: 2px solid #4f617b;
    border-radius: 0px 10px 10px 10px;

    padding: 16px;
    ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
      padding: 30px;
    }
    background: #132031bf;

    backdrop-filter: blur(5px);
  }
`,m=(0,d.default)(l.kC)`
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: -60px;
  .width_900 & {
    align-items: start;
    flex-direction: row;
  }
`;var b=i(18316),w=i(88303),j=i(34771),y=i(70763),k=i(19095),v=i(30334),C=i(56484),F=i(54280),A=i(7591),S=i(63191);const B=(0,d.default)(l.zx)`
  padding: 7.2px 5.5px;
  border-radius: 7px 7px 0px 0px;
  background: #24354d;
`,z=(0,d.default)(l.zx)`
  padding: 7.2px 5.5px;
  border-radius: 0px 0px 7px 7px;
  background: #24354d;
  svg {
    transform: rotate(180deg);
  }
`,T=d.default.input`
  font-size: 20px !important;
`,P=(0,d.default)(l.zx)`
  width: 100%;
  height: 38px;
  background: #242f42;
  font-size: 14px;
  font-weight: 600;
  color: #768bad;
  border-radius: 5px;

  ${e=>{let{selected:t}=e;return t&&"border: 1px solid #4FFF8B; color: #4FFF8B;"}};
`;var I=i(46417);function W(){const e=(0,v.CG)((e=>e.user)),t=(0,v.CG)((e=>e.dreamtower.game)),i=(0,v.CG)((e=>e.meta.dreamtower)),{betBalanceType:a}=(0,v.CG)((e=>e.user)),{data:n}=(0,F.LW)({key:"dreamtower_max_win",route:"/dreamtower/max-win",method:"get"}),o=(0,r.useMemo)((()=>n||0),[n]),[s,d]=(0,r.useState)(t.betAmount>0?(0,S.q)(t.betAmount).toFixed(2):""),[c,u]=(0,r.useState)(t.difficulty);(0,r.useEffect)((()=>()=>{v.ZP.dispatch((0,C.ZH)())}),[]);const x=(0,r.useCallback)((()=>{let t=2*+s;t<=0&&(t=1),t>(0,S.q)(e.balance)&&(t=(0,S.q)(e.balance)),d(t.toFixed(2).toString())}),[s,e.balance]),h=(0,r.useCallback)((()=>{let t=+s/2;t>(0,S.q)(e.balance)&&(t=(0,S.q)(e.balance)),t<1&&(t=1),d(t.toFixed(2).toString())}),[s,e.balance]);(0,r.useEffect)((()=>{v.ZP.dispatch((0,C.gQ)(+(0,S.o)(+s).toFixed(0)))}),[s]);const f=(0,r.useCallback)((e=>{u(e),v.ZP.dispatch((0,C.lf)(e))}),[]),g=(0,r.useMemo)((()=>"playing"===t.status),[t.status]),[m]=(0,l.dd)((0,I.jsx)(l.Ys,{setValue:d}),!0,!0,!0,"BetAllModal"),W=(0,r.useCallback)((()=>{""!==e.name?m():A.A.info("Please sign in.")}),[e,m]);return(0,I.jsxs)("div",{className:"container",children:[(0,I.jsxs)(l.kC,{justifyContent:"space-between",children:[(0,I.jsx)(l.xv,{fontSize:16,color:"#4F617B",fontWeight:400,children:"Bet Amount"}),(0,I.jsx)(k.WJ,{onClick:W,disabled:g,children:"All-in"})]}),(0,I.jsxs)(y.W,{as:l.rj,gridTemplateColumns:"max-content auto max-content",mt:"15px",gap:10,p:"3px 3px 3px 15px",children:["coupon"===a?(0,I.jsx)(w.r,{}):(0,I.jsx)(b.r,{}),(0,I.jsx)(T,{type:"number",placeholder:"0.00",value:s,onChange:e=>{+e.target.value<0||d(e.target.value)},disabled:g,onKeyPress:e=>{"e"!==e.key&&"E"!==e.key&&"+"!==e.key&&"-"!==e.key||e.preventDefault()},step:"any"}),(0,I.jsxs)(l.xu,{children:[(0,I.jsx)(B,{type:"button",onClick:x,disabled:g,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{type:"button",onClick:h,disabled:g,children:(0,I.jsx)(j.r,{})})]})]}),(0,I.jsx)(l.kC,{justifyContent:"end",children:(0,I.jsxs)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:400,mb:"0px",children:["Max Win: ",(0,S.q)(o).toFixed(2)]})}),(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:400,mt:"10px",children:"Game Difficulty"}),(0,I.jsx)(p,{children:i.difficulties.map(((e,t)=>(0,I.jsx)(P,{selected:c.level===e.level,onClick:()=>f(e),disabled:g,children:e.level},t)))})]})}var D=i(62870),M=i(31387),Z=i(69435);function E(){const e=(0,v.CG)((e=>e.user)),t=(0,v.CG)((e=>e.dreamtower.game)),i=(0,v.CG)((e=>e.dreamtower.auto)),a=(0,v.CG)((e=>e.meta.dreamtower)),{betBalanceType:n}=(0,v.CG)((e=>e.user)),{data:o}=(0,F.LW)({key:"dreamtower_max_win",route:"/dreamtower/max-win",method:"get"}),s=(0,r.useMemo)((()=>o||0),[o]),[d,c]=(0,r.useState)(i.betAmount>0?(0,S.q)(i.betAmount).toFixed(2):""),[u,x]=(0,r.useState)(t.difficulty),[h,f]=(0,r.useState)(void 0===i.betCount?"":i.betCount.toFixed()),[g,m]=(0,r.useState)(void 0===i.changeBetOnWin?"":i.changeBetOnWin.toFixed()),[A,W]=(0,r.useState)(void 0===i.changeBetOnLoss?"":i.changeBetOnLoss.toFixed()),[E,G]=(0,r.useState)(void 0===i.stopProfit?"":(0,S.q)(i.stopProfit).toFixed(2)),[$,_]=(0,r.useState)(void 0===i.stopLoss?"":(0,S.q)(i.stopLoss).toFixed(2)),O=(0,r.useCallback)((()=>{let t=2*+d;t<=0&&(t=1),t>(0,S.q)(e.balance)&&(t=(0,S.q)(e.balance)),c(t.toFixed(2))}),[d,e.balance]),H=(0,r.useCallback)((()=>{let t=+d/2;t>(0,S.q)(e.balance)&&(t=(0,S.q)(e.balance)),t<1&&(t=1),c(t.toFixed(2))}),[d,e.balance]),q=(0,r.useCallback)((e=>{x(e),v.ZP.dispatch((0,C.lf)(e))}),[]),L=(0,r.useCallback)((()=>{f((+h+1).toFixed()),v.ZP.dispatch((0,C.pX)(+(+h+1).toFixed()))}),[h]),N=(0,r.useCallback)((()=>{1===+h?(f(""),v.ZP.dispatch((0,C.pX)(void 0))):+h>0&&(f((+h-1).toFixed()),v.ZP.dispatch((0,C.pX)(+(+h-1).toFixed())))}),[h]),U=(0,r.useCallback)((()=>{m((+g+5).toFixed()),v.ZP.dispatch((0,C.cu)(+(+g+5).toFixed()))}),[g]),K=(0,r.useCallback)((()=>{m((+g-5).toFixed()),v.ZP.dispatch((0,C.cu)(+(+g-5).toFixed()))}),[g]),Q=(0,r.useCallback)((()=>{W((+A+5).toFixed()),v.ZP.dispatch((0,C.lt)(+(+A+5).toFixed()))}),[A]),X=(0,r.useCallback)((()=>{W((+A-5).toFixed()),v.ZP.dispatch((0,C.lt)(+(+A-5).toFixed()))}),[A]),V=(0,r.useCallback)((()=>{G((+E+1).toFixed(2)),v.ZP.dispatch((0,C.KK)((0,S.o)(+E+1)))}),[E]),Y=(0,r.useCallback)((()=>{1===+E?(G(""),v.ZP.dispatch((0,C.KK)(void 0))):(G((+E-1).toFixed(2)),v.ZP.dispatch((0,C.KK)((0,S.o)(+E-1))))}),[E]),J=(0,r.useCallback)((()=>{_((+$+1).toFixed(2)),v.ZP.dispatch((0,C.mH)((0,S.o)(+$+1)))}),[$]),ee=(0,r.useCallback)((()=>{1===+$?(_(""),v.ZP.dispatch((0,C.mH)(void 0))):(_((+$-1).toFixed(2)),v.ZP.dispatch((0,C.mH)((0,S.o)(+$-1))))}),[$]),te=(0,r.useMemo)((()=>"playing"===t.status||"running"===i.status),[t.status,i.status]);(0,r.useEffect)((()=>{"running"===i.status&&void 0!==i.betCount&&f(i.betCount.toFixed())}),[i.betCount,i.status]),(0,r.useEffect)((()=>{"running"===i.status&&c((0,S.q)(i.betAmount).toFixed(2))}),[i.betAmount,i.status]),(0,r.useEffect)((()=>{v.ZP.dispatch((0,C.gQ)(+(0,S.o)(+d).toFixed(0))),v.ZP.dispatch((0,C.op)(+(0,S.o)(+d).toFixed(0)))}),[d]);const[ie]=(0,l.dd)((0,I.jsx)(l.Ys,{setValue:c}),!0,!0,!0,"BetAllModal"),re=(0,r.useCallback)((()=>{""!==e.name?ie():M.Am.info("Please sign in.")}),[e,ie]);return(0,I.jsxs)("div",{className:"container",children:[(0,I.jsxs)(l.kC,{justifyContent:"space-between",children:[(0,I.jsx)(l.xv,{fontSize:16,color:"#4F617B",fontWeight:400,children:"Bet Amount"}),(0,I.jsx)(k.WJ,{onClick:re,disabled:te,children:"All-in"})]}),(0,I.jsxs)(y.W,{as:l.rj,gridTemplateColumns:"max-content auto max-content",mt:"15px",gap:10,p:"3px 3px 3px 15px",children:["coupon"===n?(0,I.jsx)(w.r,{}):(0,I.jsx)(b.r,{}),(0,I.jsx)(T,{type:"number",placeholder:"0.00",value:d,onChange:e=>{+e.target.value<0||c(e.target.value)},disabled:te,onKeyPress:e=>{"e"!==e.key&&"E"!==e.key&&"+"!==e.key&&"-"!==e.key||e.preventDefault()},step:"any"}),(0,I.jsxs)(l.xu,{children:[(0,I.jsx)(B,{type:"button",onClick:O,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{type:"button",onClick:H,disabled:te,children:(0,I.jsx)(j.r,{})})]})]}),(0,I.jsx)(l.kC,{justifyContent:"end",children:(0,I.jsxs)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:400,mb:"0px",children:["Max Win: ",(0,S.q)(s).toFixed(2)]})}),(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:400,mt:"30px",children:"Game Difficulty"}),(0,I.jsx)(p,{children:a.difficulties.map(((e,t)=>(0,I.jsx)(P,{selected:u.level===e.level,onClick:()=>q(e),disabled:te,children:e.level},t)))}),(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:400,mt:"30px",children:"Number of Bets"}),(0,I.jsxs)(y.W,{mt:"15px",gap:10,p:"3px 3px 3px 15px",children:[(0,I.jsx)(T,{type:"number",placeholder:"\u221e",value:h,onChange:e=>{+e.target.value<0||(0===+e.target.value?(f(""),v.ZP.dispatch((0,C.pX)(void 0))):(f((+e.target.value).toFixed()),v.ZP.dispatch((0,C.pX)(+(+e.target.value).toFixed()))))},disabled:te}),(0,I.jsxs)(l.xu,{children:[(0,I.jsx)(B,{type:"button",onClick:L,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{type:"button",onClick:N,disabled:te||0===+Z.XF,children:(0,I.jsx)(j.r,{})})]})]}),(0,I.jsxs)(l.rj,{gridTemplateColumns:"1fr 1fr",gap:30,mt:"30px",children:[(0,I.jsxs)("div",{children:[(0,I.jsxs)(l.kC,{flexDirection:["column","row"],gap:5,children:[(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:700,children:"On Win"}),(0,I.jsx)(l.xv,{color:"#95A3B9",fontSize:16,fontWeight:700,children:""===g?"Disabled":0===+g?"Reset":+g>0?"Increase Bet By":"Decrease Bet By"})]}),(0,I.jsxs)(y.W,{background:"#03060999",mt:"10px",gap:10,p:"3px 3px 3px 15px",children:[(0,I.jsx)(D.h3,{suffix:"%",onValueChange:e=>{let{value:t}=e;""===t?(m(""),v.ZP.dispatch((0,C.cu)(void 0))):+t>=-100&&(m((+t).toFixed()),v.ZP.dispatch((0,C.cu)(+(+t).toFixed())))},value:""!==g?g+"%":"",disabled:te,isAllowed:e=>{let{value:t}=e;return+t>=-100||"-"===t}}),(0,I.jsxs)(R,{children:[(0,I.jsx)(B,{onClick:U,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{onClick:K,disabled:te||+g<-95,children:(0,I.jsx)(j.r,{})})]})]})]}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(l.kC,{flexDirection:["column","row"],gap:5,children:[(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:700,children:"On Loss"}),(0,I.jsx)(l.xv,{color:"#95A3B9",fontSize:16,fontWeight:700,children:""===A?"Disabled":0===+A?"Reset":+A>0?"Increase Bet By":"Decrease Bet By"})]}),(0,I.jsxs)(y.W,{background:"#03060999",mt:"10px",gap:10,p:"3px 3px 3px 15px",children:[(0,I.jsx)(D.h3,{suffix:"%",onValueChange:e=>{let{value:t}=e;""===t?(W(""),v.ZP.dispatch((0,C.lt)(void 0))):+t>=-100&&(W((+t).toFixed()),v.ZP.dispatch((0,C.lt)(+(+t).toFixed())))},value:""!==A?A+"%":"",disabled:te,isAllowed:e=>{let{value:t}=e;return+t>=-100||"-"===t}}),(0,I.jsxs)(R,{children:[(0,I.jsx)(B,{onClick:Q,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{onClick:X,disabled:te||+A<-95,children:(0,I.jsx)(j.r,{})})]})]})]}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(l.kC,{flexDirection:["column","row"],gap:5,children:[(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:700,children:"Stop Profit"}),(0,I.jsx)(l.xv,{color:"#95A3B9",fontSize:16,fontWeight:700,children:""===E?"Disabled":"At"})]}),(0,I.jsxs)(y.W,{background:"#03060999",mt:"10px",gap:10,p:"3px 3px 3px 15px",children:[(0,I.jsx)(R,{children:"coupon"===n?(0,I.jsx)(w.r,{}):(0,I.jsx)(b.r,{})}),(0,I.jsx)(T,{type:"number",onChange:e=>{+e.target.value<0||(0===+e.target.value?(G(""),v.ZP.dispatch((0,C.KK)(void 0))):(G(e.target.value),v.ZP.dispatch((0,C.KK)((0,S.o)(+e.target.value)))))},value:E,disabled:te}),(0,I.jsxs)(R,{children:[(0,I.jsx)(B,{onClick:V,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{onClick:Y,disabled:te||""===E,children:(0,I.jsx)(j.r,{})})]})]})]}),(0,I.jsxs)("div",{children:[(0,I.jsxs)(l.kC,{flexDirection:["column","row"],gap:5,children:[(0,I.jsx)(l.xv,{color:"#4F617B",fontSize:16,fontWeight:700,children:"Stop Loss"}),(0,I.jsx)(l.xv,{color:"#95A3B9",fontSize:16,fontWeight:700,children:""===$?"Disabled":"At"})]}),(0,I.jsxs)(y.W,{background:"#03060999",mt:"10px",gap:10,p:"3px 3px 3px 15px",children:[(0,I.jsx)(R,{children:"coupon"===n?(0,I.jsx)(w.r,{}):(0,I.jsx)(b.r,{})}),(0,I.jsx)(T,{type:"number",onChange:e=>{+e.target.value<0||(0===+e.target.value?(_(""),v.ZP.dispatch((0,C.mH)(void 0))):(_(e.target.value),v.ZP.dispatch((0,C.mH)((0,S.o)(+e.target.value)))))},value:$,disabled:te}),(0,I.jsxs)(R,{children:[(0,I.jsx)(B,{onClick:J,disabled:te,children:(0,I.jsx)(j.r,{})}),(0,I.jsx)(z,{onClick:ee,disabled:te||""===$,children:(0,I.jsx)(j.r,{})})]})]})]})]})]})}const R=(0,d.default)(l.xu)`
  flex: none;
`;var G=i(54623),$=i(14779),_=i(61761);const O=(0,d.default)(l.kC)`
  flex-direction: column;
  padding: 20px;
  gap: 9px;
  background: #182738;
  border-radius: 8px;
  min-width: 480px;

  cursor: pointer;
  ${e=>{let{selected:t}=e;return t&&"\n    border: 1px solid #FFE87F;\n    box-shadow: 0px 0px 16px rgba(255, 232, 127, 0.75);\n  "}}
`,H=(0,d.default)(l.kC)`
  flex-direction: column;
  background: #0f1a26;
  border-radius: 13px;
  padding: 15px 5px 15px 0px;
  gap: 9px;
`,q=(0,d.default)(l.kC)`
  flex-direction: column;
  max-height: 400px;
  gap: 15px;
  padding: 0px 5px 0px 15px;

  overflow: auto;
  scrollbar-width: 5px;
`;var L=i(10658),N=i.n(L),U=i(7958),K=i(37627);const Q=(0,d.default)(l.u_)`
  max-width: 1000px;
  width: 95vw;

  font-size: 20px;
  border-radius: 20px;
  background: linear-gradient(180deg, #6a7f9e 0%, rgba(106, 127, 158, 0) 100%);
  padding: 2px;
`,X=(0,d.default)(l.xu)`
  max-height: 80vh;

  display: flex;
  flex-direction: column;

  /* scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  } */
`,V=(0,d.default)(l.rj)`
  color: white;
  font-size: 1em;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 18%;
  grid-template-columns: 1fr 130px 1fr;
  gap: 10px;

  margin-bottom: 30px;

  ${e=>{let{theme:t}=e;return t.mediaQueries.sm}} {
    grid-template-columns: max-content auto;
    margin-bottom: 56px;
  }
`,Y=(0,d.default)(l.zx)`
  width: 28px;
  height: 28px;

  svg {
    width: 12px;
    height: 12px;
  }
`;Y.defaultProps={variant:"secondary"};const J=(0,d.default)(l.kC)`
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: ${e=>{let{readOnly:t}=e;return t?"#121C2A":"#03060999"}};
  border-radius: 11px;
  flex-grow: 1;

  &:focus-within {
    box-shadow: 0 0 0 1px #7389a9;
  }

  input {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: white;
    flex-grow: 1;
    border: none;
    outline: none;
    background: transparent;

    &::placeholder {
      color: #ffffff80;
    }

    ::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
  }
`;(0,d.default)(l.zx)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.success}};
  background: linear-gradient(180deg, #070b10 0%, rgba(7, 11, 16, 0.3) 100%);
  border-radius: 7px;

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 16%;
  text-transform: uppercase;

  height: min-content;

  width: 100%;

  ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
    width: max-content;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    color: white;
    width: 100%;
    height: 100%;

    padding: 7px 14px;
  }

  &:disabled {
    opacity: 0.3;
    pointer-events: none;
  }
`.defaultProps={variant:"secondary"};const ee=(0,d.default)(l.xv)`
  color: #d0daeb;
  font-size: 18px;
  line-height: 22px;
  font-weight: 600;
  letter-spacing: 10%;

  text-transform: uppercase;
`,te=(0,d.default)(l.xv)`
  color: #b9d2fd;
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
`,ie=(0,d.default)(l.xu)`
  height: 1px;
  background: #ffffff1a;

  margin-top: 33px;
  margin-bottom: 25px;
`,re=(0,d.default)(l.zx)`
  font-size: 16px;
  font-weight: 500;
  background: linear-gradient(180deg, #2a3d57 0%, #2a3d57 100%);
  height: 52px;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #8192aa;
  }
`;re.defaultProps={variant:"secondary"};const ae=d.default.td``,ne=(d.default.table`
  position: relative;
  width: 100%;
  min-width: 600px;

  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #ffffff;

  border-collapse: separate;
  border-spacing: 0;

  padding-bottom: 10px;

  th,
  td {
    text-align: left;
    vertical-align: middle;
    padding: 9px 20px;
  }

  ${ae} {
    padding-left: 55px;
  }

  th {
    position: sticky;
    top: 0;
    color: #768bad;
    background: #162536;
  }

  td {
    background: #0306094c;
  }

  tr:first-child {
    td:first-child {
      border-top-left-radius: 10px;
    }
    td:last-child {
      border-top-right-radius: 10px;
    }
  }

  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 10px;
    }
    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
`,(0,d.default)(b.r)`
  min-width: 14px;
  max-width: 14px;
  min-height: 14px;
  max-height: 14px;
`);var oe=i(92229),se=i.n(oe),le=i(30697);const de=e=>{let{status:t}=e;return(0,I.jsx)(l.kC,{borderRadius:"30px",px:"30px",py:"4px",background:"Active"===t?"#4FFF8B":"#FFCE4F",justifyContent:"center",alignItems:"center",fontSize:"12px",fontWeight:700,color:"black",children:t})},ce=e=>{let{title:t="",readOnly:i=!1,showChip:r=!1,text:a="",placeholder:n="",enableCopy:o=!1,setText:s,type:d="text",status:c=""}=e;return(0,I.jsxs)(l.kC,{flexDirection:"column",gap:8,mt:2,children:[(0,I.jsx)(l.xv,{fontSize:"0.8em",fontWeight:400,fontStyle:"italic",color:"#768BAD",children:t}),(0,I.jsxs)(J,{readOnly:i,children:[!0===r&&(0,I.jsx)(ne,{width:14,height:14}),(0,I.jsx)(l.II,{readOnly:i,value:a,type:d,placeholder:n,onChange:e=>{s(e.target.value)}}),""!==c&&(0,I.jsx)(de,{status:c}),!0===o&&(0,I.jsx)(Y,{onClick:()=>{se()(a),M.Am.success("Copy to clipboard success.")},children:(0,I.jsx)(le.r,{width:12,height:12})})]})]})},ue=r.memo(ce);var xe=i(29466),pe=i(90950);const he=e=>{var t;let{onDismiss:i,game:r}=e;return(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(l.kC,{gap:14,mt:"10px",children:[(0,I.jsx)(ue,{title:"Player",text:r.user.name,enableCopy:!0,readOnly:!0}),(0,I.jsx)(ue,{title:"Difficulty",text:r.difficulty.level,enableCopy:!0,readOnly:!0})]}),(0,I.jsx)(ie,{}),(0,I.jsxs)(l.xu,{mb:"17px",gap:50,children:[(0,I.jsx)(ee,{children:"Seed Pair"}),(0,I.jsx)(l.kC,{justifyContent:"space-between",flexWrap:"wrap",gap:14,mt:"10px",mb:"17px",children:(0,I.jsxs)(te,{children:["Game results are generated from a combinations of the client seed (the player playing the game) and the server seed (hashed as long as the client seed is active). Every time you update your client seed a new server seed is generated, hashed and paired to create a seed pair - your previous client seed becomes expired and the server seed unhashed. To verify the outcome of a previous game the player must generate a new client seed,"," ",(0,I.jsx)(l.Dr,{fontWeight:700,color:"#b9d2fd",onClick:()=>{i&&i()},children:(0,I.jsx)(xe.rU,{to:"/fair",state:{room:"seed"},children:"click here"})})," ","to generate a new client seed."]})}),(0,I.jsx)(ue,{title:"Client Seed",text:r.clientSeed,status:r.serverSeed?"Expired":"Active",enableCopy:!0,readOnly:!0}),(0,I.jsx)(ue,{title:"Server Seed (Hashed)",text:r.serverSeedHash,enableCopy:!0,readOnly:!0}),(0,I.jsx)(ue,{title:"Server Seed (UnHashed)",text:null!==(t=r.serverSeed)&&void 0!==t?t:"",placeholder:"Generate a new client seed to see unhashed server seed.",enableCopy:!0,readOnly:!0}),(0,I.jsxs)(l.rj,{gridTemplateColumns:"repeat(auto-fill, minmax(280px, 1fr))",gridColumnGap:"30px",gridRowGap:"17px",children:[(0,I.jsx)(ue,{title:"Nonce",text:r.nonce.toString(),enableCopy:!0,readOnly:!0}),(0,I.jsx)(ue,{title:"Total Bets Made With Pair",text:r.seedNonce.toString(),placeholder:"Game In Progress...",enableCopy:!0,readOnly:!0})]})]}),(0,I.jsx)(l.kC,{justifyContent:"center",pt:"50px",mb:"17px",children:(0,I.jsx)(pe.Z,{tower:r.tower,blocksInRow:r.difficulty.blocksInRow})}),(0,I.jsxs)(l.kC,{gap:30,flexWrap:"wrap",pt:"18px",children:[(0,I.jsx)(re,{width:["100%","100%","192px"],onClick:i,children:(0,I.jsx)(xe.rU,{to:"/fair",children:"Provably Fair"})}),(0,I.jsx)(re,{width:["100%","100%","216px"],onClick:i,disabled:!r.serverSeed,children:(0,I.jsx)(xe.rU,{to:"/fair",state:{gameType:"dreamtower",gameData:r},children:"Advanced Verification"})})]})]})},fe=r.memo(he);function ge(e){let{roundId:t=0,onDismiss:i,...a}=e;const[n,o]=(0,r.useState)(t.toString()),{data:s,error:d}=(0,F.R0)("dreamtower",n),{gameData:c}=(0,r.useMemo)((()=>{const e=!!d;return{gameData:e||!e&&!s?K.c:s}}),[s,d]);return(0,I.jsx)(Q,{...a,onDismiss:i,children:(0,I.jsx)(l.xu,{p:["40px 20px","40px 30px","40px 40px","40px 50px"],background:"linear-gradient(180deg, #132031 0%, #1a293c 100%)",borderRadius:"20px",children:(0,I.jsxs)(X,{children:[(0,I.jsxs)(V,{children:[(0,I.jsx)(l.a,{size:22,color:"#4FFF8B"}),"DREAMTOWER FAIRNESS"]}),(0,I.jsxs)(l.xu,{overflow:"auto",pl:"2px",pr:"10px",children:[(0,I.jsxs)(l.xu,{children:[(0,I.jsx)(ee,{children:"Game Details"}),(0,I.jsxs)(l.kC,{justifyContent:"space-between",flexWrap:"wrap",gap:14,mt:"10px",children:[(0,I.jsxs)(te,{children:["Change the ",(0,I.jsx)(l.Dr,{fontWeight:700,children:"Game ID"})," to verify outcomes for other games."]}),(0,I.jsxs)(l.kC,{gap:6,width:"max-content",flexDirection:"column",children:[(0,I.jsx)(ue,{title:"Game ID",text:n,type:"number",setText:o,enableCopy:!0}),(0,I.jsx)(l.Dr,{color:"#FF623B",fontWeight:400,fontSize:"12px",lineHeight:"15px",opacity:d?1:0,children:"The game with this ID doesn\u2019t exist"})]})]})]}),(0,I.jsx)(fe,{roundId:+n,onDismiss:i,game:c})]})]})})})}(0,d.default)(l.II)`
  padding: 8px 8px 8px 20px;
  background: rgba(3, 6, 9, 0.6);
  border-radius: 11px;
  width: 80%;
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  color: #ffffff;
  height: 44px;
`,(0,d.default)(l.zx)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.success}};
  background: linear-gradient(180deg, #070b10 0%, rgba(7, 11, 16, 0.3) 100%);
  border-radius: 6.75px;

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.16em;
  color: white;
  width: 20%;
  white-sapce: nowrap;

  padding-left: 13px;
  padding-right: 13px;
  gap: 10px;

  text-transform: uppercase;
`;var me=i(13255),be=i(81782);const we=d.default.button`
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 5px;
  color: ${e=>{let{theme:t}=e;return t.colors.text}};
  border: 1px solid;
  border-color: #768bad;
  border-radius: 50%;
  background: transparent;
  font-size: 14px;
  &:hover {
    color: ${e=>{let{theme:t}=e;return t.colors.success}};
    border-color: ${e=>{let{theme:t}=e;return t.colors.success}};
    cursor: pointer;

    svg {
      path {
        fill: ${e=>{let{theme:t}=e;return t.colors.success}};
      }
    }
  }
  ${be.e6}
`;function je(e){let{onClick:t,...i}=e;return(0,I.jsx)(we,{onClick:e=>{e&&e.stopPropagation&&e.stopPropagation(),t&&t()},...i,children:(0,I.jsx)(me.a,{size:15})})}const ye=e=>{let{round:t,selected:i,onClick:r}=e;const[a]=(0,l.dd)((0,I.jsx)(ge,{roundId:t.roundId}),!0);return(0,I.jsxs)(O,{selected:i,onClick:r,children:[(0,I.jsxs)(l.kC,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:9,width:"100%",children:[(0,I.jsxs)(l.kC,{flexDirection:"row",alignItems:"center",gap:13.5,width:"40%",children:[(0,I.jsx)(l.qE,{userId:t.user.id,name:t.user.name,image:t.user.avatar,border:"none",borderRadius:"8px",padding:"0px",size:"30px"}),(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",children:(0,U.BD)(t.user.name)})]}),(0,I.jsxs)(l.kC,{flexDirection:"column",alignItems:"start",width:"15%",children:[(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",opacity:.5,children:"BET"}),(0,I.jsx)(l.Af,{color:"#FFFFFF",chipType:t.paidBalanceType,price:Number((0,S.q)(t.betAmount)).toFixed(2),fontWeight:600,fontSize:"14px"})]}),(0,I.jsxs)(l.kC,{flexDirection:"column",alignItems:"center",width:"25%",gap:3,children:[(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",opacity:.5,children:"MULTIPLIER"}),(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",children:t.multiplier.toFixed(2)})]}),(0,I.jsxs)(l.kC,{flexDirection:"column",alignItems:"end",children:[(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",opacity:.5,children:"PAYOUT"}),(0,I.jsx)(l.Af,{color:"#FFFFFF",chipType:t.paidBalanceType,price:Number((0,S.q)(t.profit)).toFixed(2),fontWeight:600,fontSize:"14px"})]})]}),(0,I.jsxs)(l.kC,{flexDirection:"row",justifyContent:"space-between",gap:9,width:"100%",children:[(0,I.jsxs)(l.kC,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"30%",children:[(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",opacity:.5,children:"GAME ID"}),(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",children:t.roundId})]}),(0,I.jsxs)(l.kC,{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"40%",children:[(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",opacity:.5,children:"DATE"}),(0,I.jsx)(l.xv,{fontSize:"14px",fontWeight:500,color:"textWhite",children:N()(t.time).format("MMM DD, hh:mm A")})]}),(0,I.jsx)(l.kC,{flexDirection:"row",justifyContent:"end",width:"10%",children:(0,I.jsx)(je,{onClick:a})})]})]})},ke=(0,r.memo)(ye),ve=[{label:"All Games",value:"All Games"}];function Ce(){const{name:e,role:t}=(0,v.CG)((e=>e.user)),i=(0,v.CG)((e=>e.dreamtower.history)),[a,n]=(0,r.useState)(ve),[o,s]=(0,r.useState)(ve[0]),[d,c]=(0,r.useState)(!1);(0,r.useEffect)((()=>{n(e?[ve[0],(0,_.S)("My Games",e)]:[ve[0]])}),[e]),(0,r.useEffect)((()=>{const e=a.find((e=>e.value===i.winner));e&&s(e)}),[i.winner,a]);const u=(0,r.useCallback)((e=>{const t=(0,_.S)(e);n((e=>[...e,t])),s(t)}),[]),x=(0,r.useCallback)((async e=>{c(!0);try{const{data:t}=await $.hi.get("/dreamtower/history",{params:{userName:o.value===ve[0].value?void 0:o.value,offset:e,count:10}}),r=t.history.filter((t=>-1===i.rounds.slice(0,e).findIndex((e=>e.roundId===t.roundId))));v.ZP.dispatch(C.JB([...i.rounds.slice(0,e),...r]))}catch{}c(!1)}),[i.rounds,o]),p=(0,r.useCallback)((async()=>{x(i.rounds.length)}),[x,i.rounds.length]);return(0,r.useEffect)((()=>{x(0),v.ZP.dispatch(C.KH(o.value))}),[o]),(0,I.jsxs)("div",{className:"container",children:[(0,I.jsxs)(l.kC,{justifyContent:"space-between",marginBottom:"10px",children:[(0,I.jsx)(l.xv,{color:"white",fontSize:"25px",fontWeight:500,children:"Game History"}),(0,I.jsx)(l.a7,{isSearchable:"user"!==t,onCreateOption:u,width:170,isDisabled:d,background:"#192637",hoverBackground:"#03060933",color:"#B2D1FF",options:a,onChange:e=>s(e),value:o})]}),i.rounds.length>0&&(0,I.jsx)(H,{children:(0,I.jsx)(q,{children:i.rounds.map((e=>(0,I.jsx)(ke,{selected:void 0!==i.review&&e.roundId===i.review.roundId,round:e,onClick:()=>(e=>{v.ZP.dispatch(C.j7(e))})(e),background:"linear-gradient(90deg, #182738 0%, #182738 100%)"},e.roundId)))})}),(0,I.jsx)(l.zx,{variant:"secondary",outlined:!0,scale:"sm",width:153,background:"linear-gradient(180deg, #070B10 0%, rgba(7, 11, 16, 0.3) 100%)",color:"#FFFFFF",borderColor:"chipSecondary",marginX:"auto",marginTop:20,onClick:d?null:p,children:d?(0,I.jsx)(G.Z,{size:20,color:"#fff"}):"SHOW MORE"})]})}var Fe=i(39254),Ae=i.n(Fe),Se=i(83589),Be=i(1970),ze=i(89563);function Te(e){let{target:t,left:i=!1,right:r=!1,color:a="#73218F",middleColor:n="#1A293D",borderColor:o="#e8caee",duration:s=0}=e;const l=`linear-gradient(90deg, ${a+(i?"a0":"00")} 0, ${n}00 50%, ${a+(r?"a0":"00")} 100%)`;t&&Se.ZP.to(t,{background:l,borderLeftColor:i?o:"transparent",borderRightColor:r?o:"transparent",duration:s})}function Pe(e){let{textTargets:t,rowTargets1:i,rowTargets2:r,rowTargets3:a,rowTargets4:n}=e;const o=Se.ZP.timeline();return t.forEach((e=>{e&&o.add(Se.ZP.set(e,{opacity:1}))})),i.forEach((e=>{e&&o.add(Se.ZP.set(e,{background:"#73218F00",borderLeftColor:"transparent",borderRightColor:"transparent"}))})),r.forEach((e=>{e&&o.add(Se.ZP.set(e,{background:"linear-gradient(90deg, #73218Fa0 0%, #1A293D00 50%, #73218Fa0 100%)",borderLeftColor:"#e8caee",borderRightColor:"#e8caee"}))})),a.forEach((e=>{e&&o.add(Se.ZP.set(e,{background:"linear-gradient(90deg, #8F2121a0 0%, #1A293D00 50%, #8F2121a0 100%)",borderLeftColor:"#e8caee",borderRightColor:"#e8caee"}))})),n.forEach((e=>{e&&o.add(Se.ZP.set(e,{background:"linear-gradient(90deg, #2F23B7a0 0%, #1A293D00 50%, #2F23B7a0 100%)",borderLeftColor:"#e8caee",borderRightColor:"#e8caee"}))})),o}function Ie(e){let{textTargets:t,rowTargets:i,duration:r=.2}=e;const a=Se.ZP.timeline();a.add(function(e){let{targets:t,repeat:i=1,duration:r=.2}=e;const a=t.length,n={value:1};return Se.ZP.timeline().fromTo(n,{value:-.499},{value:a-.501,roundProps:"value",ease:"none",duration:r*a,repeat:i,onUpdate:()=>{let e=0;for(;e<=a;e++){let i=!1,r=!1;e!==n.value&&e!==(n.value+2)%a||(i=!0),e!==a-n.value-1&&e!==a-(n.value+2)%a-1||(r=!0),Te({target:t[e],left:i,right:r})}}})}({targets:i,duration:r}));const n=Se.ZP.timeline({pause:!0});t.forEach(((e,t)=>{e&&n.add(function(e){let{target:t,delay:i=0,repeatDelay:r=.3}=e;return Se.ZP.timeline().fromTo(t,{opacity:.3},{opacity:1,yoyo:!0,repeat:-1,delay:i,duration:0,repeatDelay:r})}({target:e,delay:r*t,repeatDelay:r}),0)}));const o={value:.51},s=Se.ZP.timeline({onStart:()=>{n.progress(0).play()}});return s.add(n,0).add(a,0).add(Se.ZP.delayedCall(a.totalDuration(),(()=>{n.pause()})),0).fromTo(o,{value:.51},{value:2.49,roundProps:"value",repeat:1,duration:1,repeatDelay:.5,onUpdate:()=>{const e=1===o.value;t.forEach((t=>{t&&Se.ZP.set(t,{opacity:e?.3:1})})),i.forEach((t=>{t&&Te({target:t,left:!e,right:!e})}))}},">").add(Se.ZP.delayedCall(3,(()=>{s.progress(0)}))),s}const We=(0,d.default)(l.kC)`
  position: absolute;
  left: 20%;
  right: 20%;
  top: 25%;
  bottom: 64%;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  z-index: 20;
  background: rgba(75, 39, 150, 0.55);
  border: 2px solid #7428c0;
  backdrop-filter: blur(3.5px);
  box-shadow: rgb(0 0 0 / 19%) 0px 10px 20px, rgb(0 0 0 / 23%) 0px 6px 6px;
  border-radius: 10px;
`,De=e=>{let{multiplier:t,profit:i,chipType:r}=e;return(0,I.jsxs)(We,{children:[(0,I.jsxs)(l.Dr,{color:"#FFFFFF",fontWeight:700,textAlign:"center",fontSize:"30px",lineHeight:"36.31px",children:[t.toFixed(2),"x"]}),(0,I.jsx)(l.kC,{justifyContent:"space-around",width:"100%",children:(0,I.jsx)(l.Af,{color:"#FFFFFF",chipType:r,price:(0,S.q)(i).toFixed(2),fontWeight:600,fontSize:"20px",lineHeight:"24.2px"})})]})};function Me(e){let{dreamRef:t}=e;const i=(0,v.TL)(),a=(0,v.CG)((e=>e.user)),n=(0,v.CG)((e=>e.dreamtower.game)),o=(0,v.CG)((e=>e.meta.dreamtower)),[s,d]=(0,r.useState)(!1),{data:c}=(0,F.LW)({key:"dreamtower_max_win",route:"/dreamtower/max-win",method:"get"}),u=(0,r.useMemo)((()=>c||0),[c]),{towerPlay:x,towerStop:p}=(0,F.cT)(),h=(0,r.useCallback)((async()=>{if(""===a.name)return void M.Am.info("Please sign in.");if(n.betAmount>a.balance)return void M.Am.error("Insufficient funds");if(n.betAmount<o.minAmount&&n.betAmount>0||n.betAmount<0)return void M.Am.warning(`Minimum bet amount is ${Math.floor((0,S.q)(o.minAmount))} chip.`);if(n.betAmount>o.maxAmount)return void M.Am.warning(`Maximum bet amount is ${Math.floor((0,S.q)(o.maxAmount))} chips.`);i((0,Be.Fg)({type:-1,balanceType:a.betBalanceType,wagered:n.betAmount,usdAmount:n.betAmount}));const e={betAmount:n.betAmount,bets:[],difficulty:n.difficulty.level,paidBalanceType:a.betBalanceType};d(!0);try{let t=await $.hi.post("/dreamtower/bet",e);v.ZP.dispatch((0,C.mc)()),v.ZP.dispatch((0,C.Nf)(t.data))}catch(t){i((0,Be.Fg)({type:1,balanceType:e.paidBalanceType,usdAmount:e.betAmount,wagered:e.betAmount})),503===t.response.status?M.Am.error("This function is blocked by admin."):M.Am.error(t.response.data.message)}d(!1)}),[a.name,a.balance,a.betBalanceType,n.betAmount,n.difficulty.level,o.minAmount,o.maxAmount,i]),f=(0,r.useCallback)((async()=>{if(""!==a.name)if("playing"===n.status){d(!0);try{let e=await $.hi.post("/dreamtower/cashout",{roundId:n.roundId});const t=u>e.data.multiplier*n.betAmount?Math.floor(e.data.multiplier*n.betAmount):Math.floor(u);i((0,Be.Fg)({type:1,usdAmount:t,balanceType:e.data.paidBalanceType})),x.lastStar(),v.ZP.dispatch((0,C.Nf)(e.data))}catch(e){503===e.response.status?M.Am.error("This function is blocked by admin."):M.Am.error(e.response.data.message)}d(!1)}else M.Am.error("Can only cashout from currently playing round.");else M.Am.info("Please sign in.")}),[a.name,n.status,n.roundId,n.betAmount,x,i]),g=(0,r.useCallback)((async e=>{d(!0);try{const t=await $.hi.post("/dreamtower/raise",{roundId:n.roundId,bet:e,height:n.bets.length});if(i((0,C.Nf)(t.data)),i((0,C.OU)({status:t.data.status,bet:e})),"win"===t.data.status){const e=u>t.data.multiplier*n.betAmount?Math.floor(t.data.multiplier*n.betAmount):Math.floor(u);v.ZP.dispatch((0,Be.Fg)({type:1,usdAmount:e,balanceType:t.data.paidBalanceType}))}}catch(t){return void(503===t.response.status?M.Am.error("This function is blocked by admin."):M.Am.error(t.response.data.message))}d(!1)}),[i,n.betAmount,n.roundId,n.bets]);return(0,r.useEffect)((()=>{if(t){if("win"===n.status){const e=Se.ZP.utils.selector(t),i=Ie({textTargets:[e(".dreamtower_dreamtext"),e(".dreamtower_towertext")],rowTargets:[...e(".dreamtower_row")],duration:.15});let r;return x.lastStar&&(x.lastStar(),r=setTimeout((()=>{x.win&&x.win()}),3700)),()=>{i.kill(),p.lastStar(),p.win(),clearTimeout(r)}}{n.bets.length>0&&("loss"===n.status?x.break&&x.break():"playing"===n.status&&n.bets.length<n.height&&x.selectStar&&x.selectStar());const a=Se.ZP.utils.selector(t),o=[...a(".dreamtower_row")];var e=[],i=[],r=[];o.forEach(((t,a)=>{"playing"===n.status&&a===n.bets.length||"win"===n.status||"cashout"===n.status?i.push(t):"loss"===n.status&&a===n.bets.length-1?r.push(t):e.push(t)}));const s=Pe({textTargets:[a(".dreamtower_dreamtext"),a(".dreamtower_towertext")],rowTargets1:e,rowTargets2:i,rowTargets3:r,rowTargets4:[]});return()=>{s.kill()}}}}),[n.status,n.bets,x,p,n.height,t]),(0,I.jsxs)(I.Fragment,{children:[("win"===n.status||"cashout"===n.status)&&(0,I.jsx)(De,{multiplier:n.multiplier,profit:Math.floor(n.profit),chipType:a.betBalanceType}),(0,I.jsx)(l.kC,{py:"5px",flexDirection:"column-reverse",children:n.tower.map(((e,t)=>(0,I.jsx)(ze.Z,{value:e,isNext:"playing"===n.status&&t===n.bets.length,isHighlight:"loss"===n.status&&t===n.bets.length-1||"playing"===n.status&&t===n.bets.length||"win"===n.status||"cashout"===n.status,isClickable:"playing"===n.status&&t===n.bets.length,isUnderBroken:t<n.bets.length,selectedIndex:n.bets.length>t?n.bets[t]:void 0,nextMultiplier:n.nextMultiplier,blocksInRow:n.difficulty.blocksInRow,handleClickSquare:s?()=>{}:g},t)))}),(0,I.jsx)(l.xu,{px:"20px",children:s?(0,I.jsx)(Ze,{children:(0,I.jsx)(Ae(),{color:"#ffffff",loading:s,size:20})}):"playing"===n.status?(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(Ze,{onClick:s?void 0:f,disabled:0===n.bets.length,children:["Cashout",n.bets.length>0&&(0,I.jsxs)(I.Fragment,{children:["coupon"===a.betBalanceType?(0,I.jsx)(w.r,{}):(0,I.jsx)(l.cL,{}),u>n.multiplier*n.betAmount?(0,S.q)(Math.floor(n.multiplier*n.betAmount)).toFixed(2):(0,S.q)(Math.floor(u)).toFixed(2)]})]})}):(0,I.jsx)(Ze,{onClick:s?void 0:h,children:"Place Bet"})})]})}const Ze=(0,d.default)(l.zx)`
  width: 100%;
  margin-top: 5px;
  padding: 18px 0px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`;function Ee(e){let{dreamRef:t}=e;const i=(0,v.CG)((e=>e.user)),a=(0,v.CG)((e=>e.dreamtower.game)),n=(0,v.CG)((e=>e.dreamtower.auto)),o=(0,v.CG)((e=>e.meta.dreamtower)),s=(0,v.TL)(),[d,c]=(0,r.useState)(0),[u,x]=(0,r.useState)(0),{data:p}=(0,F.LW)({key:"dreamtower_max_win",route:"/dreamtower/max-win",method:"get"}),h=(0,r.useMemo)((()=>p||0),[p]),{towerPlay:f,towerStop:g}=(0,F.cT)(),m=(0,r.useRef)(null),[b,w]=(0,r.useState)(!1),j=(0,r.useCallback)((async e=>{if(0===n.betCount||void 0!==n.stopProfit&&n.accumulated>=n.stopProfit||void 0!==n.stopLoss&&n.accumulated<=-n.stopLoss)return;if(n.betAmount>i.balance)return void M.Am.error("Insufficient funds");if(a.betAmount<o.minAmount&&a.betAmount>0||a.betAmount<0)return void M.Am.warning(`Minimum bet amount is ${Math.floor((0,S.q)(o.minAmount))} chip.`);if(a.betAmount>o.maxAmount)return void M.Am.warning(`Maximum bet amount is ${Math.floor((0,S.q)(o.maxAmount))} chips.`);s((0,Be.Fg)({type:-1,usdAmount:n.betAmount,wagered:n.betAmount,balanceType:i.betBalanceType})),n.betCount&&n.betCount>0&&s((0,C.pX)(n.betCount-1));const t={betAmount:Math.floor(n.betAmount),bets:a.bets,difficulty:a.difficulty.level,paidBalanceType:i.betBalanceType};try{w(!0);let i=await $.hi.post("/dreamtower/bet",t);if(x(n.betAmount),w(!1),s((0,C.Nf)(i.data)),"loss"!==i.data.status){const r=h>i.data.multiplier*n.betAmount?Math.floor(i.data.multiplier*n.betAmount):Math.floor(h);s((0,Be.Fg)({type:1,usdAmount:r,balanceType:t.paidBalanceType})),s((0,C.GS)(n.accumulated+Math.floor((i.data.multiplier-1)*n.betAmount))),0===n.changeBetOnWin?s((0,C.op)(e)):n.changeBetOnWin&&s((0,C.op)(Math.floor(n.betAmount*(100+n.changeBetOnWin)/100)))}else s((0,C.GS)(n.accumulated-n.betAmount)),0===n.changeBetOnLoss?s((0,C.op)(e)):n.changeBetOnLoss&&s((0,C.op)(Math.floor(n.betAmount*(100+n.changeBetOnLoss)/100)))}catch(r){return s((0,Be.Fg)({type:1,usdAmount:t.betAmount,wagered:t.betAmount,balanceType:t.paidBalanceType})),503===r.response.status?M.Am.error("This function is blocked by admin."):M.Am.error(r.response.data.message),w(!1),void s((0,C.QB)(""))}}),[n,i.balance,i.betBalanceType,a.betAmount,a.bets,a.difficulty.level,o.minAmount,o.maxAmount,s]),y=(0,r.useCallback)((async()=>{b||(""!==i.name?(c(a.betAmount),s((0,C.QB)("running")),j(a.betAmount)):M.Am.info("Please sign in."))}),[s,j,b,i.name,a.betAmount]),k=(0,r.useCallback)((async()=>{b||s((0,C.QB)(""))}),[s,b]);(0,r.useEffect)((()=>{let e;return m&&Se.ZP.set(m.current,{x:"-100%"}),"running"===n.status&&m&&a.roundId&&(e=Se.ZP.to(m.current,{x:0,duration:"win"===a.status?6:3,ease:"none",onComplete:()=>{j(d)}})),()=>{e&&e.kill()}}),[a.roundId,a.status,n.status]);const A=(0,r.useMemo)((()=>{if(""===a.status)return-1;for(var e=0;e<a.tower.length;e++)if(0===a.tower[e][a.bets[e]])return e;return a.tower.length-1}),[a.tower,a.bets,a.status]);return(0,r.useEffect)((()=>{if(t){if("win"===a.status){const e=Se.ZP.utils.selector(t),i=Ie({textTargets:[e(".dreamtower_dreamtext"),e(".dreamtower_towertext")],rowTargets:[...e(".dreamtower_row")],duration:.15});return f.win&&f.win(),()=>{i.kill(),g.win()}}{const s=Se.ZP.utils.selector(t),l=[...s(".dreamtower_row")];var e=[],i=[],r=[],o=[];l.forEach(((t,s)=>{""===n.status&&s===a.bets.length?o.push(t):"running"!==n.status||"win"!==a.status&&"cashout"!==a.status?"loss"===a.status&&s===A?r.push(t):e.push(t):i.push(t)}));const d=Pe({textTargets:[s(".dreamtower_dreamtext"),s(".dreamtower_towertext")],rowTargets1:e,rowTargets2:i,rowTargets3:r,rowTargets4:o});return()=>{d.kill()}}}}),[a.status,a.bets,A,f,g,n.status,t]),(0,I.jsxs)(I.Fragment,{children:[("win"===a.status||"cashout"===a.status)&&(0,I.jsx)(De,{multiplier:a.multiplier,profit:h>a.multiplier*u?Math.floor(a.multiplier*u):Math.floor(h),chipType:i.betBalanceType}),(0,I.jsx)(l.kC,{py:"5px",flexDirection:"column-reverse",children:a.tower.map(((e,t)=>(0,I.jsx)(ze.Z,{roundId:a.roundId,value:e,towerMode:"auto",isNext:""===n.status&&t===a.bets.length,isHighlight:"loss"===a.status&&t===A||""===n.status&&t===a.bets.length||"running"===n.status&&("win"===a.status||"cashout"===a.status),isClickable:""===n.status&&t<=a.bets.length,isUnderBroken:t<=A,selectedIndex:a.bets.length>t?a.bets[t]:void 0,nextMultiplier:a.nextMultiplier,blocksInRow:a.difficulty.blocksInRow,handleClickSquare:e=>{(async(e,t)=>{s((0,C.g2)({height:e,index:t}))})(t,e)}},t)))}),(0,I.jsx)(l.xu,{px:"20px",children:(0,I.jsxs)(Re,{onClick:b?void 0:"running"===n.status?k:a.bets.length>0?y:null,style:{position:"relative"},overflow:"hidden",disabled:0===a.bets.length,children:[(0,I.jsx)("div",{style:{position:"absolute",width:"100%",height:"100%",top:0,background:"#00000040"},ref:m}),b?(0,I.jsx)(G.Z,{color:"#fff",size:20}):(0,I.jsx)(I.Fragment,{children:"running"===n.status?"Stop Auto Bet":a.bets.length>0?"Start Auto Bet":"Choose Your Path"})]})})]})}const Re=(0,d.default)(l.zx)`
  width: 100%;
  margin-top: 5px;
  padding: 18px 0px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`;var Ge=i(13429);const $e=(0,d.default)(l.zx)`
  width: 100%;
  margin-top: 5px;
  padding: 18px 0px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  color: black;
`,_e=e=>{let{goBackHandler:t,dreamRef:i}=e;const a=(0,v.CG)((e=>e.dreamtower.history.review)),n=(0,r.useMemo)((()=>{if(""===a.status)return-1;for(var e=0;e<a.tower.length;e++)if(0===a.tower[e][a.bets[e]])return e;return a.tower.length-1}),[a.tower,a.bets,a.status]);return(0,r.useEffect)((()=>{if(!i)return;const e=Se.ZP.utils.selector(i),t=[...e(".dreamtower_row")];var r=[],o=[],s=[];t.forEach(((e,t)=>{"win"===a.status||"cashout"===a.status?o.push(e):"loss"===a.status&&t===n?s.push(e):r.push(e)}));const l=Pe({textTargets:[e(".dreamtower_dreamtext"),e(".dreamtower_towertext")],rowTargets1:r,rowTargets2:o,rowTargets3:s,rowTargets4:[]});return()=>{l.kill()}}),[a.status,a.bets,n,i]),(0,I.jsxs)(I.Fragment,{children:[("win"===a.status||"cashout"===a.status)&&(0,I.jsx)(De,{multiplier:a.multiplier,profit:a.profit,chipType:a.paidBalanceType}),(0,I.jsx)(l.kC,{py:"5px",flexDirection:"column-reverse",children:a.tower.map(((e,t)=>(0,I.jsx)(ze.Z,{value:e,roundId:a.roundId,isNext:!1,isHighlight:"loss"===a.status&&t===a.bets.length-1||"playing"===a.status&&t===a.bets.length||"win"===a.status||"cashout"===a.status,isClickable:!1,isUnderBroken:t<=n,selectedIndex:a.bets.length>t?a.bets[t]:void 0,nextMultiplier:0,blocksInRow:a.difficulty.blocksInRow,handleClickSquare:()=>{}},t)))}),(0,I.jsx)(l.xu,{px:"20px",children:(0,I.jsx)($e,{onClick:t,children:"Back to Current Game"})})]})};var Oe=i(88894);function He(){const e=(0,v.TL)(),{game:t,auto:i}=(0,v.CG)((e=>e.dreamtower)),d=(0,v.CG)((e=>e.meta.dreamtower)),{isHoliday:u,sound:p,balances:b}=(0,v.CG)((e=>e.user)),{isMobile:w}=(0,F.SL)(),[j,y]=(0,r.useState)(!1),[k,A]=(0,r.useState)(0),[B,z]=(0,r.useState)(0),[T,P]=(0,r.useState)("calc(100vh - 65px)"),[D,M]=(0,r.useState)(1),Z=(0,r.useRef)(null),R=(0,r.useMemo)((()=>"playing"===t.status||"running"===i.status),[i.status,t.status]);(0,r.useEffect)((()=>{(0,C.QB)("");(async()=>{y(!1),await(0,Ge.GC)(),y(!0)})()}),[]),(0,r.useEffect)((()=>{b.coupon.balance>=(0,S.o)(.01)?e((0,Be.UC)("coupon")):e((0,Be.UC)("chip"))}),[b,e]);const G=(0,r.useCallback)((()=>{const e=window.innerHeight;P(w?"auto":e-65+"px"),M(w?1:(e-65-30)/840)}),[w]);(0,r.useEffect)((()=>(G(),window.addEventListener("resize",G),()=>{window.removeEventListener("resize",G)})),[G]);const $=(0,r.useCallback)(((t,i)=>{t!==i&&(A(t),z(i),e((0,C.mc)()),e((0,C.lf)(d.difficulties[0])))}),[e,d.difficulties]),_=(0,r.useCallback)((()=>{A(B),z(k)}),[k,B]);return j?(0,I.jsx)(I.Fragment,{children:(0,I.jsxs)(m,{padding:["30px 12px","30px 12px","30px 12px","30px 25px"],position:"relative",children:["win"===t.status&&(0,I.jsx)(a.j,{style:{position:"absolute",width:"100%",height:"100%"},options:{rocketsPoint:{min:0,max:100},hue:{min:0,max:360},delay:{min:35,max:90},decay:{min:.02,max:.03},brightness:{min:50,max:80},lineStyle:"round",acceleration:1.05,friction:.97,gravity:1.5,particles:50,trace:3,flickering:55,opacity:.2,explosion:6,intensity:33,traceSpeed:4,sound:{enabled:p,volume:{min:60,max:90},files:[n,o,s]}}}),(0,I.jsxs)(x,{children:[(0,I.jsxs)(l.kC,{flexWrap:"wrap",gap:30,children:[(0,I.jsx)(l.xv,{fontSize:23,fontWeight:600,color:"#768BAD",children:"DREAM TOWER"}),(0,I.jsx)(l.kC,{gap:30,children:(0,I.jsxs)(l.zx,{borderLeft:"2px solid #4F617B",borderRadius:"0px",background:"#070C12",fontSize:14,fontWeight:500,color:"#4F617B",p:"8px 10px",nonClickable:!0,children:[(0,I.jsx)(l.a,{size:16}),"Fair Game"]})})]}),(0,I.jsx)(l.xu,{mt:"40px",children:(0,I.jsxs)(f,{onSelect:$,selectedIndex:k,children:[(0,I.jsx)(c.td,{children:(0,I.jsxs)(l.kC,{children:[(0,I.jsxs)(c.OK,{disabled:R,children:["MANUAL ",(0,I.jsx)("b",{})]}),(0,I.jsxs)(c.OK,{disabled:R,children:["AUTOMATIC ",(0,I.jsx)("b",{})]}),(0,I.jsxs)(c.OK,{disabled:R,children:["GAME HISTORY ",(0,I.jsx)("b",{})]})]})}),(0,I.jsx)(g,{children:(0,I.jsx)(W,{})}),(0,I.jsx)(g,{children:(0,I.jsx)(E,{})}),(0,I.jsx)(g,{children:(0,I.jsx)(Ce,{})})]})})]}),(0,I.jsx)(l.xu,{mx:"auto",height:T,children:(0,I.jsxs)(h,{ref:Z,isHoliday:u,scale:D,children:[(0,I.jsx)(Oe.Z,{}),0===k&&(0,I.jsx)(Me,{dreamRef:Z}),1===k&&(0,I.jsx)(Ee,{dreamRef:Z}),2===k&&(0,I.jsx)(_e,{goBackHandler:_,dreamRef:Z})]})})]})}):(0,I.jsx)(l.L7,{})}},61761:(e,t,i)=>{i.d(t,{S:()=>r});const r=(e,t)=>({label:e,value:null!==t&&void 0!==t?t:e})},52986:(e,t,i)=>{e.exports=i.p+"static/media/tower.4a32a8cede9fc3ccb8fa.png"}}]);