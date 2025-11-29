"use client"
import React from 'react'

export default function APIBadge() {
  return (
    <a className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-surface text-sm text-slate-300 mono glow-hover" href="#api">
      <span className="bg-accent/10 text-accent px-2 py-1 rounded-sm text-xs">Developer Portal</span>
      <span className="text-slate-400">/ API Access (mock)</span>
    </a>
  )
}
