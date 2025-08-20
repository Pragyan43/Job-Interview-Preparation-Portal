"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export function SubmitButton() {
  return (
    <Button
      variant="default"
      onClick={() => toast.info("Form submitted!")}
    >
      Submit
    </Button>
  );
}
