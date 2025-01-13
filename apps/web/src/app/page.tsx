import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";
import { AddUser } from "../components/AddUser";
import { Header } from "@repo/ui/header";

const client = new PrismaClient();
export default async function Home() {
  const users = await client.user.findMany();
  return (
    <div className="bg-red-50 relative">
      <Header />
      <div className="h-[200vh]"></div>
    </div>
  );
}