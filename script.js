let produk = JSON.parse(localStorage.getItem("produk")) || [];

window.onload = function() {
    tampilkanProduk();
    buatBubble(20); // jumlah bubble
};

// Tambah Produk
function tambahProduk() {
    let nama = document.getElementById("namaProduk").value;
    let kategori = document.getElementById("kategoriProduk").value;
    let harga = document.getElementById("hargaProduk").value;
    let fileInput = document.getElementById("gambarProduk");
    let file = fileInput.files[0];

    if(nama===""||kategori===""||harga===""||!file){
        alert("Lengkapi semua data produk 💕");
        return;
    }

    let reader = new FileReader();
    reader.onload = function() {
        produk.push({nama, kategori, harga, gambar: reader.result});
        localStorage.setItem("produk", JSON.stringify(produk));
        alert("Produk disimpan ke gudang 📦");
        resetForm();
        tampilkanProduk();
    };
    reader.readAsDataURL(file);
}

// Tampilkan Produk
function tampilkanProduk() {
    let gallery = document.getElementById("gallery");
    if(!gallery) return;
    gallery.innerHTML = "";
    produk.forEach((item,index)=>{
        let card=document.createElement("div");
        card.className="card";
        card.style.animationDelay = (index*0.1)+"s"; // delay muncul satu per satu
        card.innerHTML = `
            <img src="${item.gambar}">
            <p><b>${item.nama}</b></p>
            <p>Kategori: ${item.kategori}</p>
            <p class="harga">Rp ${item.harga}</p>
            <button onclick="editProduk(${index})">✏ Edit</button>
            <button class="hapus" onclick="hapusProduk(${index})">🗑 Hapus</button>
        `;
        gallery.appendChild(card);
    });
}

// Hapus Produk
function hapusProduk(index){
    produk.splice(index,1);
    localStorage.setItem("produk",JSON.stringify(produk));
    tampilkanProduk();
}

// Edit Produk
function editProduk(index){
    let item = produk[index];
    localStorage.setItem("editIndex", index);
    window.location.href="index.html";
    setTimeout(()=>{
        document.getElementById("namaProduk").value=item.nama;
        document.getElementById("kategoriProduk").value=item.kategori;
        document.getElementById("hargaProduk").value=item.harga;
    },200);
}

// Reset Form
function resetForm(){
    document.getElementById("namaProduk").value="";
    document.getElementById("kategoriProduk").value="";
    document.getElementById("hargaProduk").value="";
    document.getElementById("gambarProduk").value="";
}

// 🌸 BUAT BUBBLE PINK
function buatBubble(jumlah){
    let container = document.querySelector(".bubble-container");
    for(let i=0;i<jumlah;i++){
        let bubble = document.createElement("div");
        bubble.className="bubble";
        bubble.style.width = (10+Math.random()*30)+"px";
        bubble.style.height = bubble.style.width;
        bubble.style.left = Math.random()*100+"%";
        bubble.style.animationDuration = (5+Math.random()*10)+"s";
        bubble.style.animationDelay = (Math.random()*5)+"s";
        container.appendChild(bubble);
    }
}
