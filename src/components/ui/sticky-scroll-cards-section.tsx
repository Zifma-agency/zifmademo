import React, { useState, useEffect, useRef } from 'react';

// --- Custom Hook for Scroll Animation ---
const useScrollAnimation = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return [ref, inView] as const;
};

interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  bgColor: string;
  textColor: string;
}

interface StickyFeatureSectionProps {
  title: string;
  subtitle: string;
  features: Feature[];
}

// --- Header Component ---
const AnimatedHeader = ({ title, subtitle }: { title: string; subtitle: string }) => {
  const [headerRef, headerInView] = useScrollAnimation();
  const [pRef, pInView] = useScrollAnimation();

  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <h2 
        ref={headerRef}
        className={`text-4xl md:text-5xl font-bold transition-all duration-700 ease-out text-foreground ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {title}
      </h2>
      <p 
        ref={pRef}
        className={`text-lg text-muted-foreground mt-4 transition-all duration-700 ease-out delay-200 ${pInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {subtitle}
      </p>
    </div>
  );
};

export function StickyFeatureSection({ title, subtitle, features }: StickyFeatureSectionProps) {
  return (
    <div className="bg-muted font-sans">
      <div className="px-[5%]">
        <div className="max-w-7xl mx-auto">
          <section className="py-16 md:py-24 flex flex-col items-center">
            <AnimatedHeader title={title} subtitle={subtitle} />

            <div className="w-full">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-2 items-center gap-4 md:gap-8 p-8 md:p-12 rounded-3xl mb-16 sticky"
                  style={{ 
                    top: `${100 + index * 20}px`,
                    backgroundColor: feature.bgColor
                  }}
                >
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{feature.title}</h3>
                    <p className={feature.textColor}>{feature.description}</p>
                  </div>
                  
                  <div className="image-wrapper mt-8 md:mt-0">
                    <img 
                      src={feature.imageUrl} 
                      alt={feature.title}
                      loading="lazy"
                      className="w-full h-auto rounded-lg shadow-lg object-cover"
                      onError={(e) => { 
                        const target = e.target as HTMLImageElement;
                        target.onerror = null; 
                        target.src = "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop";
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
