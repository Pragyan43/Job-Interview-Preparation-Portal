"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactNode, useState } from "react"
import { Toaster } from "sonner"
import { ThemeProvider } from "@/components/ui/theme-provider"

export function Providers({ children }: { children: ReactNode }) {
  
  const [queryClient] = useState(() => new QueryClient())

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <QueryClientProvider client={queryClient}>
        {children}
        <Toaster richColors position="top-right" /> {/* 👈 Toast provider */}
      </QueryClientProvider>
    </ThemeProvider>
  )
}
