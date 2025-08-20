import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { problemId, code } = body

    // For now, just echo back
    return NextResponse.json({
      success: true,
      message: `Code received for problem ${problemId}`,
      codeSnippet: code.slice(0, 100) + (code.length > 100 ? "..." : "") // preview
    })
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error processing request" },
      { status: 400 }
    )
  }
}
