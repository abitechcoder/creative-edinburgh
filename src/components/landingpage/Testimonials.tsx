import styles from "../../style";
import { Profile1, Profile2 } from "../../../public";
import { FaQuoteLeft } from "react-icons/fa6";
import Image from "next/image";

interface TestimonialType {
  id: number;
  image: any;
  quote: string;
  name: string;
  position: string;
}

const testimonials: TestimonialType[] = [
  {
    id: 1,
    image: Profile1,
    quote:
      "This Directory helps me collaborate with other green enthusiasts to create eco-friendly products.",
    name: "Mariama Koroma",
    position: "CEO Her Craft Creation",
  },
  {
    id: 2,
    image: Profile2,
    quote:
      "The Bizness Directory is supporting my business with new customers as more people reach out to my business through the directory.",
    name: "Sallay Sankoh",
    position: "CEO, NAPS Natural Beauty",
  },
];

const Testimonials = () => {
  return (
    <section className="px-4 container mx-auto lg:px-8 py-15 lg:py-20">
      <h2
        className={`${styles.heading1} lg:max-w-[70%] lg:mx-auto text-black text-center mb-4`}
      >
        Testimonials
      </h2>
      <p className="text-xl lg:text-2xl font-bold text-gray-500 text-center">
        Hear from our Community
      </p>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 lg:mt-16">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col md:flex-row bg-secondary/10 rounded-lg"
          >
            <Image
              src={testimonial.image}
              alt={`${testimonial.name} image`}
              className="w-[300px] h-[300px] mx-auto object-cover object-center rounded-lg"
            />
            <div className="relative px-4 py-8 flex flex-col gap-8 justify-between">
              <FaQuoteLeft
                size={30}
                className="text-secondary absolute top-3 left-4"
              />
              <p className="text-black text-xl mt-4">{testimonial.quote}</p>
              <div>
                <h3 className="font-bold text-2xl text-black">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
