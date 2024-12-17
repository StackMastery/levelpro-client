const Button = ({ className, children }) => {
    return (
      <button
        className={`relative inline-flex h-[35px] overflow-hidden rounded-[8px] transition-all duration-500 hover:rounded-[80px] p-[1px] ${className}`}
      >
        {/* Animated Spinning Background */}
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  
        {/* Inner Button Content */}
        <span className="inline-flex h-full w-full items-center justify-center gap-2 transition-all duration-500 rounded-[8px] hover:rounded-[80px] bg-bg-1 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
          {children}
        </span>
      </button>
    );
  };
  
  export default Button;
  