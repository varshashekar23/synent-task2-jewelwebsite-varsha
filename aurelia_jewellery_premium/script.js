const PRODUCTS={
solstice:{name:"Solstice Ring",price:2850,cat:"RING / 18K GOLD / DIAMOND",desc:"A sculptural solitaire with a brilliant round centre stone and a warm gold profile.",material:"18K yellow gold and brilliant-cut diamond.",photo:"jewel-solstice"},
etoile:{name:"Étoile Band",price:1890,cat:"RING / WHITE GOLD / DIAMOND",desc:"A refined pavé band designed as a constellation of light.",material:"18K white gold and diamonds.",photo:"jewel-etoile"},
aurora:{name:"Aurora Signet",price:4550,cat:"RING / GOLD / EMERALD",desc:"A bold signet silhouette crowned by a vivid emerald.",material:"18K yellow gold and emerald.",photo:"jewel-aurora"},
violet:{name:"Violet Bloom",price:3890,cat:"RING / GOLD / RUBY",desc:"A floral cocktail ring with a saturated ruby centre.",material:"18K yellow gold, ruby and diamond accents.",photo:"jewel-violet"},
seraph:{name:"Seraph Halo",price:4290,cat:"RING / WHITE GOLD / SAPPHIRE",desc:"A deep-blue sapphire framed by a luminous diamond halo.",material:"18K white gold, sapphire and diamonds.",photo:"jewel-seraph"},
luna:{name:"Luna Solitaire",price:3250,cat:"RING / ROSE GOLD / DIAMOND",desc:"A clean rose-gold solitaire made for understated brilliance.",material:"18K rose gold and diamond.",photo:"jewel-luna"},
cassia:{name:"Cassia Emerald Cut",price:4980,cat:"RING / WHITE GOLD / EMERALD",desc:"An architectural emerald-cut stone set for maximum light.",material:"18K white gold, emerald and diamonds.",photo:"jewel-cassia"},
celestine:{name:"Celestine Ruby Halo",price:4650,cat:"RING / WHITE GOLD / RUBY",desc:"A vivid ruby surrounded by a fine diamond halo.",material:"18K white gold, ruby and diamonds.",photo:"jewel-celestine"},
nocturne:{name:"Nocturne Sapphire",price:5180,cat:"RING / GOLD / SAPPHIRE",desc:"A dramatic sapphire statement ring with a gallery-like setting.",material:"18K yellow gold and sapphire.",photo:"jewel-nocturne"},
atelier:{name:"Atelier Pavé",price:2780,cat:"RING / GOLD / DIAMOND",desc:"A contemporary pavé band with a low-profile silhouette.",material:"18K yellow gold and diamonds.",photo:"jewel-atelier"},
marquise:{name:"Marquise Solitaire",price:3650,cat:"RING / ROSE GOLD / DIAMOND",desc:"An elongated centre stone gives this solitaire a graceful vertical line.",material:"18K rose gold and diamond.",photo:"jewel-marquise"},
verona:{name:"Verona Sculptural",price:4120,cat:"RING / GOLD / DIAMOND",desc:"A sculptural open ring balancing polished gold and brilliant stones.",material:"18K yellow gold and diamonds.",photo:"jewel-verona"},
celeste:{name:"Celeste Pendant",price:3420,cat:"NECKLACE / GOLD / SAPPHIRE",desc:"A luminous pendant centred by a deep blue sapphire.",material:"18K gold, sapphire and diamond accents.",photo:"jewel-celeste"},
sol:{name:"Sol Chain",price:2650,cat:"NECKLACE / 18K GOLD",desc:"A classic fine chain with a contemporary weight and luminous polish.",material:"18K yellow gold.",photo:"jewel-sol"},
serena:{name:"Serena Collar",price:3950,cat:"NECKLACE / GOLD / DIAMOND",desc:"A close-to-the-skin collar designed as a quiet line of light.",material:"18K gold and diamonds.",photo:"jewel-serena"},
celestechain:{name:"Celeste Chain",price:4980,cat:"NECKLACE / WHITE GOLD / DIAMOND",desc:"A generous expression of the Celeste line, finished with delicate diamonds.",material:"18K white gold and diamonds.",photo:"jewel-celestechain"},
oriana:{name:"Oriana Lariat",price:3650,cat:"NECKLACE / ROSE GOLD / PEARL",desc:"A fluid lariat pairing warm metal with luminous pearls.",material:"18K rose gold and freshwater pearls.",photo:"jewel-oriana"},
bianca:{name:"Bianca Pendant",price:4380,cat:"NECKLACE / WHITE GOLD / DIAMOND",desc:"A refined pendant with a floating diamond focal point.",material:"18K white gold and diamond.",photo:"jewel-bianca"},
lumiere:{name:"Lumière Hoops",price:2190,cat:"EARRINGS / GOLD / DIAMOND",desc:"Fluid gold hoops designed to catch light with every movement.",material:"18K gold and brilliant-cut diamonds.",photo:"jewel-lumiere"},
elise:{name:"Elise Drops",price:2350,cat:"EARRINGS / GOLD / PEARL",desc:"Elegant drops pairing luminous pearls with a sculptural gold frame.",material:"18K gold and freshwater pearls.",photo:"jewel-elise"},
valentina:{name:"Valentina Studs",price:2890,cat:"EARRINGS / ROSE GOLD / DIAMOND",desc:"Precise rose-gold studs with a soft feminine profile.",material:"18K rose gold and diamonds.",photo:"jewel-valentina"},
marais:{name:"Marais Hoops",price:3350,cat:"EARRINGS / GOLD / SAPPHIRE",desc:"Contemporary hoops accented with luminous blue sapphires.",material:"18K gold and sapphires.",photo:"jewel-marais"},
chiara:{name:"Chiara Pearls",price:3180,cat:"EARRINGS / WHITE GOLD / PEARL",desc:"Sculptural pearl drops finished with a fine white-gold frame.",material:"18K white gold and pearls.",photo:"jewel-chiara"},
alba:{name:"Alba Ear Cuffs",price:2460,cat:"EARRINGS / GOLD / DIAMOND",desc:"A polished ear cuff set with a discreet line of diamonds.",material:"18K yellow gold and diamonds.",photo:"jewel-alba"},
seraphine:{name:"Seraphine Cuff",price:2980,cat:"BRACELET / ROSE GOLD",desc:"A sculptural cuff with a softly tapered silhouette.",material:"18K rose gold.",photo:"jewel-seraphine"},
milano:{name:"Milano Chain",price:3180,cat:"BRACELET / WHITE GOLD",desc:"A modern chain bracelet with an understated architectural rhythm.",material:"18K white gold.",photo:"jewel-milano"},
lumina:{name:"Lumina Tennis",price:3650,cat:"BRACELET / GOLD / DIAMOND",desc:"A refined line of diamonds designed to move like light.",material:"18K gold and brilliant-cut diamonds.",photo:"jewel-lumina"},
rosa:{name:"Rosa Bracelet",price:4250,cat:"BRACELET / ROSE GOLD / DIAMOND",desc:"A graceful rose-gold bracelet with a soft line of brilliant diamonds.",material:"18K rose gold and diamonds.",photo:"jewel-rosa"},
isola:{name:"Isola Bangle",price:3890,cat:"BRACELET / GOLD / DIAMOND",desc:"A clean bangle silhouette punctuated with subtle pavé detail.",material:"18K yellow gold and diamonds.",photo:"jewel-isola"},
"aurora-bracelet":{name:"Aurora Link",price:4520,cat:"BRACELET / WHITE GOLD / SAPPHIRE",desc:"A luminous link bracelet accented by cool blue stones.",material:"18K white gold and sapphires.",photo:"jewel-aurora-bracelet"}
};
const money=n=>"€ "+Number(n).toLocaleString("en-US");
const getBag=()=>JSON.parse(localStorage.getItem("aureliaJewelleryBag")||"[]");
const saveBag=b=>{localStorage.setItem("aureliaJewelleryBag",JSON.stringify(b));updateBagCount()};
const getWishes=()=>JSON.parse(localStorage.getItem("aureliaJewelleryWishes")||"[]");
const saveWishes=w=>{localStorage.setItem("aureliaJewelleryWishes",JSON.stringify(w));updateWishCount()};
function updateBagCount(){const n=getBag().reduce((n,i)=>n+i.qty,0);document.querySelectorAll(".bag-count").forEach(x=>{x.textContent=n;x.classList.toggle("has-items",n>0)})}
function updateWishCount(){const n=getWishes().length;document.querySelectorAll(".wish-count").forEach(x=>{x.textContent=n;x.classList.toggle("has-items",n>0)})}
updateBagCount();updateWishCount();

window.addEventListener("load",()=>setTimeout(()=>document.querySelector(".page-loader")?.classList.add("done"),500));
const gate=document.getElementById("welcomeGate");
if(gate){
 const seen=sessionStorage.getItem("aureliaJewelleryGate");
 if(seen){
   gate.classList.add("gate-hidden");
   document.body.classList.add("hero-ready");
 }else{
   setTimeout(()=>gate.classList.add("intro-finished"),2300);
   setTimeout(()=>document.body.classList.add("hero-ready"),2450);
 }
 const leaveGate=()=>{
   sessionStorage.setItem("aureliaJewelleryGate","1");
   gate.classList.add("gate-leaving");
   document.body.classList.add("hero-ready");
   setTimeout(()=>gate.classList.add("gate-hidden"),1300);
 };
 gate.querySelector(".gate-guest")?.addEventListener("click",leaveGate);
 gate.querySelector(".gate-enter")?.addEventListener("click",leaveGate);
}
document.querySelectorAll(".menu-trigger").forEach(b=>b.addEventListener("click",()=>document.querySelector(".mobile-menu")?.classList.add("open")));
document.querySelectorAll(".menu-close").forEach(b=>b.addEventListener("click",()=>document.querySelector(".mobile-menu")?.classList.remove("open")));
document.querySelectorAll(".mobile-menu a").forEach(a=>a.addEventListener("click",()=>document.querySelector(".mobile-menu")?.classList.remove("open")));

const searchPanel=document.querySelector(".search-panel");
document.querySelectorAll(".search-trigger").forEach(b=>b.addEventListener("click",()=>searchPanel?.classList.add("open")));
document.querySelector(".search-close")?.addEventListener("click",()=>searchPanel?.classList.remove("open"));
const searchInput=document.getElementById("searchInput"),searchResults=document.getElementById("searchResults");
searchInput?.addEventListener("input",()=>{
 const q=searchInput.value.toLowerCase().trim();
 if(!q){searchResults.innerHTML='<p class="search-hint">Search rings, necklaces, earrings, bracelets or gemstones.</p>';return}
 const hits=Object.entries(PRODUCTS).filter(([id,p])=>(id+" "+p.name+" "+p.cat+" "+p.material+" "+p.desc).toLowerCase().includes(q));
 searchResults.innerHTML=hits.length
  ? `<div class="search-count">${hits.length} PIECE${hits.length===1?"":"S"} FOUND</div>`+hits.map(([id,p])=>`<a class="search-result" href="product.html?id=${id}"><span><small>${p.cat}</small><strong>${p.name}</strong></span><b>${money(p.price)}</b><i>↗</i></a>`).join("")
  : '<p class="search-empty">No pieces found. Try “ring”, “diamond”, “gold” or a collection name.</p>';
});

document.querySelectorAll('a[href$=".html"],a[href*=".html?"]').forEach(a=>a.addEventListener("click",e=>{
 if(a.target==="_blank"||a.getAttribute("href").startsWith("#"))return;
 const wipe=document.querySelector(".page-wipe");if(!wipe)return;e.preventDefault();wipe.classList.add("active");setTimeout(()=>location.href=a.href,550);
}));
const observer=new IntersectionObserver(entries=>entries.forEach(x=>{if(x.isIntersecting)x.target.classList.add("visible")}),{threshold:.08});
document.querySelectorAll(".reveal").forEach(x=>observer.observe(x));

function applyCollectionFilter(f, scroll=false){
 const valid=["all","rings","necklaces","earrings","bracelets"];
 if(!valid.includes(f)) f="all";
 document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x.dataset.filter===f));
 document.querySelectorAll(".collection-block").forEach(section=>{
   const sectionCat=section.dataset.collection;
   const sectionVisible=f==="all"||sectionCat===f;
   section.style.display=sectionVisible?"block":"none";
   section.querySelectorAll(".catalog-card").forEach(card=>card.style.display=sectionVisible?"block":"none");
 });
 if(scroll && f!=="all"){
   setTimeout(()=>document.getElementById(f)?.scrollIntoView({behavior:"smooth",block:"start"}),120);
 }
}
document.querySelectorAll(".filters button").forEach(btn=>btn.addEventListener("click",()=>{
 applyCollectionFilter(btn.dataset.filter, true);
 const url=new URL(location.href);
 if(btn.dataset.filter==="all") url.searchParams.delete("filter");
 else url.searchParams.set("filter",btn.dataset.filter);
 history.replaceState({}, "", url);
}));
const initialFilter=new URLSearchParams(location.search).get("filter");
if(initialFilter) applyCollectionFilter(initialFilter, true);
document.getElementById("sortProducts")?.addEventListener("change",e=>{
 const v=e.target.value;
 document.querySelectorAll(".catalog-grid").forEach(grid=>{
   const cards=[...grid.querySelectorAll(".catalog-card")];
   cards.sort((a,b)=>v==="low"?+a.dataset.price-+b.dataset.price:v==="high"?+b.dataset.price-+a.dataset.price:0);
   cards.forEach(c=>grid.appendChild(c));
 });
});

document.querySelectorAll("[data-wish]").forEach(btn=>{
 const id=btn.dataset.wish;
 if(getWishes().includes(id)){btn.classList.add("wished");btn.textContent="♥"}
 btn.addEventListener("click",e=>{
   e.preventDefault();e.stopPropagation();
   let w=getWishes();w=w.includes(id)?w.filter(x=>x!==id):[...w,id];saveWishes(w);
   btn.classList.toggle("wished");btn.textContent=w.includes(id)?"♥":"♡";
 });
});

const productId=new URLSearchParams(location.search).get("id")||"solstice";
if(document.getElementById("productName")){
 const p=PRODUCTS[productId]||PRODUCTS.solstice;
 document.title=p.name+" — AURELIA";
 document.getElementById("productName").textContent=p.name;
 document.getElementById("productPrice").textContent=money(p.price);
 document.getElementById("productCategory").textContent=p.cat;
 document.getElementById("productDescription").textContent=p.desc;
 document.getElementById("material").textContent=p.material;
 document.getElementById("mainProductImage").className="large-jewel-image "+p.photo;
 let qty=1;
 document.querySelectorAll("[data-quantity]").forEach(b=>b.addEventListener("click",()=>{qty=Math.max(1,qty+Number(b.dataset.quantity));document.getElementById("quantity").textContent=qty}));
 document.querySelectorAll(".metal").forEach(s=>s.addEventListener("click",()=>{document.querySelectorAll(".metal").forEach(x=>x.classList.remove("selected"));s.classList.add("selected");document.getElementById("selectedMetal").textContent=s.dataset.metal}));
 document.querySelectorAll(".stone").forEach(s=>s.addEventListener("click",()=>{
   document.querySelectorAll(".stone").forEach(x=>x.classList.remove("selected"));s.classList.add("selected");
   document.getElementById("selectedStone").textContent=s.dataset.stone;
   const img=document.getElementById("mainProductImage");
   const stoneMap={Diamond:"https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1700&q=90",Sapphire:"https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1700&q=90",Emerald:"https://images.unsplash.com/photo-1603561596112-db0d7f8e5b6d?auto=format&fit=crop&w=1700&q=90",Ruby:"https://images.unsplash.com/photo-1602173574767-37ac01994b2a?auto=format&fit=crop&w=1700&q=90"};
   img.style.backgroundImage=`url("${stoneMap[s.dataset.stone]}")`;img.classList.add("stone-change");setTimeout(()=>img.classList.remove("stone-change"),650);
 }));
 document.querySelectorAll(".thumb").forEach(t=>t.addEventListener("click",()=>{const c=[...t.classList].find(x=>x.startsWith("jewel-"));document.getElementById("mainProductImage").className="large-jewel-image "+c}));
 document.getElementById("addToBag").addEventListener("click",()=>{
   const metal=document.getElementById("selectedMetal").textContent,stone=document.getElementById("selectedStone").textContent;
   let bag=getBag(),item=bag.find(x=>x.id===productId&&x.metal===metal&&x.stone===stone);
   item?item.qty+=qty:bag.push({id:productId,metal,stone,qty});saveBag(bag);
   const b=document.getElementById("addToBag");b.innerHTML="Added to shopping bag ✓";setTimeout(()=>b.innerHTML="Add to shopping bag <span>→</span>",1600);
 });
 document.getElementById("productWish").addEventListener("click",()=>{
   let w=getWishes();w=w.includes(productId)?w.filter(x=>x!==productId):[...w,productId];saveWishes(w);
   document.getElementById("productWish").textContent=w.includes(productId)?"♥ Saved to wishlist":"♡ Add to wishlist";
 });
}

function renderWishlist(){
 const grid=document.getElementById("wishlistGrid");if(!grid)return;
 const wishes=getWishes();
 if(!wishes.length){grid.innerHTML=`<div class="empty-wishlist"><div class="empty-heart">♡</div><h2>Nothing saved yet.</h2><p>When a piece stays on your mind, save it here.</p><a class="btn btn-light" href="shop.html">Discover jewellery <span>↗</span></a></div>`;return}
 grid.innerHTML=wishes.map(id=>{const p=PRODUCTS[id];if(!p)return"";return `<article class="wish-card"><a href="product.html?id=${id}"><div class="wish-photo ${p.photo}"><span>VIEW PIECE</span></div></a><div class="wish-meta"><div><small>${p.cat}</small><h2>${p.name}</h2></div><div class="wish-actions"><b>${money(p.price)}</b><button data-remove-wish="${id}">♥</button></div></div></article>`}).join("");
 document.querySelectorAll("[data-remove-wish]").forEach(btn=>btn.addEventListener("click",()=>{saveWishes(getWishes().filter(x=>x!==btn.dataset.removeWish));renderWishlist()}));
}
renderWishlist();

function renderCart(){
 const target=document.getElementById("cartContent");if(!target)return;
 const bag=getBag();
 if(!bag.length){target.innerHTML=`<div class="empty-bag"><h2>Your bag is waiting.</h2><p>Discover a piece worthy of it.</p><a class="btn btn-light" href="shop.html">Explore jewellery <span>↗</span></a></div>`;return}
 let total=0;
 const rows=bag.map((item,index)=>{const p=PRODUCTS[item.id];if(!p)return"";const line=p.price*item.qty;total+=line;return `<div class="cart-item"><div class="cart-img ${p.photo}"></div><div><small>${p.cat}</small><h2>${p.name}</h2><p>${item.metal} · ${item.stone}</p><div class="cart-controls"><span>QUANTITY</span><button class="qty-btn" data-cart-qty="${index}" data-delta="-1" aria-label="Decrease quantity">−</button><b>${item.qty}</b><button class="qty-btn" data-cart-qty="${index}" data-delta="1" aria-label="Increase quantity">+</button></div><button class="remove-item" data-remove="${index}">Remove</button></div><div class="item-price">${money(line)}</div></div>`}).join("");
 target.innerHTML=`<div class="cart-layout"><div>${rows}</div><aside class="cart-summary"><p class="eyebrow">YOUR ORDER</p><h3>Ready when you are.</h3><div class="summary-line"><span>Pieces</span><b>${bag.reduce((n,i)=>n+i.qty,0)}</b></div><div class="summary-line"><span>Subtotal</span><b>${money(total)}</b></div><div class="summary-line"><span>Delivery</span><b>Complimentary</b></div><div class="summary-total"><span>Total</span><b>${money(total)}</b></div><a class="primary-button" href="checkout.html">Proceed to checkout <span>→</span></a></aside></div>`;
 document.querySelectorAll("[data-cart-qty]").forEach(b=>b.addEventListener("click",()=>{let x=getBag(),i=x[+b.dataset.cartQty];if(!i)return;i.qty=Math.max(1,i.qty+Number(b.dataset.delta));saveBag(x);renderCart()}));
 document.querySelectorAll("[data-remove]").forEach(b=>b.addEventListener("click",()=>{let x=getBag();x.splice(+b.dataset.remove,1);saveBag(x);renderCart()}));
}
renderCart();

function renderCheckout(){
 const box=document.getElementById("checkoutItems");if(!box)return;let total=0;
 box.innerHTML=getBag().map(i=>{const p=PRODUCTS[i.id],line=p.price*i.qty;total+=line;return `<div class="summary-item"><span>${p.name} × ${i.qty}</span><b>${money(line)}</b></div>`}).join("");
 document.getElementById("subtotal").textContent=money(total);document.getElementById("total").textContent=money(total);
}
renderCheckout();

document.querySelectorAll(".payment-method").forEach(btn=>btn.addEventListener("click",()=>{
 document.querySelectorAll(".payment-method").forEach(x=>x.classList.remove("active"));btn.classList.add("active");
 document.querySelectorAll(".payment-extra").forEach(x=>x.classList.remove("show"));document.getElementById("pay-"+btn.dataset.pay)?.classList.add("show");
}));
document.getElementById("checkoutForm")?.addEventListener("submit",e=>{
 e.preventDefault();const msg=document.getElementById("checkoutMessage");
 if(!getBag().length){msg.textContent="Your shopping bag is empty.";return}
 const method=document.querySelector(".payment-method.active")?.dataset.pay||"card";
 if(method==="upi"&&!document.getElementById("upiId").value.trim()){msg.textContent="Please enter your UPI ID.";return}
 if(method==="card"&&(!document.getElementById("cardNumber").value.trim()||!document.getElementById("expiry").value.trim()||!document.getElementById("cvv").value.trim())){msg.textContent="Please complete your card details.";return}
 const orderedBag=getBag();
 const orderId="AUR-"+Date.now().toString().slice(-8);
 const summary=orderedBag.map(i=>{const p=PRODUCTS[i.id];return `<div class="confirmation-item"><span>${p.name} × ${i.qty}</span><b>${money(p.price*i.qty)}</b></div>`}).join("");
 const grandTotal=orderedBag.reduce((n,i)=>n+PRODUCTS[i.id].price*i.qty,0);
 document.getElementById("orderNumber")&&(document.getElementById("orderNumber").textContent=orderId);
 document.getElementById("confirmationItems")&&(document.getElementById("confirmationItems").innerHTML=summary);
 document.getElementById("confirmationTotal")&&(document.getElementById("confirmationTotal").textContent=money(grandTotal));
 localStorage.removeItem("aureliaJewelleryBag");updateBagCount();
 document.querySelector(".checkout-page")?.classList.add("checkout-complete");
 document.getElementById("checkoutSuccess")?.classList.add("show");
 window.scrollTo({top:0,behavior:"smooth"});
});
document.querySelectorAll(".account-tabs button").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".account-tabs button").forEach(x=>x.classList.remove("active"));tab.classList.add("active");
 document.querySelectorAll(".account-box form").forEach(f=>f.classList.toggle("hidden",f.id!==tab.dataset.tab));
}));
document.querySelectorAll(".account-box form").forEach(form=>form.addEventListener("submit",e=>{
  e.preventDefault();
  const message=document.getElementById("accountMessage");
  if(form.id==="sign-in"){
    message.textContent="Welcome back to AURELIA.";
  }else{
    message.textContent="Your private client account has been created.";
    setTimeout(()=>{ window.location.href="index.html"; },1200);
  }
}));
document.getElementById("newsletterForm")?.addEventListener("submit",e=>{e.preventDefault();document.getElementById("newsletterMessage").textContent="Welcome to the private list.";e.target.reset()});
const filterQuery=new URLSearchParams(location.search).get("filter");
if(filterQuery&&document.querySelector(".filters")){
 document.querySelectorAll(".filters button").forEach(x=>x.classList.toggle("active",x.dataset.filter===filterQuery));
 document.querySelectorAll(".collection-block").forEach(section=>{
   const show=section.dataset.collection===filterQuery;
   section.style.display=show?"block":"none";
 });
}
