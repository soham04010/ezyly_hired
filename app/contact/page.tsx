// app/contact/page.tsx

"use client";

import { useState } from "react";
import Swal from "sweetalert2";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "aa8354b7-18d4-4419-91da-afd2af041e66 ");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for contacting us. We'll get back to you soon.",
        icon: "success",
        confirmButtonColor: "#06b6d4", // Tailwind cyan-500
      });
      event.currentTarget.reset(); // Clear form
    } else {
      Swal.fire({
        title: "Oops!",
        text: "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ef4444", // Tailwind red-500
      });
    }
  }

  return (
    <div className="min-h-screen bg-black text-white px-4 py-10">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-cyan-400 mb-6">Contact Us</h1>
        <p className="text-lg text-zinc-300 mb-10">
          Have a question or business inquiry? Let’s talk!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="bg-zinc-900 border border-cyan-600 placeholder:text-zinc-400"
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="bg-zinc-900 border border-cyan-600 placeholder:text-zinc-400"
        />
        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="bg-zinc-900 border border-cyan-600 placeholder:text-zinc-400"
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          required
          className="bg-zinc-900 border border-cyan-600 placeholder:text-zinc-400"
        />
        <Button
          type="submit"
          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold w-full"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
}
