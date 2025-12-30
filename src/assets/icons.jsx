export const icons = {
  Chevron: ({ open }) => (
    <svg
      className={`w-3 h-3 transition-transform duration-300 ${
        open ? "rotate-90" : ""
      }`}
      viewBox="0 0 10 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path d="M2 1 L7 5 L2 9" />
    </svg>
  ),
};
