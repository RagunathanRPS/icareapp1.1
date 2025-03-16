import { auth } from "@/auth";

export const currentUser = async (name: void) => {
  
  const session = await auth();
  return session?.user;

};
export const currentRole = async () => {
  
  const session = await auth();
  return session?.user?.role;

};