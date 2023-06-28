const SharedText = ({ children }) => {
  return (
    <div className="flex items-center justify-center text-center">
      <h1 className="font-jose text-4xl font-bold text-blue">{children}</h1>
    </div>
  );
};

export default SharedText;
