import { cn } from "@/lib/client";

type Props = {
  content: React.ReactNode;
  className?: string;
};

export default function Bubble({ content, className }: Readonly<Props>) {
  return (
    <div
      className={cn(
        "rounded-full backdrop-blur-sm border-2 border-gray-500",
        "flex justify-center items-center",
        "animate-bounce duration-1000",
        className
      )}
    >
      {content}
    </div>
  );
}
