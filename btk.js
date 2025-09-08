let playerskor = 0;
let kompskor = 0;
let ronde = 1;
let maxronde = 5;


function bot() {
  let pilihan = ["batu", "gunting", "kertas"];
  let ngacak = Math.floor(Math.random() * pilihan.length);
  return pilihan[ngacak];
}


function games (){
    if (ronde > maxronde) { 
      let hasil = "";
      if (playerskor > kompskor) {
        hasil = "lu menang bre !!! <br>";
      }
      else if (playerskor < kompskor) {
        hasil = "Pecundang !!! <br>";
      }
      else {
        hasil = "seri bre !!! <br>";
      }

      document.getElementById("result").innerHTML += `<br><br>Game Selesai !!! Skor Akhir: lu ${playerskor} - ${kompskor} Komputer <br>` + hasil;
      button.disabled = true;
      return;
    }

    let playermilih = "";
    
      while (!["batu", "gunting", "kertas"].includes(playermilih.toLowerCase())) {
        playermilih = prompt("Ronde" + ronde + " Masukkan Pilihanmu (batu, gunting, kertas): ");
        if (playermilih === null) return;
      }
      
      const komp = bot();
    let player = playermilih.toLowerCase();

    if (player === komp) { 
      document.getElementById("result").innerHTML += (`Ronde ${ronde}: seri !!! sama-sama pilih ${toIcon(player)} <br>`);
    }
    else if ((player === `batu`&& komp === `gunting`) || (player === `kertas`&& komp === `batu`) || (player === `gunting`&& komp === `kertas`)) {
      playerskor++;
      document.getElementById("result").innerHTML += (`Ronde ${ronde}: lu menang !!! ${toIcon(player)} mengalahkan ${toIcon(komp)} <br>`);
    }
    else {
      kompskor++;
      document.getElementById("result").innerHTML += (`Ronde ${ronde}: pecundang !!! ${toIcon(komp)} mengalahkan ${toIcon(player)} <br>`);
    }
    ronde++;
}


function toIcon(text) {
    if (text === "batu") return "🪨";
    if (text === "gunting") return "✂️";
    if (text === "kertas") return "📄";
    return text;
}


let playbutton = document.createElement("button");
playbutton.textContent = "Mainkan";
playbutton.onclick = function(){
  playbutton.style.display = 'none';

  let jalanbtn = document.createElement("button");
  jalanbtn.textContent = "Jalan";
  jalanbtn.onclick = games;
  document.getElementById("button-container").appendChild(jalanbtn);
 }
document.getElementById("button-container").appendChild(playbutton);

function jalanbtn(){
  games();
}