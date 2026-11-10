const products=[
 {name:"Oversized Trench Coat",price:129},
 {name:"Relaxed Cotton Shirt",price:59},
 {name:"Wide Leg Trousers",price:79},
 {name:"Everyday Knit Sweater",price:69}
];
const grid=document.getElementById("grid");
const countEl=document.getElementById("cart-count");
let count=0;
products.forEach(p=>{
  const el=document.createElement("article");
  el.className="card";
  el.innerHTML=`<div class="ph"></div><h4>${p.name}</h4><p>$${p.price}</p><button>Add to cart</button>`;
  el.querySelector("button").addEventListener("click",()=>{count++;countEl.textContent=count;});
  grid.appendChild(el);
});
