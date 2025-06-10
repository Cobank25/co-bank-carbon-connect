
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
    <div 
      style={{ height: `${height}px` }} 
      className="bg-gradient-to-b from-gray-50 to-white rounded-lg border border-gray-200 shadow-sm"
    >
      <ChartContainer config={chartConfig}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
            <defs>
              <linearGradient id={`gradient-${color.replace('#', '')}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={color} stopOpacity={0.3}/>
                <stop offset="95%" stopColor={color} stopOpacity={0.05}/>
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 10, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fontSize: 10, fill: '#6b7280' }}
              axisLine={false}
              tickLine={false}
              domain={['dataMin - 1', 'dataMax + 1']}
            />
            <ChartTooltip 
              content={<ChartTooltipContent />}
              formatter={(value) => [`R$ ${Number(value).toFixed(2)}`, "Valor"]}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke={color}
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 4, stroke: color, strokeWidth: 2, fill: '#fff' }}
              fill={`url(#gradient-${color.replace('#', '')})`}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  );
};

export default InvestmentChart;
