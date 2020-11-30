const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// const [players1, players2] = game.players; // 1) ✅
// console.log(players1, players2);

// const [gk, ...fieldPlayers] = players1; // 2) ✅
// console.log(gk, fieldPlayers);

// const allPlayers = [...players1, ...players2]; // 3) ✅
// console.log(allPlayers);

// const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // 4) ✅
// console.log(players1Final);

// const { team1, x: draw, team2 } = game.odds; // 5) ✅
// console.log(team1, draw, team2);

// const printGoals = (...numPlayersNames) => {
//   console.log(`${numPlayersNames.length} goals were scored`);
// };
// printGoals(...game.scored);
// // printGoals('Davies', 'Muller');

// team1 < team2 && console.log('Team1 is more likely to win.');

// 1) Loop over the game.scored array and print each player name to the console✅
const scored = [...game.scored];

for (const [i, player] of scored.entries()) {
  console.log(`Goals ${i + 1}: ${player}`);
}

// 2) Use a loop to calculate the average odd and log it to the console
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;

average /= odds.length;
console.log(average);

// 3)
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of victory ${teamStr}: ${odd}`);
}
