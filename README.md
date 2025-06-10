# 🎉 fame-handler: Life is too short to be humble!

Celebrate your GitHub fame — from your first star to full-blown celebrity. 🌟

[![npm version](https://img.shields.io/npm/v/fame-handler)](https://www.npmjs.com/package/fame-handler)
[![npm downloads](https://img.shields.io/npm/dm/fame-handler)](https://www.npmjs.com/package/fame-handler)

---

<p align="center">
  <img src="https://i.programmerhumor.io/2021/09/programmerhumor-io-linux-memes-backend-memes-dc4064d1c27e030.jpg" alt="How to handle fame when your GitHub repo gets 1 star?"><br>
  <em>Source: ProgrammerHumor.io</em>
</p>

## 📦 Features

- 🎉 Celebrate your first (and every) GitHub star
- 🧠 Get random open source fame advice
- 🎊 Show confetti for your milestones
- 🔥 Calculate your Fame Score
- 📊 Track your repo's stars, forks, and issues

## 🚀 Install

```bash
npm install fame-handler
```

## ✨ Usage

```typescript
import {
  celebrateStar,
  howToHandleFame,
  showConfetti,
  fameScore,
  trackGithubFame,
} from "fame-handler";

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
```

## 📈 Project Status

### Status: Active development

- 🚧 Currently, `fame-handler` only works for **public GitHub repositories** since it uses the public GitHub API.

### Upcoming / Planned Features

- 🔒 Track private repositories via user credentials
- 🤖 Integrate AI-powered advice for handling fame (Yes, AI won't be shy!)

## 🤝 Contributing

Contributions are welcome! Please open an issue or pull request.

## 📄 License

MIT © Lucas Ho
