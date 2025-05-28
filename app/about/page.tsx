// app/about/page.tsx

import { Card, CardContent } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
          About Ezyly Hired
        </h1>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          Ezyly Hired was born from a bold, disruptive vision: that every business—no matter the size—deserves access to world-class HR expertise without the Fortune 500 price tag. We believe talent isn't exclusive to the top-tier companies, and we’re here to bridge that gap—matching ambitious professionals with businesses ready to scale like giants.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          Backed by years of experience leading diverse teams across industries, we’ve reimagined staffing for a new era. Our mission? To transform workplaces into thriving ecosystems where people feel seen, valued, and empowered to do their best work—because when your team thrives, your business does too.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          At Productive Recruitment Services, we turn hiring into a high-performance engine for your business. We’ve helped hundreds of companies cut through the noise and confusion of recruitment, transforming it from a challenge into a streamlined, strategic advantage.
        </p>
        <p className="text-lg text-zinc-300 leading-relaxed mb-10">
          Our mission is simple: connect companies with top-tier talent that fuels productivity and drives success. By deeply understanding your goals and needs, we deliver staffing solutions that don’t just fill roles—they elevate your entire operation. From day one, we’re here to help you build a workforce that’s not only skilled but aligned, agile, and ready to thrive.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 mt-12">
        <Card className="bg-zinc-900 border border-cyan-700 hover:scale-105 transition-all">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">Our Vision</h2>
            <p className="text-zinc-300">
              To transform workplaces into thriving ecosystems where people feel seen, valued, and empowered to do their best work.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-cyan-700 hover:scale-105 transition-all">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">Our Mission</h2>
            <p className="text-zinc-300">
              Connect companies with top-tier talent that fuels productivity and drives success.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-zinc-900 border border-cyan-700 hover:scale-105 transition-all">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-cyan-400 mb-2">Why Choose Us?</h2>
            <p className="text-zinc-300">
              We deliver staffing solutions that don’t just fill roles—they elevate your entire operation.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
