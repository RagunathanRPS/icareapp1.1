import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Transactions</h2>
      <h3 className="font-medium pb-2">
        How can I Download my all transaction history?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        You can find recent transactions in deshboard, and your can get all the transaction history on request through live chat.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        What payment methods can I use for withdrawals?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        You can use debit and credit cards, e-wallets, cryptocurrency wallets,
        online banking, and for deposits and withdrawals (see our Payment
        methods page for a detailed list). Once you log in to your iCare Wallet,
        you’ll be able to see payment methods available in your country on the
        Deshboard page.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        How long does it take for my withdrawals to be processed?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        We process your deposits and withdrawals internally within 24 hours
        (depending on your payment method and internal checks). It may take
        longer for your funds to reach you due to the different processing times
        by banks and payment service providers. See our Payment methods page for
        a complete list of the processing times for each payment method.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        What is the minimum withdrawal amount?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        The minimum deposit and withdrawal amount varies depending on the
        payment method. The lowest deposit and withdrawal amount is 10 USD via
        e-wallets. See our Payment methods page for a complete list of payment
        methods and their minimum deposit and withdrawal amounts.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        Can I use the same address to make a cryptocurrency widthdraw?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        Please generate an address on the cryptocurrency deposit page whenever
        you want to make a deposit. Always use a freshly generated address to
        ensure accuracy.
      </p>
      <div>
        <Button variant="destructive" size="sm">
          <a href="http://localhost:3000/app1" rel="noopener noreferer">
            See Transactions
          </a>
        </Button>
      </div>
    </div>
  );
};

export default page;
