import { Progress } from "@nextui-org/react";

export default function Loading() {
  return (
    <Progress
      size="sm"
      isIndeterminate
      aria-label="Loading..."
      className="max-w-md max-h-md"
    />
  );
}
