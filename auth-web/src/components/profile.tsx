import { ChevronDownIcon } from "@radix-ui/react-icons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/registry/new-york/ui/avatar";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/registry/new-york/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/registry/new-york/ui/popover";
interface ProfileProps {
  name: string;
  email: string;
}
export function Profile({ name, email }: ProfileProps) {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>
            You&apos;re Lucky! This page only allowed for Authenticated Users.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Member 1 */}
          <div className="flex items-center justify-between space-x-4">
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="/avatars/01.png" />
                <AvatarFallback>OM</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{name}</p>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
