import { Hero } from "@/components/hero";
import { Collections } from "@/components/collections";
import { Process } from "@/components/process";
import { Story } from "@/components/story";
import { ConsultationForm } from "@/components/consultation-form";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Process />
      <Story />
      <ConsultationForm />
    </>
  );
}
