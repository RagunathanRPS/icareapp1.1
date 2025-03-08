import { headers } from "next/headers";
import { BackButton } from "./back-button";

import {
  Card,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { Header } from "./header";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

export const ErrorCard = () => {
  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label="Oops! Something went wrong" />
        <div className="flex items-center justify-center pt-3">
          <ExclamationTriangleIcon className="text-destructive" />
        </div>
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to Login" href="/auth/login" />
      </CardFooter>
    </Card>
  );
};