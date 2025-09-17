const MovingCircles = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Large floating circles */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-accent/20 to-primary/20 blur-3xl animate-float-medium"></div>
      <div className="absolute bottom-32 left-32 w-64 h-64 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 blur-3xl animate-float-fast"></div>
      
      {/* Neon accent circles */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 rounded-full bg-primary/30 blur-xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/3 left-1/5 w-24 h-24 rounded-full bg-accent/40 blur-lg animate-pulse-glow-delayed"></div>
      
      {/* Small moving particles */}
      <div className="absolute top-1/2 left-1/3 w-4 h-4 rounded-full bg-primary/60 animate-drift-1"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 rounded-full bg-accent/70 animate-drift-2"></div>
      <div className="absolute bottom-1/4 left-2/3 w-2 h-2 rounded-full bg-primary/80 animate-drift-3"></div>
      
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-5 dark:opacity-10"></div>
    </div>
  );
};

export default MovingCircles;