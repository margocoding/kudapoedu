"use client";
import { useState } from "react";
import Link from "next/link";
import { Category } from "./Header";
import { motion } from "framer-motion";

export default function MobileHeader({
  topics,
}: {
  topics: {
    id: number;
    title: string;
    slug?: string;
    href: string;
    categories?: Category[];
  }[];
}) {
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpened((prev) => !prev)}
        className="text-2xl font-semibold text-white focus:outline-none"
      >
        {opened ? "×" : "☰"}
      </button>

      {/* Mobile Menu */}
      {opened && (
        <motion.div
          className="fixed left-0 top-21 min-h-screen bg-white w-full shadow-lg z-10"
          initial={{ opacity: 0 }} // Start from above
          animate={{ opacity: 1, y: 0 }} // Animate into position
          transition={{ duration: 0.15 }}
        >
          <div className="flex flex-col items-center justify-center space-y-4 py-6">
            {topics.map((topic) => (
              <Link
                onClick={() => setOpened((prev) => !prev)}
                key={topic.id}
                href={topic.href}
                className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition-all duration-200 ease-in-out"
              >
                {topic.title}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}
