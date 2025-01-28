import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umamahesh | Portfolio",
  description: "Nextjs Tailwindcss Portfolio "
}

export default function Home() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
