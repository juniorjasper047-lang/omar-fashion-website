"use client";

import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Loader2, Send } from "lucide-react";
import { submitConsultation } from "@/app/actions";
import { consultation, brand } from "@/lib/content";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  whatsapp: z.string().min(6, "Enter a valid WhatsApp number"),
  email: z.string().email("Enter a valid email"),
  style: z.string().min(2, "Tell us the style or occasion"),
  notes: z.string().optional(),
  contactTime: z.string().optional(),
  budget: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

export function ConsultationForm() {
  const [pending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = (data: FormValues) => {
    startTransition(async () => {
      const res = await submitConsultation(data);
      if (res.ok) {
        toast.success("Thank you. We'll contact you within 24 hours to schedule your consultation.");
        reset();
      } else {
        toast.error(res.error || "Something went wrong. Please try WhatsApp instead.");
      }
    });
  };

  return (
    <section id="consultation" className="bg-muted/30 py-20 sm:py-28">
      <div className="container-x grid items-start gap-12 lg:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">{consultation.eyebrow}</p>
          <h2 className="font-serif text-4xl sm:text-5xl">{consultation.title}</h2>
          <p className="mt-4 max-w-md text-foreground/70">{consultation.subtitle}</p>
          <div className="mt-8 space-y-3 text-sm text-foreground/70">
            <p>
              Email ·{" "}
              <a href={`mailto:${brand.email}`} className="text-gold hover:underline">
                {brand.email}
              </a>
            </p>
            <p>We typically reply within 24 hours.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="card-surface space-y-4 p-6 sm:p-8" noValidate>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Full name" error={errors.name?.message}>
              <input className="field" placeholder="Ama Mensah" {...register("name")} />
            </Field>
            <Field label="WhatsApp number" error={errors.whatsapp?.message}>
              <input className="field" placeholder="+233 20 000 0000" {...register("whatsapp")} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Email" error={errors.email?.message}>
              <input className="field" placeholder="you@email.com" {...register("email")} />
            </Field>
            <Field label="Preferred contact time" error={errors.contactTime?.message}>
              <input className="field" placeholder="Evenings, GMT" {...register("contactTime")} />
            </Field>
          </div>
          <Field label="Preferred style or occasion" error={errors.style?.message}>
            <input className="field" placeholder="Wedding guest, funeral, everyday luxury…" {...register("style")} />
          </Field>
          <Field label="Budget range (optional)">
            <input className="field" placeholder="¢3,000 – ¢6,000" {...register("budget")} />
          </Field>
          <Field label="Notes / measurements" error={errors.notes?.message}>
            <textarea
              className="field min-h-[110px]"
              placeholder="Height, chest, waist, or anything we should know…"
              {...register("notes")}
            />
          </Field>
          <button type="submit" disabled={pending} className="btn-gold w-full disabled:opacity-60">
            {pending ? (
              <>
                <Loader2 size={16} className="animate-spin" /> Sending…
              </>
            ) : (
              <>
                <Send size={16} /> Send request
              </>
            )}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-wide text-foreground/60">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
