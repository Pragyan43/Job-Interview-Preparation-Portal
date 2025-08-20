"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// Dummy questions per test ID
const questionsByTest: Record<string, { text: string; options: string[]; correct: string }[]> = {
  "1": [
    { text: "2 + '2' in JS?", options: ["22", "4", "NaN", "Error"], correct: "22" },
    { text: "typeof NaN?", options: ["number", "NaN", "undefined", "object"], correct: "number" },
  ],
  "2": [
    { text: "JSX stands for?", options: ["JavaScript XML", "JavaScript Xtreme", "Java Syntax", "None"], correct: "JavaScript XML" },
  ],
  "3": [
    { text: "Node.js is?", options: ["Server-side JS", "Client-side JS", "Framework", "Database"], correct: "Server-side JS" },
  ],
};

export default function StartMockTest() {
  const params = useParams();
  const testId = params.id || "1";

  const questions = questionsByTest[testId as keyof typeof questionsByTest] || [];
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  const handleNext = () => {
    setSelected("");
    setSubmitted(false);
    setCurrentQ((prev) => prev + 1);
  };

  if (questions.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No questions available for this test.</p>
        <Link href="/mock-tests" className="ml-4 text-blue-600 underline">
          Back
        </Link>
      </div>
    );
  }

  const question = questions[currentQ];

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">🚀 Mock Test</h1>
        <span className="font-mono text-lg text-red-600">⏱ {formatTime(timeLeft)}</span>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
        <div className="space-y-3">
          {question.options.map((opt: string) => (
            <label
              key={opt}
              className={`block p-3 rounded-lg border cursor-pointer ${
                selected === opt ? "border-blue-600 bg-blue-50" : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              <input
                type="radio"
                name="answer"
                value={opt}
                checked={selected === opt}
                onChange={() => setSelected(opt)}
                className="mr-2"
              />
              {opt}
            </label>
          ))}
        </div>

        {!submitted && (
          <button
            onClick={handleSubmit}
            disabled={!selected}
            className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
          >
            Submit
          </button>
        )}

        {submitted && (
          <>
            <div
              className={`mt-4 p-3 rounded-lg text-center font-medium ${
                selected === question.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
              }`}
            >
              {selected === question.correct ? "✅ Correct!" : `❌ Wrong! Correct: ${question.correct}`}
            </div>

            {currentQ < questions.length - 1 ? (
              <button
                onClick={handleNext}
                className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Next Question
              </button>
            ) : (
              <Link
                href="/mock-tests"
                className="mt-4 inline-block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
              >
                Finish Test
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
}
