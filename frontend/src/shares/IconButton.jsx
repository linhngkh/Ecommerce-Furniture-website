const IconButton = ({ children }) => {
  return (
    <button className="flex items-center justify-center rounded-full border bg-white p-2 shadow-md transition hover:scale-110">
      {children}
    </button>
  );
};

export default IconButton;
