function kirimPesan(){

    let input = document.getElementById("pertanyaan");
    let chat = document.getElementById("chat");

    if(input.value.trim() === ""){
        alert("Silakan masukkan pertanyaan");
        return;
    }


    chat.innerHTML += `
    
    <p class="user">
    Anda: ${input.value}
    </p>

    <p class="bot">
    LexAI: Pertanyaan Anda tentang "${input.value}" sedang dianalisis.
    Untuk sementara, ini adalah simulasi AI.
    </p>

    `;


    input.value = "";

}

function cariIstilah(){

let kata = document.getElementById("istilah").value.toLowerCase();

let hasil = document.getElementById("hasil");


let kamus = {

"wanprestasi":
"Keadaan ketika salah satu pihak tidak memenuhi kewajiban dalam perjanjian.",


"delik":
"Perbuatan yang dilarang oleh hukum pidana dan dapat dikenai sanksi.",


"gugatan":
"Permohonan yang diajukan seseorang kepada pengadilan untuk memperoleh keputusan hukum.",


"konstitusi":
"Hukum dasar yang menjadi landasan penyelenggaraan negara."

};



if(kamus[kata]){

hasil.innerHTML =
`
<p class="bot">
<b>${kata}</b><br>
${kamus[kata]}
</p>
`;

}

else{

hasil.innerHTML =
`
<p class="bot">
Istilah belum ditemukan.
Coba kata lain.
</p>
`;

}

}

function analisisKasus(){

let kasus = document.getElementById("kasus").value;

let hasil = document.getElementById("hasilKasus");


if(kasus==""){

alert("Masukkan kronologi kasus terlebih dahulu");

return;

}


hasil.innerHTML =

`
<p class="bot">

<b>Hasil Analisis LexAI</b><br><br>

<b>1. Identifikasi Masalah:</b><br>
Kasus perlu dianalisis berdasarkan peristiwa hukum yang terjadi.<br><br>


<b>2. Kemungkinan Dasar Hukum:</b><br>
Dapat dikaji menggunakan peraturan perundang-undangan yang sesuai dengan jenis perkara.<br><br>


<b>3. Kesimpulan Sementara:</b><br>
Diperlukan pemeriksaan lebih lanjut terhadap fakta, bukti, dan aturan hukum yang berlaku.

</p>
`;

}

function buatReferensi(){

let penulis = document.getElementById("penulis").value;

let judul = document.getElementById("judul").value;

let tahun = document.getElementById("tahun").value;


let hasil = document.getElementById("hasilReferensi");


if(penulis=="" || judul=="" || tahun==""){

alert("Lengkapi semua data");

return;

}


hasil.innerHTML =

`

<p class="bot">

<b>Referensi APA Style:</b><br><br>

${penulis}. (${tahun}). 
<i>${judul}</i>.

</p>

`;

}

let topBtn = document.getElementById("topBtn");


if(topBtn){

window.addEventListener("scroll", function(){

    if(window.scrollY > 200){

        topBtn.style.display = "block";

    }else{

        topBtn.style.display = "none";

    }

});


topBtn.onclick = function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

};

}