"use client"
import React from 'react'
import { motion } from 'framer-motion'

export default function SettingsPage() {
  const [creativity, setCreativity] = React.useState(50)
  const [accuracy, setAccuracy] = React.useState(80)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-semibold">Model Settings (Mock)</h1>
      <p className="text-slate-400">Adjust sliders to simulate fine-tuning for Gemini 2.5 Flash (mock).</p>

      <div className="space-y-4">
        <div>
          <label className="block text-sm">Creativity: <span className="mono">{creativity}</span></label>
          <input type="range" min={0} max={100} value={creativity} onChange={(e) => setCreativity(Number(e.target.value))} className="w-full" />
        </div>

        <div>
          <label className="block text-sm">Accuracy: <span className="mono">{accuracy}</span></label>
          <input type="range" min={0} max={100} value={accuracy} onChange={(e) => setAccuracy(Number(e.target.value))} className="w-full" />
        </div>
      </div>

      <motion.div whileHover={{ scale: 1.02 }} className="inline-block bg-surface px-4 py-2 rounded-md glow-hover">
        <button className="text-accent mono">Apply (Simulate Fine-Tune)</button>
      </motion.div>
    </div>
  )
}
