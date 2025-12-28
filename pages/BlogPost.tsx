
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Button from '../components/Button';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  if (!id) return <Navigate to="/blog" />;

  // Simulated post title for metadata
  const title = "The Evolution of Brand Strategy in a Digital-First World";

  return (
    <div className="pt-20">
      <Helmet>
        <title>{title} | Insights - AKTIVATE</title>
        <meta name="description" content="Discover how brand communication has fundamentally shifted in today's digital landscape and why attention is the most valuable currency." />
      </Helmet>
      
      <article>
        <header className="bg-deepBlack py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/blog" className="text-brandTeal font-bold mb-8 inline-block">← Back to Insights</Link>
            <span className="block text-brandTeal font-bold uppercase tracking-widest text-sm mb-4">Industry News</span>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tighter">
              {title}
            </h1>
            <div className="flex items-center gap-6 text-lightGrey/60 text-sm border-t border-white/10 pt-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brandTeal" />
                <span>Sarah Ndikumana</span>
              </div>
              <span>•</span>
              <span>Jan 15, 2024</span>
              <span>•</span>
              <span>8 min read</span>
            </div>
          </div>
        </header>

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6">
            <div className="aspect-video rounded-[20px] overflow-hidden mb-16 shadow-2xl">
              <img src="https://picsum.photos/1200/800?random=33" className="w-full h-full object-cover" alt="Article Hero" />
            </div>
            
            <div className="prose prose-lg max-w-none text-charcoalGrey space-y-8 text-lg leading-relaxed font-sans">
              <p className="text-xl font-medium text-deepBlack">
                The landscape of brand communication has shifted fundamentally. In today's market, attention is the most valuable currency, and consistency is the only way to build trust.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <h2 className="text-3xl font-bold text-deepBlack pt-8">1. The Death of One-Way Communication</h2>
              <p>
                Modern brands are no longer monolithic entities delivering proclamations to passive audiences. Today, brand building is a collaborative process. Every tweet, every customer service interaction, and every shared activation forms part of the story.
              </p>
              <blockquote className="border-l-4 border-brandTeal pl-8 italic text-2xl text-deepBlack my-12 font-montserrat">
                "Strategy is not about being different for the sake of it. It's about being different so that you can make a difference."
              </blockquote>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
              </p>
            </div>

            <div className="mt-20 pt-10 border-t border-lightGrey flex flex-wrap gap-4">
              {['Strategy', 'Branding', 'Digital', 'Future'].map(tag => (
                <span key={tag} className="bg-lightGrey px-4 py-1.5 rounded-full text-sm font-bold text-charcoalGrey">#{tag}</span>
              ))}
            </div>
          </div>
        </section>
      </article>

      <section className="bg-lightGrey py-20">
        <div className="max-w-content mx-auto px-6">
          <h2 className="text-center text-3xl font-bold mb-12">Related Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map(i => (
              <Link key={i} to={`/blog/related-${i}`} className="bg-white p-8 rounded-[16px] shadow-sm hover:shadow-md transition-shadow">
                <span className="text-brandTeal font-bold text-xs uppercase mb-2 block">Marketing</span>
                <h3 className="text-xl font-bold mb-2">Another Great Insight About Branding {i}</h3>
                <span className="text-charcoalGrey/60 text-sm">Read More →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
