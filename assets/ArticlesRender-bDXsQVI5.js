import{r as n,j as e,B as a,u as f,v as u,w,x as _,F as O,T as p,y as i,d as v}from"./vendor-BGV-2WBk.js";import{d as y}from"./users-CPgiEF7P.js";import{a as M}from"./@react-router-BCnkyGBj.js";const E=({show:r,onClose:l,article:o})=>{const c=M();if(!o)return null;const d={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:400,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4};return e.jsx(w,{open:r,onClose:l,closeAfterTransition:!0,slots:{backdrop:_},slotProps:{backdrop:{timeout:500}},children:e.jsx(O,{in:r,children:e.jsxs(a,{sx:d,children:[e.jsx(p,{variant:"h6",children:o.title}),e.jsx(p,{sx:{mt:2,cursor:"pointer"},onClick:()=>c(`/SS/user/${o.uuid}`),children:o.uuid})]})})})};E.propTypes={show:i.bool.isRequired,onClose:i.func.isRequired,article:i.shape({title:i.string.isRequired,uuid:i.string.isRequired})};const g=({title:r,text:l,imgSrc:o,onClick:c})=>{const[x,h]=n.useState(2);return e.jsxs(f,{onClick:c,component:"article",elevation:x,onMouseEnter:()=>h(15),onMouseLeave:()=>h(2),sx:{padding:"10px",width:"100%",maxWidth:"402px",borderRadius:"25px",height:"150px",backgroundColor:"#fefefe41",display:"flex",flexDirection:"row",transition:"transform 0.25s ease, box-shadow 0.25s ease","&:hover":{transform:"scale(1.04)",cursor:"pointer"}},children:[e.jsx(v,{src:o,alt:r,sx:{width:150,height:150}}),e.jsxs(a,{children:[e.jsx(p,{variant:"h5",children:r}),e.jsx(p,{variant:"subtitle1",children:l})]})]})};g.propTypes={title:i.string.isRequired,text:i.string.isRequired,imgSrc:i.string.isRequired,onClick:i.func.isRequired};function N(){const[l,o]=n.useState([]),[c,d]=n.useState(!0),[m,x]=n.useState(!1),[h,A]=n.useState(null),[S,R]=n.useState(20);n.useEffect(()=>{const s=y.results.map(t=>({title:`${t.name.first} ${t.name.last}`,email:t.email,phone:t.phone,uuid:t.login.uuid,location:{state:t.location.state,city:t.location.city,country:t.location.country},text:`Generated user from ${t.location.city}, ${t.location.country}.`,imgSrc:t.picture.large,rating:Math.floor(Math.random()*6)}));o(s),d(!1)},[]);const T=s=>{A(s),x(!0)},L=()=>{x(!1)},j=()=>{R(t=>t+20)};return n.useEffect(()=>{const s=()=>{window.innerHeight+document.documentElement.scrollTop>=document.documentElement.offsetHeight-50&&j()};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),c?e.jsx(a,{component:"section",className:"Main-Section",children:Array.from({length:20}).map((s,t)=>e.jsxs(f,{sx:{padding:"10px",marginBottom:"15px",backgroundColor:"#fefefe41",width:"100%",maxWidth:"402px",height:"150px",borderRadius:"25px",display:"flex",flexDirection:"row"},children:[e.jsx(a,{sx:{display:"flex",alignItems:"center",marginRight:"10px"},children:e.jsx(u,{variant:"circular",width:150,height:150})}),e.jsxs(a,{style:{display:"flex",flexDirection:"column",flexGrow:1},children:[e.jsx(u,{variant:"text",width:"80%",height:35}),e.jsx(u,{variant:"text",width:"100%",height:20}),e.jsx(u,{variant:"text",width:"100%",height:20})]})]},t))}):e.jsxs(e.Fragment,{children:[e.jsx(a,{component:"section",className:"Main-Section",children:l.slice(0,S).map((s,t)=>e.jsx(g,{title:s.title,text:s.text,imgSrc:s.imgSrc,onClick:()=>T(s)},t))}),e.jsx(E,{show:m,onClose:L,article:h})]})}export{N as default};
