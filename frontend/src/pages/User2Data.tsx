import '../App.css';

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A bar chart";

const chartData = [
  { month: "Plano", desktop: 186 },
  { month: "Coppell", desktop: 305 },
  { month: "Frisco", desktop: 237 },
  { month: "Fort Worth", desktop: 73 },
  { month: "Grapevine", desktop: 209 },
  { month: "Arlington", desktop: 214 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

// Custom Tooltip component to show city name and value
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip bg-white border border-gray-300 p-2 rounded shadow">
        <p className="label">{`City: ${payload[0].payload.month}`}</p>
        <p className="intro">{`Visitors: ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export function User2Data() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Bar Chart of City Population</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
      </CardFooter>
    </Card>
  );
}

export default User2Data;
