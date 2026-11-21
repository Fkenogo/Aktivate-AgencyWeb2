
import React from 'react';

const Blog: React.FC = () => {
  const posts = [
    { id: 1, category: 'Brand Strategy', title: 'Why Branding Matters in East Africa', excerpt: 'In a rapidly growing market, local brands need to establish deep emotional connections to compete globally...', author: 'M. Bizimana', time: '5 min', date: 'Dec 20, 2024', image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=75&w=600&fm=webp' },
    { id: 2, category: 'Creative Process', title: 'The Power of Visual Storytelling', excerpt: 'How images and videos are redefining the way Burundi consumers interact with their favorite products...', author: 'J. Ndayisenga', time: '8 min', date: 'Dec 18, 2024', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=75&w=600&fm=webp' },
    { id: 3, category: 'Market Trends', title: 'The Rise of Digital Activations', excerpt: 'Traditional advertising is changing. Here is how we are merging the physical and digital worlds for impact...', author: 'S. Uwase', time: '6 min', date: 'Dec 15, 2024', image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=75&w=600&fm=webp' },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section data-surface="dark" className="bg-[#0A0A0A] py-24 md:py-40 px-6 text-center text-white">
        <header>
          <h1 className="text-[40px] md:text-[56px] font-[800] leading-tight mb-8">INSIGHTS FROM THE FRONT LINE</h1>
          <p className="text-[18px] md:text-[24px] max-w-[800px] mx-auto text-[#F5F5F5] leading-relaxed">
            Strategy, creativity, and what's actually working.
          </p>
        </header>
      </section>

      {/* Featured Post */}
      <section className="bg-white py-12 md:py-20 px-6 md:px-[120px]">
        <article className="max-w-[1440px] mx-auto bg-white rounded-[16px] overflow-hidden shadow-2xl flex flex-col lg:flex-row hover:shadow-[#1AB69D]/10 transition-shadow">
          <figure className="lg:w-1/2 overflow-hidden bg-[#F5F5F5]">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=75&w=1200&fm=webp"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
              loading="eager"
              decoding="async"
              alt="African Brand Identity discussion"
            />
          </figure>
          <div className="lg:w-1/2 p-10 md:p-16 flex flex-col justify-center">
            <header>
              <span className="text-[#1AB69D] font-bold text-xs uppercase tracking-widest mb-4 block">Featured Article</span>
              <h2 className="text-[32px] md:text-[40px] font-bold text-[#0A0A0A] mb-6 leading-tight hover:text-[#1AB69D] transition-colors cursor-pointer">
                Defining the Modern African Brand Identity
              </h2>
            </header>
            <p className="text-[#2D2D2D] text-lg leading-relaxed mb-8">
              We explore how the fusion of traditional heritage and modern tech is creating a unique design language that's capturing hearts across the East African community.
            </p>
            <div className="flex items-center space-x-4 mb-8 text-sm text-[#2D2D2D]">
              <span className="font-bold text-[#0A0A0A]">By AKTIVATE Team</span>
              <span>|</span>
              <span>12 min read</span>
              <span>|</span>
              <span>Dec 28, 2024</span>
            </div>
            <a href="#" className="text-[#1AB69D] font-bold text-lg border-b-2 border-[#1AB69D] self-start pb-1 rounded-sm">Read Article →</a>
          </div>
        </article>
      </section>

      {/* Grid */}
      <section className="bg-[#F5F5F5] py-20 px-6 md:px-[120px]">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post) => (
            <article key={post.id} className="bg-white rounded-[16px] overflow-hidden shadow-md group hover:-translate-y-2 transition-all duration-300">
              <figure className="h-60 overflow-hidden bg-[#F5F5F5]">
                <img
                  src={post.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                  decoding="async"
                  alt={post.title}
                />
              </figure>
              <div className="p-8">
                <header>
                  <span className="text-[#1AB69D] font-bold text-xs uppercase tracking-widest mb-3 block">{post.category}</span>
                  <h3 className="text-xl font-bold text-[#0A0A0A] mb-4 group-hover:text-[#1AB69D] transition-colors line-clamp-2">{post.title}</h3>
                </header>
                <p className="text-[#2D2D2D] mb-6 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                <footer className="flex items-center justify-between text-xs text-[#2D2D2D]">
                  <span className="font-medium">By {post.author}</span>
                  <div className="flex space-x-2">
                    <span>{post.time} read</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
