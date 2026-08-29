/* GEI GAME AUDIO ENGINE v2
   Web Audio API only. Shared master bus + soft limiting + subtle reverb.
   Public API intentionally remains sound(kind).
*/
(function(){'use strict';
var AC=window.AudioContext||window.webkitAudioContext,ctx=null,master=null,comp=null,wet=null;
function init(){if(!AC)return null;if(!ctx){ctx=new AC();master=ctx.createGain();comp=ctx.createDynamicsCompressor();wet=ctx.createGain();master.gain.value=.48;comp.threshold.value=-9;comp.knee.value=12;comp.ratio.value=4;comp.attack.value=.004;comp.release.value=.16;wet.gain.value=.12;master.connect(comp).connect(ctx.destination);createReverb()}if(ctx.state==='suspended')ctx.resume();return ctx}
function createReverb(){if(!ctx)return;var ir=ctx.createBuffer(2,Math.floor(ctx.sampleRate*.38),ctx.sampleRate);for(var ch=0;ch<2;ch++){var a=ir.getChannelData(ch);for(var i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.pow(1-i/a.length,3.2)}var conv=ctx.createConvolver();conv.buffer=ir;var send=ctx.createGain();send.gain.value=.10;master.connect(send).connect(conv).connect(wet).connect(comp)}
function jitter(v){return v*(.97+Math.random()*.06)}
function tone(f0,f1,dur,type,gain,when,cut){var c=init();if(!c)return;var t=c.currentTime+(when||0),o=c.createOscillator(),g=c.createGain(),lp=c.createBiquadFilter();o.type=type||'triangle';o.frequency.setValueAtTime(jitter(f0),t);o.frequency.exponentialRampToValueAtTime(Math.max(40,f1),t+dur*.82);lp.type='lowpass';lp.frequency.setValueAtTime(cut||4200,t);lp.frequency.exponentialRampToValueAtTime(Math.max(700,(cut||4200)*.56),t+dur);g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain||.06,t+.012);g.gain.exponentialRampToValueAtTime(.0001,t+dur);o.connect(lp).connect(g).connect(master);o.start(t);o.stop(t+dur+.03)}
function noise(dur,gain,when){var c=init();if(!c)return;var n=c.createBufferSource(),b=c.createBuffer(1,Math.max(1,Math.floor(c.sampleRate*dur)),c.sampleRate),a=b.getChannelData(0);for(var i=0;i<a.length;i++)a[i]=(Math.random()*2-1)*Math.pow(1-i/a.length,2);n.buffer=b;var lp=c.createBiquadFilter(),g=c.createGain(),t=c.currentTime+(when||0);lp.type='lowpass';lp.frequency.value=4200;g.gain.setValueAtTime(.0001,t);g.gain.exponentialRampToValueAtTime(gain||.018,t+.004);g.gain.exponentialRampToValueAtTime(.0001,t+dur);n.connect(lp).connect(g).connect(master);n.start(t);n.stop(t+dur+.02)}
function sound(kind){init();
 if(kind==='click'){tone(560,760,.095,'triangle',.045,0,3800);tone(720,900,.075,'sine',.026,.012,3400);noise(.028,.012,0)}
 else if(kind==='good'||kind==='correct'){tone(440,650,.14,'triangle',.070,0,3600);tone(650,980,.17,'sine',.045,.045,4300);tone(1300,1540,.105,'triangle',.024,.105,5000);noise(.04,.014,.03)}
 else if(kind==='wrong'){tone(280,125,.24,'sine',.060,0,1500);tone(190,90,.27,'triangle',.040,.015,1000);noise(.05,.010,0)}
 else if(kind==='save'){tone(500,720,.12,'triangle',.05,0,3600);tone(720,1020,.15,'sine',.038,.055,4400);noise(.03,.010,.02)}
 else if(kind==='level'||kind==='level-complete'){[523,659,784,988,1175].forEach(function(f,i){tone(f,f*1.02,.21,'triangle',.058,i*.085,4300);tone(f/2,f/2*1.01,.19,'sine',.022,i*.085,2600)});tone(1568,1760,.28,'sine',.052,.47,5400);noise(.10,.022,.40)}
 else if(kind==='certificate'||kind==='vault'||kind==='fanfare'){[392,523,659,784,988,1175,1568].forEach(function(f,i){tone(f,f*1.025,.20,'triangle',.062,i*.095,4700);if(i>2)tone(f*2,f*2.01,.12,'sine',.016,i*.095+.035,5600)});tone(2093,2217,.34,'sine',.055,.72,5800);noise(.14,.038,.60)}
}
window.sound=sound;window.GEI_GAME_SOUND=sound;
})();