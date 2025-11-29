"use client"
import React from 'react'

const MODES = ["Text", "Images", "Code", "Video", "PDF"]

export default function MultiModalIndicator() {
  const [i, setI] = React.useState(0)

  React.useEffect(() => {
    const t = setInterval(() => setI((s) => (s + 1) % MODES.length), 1200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="px-3 py-1 rounded-md bg-surface text-sm text-slate-300 mono">
      <span className="text-slate-400">Multi-Modal:</span>{' '}
      <span className="text-accent ml-2">{MODES[i]}</span>
    </div>
  )
}
