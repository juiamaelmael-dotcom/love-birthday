(function(){const L=window.Love;const $=s=>document.querySelector(s);
L.show=function(id){document.querySelectorAll('.scene').forEach(s=>{const on=s.id===id;s.classList.toggle('active',on);s.toggleAttribute('inert',!on);if(on)s.scrollTop=0});
if(id==='s2')L.staggerText($('#title'),'HAPPY BIRTHDAY, LOVE! 💗')};
const audio=new Audio('assets/audio/birthday-music.mp3');audio.loop=true;audio.preload='auto';audio.volume=.5;
const btn=$('#musicBtn'),note=$('#note');let nt=0;
function say(t){note.textContent=t;note.classList.add('on');clearTimeout(nt);nt=setTimeout(()=>note.classList.remove('on'),3500)}
function startMusic(){if(!audio.paused)return;audio.play().catch(()=>{})}
const unlockMusic=()=>{startMusic();removeEventListener('pointerdown',unlockMusic);removeEventListener('keydown',unlockMusic)};
addEventListener('pointerdown',unlockMusic);addEventListener('keydown',unlockMusic);
audio.addEventListener('play',()=>{btn.classList.add('on');btn.setAttribute('aria-pressed','true')});
audio.addEventListener('pause',()=>{btn.classList.remove('on');btn.setAttribute('aria-pressed','false')});
btn.addEventListener('click',()=>{if(audio.paused){audio.play().catch(()=>say('Add assets/audio/birthday-music.mp3 to enable music 🎵'))}else audio.pause()});
$('#vol').addEventListener('input',e=>{audio.volume=+e.target.value});
$('#openBtn').addEventListener('click',L.openGift);
$('#wishBtn').addEventListener('click',L.wish);
$('#openLetter').addEventListener('click',L.openLetter);
$('#closeLetter').addEventListener('click',L.closeLetter);
$('#celebrateBtn').addEventListener('click',L.celebrate);
$('#replayBtn').addEventListener('click',()=>{L.resetInteractions();L.show('s1')});
document.querySelectorAll('[data-next]').forEach(b=>b.addEventListener('click',()=>L.show(b.dataset.next)));
addEventListener('keydown',e=>{if(e.key==='Escape')L.closeLetter()});
L.spawnDecor();L.show('s1');
startMusic();
})();
