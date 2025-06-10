
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  tipoGerador: string;
  tipoPropriedade: string;
  tamanhoArea: string;
  descricaoProjeto: string;
  score: number;
  registrationDate: string;
}

interface ScoreCardProps {
  userData: UserData;
}

const ScoreCard = ({ userData }: ScoreCardProps) => {
  return (
    <Card className="mb-4 border-l-4 border-green-500">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex justify-between items-center">
          Score de Sustentabilidade
          <span className="text-xl font-bold text-green-600">{userData.score}/10</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
          <div 
            className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full"
            style={{ width: `${(userData.score / 10) * 100}%` }}
          ></div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-gray-500">Área:</p>
            <p className="font-medium">{userData.tamanhoArea} ha</p>
          </div>
          <div>
            <p className="text-gray-500">Tipo:</p>
            <p className="font-medium capitalize">{userData.tipoPropriedade}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ScoreCard;
