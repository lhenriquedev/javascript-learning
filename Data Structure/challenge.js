// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// // const [players1, players2] = game.players; // 1) ✅
// // console.log(players1, players2);

// // const [gk, ...fieldPlayers] = players1; // 2) ✅
// // console.log(gk, fieldPlayers);

// // const allPlayers = [...players1, ...players2]; // 3) ✅
// // console.log(allPlayers);

// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic']; // 4) ✅
// // console.log(players1Final);

// // const { team1, x: draw, team2 } = game.odds; // 5) ✅
// // console.log(team1, draw, team2);

// // const printGoals = (...numPlayersNames) => {
// //   console.log(`${numPlayersNames.length} goals were scored`);
// // };
// // printGoals(...game.scored);
// // // printGoals('Davies', 'Muller');

// // team1 < team2 && console.log('Team1 is more likely to win.');

// // 1) Loop over the game.scored array and print each player name to the console✅
// const scored = [...game.scored];

// for (const [i, player] of scored.entries()) {
//   console.log(`Goals ${i + 1}: ${player}`);
// }

// // 2) Use a loop to calculate the average odd and log it to the console
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;

// average /= odds.length;
// console.log(average);

// // 3)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }

///////////////////////////////////////
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).
1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

const events = [...new Set(gameEvents.values())];
console.log(events);
console.log(gameEvents.delete(64));

const time = [...gameEvents.keys()].pop();

console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

for (const [min, event] of gameEvents.entries()) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF]: ${min} minutes - ${event}`);
}
