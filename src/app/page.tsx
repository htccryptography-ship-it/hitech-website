"use client";
import Image from "next/image";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Liquidity", value: 40 },
  { name: "Staking Rewards", value: 20 },
  { name: "Development", value: 15 },
  { name: "Marketing", value: 15 },
  { name: "Team & Advisors", value: 10 },
];

const COLORS = ["#3b82f6", "#22c55e", "#eab308", "#ec4899", "#8b5cf6"];

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-950 text-white">
      {/* Logo & Title */}
      <div className="text-center py-12">
        <Image src="/logo.svg" alt="HiTech Logo" width={150} height={150} className="mx-auto mb-4" />
        <h1 className="text-5xl font-bold mb-2">HiTech (HTC)</h1>
        <p className="text-lg">Decentralized Token on Polygon</p>
        <div className="mt-4 bg-gray-800 px-4 py-2 rounded-lg">
          <p className="text-sm">Contract Address:</p>
          <code className="text-xs">${TOKEN_CONTRACT}</code>
        </div>
      </div>

      {/* Features */}
      <section className="max-w-3xl text-center py-10 space-y-4">
        <h2 className="text-3xl font-semibold">✨ Features</h2>
        <ul className="list-disc text-left list-inside space-y-2 mx-auto max-w-md">
          <li>Token Logo & Contract Display</li>
          <li>Live Price Integration (coming soon)</li>
          <li>Tokenomics Visualization</li>
          <li>Roadmap & Development Plan</li>
          <li>Community Links</li>
        </ul>
      </section>

      {/* Tokenomics */}
      <section className="bg-gray-900 w-full py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">📊 Tokenomics</h2>
        <div className="w-full h-72 max-w-lg mx-auto">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="max-w-lg mx-auto text-left space-y-1 mt-4">
          {data.map((d, i) => (
            <p key={i}>
              <span style={{ color: COLORS[i] }}>■</span> {d.name}: {d.value}%
            </p>
          ))}
        </div>
      </section>

      {/* Roadmap */}
      <section className="max-w-3xl text-center py-10">
        <h2 className="text-3xl font-semibold mb-6">🛣 Roadmap</h2>
        <ul className="space-y-4 text-left mx-auto max-w-md">
          <li><b>Q4 2025</b>: Launch HiTech Token + Website</li>
          <li><b>Q1 2026</b>: Listing on DEX & CEX</li>
          <li><b>Q2 2026</b>: Staking Platform & Partnerships</li>
          <li><b>Q3 2026</b>: HiTech Wallet Release</li>
          <li><b>Q4 2026</b>: Global Marketing Expansion</li>
        </ul>
      </section>

      {/* Community Links */}
      <section className="bg-gray-900 w-full py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">🌍 Community</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="https://t.me/hitechcryptography" target="_blank" className="px-4 py-2 bg-blue-600 rounded-lg shadow">Telegram</a>
          <a href="mailto:hitechcryptography@protonmail.com" className="px-4 py-2 bg-green-600 rounded-lg shadow">Email</a>
          <a href="https://polygonscan.com/address/${TOKEN_CONTRACT}" target="_blank" className="px-4 py-2 bg-gray-700 rounded-lg shadow">PolygonScan</a>
          <a href="https://quickswap.exchange" target="_blank" className="px-4 py-2 bg-purple-600 rounded-lg shadow">QuickSwap</a>
        </div>
      </section>
    </main>
  );
}
