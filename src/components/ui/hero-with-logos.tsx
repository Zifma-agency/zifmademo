import clsx from 'clsx';
import Hero3DBackground from './hero-3d-background';
import zilaxisLogo from '@/assets/Zilaxis.png';

// ... (Keep your logos array and AnimatedLogoCloud component exactly as they are) ...

const logos = [
  {
    name: 'Next.js',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881475/nextjs_logo_dark_gfkf8m.svg',
  },
  {
    name: 'GitHub',
    url: 'https://cdn.simpleicons.org/github/000000',
  },
  {
    name: 'Vercel',
    url: 'https://res.cloudinary.com/dfhp33ufc/image/upload/v1715881430/vercel_wordmark_dark_mhv8u8.svg',
  },
  {
    name: 'Spaceship',
    url: 'https://cdn.simpleicons.org/spaceship/000000',
  },
  {
    name: 'WordPress',
    url: 'https://cdn.simpleicons.org/wordpress/000000',
  },
  {
    name: 'Wix',
    url: 'https://cdn.simpleicons.org/wix/000000',
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-full py-12">
      <div className="mx-auto w-full px-4 md:px-8">
        <div
          className="group relative mt-6 flex gap-6 overflow-hidden p-2"
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-x-slider flex-row justify-around gap-6"
              >
                {logos.map((logo, key) => (
                  <img
                    key={key}
                    src={logo.url}
                    className="h-10 w-28 px-2 flex-none brightness-0 dark:invert"
                    alt={logo.name}
                  />
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

const HeroWithLogos = () => {
  return (
    <section className="relative min-h-[calc(100vh-50px)] overflow-hidden bg-gradient-to-b from-white via-red-100 to-red-300 dark:bg-gradient-to-b dark:from-black dark:via-red-950 dark:to-red-900">
      <Hero3DBackground />
      
      {/* Horizon / Circle Background */}
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-full -translate-x-1/2 rounded-[100%] border border-red-400 bg-black bg-[radial-gradient(closest-side,#000_82%,#ef4444)]"></div>
      
      {/* Grid Background */}
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      
      {/* Blurred Elements */}
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-red-500/40 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      
      {/* Logo */}
      <img 
        src={zilaxisLogo} 
        alt="Zilaxis Media" 
        className="absolute -top-6 left-6 z-20 h-32 md:h-44 w-auto"
      />

      {/* --- MAIN CONTENT FIXES BELOW --- */}
      
      {/* FIX 1: Increased top padding from pt-[35px] to responsive pt-24/32/40 to clear browser search bars */}
      <div className="relative z-10 flex flex-col pt-24 md:pt-32 lg:pt-40">
        
        <div>
          {/* FIX 2: Removed fixed height (md:h-[288px]). 
              Changed to 'min-h' and 'h-auto'. Added 'pb-8' for gap between text and button. */}
          <div className="mx-auto flex h-auto min-h-[320px] max-w-[90vw] shrink-0 flex-col items-center justify-center gap-4 px-4 pb-8 sm:px-10 lg:px-24 md:max-w-[80vw]">
            
            {/* FIX 3: Removed <span block>. Added 'text-balance'.
                'text-balance' automatically formats headlines evenly without manual breaks. */}
            <h1 className="text-balance font-montserrat text-center text-white font-semibold tracking-tight text-[32px] leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight lg:text-[67px] lg:leading-tight max-w-[1000px]">
              Get a Modern, High-Converting Website for your Clinic built in Just <span className="italic text-white">7 Days</span>
            </h1>
            
            <h2 className="font-outfit text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[30px] font-normal max-w-[280px] sm:max-w-xl md:max-w-2xl text-pretty text-center px-2" style={{ color: 'rgb(176, 176, 176)' }}>
              A Website That Helps Patients Trust You Before They Even Walk In
            </h2>
          </div>
        </div>

        {/* Button Section - Added margin top (mt-4) to ensure separation */}
        <div className="flex items-start justify-center px-4 sm:px-8 md:px-24 mt-4">
          <div className="flex w-full max-w-[90vw] sm:max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a href="#offer" className="w-full cursor-pointer">
              <div
                className={clsx(
                  'boder-2 !h-12 sm:!h-14 flex-col items-center justify-center rounded-none border-none text-sm sm:!text-base',
                  'flex w-full border-[1.2px] border-white/5 bg-gradient-to-tr from-red-800 via-red-600 to-red-400',
                )}
              >
                <span className="text-white dark:text-white font-semibold">✅ Get My Website Started Now</span>
              </div>
            </a>
          </div>
        </div>
        
        {/* Logo Cloud */}
        <div className="w-full mt-8">
          <AnimatedLogoCloud />
        </div>
      </div>
    </section>
  );
};

export default HeroWithLogos;
