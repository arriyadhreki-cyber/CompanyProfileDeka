import { Hero } from "@/components/sections/home/Hero";
import { ThinkCreateGrow } from "@/components/sections/home/ThinkCreateGrow";

export const metadata = {
  title: "Studio Kreatif & Digital Agency",
  description: "DEKA CREATIVELY membantu bisnis Anda tumbuh melalui website, desain grafis, dan dokumentasi.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ThinkCreateGrow />
    </>
  );
}