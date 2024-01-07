const express = require("express");
const app = express();

const users = [
  {
    username: "john_doe",
    profileImage: "wifp934f",
    name: "John Doe",
    email: "john@example.com",
    activeGameId: "co8374of3no3e",
  },
  {
    username: "jane_smith",
    profileImage: "aiunf94f3",
    name: "Jane Smith",
    email: "jane@example.com",
    activeGameId: "incuno873hf38",
  },
];

const activeGames = [
  {
    id: "co8374of3no3e",
    type: "Trivia",
    note: "Play my trivia game!",
    prize: "30 minute private facetime!",
    questions: {
      1: {
        question: "How many siblings do I have?",
        type: "number",
      },
      2: {
        question: "What is my favorite food?",
        type: "text",
      },
    },
    answers: {
      1: {
        answer: 3,
      },
      2: {
        answer: "pizza",
      },
    },
  },
  {
    id: "incuno873hf38",
    note: "Enter my lottery to win an awesome prize!",
    type: "lottery",
    prize: "$100 gift card!",
  },
];

app.get("/api/getProfileData/:username", (req, res) => {
  const { username } = req.params;

  console.log(username);

  // Find the user by username
  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(404).json({ error: "User not found!" });
  }
  // Find the user's current game
  const activeGame = activeGames.find((game) => game.id === user.activeGameId);

  if (!activeGame) {
    return res.status(404).json({ error: "No active game found!" });
  }

  const returnObj = {
    host: user.username,
    gameId: user.activeGameId,
    hostImage: user.profileImage,
    gameType: activeGame.type,
    gameNote: activeGame.note,
    gamePrize: activeGame.prize,
  };

  console.log(returnObj);
  res.status(200).json({ data: returnObj });
});

module.exports = app;
