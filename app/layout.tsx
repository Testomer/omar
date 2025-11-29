import '../../styles/globals.css'
import React from 'react'

export const metadata = { title: 'OMAR AI Studio', description: 'Autonomous agent portfolio — simulated Gemini 2.5 Flash API' }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <div className="min-h-screen flex flex-col bg-background">
          <main className="flex-1 container mx-auto px-6 py-8">{children}</main>
          <footer className="w-full border-t border-slate-800/40 p-4">
            <div className="container mx-auto text-sm text-slate-400 flex items-center justify-between">
              <div>OMAR AI Status: Online</div>
              <div className="mono">Core Model: Gemini 2.5 Flash | Latency: &lt;50ms</div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  )
}
