
import Navbar from "./Navbar";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function nav() {
  const session = await getServerSession(authOptions);
  return <Navbar session={session} />;
}