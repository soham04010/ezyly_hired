"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Chrome, Linkedin } from "lucide-react";
import Swal from "sweetalert2";

export default function ContactPage() {
  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    formData.append("access_key", "aa8354b7-18d4-4419-91da-afd2af041e66");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(Object.fromEntries(formData)),
    });

    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Message Sent!",
        text: "Thanks for contacting us.",
        icon: "success",
        background: "#09090b",
        color: "#e4e4e7",
        confirmButtonColor: "#16a34a",
      });
      event.currentTarget.reset();
    } else {
      Swal.fire({
        title: "Error",
        text: "Please try again.",
        icon: "error",
        background: "#09090b",
        color: "#e4e4e7",
        confirmButtonColor: "#ef4444",
      });
    }
  }

  return (
    <div className="w-full min-h-screen px-4 py-12 bg-background text-foreground">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
        Contact Us
      </h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="firstName" placeholder="First Name" required />
            <Input name="lastName" placeholder="Last Name" required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input name="email" type="email" placeholder="Email" required />
            <Input name="phone" placeholder="Phone Number" />
          </div>
          <div>
            <Textarea name="message" placeholder="What do you have in mind?" required />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>

        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Feel free to reach out to us with any queries or suggestions.
          </p>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+1 258 3258 5679</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>hello@workik.com</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>102 Street, Y Cross 485656</span>
            </div>
          </div>

          <div className="flex gap-6 pt-6 text-muted-foreground">
            <Linkedin className="w-5 h-5 hover:text-foreground cursor-pointer" />
            <Twitter className="w-5 h-5 hover:text-foreground cursor-pointer" />
            <Instagram className="w-5 h-5 hover:text-foreground cursor-pointer" />
            <Facebook className="w-5 h-5 hover:text-foreground cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
