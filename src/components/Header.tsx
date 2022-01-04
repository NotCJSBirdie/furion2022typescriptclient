import "./Header.css";

const Header = () => {
  return (
    <div className="p-12">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span id="brandtitle" className="ml-3 text-xl">
              FUSION
            </span>
          </a>
          <nav className=" md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">HOME</a>
            <a className="mr-5 hover:text-gray-900">FEATURES</a>
            <a className="mr-5 hover:text-gray-900">PORTFOLIO</a>
            <a className="mr-5 hover:text-gray-900">SHOP</a>
            <a className="mr-5 hover:text-gray-900">PURCHASE</a>
          </nav>
          <button
            id="findus"
            className="inline-flex items-center text-black border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            FIND US ON GOOGLE MAPS
          </button>
        </div>
      </header>
    </div>
  );
};

export default Header;
