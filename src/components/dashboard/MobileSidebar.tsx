
import React from "react";
import { Button } from "@/components/ui/button";
import { BarChart4, LineChart, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { Link } from "react-router-dom";

interface MobileSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const MobileSidebar = ({ isOpen, onToggle }: MobileSidebarProps) => {
  return (
    <>
      <aside 
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 p-4 z-40 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/b6213c32-ed1d-45af-94c8-396fc645d88e.png" alt="CoBank Logo" className="h-6 w-6" />
            <span className="font-bold text-green-800">CoBank</span>
          </div>
          <Button variant="ghost" size="sm" onClick={onToggle}>
            ×
          </Button>
        </div>
        
        <nav className="space-y-2">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/mobile-dashboard" onClick={onToggle}>
              <BarChart4 className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/vender" onClick={onToggle}>
              <ArrowUpRight className="mr-2 h-4 w-4" />
              Vender Créditos
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/comprar" onClick={onToggle}>
              <ArrowDownRight className="mr-2 h-4 w-4" />
              Comprar Créditos
            </Link>
          </Button>
          
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link to="/investir" onClick={onToggle}>
              <LineChart className="mr-2 h-4 w-4" />
              Investir
            </Link>
          </Button>
        </nav>
      </aside>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30" 
          onClick={onToggle}
        />
      )}
    </>
  );
};

export default MobileSidebar;
