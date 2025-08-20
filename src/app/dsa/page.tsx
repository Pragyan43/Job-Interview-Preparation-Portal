"use client"

import Link from "next/link"
import { problems } from "@/data/problems"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DsaPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-3">
            📘 DSA Preparation
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Level up your problem-solving skills with curated{" "}
            <span className="font-semibold text-blue-600">Data Structures</span>{" "}
            and <span className="font-semibold text-purple-600">Algorithms</span> problems. 
            Practice by difficulty, challenge yourself, and get job-ready 🚀.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, i) => (
            <Link key={i} href={`/problems/${problem.id}`}>
              <Card className="cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-lg text-gray-800">
                    <span>{i + 1}. {problem.title}</span>
                    <Badge
                      variant={
                        problem.difficulty === "Easy"
                          ? "secondary"
                          : problem.difficulty === "Medium"
                          ? "default"
                          : "destructive"
                      }
                    >
                      {problem.difficulty}
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Solve this problem and test your coding skills.
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-14 text-gray-600">
          ✨ Keep practicing, one problem at a time. Consistency is key! 💡
        </div>
      </div>
    </main>
  )
}
