import { Input } from "./Input";
import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { Label } from "../label";

type InputProps = React.ComponentPropsWithoutRef<"input"> & {
  label?: string;
  id?: string;
  error?: string;
  hint?: string;
  required?: boolean;
  asChild?: boolean;
};

export const InputCustom = ({
  label,
  id,
  error,
  hint,
  required,
  className,
  asChild,
  ...props
}: InputProps) => {
  const Comp = asChild ? Slot : "div";
  const inputId = id || props.name;

  return (
    <Comp className="w-full space-y-1.5">
      {label && (
        <Label htmlFor={inputId}>
          {label} {required && <span className="text-red-500">*</span>}
        </Label>
      )}
      <Input
        id={inputId}
        className={cn(
          error && "border-destructive ring-2 ring-destructive",
          className
        )}
        {...props}
      />
      {error ? (
        <p className="text-sm text-destructive">{error}</p>
      ) : hint ? (
        <p className="text-sm text-muted-foreground">{hint}</p>
      ) : null}
    </Comp>
  );
};
