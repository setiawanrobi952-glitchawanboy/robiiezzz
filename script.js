function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "123") {
        alert("Login berhasil 💖");
        window.location.href = "index.html";
    } else {
        alert("Username atau password salah 😢");
    }
}

function previewImage(event) {
    let img = document.getElementById("preview");
    img.src = URL.createObjectURL(event.target.files[0]);
    img.style.display = "block";
}
