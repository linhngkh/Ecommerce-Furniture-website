const SharedText = ({ children }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <h1 className="font-jose text-xl font-bold  text-blue md:text-4xl">
        {children}
      </h1>
    </div>
  );
};

export default SharedText;
