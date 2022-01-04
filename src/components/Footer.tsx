const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-300 flex flex-col items-center justify-between px-24 py-4  dark:bg-gray-800 sm:flex-row">
        <a
          href="#"
          className="text-lg  text-gray-800 dark:text-white hover:text-gray-700 dark:hover:text-gray-300"
        >
          ©2022 Furion. All Rights Reserved
        </a>

        <div className="flex -mx-2">
          <a
            href="#"
            className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300"
            aria-label="Reddit"
          >
            English | Francais
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
