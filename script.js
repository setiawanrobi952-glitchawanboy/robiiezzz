let produk = JSON.parse(localStorage.getItem("produk")) || [];

// tampilkan produk saat halaman dibuka
window.onload = function () {
    tampilkanProduk();
};

function tambahProduk() {
    let nama = document.getElementById("namaProduk").value;
    let harga = document.getElementById("hargaProduk").value;
    let fileInput = document.getElementById("gambarProduk");
    let file = fileInput.files[0];

    if (nama === "" || harga === "" || !file) {
        alert("Lengkapi data produk dulu 💕");
        return;
    }

    let reader = new FileReader();
    reader.onload = function () {
        let dataProduk = {
            nama: nama,
            harga: harga,
            gambar: reader.result
        };

        produk.push(dataProduk);
        localStorage.setItem("produk", JSON.stringify(produk));

        tampilkanProduk();

        // reset form
        document.getElementById("namaProduk").value = "";
        document.getElementById("hargaProduk").value = "";
        fileInput.value = "";
    };

    reader.readAsDataURL(file);
}

function tampilkanProduk() {
    let gallery = document.getElementById("gallery");
    gallery.innerHTML = "";

    produk.forEach((item, index) => {
        let card = document.createElement("div");
        card.className = "card";

        let img = document.createElement("img");
        img.src = item.gambar;

        let namaEl = document.createElement("p");
        namaEl.innerText = item.nama;

        let hargaEl = document.createElement("p");
        hargaEl.className = "harga";
        hargaEl.innerText = "Rp " + item.harga;

        let btn = document.createElement("button");
        btn.innerText = "🗑 Hapus";
        btn.className = "hapus";
        btn.onclick = function () {
            hapusProduk(index);
        };

        card.appendChild(img);
        card.appendChild(namaEl);
        card.appendChild(hargaEl);
        card.appendChild(btn);

        gallery.appendChild(card);
    });
}

function hapusProduk(index) {
    produk.splice(index, 1);
    localStorage.setItem("produk", JSON.stringify(produk));
    tampilkanProduk();
}
