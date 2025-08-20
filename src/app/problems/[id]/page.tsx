"use client"

import Editor from "@monaco-editor/react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { problems } from "@/data/problems"
import { useParams } from "next/navigation"

export default function ProblemPage() {
  const { id } = useParams() as { id: string }  // ✅ no warning anymore
  const [code, setCode] = useState("// Write your solution here")
  const [loading, setLoading] = useState(false)

  const problem = problems.find((p) => p.id.toString() === id)

  const handleRun = () => {
    toast.info("Code execution simulated 🚀")
  }

  const handleSubmit = async () => {
    if (!problem) return
    setLoading(true)

    try {
      const res = await fetch("/api/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ problemId: problem.id, code })
      })

      const data = await res.json()
      if (data.success) {
        toast.success(`✅ ${data.message}`)
      } else {
        toast.error("❌ Submission failed")
      }
    } catch (err) {
      toast.error("⚠️ Error connecting to server")
    } finally {
      setLoading(false)
    }
  }

  if (!problem) {
    return <div className="p-6 text-red-500">❌ Problem not found</div>
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-2">{problem.title}</h2>
      <p className="text-sm text-gray-500 mb-4">Difficulty: {problem.difficulty}</p>

      <div className="mb-4">
        <p className="text-gray-700">{problem.statement}</p>
      </div>

      <div className="mt-6 mb-6">
        <h3 className="font-semibold">Examples:</h3>
        <ul className="list-disc list-inside text-sm text-gray-700">
          {problem.examples.map((ex, i) => (
            <li key={i} className="mb-2">
              <p><strong>Input:</strong> {ex.input}</p>
              <p><strong>Output:</strong> {ex.output}</p>
              {ex.explanation && (
                <p><strong>Explanation:</strong> {ex.explanation}</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      <Editor
        height="400px"
        defaultLanguage="javascript"
        value={code}
        onChange={(val) => setCode(val || "")}
        theme="vs-dark"
      />

      <div className="mt-4 flex gap-2">
        <Button onClick={handleRun}>Run</Button>
        <Button onClick={handleSubmit} variant="secondary" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success(problem.hint)}
        >
          Get Hint
        </Button>
      </div>
    </div>
  )
}
