import DashboardClient from "./DashboardClient";

import { redirect } from "next/navigation";
import { auth } from "../../../../auth";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  const session = await auth();
  if (!session) {
    redirect("/login");
  }

  return <DashboardClient />;
}
