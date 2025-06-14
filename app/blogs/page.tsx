"use client";
import React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";

type Blog = {
  id: number;
  title: string;
  slug: string;
  image: string;
  date: string;
  excerpt: string;
};

const dummyBlogs: Blog[] = [
  {
    id: 1,
    title: "Top 5 Hiring Trends in 2025",
    slug: "top-5-hiring-trends-2025",
    image: "/blogs/hiring-trends.jpg",
    date: "June 5, 2025",
    excerpt: "Discover the latest hiring trends shaping the future of recruitment and what companies are doing to stay ahead.",
  },
  {
    id: 2,
    title: "How to Build a Strong Resume",
    slug: "how-to-build-a-strong-resume",
    image: "/blogs/strong-resume.jpg",
    date: "May 28, 2025",
    excerpt: "A guide to crafting a resume that stands out from the crowd and lands you more interviews.",
  },
  {
    id: 3,
    title: "Remote Work: Pros & Cons",
    slug: "remote-work-pros-and-cons",
    image: "/blogs/remote-work.jpg",
    date: "May 15, 2025",
    excerpt: "Understand the advantages and challenges of remote work and how to make it effective for your team.",
  },
];

const BlogsPage = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-16 bg-background text-foreground">
      <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Latest Blogs</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dummyBlogs.map((blog) => (
          <Link key={blog.id} href={`/blogs/${blog.slug}`}>
            <Card className="hover:shadow-lg transition-shadow duration-200 rounded-2xl overflow-hidden bg-card text-card-foreground">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="text-sm text-muted-foreground mb-1">{blog.date}</p>
                <h2 className="text-lg font-semibold line-clamp-2">{blog.title}</h2>
                <p className="text-sm mt-2 text-muted-foreground line-clamp-3">{blog.excerpt}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default BlogsPage;
