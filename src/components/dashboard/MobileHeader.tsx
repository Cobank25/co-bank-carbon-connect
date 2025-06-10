
import React from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Bell, Menu, User } from "lucide-react";

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

interface MobileHeaderProps {
  userData: UserData | null;
  onToggleSideNav: () => void;
}

const MobileHeader = ({ userData, onToggleSideNav }: MobileHeaderProps) => {
  const getUserInitials = (nome: string) => {
    return nome.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          <Button variant="ghost" size="icon" onClick={onToggleSideNav}>
            <Menu className="h-5 w-5" />
          </Button>
          
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
            <span className="text-lg font-bold text-green-800">CoBank</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Notificações</SheetTitle>
                  <SheetDescription>Suas notificações recentes</SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-4">
                  <div className="border-l-4 border-green-500 pl-4 py-2">
                    <p className="font-medium">Cadastro concluído!</p>
                    <p className="text-sm text-gray-500">Seu cadastro foi processado com sucesso. Score: {userData?.score || 0}/10</p>
                    <p className="text-xs text-gray-400 mt-1">hoje</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-4 py-2">
                    <p className="font-medium">Bem-vindo ao CoBank!</p>
                    <p className="text-sm text-gray-500">Explore suas opções de créditos de carbono.</p>
                    <p className="text-xs text-gray-400 mt-1">hoje</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
            
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <SheetHeader>
                  <SheetTitle>Minha Conta</SheetTitle>
                  <SheetDescription>Gerenciar configurações da conta</SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b">
                    <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center">
                      <span className="text-green-700 font-medium">
                        {userData ? getUserInitials(userData.nome) : 'TB'}
                      </span>
                    </div>
                    <div>
                      <p className="font-medium">{userData?.nome || 'Thiago Bonini'}</p>
                      <p className="text-sm text-gray-500">{userData?.email || 'thiago@cobank.com.br'}</p>
                      {userData && (
                        <p className="text-xs text-gray-400">Score: {userData.score}/10</p>
                      )}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
