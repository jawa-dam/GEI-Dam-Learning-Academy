/* GEI Academy shared audio loader */
(function(){'use strict';
  var SRC='js/gei-game-audio.js';
  function ensure(){
    if(window.GEI_GAME_SOUND_READY||document.querySelector('script[data-gei-game-audio]')) return;
    var s=document.createElement('script');s.src=SRC;s.async=false;s.dataset.geiGameAudio='1';
    s.onload=function(){window.GEI_GAME_SOUND_READY=true;window.dispatchEvent(new Event('gei:audio-ready'));};
    s.onerror=function(){window.dispatchEvent(new Event('gei:audio-error'));};
    document.head.appendChild(s);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ensure);else ensure();
  window.GEI_AUDIO_LOADER={ensure:ensure};
})();