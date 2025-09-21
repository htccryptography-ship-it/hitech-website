#!/bin/bash
set -e

echo "=== 🔄 Redeploy HiTech Website ke Vercel ==="

# 1. Masuk ke folder project
cd ~/hitech-website || { echo "❌ Folder hitech-website tidak ditemukan"; exit 1; }

# 2. Pastikan project linked ke Vercel
vercel link --confirm --name hitech-website || true

# 3. Deploy ulang ke production
vercel --prod --confirm --name hitech-website

echo "✅ Selesai! Cek website di https://hitech-website.vercel.app"
