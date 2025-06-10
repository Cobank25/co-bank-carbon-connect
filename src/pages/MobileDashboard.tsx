
import React, { useState, useEffect } from "react";
import MobileHeader from "@/components/dashboard/MobileHeader";
import MobileSidebar from "@/components/dashboard/MobileSidebar";
import ScoreCard from "@/components/dashboard/ScoreCard";
import BalanceCard from "@/components/dashboard/BalanceCard";
import MobileTabs from "@/components/dashboard/MobileTabs";
import ActionButtons from "@/components/dashboard/ActionButtons";

interface SimulatedData {
  totalCredits: number;
  certificatedCredits: number;
  pendingCredits: number;
  estimatedValue: number;
}

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  tipoGerador: string;
  tipoPropriedade: string;
  tamanhoArea: string;
  descricaoProjeto: string;
  score: number;
  simulatedData?: SimulatedData;
  registrationDate: string;
}

const MobileDashboard = () => {
  const [sideNavOpen, setSideNavOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setUserData(parsedData);
      console.log('Dados do usuário carregados no dashboard:', parsedData);
    } else {
      console.log('Nenhum dado de usuário encontrado no localStorage');
    }
  }, []);

  const toggleSideNav = () => {
    setSideNavOpen(!sideNavOpen);
  };

  const getDisplayData = (): SimulatedData => {
    if (userData?.simulatedData && userData.simulatedData.totalCredits > 0) {
      console.log('Usando dados simulados salvos:', userData.simulatedData);
      return userData.simulatedData;
    }
    
    // Se não há dados simulados salvos ou são zeros, recalcular
    if (userData?.score && userData.score > 0) {
      const area = parseFloat(userData.tamanhoArea) || 10;
      const baseCreditsPerHectare = 5;
      const scoreMultiplier = (userData.score / 10) * 2;
      
      const totalCredits = Math.round(area * baseCreditsPerHectare * (1 + scoreMultiplier));
      const certificatedCredits = Math.round(totalCredits * 0.8);
      const pendingCredits = totalCredits - certificatedCredits;
      const estimatedValue = totalCredits * 150;

      const calculatedData = {
        totalCredits,
        certificatedCredits,
        pendingCredits,
        estimatedValue
      };
      
      console.log('Recalculando dados com base no score:', calculatedData);
      return calculatedData;
    }
    
    // Dados padrão apenas se não há nenhum dado do usuário
    const defaultData = {
      totalCredits: 150,
      certificatedCredits: 120,
      pendingCredits: 30,
      estimatedValue: 22500
    };
    
    console.log('Usando dados padrão:', defaultData);
    return defaultData;
  };

  const displayData = getDisplayData();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MobileHeader userData={userData} onToggleSideNav={toggleSideNav} />
      
      <MobileSidebar isOpen={sideNavOpen} onToggle={toggleSideNav} />

      <div className="flex-1 overflow-auto p-4">
        <div className="mb-4">
          <h2 className="text-xl font-bold">
            Olá, {userData ? userData.nome.split(' ')[0] : 'Usuário'}!
          </h2>
          <p className="text-gray-500 text-sm">Bem-vindo ao seu painel de créditos de carbono.</p>
        </div>

        {userData && <ScoreCard userData={userData} />}

        <BalanceCard displayData={displayData} />

        <MobileTabs userData={userData} displayData={displayData} />

        <ActionButtons />
      </div>
    </div>
  );
};

export default MobileDashboard;
