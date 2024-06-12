"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[3],{30697:(e,t,n)=>{n.d(t,{Z:()=>l,r:()=>d});var r,o,a=n(47313);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function s(e,t){let{title:n,titleId:s,...d}=e;return a.createElement("svg",i({width:18,height:18,viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":s},d),n?a.createElement("title",{id:s},n):null,r||(r=a.createElement("path",{d:"M12.9304 12.9307V15.4827C12.9301 15.9473 12.7454 16.3928 12.417 16.7213C12.0885 17.0499 11.6431 17.2347 11.1786 17.2351H2.75368C2.28879 17.2351 1.84293 17.0505 1.51409 16.7219C1.18525 16.3933 1.00034 15.9476 1 15.4827V7.05783C1.00024 6.59307 1.18496 6.14741 1.51358 5.81876C1.84219 5.49011 2.28783 5.30534 2.75259 5.30505H5.24336",stroke:"#8192AA",strokeWidth:1.34783,strokeMiterlimit:10})),o||(o=a.createElement("path",{d:"M15.4217 1H6.99625C6.02832 1 5.24365 1.78466 5.24365 2.75259V11.178C5.24365 12.146 6.02832 12.9306 6.99625 12.9306H15.4217C16.3896 12.9306 17.1743 12.146 17.1743 11.178V2.75259C17.1743 1.78466 16.3896 1 15.4217 1Z",stroke:"#8192AA",strokeWidth:1.34783,strokeMiterlimit:10})))}const d=a.forwardRef(s),l=n.p+"static/media/copy.174eb3114fb961ef231759097bd0fcae.svg"},37627:(e,t,n)=>{n.d(t,{F:()=>r,c:()=>o});const r=new Array(9).fill(-1).map((()=>new Array(4).fill(-1))),o={roundId:0,user:{id:0,name:"",avatar:"",count:0},difficulty:{level:"Easy",blocksInRow:4,starsInRow:3},status:"",time:Date.now(),tower:r,multiplier:0,betAmount:0,bets:[],expired:!0,clientSeed:"",serverSeed:"",serverSeedHash:"",nonce:0,seedNonce:0,profit:0,paidBalanceType:"chip"}},88894:(e,t,n)=>{n.d(t,{Z:()=>s});n(47313);var r=n(25235),o=n(30334),a=n(6262),i=n(46417);function s(){const{isHoliday:e}=(0,o.CG)((e=>e.user));return(0,i.jsxs)("div",{style:{position:"relative",paddingTop:"10px"},children:[e&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.gq,{position:"absolute",size:60,top:-12,left:53}),(0,i.jsx)(a.NB,{position:"absolute",size:150,top:-15,right:51})]}),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.gq,{position:"absolute",size:60,bottom:-9,left:-7}),(0,i.jsx)(a.Rj,{position:"absolute",size:70,bottom:13,left:-12}),(0,i.jsx)(a.OF,{position:"absolute",size:60,bottom:25,right:-7}),(0,i.jsx)(a.KS,{position:"absolute",size:70,bottom:"1px",right:-10})]})]}),(0,i.jsx)(d,{className:"dreamtower_dreamtext",children:"DREAM"}),(0,i.jsx)(l,{className:"dreamtower_towertext",children:"Tower"})]})}const d=(0,r.default)(a.xv)`
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
`,l=(0,r.default)(a.xv)`
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
`},90950:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(25235),o=n(6262),a=n(52986),i=n(88894),s=n(89563),d=n(46417);function l(e){let{tower:t,blocksInRow:n=4}=e;return(0,d.jsxs)(c,{children:[(0,d.jsx)(i.Z,{}),(0,d.jsx)(o.kC,{py:"10px",flexDirection:"column-reverse",children:t.map(((e,t)=>(0,d.jsx)(s.Z,{value:e,isNext:!1,isHighlight:!1,isClickable:!1,isUnderBroken:!1,selectedIndex:void 0,nextMultiplier:-1,blocksInRow:n,handleClickSquare:()=>{}},t)))})]})}const c=(0,r.default)(o.xu)`
  width: 320px;
  height: 780px;
  background-image: url(${a});
  background-size: cover;
  position: relative;
`},89563:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(6262),o=n(47313),a=n(25235),i=n(30334),s=n(46417);const d=(0,a.default)(r.zx)`
  height: 60px;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.25);
  /* background: #1c2c45; */
  gap: 4px;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;

  ${e=>{let{blocks:t}=e;return a.css`
      width: ${240/t}px;
    `}}

  ${e=>{let{disabled:t}=e;if(t)return a.css`
        opacity: 1;
        cursor: not-allowed;
        pointer-events: none;
      `}}

  ${e=>{let{isNext:t,towerMode:n}=e;if(t)return"manual"===n?"box-shadow: 0px 0px 20px rgba(219, 0, 255, 0.25); background: rgba(184, 0, 154, 0.25); border: 1px solid #CB72E9;":"box-shadow: 0px 0px 20px rgba(0, 71, 255, 0.25); background: rgba(3, 13, 108, 0.25); border: 1px solid #4154FF;"}}
    
  ${e=>{let{isStar:t,isSelected:n,isInPath:r}=e;return n?t?"border: 1px solid #FBD92B; box-shadow: inset 0px 0px 20px rgba(255, 199, 0, 0.25);":"border: 1px solid #D70606;":r?"box-shadow: 0px 0px 20px rgba(0, 71, 255, 0.25); background: rgba(3, 13, 108, 0.25); border: 1px solid #4154FF;":void 0}}
`,l=e=>{let{roundId:t=0,isNext:n=!1,towerMode:a="manual",isClickable:l,isStar:c,isSelected:u,isInPath:p,nextMultiplier:h,blocks:x,handleClick:f}=e;const m=(0,o.useMemo)((()=>"auto"===a),[a]),b=(0,i.CG)((e=>e.user.isHoliday));return(0,s.jsxs)(d,{roundId:t,isNext:n,isStar:c,isSelected:u,isInPath:p,disabled:!l,blocks:x,towerMode:a,onClick:l?f:null,children:[n&&(0,s.jsxs)(s.Fragment,{children:[h.toFixed(2),"x"]}),c&&u&&(b?(0,s.jsx)(r.Dk,{size:68,isAuto:m,roundId:t}):(0,s.jsx)(r.r7,{isAuto:m,roundId:t})),c&&!u&&(b?(0,s.jsx)(r.Dk,{size:68,isAuto:m,isSelected:u,roundId:t,opacity:.15}):(0,s.jsx)(r.r7,{isAuto:m,isSelected:u,roundId:t,opacity:.15})),!c&&u&&(0,s.jsx)(r.pk,{})]})},c=(0,a.default)(r.kC)`
  justify-content: space-between;
  padding: 5px 20px;
  border-width: 0px 2px 0px 2px;
  /* background: #e8caee; */
  /* box-shadow: 0px 0px 7px 3px rgba(255, 18, 246, 0.25); */

  ${e=>{let{highlight:t}=e;return t&&"\n        border-color: #e8caee;\n        border-style: solid;\n      "}}
`,u=e=>{let{roundId:t=0,value:n,isNext:r,towerMode:o="manual",isHighlight:a,isClickable:i,selectedIndex:d,isUnderBroken:u,nextMultiplier:p,blocksInRow:h,handleClickSquare:x}=e;return(0,s.jsx)(c,{className:"dreamtower_row",highlight:a,children:n.map(((e,a)=>(0,s.jsx)(l,{roundId:t,isNext:r,isClickable:i,isStar:1===n[a],isInPath:d===a,isSelected:u&&d===a,towerMode:o,nextMultiplier:p,blocks:h,handleClick:()=>x(a)},a)))})}},96003:(e,t,n)=>{n.r(t),n.d(t,{default:()=>de});var r=n(47313),o=n(97890),a=n(35169),i=n(6262),s=n(54280),d=n(90383),l=n(46417);const c=()=>(0,l.jsx)(i.kC,{flexDirection:"column",gap:54,children:(0,l.jsxs)(i.kC,{flexDirection:"column",gap:20,children:[(0,l.jsx)(i.xv,{fontSize:"18px",lineHeight:"22px",fontWeight:600,color:"white",children:"PROVABLY FAIR"}),(0,l.jsxs)(i.xv,{fontSize:"16px",lineHeight:"21px",color:"#96A8C2",children:[(0,l.jsx)("p",{children:"Whenever random number generation (RNG) is required, the DUEL platform uses RANDOM.ORG to generate the random numbers in a process that is transparent and provably fair."}),(0,l.jsxs)("p",{children:["Random.org offers true random values to anyone through their API. Users are issued tickets and use the ticket to generate random numbers or strings. Anyone can audit and verify the status of a ticket as they are always discoverable here. This"," ",(0,l.jsx)(d.Fg,{href:"https://random.org/",rel:"noreferrer",target:"_blank",children:"random.org"})," ","feature allows us to prove the fairness of the game results."]}),(0,l.jsx)("p",{children:"When a game is created on the DUEL platform, we issue a random.org ticket through the random.org API. We then generate the random values corresponding with that ticket when the game has ended. At no point can DUEL control the generated random value. The generated random value can only be generated by the ticket, which allows this process to obtain true random status."}),(0,l.jsxs)("p",{children:["With this system, anyone is able to verify:",(0,l.jsx)("br",{}),"1. Whether the ticket was used to generate random values after the game ends. ",(0,l.jsx)("br",{}),"2. The random value generated by the ticket. ",(0,l.jsx)("br",{}),"3. Whether the result of the game matches with the result calculated by the random value and provided code snippet. ",(0,l.jsx)("br",{})]}),(0,l.jsxs)("p",{children:["For example,"," ",(0,l.jsx)(d.Fg,{href:"https://api.random.org/tickets/form?ticket=21349c0c5472cb80",rel:"noreferrer",target:"_blank",children:"here"})," ","is an example of a ticket which has not been used yet. ",(0,l.jsx)("br",{}),"And"," ",(0,l.jsx)(d.Fg,{href:"https://api.random.org/tickets/form?ticket=5c8166391c37865e",rel:"noreferrer",target:"_blank",children:"here"})," ","is the example of a used ticket, which generated the random string \u201cazIEfVgM`9\u201d"]})]})]})}),u=r.memo(c);var p=n(25235),h=n(63709),x=n(93605),f=n(92229),m=n.n(f),b=n(30697),g=n(30334);var w=n(37627);function v(e,t){let n="[\n";for(let r=0;r<e.length;r++){if(n+=" ".repeat(2*t),Array.isArray(e[r]))n+=v(e[r],t+1);else if("object"===typeof e[r])n+=y(e[r],t+1);else if("string"===typeof e[r])n+=`"${e[r]}"`;else{if("number"!==typeof e[r])return;n+=e[r].toString()}r!==e.length-1&&(n+=","),n+="\n"}return n+=" ".repeat(2*t-2)+"]",n}function y(e,t){let n="{\n";const r=Object.keys(e);for(let o=0;o<r.length;o++)n+=" ".repeat(2*t)+`"${r[o]}" : `,Array.isArray(e[r[o]])?n+=v(e[r[o]],t+1):"object"===typeof e[r[o]]?n+=y(e[r[o]],t+1):"string"===typeof e[r[o]]?n+=`"${e[r[o]]}"`:"number"===typeof e[r[o]]&&(n+=e[r[o]].toString()),o!==r.length-1&&(n+=","),n+="\n";return n+=" ".repeat(2*t-2)+"}",n}var j=n(52422);async function k(e,t,n,r){const o=Math.floor(r/32),a=r-32*o,i=e+":"+t+":"+n.toString()+":"+o.toString(),s=(new TextEncoder).encode(i),d=await crypto.subtle.digest("SHA-256",s);return Array.from(new Uint8Array(d)).slice(a,a+4)}function S(e,t,n){for(var r=[],o=0;o<e;o++)r.push(o);for(o=e-1;o>0;o--){const e=r[o];r[o]=r[n[o]],r[n[o]]=e}return r.slice(0,t)}async function A(e,t){e.sort(((e,t)=>function(e,t){var n,r,o,a;return(null!==(n=e.percent)&&void 0!==n?n:0)<(null!==(r=t.percent)&&void 0!==r?r:0)||(null!==(o=e.percent)&&void 0!==o?o:0)===(null!==(a=t.percent)&&void 0!==a?a:0)&&e.id>t.id?-1:1}(e,t)));for(var n=[],r=0,o=0;o<e.length;o++){var a,i;n[o]=null!==(a=e[o].percent)&&void 0!==a?a:0,r+=null!==(i=e[o].percent)&&void 0!==i?i:0}const s=R(n);r/=s;for(let c=0;c<n.length;c++)n[c]/=s;for(var d=await async function(e,t){const n=(new TextEncoder).encode(e),r=await crypto.subtle.digest("SHA-256",n),o=Array.from(new Uint8Array(r)).map((e=>("00"+e.toString(16)).slice(-2))).join("");return new j.Z("0x"+o.slice(0,16)).mod(t).toNumber()}(t,r),l=0;d>=n[l];)d-=n[l],l++;return l===n.length&&l--,{outCome:d,winner:e[l]}}async function C(e,t){var n=await async function(e,t){const n=(new TextEncoder).encode(e+t),r=await crypto.subtle.digest("SHA-256",n),o=Array.from(new Uint8Array(r)).map((e=>("00"+e.toString(16)).slice(-2))).join("");return new j.Z("0x"+o.slice(0,13))}(e,t),r=new j.Z(20);if(0===n.mod(r).toNumber())return 1;var o=n,a=new j.Z(2**52);return Math.floor(a.multipliedBy(100).minus(o).dividedBy(a.minus(o)).toNumber())/100}function I(e,t){return 0===e?t:I(t%e,e)}function R(e){for(var t=e[0],n=1;n<e.length;n++)if(1===(t=I(e[n],t)))return 1;return t}const B=(e,t)=>{if("coinflip"!==e)return'{\n  "randomString": "abcdefghijklmnopq",\n  "betAmount": 4827,\n  "players": [\n    {\n      "id": 1,\n      "name": "Anonymous1",\n      "color": "Green"\n    },\n    {\n      "id": 2,\n      "name": "Anonymous2",\n      "color": "Purple"\n    }\n  ]\n}\n';const{signedString:n,headsUser:r,tailsUser:o,winnerId:a,amount:i}=t,s=[{id:r.id,name:r.name,color:"Green"},{id:o.id,name:o.name,color:"Purple"}];return y({randomString:n,betAmount:i,result:a===r.id?"Green":"Purple",players:s},1)},D=(e,t)=>{if("jackpot"!==e)return'{\n  "randomString" : "fi(*i27kd&*ls",\n  "players" : [\n    {\n      "id" : 1,\n      "name" : "Anonymous1",\n      "usdAmount" : 11395,\n      "nftAmount" : 0\n    },\n    {\n      "id" : 3,\n      "name" : "Anonymous2",\n      "usdAmount" : 442,\n      "nftAmount" : 4352\n    },\n    {\n      "id" : 2,\n      "name" : "Anonymous3",\n      "usdAmount" : 1212,\n      "nftAmount" : 322\n    }\n  ]\n}\n';const{signedString:n,players:r}=t;return y({randomString:n,players:r.map((e=>({id:e.id,name:e.name,usdAmount:e.usdAmount,nftAmount:e.nftAmount})))},1)},E=(e,t)=>{if("dreamtower"!==e)return'{\n  "clientSeed" : "4kOhs37*(*84",\n  "serverSeed" : "sio298)ksjs(*724",\n  "nonce" : 38,\n  "difficulty": "easy"\n}\n';const{clientSeed:n,serverSeed:r,nonce:o,difficulty:a}=t;return y({clientSeed:n,serverSeed:null!==r&&void 0!==r?r:"",nonce:o,difficulty:a.level},1)},H=(e,t)=>{if("crash"!==e)return'{\n  "serverSeed" : "5c240332b66182ef00a77e00e66d0080b2375c17d671beb2d34d43ba73339278",\n  "clientSeed" : "Bryw516EWrm7tnDJ3etvnYeSGNkeFYaVG7gKVoTQytCs"\n}';const{clientSeed:n,serverSeed:r}=t;return y({serverSeed:r,clientSeed:n},1)},z={easy:{blocksInRow:4,starsInRow:3},medium:{blocksInRow:3,starsInRow:2},hard:{blocksInRow:2,starsInRow:1},expert:{blocksInRow:3,starsInRow:1},master:{blocksInRow:4,starsInRow:1}},N=async e=>{const{clientSeed:t,serverSeed:n,nonce:r,difficulty:o}=e;if(!z[o.toLowerCase()])return{towerData:{tower:w.F,blocksInRow:4},result:"Invalid Input"};const{blocksInRow:a,starsInRow:i}=z[o.toLowerCase()],s=await async function(e,t,n,r,o,a){for(var i=[],s=0,d=0;d<a;d++){var l=[];const a=await k(e,t,n,s);for(var c=1;c<=r;c++){const e=a[c-1]*c/256;l.push(Math.floor(e))}i.push(S(r,o,l)),s+=4}return i}(n,t,r,a,i,9);let d=new Array(9).fill(-1).map((()=>new Array(a).fill(0))),l="[\n";for(let c=s.length-1;c>=0;c--){let e=" ".repeat(2)+"[";for(let t=0;t<s[c].length;t++)d[s.length-c-1][s[c][t]]=1,e+=s[c][t],t!==s[c].length-1&&(e+=", ");e+="]",0!==c&&(e+=","),e+="\n",l+=e}return l+="]",{towerData:{tower:d,blocksInRow:a},result:l}};var T=n(90950);const F=[{label:"Coin Flip",value:"coinflip"},{label:"Jackpot",value:"jackpot"},{label:"Dream Tower",value:"dreamtower"},{label:"Crash",value:"crash"}],O={control:e=>({...e,padding:"10px 20px",background:"#03060999",border:0,borderRadius:11,cursor:"pointer",boxShadow:"none",color:"white",maxWidth:400,"&:hover":{background:"#030609cc"}}),option:e=>({...e,background:"#030609",color:"white",padding:"15px 25px 12px",cursor:"pointer","&:hover":{background:"#080a0f"}}),input:e=>({...e}),singleValue:e=>({...e,color:"white"}),indicatorSeparator:()=>({display:"none"}),dropdownIndicator:(e,t)=>({...e,color:"white",transition:"0.5s",transform:t.selectProps.menuIsOpen?"scaleY(-1)":"scaleY(1)","&:hover":{color:"white"}}),menu:e=>({...e,background:"transparent",boxShadow:"none",maxWidth:400,marginTop:"5px"}),menuList:e=>({...e,background:"#030609",borderRadius:11,transition:"0.5s",maxWidth:400,padding:0})},M=e=>{let{gameType:t,gameData:n}=e;const o=(0,g.CG)((e=>e.user.config.crashClientSeed),h.wU),a=(0,r.useRef)(null),s=(0,r.useRef)(null),d=(0,r.useRef)(null),[c,u]=(0,r.useState)(""),[p,f]=(0,r.useState)(""),[b,v]=(0,r.useState)((()=>{let e=0;return"jackpot"===t?e=1:"dreamtower"===t?e=2:"crash"===t&&(e=3),F[e]})),[j,k]=(0,r.useState)({tower:w.F,blocksInRow:4}),S=(0,r.useMemo)((()=>{switch(b.value){case"coinflip":return'candidates.sort((a: Candidate, b: Candidate) => {\n  return compareByPercentAndId(a, b);\n});\nconst msgBuffer = new TextEncoder().encode(randomString);\n\nconst hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);\n\nconst hashArray = Array.from(new Uint8Array(hashBuffer));\n\nconst hashHex = hashArray\n  .map((b) => ("00" + b.toString(16)).slice(-2))\n  .join("");\n\nvar bn = new BigNumber("0x" + hashHex.slice(-16));\nvar bd = new BigNumber(2 ** 64 - 1);\nvar outCome = bn.dividedBy(bd).toNumber();\n\nvar winnerIndex = 0;\nwhile (outCome > candidates[winnerIndex].percent) {\n  outCome -= candidates[winnerIndex].percent;\n  winnerIndex++;\n}\n\nconsole.log();\n';case"jackpot":return'\nimport BigNumber from "bignumber.js";\n\ninterface Candidate {\n  id: number;\n  name: string;\n  usdAmount: number;\n  nftAmount: number;\n}\n\nfunction compare(a: Candidate, b: Candidate) {\n  return a.usdAmount + a.nftAmount > b.usdAmount + b.nftAmount ? -1 : 1;\n}\n\nasync function verifyFairness(candidates: Candidate[], randomString: string) {\n  // Sort candidates by their bet amounts.\n  candidates.sort((a: Candidate, b: Candidate) => {\n    return compare(a, b);\n  });\n\n  // Calculate \'outCome\' from \'randomString\'\n  const msgBuffer = new TextEncoder().encode(randomString);\n  const hashBuffer = await crypto.subtle.digest("SHA-256", msgBuffer);\n  const hashArray = Array.from(new Uint8Array(hashBuffer));\n  const hashHex = hashArray\n    .map((b) => ("00" + b.toString(16)).slice(-2))\n    .join("");\n  var bn = new BigNumber("0x" + hashHex.slice(0, 16));\n  var bd = new BigNumber(2 ** 64 - 1);\n  var outCome = bn.dividedBy(bd).toNumber();\n  console.log("Outcome = ", outCome);\n\n  // Calculate total amount of candidates betted\n  var totalBetAmount = 0;\n  candidates.forEach((candidate) => {\n    totalBetAmount += candidate.usdAmount + candidate.nftAmount;\n  });\n\n  // Determine winner with \'outCome\'\n  var winnerIndex = 0;\n  while (\n    outCome >\n    (candidates[winnerIndex].usdAmount + candidates[winnerIndex].nftAmount) /\n      totalBetAmount\n  ) {\n    outCome -=\n      (candidates[winnerIndex].usdAmount + candidates[winnerIndex].nftAmount) /\n      totalBetAmount;\n    winnerIndex++;\n  }\n  console.log("Winner : ", candidates[winnerIndex]);\n}\n';case"dreamtower":return"async function byteGenerator(\n  serverSeed: string,\n  clientSeed: string,\n  nonce: number,\n  cursor: number\n) {\n  const currentRound = Math.floor(cursor / 32);\n  const currentRoundCursor = cursor - currentRound * 32;\n  const str = serverSeed + ':' + clientSeed + ':' + nonce.toString() + ':' + currentRound.toString();\n  const msgBuffer = new TextEncoder().encode(str);\n  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);\n  const hashArray = Array.from(new Uint8Array(hashBuffer));\n  return hashArray.slice(currentRoundCursor, currentRoundCursor + 4);\n}\n\nfunction generateRow(blocksInRow: number, starsInRow: number, shuffle: number[]) {\n  var arr = [];\n  for (var i = 0; i < blocksInRow; i++) {\n    arr.push(i);\n  }\n  for (i = blocksInRow - 1; i > 0; i--) {\n    const temp: number = arr[i];\n    arr[i] = arr[shuffle[i]];\n    arr[shuffle[i]] = temp;\n  }\n  return arr.slice(0, starsInRow);\n}\n\nasync function generateTower(\n  serverSeed: string,\n  clientSeed: string,\n  nonce: number,\n  blocksInRow: number,\n  starsInRow: number,\n  count: number\n) {\n  var tower = [];\n  var cursor = 0;\n  for (var i = 0; i < count; i++) {\n    var shuffle = [];\n    for (var j = 0; j < blocksInRow; j++) {\n      const bytes = await byteGenerator(serverSeed, clientSeed, nonce, cursor);\n      const hashHex = bytes.map(b => ('00' + b.toString(16)).slice(-2)).join('');\n      const rn = new BigNumber('0x' + hashHex);\n      const bd = new BigNumber(2 ** 32);\n      const result = rn.dividedBy(bd).toNumber() * (j + 1);\n      shuffle.push(Math.floor(result));\n      cursor += 4;\n    }\n    tower.push(generateRow(blocksInRow, starsInRow, shuffle));\n  }\n  console.log(tower);\n}\n";case"crash":return"async function calculateRandomNumber(serverSeed: string, clientSeed: string) {\n  const msgBuffer = new TextEncoder().encode(serverSeed + clientSeed);\n  const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);\n  const hashArray = Array.from(new Uint8Array(hashBuffer));\n\n  const hashHex = hashArray\n    .map(b => ('00' + b.toString(16)).slice(-2))\n    .join('');\n\n  return new BigNumber('0x' + hashHex.slice(0, 13));\n}\n\nexport async function verifyCrashFairness(\n  serverSeed: string,\n  clientSeed: string\n) {\n  var randomNumber = await calculateRandomNumber(serverSeed, clientSeed);\n  var hs = 100 / 5;\n  if (randomNumber.mod(hs) === BigNumber(0)) {\n    return 1;\n  }\n\n  var h = randomNumber;\n  var e = new BigNumber(2 ** 52);\n  return (\n    Math.floor(e.minus(h).multipliedBy(100).dividedBy(e.minus(h)).toNumber()) /\n    100.0\n  );\n}\n\nconsole.log(verifyCrashFairness(serverSeed, clientSeed));\n"}return""}),[b]),I=(0,r.useCallback)((async()=>{try{const e=JSON.parse(c.replace(/\s+|\r?\n|\r/g,""));console.info(e);let t="";if("coinflip"===b.value)t=await(async e=>{const t=e.players.map((e=>({id:1,name:e.name,avatar:e.avatar||"",percent:1,color:e.color}))),n=await A(t,e.randomString);let r=e.players.findIndex((e=>e.color===n.winner.color));return e.players[r].color})(e);else if("jackpot"===b.value)t=await(async e=>{const t=e.players.map((e=>{const t=e.usdAmount||0,n=e.nftAmount||0,r=e.betAmount||t+n;return{...e,usdAmount:t,nftAmount:n,betAmount:r}})).map((e=>({id:e.id,name:e.name,avatar:e.avatar||"",percent:e.betAmount}))),n=await A(t,e.randomString);return y(e.players.find((e=>e.id===n.winner.id)),1)})(e);else if("dreamtower"===b.value){let n=await N(e);t=n.result;for(let e=0;e<n.towerData.tower.length/2;e++){const t=n.towerData.tower.length-e-1,r=n.towerData.tower[e];n.towerData.tower[e]=n.towerData.tower[t],n.towerData.tower[t]=r}k(n.towerData)}else"crash"===b.value&&(t=await(async e=>{const{serverSeed:t,clientSeed:n}=e;return(await C(t,n)).toFixed(2)})(e));f(t)}catch{f("Invalid input")}}),[c,b.value]),[R,z,M,P]=(0,r.useMemo)((()=>[B(t,n),D(t,n),E(t,n),H(t,n?{serverSeed:n.serverSeed,clientSeed:o}:void 0)]),[t,n,o]);return(0,r.useEffect)((()=>{"coinflip"===b.value?u(R):"jackpot"===b.value?u(z):"dreamtower"===b.value?u(M):"crash"===b.value&&u(P)}),[b.value,R,z,M,P]),(0,r.useEffect)((()=>{a&&(a.current.style.height="auto",a.current.style.height=a.current.scrollHeight+5+"px")}),[c]),(0,r.useEffect)((()=>{s&&(s.current.style.height="auto",s.current.style.height=s.current.scrollHeight+5+"px")}),[S]),(0,r.useEffect)((()=>{d&&(d.current.style.height="auto",d.current.style.height=d.current.scrollHeight+5+"px")}),[p]),(0,l.jsxs)(i.xu,{px:"4px",children:[(0,l.jsx)(i.xv,{textTransform:"uppercase",fontSize:"18px",lineHeight:"22px",fontWeight:500,color:"white",children:"advanced fairness verification"}),(0,l.jsxs)($,{mt:"35px",children:["Game",(0,l.jsx)(x.ZP,{styles:O,options:F,value:b,isSearchable:!1,onChange:e=>{e.value!==b.value&&(v(e),f(""))}})]}),(0,l.jsxs)($,{mt:"20px",children:[(0,l.jsxs)(i.kC,{justifyContent:"space-between",children:[(0,l.jsx)(i.xv,{children:"Algorithm Input (Editable)"}),(0,l.jsx)(i.xv,{fontSize:"12px",children:"JSON Object"})]}),(0,l.jsxs)(W,{background:"#03060999",children:[(0,l.jsx)(_,{children:(0,l.jsx)(U,{ref:a,value:c,onKeyDown:e=>{9===e.keyCode&&(e.preventDefault(),e.currentTarget.setRangeText("  ",e.currentTarget.selectionStart,e.currentTarget.selectionStart,"end"))},onChange:e=>{u(e.target.value)}})}),(0,l.jsx)(Z,{onClick:()=>m()(c)})]})]}),(0,l.jsx)(V,{mt:"20px",onClick:I,children:"Run Algorithm"}),(0,l.jsxs)($,{mt:"30px",children:[(0,l.jsxs)(i.kC,{justifyContent:"space-between",children:[(0,l.jsxs)(i.xv,{children:[b.label," Algorithm"]}),(0,l.jsx)(i.xv,{fontSize:"12px",children:"Javascript"})]}),(0,l.jsxs)(W,{background:"#0306094b",children:[(0,l.jsx)(_,{children:(0,l.jsx)(U,{ref:s,value:S,readOnly:!0})}),(0,l.jsx)(Z,{onClick:()=>m()(S)})]})]}),(0,l.jsxs)($,{mt:"20px",minWidth:"350px",children:["Algorithm Output",(0,l.jsxs)(W,{background:"#0306094b",children:[(0,l.jsx)(_,{children:(0,l.jsx)(U,{readOnly:!0,ref:d,value:p})}),(0,l.jsx)(Z,{onClick:()=>m()(p)}),"dreamtower"===b.value&&(0,l.jsx)(i.kC,{justifyContent:"center",children:(0,l.jsx)(T.Z,{tower:j.tower,blocksInRow:j.blocksInRow})})]})]}),(0,l.jsx)(V,{mt:"23px",onClick:I,children:"Run Algorithm"})]})},P=r.memo(M),_=(0,p.default)(i.xu)`
  overflow-y: auto;
`,U=p.default.textarea`
  border: none;
  outline: none;
  background: transparent;

  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: white;

  resize: none;
  white-space: pre;
  width: 100%;
`,W=(0,p.default)(i.rj)`
  border-radius: 11px;
  border-bottom-right-radius: 0px;
  padding: 20px 14px 20px 25px;

  grid-template-columns: auto max-content;
  gap: 15px;
  height: auto;
`,$=(0,p.default)(i.kC)`
  flex-direction: column;
  gap: 7px;

  color: #768bad;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`,Z=(0,p.default)(i.zx)`
  width: 28px;
  height: 28px;
  position: relative;

  background: linear-gradient(180deg, #2a3d57 0%, #2a3d57 100%);
  border-radius: 6px;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url(${b.Z}) no-repeat;
    background-size: 12px 12px;
    background-position: center;
  }
`;Z.defaultProps={variant:"secondary"};const V=(0,p.default)(i.zx)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.success}};
  background: linear-gradient(180deg, #070b10 0%, rgba(7, 11, 16, 0.3) 100%);
  border-radius: 7px;

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 16%;
  color: white;

  padding: 9px 14px;

  text-transform: uppercase;
`;V.defaultProps={variant:"secondary"};const L=(0,p.default)(a.mQ)`
  .react-tabs__tab-list {
    display: flex;
    width: 800px;
    margin: 0;
    border: none;
    div {
      background: linear-gradient(
        5.33deg,
        #142131 95.74%,
        rgba(20, 33, 49, 0) 174.47%
      );
      border-radius: 17px 17px 0 0;
    }
    .react-tabs__tab {
      bottom: 0;
      padding: 25px 30px;

      .width_700 & {
        padding: 25px 40px;
      }

      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
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
      background: #06080f;
      border: 2px solid #4f617b;
      border-radius: 17px 17px 0 0;
      border-bottom: 0;
      color: #4fff8b;

      ::before {
        position: absolute;
        background: #06080f;
        content: "";
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
`,G=(0,p.default)(a.x4)`
  /* position: relative; */

  & > div {
    box-sizing: border-box;
    background: linear-gradient(180deg, #000000 -13.46%, #0b141e 16.48%);
    border: 2px solid transparent;
    border-image: linear-gradient(
        180deg,
        #4f617b 1.45%,
        rgba(26, 41, 61, 0) 49.08%
      )
      1;
    border-bottom: 0px;
    min-height: 300px;
    padding: 24px;

    .width_700 & {
      padding: 40px;
    }
  }
`;n(78614);var Y=n(31387),q=n(54623),K=n(14779);function J(e){let{text:t="",enableCopy:n=!1}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.kC,{alignItems:"center",children:[(0,l.jsx)(i.xv,{fontSize:"19px",lineHeight:"1.2em",color:"white",width:180,children:t.length>14?t.slice(0,8)+"..."+t.slice(-4):t}),!0===n&&(0,l.jsx)(ee,{onClick:()=>{m()(t),Y.Am.success("Copy to clipboard success.")},children:(0,l.jsx)(b.r,{width:12,height:12})})]})})}function Q(e){let{title:t="",readOnly:n=!1,placeholder:r="",type:o="text",setText:a,text:s="",enableCopy:d=!1,buttonClick:c,buttonText:u="",isLoading:p=!1,...h}=e;return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(i.kC,{flexDirection:"column",fontSize:"16px",lineHeight:"1.2em",gap:8,...h,children:[(0,l.jsx)(i.xv,{color:"#768BAD",children:t}),(0,l.jsxs)(ne,{children:[(0,l.jsxs)(X,{readOnly:n,children:[(0,l.jsx)(i.II,{readOnly:n,value:s,type:o,placeholder:r,onChange:e=>{a(e.target.value)}}),!0===d&&(0,l.jsx)(ee,{onClick:()=>{m()(s),Y.Am.success("Copy to clipboard success.")},children:(0,l.jsx)(b.r,{width:12,height:12})})]}),""!==u&&(0,l.jsx)(te,{onClick:p?void 0:c,children:p?(0,l.jsx)(q.Z,{color:"#fff",size:20}):u})]})]})})}const X=(0,p.default)(i.kC)`
  align-items: center;
  gap: 20px;
  padding: 10px 20px;
  background: ${e=>{let{readOnly:t}=e;return t?"#121C2A":"#03060999"}};
  border-radius: 11px;
  flex-grow: 1;
  height: 42px;

  width: 100%;
  .width_700 & {
    width: auto;
  }

  input {
    color: white;
    flex-grow: 1;
    border: none;
    outline: none;
    background: transparent;
    font-size: 16px;
    line-height: 19px;

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
`,ee=(0,p.default)(i.zx)`
  min-width: 28px;
  min-height: 28px;

  svg {
    min-width: 12px;
    min-height: 12px;
  }
`;ee.defaultProps={variant:"secondary"};const te=(0,p.default)(i.zx)`
  border: 2px solid ${e=>{let{theme:t}=e;return t.colors.success}};
  background: linear-gradient(180deg, #070b10 0%, rgba(7, 11, 16, 0.3) 100%);
  border-radius: 6.75px;

  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0.16em;
  color: white;

  padding: 9px 13px;
  gap: 10px;

  text-transform: uppercase;
  min-width: max-content;

  width: 100%;
  .width_700 & {
    width: max-content;
  }
`,ne=(0,p.default)(i.kC)`
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  .width_700 & {
    gap: 25px;
    flex-direction: row;
  }
`,re=()=>{const{data:e,error:t}=(0,s.ZX)(),[n,o]=(0,r.useState)(""),[a,d]=(0,r.useState)(""),[c,u]=(0,r.useState)(""),[p,h]=(0,r.useState)(!1),[x,f]=(0,r.useState)(!1),[m,b]=(0,r.useState)(!1),[g,w]=(0,r.useState)([]),[v,y]=(0,r.useState)({client:"",server:"",bets:0});(0,r.useEffect)((()=>{let n={client:"",server:"",bets:0};if(!t&&e){const{clientSeed:t,serverSeedHash:r,nonce:o}=e;n={client:null!==t&&void 0!==t?t:"",server:null!==r&&void 0!==r?r:"",bets:null!==o&&void 0!==o?o:0}}y(n)}),[t,e]);const j=(0,r.useCallback)((async()=>{b(!0);try{const{data:e}=await K.hi.get("/seed/history",{params:{offset:g.length,count:3}}),t=e.map((e=>{const{clientSeed:t,serverSeed:n,serverSeedHash:r,nonce:o}=e;return{client:null!==t&&void 0!==t?t:"",server:null!==n&&void 0!==n?n:"",serverHash:null!==r&&void 0!==r?r:"",nonce:null!==o&&void 0!==o?o:0}})).filter((e=>!g.find((t=>t.server===e.server))));w([...g,...t])}catch{}b(!1)}),[g]),k=(0,r.useCallback)((async()=>{if(""!==c){f(!0);try{const{data:e}=await K.hi.post("/seed/rotate",{serverSeedHash:v.server,clientSeed:c}),{clientSeed:t,serverSeedHash:n,nonce:r}=e;y({client:null!==t&&void 0!==t?t:"",server:null!==n&&void 0!==n?n:"",bets:null!==r&&void 0!==r?r:0}),Y.Am.success("The client seed was updated successfully.")}catch(e){429===e.response.status?Y.Am.error(e.response.data.message):503===e.response.status&&Y.Am.error("This function is blocked by admin.")}f(!1)}else Y.Am.error("New client seed is empty.")}),[c]),S=(0,r.useCallback)((async()=>{h(!0);try{const{data:e}=await K.hi.get(`/seed/unhash?hash=${a}`);o(e.seed)}catch(t){Y.Am.error("The current server seed is still in use, please change your client seed to unhash the server seed.")}h(!1)}),[a]);return(0,r.useEffect)((()=>{0!==g.length||m||j()}),[]),(0,l.jsx)("div",{children:(0,l.jsxs)(i.kC,{flexDirection:"column",gap:20,fontSize:"20px",lineHeight:"1.25em",children:[(0,l.jsx)(i.xv,{color:"#D0DAEB",fontWeight:600,fontSize:"18px",children:"ACTIVE SEED PAIR"}),(0,l.jsxs)(i.xv,{color:"#B9D2FD",fontSize:"14px",mt:"-10px",mb:"10px",children:["Your ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"client seed"})," is like your lucky key, game outcomes depend on your"," ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"client seed"})," and"," ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"server seed"})," (seed pair). Every time you update your ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"client seed"})," a new"," ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"server seed"})," is generated, hashed and paired to create a ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"seed pair"})," - your previous ",(0,l.jsx)(i.Dr,{fontStyle:"italic",children:"client seed"})," becomes expired and the server seed unhashed. Allowing you to validate the outcomes of all passed and future games."]}),(0,l.jsx)(Q,{title:"New Client Seed",buttonText:"UPDATE SEED",buttonClick:k,isLoading:x,text:c,setText:u,mb:"10px"}),(0,l.jsx)(Q,{title:"Active Client Seed",text:v.client,readOnly:!0,enableCopy:!0}),(0,l.jsx)(Q,{title:"Active Server Seed (Hashed)",text:v.server,readOnly:!0,enableCopy:!0}),(0,l.jsx)(i.xu,{maxWidth:200,children:(0,l.jsx)(Q,{title:"Total Bets with Pair",text:v.bets.toString(),readOnly:!0,enableCopy:!0})}),(0,l.jsx)(ae,{children:(0,l.jsxs)(ie,{children:[(0,l.jsx)("thead",{children:(0,l.jsxs)("tr",{children:[(0,l.jsx)("th",{children:"Client Seed"}),(0,l.jsx)("th",{children:"Server Seed (Hashed)"}),(0,l.jsx)("th",{children:"Server Seed (Unhashed)"}),(0,l.jsx)("th",{children:"Total Bets with Pair"})]})}),(0,l.jsx)("tbody",{children:g.map(((e,t)=>(0,l.jsxs)("tr",{children:[(0,l.jsx)("td",{children:(0,l.jsx)(J,{text:e.client,enableCopy:!0})}),(0,l.jsx)("td",{children:(0,l.jsx)(J,{text:e.serverHash,enableCopy:!0})}),(0,l.jsx)("td",{children:(0,l.jsx)(J,{text:e.server,enableCopy:!0})}),(0,l.jsx)("td",{children:(0,l.jsx)(J,{text:e.nonce.toString()})})]},t)))})]})}),(0,l.jsx)(i.zx,{variant:"secondary",outlined:!0,scale:"sm",width:153,background:"linear-gradient(180deg, #070B10 0%, rgba(7, 11, 16, 0.3) 100%)",color:"#FFFFFF",borderColor:"chipSecondary",marginX:"auto",marginTop:20,onClick:m?void 0:j,children:m?(0,l.jsx)(q.Z,{color:"#fff",size:20}):"SHOW MORE"}),(0,l.jsx)(i.xv,{color:"#D0DAEB",fontWeight:600,fontSize:"18px",mt:"75px",children:"UNHASH SERVER SEED"}),(0,l.jsx)(i.xv,{color:"#B9D2FD",fontSize:"14px",mt:"-10px",mb:"10px",children:"You can unhash anyone\u2019s server seed as long as their seed pair is expired. To unhash your current server seed update your active client seed with a new seed."}),(0,l.jsx)(Q,{title:"Server Seed (Hashed)",text:a,setText:d,buttonText:"UNHASH",isLoading:p,buttonClick:S}),(0,l.jsx)(Q,{title:"Server Seed",text:n,readOnly:!0,enableCopy:!0})]})})},oe=r.memo(re),ae=(0,p.default)(i.xu)`
  margin-top: 50px;
  max-height: 600px;
  overflow: auto;
  &::-webkit-scrollbar-track {
    margin-top: 38px;
    margin-bottom: 10px;
  }
  &::-webkit-scrollbar-track-piece {
    margin-right: 10px;
  }
`,ie=p.default.table`
  position: relative;
  width: 100%;
  min-width: 700px;

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
    width: 26%;
  }

  th {
    position: sticky;
    top: 0;
    color: #768bad;
    background: #0b141e;
  }

  td {
    background: #121c2a;
  }

  tr td:last-child,
  th:last-child {
    text-align: right;
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
`,se=()=>{const{state:e}=(0,o.TH)(),{isMobile:t}=(0,s.SL)(),[n,d,c]=(0,r.useMemo)((()=>{if(!e)return[void 0,void 0,void 0];const{gameType:t,gameData:n,room:r}=e;return[t,n,r]}),[e]),[p,h,x]=(0,r.useMemo)((()=>t?["FAIR","VERIFY","SEED"]:["PROVABLY FAIR","VERIFICATION","CLIENT / SERVER SEED"]),[t]);return(0,l.jsx)(i.xu,{padding:["30px 12px","30px 12px","30px 12px","30px 25px"],children:(0,l.jsxs)(L,{defaultIndex:"seed"===c?2:n?1:0,children:[(0,l.jsx)(a.td,{children:(0,l.jsxs)(i.kC,{children:[(0,l.jsxs)(a.OK,{children:[p,(0,l.jsx)("b",{})]}),(0,l.jsxs)(a.OK,{children:[h,(0,l.jsx)("b",{})]}),(0,l.jsxs)(a.OK,{children:[x,(0,l.jsx)("b",{})]})]})}),(0,l.jsx)(G,{children:(0,l.jsx)(u,{})}),(0,l.jsx)(G,{children:(0,l.jsx)(P,{gameType:n,gameData:d})}),(0,l.jsx)(G,{children:(0,l.jsx)(oe,{})})]})})},de=r.memo(se)},90383:(e,t,n)=>{n.d(t,{Fg:()=>c,I4:()=>l,Lx:()=>d,Yt:()=>s});var r=n(25235),o=n(104),a=n(35169),i=n(36626);const s=(0,r.default)(a.mQ)`
  .react-tabs__tab-list {
    display: flex;
    flex-direction: column;
    ${e=>{let{theme:t}=e;return t.mediaQueries.md}} {
      flex-direction: row;
    }
    gap: 35px;
    justify-content: space-evenly;
    background: #030609;
    border-radius: 30px;
    border: none;

    padding: 24px 31px;
    margin: 0 0 60px;
    .react-tabs__tab {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 43px;
      background: linear-gradient(27.16deg, #121823 11.03%, #070b10 89.37%);
      border-radius: 22px;
      color: #8591a3;
      :focus:after {
        display: none !important;
      }
    }

    .react-tabs__tab--selected {
      position: relative;
      background: linear-gradient(
        0deg,
        rgba(79, 255, 139, 0.2) 0%,
        rgba(79, 255, 139, 0) 132.27%
      );
      border: none !important;

      animation: ${i.fs} 0.8s ease-in-out infinite alternate;

      svg {
        color: #4fff8b;
      }

      ::before {
        content: "";
        position: absolute;
        inset: 0;
        border-radius: 22px;
        padding: 2px;
        background: linear-gradient(
          to bottom,
          rgba(79, 255, 139, 1) 10%,
          rgba(79, 255, 139, 0) 90%
        );
        mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
        -webkit-mask: linear-gradient(#fff 0 0) content-box,
          linear-gradient(#fff 0 0);
        mask-composite: xor;
        -webkit-mask-composite: xor;
        /* mask-composite: exclude; */
      }
    }
  }
`,d=(0,r.default)(a.x4)`
  animation: ${i.e4} 0.6s;
`,l=(0,r.default)(o.Z)`
  background-color: transparent !important;
  border: none !important;
  animation: ${i.e4} 0.6s;

  .rc-collapse-content {
    background-color: transparent !important;
  }

  .rc-collapse-item {
    border: none !important;

    .rc-collapse-header {
      color: white !important;
      justify-content: space-between;
      padding: 21px 16px !important;

      .rc-collapse-expand-icon {
        order: 2;
      }

      .rc-collapse-header-text {
        font-size: 20px;
      }
    }

    .rc-collapse-content .rc-collapse-content-box {
      animation: ${i.SP} 0.6s;
      font-size: 16px;
      color: #8591a3;
    }
  }

  .rc-collapse-item-active .rc-collapse-header {
    .rc-collapse-expand-icon {
      transition: 0.5s;
      transform: rotate(180deg);

      svg path {
        stroke: #4fff8b;
      }
    }

    .rc-collapse-header-text {
      color: #4fff8b !important;
    }
  }
`,c=r.default.a`
  color: #44aae6;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: #4fff8b;
    text-decoration: underline;
  }
  &:active {
    text-decoration: none;
  }
`},52986:(e,t,n)=>{e.exports=n.p+"static/media/tower.4a32a8cede9fc3ccb8fa.png"}}]);