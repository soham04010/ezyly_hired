"use client";
import React from 'react';
// import Header from '@/components/Header';
import Footer from '@/components/Footer';
// import { Header } from '@radix-ui/react-accordion';

const BlogPage: React.FC = () => {
  const samplePosts = [
    {
      id: 1,
      title: "The Future of Remote Work",
      excerpt: "Exploring how remote work is changing the landscape of modern employment.",
      date: "December 15, 2024",
      author: "Jane Smith"
    },
    {
      id: 2,
      title: "Interview Tips for Success",
      excerpt: "Essential strategies to help you ace your next job interview.",
      date: "December 10, 2024",
      author: "John Doe"
    },
    {
      id: 3,
      title: "Building Company Culture",
      excerpt: "How to create and maintain a positive workplace environment.",
      date: "December 5, 2024",
      author: "Sarah Johnson"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">Our Blog</h1>
            <p className="mt-4 text-lg text-gray-600">
              Stay updated with the latest news, insights, and articles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {samplePosts.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-red-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>By {post.author}</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPage;
