"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CheckCircle2 } from "lucide-react";
import { BeatLoader } from "react-spinners";

const steps = ["Select Account", "Enter Amount", "Transfers", "Confirmation"];

const contacts = [
  {
    id: "1",
    name: "MTS Standard",
    phoneNumber: "+1 234 567 8901",
  },
  {
    id: "2",
    name: "iCare Wallet USD",
    phoneNumber: "+1 234 567 8901",
  },
];

export function RequestMoneyModal({ isOpen, onClose, onRequestMoney }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedContact, setSelectedContact] = useState(null);
  const [amount, setAmount] = useState("");
  const [otp, setOtp] = useState("");

  const handleContinue = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onRequestMoney(Number.parseFloat(amount), selectedContact);
      onClose();
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-4">
            <Label htmlFor="contact">From</Label>
            <Select
              onValueChange={(value) =>
                setSelectedContact(contacts.find((c) => c.id === value))
              }
            >
              <SelectTrigger id="contact">
                <SelectValue placeholder="Select a Account" />
              </SelectTrigger>
              <SelectContent>
                {contacts.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    {contact.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <br />
            <Label htmlFor="contact">To</Label>
            <Select
              onValueChange={(value) =>
                setSelectedContact(contacts.find((c) => c.id === value))
              }
            >
              <SelectTrigger id="contact">
                <SelectValue placeholder="Select a Account" />
              </SelectTrigger>
              <SelectContent>
                {contacts.map((contact) => (
                  <SelectItem key={contact.id} value={contact.id}>
                    {contact.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4">
            <Label htmlFor="amount">Amount to Transfer</Label>
            <Input
              id="amount"
              type="number"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Transfer Between the Accounts{" "}
            </p>
            <BeatLoader />
          </div>
        );
      case 3:
        return (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <p className="text-lg font-medium">Money Transfered</p>
            <p className="text-sm text-muted-foreground">
              ${amount} has been Transfered from {selectedContact.name}.
            </p>
          </div>
        );
    }
  };

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
              <Button
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
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
  );
}
