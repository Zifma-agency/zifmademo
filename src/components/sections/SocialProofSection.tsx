const SocialProofSection = () => {
  // Placeholder for demo sites - you can replace with actual screenshots later
  const demoSites = [
    { 
      before: "Before: Slow loading site",
      after: "After: Fast, modern design",
      category: "Restaurant Website"
    },
    { 
      before: "Before: Outdated layout",
      after: "After: Mobile-friendly design",
      category: "Service Business"
    }
  ];

  return (
    <section className="py-16 px-4 md:py-24 bg-muted">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-center text-foreground">
          See the Transformation
        </h2>
        <p className="text-center text-muted-foreground mb-12 md:mb-16 text-lg">
          Real results from our website builds
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {demoSites.map((demo, index) => (
            <div key={index} className="bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="p-6 md:p-8">
                <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-semibold mb-4">
                  {demo.category}
                </span>
                <div className="space-y-4">
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Before</p>
                    <p className="font-medium text-foreground">{demo.before}</p>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>
                  </div>
                  <div className="bg-primary/5 p-4 rounded-lg border-2 border-primary/20">
                    <p className="text-sm text-muted-foreground mb-1">After</p>
                    <p className="font-medium text-foreground">{demo.after}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
