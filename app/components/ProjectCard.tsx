"use client"
import React from 'react'

function CodeBlockMock({ code }: { code: string }) {
  const [running, setRunning] = React.useState(false)
  const [output, setOutput] = React.useState('')

  function run() {
    setRunning(true)
    setOutput('')
    const txt = "Simulated output: ✅ All checks passed. Runtime 12ms."
    let i = 0
    const t = setInterval(() => {
      setOutput((s) => s + txt[i])
      i++
      if (i >= txt.length) { clearInterval(t); setRunning(false) }
    }, 8)
  }

  return (
    <div className="bg-black/20 rounded p-3">
      <pre className="mono text-sm text-slate-100 mb-3"><code>{code}</code></pre>
      <div className="flex items-center gap-3">
        <button onClick={run} className="px-3 py-1 bg-accent text-black rounded mono">Run / Execute</button>
        <div className="text-sm text-slate-400">{running ? 'Running...' : 'Idle'}</div>
      </div>
      {output && <pre className="mt-3 mono text-sm text-slate-200 bg-black/10 p-2 rounded">{output}</pre>}
    </div>
  )
}

export default function ProjectCard({ project }: { project: any }) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="p-5 rounded-lg bg-surface border border-slate-800/40">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="text-slate-400 text-sm mt-1">{project.summary}</p>
          <div className="flex gap-2 mt-3">
            {project.tags.map((t: string) => (
              <span key={t} className="text-xs px-2 py-1 bg-slate-900/40 rounded mono">{t}</span>
            ))}
          </div>
        </div>

        <div className="text-right">
          <div className="mb-2 text-sm text-green-400">Test Suite: 98% Coverage, 12/12 Passed</div>
          <button onClick={() => setOpen((s) => !s)} className="px-3 py-1 rounded bg-accent text-black mono">
            {open ? 'Close' : 'Open'} Case Study
          </button>
        </div>
      </div>

      {open && (
        <div className="mt-4 space-y-4">
          <div className="flex gap-4">
            <div className="w-1/2 bg-black/20 p-3 rounded">
              <div className="text-xs text-slate-400 mb-2">Data Grounding Log</div>
              <pre className="mono text-sm text-slate-100 bg-transparent">
{project.groundingLog.map((g: any) => `> ${g.query} — ${g.source}\n`).join('')}
              </pre>
            </div>

            <div className="w-1/2 p-3 rounded bg-black/20">
              <div className="text-xs text-slate-400">Fact-Checking</div>
              <div className="mt-2 inline-block bg-green-900/30 text-green-300 px-3 py-1 rounded mono">Sources Verified: {project.factCheck}</div>
            </div>
          </div>

          <div>
            <div className="text-sm text-slate-400 mb-2">Code Execution (Mock)</div>
            <CodeBlockMock code={`console.log('Simulated run for ${project.id}');\n// All tests passed`} />
          </div>
        </div>
      )}
    </div>
  )
}
