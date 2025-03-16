"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PaymentModal } from "./payment-modal";
import { blob } from "stream/consumers";

const initialBills = [
  {
    id: 1,
    name: "MT5 Desktop Trader",

    dueDate: "Check downloads to install iCareForex MT5",
  },
  {
    id: 2,
    name: "MT5 Mobile Trader",
    dueDate: "Redirect ot Andoid Playstore to Install",
  },
  {
    id: 3,
    name: "MT5 iOS Trader",
    dueDate: "Redirect to Apple Store to Install",
  },
];

export function QuickBillPay() {
  const [bills, setBills] = useState(initialBills);
  const [selectedBill, setSelectedBill] = useState(null);

  const handlePaymentSuccess = (paidBillId) => {
    setBills(bills.filter((bill) => bill.id !== paidBillId));
    setSelectedBill(null);
  };
  const FILE_URL = "http://localhost:3000/download/mt5setup.zip";

  const downloadFileAtURL = (url) => {
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        const blobURL = window.URL.createObjectURL(new Blob([blob]));
        const filename = url.split("/").pop();
        const aTag = document.createElement("a");
        aTag.href = url;
        aTag.setAttribute("download", filename);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
      });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Get iCareForex MT5</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">MT5 Desktop Trader</p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div>
              <Button
                variant="outline"
                onClick={() => {
                  downloadFileAtURL(FILE_URL);
                }}
                size="sm"
              >
                Download
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">MT5 Mobile Android Trader</p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div>
              <Button variant="outline" size="sm">
                <a
                  href="https://play.google.com/store/apps/details?id=net.metaquotes.metatrader5&hl=en&referrer=ref_id%3D5188538669638737272%26server%3DIcareForex-Server&pli=1"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Install
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">MT5 iOS Trader</p>
              <p className="text-sm text-muted-foreground"></p>
            </div>
            <div>
              <Button variant="outline" size="sm">
                <a
                  href="https://apps.apple.com/us/app/metatrader-5/id413251709"
                  target="_blank"
                  rel="noopener noreferer"
                >
                  Install
                </a>
              </Button>
            </div>
          </div>

          <div className="flex items-center space-x-2"></div>
        </div>
      </CardContent>
      {selectedBill && (
        <PaymentModal
          bill={selectedBill}
          isOpen={!!selectedBill}
          onClose={() => setSelectedBill(null)}
          onPaymentSuccess={() => handlePaymentSuccess(selectedBill.id)}
        />
      )}
    </Card>
  );
}
