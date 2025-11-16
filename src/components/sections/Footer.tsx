import zilaxisLogo from '@/assets/zilaxis-logo.png';

const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted border-t">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-4">
          <img 
            src={zilaxisLogo} 
            alt="Zilaxis Media" 
            className="h-10 w-auto"
          />
          <p className="text-muted-foreground text-center">
            © 2025 Zilaxis Media. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
