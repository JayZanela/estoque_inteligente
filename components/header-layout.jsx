"use client"

import { useState, useEffect } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"

export function HeaderLayout({ onBarcodeInput }) {
  const [searchValue, setSearchValue] = useState("")
  console.log('Renderizando HeaderLayout')

  useEffect(() => {
    if (searchValue) {
      console.log("Valor detectado via useEffect:", searchValue)
      if (onBarcodeInput) {
        onBarcodeInput(searchValue)
      }
    }
  }, [searchValue, onBarcodeInput])

  return (
    <div className="border-b border-green-800/20 bg-slate-950/50 p-6">
      <div className="flex items-center gap-4 max-w-2xl mx-auto">
        {/* Botão de toggle do menu */}
        <SidebarTrigger className="text-green-400 hover:text-green-300 hover:bg-green-900/20 p-2 rounded-md transition-colors" />

        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
          <Input
            type="text"
            placeholder="Digite ou escaneie código de barras..."
            value={searchValue}
            onInput={(e) => setSearchValue(e.target.value)}
            autoFocus
            className="pl-10 h-12 text-lg bg-slate-800 border-green-800/30 focus:border-green-500 focus:ring-green-500/20 text-white placeholder:text-slate-400"
          />
        </div>
      </div>
      <p className="text-xs text-slate-400 mt-2 text-center">Campo otimizado para leitores de código de barras</p>
    </div>
  )
}
