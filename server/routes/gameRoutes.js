const express = require("express");
const app = express();

const activeGames = [
  {
    id: "co8374of3no3e",
    type: "Trivia",
    note: "Play my trivia game!",
    prize: "30 minute private facetime!",
    questions: [
      {
        id: "3982j3u4fn32",
        question: "How many siblings do I have?",
        options: ["1", "2", "3", "4"],
        answer: "3",
      },
      {
        id: "3982jerfwerg",
        question: "What is my favorite food?",
        options: ["Pizza", "Cookies", "Carrots", "Chocolate"],
        answer: "Pizza",
      },
    ],
    liveUntil: "2024-01-01T12:00:00.000Z",
  },
  {
    id: "incuno873hf38",
    note: "Enter my lottery to win an awesome prize!",
    type: "lottery",
    prize: "$100 gift card!",
    liveUntil: "2024-01-07T12:00:00.000Z",
  },
];

app.get("/api/getGameData/:gameId", (req, res) => {
  const { gameId } = req.params;

  console.log(gameId);

  // Find the user by username
  const game = activeGames.find((game) => game.id === gameId);

  if (!game) {
    return res.status(404).json({ error: "Game not found!" });
  }

  const returnObj = {
    gameId: game.id,
    type: game.type,
    note: game.note,
    prize: game.prize,
    liveUntil: game.liveUntil,
  };

  if (game.type == "Trivia") {
    const questionsWithoutAnswer = game.questions.map(
      ({ answer, ...rest }) => rest
    );
    returnObj.questions = questionsWithoutAnswer;
  }

  console.log(returnObj);
  res.status(200).json({ data: returnObj });
});

app.post("/api/submitQuizAnswers/:gameId", (req, res) => {
  const { gameId } = req.params;
  const answers = req.body;

  //   console.log(gameId);

  //   // Find the user by username
  //   const game = activeGames.find((game) => game.id === gameId);

  //   if (!game) {
  //     return res.status(404).json({ error: "Game not found!" });
  //   }

  //   const returnObj = {
  //     gameId: game.id,
  //     type: game.type,
  //     note: game.note,
  //     prize: game.prize,
  //     liveUntil: game.liveUntil,
  //   };

  //   if (game.type == "Trivia") {
  //     const questionsWithoutAnswer = game.questions.map(
  //       ({ answer, ...rest }) => rest
  //     );
  //     returnObj.questions = questionsWithoutAnswer;
  //   }

  //   console.log(returnObj);
  //   res.status(200).json({ data: returnObj });
});

module.exports = app;
