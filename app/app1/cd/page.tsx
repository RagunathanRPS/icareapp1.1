import React from "react";

import Image from "next/image";
import homeImg from "@/download/tethertrc20.jpg";

import { Button } from "@/components/ui/button";
import { AlertCircle, Link } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Crypto Deposit</h2>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          Verify the address on this page before each deposit to avoid losing
          funds. Occasionally, the address could be updated.
        </AlertDescription>
      </Alert>
      <br />
      <h3 className="font-medium pb-2">
        Send only Tether TRC20 (tUSDT) to this address.
      </h3>
      <hr />
      <div className="pt-5 pb-5">
        <Image src={homeImg} alt={""} width={"200"} height={"200"} />
      </div>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Important</AlertTitle>
        <AlertDescription>
          To avoid loss of funds: <br />
          <hr />
          A minimum deposit value of 50.00 tUSDT is A minimum deposit value of
          50.00 tUSDT is required. <br />
          Otherwise, a fee is applied. <br />
          Only send Tether TRC20 (tUSDT) to this address.
          <br /> Incorrect transfers may result in the loss of funds.
        </AlertDescription>
      </Alert>
      <br/>
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Note</AlertTitle>
        <AlertDescription>
          You’ll receive an email when your deposit starts being
          processed. <br />
          <hr />
        </AlertDescription>
      </Alert>

      
      
    </div>
  );
};

export default page;
