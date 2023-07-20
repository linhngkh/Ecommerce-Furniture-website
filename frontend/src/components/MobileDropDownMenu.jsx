const MobileDropDownMenu = () => {
  return (
    <div>
      <li>
        <button
          type="button"
          className="group flex w-full items-center rounded-lg p-2 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
          aria-controls="dropdown-example"
          data-collapse-toggle="dropdown-example"
        >
          <span className="ml-3 flex-1 whitespace-nowrap text-left">
            E-commerce
          </span>
        </button>
        <ul id="dropdown-example" className="hidden space-y-2 py-2">
          <li>
            <a
              href="/grid"
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Billing
            </a>
          </li>
          <li>
            <a
              href="#"
              className="group flex w-full items-center rounded-lg p-2 pl-11 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            >
              Invoice
            </a>
          </li>
        </ul>
      </li>
    </div>
  );
};

export default MobileDropDownMenu;
