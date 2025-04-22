import { donations } from "@/lib/constant";

const ChooseToDonate = () => {
  return (
    <section className="bg-gray-50 py-10 px-6">
      <div className="max-w-lg ">
        <h2 className="text-3xl lg:text-4xl font-bold text-black">
          CHOOSE TO DONATE ONE-OFF OR MONTHLY
        </h2>
        <ul className="mt-6 space-y-4">
          {donations.map((donation, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-black text-xl">●</span>
              <p className="text-lg text-gray-700">
                <strong>{donation.amount}</strong> {donation.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-24">
        <button className="w-full bg-green-800 text-white font-semibold py-4 rounded-lg hover:bg-green-900 transition">
          Donate via Paypal
        </button>
      </div>
    </section>
  );
};

export default ChooseToDonate;
