import DashboardClient from "./DashboardClient";

export const metadata = { title: "Dashboard" };

export default async function DashboardPage() {
  // BYPASS LOGIN & DB
  const userData = {
    name: "Pelajar (Offline Mode)",
    xp: 1250,
    level: 5,
    streak: 3,
    completedItems: 42,
    studySessions: 12,
  };

  return <DashboardClient userData={userData} />;
}
