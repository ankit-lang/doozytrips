import React, { useState } from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Header from '../Header';
import Footer from '../Footer';
import { Link } from 'react-router-dom';

// Mock Data for Blog Posts
const BLOG_POSTS = [
      {
            id: 1,
            title: "Your Best Source for Last-Minute Tickets & Low Cost Flights in Canada",
            excerpt: "Looking for the best low-cost flights across Canada—especially at the last minute? Doozy Trips has you covered. Whether you’re planning a sudden business trip",
            image: "/banner/flight.png",
            category: "Low Cost Flight",
            author: "Alex Dev",
            date: "Nov 25, 2025",
            readTime: "5 min read"
      },
      // {
      //       id: 2,
      //       title: "Mastering Digital Marketing Strategies",
      //       excerpt: "Learn how to leverage SEO and social media algorithms to grow your brand organic reach effectively.",
      //       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //       category: "Marketing",
      //       author: "Sarah Jones",
      //       date: "Nov 20, 2025",
      //       readTime: "7 min read"
      // },
      // {
      //       id: 3,
      //       title: "Minimalist UI Design Principles",
      //       excerpt: "A deep dive into whitespace, typography, and color theory to create clean and accessible user interfaces.",
      //       image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //       category: "Design",
      //       author: "Chris Lee",
      //       date: "Nov 18, 2025",
      //       readTime: "4 min read"
      // },
      // {
      //       id: 4,
      //       title: "Understanding Cloud Architecture",
      //       excerpt: "Breaking down microservices, serverless functions, and how to scale your application globally.",
      //       image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //       category: "Cloud",
      //       author: "Dana White",
      //       date: "Nov 15, 2025",
      //       readTime: "6 min read"
      // },
      // {
      //       id: 5,
      //       title: "Productivity Hacks for Developers",
      //       excerpt: "How to manage time effectively, avoid burnout, and keep your code quality high during crunch time.",
      //       image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //       category: "Lifestyle",
      //       author: "Mike Ross",
      //       date: "Nov 10, 2025",
      //       readTime: "3 min read"
      // },
      // {
      //       id: 6,
      //       title: "The Rise of No-Code Tools",
      //       excerpt: "Are no-code tools a threat to developers or a powerful ally? We discuss the pros and cons.",
      //       image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      //       category: "Industry",
      //       author: "Rachel Green",
      //       date: "Nov 05, 2025",
      //       readTime: "8 min read"
      // },
];

const Blog = () => {
      // State for search/filter (optional functionality)
      const [searchTerm, setSearchTerm] = useState('');

      // Filter posts logic
      const filteredPosts = BLOG_POSTS.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.category.toLowerCase().includes(searchTerm.toLowerCase())
      );

      return (
            <div className="min-h-screen bg-gray-50 font-sans text-gray-800">

                  {/* --- Header Section --- */}
                  {/* <header className="bg-white shadow-sm sticky top-0 z-50">
                        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                              <h1 className="text-2xl font-bold tracking-tight">
                                    Brand<span style={{ color: '#0077b5' }}>Blog</span>
                              </h1>

                              Simple Search Bar
                              <div className="relative hidden md:block">
                                    <input
                                          type="text"
                                          placeholder="Search articles..."
                                          className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:border-transparent w-64 transition-all"
                                          style={{ '--tw-ring-color': '#0077b5' } as React.CSSProperties}
                                          value={searchTerm}
                                          onChange={(e) => setSearchTerm(e.target.value)}
                                    />
                                    <Search className="w-4 h-4 text-gray-400 absolute left-3 top-3" />
                              </div>
                        </div>
                  </header> */}
                  <Header/>
                  {/* --- Hero / Title Area --- */}
                  <div className="bg-white pt-20 border-b border-gray-200">
                        <div className="container mx-auto px-4 py-12 text-center">
                              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
                                    Our Latest <span style={{ color: '#0077b5' }}>Blogs</span>
                              </h2>
                              <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                                    {/* Discover thoughts on technology, design, and business growth. Stay updated with our curated content. */}
                              </p>
                        </div>
                  </div>

                  {/* --- Blog Grid Section --- */}
                  <main className="container mx-auto px-4 py-4">

                        {filteredPosts.length === 0 ? (
                              <div className="text-center text-gray-500 py-10">No articles found matching your search.</div>
                        ) : (
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {filteredPosts.map((post) => (
                                          <article
                                                key={post.id}
                                                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 group flex flex-col h-full"
                                          >
                                                {/* Image Container */}
                                                <div className="relative overflow-hidden h-48">
                                                      <img
                                                            src={post.image}
                                                            alt={post.title}
                                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                      />
                                                      <div className="absolute top-4 left-4">
                                                            <span
                                                                  className="text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wide"
                                                                  style={{ backgroundColor: '#0077b5' }}
                                                            >
                                                                  {post.category}
                                                            </span>
                                                      </div>
                                                </div>

                                                {/* Content */}
                                                <div className="p-6 flex flex-col flex-grow">
                                                      <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
                                                            <div className="flex items-center">
                                                                  <Calendar className="w-3 h-3 mr-1" />
                                                                  {post.date}
                                                            </div>
                                                            <div className="flex items-center">
                                                                  <User className="w-3 h-3 mr-1" />
                                                                  {post.author}
                                                            </div>
                                                      </div>

                                                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#0077b5] transition-colors">
                                                            {post.title}
                                                      </h3>

                                                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                                                            {post.excerpt}
                                                      </p>

                                                      {/* Footer / Link */}
                                                      <div className="pt-4 border-t border-gray-100 mt-auto">
                                                            <Link
                                                                  to={`/blog/${post.id}`} // This handles the redirect
                                                                  className="inline-flex items-center font-semibold text-sm transition-all group-hover:translate-x-1"
                                                                  style={{ color: '#0077b5' }}
                                                            >
                                                                  Read Article
                                                                  <ArrowRight className="w-4 h-4 ml-2" />
                                                            </Link>
                                                      </div>
                                                </div>
                                          </article>
                                    ))}
                              </div>
                        )}
                  </main>

                 <Footer/>
            </div>
      );
};

export default Blog;