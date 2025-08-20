"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function StartMockTest() {
  // Timer state (10 mins = 600 seconds)
  const [timeLeft, setTimeLeft] = useState(600);
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Countdown effect
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  // Format time (mm:ss)
  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Question data (dummy for now)
  const question = {
    text: "Which of the following is the output of 2 + '2' in JavaScript?",
    options: ["22", "4", "NaN", "Error"],
    correct: "22",
  };

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Header with timer */}
      <div className="w-full max-w-3xl bg-white shadow-md rounded-xl p-4 flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">🚀 Mock Test</h1>
        <span className="font-mono text-lg text-red-600">⏱ {formatTime(timeLeft)}</span>
      </div>

      {/* Question Card */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-lg font-semibold mb-4">{question.text}</h2>
        <div className="space-y-3">
          {question.options.map((opt) => (
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

        <button
          onClick={handleSubmit}
          disabled={!selected}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-50"
        >
          Submit
        </button>

        {submitted && (
          <div
            className={`mt-4 p-3 rounded-lg text-center font-medium ${
              selected === question.correct ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
            }`}
          >
            {selected === question.correct
              ? "✅ Correct!"
              : `❌ Wrong! Correct answer: ${question.correct}`}
          </div>
        )}

        {/* Back button */}
        <Link href="/mock-tests" className="mt-6 inline-block text-blue-600 hover:underline">
          ← Back to Mock Tests
        </Link>
      </div>
    </div>
  );
}
