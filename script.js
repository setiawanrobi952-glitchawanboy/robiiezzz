et produk = JSON.parse(localStorage.getItem("produk")) || [];
let editIndex = null;

window.onload = function () {
    tampilkanProduk();
};

function tambahProduk() {
    let nama = document.getElementById("namaProduk").value;
    let kategori = document.getElementById("kategoriProduk").value;
    let harga = document.getElementById("hargaProduk").value;
    let fileInput = document.getElementById("gambarProduk");
    let file = fileInput.files[0];

    if (nama === "" || kategori === "" || harga === "" || !file) {
        alert("Lengkapi semua data produk 💕");
        return;
    }

    let reader = new FileReader();
    reader.onload = function () {
        let dataProduk = {
            nama,
            kategori,
            harga,
            gambar: reader.result
        };

        produk.push(dataProduk);
        localStorage.setItem("produk", JSON.stringify(produk));

        alert("Produk disimpan ke gudang 📦");
        resetForm();
    };
    reader.readAsDataURL(file);
}

function tampilkanProduk() {
    let gallery = document.getElementById("gallery");
    if (!gallery) return;

    gallery.innerHTML = "";

    produk.forEach((item, index) => {
        let card = document.createElement("div");
        card.className = "card";

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

function hapusProduk(index) {
    produk.splice(index, 1);
    localStorage.setItem("produk", JSON.stringify(produk));
    tampilkanProduk();
}

function editProduk(index) {
    let item = produk[index];

    localStorage.setItem("editIndex", index);

    window.location.href = "index.html";

    setTimeout(() => {
        document.getElementById("namaProduk").value = item.nama;
        document.getElementById("kategoriProduk").value = item.kategori;
        document.getElementById("hargaProduk").value = item.harga;
    }, 200);
}

function resetForm() {
    document.getElementById("namaProduk").value = "";
    document.getElementById("kategoriProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("gambarProduk").value = "";
}
