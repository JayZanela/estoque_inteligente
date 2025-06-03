"use client"

import { useState, useEffect } from "react"
import { Package, BarChart3, Box, MapPin } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

// Simulando dados vindos de uma API externa
const mockApiData = {
  system: {
    title: "gestao_estoque",
    version: "v1.0",
  },
  navigation: [
    {
      id: "estoque",
      title: "Estoque",
      icon: Package,
      isActive: true,
      subItems: [
        {
          id: "movimentacoes",
          title: "Movimentações",
          icon: BarChart3,
          url: "/movimentacoes",
        },
        {
          id: "produtos",
          title: "Produtos",
          icon: Box,
          url: "/produtos",
        },
        {
          id: "enderecos",
          title: "Endereços",
          icon: MapPin,
          url: "/enderecos",
        },
      ],
    },
  ],
}

export function AppSidebar() {
  const [menuData, setMenuData] = useState(mockApiData)
  const [expandedItems, setExpandedItems] = useState(["estoque"])

  // Simulando carregamento de dados da API
  useEffect(() => {
    const loadMenuData = async () => {
      // Simula delay de API
      await new Promise((resolve) => setTimeout(resolve, 100))
      setMenuData(mockApiData)
    }
    loadMenuData()
  }, [])

  const toggleExpanded = (itemId) => {
    setExpandedItems((prev) => (prev.includes(itemId) ? prev.filter((id) => id !== itemId) : [...prev, itemId]))
  }

  return (
    <Sidebar className="border-r border-green-800/20 bg-slate-950">
      <SidebarHeader className="border-b border-green-800/20 bg-slate-900/50">
        <div className="flex items-center gap-2 px-4 py-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-green-600">
            <Package className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-green-400">{menuData.system.title}</span>
            <span className="text-xs text-slate-400">{menuData.system.version}</span>
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="bg-slate-950">
        <SidebarGroup>
          <SidebarGroupLabel className="text-slate-400 text-xs uppercase tracking-wider">Sistema</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuData.navigation.map((item) => (
                <SidebarMenuItem key={item.id}>
                  <SidebarMenuButton
                    onClick={() => toggleExpanded(item.id)}
                    className={`
                      w-full justify-start gap-2 hover:bg-green-900/20 hover:text-green-400
                      ${item.isActive ? "bg-green-900/30 text-green-400 border-r-2 border-green-500" : "text-slate-300"}
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    <span>{item.title}</span>
                  </SidebarMenuButton>

                  {expandedItems.includes(item.id) && item.subItems && (
                    <SidebarMenuSub>
                      {item.subItems.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.id}>
                          <SidebarMenuSubButton
                            asChild
                            className="text-slate-400 hover:text-green-400 hover:bg-green-900/10"
                          >
                            <a href={subItem.url} className="flex items-center gap-2">
                              <subItem.icon className="h-3 w-3" />
                              {subItem.title}
                            </a>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  )}
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  )
}
