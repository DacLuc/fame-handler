export function howToHandleFame(): void {
  const adviceList = [
    "Always be humble. But also add 'Star Dev' to your LinkedIn.",
    "Reply to issues... eventually.",
    "Tweet about it, then mute the thread.",
    "Frame a screenshot of that 1-star moment.",
    "Celebrate responsibly. Don't rewrite your whole app overnight.",
    "Print 'Open Source Influencer' on a mug.",
  ];
  const advice = adviceList[Math.floor(Math.random() * adviceList.length)];
  console.log(`\n🧠 Fame Tip: ${advice}\n`);
}
