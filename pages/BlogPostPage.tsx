import React from 'react';
import { BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  post: BlogPost | undefined;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
        <p className="text-gray-600 mt-4">Sorry, we couldn't find the blog post you were looking for.</p>
        <a href="/blog" className="mt-8 inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
          Back to Blog
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <article className="max-w-4xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>
            <div className="text-gray-500">
              <span>By {post.author}</span> &middot; <span>{post.date}</span>
            </div>
          </header>
          
          <img src={post.image} alt={post.title} className="w-full h-auto max-h-[500px] object-cover rounded-2xl shadow-xl mb-12" />

          <div 
            className="prose lg:prose-xl max-w-none prose-p:text-gray-700 prose-h3:text-gray-900"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </div>
    </div>
  );
};

export default BlogPostPage;