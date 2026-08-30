/* GEI ACADEMY AUDIO CONTROL v1
   Single source of truth for sound preference across dashboard,
   levels, vault and future Academy pages.
*/
(function(){'use strict';
var KEY='gei-academy-sound-enabled-v1';
var enabled=true;
function read(){try{var v=localStorage.getItem(KEY);if(v!==null)enabled=v!=='0'}catch(e){}}
function write(){try{localStorage.setItem(KEY,enabled?'1':'0')}catch(e){}}
function emit(){window.dispatchEvent(new CustomEvent('gei:sound-state',{detail:{enabled:enabled}}));}
function isEnabled(){return enabled}
function setEnabled(v){enabled=!!v;write();emit();return enabled}
function toggle(){setEnabled(!enabled);if(enabled&&typeof window.sound==='function')try{window.sound('click')}catch(e){}return enabled}
function gate(){
  var btns=document.querySelectorAll('[data-gei-sound-toggle]');
  btns.forEach(function(b){
    b.textContent=enabled?'🔊':'🔇';
    b.setAttribute('aria-label',enabled?'Sound on':'Sound off');
    b.setAttribute('aria-pressed',enabled?'true':'false');
    if(!b.__geiBound){b.__geiBound=true;b.addEventListener('click',function(){toggle()})}
  });
}
read();
window.GEI_AUDIO_CONTROL={isEnabled:isEnabled,setEnabled:setEnabled,toggle:toggle,refresh:gate};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',gate);else gate();
window.addEventListener('gei:sound-state',gate);
})();