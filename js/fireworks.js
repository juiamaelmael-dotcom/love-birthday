(function(){const L=window.Love=window.Love||{};
const cv=document.getElementById('fx'),ctx=cv.getContext('2d');let P=[],raf=0,auto=0;
const cols=['#ff8fb8','#c9a7ff','#ffd6a5','#ffffff','#ffd86b','#ff5d9e'],MAX=700;
function size(){const r=Math.min(devicePixelRatio||1,2);cv.width=innerWidth*r;cv.height=innerHeight*r;ctx.setTransform(r,0,0,r,0,0)}
size();addEventListener('resize',size);
const rc=()=>cols[Math.random()*cols.length|0];
function add(p){if(P.length<MAX)P.push(p);if(!raf)raf=requestAnimationFrame(tick)}
function tick(){ctx.clearRect(0,0,innerWidth,innerHeight);P=P.filter(p=>p.life>0);
for(const p of P){p.vy+=p.g;p.vx*=p.f;p.vy*=p.f;p.x+=p.vx;p.y+=p.vy;p.life--;
ctx.globalAlpha=Math.max(0,p.life/p.max);ctx.fillStyle=p.c;
if(p.rect){ctx.save();ctx.translate(p.x,p.y);ctx.rotate(p.life*.2);ctx.fillRect(-p.s,-p.s/2,p.s*2,p.s);ctx.restore()}
else{ctx.beginPath();ctx.arc(p.x,p.y,p.s,0,6.3);ctx.fill()}}
ctx.globalAlpha=1;
if(P.length)raf=requestAnimationFrame(tick);else{raf=0;ctx.clearRect(0,0,innerWidth,innerHeight)}}
L.confetti=function(n){n=Math.floor((n||100)*(L.RM?0.3:1)*(innerWidth<600?0.7:1));
for(let i=0;i<n;i++){const a=Math.random()*6.28,v=3+Math.random()*9,l=90+Math.random()*60;
add({x:innerWidth/2,y:innerHeight*.45,vx:Math.cos(a)*v,vy:Math.sin(a)*v-4,g:.18,f:.985,s:3+Math.random()*4,c:rc(),rect:1,life:l,max:l})}};
L.firework=function(x,y){const n=innerWidth<600?45:70,c1=rc(),c2=rc();
for(let i=0;i<n;i++){const a=i/n*6.28,v=2+Math.random()*4,l=55+Math.random()*25;
add({x:x,y:y,vx:Math.cos(a)*v,vy:Math.sin(a)*v,g:.05,f:.97,s:2,c:i%2?c1:c2,life:l,max:l})}};
L.finale=function(){L.stopFx();let shots=0;L.confetti(180);
const shoot=()=>{L.firework(innerWidth*(.15+Math.random()*.7),innerHeight*(.15+Math.random()*.35));
if(shots%3===0)L.confetti(50);if(++shots>=16)clearInterval(auto)};
shoot();auto=setInterval(shoot,L.RM?1800:750)};
L.stopFx=function(){clearInterval(auto);P=[];if(raf){cancelAnimationFrame(raf);raf=0}ctx.clearRect(0,0,innerWidth,innerHeight)};
})();
