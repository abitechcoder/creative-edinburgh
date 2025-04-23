const membershipPlans = [
  {
    title: "Free",
    price: "Free",
    duration: "/5 years",
    description:
      "Our Free Membership is the ideal starting place for people new to the city or to the creative industries, and those looking to make connections.",
    benefits: [
      "Monthly newsletter packed with opportunities, events, jobs, and news.",
      "A place at our monthly Creative Circles events.",
      "Eligibility for the Creative Edinburgh Awards.",
      "Access to purchase tickets to all our events.",
    ],
  },
  {
    title: "Plus",
    price: "SLE30.00",
    billing: "* Automatic rebilling",
    duration: "/annual",
    description:
      "We would recommend a Plus Membership to those who are looking for professional development opportunities to help them reach their career goals.",
    benefits: [
      "Enjoy all the Free Membership benefits.",
      "Benefit from 50% off Creative Edinburgh Mentoring Programme. (Pay SLE50 instead of SLE100 for 5 months of mentoring).",
      "Benefit from 30% discount for tickets to Creative Edinburgh’s annual Awards Ceremony and Summer Party (one discounted ticket per event).",
      "Benefit from three months of free access to Spotlight, a leading casting platform in the UK.",
      "Access the Creative Edinburgh Members’ Directory featuring thousands of local creatives to showcase your work.",
    ],
  },
  {
    title: "Premium",
    price: "SLE75.00",
    billing: "* Automatic rebilling",
    duration: "/annual",
    description:
      "Our Premium package has been built with individual professionals and freelancers in mind who are looking to elevate their profile in the creative community.",
    benefits: [
      "Enjoy all the Free Membership benefits.",
      "Benefit from free and discounted coworking/hotdesking at partner venues across the city.",
      "Receive a Member’s Spotlight, bespoke article about your practice on our website, also featured in one of our monthly newsletters and amplified on social media channels.",
      "Benefit from a 30% discount on tickets to our annual Awards Ceremony and Summer Party (one discounted ticket per event).",
      "Access the Creative Edinburgh Members’ Directory featuring thousands of local creatives to showcase your work.",
    ],
  },
  {
    title: "Business",
    price: "SLE200.00",
    billing: "* Automatic rebilling",
    duration: "/annual",
    description:
      "This membership option is great for small businesses and organisations looking for promotional opportunities within our creative community.",
    benefits: [
      "Enjoy all the Free Membership benefits.",
      "Receive a Member’s Spotlight, bespoke article about your practice on our website, also featured in one of our monthly newsletters and amplified on social media channels.",
      "Benefit from an Instagram story takeover promoting your business to our 16,000+ followers.",
      "Access exclusive speaking opportunities at Creative Edinburgh events.",
      "Get invited to join the Creative Edinburgh team at exclusive industry events, meetings with international delegations or roundtables with policy makers and creative industry experts.",
      "Access the Creative Edinburgh Members’ Directory featuring thousands of local creatives to showcase your work.",
    ],
  },
];

const PricingSection = () => {
  return (
    <div className="flex flex-col p-6 bg-gray-100 items-center">
      <h1 className="text-3xl my-8 font-semibold">Membership Options</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {membershipPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold">{plan.title}</h3>
            <p className="text-2xl font-bold">
              {plan.price}{" "}
              <span className="text-gray-500 text-lg font-medium">
                {plan.duration}
              </span>
            </p>
            <p className="text-gray-600">{plan.billing}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
              Join
            </button>
            <p className="mt-3 text-sm">{plan.description}</p>
            <ul className="mt-4 space-y-2 text-sm items-center text-gray-700">
              {plan.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <span className="text-blue-600">★</span>
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
