import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

const recentTransactions = [
  {
    id: "1",
    name: "Deposit",
    email: "USD Account",
    amount: "+$350.00",
    status: "success",
    date: "2025-02-20",
  },
  {
    id: "2",
    name: "Widthdraw",
    email: "USD Account",
    amount: "-$120.50",
    status: "pending",
    date: "2025-02-25",
  },
  {
    id: "3",
    name: "Deposit",
    email: "USD Account",
    amount: "+$1,000.00",
    status: "success",
    date: "2025-03-01",
  },
  {
    id: "4",
    name: "Widthdraw",
    email: "USD Account",
    amount: "-$50.75",
    status: "failed",
    date: "2025-03-11",
  },
  {
    id: "5",
    name: "Deposit",
    email: "Ethan Williams",
    amount: "+$720.00",
    status: "success",
    date: "2025-03-12",
  },
];

export function RecentTransactions() {
  return (
    <div className="space-y-4">
      {recentTransactions.map((transaction) => (
        <Card key={transaction.id} className="p-4">
          <CardContent className="flex items-center p-0">
            <Avatar className="h-10 w-10">
              <AvatarImage src={transaction.avatar} alt={transaction.name} />
              <AvatarFallback>{transaction.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="ml-4 flex-1 space-y-1">
              <p className="text-sm font-medium leading-none">{transaction.name}</p>
              <p className="text-xs text-muted-foreground">{transaction.email}</p>
            </div>
            <div className="ml-auto text-right">
              <p
                className={`text-sm font-medium ${transaction.amount.startsWith("+") ? "text-green-500" : "text-red-500"}`}
              >
                {transaction.amount}
              </p>
              <p className="text-xs text-muted-foreground">{transaction.date}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

