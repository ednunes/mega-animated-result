const player = {
  "carol": [
    "03 15 20 22 51 53",
    "01 05 10 30 35 40"
  ],
  "ramon": [
    "05 13 26 32 47 52",
    "03 12 15 23 37 42 53"
  ],
  "dani": [
    "09 12 20 31 47 51",
    "07 15 18 25 33 40 56"
  ],
  "caio": [
    "06 19 32 51 57 60",
    "13 31 33 35 49 50"
  ],
  "irvaine": [
    "07 16 23 27 39 47",
    "02 19 43 37 23 51"
  ],
  "lis": [
    "26 04 44 18 30 56",
    "46 05 55 31 12 23"
  ],
  "nat": [
    "29 45 07 18 35 57",
    "03 25 41 37 13 53 50"
  ],
  "esteffany": [
    "6 33 34 19 25 52",
    "3 9 29 16 54 40"
  ],
  "edu": [
    "02 17 25 48 31 57",
    "21 24 18 08 35 15"
  ],
  "flavia": [
    "02 17 25 48 31 57",
    "21 24 18 08 35 15"
  ],
  "edu": [
    "13 07 23 58 39 01",
    "02 21 19 45 26 60"
  ],
  "gg": [
    "07 16 22 29 37 50",
    "03 13 26 28 31 48 56"
  ],
}

let result = [8, 13, 21, 28, 44, 48, 54]

function countNumbers(game, result) {
  let count = 0;

  game.split(' ').forEach(
    n => {
      count += result.includes(parseInt(n))
    }
  )

  return count;
}

function isWinner(name, number) {
  if (number === 5) {
    console.log(name, " acertou 5")
    return true;
  } else if (number === 6) {
    console.log(name, " acertou 6")
    return true;
  }
  return false;
}

function getWinners() {
  let keys = Object.keys(player);

  keys.forEach(name => {
    player[name].forEach(g => {
      if(isWinner(name, countNumbers(g, result))) {
        console.log(name, "DEU BOM DEMAIS");
      }
    })
  })

}

getWinners(player, result)
