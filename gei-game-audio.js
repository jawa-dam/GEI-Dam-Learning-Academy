/* GEI GAME AUDIO ENGINE v2
   Web Audio API only. Shared master bus + soft limiting + subtle reverb.
   Public API intentionally remains sound(kind).
*/
(function(){'use strict';
var AC=window.AudioContext||window.webkitAudioContext,ctx=null,master=null,comp=null,wet=null;
function init(){
  if(!AC)return null;
  if(!ctx){
    ctx=new AC();
    master=ctx.createGain();
    comp=ctx.createDynamicsCompressor();
    wet=ctx.createGain();
    master.gain.value=.46;
    comp.threshold.value=-10;
    comp.knee.value=14;
    comp.ratio.value=4.5;
    comp.attack.value=.004;
    comp.release.value=.18;
    wet.gain.value=.10;
    master.connect(comp).connect(ctx.destination);
    var ir=ctx.createBuffer(2,Math.floor(ctx.sampleRate*.42),ctx.sampleRate);
    for(var ch=0;ch<2;ch++){
      var a=ir.getChannelData(ch);
      for(var i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.pow(1-i/a.length,3.4);
    }
    var conv=ctx.createConvolver(),send=ctx.createGain();
    conv.buffer=ir;send.gain.value=.12;
    master.connect(send).connect(conv).connect(wet).connect(comp);
  }
  if(ctx.state==='suspended')ctx.resume();
  return ctx;
}
function jitter(v){return v*(.975+Math.random()*.05)}
function tone(f0,f1,dur,type,gain,when,cut){
  var c=init();if(!c)return;
  var t=c.currentTime+(when||0),o=c.createOscillator(),g=c.createGain(),lp=c.createBiquadFilter();
  o.type=type||'triangle';
  o.frequency.setValueAtTime(jitter(f0),t);
  o.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t+dur*.80);
  lp.type='lowpass';
  lp.frequency.setValueAtTime(cut||4200,t);
  lp.frequency.exponentialRampToValueAtTime(Math.max(700,(cut||4200)*.55),t+dur);
  g.gain.setValueAtTime(.0001,t);
  g.gain.exponentialRampToValueAtTime(gain||.05,t+.012);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  o.connect(lp).connect(g).connect(master);
  o.start(t);o.stop(t+dur+.03);
}
function noise(dur,gain,when){
  var c=init();if(!c)return;
  var n=c.createBufferSource(),b=c.createBuffer(1,Math.max(1,Math.floor(c.sampleRate*dur)),c.sampleRate);
  var a=b.getChannelData(0);
  for(var i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.pow(1-i/a.length,2);
  n.buffer=b;
  var lp=c.createBiquadFilter(),g=c.createGain(),t=c.currentTime+(when||0);
  lp.type='lowpass';lp.frequency.value=3600;
  g.gain.setValueAtTime(.0001,t);
  g.gain.exponentialRampToValueAtTime(gain||.014,t+.004);
  g.gain.exponentialRampToValueAtTime(.0001,t+dur);
  n.connect(lp).connect(g).connect(master);
  n.start(t);n.stop(t+dur+.02);
}
function sound(kind){
  init();
  if(kind==='click'){
    tone(540,760,.10,'triangle',.045,0,3600);
    tone(760,980,.075,'sine',.022,.018,4200);
    noise(.025,.010,0);
  }else if(kind==='good'||kind==='correct'){
    tone(440,650,.14,'triangle',.064,0,3600);
    tone(650,980,.17,'sine',.040,.045,4300);
    tone(1310,1580,.11,'triangle',.022,.105,5000);
    noise(.04,.012,.03);
  }else if(kind==='wrong'){
    tone(280,125,.25,'sine',.058,0,1450);
    tone(185,88,.28,'triangle',.038,.016,950);
    noise(.05,.008,0);
  }else if(kind==='save'){
    tone(500,720,.12,'triangle',.048,0,3500);
    tone(720,1020,.15,'sine',.036,.055,4300);
    noise(.03,.009,.02);
  }else if(kind==='level'||kind==='level-complete'){
    [523,659,784,988,1175].forEach(function(f,i){
      tone(f,f*1.02,.20,'triangle',.055,i*.085,4300);
      tone(f/2,f/2*1.01,.18,'sine',.019,i*.085,2500);
    });
    tone(1568,1760,.28,'sine',.048,.47,5400);
    noise(.10,.020,.40);
  }else if(kind==='certificate'||kind==='vault'||kind==='fanfare'){
    [392,523,659,784,988,1175,1568].forEach(function(f,i){
      tone(f,f*1.025,.20,'triangle',.060,i*.095,4700);
      if(i>2)tone(f*2,f*2.01,.12,'sine',.015,i*.095+.035,5600);
    });
    tone(2093,2217,.34,'sine',.052,.72,5800);
    noise(.14,.035,.60);
  }
}
window.sound=sound;window.GEI_GAME_SOUND=sound;
})();