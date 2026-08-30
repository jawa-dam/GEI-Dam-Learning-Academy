/* GEI Academy Audio Control — surgical dashboard hook */
(function(){'use strict';
  var KEY='gei-academy-sound-enabled-v1';
  function enabled(){try{return localStorage.getItem(KEY)!=='0'}catch(e){return true}}
  function set(v){try{localStorage.setItem(KEY,v?'1':'0')}catch(e){};document.dispatchEvent(new CustomEvent('gei-audio-state',{detail:{enabled:!!v}}));return !!v}
  function render(){document.querySelectorAll('[data-gei-audio-toggle]').forEach(function(b){var on=enabled();b.textContent=on?'🔊':'🔇';b.setAttribute('aria-pressed',on?'true':'false');b.setAttribute('aria-label',on?'Sound on':'Sound off');if(!b.__geiBound){b.__geiBound=true;b.addEventListener('click',function(){var next=!enabled();set(next);if(next&&typeof window.sound==='function')window.sound('click')})}})}
  window.GEI_AUDIO_CONTROL={enabled:enabled,set:set,toggle:function(){return set(!enabled())},render:render};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
  window.addEventListener('storage',function(e){if(e.key===KEY)render()});
})();