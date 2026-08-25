import ProgressClient from "./ProgressClient";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export const metadata = { title: "Progress" };

export default async function ProgressPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return <ProgressClient />;
}
