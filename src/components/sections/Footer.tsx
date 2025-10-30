const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-muted border-t">
      <div className="container max-w-6xl mx-auto text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Web Design Agency. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
