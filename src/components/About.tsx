import "./About.css";
import Brands from "./Brands";

const About = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="relative top-7 sm:w-1/6 text-center sm:pr-8 sm:py-8">
                <h1>__________________</h1>
              </div>
              <div className="sm:w-5/6 sm:pl-8 sm:py-8  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 id="abouttitle" className="text-black py-8 text-3xl">
                  A LITTLE ABOUT US
                </h1>
                <p className="text-lg">
                  We are a team of young and enthusiastic designers, marketers
                  and developers who are specialized at creating professional
                  premium Wordpress themes. Our mission is to build
                  user-friendly, clean and modern designs in order to help more
                  and more users to improve their livelihood. To us, customer is
                  king. We guarantee that we will invest all of our skills and
                  strengths into products and support. Finally, we would like to
                  thank everyone for supporting us day by day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-5 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="relative top-7 sm:w-1/6 text-center sm:pr-8 sm:py-8">
                <h1>__________________</h1>
              </div>
              <div className="sm:w-5/6 sm:pl-8 sm:py-8  mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <h1 id="abouttitle" className="text-black py-8 text-3xl">
                  WE LOVE OUR CLIENT
                </h1>
                <Brands />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
