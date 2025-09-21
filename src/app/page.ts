use client";

import Image from "next/image";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Liquidity", value: 40 },
  { name: "Marketing", value: 25 },
  { name: "Development", value: 20 },
  { name: "Team", value: 15 },
];

const COLORS = ["#00C49F", "#FFBB28", "#FF8042", "#0088FE"];

// alamat kontrak resmi
const TOKEN_CONTRACT = "0xea0C6476437b046C464e3b9E75A865B6A3A1c925";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="flex flex-col items-center text-center">
        {/* Logo */}
        <Image src="/logo.svg" alt="HiTech Token" width={120} height={120} />

        {/* Judul */}
        <h1 className="text-4xl font-bold mt-4">HiTech Token</h1>
        <p className="text-gray-400 mt-2">
          The Future of Decentralized Technology
        </p>

        {/* Kontrak */}
        <div className="mt-6 bg-gray-800 px-6 py-4 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Token Contract</h2>
          <code className="text-sm break-all">{TOKEN_CONTRACT}</code>
        </div>

        {/* Tokenomics */}
        <div className="w-full max-w-lg mt-12">
          <h2 className="text-2xl font-bold mb-4">Tokenomics</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {data.map((_, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Kontak */}
        <div className="mt-12 space-y-3">
          <a
            href="https://t.me/hitechcryptography"
            target="_blank"
            className="block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md"
          >
            Join Telegram
          </a>
          <a
            href="mailto:hitechcryptography@protonmail.com"
            className="block bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg shadow-md"
          >
            Email Us
          </a>
        </div>
      </div>
    </main>
  );
}
