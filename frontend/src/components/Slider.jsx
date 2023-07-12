import { useState } from "react";
import { testimonials } from "../../data";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const { name, position, picture, text } = testimonials[index];

  //number is bigger than the last item in the array, return 0
  const checkNumber = (number) => {
    if (number > testimonials.length - 1) {
      return 0;
    }
    //number is smaller than 0, return last item in the array
    if (number < 0) {
      return testimonials.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  return (
    <div className="mx-auto flex flex-col items-center justify-center space-y-5 text-center">
      <article className="flex flex-col items-center justify-center space-y-5 ">
        <img src={picture} alt={name} loading="lazy" />
        <h2 className="text-xl font-semibold text-black">{name}</h2>
        <p className="text-sm font-thin text-subtext1">{position}</p>
        <p className="w-[300px]  text-sm font-bold text-subtext1 md:w-[700px]">
          {text}
        </p>
      </article>
      <div className="flex gap-3 ">
        <SlArrowLeft
          onClick={prevPerson}
          className="cursor-pointer hover:text-pink"
        />
        <SlArrowRight
          onClick={nextPerson}
          className=" cursor-pointer hover:text-pink"
        />
      </div>
    </div>
  );
};

export default Slider;
