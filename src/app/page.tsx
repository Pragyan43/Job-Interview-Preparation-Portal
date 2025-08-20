"use client"

import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100">
      {/* Top Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white/70 backdrop-blur-md shadow-md">
        <h1 className="text-2xl font-bold text-gray-900">
          🚀 Interview Preparation Portal
        </h1>
        <div className="space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 rounded-xl bg-green-600 text-white font-medium hover:bg-green-700 transition"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
          Crack Your Dream Job 💼
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-6">
          Welcome to the <span className="font-semibold text-blue-600">ultimate interview prep hub</span>.  
          Whether you’re brushing up on <span className="text-green-600">DSA concepts</span>,  
          mastering <span className="text-blue-700">Java Full Stack development</span>,  
          or testing yourself with <span className="text-pink-600">mock interviews</span> –  
          we’ve got you covered. Stay consistent, practice smart, and land your dream job!
        </p>
      </section>

      {/* Feature Cards */}
      <section className="container mx-auto px-6 grid md:grid-cols-3 gap-8 pb-12">
        {/* DSA */}
        <div className="rounded-2xl bg-green-50 p-6 shadow hover:shadow-lg transition w-[320px] mx-auto h-full flex flex-col">
          <h3 className="text-xl font-semibold text-green-700">🧩 DSA Preparation</h3>
          <p className="mt-2 text-gray-600 text-sm flex-grow">
            Solve coding problems and sharpen your Data Structures & Algorithm skills.
          </p>
          <Link href="/dsa" className="mt-4 text-green-700 font-medium hover:underline">
            Start Practice →
          </Link>
        </div>

        {/* Full Stack */}
        <div className="rounded-2xl bg-blue-50 p-6 shadow hover:shadow-lg transition w-[320px] mx-auto h-full flex flex-col">
          <h3 className="text-xl font-semibold text-blue-700">💻 Java Full Stack</h3>
          <p className="mt-2 text-gray-600 text-sm flex-grow">
            Prepare for Full Stack interviews with Java, Spring Boot, React, and more.
          </p>
          <Link href="/fullstack" className="mt-4 text-blue-700 font-medium hover:underline">
            Explore →
          </Link>
        </div>

        {/* Mock Tests */}
        <div className="rounded-2xl bg-pink-50 p-6 shadow hover:shadow-lg transition w-[320px] mx-auto h-full flex flex-col">
          <h3 className="text-xl font-semibold text-pink-700">⚡ Mock Tests</h3>
          <p className="mt-2 text-gray-600 text-sm flex-grow">
            Practice with real interview-style mock tests and boost your confidence.
          </p>
          <Link href="/mock-tests" className="mt-4 text-pink-700 font-medium hover:underline">
            Take a Test →
          </Link>
        </div>
      </section>
    </div>
  )
}
