import {
  celebrateStar,
  howToHandleFame,
  showConfetti,
  fameScore,
  trackGithubFame,
} from "./index";

// 🎉 Prints a congratulatory message for your first GitHub star
celebrateStar();

// 🧠 Gives random advice on handling open source fame
howToHandleFame();

// 🎊 Displays a confetti message for your milestone
showConfetti("You got your first contributor!");

// 🔥 Calculates your Fame Score based on stars, forks, and issues
console.log(fameScore(3, 1, 2));

// 📊 Fetches and logs your repo's stars, forks, and issues from GitHub
trackGithubFame();
