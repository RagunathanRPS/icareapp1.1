import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Help on Deposit & Widthdraw</h2>
      <h3 className="font-medium pb-2">
        Why can’t I see the funds deposited in my iCare Wallet?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        We process deposits immediately. If your funds don’t appear in your
        account within 24 hours, contact us via live chat. Provide the
        transaction details, including the amount, date, and time, so we can
        assist you quickly.
      </p>
      <br />
      <h3 className="font-medium pb-2">
        What do I do if I have reached my deposit limit?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        If you've hit the deposit limit, please wait 1-2 hours before trying
        again. Check that your browser is up to date and use incognito mode. If
        you still have problems, please contact us via live chat.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        Can I use someone else's payment method?
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        No, you cannot use someone else's payment method to deposit into iCare
        Wallet. If you use another person's payment method, your account will be
        suspended (if they are on iCare Wallet, their account will also be
        suspended). If you suspect that someone has used your payment method,
        let us know through live chat with your proof of ownership.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        What payment methods can I use for deposits and withdrawals?
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
        How long does it take for my deposits and withdrawals to be processed?
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
        What is the minimum deposit or withdrawal amount?
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
        Can I use the same address to make a cryptocurrency deposit?
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
