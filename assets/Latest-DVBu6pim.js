import{r as l,j as a,T as t,X as m,B as i,a3 as h,a4 as g,s as u,$ as v,d as x,y as r}from"./vendor-BGV-2WBk.js";const b=[{tag:"Engenharia",title:"O futuro da IA na engenharia de software",description:"A inteligência artificial está revolucionando a engenharia de software. Explore como as ferramentas impulsionadas por IA estão aprimorando os processos de desenvolvimento e melhorando a qualidade do software.",authors:[{name:"Remy Sharp",avatar:"https://randomuser.me/api/portraits/thumb/men/32.jpg"},{name:"Travis Howard",avatar:"https://randomuser.me/api/portraits/thumb/men/36.jpg"}]},{tag:"Produto",title:"Impulsionando o crescimento com design de produto centrado no usuário",description:"Nossa abordagem de design centrado no usuário está gerando um crescimento significativo. Saiba mais sobre as estratégias que empregamos para criar produtos que ressoam com os usuários.",authors:[{name:"Erica Johns",avatar:"https://randomuser.me/api/portraits/thumb/women/74.jpg"}]},{tag:"Design",title:"Adotando o minimalismo no design moderno",description:"O minimalismo é uma tendência chave no design moderno. Descubra como nossa equipe de design incorpora princípios minimalistas para criar experiências de usuário limpas e impactantes.",authors:[{name:"Kate Morrison",avatar:"https://randomuser.me/api/portraits/thumb/women/67.jpg"}]},{tag:"Empresa",title:"Cultivando uma cultura de inovação",description:"A inovação está no centro da nossa cultura empresarial. Conheça as iniciativas que temos em prática para promover a criatividade e impulsionar soluções inovadoras.",authors:[{name:"Cindy Baker",avatar:"https://randomuser.me/api/portraits/thumb/women/36.jpg"}]},{tag:"Engenharia",title:"Avançando na cibersegurança com soluções de próxima geração",description:"Nossas soluções de cibersegurança de próxima geração estão estabelecendo novos padrões na indústria. Descubra como protegemos nossos clientes de ameaças cibernéticas em constante evolução.",authors:[{name:"Agnes Walker",avatar:"https://randomuser.me/api/portraits/thumb/women/11.jpg"},{name:"Trevor Henderson",avatar:"https://randomuser.me/api/portraits/thumb/men/58.jpg"}]},{tag:"Produto",title:"Melhorando a experiência do cliente por meio da inovação",description:"Nossas abordagens inovadoras estão melhorando a experiência do cliente. Saiba mais sobre os novos recursos e melhorias que estão encantando nossos usuários.",authors:[{name:"Travis Howard",avatar:"https://randomuser.me/api/portraits/thumb/men/36.jpg"}]},{tag:"Engenharia",title:"Pioneirismo em soluções de engenharia sustentável",description:"Saiba mais sobre nosso compromisso com a sustentabilidade e as soluções de engenharia inovadoras que estamos implementando para criar um futuro mais verde. Descubra o impacto de nossas iniciativas ecológicas.",authors:[{name:"Agnes Walker",avatar:"https://randomuser.me/api/portraits/thumb/women/11.jpg"},{name:"Trevor Henderson",avatar:"https://randomuser.me/api/portraits/thumb/men/58.jpg"}]},{tag:"Produto",title:"Maximizando a eficiência com as últimas atualizações de produto",description:"Nossas recentes atualizações de produto foram projetadas para ajudar você a maximizar a eficiência e alcançar mais. Obtenha uma visão detalhada dos novos recursos e melhorias que podem elevar seu fluxo de trabalho.",authors:[{name:"Travis Howard",avatar:"https://randomuser.me/api/portraits/thumb/men/36.jpg"}]},{tag:"Design",title:"Design para o futuro: tendências e insights",description:"Mantenha-se à frente com as últimas tendências e insights de design. Nossa equipe de design compartilha sua experiência em criar experiências de usuário intuitivas e visualmente impressionantes.",authors:[{name:"Kate Morrison",avatar:"https://randomuser.me/api/portraits/thumb/women/67.jpg"}]},{tag:"Empresa",title:"A jornada da nossa empresa: marcos e conquistas",description:"Dê uma olhada na jornada da nossa empresa e nos marcos que alcançamos ao longo do caminho. De começos humildes a líder do setor, descubra nossa história de crescimento e sucesso.",authors:[{name:"Cindy Baker",avatar:"https://randomuser.me/api/portraits/thumb/women/36.jpg"}]}],f=u(t)({display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis"}),j=u(t)(({theme:e})=>({position:"relative",textDecoration:"none","&:hover":{cursor:"pointer"},"& .arrow":{visibility:"hidden",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"&:hover .arrow":{visibility:"visible",opacity:.7},"&:focus-visible":{outline:"3px solid",outlineColor:"hsla(210, 98%, 48%, 0.5)",outlineOffset:"3px",borderRadius:"8px"},"&::before":{content:"''",position:"absolute",width:0,height:"1px",bottom:0,left:0,backgroundColor:(e.vars||e).palette.text.primary,opacity:.3,transition:"width 0.3s ease, opacity 0.3s ease"},"&:hover::before":{width:"100%"}}));function p({authors:e}){return a.jsxs(i,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",justifyContent:"space-between"},children:[a.jsxs(i,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[a.jsx(v,{max:3,children:e.map((o,n)=>a.jsx(x,{alt:o.name,src:o.avatar,sx:{width:24,height:24}},n))}),a.jsx(t,{variant:"caption",children:e.map(o=>o.name).join(", ")})]}),a.jsx(t,{variant:"caption",children:"5 de Novembro, 2024"})]})}p.propTypes={authors:r.arrayOf(r.shape({avatar:r.string.isRequired,name:r.string.isRequired})).isRequired};function w(){const[e,o]=l.useState(null),n=s=>{o(s)},c=()=>{o(null)};return a.jsxs("div",{children:[a.jsx(t,{variant:"h2",gutterBottom:!0,children:"Recentes"}),a.jsx(m,{container:!0,spacing:8,columns:12,sx:{my:4},children:b.map((s,d)=>a.jsx(m,{size:{xs:12,sm:6},children:a.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:1,height:"100%"},children:[a.jsx(t,{gutterBottom:!0,variant:"caption",component:"div",children:s.tag}),a.jsxs(j,{gutterBottom:!0,variant:"h6",onFocus:()=>n(d),onBlur:c,tabIndex:0,className:e===d?"Mui-focused":"",children:[s.title,a.jsx(h,{className:"arrow",sx:{fontSize:"1rem"}})]}),a.jsx(f,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:s.description}),a.jsx(p,{authors:s.authors})]})},d))}),a.jsx(i,{sx:{display:"flex",flexDirection:"row",pt:4},children:a.jsx(g,{hidePrevButton:!0,hideNextButton:!0,count:10,boundaryCount:10})})]})}export{w as default};
