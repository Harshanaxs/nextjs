import { Icons } from "@/components/icons";
import { Button } from "@/registry/new-york/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import Link from "next/link";
import { Backend_URL } from "@/lib/Constants";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type FormInputs = {
  name: string;
  email: string;
  password: string;
};

export function DemoCreateAccount() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const register = async () => {
    setIsLoading(true);
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      setIsLoading(false); // Reset loading state on error

      alert(res.statusText);
      return;
    }

    const response = await res.json();
    setIsLoading(false); // Reset loading state on error

    // alert("User Registered!");
    console.log({ response });
    router.push("/sign-in");
  };

  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const cardStyle = {};

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Enter your email below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Ranil W"
              onChange={(e) => (data.current.name = e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => (data.current.email = e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password </Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => (data.current.password = e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input id="confirm_password" type="password" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or Already have an account,
              <Link
                href={"/sign-in"}
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign In
              </Link>
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button
            onClick={(e) => register()}
            className={`w-full ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {isLoading ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              "Create account"
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
