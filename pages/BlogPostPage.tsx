import React from 'react';
import { Helmet } from 'react-helmet-async';
import { BlogPost } from '../data/blogPosts';

interface BlogPostPageProps {
  post: BlogPost | undefined;
}

const BlogPostPage: React.FC<BlogPostPageProps> = ({ post }) => {
  if (!post) {
    return (
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <Helmet>
          <title>Post Not Found – Lahi</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <h1 className="text-4xl font-bold text-gray-900">Post not found</h1>
        <p className="text-gray-600 mt-4">Sorry, we couldn't find the blog post you were looking for.</p>
        <a href="/blog" className="mt-8 inline-block bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors">
          Back to Blog
        </a>
      </div>
    );
  }

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    'headline': post.title,
    'image': post.image,
    'author': {
      '@type': 'Person',
      'name': post.author
    },
    'datePublished': post.date,
    'description': post.excerpt
  };

  return (
    <div className="bg-white py-20">
      <Helmet>
        <title>{post.title} – Lahi Blog</title>
        <meta name='description' content={post.excerpt} />
        <link rel='canonical' href={`https://lahi.io/blog/${post.id}`} />
        
        <meta property='og:title' content={post.title} />
        <meta property='og:description' content={post.excerpt} />
        <meta property='og:type' content='article' />
        <meta property='og:url' content={`https://lahi.io/blog/${post.id}`} />
        <meta property='og:image' content={post.image} />
        
        <script type='application/ld+json'>{JSON.stringify(articleSchema)}</script>
      </Helmet>
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