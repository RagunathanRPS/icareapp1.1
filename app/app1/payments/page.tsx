import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Payments</h2>
      <h3 className="font-medium pb-2">
        Can I transfer the funds in my account to another person's account?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        No. Fund transfers can only be made within your own accounts.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        Can I use my Binance wallet to make the cryptocurrency deposit?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        You can use any wallet to make the deposit as long as the wallet
        supports the network we are using.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        Why can't I see any payment methods on the Withdrawal page?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        Your payment method will only appear on the Withdrawal page after you've
        made your first deposit. If you've made a deposit and still don't see
        your payment method on the Withdrawal screen, it's probably because the
        payment method you used for the deposit cannot be used for withdrawals.
        In this case, you may need to use a different payment method that
        supports withdrawals, too. Contact us via live chat if you need help. .
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
            Deposit Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default page;
