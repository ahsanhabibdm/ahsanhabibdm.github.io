*{
margin:0;
padding:0;
box-sizing:border-box;
font-family:'Poppins',sans-serif;
}

body{
background:#0d0d0d;
color:#fff;
}

header{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#111;
position:sticky;
top:0;
z-index:1000;
}

.logo{
font-size:28px;
font-weight:700;
color:#7CFC00;
}

nav a{
color:white;
text-decoration:none;
margin-left:20px;
transition:.3s;
}

nav a:hover{
color:#7CFC00;
}

.hero{
display:flex;
justify-content:space-between;
align-items:center;
padding:80px 8%;
flex-wrap:wrap;
}

.hero-text{
max-width:550px;
}

.hero-text h1{
font-size:55px;
margin-bottom:20px;
color:#7CFC00;
}

.hero-text p{
font-size:18px;
line-height:1.7;
margin-bottom:30px;
}

.btn{
display:inline-block;
padding:15px 35px;
background:#7CFC00;
color:black;
font-weight:bold;
border-radius:40px;
text-decoration:none;
transition:.3s;
}

.btn:hover{
transform:scale(1.05);
}

.hero-image img{
width:350px;
border-radius:20px;
box-shadow:0 0 40px #7CFC00;
}

section{
padding:80px 8%;
}

section h2{
font-size:40px;
margin-bottom:30px;
color:#7CFC00;
text-align:center;
}

.cards{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:20px;
margin-top:30px;
}

.card{
background:#181818;
padding:30px;
border-radius:15px;
text-align:center;
transition:.4s;
border:1px solid #333;
}

.card:hover{
background:#7CFC00;
color:black;
transform:translateY(-10px);
}

#contact p{
font-size:18px;
margin:15px 0;
text-align:center;
}

#contact a{
color:#7CFC00;
text-decoration:none;
}

footer{
background:#111;
padding:20px;
text-align:center;
margin-top:40px;
color:#aaa;
}

@media(max-width:768px){

header{
flex-direction:column;
}

nav{
margin-top:15px;
}

.hero{
flex-direction:column-reverse;
text-align:center;
}

.hero-image img{
width:260px;
margin-bottom:30px;
}

.hero-text h1{
font-size:40px;
}

}
