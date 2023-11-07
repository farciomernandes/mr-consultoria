import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import HeroHome from '../partials/HeroHome';
import FeaturesZigZag from '../partials/FeaturesZigzag';
import Testimonials from '../partials/Testimonials';
import DeliveryReceipt from '../partials/DeliveryReceipt';
import Newsletter from '../partials/Newsletter';
import HowItWorks from '../partials/HowItWorks';
import Footer from '../partials/Footer';

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">
        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
        <HeroHome />
        <FeaturesZigZag />
        <HowItWorks />
        <Testimonials />
        <DeliveryReceipt />
        <Newsletter />
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  );
}

export default Home;