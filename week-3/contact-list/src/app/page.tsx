import Image from "next/image";
import ContactList from "@/components/ui/contactList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ContactList />
    </main>
  );
}
