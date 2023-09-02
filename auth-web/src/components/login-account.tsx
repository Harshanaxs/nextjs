"use client";

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
import { useRef } from "react";
import { signIn } from "next-auth/react";

export function LoginAccount() {
  const userName = useRef("");
  const pass = useRef("");

  const onSubmit = async () => {
    const result = await signIn("credentials", {
      username: userName.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "/dashboard",
    });
  };
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const cardStyle = {
    /* Add additional styling for your card here */
  };

  return (
    <div style={containerStyle}>
      <Card style={cardStyle}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your email and password below to sign in your account
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="m@example.com"
              onChange={(e) => (userName.current = e.target.value)}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              onChange={(e) => (pass.current = e.target.value)}
            />
          </div>

          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or You didn&apos;t have an account,
              <Link
                href={"/sign-up"}
                className="underline underline-offset-4 hover:text-primary"
              >
                Sign Up
              </Link>
            </span>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={onSubmit} className="w-full">
            Sign In
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
