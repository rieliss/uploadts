"use client";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div>
      <Button type="submit" variant="destructive">
        {pending ? "Voting..." : `Vote`}
      </Button>
    </div>
  );
}

export function SearchButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      className="bg-secondary text-secondary-foreground hover:bg-secondary/80"
      type="submit"
    >
      {pending ? "..." : "Search"}
    </Button>
  );
}
