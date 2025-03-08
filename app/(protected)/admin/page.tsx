"use client";

import { Card } from "@/components/ui/card";
import { useCurrentRole } from "@/hooks/use-current-role";

const AdminPage = () => {
  const role = useCurrentRole();

  return (
    <Card className="w-[600px]">
      
    </Card>
  );
};

export default AdminPage;