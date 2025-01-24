import { Button } from "@repo/ui/button";
import { PrismaClient } from "@repo/db/client";
import { AddUser } from "../components/AddUser";

const client = new PrismaClient();
export default async function Home() {
  // const users = await client.user.findMany();
  return (
    <div >
      <div className="h-[200vh]"></div>
    </div>
  );
}