import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp, Users, DollarSign, ArrowRight } from "lucide-react";

const metrics = [
  {
    id: 1,
    title: "All Day Exchange | PA Code:445785",
    subtitle: "Deposit & Widthraw, Accept All Mode Payments",
    icon: TrendingUp,
    status: "Reserved Funds",
    progress: 25,
    target: 100000,
    current: 25000,
    unit: "$",
  },
  {
    id: 2,
    title: "HighScale Exchange",
    subtitle: "Deposit, Accept All Mode Payments",
    icon: DollarSign,
    status: "Reserved Fund",
    progress: 10,
    target: 100000,
    current: 0,
    unit: "$",
  },
  {
    id: 3,
    title: "iCareForex Crypto Deposit",
    subtitle: "tUSDT, Tether TRC20 | eUSDT Tether ERC20 | BTC",
    icon: DollarSign,
    status: "Accept Maximum Crypto Deposit",
    progress: 10,
    target: 15000000,
    current: 15,
    unit: "$",
  },
];

const statusColors = {
  "Reserved Funds":
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  "Reserved Fund": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
  Ahead: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
};

export function BusinessMetrics() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Payment Agents</h2>
        <Button variant="outline" size="sm">
          <a href="http://localhost:3000/app1/pa" rel="noopener noreferer">
            Payment Agent Disclaimer
          </a>
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric) => (
          <Card key={metric.id}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {metric.title}
              </CardTitle>
              <metric.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <p className="text-xs text-muted-foreground">{metric.subtitle}</p>
              <div className="mt-2 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span
                    className={`px-2 py-1 rounded-full ${
                      statusColors[metric.status]
                    }`}
                  >
                    {metric.status}
                  </span>
                  <span className="text-muted-foreground">
                    {metric.current} / {metric.target} {metric.unit}
                  </span>
                </div>
                <div className="w-full bg-secondary rounded-full h-1.5">
                  <div
                    className="bg-primary h-1.5 rounded-full"
                    style={{ width: `${Math.min(metric.progress, 100)}%` }}
                  />
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="font-medium">
                    {metric.unit}
                    {metric.target.toLocaleString()}
                  </span>
                  <span className="text-muted-foreground">
                    {metric.progress}% complete
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
