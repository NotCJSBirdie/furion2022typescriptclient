import Picture1 from "./assets/picture1.jpg";
import Picture2 from "./assets/picture2.jpg";
import Picture3 from "./assets/picture3.jpg";
import Picture4 from "./assets/picture4.jpg";
import { useState, useEffect } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [TitleA, setTitleA] = useState("");
  const [TitleB, setTitleB] = useState("");
  const [TitleC, setTitleC] = useState("");
  const [TitleD, setTitleD] = useState("");
  const [CaptionA, setCaptionA] = useState("");
  const [CaptionB, setCaptionB] = useState("");
  const [CaptionC, setCaptionC] = useState("");
  const [CaptionD, setCaptionD] = useState("");

  useEffect(() => {
    setTitleA("SQUARE NEWS MAGAZINE BOX");
    setTitleB("FUSHI BICYCLE ONLINE STORE");
    setTitleC("ADMIRAL TRANSLATION COMPANY");
    setTitleD("RETRO VINTAGE LABELS");
    setCaptionA("3D DESIGN, PHOTOSHOP");
    setCaptionB("3D DESIGN");
    setCaptionC("3D DESIGN, PHOTOSHOP");
    setCaptionD("3D DESIGN, PHOTOSHOP");
  }, []);

  return (
    <div className="">
      <section className="text-gray-600 body-font mx-12">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4 relative bottom-32">
              <div className=" h-auto overflow-hidden shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full "
                  src={Picture1}
                />
              </div>
              <h5
                id="title"
                className="-rotate-90 relative right-12 title-font text-lg text-right font-medium text-gray-900 mt-6 mb-3"
              >
                January 15, 2016
              </h5>
              <p className="leading-relaxed text-base text-left relative bottom-12">
                {TitleA}
              </p>
              <p className="leading-relaxed text-base text-left  relative bottom-12">
                {CaptionA}
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4">
              <div className="h-auto overflow-hidden shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full "
                  src={Picture2}
                />
              </div>
              <h5
                id="title2"
                className="rotate-90 relative left-12 bottom-36 title-font text-lg text-left font-medium text-gray-900 mt-6 mb-3"
              >
                January 14, 2016
              </h5>
              <p className="leading-relaxed text-base text-left relative bottom-12">
                {TitleB}
              </p>
              <p className="leading-relaxed text-base text-left  relative bottom-12">
                {CaptionB}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mx-12">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -mx-4 -mb-10 text-center">
            <div className="sm:w-1/2 mb-10 px-4 relative bottom-32">
              <div className=" h-auto overflow-hidden shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Picture3}
                />
              </div>
              <h5
                id="title"
                className="-rotate-90 relative right-12 title-font text-lg text-right bottom-36 font-medium text-gray-900 mt-6 mb-3"
              >
                January 14, 2016
              </h5>
              <p className="leading-relaxed text-base text-left relative bottom-12">
                {TitleC}
              </p>
              <p className="leading-relaxed text-base text-left relative bottom-12">
                {CaptionC}
              </p>
            </div>
            <div className="sm:w-1/2 mb-10 px-4 relative top-48">
              <div className="h-auto overflow-hidden shadow-2xl">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src={Picture4}
                />
              </div>
              <h5
                id="title2"
                className="rotate-90 relative left-12 title-font text-lg text-left font-medium text-gray-900 mt-6 mb-3"
              >
                January 13, 2016
              </h5>
              <p className="leading-relaxed text-left relative bottom-12">
                {TitleD}
              </p>
              <p className="leading-relaxed text-left relative bottom-12">
                {CaptionD}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
