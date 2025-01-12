import Image, { type ImageProps } from "next/image";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div >
      <h1 className="text-red-400">
        hello world!
      </h1>
      <Button appName="Next.js">Click me</Button>
    </div>
  );
}
