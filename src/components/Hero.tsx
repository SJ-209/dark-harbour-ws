
import React from 'react';
import mainpic from '/Nick&Sam.png';

const Hero = () => {
  return (
    <section className="pt-32 pb-16 px-6 md:px-10 md:min-h-[80vh] flex flex-col">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <p className="text-lg md:text-xl leading-relaxed">
          <strong>We are a small and agile production company,<br/>
          With the ability to work in high pressure and high stress enviroments<br/>
          Which brings out the best in us and our clients<br/></strong>
        </p>
      </div>
      
      <div  className="max-w-4xl mx-auto w-full">
        <img 
          src={mainpic} 
          alt="Nick & Sam from Dark Harbour Studios" 
          className="w-full rounded-l h-auto object-cover"
        />
      </div>
      <div id="about"></div>
      
      <div className="max-w-3xl mx-auto mt-16">
        <p className="text-sm leading-relaxed mb-8">
        We are Dark Harbour Studios a film production company creating high-impact, cinematic storytelling. From gritty documentaries to action-packed brand films, we capture raw, immersive moments that stand out.
        </p>
        
        <p className="text-sm leading-relaxed mb-8">
        we thrive in high-pressure, high-stakes environments where others might hesitate. Born in the mountains and sharpened by challenges, our team runs headlong into the chaos of filmmaking on set, in the edit, or anywhere the story leads.
        </p>
        
        <p className="text-sm leading-relaxed mb-8">
        Dark Harbour doesn’t fake it. We capture real moments, real people, and real stakes on screen and in post. We believe in keeping it raw, keeping it honest, and uploading it with intention because storytelling at altitude needs more than polish. It needs courage.
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
