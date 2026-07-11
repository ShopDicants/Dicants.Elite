:root{
  --bg:#080808;
  --bg2:#111;
  --card:#141414;
  --card2:#1a1a1a;
  --text:#f4f4f4;
  --muted:#a0a0a0;
  --gold:#d4af37;
  --gold2:#f2d27a;
  --line:#242424;
  --danger:#ff4d4d;
  --shadow:0 20px 60px rgba(0,0,0,.35);
}

*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{
  font-family:Poppins,sans-serif;
  background:radial-gradient(circle at top,rgba(212,175,55,.10),transparent 28%),linear-gradient(180deg,#050505 0%,#090909 40%,#050505 100%);
  color:var(--text);
  overflow-x:hidden;
}
a{color:inherit;text-decoration:none}
button{font-family:inherit}

.topbar{
  position:fixed;
  top:0;
  left:0;
  width:100%;
  z-index:1500;
  backdrop-filter:blur(14px);
  background:rgba(8,8,8,.72);
  border-bottom:1px solid rgba(255,255,255,.06)
}
.topbar-inner{
  max-width:1200px;
  margin:0 auto;
  padding:14px 20px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:16px
}
.brandmark{
  display:flex;
  align-items:center;
  gap:12px;
  font-weight:700;
  letter-spacing:.8px
}
.brandmark .logo{
  width:42px;
  height:42px;
  border-radius:14px;
  display:grid;
  place-items:center;
  background:linear-gradient(135deg,var(--gold),#7a5a12);
  color:#000;
  box-shadow:0 10px 30px rgba(212,175,55,.25);
  flex:none
}
.brandmark span{
  font-size:14px;
  text-transform:uppercase
}
.nav-actions{
  display:flex;
  align-items:center;
  gap:10px;
  flex-wrap:wrap;
  justify-content:flex-end
}
.nav-btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:10px 14px;
  border-radius:999px;
  border:1px solid rgba(255,255,255,.08);
  background:rgba(255,255,255,.03);
  color:var(--text);
  font-size:13px;
  transition:.25s ease
}
.nav-btn:hover{
  transform:translateY(-1px);
  border-color:rgba(212,175,55,.45);
  background:rgba(212,175,55,.08)
}

.hero{
  min-height:100vh;
  display:grid;
  place-items:center;
  padding:120px 20px 70px;
  position:relative;
  background:linear-gradient(rgba(0,0,0,.72),rgba(20,10,0,.72)),url("https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=1600&q=80");
  background-size:cover;
  background-position:center;
  border-bottom:1px solid rgba(255,255,255,.06)
}
.hero::after{
  content:"";
  position:absolute;
  inset:0;
  background:radial-gradient(circle at center,transparent 0%,rgba(0,0,0,.25) 100%);
  pointer-events:none
}
.hero-content{
  position:relative;
  z-index:1;
  max-width:900px;
  width:100%;
  text-align:center
}
.eyebrow{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(0,0,0,.32);
  border:1px solid rgba(212,175,55,.35);
  color:var(--gold2);
  font-size:12px;
  text-transform:uppercase;
  letter-spacing:2px;
  margin-bottom:18px
}
h1{
  font-size:clamp(42px,7vw,78px);
  line-height:1;
  color:var(--gold);
  text-transform:uppercase;
  letter-spacing:4px;
  font-weight:800;
  text-shadow:0 10px 40px rgba(0,0,0,.45)
}
.hero p{
  margin:18px auto 0;
  max-width:760px;
  font-size:clamp(16px,2vw,20px);
  line-height:1.7;
  color:#e7e7e7;
  font-weight:300
}
.hero-cta{
  display:flex;
  gap:14px;
  justify-content:center;
  flex-wrap:wrap;
  margin-top:30px
}
.btn{
  display:inline-flex;
  align-items:center;
  gap:10px;
  border:none;
  cursor:pointer;
  padding:15px 24px;
  border-radius:999px;
  font-weight:700;
  letter-spacing:.4px;
  transition:.25s ease;
  font-size:14px
}
.btn-primary{
  background:linear-gradient(135deg,var(--gold),#f0d27a);
  color:#111;
  box-shadow:0 14px 35px rgba(212,175,55,.22)
}
.btn-secondary{
  background:rgba(255,255,255,.05);
  color:var(--text);
  border:1px solid rgba(255,255,255,.1)
}
.btn:hover{transform:translateY(-2px)}
.stats{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:14px;
  margin-top:34px
}
.stat{
  background:rgba(0,0,0,.34);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;
  padding:18px 14px;
  text-align:center
}
.stat strong{
  display:block;
  color:var(--gold2);
  font-size:22px;
  margin-bottom:6px
}
.stat span{
  color:#d8d8d8;
  font-size:13px
}

section{padding:90px 20px}
.container{max-width:1200px;margin:0 auto}
.section-head{text-align:center;margin-bottom:42px}
.titulo{
  color:var(--gold);
  font-size:clamp(30px,4vw,46px);
  text-transform:uppercase;
  letter-spacing:2px;
  margin-bottom:10px
}
.subtitulo-seccion{
  color:var(--muted);
  font-size:15px;
  max-width:760px;
  margin:0 auto;
  line-height:1.6
}
.features{
  display:grid;
  grid-template-columns:repeat(3,minmax(0,1fr));
  gap:16px;
  margin-bottom:30px
}
.feature{
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.08);
  border-radius:20px;
  padding:18px;
  display:flex;
  align-items:flex-start;
  gap:14px
}
.feature i{
  color:var(--gold);
  font-size:22px;
  margin-top:2px
}
.feature h4{
  font-size:15px;
  margin-bottom:4px
}
.feature p{
  color:var(--muted);
  font-size:13px;
  line-height:1.5
}
.cards{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(290px,1fr));
  gap:26px
}
.card{
  background:linear-gradient(180deg,rgba(22,22,22,.95),rgba(14,14,14,.95));
  border:1px solid rgba(255,255,255,.07);
  border-radius:26px;
  overflow:hidden;
  box-shadow:var(--shadow);
  transition:.3s ease;
  position:relative
}
.card:hover{
  transform:translateY(-6px);
  border-color:rgba(212,175,55,.35)
}
.badge{
  position:absolute;
  top:16px;
  left:16px;
  z-index:2;
  background:rgba(212,175,55,.92);
  color:#111;
  padding:8px 12px;
  border-radius:999px;
  font-size:11px;
  font-weight:800;
  text-transform:uppercase;
  letter-spacing:1px
}
.img-container{
  background:linear-gradient(180deg,#fff,#f5f5f5);
  padding:18px;
  min-height:250px;
  display:grid;
  place-items:center
}
.perfume-img{
  width:100%;
  height:210px;
  object-fit:contain;
  display:block;
  filter:drop-shadow(0 14px 24px rgba(0,0,0,.18))
}
.card-body{padding:22px}
.brand{
  font-size:11px;
  text-transform:uppercase;
  color:var(--gold);
  letter-spacing:3px;
  font-weight:700;
  margin-bottom:8px
}
.card h3{
  font-size:24px;
  margin-bottom:10px;
  line-height:1.2
}
.card p{
  font-size:14px;
  color:#b3b3b3;
  line-height:1.7;
  min-height:72px;
  margin-bottom:18px
}
.opciones-compra{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:12px
}
.opcion{
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.08);
  border-radius:16px;
  padding:14px 12px
}
.opcion span{
  display:block;
  color:#a9a9a9;
  font-size:12px;
  margin-bottom:6px
}
.opcion strong{
  display:block;
  font-size:18px;
  color:#fff;
  margin-bottom:10px
}
.btn-add{
  width:100%;
  border:none;
  cursor:pointer;
  padding:10px 12px;
  border-radius:12px;
  background:linear-gradient(135deg,var(--gold),#f0d27a);
  color:#111;
  font-weight:800;
  font-size:12px;
  transition:.25s ease;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:8px
}
.btn-add:hover{
  transform:translateY(-1px);
  filter:brightness(1.03)
}
.footer-cta{
  background:linear-gradient(180deg,#090909,#050505);
  border-top:1px solid rgba(255,255,255,.06);
  padding:70px 20px;
  text-align:center
}
.footer-cta h2{
  color:var(--gold);
  margin-bottom:10px;
  text-transform:uppercase;
  letter-spacing:2px
}
.footer-cta p{
  color:#a9a9a9;
  max-width:720px;
  margin:0 auto 24px;
  line-height:1.7
}
.social-row{
  display:flex;
  justify-content:center;
  flex-wrap:wrap;
  gap:12px
}
.social-link{
  display:inline-flex;
  align-items:center;
  gap:10px;
  padding:13px 18px;
  border-radius:999px;
  background:rgba(255,255,255,.05);
  border:1px solid rgba(255,255,255,.08);
  color:#fff;
  transition:.25s ease
}
.social-link:hover{
  transform:translateY(-2px);
  border-color:rgba(212,175,55,.35);
  background:rgba(212,175,55,.08)
}

.cart-float{
  position:fixed;
  bottom:26px;
  right:26px;
  width:64px;
  height:64px;
  border-radius:50%;
  border:none;
  background:linear-gradient(135deg,var(--gold),#f0d27a);
  color:#111;
  display:grid;
  place-items:center;
  font-size:22px;
  cursor:pointer;
  box-shadow:0 18px 40px rgba(212,175,55,.25);
  z-index:1800;
  transition:.25s ease
}
.cart-float:hover{transform:scale(1.06)}
.cart-count{
  position:absolute;
  top:-4px;
  right:-4px;
  width:24px;
  height:24px;
  border-radius:50%;
  background:#e11;
  color:#fff;
  font-size:12px;
  display:grid;
  place-items:center;
  font-weight:800;
  border:2px solid #111
}
.cart-modal{
  position:fixed;
  top:0;
  right:-420px;
  width:380px;
  max-width:100vw;
  height:100vh;
  background:#0f0f0f;
  border-left:1px solid rgba(255,255,255,.08);
  box-shadow:-18px 0 50px rgba(0,0,0,.45);
  z-index:2000;
  display:flex;
  flex-direction:column;
  transition:right .35s ease
}
.cart-modal.open{right:0}
.cart-header{
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:22px 20px;
  border-bottom:1px solid rgba(255,255,255,.08)
}
.cart-header h2{
  color:var(--gold);
  font-size:22px
}
.close-cart{
  background:none;
  border:none;
  color:#fff;
  font-size:30px;
  cursor:pointer;
  line-height:1
}
.cart-items{
  flex:1;
  overflow-y:auto;
  padding:18px 20px
}
.cart-item{
  display:flex;
  justify-content:space-between;
  gap:12px;
  align-items:flex-start;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.06);
  border-radius:16px;
  padding:14px;
  margin-bottom:12px
}
.cart-item-info h4{
  font-size:14px;
  margin-bottom:4px
}
.cart-item-info p{
  font-size:12px;
  color:#a9a9a9
}
.cart-item-remove{
  background:none;
  border:none;
  color:#ff5a5a;
  cursor:pointer;
  font-weight:800;
  padding:4px 6px;
  flex:none
}
.cart-footer{
  padding:18px 20px 22px;
  border-top:1px solid rgba(255,255,255,.08)
}
.cart-total{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:18px;
  font-weight:800;
  margin-bottom:16px
}
.cart-total span:last-child{
  color:var(--gold2)
}
.btn-checkout{
  width:100%;
  padding:15px 18px;
  border:none;
  border-radius:999px;
  background:linear-gradient(135deg,var(--gold),#f0d27a);
  color:#111;
  font-weight:900;
  text-transform:uppercase;
  letter-spacing:1px;
  cursor:pointer;
  display:inline-flex;
  align-items:center;
  justify-content:center;
  gap:10px;
  transition:.25s ease
}
.btn-checkout:hover{transform:translateY(-1px)}
.empty{
  color:#8f8f8f;
  text-align:center;
  margin-top:30px;
  font-size:14px
}
.overlay{
  position:fixed;
  inset:0;
  background:rgba(0,0,0,.45);
  z-index:1750;
  opacity:0;
  pointer-events:none;
  transition:.25s ease
}
.overlay.show{
  opacity:1;
  pointer-events:auto
}
@media (max-width:900px){
  .features,.stats{grid-template-columns:1fr}
  .cart-modal{width:100%;right:-100%}
}
@media (max-width:640px){
  .topbar-inner{padding:12px 14px}
  .brandmark span{font-size:12px}
  .nav-btn{padding:9px 11px;font-size:12px}
  section{padding:72px 14px}
  .opciones-compra{grid-template-columns:1fr}
  .cart-float{bottom:18px;right:18px}
}
