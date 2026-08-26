import * as React from "react";

import { cn } from "./utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "resize-none border-b-grey placeholder:text-purple-light/50 focus-visible:border-purple-dark/60 focus-visible:ring-purple-dark/60 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-grey-bg flex field-sizing-content min-h-16 w-full rounded-md border bg-grey-bg px-3 py-2 text-primary-text transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
