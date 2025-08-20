"use client";

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Database, Layout, Laptop } from "lucide-react";

export default function FullstackPage() {
  const fullstackTopics = [
    {
      title: "Backend (Java + Spring Boot)",
      description:
        "Explore Java fundamentals, Spring Boot projects, REST APIs, and microservices.",
      href: "/fullstack/backend",
      icon: <Server className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-purple-500 to-indigo-500",
    },
    {
      title: "Frontend (React + Angular)",
      description:
        "Master React, Angular basics, TypeScript, and building responsive UIs.",
      href: "/fullstack/frontend",
      icon: <Code className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-green-400 to-teal-500",
    },
    {
      title: "Databases",
      description:
        "Learn SQL, NoSQL, query optimization, and schema design for interviews.",
      href: "/fullstack/databases",
      icon: <Database className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      title: "System Design",
      description:
        "Get familiar with high-level design, scalability, and cloud architecture.",
      href: "/fullstack/system-design",
      icon: <Layout className="w-6 h-6 text-white" />,
      color: "bg-gradient-to-r from-pink-500 to-red-500",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-gray-100 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left mb-12 gap-4">
          
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              💻 Java Full Stack Preparation
            </h1>
            <p className="text-gray-700 text-lg max-w-xl">
              Prepare for full stack development interviews. Explore Java, Spring Boot, React, 
              databases, and system design concepts.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {fullstackTopics.map((topic) => (
            <Link key={topic.title} href={topic.href}>
              <Card
                className={`flex flex-col justify-between hover:shadow-2xl transform hover:-translate-y-1 transition-all cursor-pointer rounded-2xl overflow-hidden border-0`}
              >
                <div className={`p-6 ${topic.color} flex items-center gap-4`}>
                  {topic.icon}
                  <CardTitle className="text-white text-lg font-bold">{topic.title}</CardTitle>
                </div>
                <CardContent className="p-6 bg-white">
                  <p className="text-gray-700">{topic.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
