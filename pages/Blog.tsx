
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    { id: 'digital-advertising', title: 'The Future of Digital Advertising in East Africa', cat: 'Industry News', date: 'Jan 15, 2024', author: 'Aktivate Team' },
    { id: 'branding-logo', title: 'Branding: More Than Just a Logo', cat: 'Brand Strategy', date: 'Jan 10, 2024', author: 'Creative Director' },
    { id: 'attention-economy', title: 'Winning the Attention Economy', cat: 'Marketing Trends', date: 'Jan 5, 2024', author: 'Strategy Lead' },
    { id: 'experiential-roi', title: 'The ROI of Experiential Marketing', cat: 'Market Trends', date: 'Dec 28, 2023', author: 'Aktivate Team' },
  ];

  const filteredPosts = useMemo(() => {
    return posts.filter(post => 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.cat.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, posts]);

  return (
    <div className="pt-20">
      <Helmet>
        <title>Insights | Marketing, Strategy & Industry Trends - AKTIVATE</title>
        <meta name="description" content="Read the latest insights from AKTIVATE's team. We discuss digital advertising, brand strategy, and winning the attention economy." />
      </Helmet>
      
      {/* 5.1 Hero */}
      <section className="bg-deepBlack text-white py-[160px] text-center">
        <div className="max-w-content mx-auto px-6 reveal">
          <h1 className="text-4xl md:text-[56px] font-extrabold mb-6 uppercase">INSIGHTS FROM THE FRONT LINE</h1>
          <p className="text-lg md:text-2xl text-lightGrey max-w-2xl mx-auto">
            Strategy, creativity, and what's actually working.
          </p>
        </div>
      </section>

      {/* 5.2 Search Bar Section */}
      <section className="bg-white border-b border-lightGrey sticky top-20 z-30">
        <div className="max-w-content mx-auto px-6 md:px-120 py-8">
          <div className="relative max-w-2xl mx-auto">
            <input 
              type="text" 
              placeholder="Search insights by keywords or category..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-lightGrey border-2 border-transparent rounded-[12px] focus:border-brandTeal focus:bg-white outline-none transition-all text-deepBlack font-medium shadow-sm"
            />
            <div className="absolute left-6 top-1/2 -translate-y-1/2 text-brandTeal text-xl">
              🔍
            </div>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-6 top-1/2 -translate-y-1/2 text-charcoalGrey/40 hover:text-brandTeal transition-colors text-sm font-bold uppercase"
              >
                Clear
              </button>
            )}
          </div>
        </div>
      </section>

      {/* 5.3 Featured Post */}
      {!searchQuery && (
        <section className="py-20 bg-white">
          <div className="max-w-content mx-auto px-6 md:px-120">
            <div className="bg-white rounded-[20px] overflow-hidden shadow-strong flex flex-col lg:flex-row reveal">
              <div className="lg:w-1/2 aspect-video lg:aspect-auto h-full overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1493612276216-ee3925520721?auto=format&fit=crop&q=80&w=2070" 
                  alt="Featured" 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" 
                />
              </div>
              <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center space-y-6">
                <span className="text-brandTeal font-bold uppercase tracking-widest text-sm">Featured Post</span>
                <h2 className="text-3xl md:text-4xl font-bold text-deepBlack hover:text-brandTeal cursor-pointer transition-colors">
                  <Link to="/blog/how-aktivate-rebranded">How Aktivate Rebranded Burundi's Top Tech Firm</Link>
                </h2>
                <p className="text-charcoalGrey leading-relaxed text-lg">
                  Discover the 6-month journey of transforming a local hero into a regional powerhouse through deep research and bold creative decisions.
                </p>
                <div className="text-sm text-charcoalGrey pt-4 border-t border-lightGrey flex items-center space-x-4">
                  <span>By Sarah Ndikumana</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <Link to="/blog/how-aktivate-rebranded" className="text-brandTeal font-bold hover:underline">Read Article →</Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5.4 Blog Grid */}
      <section className="bg-lightGrey py-20 min-h-[400px]">
        <div className="max-w-content mx-auto px-6 md:px-120">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 stagger-container">
              {filteredPosts.map((post, i) => (
                <div key={post.id} className="bg-white rounded-[16px] overflow-hidden group hover:-translate-y-2 hover:shadow-strong transition-all duration-300 flex flex-col reveal">
                  <div className="h-60 overflow-hidden relative">
                    <img 
                      src={`https://picsum.photos/600/400?random=${i+25}`} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-brandTeal/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                  <div className="p-8 flex-grow space-y-4">
                    <span className="text-brandTeal font-bold uppercase text-[11px] tracking-widest">{post.cat}</span>
                    <h3 className="text-xl font-bold text-deepBlack group-hover:text-brandTeal transition-colors line-clamp-2">
                      <Link to={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-charcoalGrey text-sm line-clamp-3 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="pt-6 mt-auto text-[13px] text-charcoalGrey flex items-center justify-between border-t border-lightGrey">
                      <span>{post.date}</span>
                      <Link to={`/blog/${post.id}`} className="text-brandTeal font-bold hover:underline">Read More →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <span className="text-6xl block">🏜️</span>
              <h2 className="text-2xl font-bold text-deepBlack uppercase">No matching insights found</h2>
              <p className="text-charcoalGrey max-w-md mx-auto">
                We couldn't find any articles matching "{searchQuery}". Try searching for different keywords like "branding", "strategy", or "marketing".
              </p>
              <button 
                onClick={() => setSearchQuery('')}
                className="text-brandTeal font-bold underline hover:no-underline"
              >
                Show all articles
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
