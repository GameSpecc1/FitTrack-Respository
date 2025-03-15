#!/usr/bin/env node

/**
 * This script provides instructions to increase file watch limits
 * which helps prevent the EMFILE: too many open files error
 */

const os = require("os");
const platform = os.platform();

console.log("\n📋 Instructions to increase file watch limits:\n");

if (platform === "darwin") {
  // macOS instructions
  console.log("For macOS:");
  console.log("1. Run this command to check current limits:");
  console.log("   $ sysctl kern.maxfiles kern.maxfilesperproc");
  console.log("\n2. Create or edit /etc/sysctl.conf with:");
  console.log("   $ sudo nano /etc/sysctl.conf");
  console.log("\n3. Add these lines:");
  console.log("   kern.maxfiles=524288");
  console.log("   kern.maxfilesperproc=262144");
  console.log("\n4. Apply changes:");
  console.log("   $ sudo sysctl -p");
} else if (platform === "linux") {
  // Linux instructions
  console.log("For Linux:");
  console.log("1. Check current limits:");
  console.log("   $ ulimit -n");
  console.log("\n2. Edit /etc/security/limits.conf:");
  console.log("   $ sudo nano /etc/security/limits.conf");
  console.log("\n3. Add these lines:");
  console.log("   * soft nofile 65536");
  console.log("   * hard nofile 131072");
  console.log("\n4. Log out and log back in for changes to take effect");
} else if (platform.includes("win")) {
  // Windows instructions
  console.log("For Windows:");
  console.log(
    "Windows typically doesn't have the same file descriptor limits.",
  );
  console.log(
    "Try running your app with the NODE_OPTIONS environment variable:",
  );
  console.log("$ set NODE_OPTIONS=--max-old-space-size=4096 (Command Prompt)");
  console.log('$ $env:NODE_OPTIONS="--max-old-space-size=4096" (PowerShell)');
}

console.log(
  "\n⚠️ Note: These changes require administrative privileges and may require a system restart.",
);
console.log(
  "\n🔄 After making these changes, restart your development environment.\n",
);
