function Button() {
  return (
    <button className="bg-orange-500 text-white px-8 py-2 relative group">
      <span className="text-base font-normal">Get Started</span>
      <span className="absolute top-0 bottom-0 right-0 px-2 py-2">
        <svg viewBox="0 0 20 20" fill="none" className="transform rotate-45 border-l-2 border-t-2 border-white w-4 h-4">
          <path d="M3 3l14 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </span>
    </button>
  );
}

export default Button;


