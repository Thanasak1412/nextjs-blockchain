import { cn } from "@/lib/client";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Button({ className, children }: Readonly<Props>) {
  return (
    <button
      className={cn(
        "rounded-md p-1.5 flex flex-row items-center justify-between uppercase",
        "text-xs font-semibold text-center",
        className
      )}
    >
      {children}
    </button>
  );
}
