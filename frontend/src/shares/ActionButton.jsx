const ActionButton = ({ children }) => {
  return (
    <button className=" mt-5 bg-pink px-8 py-2 font-jose text-sm text-white transition hover:bg-deeppink">
      {children}
    </button>
  );
};

export default ActionButton;
