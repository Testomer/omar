"use client"
import React from 'react'

export default function LanguageSelector() {
  const [lang, setLang] = React.useState('EN')

  return (
    <div className="inline-flex items-center gap-2 bg-surface px-3 py-1 rounded-md">
      <select value={lang} onChange={(e) => setLang(e.target.value)} className="bg-transparent text-slate-200 mono">
        <option value="EN">EN</option>
        <option value="FR">FR</option>
      </select>
      <span className="text-xs text-slate-400">+50 Languages Supported</span>
    </div>
  )
}
