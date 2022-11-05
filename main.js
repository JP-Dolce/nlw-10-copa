function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}" />
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}" />
    </li>
  `
}

let delay = -0.4
function createCard(date, day, games) {
  delay = delay + 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2> 
        <a href="https://www.google.com/search?q=jogos+da+copa+do+mundo+2022&oq=jogos+da+copa&aqs=chrome.1.69i57j0i131i433i512l3j46i131i433i512j0i131i433i512l5.3671j0j15&sourceid=chrome&ie=UTF-8#sie=lg;/m/0fp_8fm;2;/m/030q7;mt;fp;1;;;" target="_blank">
          <button id="test" style="background: green;
                          margin-bottom: 23px;
                          border-radius: 6px; 
                          padding: 9px; 
                          cursor: pointer; 
                          color: #fff; 
                          border: none; 
                          font-size: 12px;
                          ">Programação Completa Aqui!

          </button>
        </a>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "quinta",

    createGame("switzerland", "07:00", "cameroon") +
      createGame("uruguai", "10:00", "korea") +
      createGame("portugal", "13:00", "gana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "28/11",
    "segunda",

    createGame("cameroon", "07:00", "serbia") +
      createGame("korea", "10:00", "gana") +
      createGame("brazil", "13:00", "switzerland") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "02/12",
    "sexta",

    createGame("korea", "12:00", "portugal") +
      createGame("uruguai", "12:00", "gana") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "cameroon")
  )
