
import React from 'react';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 md:min-h-[80vh] flex flex-col">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed">
          We are a compact & nimble production company,<br/>
          focusing on the line between<br/>
          authentic documentary & commercial storytelling.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto w-full">
        <img 
          src="/placeholder.svg" 
          alt="Two people in outdoor gear in a mountain landscape" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="max-w-3xl mx-auto mt-16">
        <p className="text-sm leading-relaxed mb-8">
          We're a lean film collective, co-run by long time local cutters amped about every aspect of an adventure, and our tireless team for each crew's peak. We pursue everything from straightforward docs, to grave issues with greater ecological urgency like water security, and always bringing a story.
        </p>
        
        <p className="text-sm leading-relaxed mb-8">
          Our discovery and challenges have become some of our favorite tools. Seeing skiers skiing up and untelled terrain just as fast as getting a steep united line that's perfect test for ski. We're reality is accumulated and stay humble while it's still real summer and people often up against and try to always keep a good time during it.
        </p>
        
        <p className="text-sm leading-relaxed mb-8">
          WRKSHRT is ordered to run into the mountains and obstacles of filmmaking, unafraid, and not have any of us stand down until during the ride. Real humans, on screen and in post, unpretended, and keeping it, even if we have to upload it to make that height canon (turbo-oriented).
        </p>
        
        <div className="mt-10">
          <p className="font-mono text-sm">Contact</p>
          <p className="text-sm">Obtain a quote</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
