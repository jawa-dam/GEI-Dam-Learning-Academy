/* ==========================================
GEI VAULT / ECONOMY ENGINE v1
Genesis Engineered Interpretations Academy

Owns:
- XP balance and spending
- Level 6 gate
- one-item-per-900-XP vault purchases
- skins, certificate, A'Dam Video Vault unlock state
- future XP purchase hooks

Storage:
  gei-academy-state-v1  -> existing player/progression state
  gei-vault-state-v1    -> economy-only state
========================================== */
(function(){
  'use strict';
  var VAULT_KEY='gei-vault-state-v1';
  var ACADEMY_KEY='gei-academy-state-v1';
  var PRICE=900;
  var ITEMS={
    certificate:{id:'certificate',name:'Official Certificate',type:'certificate',level:6,cost:900},
    adamVideoVault:{id:'adamVideoVault',name:"A'Dam Video Vault",type:'video-vault',level:6,cost:900},
    waterSkin:{id:'waterSkin',name:'Water Skin',type:'skin',level:6,cost:900},
    damSkin:{id:'damSkin',name:'Dam Skin',type:'skin',level:6,cost:900},
    millSkin:{id:'millSkin',name:'Mill Skin',type:'skin',level:6,cost:900},
    mountainSkin:{id:'mountainSkin',name:'Mountain Skin',type:'skin',level:6,cost:900}
  };
  var XP_PACKS={
    starter:{id:'starter',name:'Starter XP',xp:900},
    builder:{id:'builder',name:'Builder XP',xp:2500},
    master:{id:'master',name:'Master XP',xp:5000}
  };

  function safeParse(raw,fallback){try{return raw?JSON.parse(raw):fallback}catch(e){return fallback}}
  function getVault(){
    var fallback={spentXP:0,purchases:[],unlockedIds:[],activeSkin:null};
    try{
      var v=safeParse(localStorage.getItem(VAULT_KEY),fallback);
      if(!v||typeof v!=='object')v=fallback;
      if(!Array.isArray(v.purchases))v.purchases=[];
      if(!Array.isArray(v.unlockedIds))v.unlockedIds=[];
      return v;
    }catch(e){return fallback}
  }
  function saveVault(v){try{localStorage.setItem(VAULT_KEY,JSON.stringify(v));return true}catch(e){return false}}
  function getAcademy(){try{return safeParse(localStorage.getItem(ACADEMY_KEY),null)}catch(e){return null}}
  function getLevel(){
    var a=getAcademy();
    if(!a)return 0;
    if(Array.isArray(a.completed)){
      var max=0;a.completed.forEach(function(n){n=Number(n);if(n>max)max=n});
      return max;
    }
    return Number(a.level||0);
  }
  function xp(){var a=getAcademy();return a?Math.max(0,Number(a.xp||0)):0}
  function setAcademyXP(value){
    var a=getAcademy();if(!a)return false;
    a.xp=Math.max(0,Math.floor(Number(value)||0));
    try{localStorage.setItem(ACADEMY_KEY,JSON.stringify(a));return true}catch(e){return false}
  }
  function isLevel6Complete(){return getLevel()>=6}
  function canAccessVault(){return isLevel6Complete()}
  function isUnlocked(id){return getVault().unlockedIds.indexOf(id)!==-1}
  function getItem(id){return ITEMS[id]||null}
  function listItems(){return Object.keys(ITEMS).map(function(k){return ITEMS[k]})}
  function balance(){return {earnedXP:xp(),spentXP:getVault().spentXP,balance:xp()-getVault().spentXP}}
  function availableXP(){return Math.max(0,balance().balance)}
  function purchase(id){
    var item=getItem(id),v=getVault();
    if(!item)return {ok:false,reason:'unknown-item'};
    if(!canAccessVault())return {ok:false,reason:'level-6-required',item:item,balance:availableXP()};
    if(v.unlockedIds.indexOf(id)!==-1)return {ok:false,reason:'already-unlocked',item:item,balance:availableXP()};
    if(availableXP()<item.cost)return {ok:false,reason:'not-enough-xp',item:item,balance:availableXP(),needed:item.cost-availableXP()};
    v.spentXP+=item.cost;
    v.purchases.push({id:id,cost:item.cost,at:new Date().toISOString()});
    v.unlockedIds.push(id);
    if(item.type==='skin')v.activeSkin=id;
    saveVault(v);
    return {ok:true,reason:'purchased',item:item,balance:availableXP()};
  }
  function setActiveSkin(id){
    var v=getVault();
    if(id!==null&&v.unlockedIds.indexOf(id)===-1)return false;
    v.activeSkin=id;return saveVault(v);
  }
  function activeSkin(){return getVault().activeSkin}
  function reset(){
    try{localStorage.removeItem(VAULT_KEY);return true}catch(e){return false}
  }
  function addXPFromPayment(xpAmount,reference){
    // Payment gateway integration point. This function does not charge money.
    // A trusted payment callback should call this after payment verification.
    var amount=Math.max(0,Math.floor(Number(xpAmount)||0));
    if(!amount)return {ok:false,reason:'invalid-xp'};
    var a=getAcademy();if(!a)return {ok:false,reason:'no-academy-state'};
    a.xp=Number(a.xp||0)+amount;
    try{
      localStorage.setItem(ACADEMY_KEY,JSON.stringify(a));
      return {ok:true,xpAdded:amount,reference:reference||null,balance:availableXP()+amount};
    }catch(e){return {ok:false,reason:'storage-error'}}
  }
  window.GEI_VAULT={
    PRICE:PRICE,ITEMS:ITEMS,XP_PACKS:XP_PACKS,
    getLevel:getLevel,isLevel6Complete:isLevel6Complete,canAccessVault:canAccessVault,
    getItem:getItem,listItems:listItems,isUnlocked:isUnlocked,
    balance:balance,availableXP:availableXP,purchase:purchase,
    setActiveSkin:setActiveSkin,activeSkin:activeSkin,addXPFromPayment:addXPFromPayment,
    reset:reset
  };
})();