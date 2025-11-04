import clsx from 'clsx';
import Hero3DBackground from './hero-3d-background';

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
      <div className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)] h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-full -translate-x-1/2 rounded-[100%] border border-red-400 bg-black bg-[radial-gradient(closest-side,#000_82%,#ef4444)]"></div>
      
      <div className="absolute left-0 top-0 z-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)] border-b border-border">
        <div className="col-span-1 flex h-full items-center justify-center" />
        <div className="col-span-1 flex h-full items-center justify-center border-x border-white/10" />
        <div className="col-span-1 flex h-full items-center justify-center" />
      </div>
      
      <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-red-500/40 blur-[200px]" />
      <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-background opacity-50 blur-[100px] md:block" />
      
      <div className="relative z-10 flex flex-col divide-y divide-white/10 pt-[35px]">
        <div>
          <div className="mx-auto flex min-h-[320px] sm:min-h-[350px] md:h-[288px] max-w-[90vw] md:max-w-[80vw] shrink-0 flex-col items-center justify-center gap-3 sm:gap-4 px-4 py-8 sm:px-10 lg:px-24">
            <h1 className="font-montserrat text-pretty text-center text-[32px] leading-[38px] sm:text-4xl sm:leading-[44px] md:text-5xl md:leading-[56px] lg:text-[67px] font-semibold lg:leading-[74px] tracking-tight md:max-w-screen-lg" style={{ color: '#020817' }}>
              Launch Your Business Website in{' '}
              <span className="italic" style={{ color: '#F6827F' }}>
                48 Hours
              </span>
              {' '}— Built by AI,{' '}
              <span className="italic" style={{ color: '#F6827F' }}>
                Perfected by Humans
              </span>
            </h1>
            <h2 className="font-outfit text-[16px] leading-[26px] sm:text-[18px] sm:leading-[28px] md:text-[20px] md:leading-[30px] font-normal max-w-[280px] sm:max-w-xl md:max-w-2xl text-pretty text-center px-2" style={{ color: 'rgb(176, 176, 176)' }}>
              Done-for-you website design for businesses. Get your site live, hosted, and optimized — for one flat price.
            </h2>
          </div>
        </div>

        <div className="flex items-start justify-center divide-y divide-white/10 px-4 sm:px-8 md:px-24">
          <div className="flex w-full max-w-[90vw] sm:max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
            <a href="#offer" className="w-full cursor-pointer">
              <div
                className={clsx(
                  'boder-2 !h-12 sm:!h-14 flex-col items-center justify-center rounded-none border-none text-sm sm:!text-base',
                  'flex w-full border-[1.2px] border-white/5 bg-gradient-to-tr from-red-800 via-red-600 to-red-400',
                )}
              >
                <span className="text-white dark:text-white">✅ Get My Website Started Now</span>
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
