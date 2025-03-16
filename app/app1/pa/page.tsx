import React from "react";
import { Button } from "@/components/ui/button";

const page = () => {
  return (
    <div>
      <h2 className="font-bold pb-10">Payment Agent</h2>
      <h3 className="font-medium pb-2">DISCLAIMER</h3>
      <hr />
      <p className="pb-2 pt-2">
        iCareForex is not affiliated with any payment agents. Customers deal
        with payment agents at their sole risk. Customers are advised to check
        the credentials of payment agents and the accuracy of any information
        about payment agents before using their services.
      </p>

      <br />
      <h3 className="font-medium pb-2">
        Important
      </h3>
      <hr />
      <p className="pb-2 pt-2">
        Some payment methods may not be listed here but payment agents may still
        offer them. If you can’t find your favourite method, contact the payment
        agents directly to check further.
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
