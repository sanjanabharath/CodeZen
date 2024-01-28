import Image from "next/image";
import { UserAccount } from "@/components/UserAccount";

export default function Home() {
  return (
    <main>
      <UserAccount signUp={true} />
    </main>
  );
}
