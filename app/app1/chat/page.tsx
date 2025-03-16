import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Chats</h2>
      <h3 className="font-medium pb-2">Where is my money held?</h3>
      <hr />
      <p className="pb-2 pt-2">
        Your money is held in secure financial institutions and is always
        available to you should you wish to withdraw. We don't use your money
        for our business purposes.
      </p>
      <br />
      <h3 className="font-medium pb-2">Where is my money held?</h3>
      <hr />
      <p className="pb-2 pt-2">
        Foreign exchange, or forex, is the global market of the world’s
        currencies, where the values of different currencies are pitted against
        each other in the form of forex pairs, such as EUR/USD etc.
        The forex market determines the exchange rates of each currency.
      </p>

      <div>
        <Button variant="destructive" size="sm">
          <a
            href="http://localhost:3000/app1"
            rel="noopener noreferer"
          >
            Live Chat Now
          </a>
        </Button>
      </div>
      <br />
      <div>
        <Button variant="destructive" size="sm">
          <a
            href="http://localhost:3000/app1"
            rel="noopener noreferer"
          >
            WhatsApp Chat Now
          </a>
        </Button>
      </div>
    </div>
  );
};

export default page;
