'use client'

import { LucideCheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    title: "Resume Making & Understanding",
    description:
      "We refine your profile to showcase your strengths. Through targeted optimization, we boost your visibility and present you in the best light.",
  },
  {
    title: "Interview Support to Candidate",
    description:
      "We provide interview coaching, mock sessions, and real-time feedback to help you stand out and succeed in every round.",
  },
  {
    title: "Resume Grooming",
    description:
      "Our experts craft ATS-friendly resumes tailored to your goals, highlighting strengths and aligning with top industry standards.",
  },
  {
    title: "Resume Understanding",
    description:
      "Get a detailed breakdown of your current resume. Identify gaps and opportunities to make your profile market-ready.",
  },
  {
    title: "Training & Interview Preparation",
    description:
      "One-on-one strategic training to help you ace both technical and behavioral rounds with confidence.",
  },
  {
    title: "Assessments (Up to 4 Hours)",
    description:
      "We handle short assessments on your behalf with accuracy and precision to help you qualify key stages.",
  },
  {
    title: "Personal Career Counseling",
    description:
      "Work with our career experts to define your vision, explore options, and align your goals with market demand.",
  },
  {
    title: "Assessments (More Than 4 Hours)",
    description:
      "We take care of lengthy, complex online tests—whether job-related, academic, or certification-based.",
  },
]

export default function ServiceDescriptionPage() {
  return (
    <main className="min-h-screen px-4 md:px-20 py-14 bg-background text-foreground">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          Our Detailed Services
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We offer tailored, impactful support that covers every step of your professional journey.
        </p>
      </section>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={index}
            className="transition-all duration-300 border border-border hover:shadow-xl bg-muted/30"
          >
            <CardContent className="p-6 flex items-start gap-4">
              <LucideCheckCircle className="text-primary mt-1 shrink-0" size={28} />
              <div>
                <h2 className="text-xl font-semibold mb-1">{service.title}</h2>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  )
}
