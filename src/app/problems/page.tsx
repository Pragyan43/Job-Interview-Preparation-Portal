"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { problems } from "@/data/problems"  

export default function ProblemsPage() {
  const router = useRouter()

  return (
    <div className="p-6 grid gap-4">
      <h2 className="text-2xl font-semibold mb-4">DSA Problems</h2>
      {problems.map((p) => (
        <Card key={p.id} className="hover:shadow-md">
          <CardContent className="flex items-center justify-between p-4">
            <div>
              <h3 className="font-medium">{p.title}</h3>
              <p className="text-sm text-gray-500">{p.difficulty}</p>
            </div>
            <Button onClick={() => router.push(`/problems/${p.id}`)}>Solve</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
