
import React from 'react';
import { Helmet } from 'react-helmet';

const LegalPage: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div className="pt-20">
      <Helmet>
        <title>{title} | AKTIVATE</title>
        <meta name="description" content={`Read the ${title.toLowerCase()} for AKTIVATE. We are committed to transparency and the integrity of your information.`} />
      </Helmet>
      
      <section className="bg-lightGrey py-24 md:py-32">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-deepBlack mb-12 uppercase">{title}</h1>
          <div className="prose prose-lg text-charcoalGrey space-y-6">
            <p className="font-bold">Last updated: October 2024</p>
            <p>
              Welcome to AKTIVATE. Your privacy and trust are paramount to us. This page outlines our standard procedures and commitments regarding {title.toLowerCase()}.
            </p>
            <h2 className="text-2xl font-bold text-deepBlack pt-6">1. Introduction</h2>
            <p>
              At AKTIVATE, we are committed to protecting the integrity and confidentiality of your information. This document provides clear details on how we handle data and manage our professional relationships.
            </p>
            <h2 className="text-2xl font-bold text-deepBlack pt-6">2. Core Principles</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
            </p>
            <p>
              Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
            <h2 className="text-2xl font-bold text-deepBlack pt-6">3. Usage & Conduct</h2>
            <p>
              Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. 
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
