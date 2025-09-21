#!/bin/bash
set -e

echo "=== 🚀 Auto Deploy HiTech Website ke Vercel ==="

# 1. Pastikan project ada
cd ~/hitech-website || { echo "❌ Folder hitech-website tidak ditemukan"; exit 1; }

# 2. Install Vercel CLI
echo "📦 Menginstall Vercel CLI..."
npm install -g vercel

# 3. Buat file vercel.json (config deploy otomatis)
cat > vercel.json <<'EOL'
{
  "version": 2,
  "name": "hitech-website",
  "builds": [
    { "src": "next.config.js", "use": "@vercel/next" }
  ],
  "routes": [
    { "src": "/(.*)", "dest": "/" }
  ]
}
EOL

echo "✅ File vercel.json dibuat"

# 4. Login Vercel
echo "🔑 Login ke Vercel (cek email kamu untuk konfirmasi)..."
vercel login

# 5. Deploy otomatis dengan nama project fix
echo "🚀 Deploy ke Vercel (production)..."
vercel --prod --confirm --name hitech-website

echo "=== ✅ Website HiTech sudah live di Vercel ==="
echo "👉 Link default: https://hitech-website.vercel.app"
echo "👉 Bisa custom domain nanti (misalnya hitechcrypto.xyz)"
