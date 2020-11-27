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
