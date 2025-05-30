'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function IndividualServicesPage() {
  return (
    <div className="min-h-screen px-6 py-12 md:px-20 bg-background text-foreground">
      <section className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-center">Individual Services</h1>
        <p className="text-lg text-center text-muted-foreground">
          Industry-leading specialists in Talent Acquisition, Job Hunting, VMS, and IT Recruitment.
        </p>

        <Separator />

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Profile Enhancement & Marketing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Duration:</strong> 3 Months</p>
              <p><strong>Price:</strong> $600/Month</p>
              <p><strong>Subtotal:</strong> $1,800</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Interview Support to Candidate</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Duration:</strong> 3 Months</p>
              <p><strong>Price:</strong> $800/Month</p>
              <p><strong>Subtotal:</strong> $2,400</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Making & Grooming</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Session:</strong> One-time</p>
              <p><strong>Price:</strong> $49</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Resume Understanding</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Session:</strong> One-time</p>
              <p><strong>Price:</strong> $49</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Training & Interview Preparation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Duration:</strong> 15 Hours</p>
              <p><strong>Price:</strong> $450</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessments (Up to 4 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Price:</strong> $35 per assessment</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessments (More Than 4 Hours)</CardTitle>
            </CardHeader>
            <CardContent>
              <p><strong>Price:</strong> $45</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Personal Career Counseling</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <p><strong>Session:</strong> One-time</p>
              <p><strong>Price:</strong> $200</p>
            </CardContent>
          </Card>
        </div>

        <Separator />

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-center">🎯 We Are Best at What We Do</h2>
          <p className="text-muted-foreground text-center">
            Just graduated and racing against the 90-day OPT clock? We provide personalized job search support, OPT-compliant roles, and real interview prep to get you hired fast. 
          </p>
          <p className="text-muted-foreground text-center">
            Our programs are built to match your skills with sponsor-ready employers. Get 1:1 guidance, résumé fixes, and access to active job openings in your field.
          </p>
          <p className="text-muted-foreground text-center">
            Secure your future in the U.S. — we’re with you, every step of the way.
          </p>
          <div className="flex justify-center">
            <Button>Contact Us</Button>
          </div>
        </section>
      </section>
    </div>
  )
}
