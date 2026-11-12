import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { randomBytes } from "node:crypto";
import { spawnSync } from "node:child_process";

const isWindows = process.platform === "win32";
const npm = isWindows ? "npm.cmd" : "npm";
const docker = isWindows ? "docker.exe" : "docker";
const run = (command, args, optional = false) => {
  console.log(`\n> ${command} ${args.join(" ")}`);
  const result = isWindows
    ? spawnSync("cmd.exe", ["/d", "/s", "/c", command, ...args], { stdio: "inherit" })
    : spawnSync(command, args, { stdio: "inherit" });
  if (result.status !== 0 && !optional) process.exit(result.status || 1);
  return result.status === 0;
};

console.log("\nPSIT Pro — automatic setup\n");
if (!run(npm, ["--version"], true)) {
  console.error("Node.js 20+ is required. Install it from https://nodejs.org and rerun this file.");
  process.exit(1);
}

if (!existsSync(".env")) {
  let env = readFileSync(".env.example", "utf8");
  env = env.replace("replace-with-at-least-32-random-characters", randomBytes(48).toString("base64url"));
  writeFileSync(".env", env);
  console.log("Created .env with a secure random session secret.");
} else {
  console.log("Keeping your existing .env file.");
}

run(npm, ["install"]);
if (!run(docker, ["--version"], true)) {
  console.error("\nDocker was not found. Install Docker Desktop, start it, and rerun setup.");
  console.error("If you use hosted PostgreSQL, update DATABASE_URL in .env and run: npm run db:push");
  process.exit(1);
}
run(docker, ["compose", "up", "-d", "--wait"]);
run(npm, ["run", "db:push"]);
if (process.argv.includes("--seed")) run(npm, ["run", "db:seed"]);

console.log("\n✓ PSIT Pro is ready.\n");
console.log("Start it with: npm run dev (database checks run automatically)");
console.log("Then open: http://localhost:3000\n");
if (process.argv.includes("--seed")) {
  console.log("Demo login: student@psitpro.local / Welcome@123\n");
}
