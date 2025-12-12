import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import HowItWorks from './components/HowItWorks';
import Features from './components/Features';
import MeatPool from './components/MeatPool';
import WhyRamify from './components/WhyRamify';
import CostBreakdown from './components/CostBreakdown';
import Testimonials from './components/Testimonials';
import DownloadApp from './components/DownloadApp';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import NotificationSignup from './components/NotificationSignup';

function App() {
  return (
    <div className="font-sans text-slate-900 bg-surface min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProp />
        <HowItWorks />
        <Features />
        <MeatPool />
        <WhyRamify />
        <CostBreakdown />
        <Testimonials />
        <DownloadApp />
        <FAQ />
        <NotificationSignup />
      </main>
      <Footer />
    </div>
  );
}

export default App;