import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Transfers</h2>
      <h3 className="font-medium pb-2">Important</h3>
      <hr />
      <p className="pb-2 pt-2">
        You may transfer between your USD, cryptocurrency, iCareforex MT5, and
        cTrader. Each day, you can make up to 10 transfers between your iCare
        Wallet accounts, up to 10 transfers between your iCare Wallet and
        iCareForex MT5 accounts, up to 10 transfers between your iCare Wallet
        and iCareForex cTrader accounts, and up to 10 transfers between your
        iCare Wallet and iCareForex X accounts. Transfer limits may vary
        depending on the exchange rates. We do not charge a transfer fee for
        transfers in the same currency between your USD and iCareForex MT5
        accounts, between your USD and iCareForex cTrader accounts, and between
        your USD and iCareForex X accounts. Please bear in mind that some
        transfers may not be possible. Transfers may be unavailable due to high
        volatility or technical issues and when the exchange markets are closed.
      </p>

      <div>
        <Button variant="destructive" size="sm">
          <a href="http://localhost:3000/app1" rel="noopener noreferer">
            Transfer Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default page;
