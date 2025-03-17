"use client";

import { Card } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";

const AdminPage = () => {
  const role = useCurrentRole();

  return (
    <Card className="w-[100%] p-4 flex">
      <p> You will get IB Transaction History </p>
    </Card>
  );
};

export default AdminPage;