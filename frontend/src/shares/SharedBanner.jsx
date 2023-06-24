const SharedBanner = ({ children }) => {
  return (
    <div className="mx-auto flex h-[200px] items-center bg-primary px-20 md:px-20">
      <h1 className="font-jose text-2xl font-extrabold">{children}</h1>
    </div>
  );
};

export default SharedBanner;
