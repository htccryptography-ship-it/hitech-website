"use client";

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
    <main className="min-h-screen bg-gray-900 text-white p-8">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Image src="/logo.svg" alt="HiTech Token" width={120} height={120} />

        {/* Hero Section */}
        <h1 className="text-4xl font-bold mt-4">HiTech Token</h1>
        <p className="text-gray-400 mt-2">
          The Future of Decentralized Technology
        </p>

        {/* Contract Address */}
        <div className="mt-6 bg-gray-800 px-6 py-4 rounded-xl shadow-lg w-full max-w-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Token Contract</h2>
          <code className="text-sm break-all">{TOKEN_CONTRACT}</code>
        </div>

        {/* Tokenomics */}
        <div className="w-full max-w-lg mt-10">
          <h2 className="text-2xl font-bold mb-4 text-center">Tokenomics</h2>
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

        {/* Contact Section */}
        <div className="mt-10 bg-gray-800 px-6 py-4 rounded-xl shadow-lg w-full max-w-lg text-center">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-gray-300">
            Telegram:{" "}
            <a
              href="https://t.me/hitechcryptography"
              className="text-blue-400 hover:underline"
              target="_blank"
            >
              @hitechcryptography
            </a>
          </p>
          <p className="text-gray-300 mt-1">
            Email:{" "}
            <a
              href="mailto:hitechcryptography@protonmail.com"
              className="text-blue-400 hover:underline"
            >
              hitechcryptography@protonmail.com
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}
