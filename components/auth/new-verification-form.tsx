"use client";
import { useCallback, useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useSearchParams } from "next/navigation";
import { newVerification } from "@/actions/new-verification";
import { BackButton } from "./back-button";
import {
  Card,
  CardFooter,
  CardHeader,

} from "@/components/ui/card";
import { Header } from "./header";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>();
  const [success, setSuccess] = useState<string | undefined>();

  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const onSubmit = useCallback(() => {
    if (success || error) return;

    if (!token) {
      setError("Missing Token!");
      return;
    }
    newVerification(token)
    .then((data) => {
      setSuccess(data.success);
      setError(data.error);
    })
    .catch(() => {
      setError("Something went wrong!");
    })
  }, [token, success, error]);

  useEffect(() => {
    onSubmit();

  }, [onSubmit]);

  return (
    <Card className="w-[400px]">
      <CardHeader>
        <Header label="Confirm your verification" />
        <div className="flex items-center justify-center pt-3">
          {!success && !error && (
            <BeatLoader />
          )}
          <FormSuccess message={success} />
          {!success && (
            <FormError message={error} />
          )}
          
        </div>
        
      </CardHeader>
      <CardFooter>
        <BackButton label="Back to Login" href="/auth/login" />
      </CardFooter>
    </Card>
  )
}