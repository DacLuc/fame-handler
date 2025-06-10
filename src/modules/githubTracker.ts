import fs from "fs";
import path from "path";
import { fameScore } from "./fameScore";

function parseGitConfig(): { user: string | null; repo: string | null } {
  const configPath = path.join(".git", "config");
  if (!fs.existsSync(configPath)) return { user: null, repo: null };

  const content = fs.readFileSync(configPath, "utf-8");
  const match = content.match(/github\.com[:/](.+?)\/(.+?)\.git/);
  if (match) {
    return { user: match[1], repo: match[2] };
  }
  return { user: null, repo: null };
}

async function fetchRepoStats(
  user: string,
  repo: string
): Promise<{ stars: number; forks: number; issues: number }> {
  const url = `https://api.github.com/repos/${user}/${repo}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`⚠️ Could not fetch GitHub data: ${response.status}`);
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return {
      stars: data.stargazers_count || 0,
      forks: data.forks_count || 0,
      issues: data.open_issues_count || 0,
    };
  } catch (e) {
    console.error(`❌ Error fetching GitHub data: ${(e as Error).message}`);
    return { stars: 0, forks: 0, issues: 0 };
  }
}

export async function trackGithubFame(): Promise<void> {
  const { user, repo } = parseGitConfig();
  if (!user || !repo) {
    console.warn("🚫 Not inside a GitHub repo or unable to parse remote URL.");
    return;
  }

  console.log(`📦 Tracking GitHub repo: ${user}/${repo}`);
  const { stars, forks, issues } = await fetchRepoStats(user, repo);
  console.log(`⭐ Stars: ${stars}, 🍴 Forks: ${forks}, 🐞 Issues: ${issues}`);
  console.log(fameScore(stars, forks, issues));
}
