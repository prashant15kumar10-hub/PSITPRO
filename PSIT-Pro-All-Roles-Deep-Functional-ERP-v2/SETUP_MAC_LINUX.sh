#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
echo "Setting up PSIT Pro..."
node scripts/setup.mjs
echo "Setup complete. Run ./RUN_MAC_LINUX.sh to start PSIT Pro."
