"use client"

import Link from "next/link"
import { problems } from "@/data/problems"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DsaPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            📘 DSA Problems
          </h1>
          <p className="text-gray-600 text-lg">
            Practice and improve your coding skills with these DSA challenges.
          </p>
        </div>

        {/* Problems Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, i) => (
            <Link key={i} href={`/problems/${problem.id}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center text-lg">
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
      </div>
    </main>
  )
}
