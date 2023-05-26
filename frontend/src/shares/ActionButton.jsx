const ActionButton = ({ children }) => {
  return (
    <button className=" mt-5 bg-pink px-8 py-2 text-sm text-white hover:bg-deeppink">
      {children}
    </button>
  );
};

export default ActionButton;