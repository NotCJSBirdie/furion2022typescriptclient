import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="ml-16">
              <h1
                id="herotextB"
                className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              >
                Daniel Crooke
              </h1>
              <h1
                id="herotextB"
                className="flex flex-row title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              >
                <h1 className="text-red-600">Strong Power</h1>
                From
              </h1>
              <h1
                id="herotextB"
                className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
              >
                Your Body
              </h1>
              <div className="flex flex-row">
                <p className="leading-relaxed my-4 mr-4">
                  _____________________
                </p>
                <h1 className="z-50 relative top-2 m-4">PHOTOGRAPHY 2015</h1>
              </div>
            </div>

            <h1 id="herotextA" className="z-50 relative  ">
              Creative
            </h1>
          </div>

          <div className="rotate-90 z-50 relative top-8 left-24 lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <h3
              id="verticaltext"
              className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900"
            >
              DANIEL CROOKE
            </h3>
            <h3
              id="verticaltext"
              className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900"
            >
              STRONG POWERFROM
            </h3>
            <h3
              id="verticaltext"
              className="title-font sm:text-lg text-lg mb-2 font-medium text-gray-900"
            >
              YOUR BODY
            </h3>

            <h1>PHOTOGRAPHY </h1>
          </div>
        </div>
      </section>
      <div className="pt-72 pb-16 flex flex-row justify-between m-16">
        <div className="flex flex-row">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-facebook m-2 stroke-black"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-twitter m-2 stroke-black"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-pinterest m-2 stroke-black"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="8" y1="20" x2="12" y2="11" />
            <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7" />
            <circle cx="12" cy="12" r="9" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-instagram m-2 stroke-black"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <rect x="4" y="4" width="16" height="16" rx="4" />
            <circle cx="12" cy="12" r="3" />
            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-rss m-2 stroke-black"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <circle cx="5" cy="19" r="1" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <path d="M4 11a9 9 0 0 1 9 9" />
          </svg>
        </div>
        <div className="flex flex-row ">
          <h1 id="bottomtext" className="m-2 text-white">
            PREV
          </h1>
          <h1 id="bottomtext" className="m-2 text-white">
            NEXT
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
