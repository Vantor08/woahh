
var ICONS={
 check:'<polyline points="4 12 10 17.5 20 6.5"/>',
 check_circle:'<polyline points="4 12 10 17.5 20 6.5"/>',
 verified:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 verified_user:'<path d="M12 3l6.5 2.8v4.7c0 4.3-2.8 7.1-6.5 8.5-3.7-1.4-6.5-4.2-6.5-8.5V5.8z"/><polyline points="9 12 11.3 14.3 15.5 9.5"/>',
 science:'<path d="M9 3h6M10 3v5.5L5.3 16.8A2 2 0 0 0 7 20h10a2 2 0 0 0 1.7-3.2L14 8.5V3"/><path d="M8 14h8"/>',
 battery_2_bar:'<rect x="3" y="7" width="15.5" height="10" rx="2"/><path d="M21 10.5v3"/><rect x="5.3" y="9.3" width="5" height="5.4" rx="1" fill="currentColor" stroke="none"/>',
 sentiment_dissatisfied:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16c1.6-1.4 4.8-1.4 6.4 0"/>',
 sentiment_sad:'<circle cx="12" cy="12" r="8.5"/><circle cx="9" cy="10" r=".9" fill="currentColor" stroke="none"/><circle cx="15" cy="10" r=".9" fill="currentColor" stroke="none"/><path d="M8.8 16.3c1.6-1.6 4.8-1.6 6.4 0"/><path d="M6.6 12.5c0 1-.9 1.6-.9 2.6"/>',
 medication:'<path d="M5 13.2 13.2 5a4 4 0 0 1 5.8 5.8L10.8 19A4 4 0 0 1 5 13.2z"/><path d="M9 9l6 6"/>',
 spa:'<circle cx="12" cy="12" r="2.6"/><path d="M12 9.4V4M12 14.6V20M9.4 12H4M14.6 12H20"/>',
 bolt:'<path d="M13 2 4.5 13.5H10l-1 8.5L19.5 10H13z" fill="currentColor" stroke="none"/>',
 favorite:'<path d="M12 20.5S4.5 15.8 4.5 10A3.9 3.9 0 0 1 12 7.6 3.9 3.9 0 0 1 19.5 10c0 5.8-7.5 10.5-7.5 10.5z"/>',
 grain:'<path d="M12 3c4 5 6 8 6 11a6 6 0 0 1-12 0c0-3 2-6 6-11z"/><path d="M12 10v8"/>',
 psychology:'<path d="M12 3l1.5 5.3L19 10l-5.5 1.7L12 17l-1.5-5.3L5 10l5.5-1.7z" fill="currentColor" stroke="none"/>',
 coffee:'<path d="M5 8h11v5a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"/><path d="M16 9h2.2a2 2 0 0 1 0 4H16"/><path d="M7 3v2M11 3v2"/>',
 nutrition:'<path d="M12 8.2c-3-2.2-7.5 0-7.5 4.3C4.5 16.5 7.8 20 10 20c1 0 1.2-.6 2-.6s1 .6 2 .6c2.2 0 5.5-3.5 5.5-7.5 0-4.3-4.5-6.5-7.5-4.3z"/><path d="M12 8.2c0-2 1.2-3.2 3.2-3.7"/>',
 eco:'<path d="M5.5 19c0-8 6-13.5 14-13.5 0 8.5-5.5 14.5-13.5 14.5-.6 0-1.4-.2-.5-1z"/><path d="M9.5 15.5c2-2.3 4.3-3.6 7-4.5"/>',
 play_circle:'<circle cx="12" cy="12" r="8.5"/><path d="M10 8.5l5.5 3.5L10 15.5z" fill="currentColor" stroke="none"/>',
 add:'<path d="M12 5v14M5 12h14"/>',
 photo_camera:'<rect x="3" y="7.5" width="18" height="12.5" rx="2.5"/><circle cx="12" cy="13.5" r="3.5"/><path d="M8 7.5 9.5 5h5L16 7.5"/>',
 image:'<rect x="3" y="5" width="18" height="14" rx="2.5"/><circle cx="8" cy="10" r="1.7"/><path d="M4.5 17.5 10 12l4 4 2.5-2.5 3 3"/>'
};

(function(){
 document.querySelectorAll('.msym').forEach(function(s){
   var n=(s.textContent||'').trim(), d=ICONS[n]; if(!d)return;
   s.innerHTML='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+d+'</svg>';
 });
})();

function setView(v){
  document.body.dataset.view=v;window.scrollTo(0,0);
  document.querySelector('.nl-shop').classList.toggle('active',v==='product');
  document.querySelector('.nl-home').classList.toggle('active',v==='home');
}
function scrollToId(id){var el=document.getElementById(id);if(el)el.scrollIntoView({behavior:'smooth'});}
function goProduct(id){setView('product');setTimeout(function(){scrollToId(id)},60);}

// FAQ accordion
document.querySelectorAll('.faq-q').forEach(function(q){
  q.addEventListener('click',function(){q.parentElement.classList.toggle('open')});
});

// Kit selector
document.querySelectorAll('.kit').forEach(function(k){
  k.addEventListener('click',function(){
    document.querySelectorAll('.kit').forEach(function(x){x.classList.remove('sel')});
    k.classList.add('sel');
  });
});

// Subscribe/one-time selector + cart button price + once-bags visibility
var cartBtn = document.getElementById('addcartBtn');
var oncePriceEl = document.querySelector('.once-price');
var onceSubEl = document.querySelector('.once-sub');

document.querySelectorAll('.buyopt').forEach(function(o){
  o.addEventListener('click',function(){
    document.querySelectorAll('.buyopt').forEach(function(x){x.classList.remove('sel')});
    o.classList.add('sel');
    if(o.dataset.opt==='sub'){
      // get active sub bags button
      var activeSubBag=o.querySelector('.bags button.on');
      var subPrices={'1 pouch':'$23.99','2 pouches':'$39.99','3+1 free':'$63.99'};
      var label=activeSubBag?activeSubBag.textContent.trim():'1 pouch';
      if(cartBtn) cartBtn.textContent='Add to cart — '+(subPrices[label]||'$23.99');
    } else {
      // one-time
      var activeOnce=o.querySelector('.once-bags button.on');
      var oncePrice=activeOnce?activeOnce.dataset.price:'$29.99';
      var onceLabel=activeOnce?activeOnce.dataset.label:'1 pouch · $1.50 / serving';
      if(oncePriceEl) oncePriceEl.textContent=oncePrice;
      if(onceSubEl) onceSubEl.textContent=onceLabel;
      if(cartBtn) cartBtn.textContent='Add to cart — '+oncePrice;
    }
  });
});

// Subscribe bags
document.querySelectorAll('.buyopt[data-opt="sub"] .bags button').forEach(function(b){
  b.addEventListener('click',function(e){
    e.stopPropagation();
    this.closest('.bags').querySelectorAll('button').forEach(function(x){x.classList.remove('on')});
    this.classList.add('on');
    var subPrices={'1 pouch':'$23.99','2 pouches':'$39.99','3+1 free':'$63.99'};
    var label=this.textContent.trim();
    if(cartBtn && document.querySelector('.buyopt[data-opt="sub"]').classList.contains('sel')){
      cartBtn.textContent='Add to cart — '+(subPrices[label]||'$23.99');
    }
  });
});

// One-time bags
document.querySelectorAll('.once-bags button').forEach(function(b){
  b.addEventListener('click',function(e){
    e.stopPropagation();
    this.closest('.once-bags').querySelectorAll('button').forEach(function(x){x.classList.remove('on')});
    this.classList.add('on');
    var price=this.dataset.price||'$29.99';
    var label=this.dataset.label||'';
    if(oncePriceEl) oncePriceEl.textContent=price;
    if(onceSubEl) onceSubEl.textContent=label;
    if(cartBtn && document.querySelector('.buyopt[data-opt="once"]').classList.contains('sel')){
      cartBtn.textContent='Add to cart — '+price;
    }
  });
});

// Self-check
function scCount(){}
function scReveal(){
  var n=document.querySelectorAll('.scitem.on').length;
  var t=document.getElementById('sctext');
  if(n>=3){t.textContent="That's exactly who Vallore is made for. You don't have to brace for the bad weeks anymore.";}
  else if(n>=1){t.textContent="Even one of these is worth feeling steadier about. Vallore was built for exactly this.";}
  else{t.textContent="If any of this ever sounds like you, Vallore was made for those days.";}
  document.getElementById('scresult').classList.add('show');
}


function syncSupply(){var o=document.querySelector('.buyopt[data-opt="sub"]');var b=o.querySelector('.bags button.on');var q=b?b.textContent.trim():'1 pouch';var d={'1 pouch':20,'2 pouches':40,'3+1 free':80}[q];var p={'1 pouch':'$23.99','2 pouches':'$39.99','3+1 free':'$63.99'}[q];o.querySelector('.sub').textContent='Ships every '+d+' days · free shipping · cancel anytime';o.querySelector('.pr').textContent=p;}
document.querySelectorAll('.bags button').forEach(function(b){b.addEventListener('click',syncSupply)});syncSupply();


function selectGallery(button){
 var picture=button.querySelector('img');
 var main=document.getElementById('gallery-image');
 main.src=picture.src;main.alt=picture.alt;
 document.querySelectorAll('.gallery-thumb').forEach(function(b){var selected=b===button;b.classList.toggle('selected',selected);b.setAttribute('aria-pressed',String(selected));});
}

var cartPreviewIndex=0;
var cartPreviewPrices={once:[29.99,44.99,69.99],sub:[23.99,39.99,63.99]};
function openCartDrawer(){var option=document.querySelector('.buyopt.sel');var sub=option.dataset.opt==='sub';var buttons=Array.from(option.querySelectorAll(sub?'.bags button':'.once-bags button'));cartPreviewIndex=Math.max(0,buttons.findIndex(b=>b.classList.contains('on')));document.getElementById('cd-subscribe').checked=sub;document.getElementById('cd-notice').hidden=true;updateCartPreview();document.getElementById('cart-drawer').showModal();document.body.style.overflow='hidden';}
function updateCartPreview(){var sub=document.getElementById('cd-subscribe').checked,i=cartPreviewIndex,days=[20,40,80][i];var once=cartPreviewPrices.once[i],recurring=cartPreviewPrices.sub[i],price=sub?recurring:once;var money=n=>'$'+n.toFixed(2);document.getElementById('cd-bundle').textContent=['1 pouch · 20 servings','2 pouches · 40 servings','3+1 free · 80 servings'][i];document.getElementById('cd-type').textContent=sub?'Subscription · every '+days+' days':'One-time purchase';document.getElementById('cd-line-price').textContent=money(price);document.getElementById('cd-total').textContent=money(price);document.getElementById('cd-savings').textContent=money(recurring)+' per delivery · save '+money(once-recurring)+' vs. one-time';document.getElementById('cd-plan').textContent=sub?'Recurring charge: '+money(recurring)+' every '+days+' days, plus applicable taxes and shipping. Cancel anytime.':'Optional: receive this bundle every '+days+' days for '+money(recurring)+' per delivery, plus applicable taxes and shipping. Cancel anytime.';document.getElementById('cd-notice').hidden=true;}
function closeCartDrawer(){if(!document.getElementById('cd-checkout').disabled)document.getElementById('cart-drawer').close();}
document.getElementById('cart-drawer').addEventListener('close',function(){document.body.style.overflow='';});
document.getElementById('cart-drawer').addEventListener('cancel',function(e){if(document.getElementById('cd-checkout').disabled)e.preventDefault();});
document.getElementById('cart-drawer').addEventListener('click',function(e){var r=this.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)closeCartDrawer();});
async function checkoutCartDrawer(){
 const button=document.getElementById('cd-checkout'),notice=document.getElementById('cd-notice'),toggle=document.getElementById('cd-subscribe');
 if(button.disabled)return;
 try{
 const config=JSON.parse(document.getElementById('vallore-commerce').textContent);
 const sub=toggle.checked,mapping=(sub?config.sub:config.once)[cartPreviewIndex];
 if(!mapping||!/^\d+$/.test(String(mapping.id)))throw new Error('This bundle is not connected yet. Please contact the store before ordering.');
 if(sub&&!/^\d+$/.test(String(mapping.plan)))throw new Error('This subscription is not connected yet. Please select one-time purchase or contact the store.');
 const root=window.Shopify&&window.Shopify.routes?window.Shopify.routes.root:'/';
 button.disabled=true;toggle.disabled=true;button.textContent='Preparing checkout…';notice.hidden=false;notice.textContent='Confirming your bundle…';
 const variantResponse=await fetch(root+'variants/'+encodeURIComponent(mapping.id)+'.js',{headers:{Accept:'application/json'}});
 if(!variantResponse.ok)throw new Error('Unable to verify this bundle. Please contact the store.');
 const variant=await variantResponse.json();
 if(!variant.available)throw new Error('This bundle is currently unavailable.');
 let actual=variant.price;
 if(sub){const allocation=(variant.selling_plan_allocations||[]).find(a=>String(a.selling_plan_id)===String(mapping.plan));if(!allocation)throw new Error('The subscription plan is not available for this bundle.');actual=allocation.price;}
 const expected=Math.round(cartPreviewPrices[sub?'sub':'once'][cartPreviewIndex]*100);
 if(Number(actual)!==expected)throw new Error('The store price has changed. Please contact the store before ordering.');
 const item={id:String(mapping.id),quantity:1};if(sub)item.selling_plan=String(mapping.plan);
 const response=await fetch(root+'cart/add.js',{method:'POST',headers:{'Content-Type':'application/json',Accept:'application/json'},body:JSON.stringify({items:[item]})});
 const result=await response.json();if(!response.ok)throw new Error(result.description||result.message||'Unable to add this bundle. Please try again.');
 button.textContent='Opening checkout…';window.location.assign(root+'checkout');
 }catch(error){notice.hidden=false;notice.textContent=error.message;button.disabled=false;toggle.disabled=false;button.textContent='Checkout →';}
}
