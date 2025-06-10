
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CircleDollarSign, ArrowUpRight, PlusCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface SimulatedData {
  totalCredits: number;
  certificatedCredits: number;
  pendingCredits: number;
  estimatedValue: number;
}

interface BalanceCardProps {
  displayData: SimulatedData;
}

const BalanceCard = ({ displayData }: BalanceCardProps) => {
  return (
    <Card className="mb-4 overflow-hidden">
      <div className="bg-gradient-to-r from-green-700 to-emerald-600 text-white p-4">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-green-100 text-sm">Saldo total de créditos</p>
            <h3 className="text-2xl font-bold mt-1">
              {displayData.totalCredits} tCO₂e
            </h3>
          </div>
          <CircleDollarSign className="h-10 w-10 opacity-80" />
        </div>
        <div className="mt-3 flex gap-2">
          <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800 text-xs" asChild>
            <Link to="/vender">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              Vender
            </Link>
          </Button>
          <Button size="sm" variant="outline" className="border-green-200 text-white hover:bg-green-800 text-xs">
            <PlusCircle className="mr-1 h-3 w-3" />
            Adicionar
          </Button>
        </div>
      </div>
      <CardContent className="p-4">
        <div className="grid grid-cols-1 gap-3">
          <div className="p-3 rounded-lg bg-gray-50">
            <p className="text-xs text-gray-500">Certificados</p>
            <p className="text-lg font-semibold mt-1">
              {displayData.certificatedCredits} tCO₂e
            </p>
            <p className="text-xs text-green-600 mt-1">Validado</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50">
            <p className="text-xs text-gray-500">Pendentes</p>
            <p className="text-lg font-semibold mt-1">
              {displayData.pendingCredits} tCO₂e
            </p>
            <p className="text-xs text-amber-600 mt-1">Em certificação</p>
          </div>
          <div className="p-3 rounded-lg bg-gray-50">
            <p className="text-xs text-gray-500">Valor estimado</p>
            <p className="text-lg font-semibold mt-1">
              R$ {displayData.estimatedValue.toLocaleString('pt-BR')}
            </p>
            <p className="text-xs text-blue-600 mt-1">R$ 150/tCO₂e</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BalanceCard;
