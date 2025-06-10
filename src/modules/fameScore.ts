export function fameScore(stars = 0, forks = 0, issues = 0): string {
  const score = stars * 10 + forks * 15 + issues * 5;
  let title: string;

  if (score === 0) title = "Undiscovered Genius";
  else if (score < 50) title = "Rising Indie Dev";
  else if (score < 200) title = "Open Source Rockstar";
  else title = "Certified GitHub Celebrity";

  return `🔥 Your Fame Score: ${score} (${title})`;
}
