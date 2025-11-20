import clsx from 'clsx';
import Hero3DBackground from './hero-3d-background';
import zilaxisLogo from '@/assets/Zilaxis.png';

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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-red-100 to-red-300 dark:bg-gradient-to-b dark:from-black dark:via-red-950 dark:to-red-900">
      <Hero3DBackground />
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-full -translate-x-1/2 rounded-[100%] border border-red-400 bg-black bg-[radial-gradient(closest-side,#000_82%,#ef4444)]"></div>
      
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-red-500/40 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      
      <img 
        src={zilaxisLogo} 
        alt="Zilaxis Media" 
        className="absolute -top-6 left-6 z-20 h-32 md:h-44 w-auto"
      />

      
      <div className="relative z-10 flex flex-col pt-16 sm:pt-20 md:pt-24 lg:pt-32">
        <div className="flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4 sm:px-10 lg:px-24 pb-8 sm:pb-10 md:pb-12">
          <h1 className="font-montserrat text-center text-white font-semibold tracking-tight text-3xl leading-snug sm:text-4xl sm:leading-snug md:text-5xl md:leading-snug lg:text-6xl lg:leading-tight max-w-4xl">
            <span className="block">Get a Modern,</span>
            <span className="block">High-Converting</span>
            <span className="block">Website for your Clinic</span>
            <span className="block">built in Just</span>
            <span className="block italic text-transparent bg-clip-text bg-gradient-to-r from-red-300 to-red-100">7 Days</span>
          </h1>
          
          <h2 className="font-outfit text-base leading-relaxed sm:text-lg sm:leading-relaxed md:text-xl md:leading-relaxed font-normal max-w-2xl text-pretty text-center" style={{ color: 'rgb(176, 176, 176)' }}>
            A Website That Helps Patients Trust You Before They Even Walk In
          </h2>

          <div className="flex w-full max-w-sm justify-center">
            <a href="#offer" className="w-full cursor-pointer">
              <div
                className={clsx(
                  'h-12 sm:h-14 flex items-center justify-center rounded-lg border-none text-sm sm:text-base font-medium',
                  'w-full border-[1.2px] border-white/5 bg-gradient-to-tr from-red-800 via-red-600 to-red-400 hover:shadow-lg hover:shadow-red-600/50 transition-shadow',
                )}
              >
                <span className="text-white">✅ Get My Website Started Now</span>
              </div>
            </a>
          </div>
        </div>
        
        <div className="w-full">
          <AnimatedLogoCloud />
        </div>
      </div>
    </section>
  );
};

export default HeroWithLogos;
