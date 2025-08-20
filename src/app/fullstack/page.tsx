"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FullstackPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            💻 Java Full Stack Preparation
          </h1>
          <p className="text-gray-600 text-lg">
            Prepare for full stack development interviews. Explore Java, Spring Boot, React, 
            databases, and system design concepts.
          </p>
        </div>

        {/* Placeholder Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>Backend (Java + Spring Boot)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Explore Java fundamentals, Spring Boot projects, REST APIs, and microservices.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>Frontend (React + Angular)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Master React, Angular basics, TypeScript, and building responsive UIs.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>Databases</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Learn SQL, NoSQL, query optimization, and schema design for interviews.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-all">
            <CardHeader>
              <CardTitle>System Design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Get familiar with high-level design, scalability, and cloud architecture.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
