const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/30 section-darker">
      <div className="container mx-auto px-6 text-center">
        <a href="#" className="font-serif text-xl font-bold text-primary tracking-wider">
          Corner
        </a>
        <p className="text-muted-foreground/60 text-sm mt-4 font-light italic">
          Vidimo se u Corneru.
        </p>
        <p className="text-muted-foreground/30 text-xs mt-6 uppercase tracking-wider">
          Demo · Vizualni preview · Sadržaj je draft
        </p>
      </div>
    </footer>
  );
};

export default Footer;
