"use client"
import React from 'react'

const LINES = [
  "Initiating mission: Build autonomous AI portfolio...",
  "Analyzing assets, compressing responses for low latency...",
  "Simulated core: Gemini 2.5 Flash API — multi-modal, high-speed"
]

export default function HeroTerminal() {
  const [display, setDisplay] = React.useState('')

  React.useEffect(() => {
    let mounted = true
    let i = 0
    let char = 0

    function step() {
      if (!mounted) return
      const line = LINES[i]
      if (char < line.length) {
        setDisplay((s) => s + line[char])
        char++
        setTimeout(step, 20)
      } else {
        setDisplay((s) => s + '\n')
        i = (i + 1) % LINES.length
        char = 0
        setTimeout(() => {
          setDisplay('')
          step()
        }, 1100)
      }
    }

    step()
    return () => { mounted = false }
  }, [])

  return (
    <pre className="bg-surface p-6 rounded-md mono text-slate-100 whitespace-pre-wrap">
      <span className="text-accent">{display}</span>
      <span className="text-accent">▌</span>
    </pre>
  )
}
