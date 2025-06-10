
import React from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from "recharts";

interface ChartDataPoint {
  date: string;
  value: number;
}

interface InvestmentChartProps {
  data: ChartDataPoint[];
  color: string;
  height?: number;
}

const InvestmentChart = ({ data, color, height = 120 }: InvestmentChartProps) => {
  const chartConfig = {
    value: {
      label: "Valor",
      color: color,
    },
  };

  return (
    <div style={{ height: `${height}px` }}>
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10 }}
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 2', 'dataMax + 2']}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value) => [`R$ ${Number(value).toFixed(2)}`, "Valor"]}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color}
              strokeWidth={2}
              dot={false}
              activeDot={{ r: 4, stroke: color, strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default InvestmentChart;
