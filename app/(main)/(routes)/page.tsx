import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
   <div className="flex justify-between p-4">
     <p className="text-3xl font-bold text-indigo-500">this is protected ROutes for users</p>
     <div className="flex gap-3">
     <ModeToggle />
     <UserButton afterSignOutUrl="/sign-in" />
     </div>
   </div>
  );
}
