"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { RegisterSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/tokens";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(values);
  
 if (!validateFields.success) {
    return { error: "Invalid Fields" };
 }
   const { email, password, name }  = validateFields.data
   const hashedPassword = await bcrypt.hash(password, 10);

   const existingUser = await db.user.findUnique({
      where: {
         email,
      }
   });

   if (existingUser) {
      return { error: "Email Already in use!"}
   }

   await db.user.create({
      data: {
         name,
         email,
         password: hashedPassword,
      }
   });

   const verificationToken = await generateVerificationToken(email);
   
   await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token,
   )

   return { success: "Confirmation Email send!" };
};
