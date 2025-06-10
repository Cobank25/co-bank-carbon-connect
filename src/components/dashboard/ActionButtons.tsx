
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, ArrowDownRight, LineChart } from "lucide-react";
import { Link } from "react-router-dom";

const ActionButtons = () => {
  return (
    <div className="grid grid-cols-1 gap-3">
      <Button className="bg-green-600 hover:bg-green-700 h-12" asChild>
        <Link to="/vender">
          <ArrowUpRight className="mr-2 h-4 w-4" />
          Vender Créditos
        </Link>
      </Button>
      
      <Button variant="outline" className="h-12" asChild>
        <Link to="/comprar">
          <ArrowDownRight className="mr-2 h-4 w-4" />
          Comprar Créditos
        </Link>
      </Button>
      
      <Button variant="outline" className="h-12" asChild>
        <Link to="/investir">
          <LineChart className="mr-2 h-4 w-4" />
          Investir
        </Link>
      </Button>
    </div>
  );
};

export default ActionButtons;
