import { getUserAuth } from "@/lib/auth/utils";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "@/components/ui/ThemeToggle";

export default async function Navbar() {
  const { session } = await getUserAuth();

  if (session?.user) {
    return (
      <div className="bg-popover border-b mb-2 md:p-0 px-4">
      <nav className="py-2 flex items-center justify-between transition-all duration-300 max-w-3xl mx-auto">
        <h1 className="font-semibold hover:opacity-75 transition-hover cursor-pointer">
          <Link href="/">Logo</Link>
        </h1>
        <div className="space-x-2 flex items-center">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </nav>
      </div>
    );
  } else return null;
}
