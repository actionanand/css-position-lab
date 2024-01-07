(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const e of i)if(e.type==="childList")for(const t of e.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&s(t)}).observe(document,{childList:!0,subtree:!0});function c(i){const e={};return i.integrity&&(e.integrity=i.integrity),i.referrerPolicy&&(e.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?e.credentials="include":i.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function s(i){if(i.ep)return;i.ep=!0;const e=c(i);fetch(i.href,e)}})();const r=`<div class="title2"> Demo for Positions & Overflow </div>
<div class="parent2">
  <div class="child-1">Navigation Bar</div>
  <div class="child-2">Background Image</div>
  <div class="child-3">Features</div>
</div>
`,d=`<div class="title1">Demo for Sticky</div>
<div class="parent1">
  <div class="country">USA</div>
  <div class="cities">San Francisco</div>
  <div class="cities">New York</div>
</div>
<div class="parent1">
  <div class="country">France</div>
  <div class="cities">Nice</div>
  <div class="cities">Paris</div>
</div>
<div class="parent1">
  <div class="country">Germany</div>
  <div class="cities">Berlin</div>
  <div class="cities">Munich</div>
</div>`,o=`<div class="title3"> Stacking Context </div>
<div class="stcking">
  <div class="navigation">navigation</div>
  <div class="headline">headline    
      <div class="image-1">image-1</div>
      <div class="image-2">image-2</div>
      <div class="image-3">image-3</div>
  </div>
  <div class="contact-us">contact-us</div>
</div>`;document.querySelector("#sticky").innerHTML=d;document.querySelector("#position").innerHTML=r;document.querySelector("#stacking").innerHTML=o;
