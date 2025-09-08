let playerskor = 0;
let kompskor = 0;
let ronde = 1;
let maxronde = 5;


function bot() {
  let pilihan = ["batu", "gunting", "kertas"];
  let ngacak = Math.floor(Math.random() * pilihan.length);
  return pilihan[ngacak];
}

function toIcon(text) {
    if (text === "batu") return "🪨";
    if (text === "gunting") return "✂️";
    if (text === "kertas") return "📄";
    return text;
}



function games (playermilih) {
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
      document.querySelector('.pilih').forEach(btn => btn.disabled = true);
      return;
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

let playbutton = document.createElement("button");
playbutton.textContent = "Mainkan";
document.getElementById("button-container").appendChild(playbutton);
playbutton.onclick = function(){
  playbutton.style.display = 'none';

  let jalanbtn = document.createElement("button");
  jalanbtn.textContent = "Jalan";
  document.getElementById("button-container").appendChild(jalanbtn);
  jalanbtn.onclick = function(){
    jalanbtn.style.display = 'none';

    const pilih = ["batu", "gunting", "kertas"];
    const icon = {
      batu: "🪨",
      gunting: "✂️",
      kertas: "📄"
    }



    pilih.forEach(pilih => {
      let btn = document.createElement("button");
      btn.textContent =icon[pilih] || pilihicon.charAt(0).toUpperCase() + pilihicon.slice(1);
      btn.className = 'pilih';
      btn.onclick = function() {
        games(pilih);
    };
  document.getElementById("button-container").appendChild(btn);
  });


 }}

