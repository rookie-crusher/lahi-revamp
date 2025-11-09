import React from 'react';
import { blogPosts } from '../data/blogPosts';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <section className="text-center py-20 sm:py-28 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-teal-500">Blog</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Insights, tutorials, and stories from the forefront of digital innovation.
            </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {blogPosts.map((post) => (
              <a key={post.id} href={`/blog/${post.id}`} className="group bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col">
                <div className="overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors">{post.title}</h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="text-sm text-gray-500 mt-auto">
                    <span>{post.author}</span> &middot; <span>{post.date}</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;