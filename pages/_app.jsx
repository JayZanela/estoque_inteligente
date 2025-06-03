"use client";

import { BarChart3, Box, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar-layout";
import { HeaderLayout } from "@/components/header-layout";
import "../styles/globals.css" // ou o caminho para seu CSS com Tailwind



function MainContent() {
  const handleBarcodeInput = (value) => {
    console.log("Código de barras recebido:", value);
    // Aqui você pode adicionar lógica para processar códigos de barras
  };

  const quickAccessItems = [
    {
      title: "Movimentações",
      description: "Registrar entradas e saídas de produtos",
      icon: BarChart3,
      href: "/movimentacoes",
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      title: "Produtos",
      description: "Gerenciar catálogo de produtos",
      icon: Box,
      href: "/produtos",
      color: "bg-green-600 hover:bg-green-700",
    },
    {
      title: "Endereços",
      description: "Configurar localizações do estoque",
      icon: MapPin,
      href: "/enderecos",
      color: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <div className="flex-1 bg-slate-900 min-h-screen">
      {/* Header */}
      <HeaderLayout onBarcodeInput={handleBarcodeInput} />

      {/* Conteúdo principal */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Sistema de Gestão de Estoque
            </h1>
            <p className="text-slate-400">
              Use o menu à esquerda para acessar Movimentações, Produtos ou
              Endereços
            </p>
          </div>

          {/* Cards de acesso rápido */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickAccessItems.map((item) => (
              <Card
                key={item.title}
                className="bg-slate-800 border-slate-700 hover:border-green-500/50 transition-all duration-200"
              >
                <CardHeader className="pb-3">
                  <div
                    className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center mb-3`}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white text-lg">
                    {item.title}
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    {item.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    asChild
                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                  >
                    <a href={item.href}>Acessar {item.title}</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-800 rounded-full border border-slate-700">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-300">
                Sistema online e operacional
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function StockManagementSystem() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-slate-900">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <MainContent />
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
