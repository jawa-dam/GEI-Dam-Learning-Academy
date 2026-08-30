/* ==========================================
GEI SKIN RENDERER v1
Visual cosmetics layer for GEI Academy.
Reads the equipped skin from GEI_VAULT and
applies premium animated CSS effects without
changing gameplay mechanics.
========================================== */
(function(){
  'use strict';
  var KEY='gei-vault-state-v1';
  var skinClassMap={
    waterSkin:'skin-water',damSkin:'skin-dam',millSkin:'skin-mill',mountainSkin:'skin-mountain',
    hotPinkSkin:'skin-hot-pink',babyBlueSkin:'skin-baby-blue',academicSkin:'skin-academic',
    blueprintSkin:'skin-blueprint',rubySkin:'skin-ruby',emeraldSkin:'skin-emerald',
    obsidianSkin:'skin-obsidian',goldSkin:'skin-gold'
  };
  function read(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
  function currentSkin(){
    if(window.GEI_VAULT&&typeof window.GEI_VAULT.activeSkin==='function')return window.GEI_VAULT.activeSkin();
    var v=read();return v.activeSkin||null;
  }
  function apply(){
    var root=document.documentElement,frame=document.querySelector('.appFrame');
    Object.keys(skinClassMap).forEach(function(id){root.classList.remove(skinClassMap[id]);if(frame)frame.classList.remove(skinClassMap[id])});
    var id=currentSkin(),cls=skinClassMap[id];
    if(cls){root.classList.add(cls);if(frame)frame.classList.add(cls)}
    root.dataset.geiSkin=id||'default';
  }
  function addCss(){
    if(document.getElementById('gei-skin-renderer-css'))return;
    var s=document.createElement('style');s.id='gei-skin-renderer-css';s.textContent='\
      .appFrame{--skinGlow:transparent;position:relative;isolation:isolate}\
      .appFrame::before{content:"";position:absolute;inset:0;pointer-events:none;z-index:0;opacity:0;transition:opacity .25s ease}\
      .appFrame>*{position:relative;z-index:1}\
      .appFrame.skin-water::before{opacity:1;background:radial-gradient(circle at 50% 88%,rgba(34,199,232,.22),transparent 46%);animation:geiWater 3.2s ease-in-out infinite}\
      .appFrame.skin-dam::before{opacity:1;background:linear-gradient(90deg,transparent,rgba(232,163,61,.10),transparent);animation:geiDam 2.8s linear infinite}\
      .appFrame.skin-mill::before{opacity:1;background:conic-gradient(from 0deg,transparent,rgba(232,163,61,.16),transparent 32%);animation:geiMill 4s linear infinite}\
      .appFrame.skin-mountain::before{opacity:1;background:radial-gradient(circle at 50% 12%,rgba(232,163,61,.22),transparent 38%);animation:geiMountain 3s ease-in-out infinite}\
      .appFrame.skin-hot-pink::before{opacity:1;background:radial-gradient(circle at 20% 20%,rgba(255,64,129,.25),transparent 38%),radial-gradient(circle at 80% 80%,rgba(255,64,129,.17),transparent 40%);animation:geiPulse 1.8s ease-in-out infinite}\
      .appFrame.skin-baby-blue::before{opacity:1;background:linear-gradient(160deg,rgba(125,211,252,.23),transparent 48%,rgba(147,197,253,.14));animation:geiShimmer 2.8s ease-in-out infinite}\
      .appFrame.skin-academic::before{opacity:1;background:linear-gradient(90deg,transparent,rgba(245,213,138,.18),transparent);background-size:220% 100%;animation:geiScan 3.5s linear infinite}\
      .appFrame.skin-blueprint::before{opacity:1;background-image:linear-gradient(rgba(34,199,232,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(34,199,232,.08) 1px,transparent 1px);background-size:18px 18px;animation:geiGrid 8s linear infinite}\
      .appFrame.skin-ruby::before{opacity:1;background:radial-gradient(circle at 72% 28%,rgba(220,38,38,.22),transparent 35%);animation:geiPulse 2.3s ease-in-out infinite}\
      .appFrame.skin-emerald::before{opacity:1;background:radial-gradient(circle at 30% 70%,rgba(16,185,129,.20),transparent 38%);animation:geiPulse 2.6s ease-in-out infinite}\
      .appFrame.skin-obsidian::before{opacity:1;background:linear-gradient(135deg,rgba(255,255,255,.05),transparent 42%,rgba(255,255,255,.02));animation:geiScan 4s linear infinite}\
      .appFrame.skin-gold::before{opacity:1;background:linear-gradient(105deg,transparent 35%,rgba(255,236,179,.24) 48%,transparent 61%);background-size:240% 100%;animation:geiScan 3s linear infinite}\
      .appFrame.skin-water .topbar,.appFrame.skin-hot-pink .topbar,.appFrame.skin-baby-blue .topbar,.appFrame.skin-academic .topbar,.appFrame.skin-blueprint .topbar,.appFrame.skin-gold .topbar{box-shadow:0 0 18px var(--aqua)}\
      .skin-water .dayDot.cur{animation:geiDot 1.7s ease-in-out infinite}\
      .skin-mill .avatarChip{animation:geiGear 3.2s linear infinite}\
      .skin-mountain .avatarChip{animation:geiFloat 2.8s ease-in-out infinite}\
      .skin-hot-pink .avatarChip{animation:geiPink 1.25s ease-in-out infinite}\
      .skin-baby-blue .avatarChip{animation:geiFloat 2.4s ease-in-out infinite}\
      .skin-academic .avatarChip,.skin-gold .avatarChip{animation:geiGlow 2s ease-in-out infinite}\
      .skin-blueprint .avatarChip{animation:geiBlueprint 2.6s ease-in-out infinite}\
      @keyframes geiWater{50%{transform:translateY(-5px);opacity:.75}}\
      @keyframes geiDam{from{transform:translateX(-70%)}}to{transform:translateX(70%)}}\
      @keyframes geiMill{to{transform:rotate(360deg)}}\
      @keyframes geiMountain{50%{transform:scale(1.03);opacity:.65}}\
      @keyframes geiPulse{50%{opacity:.52;transform:scale(1.015)}}\
      @keyframes geiShimmer{50%{transform:translateX(4%)}}\
      @keyframes geiScan{from{background-position:-120% 0}to{background-position:120% 0}}\
      @keyframes geiGrid{to{background-position:18px 18px}}\
      @keyframes geiDot{50%{box-shadow:0 0 12px rgba(34,199,232,.8)}}\
      @keyframes geiGear{to{transform:rotate(360deg)}}\
      @keyframes geiFloat{50%{transform:translateY(-4px)}}\
      @keyframes geiPink{50%{transform:scale(1.08);box-shadow:0 0 18px rgba(255,64,129,.65)}}\
      @keyframes geiGlow{50%{box-shadow:0 0 18px rgba(255,214,102,.7)}}\
      @keyframes geiBlueprint{50%{box-shadow:0 0 18px rgba(34,199,232,.55)}}\
      @media(prefers-reduced-motion:reduce){.appFrame::before,.avatarChip,.dayDot.cur{animation:none!important}.appFrame{transition:none}}\
    ';
    document.head.appendChild(s);
  }
  function init(){addCss();apply();window.addEventListener('storage',function(e){if(e.key===KEY)apply()});document.addEventListener('visibilitychange',function(){if(!document.hidden)apply()})}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
  window.GEI_SKIN_RENDERER={apply:apply,currentSkin:currentSkin};
})();