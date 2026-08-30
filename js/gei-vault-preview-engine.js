/* ==========================================
GEI VAULT PREVIEW ENGINE v1
Animated, zero-purchase skin previews.
Applies classes/data attributes to preview cards so
Vault shoppers can see the skin motion before spending XP.
========================================== */
(function(){
  'use strict';
  var skins={
    waterSkin:{label:'Flowing Water',motion:'flow'},
    damSkin:{label:'Structural Pulse',motion:'pulse'},
    millSkin:{label:'Turning Gears',motion:'spin'},
    mountainSkin:{label:'Summit Glow',motion:'glow'},
    hotPinkSkin:{label:'Neon Pulse',motion:'neon'},
    babyBlueSkin:{label:'Sky Shimmer',motion:'shimmer'},
    academicSkin:{label:'Academic Gold Ink',motion:'scan'},
    blueprintSkin:{label:'Blueprint Scan',motion:'blueprint'},
    rubySkin:{label:'Ruby Glint',motion:'glint'},
    emeraldSkin:{label:'Emerald Pulse',motion:'emerald'},
    obsidianSkin:{label:'Shadow Sheen',motion:'shadow'},
    goldSkin:{label:'Gold Shimmer',motion:'gold'}
  };
  function cls(id){var s=skins[id];return s?s.motion:''}
  function decorate(card,id){
    var motion=cls(id); if(!card||!motion)return;
    card.setAttribute('data-preview-skin',id);
    card.setAttribute('data-preview-motion',motion);
    card.classList.add('gei-skin-preview', 'skin-'+motion);
    if(!card.querySelector('.previewSpark')){
      var sp=document.createElement('span');sp.className='previewSpark';sp.setAttribute('aria-hidden','true');card.appendChild(sp);
    }
  }
  function auto(){
    document.querySelectorAll('[data-skin-id]').forEach(function(card){decorate(card,card.getAttribute('data-skin-id'))});
  }
  window.GEI_VAULT_PREVIEW={skins:skins,decorate:decorate,refresh:auto};
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',auto);else auto();
  new MutationObserver(auto).observe(document.documentElement,{subtree:true,childList:true});
})();