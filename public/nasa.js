function play() {
    let skor = 0;
    for (let i = 0; i < 5; i++) {
        const aba = Math.floor(Math.random() * 5) + 1; // random number each round
        let pilih = prompt("Masukkan angka 1-5:");
        if (parseInt(pilih) === aba) {
            skor += 1;
            document.getElementById("result").innerHTML += ("Selamat, kamu benar!<br>");
        } else {
            document.bgetElementById("result").innerHTML += ("Maaf, kamu salah. Angka yang benar adalah " + aba + "<br>");
        }
    }
    document.getElementById("result").innerHTML += ("Skor akhir: " + skor + "<br>");

    if (skor >= 3) {
        document.getElementById("result").innerHTML += ("Kamu menang!<br>");
    } else {
        document.getElementById("result").innerHTML += ("Kamu kalah!<br>");
    }

    document.getElementById("result").innerHTML += ("<br>Segarkan halaman untuk bermain lagi.");
}
let button = document.createElement("button");
button.onclick = play;
button.textContent = "Mainkan";
document.getElementById("button-container").appendChild(button);