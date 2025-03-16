"use client"
import { BeatLoader } from "react-spinners"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle2 } from "lucide-react"

const steps = ["Amount", "Payment Agent", "Account Details & Processing", "Confirmation"]

export function AddMoneyModal({ isOpen, onClose, onAddMoney }) {
  const [currentStep, setCurrentStep] = useState(0)
  const [amount, setAmount] = useState("")
  const [cardDetails, setCardDetails] = useState({ number: "", expiry: "", cvv: "" })
  const [otp, setOtp] = useState("")

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      onAddMoney(Number.parseFloat(amount))
      onClose()
    }
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="amount">Amount to Deposit</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        )
      case 1:
        return (
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">All Day Exchange</Label>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Accept All Mode Payments</Label>
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">PA Code: 445785 </Label>
                <Label htmlFor="cvv">
                  <br />
                  Will Connect on next step..{" "}
                </Label>
              </div>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">Payment Agent will share account details to Deposit...</p>
            <BeatLoader />
          </div>
        )
      case 3:
        return (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <p className="text-lg font-medium">Money Added Successfully</p>
            <p className="text-sm text-muted-foreground">${amount} has been added to your Checking account.</p>
          </div>
        )
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{steps[currentStep]}</DialogTitle>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          {renderStepContent()}
          <div className="flex justify-between">
            {currentStep > 0 && currentStep < steps.length - 1 && (
              <Button variant="outline" onClick={() => setCurrentStep(currentStep - 1)}>
                Back
              </Button>
            )}
            <Button onClick={handleContinue} className="ml-auto">
              {currentStep === steps.length - 1 ? "Close" : "Continue"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

