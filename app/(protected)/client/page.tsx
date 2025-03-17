"use client";


import { useCurrentUser } from "@/hooks/use-current-user";


const ClientPage = () => {
  const user = useCurrentUser();
return (
  <h1> You will Get Unique IB Link here soon... once verification done</h1>
);
}

export default ClientPage;