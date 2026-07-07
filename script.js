// ================= LOADING =================

window.addEventListener("load",()=>{

const loader=document.querySelector(".loader");

if(loader){

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},300);


},300);

}

});




// ================= HAMBURGER MENU =================


const menuToggle=document.getElementById("menuToggle");

const navMenu=document.getElementById("navMenu");


if(menuToggle && navMenu){


menuToggle.addEventListener("click",()=>{

navMenu.classList.toggle("active");

});



document.querySelectorAll("#navMenu a").forEach(link=>{


link.addEventListener("click",()=>{

navMenu.classList.remove("active");

});


});


}







// ================= DARK MODE =================


const darkButton=document.getElementById("darkMode");



if(localStorage.getItem("theme") === "dark"){

document.body.classList.add("dark");

}



if(darkButton){


darkButton.addEventListener("click",()=>{


document.body.classList.toggle("dark");



if(document.body.classList.contains("dark")){


localStorage.setItem("theme","dark");


}else{


localStorage.setItem("theme","light");


}



});


}







// ================= BACK TO TOP =================


const topBtn=document.getElementById("topBtn");


if(topBtn){


window.addEventListener("scroll",()=>{


if(window.scrollY > 300){


topBtn.style.display="block";


}else{


topBtn.style.display="none";


}


});



topBtn.addEventListener("click",()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


});


}







// ================= AI CHAT =================


async function sendMessage(){


let input=document.getElementById("userInput");

let chat=document.getElementById("chatArea");



if(!input || input.value.trim()==""){

return;

}



let question=input.value;



chat.innerHTML += `

<div class="user">

${question}

</div>

`;



input.value="";



chat.innerHTML += `

<div class="bot">

LexAI sedang menganalisis...

</div>

`;



try{


let response=await fetch("http://localhost:3000/chat",{

method:"POST",

headers:{

"Content-Type":"application/json"

},


body:JSON.stringify({

message:question

})


});



let data=await response.json();



let bots=document.querySelectorAll(".bot");

bots[bots.length-1].innerHTML=data.reply;



}

catch(error){


let bots=document.querySelectorAll(".bot");


bots[bots.length-1].innerHTML=

"Server AI belum aktif. Jalankan server terlebih dahulu.";


}



chat.scrollTop=chat.scrollHeight;


}







// ================= ANALISIS KASUS =================


function analyzeCase(){


let input=document.getElementById("caseInput");

let result=document.getElementById("analysisResult");



if(!input || !result){

return;

}



let kasus=input.value.toLowerCase();


let jawaban="";



if(kasus.includes("utang") || kasus.includes("pinjam")){


jawaban="Kasus ini berkaitan dengan hukum perdata, khususnya perjanjian dan kemungkinan wanprestasi. Perlu melihat bukti perjanjian dan kewajiban para pihak.";


}

else if(kasus.includes("pencurian")){


jawaban="Kasus ini berpotensi berkaitan dengan hukum pidana karena terdapat dugaan mengambil barang milik orang lain tanpa hak.";


}

else if(kasus.includes("perceraian")){


jawaban="Kasus ini termasuk ranah hukum keluarga. Analisis lebih lanjut membutuhkan fakta dan dokumen pendukung.";


}

else{


jawaban="LexAI memberikan analisis awal. Informasi lebih lengkap diperlukan agar analisis hukum lebih akurat.";


}



result.innerHTML=jawaban;


}







// ================= REFERENSI =================


function generateReference(){


let author=document.getElementById("author").value;

let title=document.getElementById("title").value;

let year=document.getElementById("year").value;

let publisher=document.getElementById("publisher").value;

let result=document.getElementById("referenceResult");



if(!result){

return;

}



result.innerHTML=`

<b>Referensi Akademik</b>

<br><br>

${author}. (${year}). 

<i>${title}</i>. 

${publisher}.

`;



}


// Scroll Reveal

const reveals = document.querySelectorAll(".reveal");


window.addEventListener("scroll",()=>{


reveals.forEach((item)=>{


let windowHeight = window.innerHeight;

let top = item.getBoundingClientRect().top;


if(top < windowHeight - 100){

item.classList.add("active");

}


});


});