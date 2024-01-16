import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Arjun | Portfolio",
  description: "Nextjs Tailwindcss Portfolio "
}

export default function Home() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
