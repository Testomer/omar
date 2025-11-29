"use client"
import React from 'react'

export default function ContactTerminal() {
  const [input, setInput] = React.useState('')
  const [output, setOutput] = React.useState('')
  const [running, setRunning] = React.useState(false)

  function submit(e: React.FormEvent) {
    e.preventDefault()
    setRunning(true)
    setOutput('')
    const resp = `Acknowledged. Planning → Execution → Verification.\nSimulated Gemini 2.5 Flash (mock) response delivered in <50ms.`
    let i = 0
    const t = setInterval(() => {
      setOutput((s) => s + resp[i])
      i++
      if (i >= resp.length) { clearInterval(t); setRunning(false) }
    }, 8)
  }

  return (
    <div className="bg-surface p-4 rounded">
      <form onSubmit={submit} className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Describe task or command..." className="flex-1 bg-black/10 px-3 py-2 rounded mono text-slate-100" />
        <button className="px-4 py-2 bg-accent text-black rounded mono">Send</button>
      </form>

      <div className="mt-3 bg-black/10 p-3 rounded mono text-sm text-slate-100 whitespace-pre-wrap">{output}{running && '▌'}</div>
    </div>
  )
}
