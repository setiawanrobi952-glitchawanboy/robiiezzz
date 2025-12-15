function tambahProduk() {
    let nama = document.getElementById("namaProduk").value;
    let harga = document.getElementById("hargaProduk").value;
    let file = document.getElementById("gambarProduk").files[0];

    if (nama === "" || harga === "" || !file) {
        alert("Lengkapi data produk dulu 💕");
        return;
    }

    let gallery = document.getElementById("gallery");

    let card = document.createElement("div");
    card.className = "card";

    let img = document.createElement("img");
    img.src = URL.createObjectURL(file);

    let namaEl = document.createElement("p");
    namaEl.innerText = nama;

    let hargaEl = document.createElement("p");
    hargaEl.className = "harga";
    hargaEl.innerText = "Rp " + harga;

    let btn = document.createElement("button");
    btn.innerText = "🗑 Hapus";
    btn.className = "hapus";
    btn.onclick = function () {
        card.remove();
    };

    card.appendChild(img);
    card.appendChild(namaEl);
    card.appendChild(hargaEl);
    card.appendChild(btn);

    gallery.appendChild(card);

    // reset form
    document.getElementById("namaProduk").value = "";
    document.getElementById("hargaProduk").value = "";
    document.getElementById("gambarProduk").value = "";
}
