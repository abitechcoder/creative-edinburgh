import styles from "../../style";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => {
  return (
    <div
      className={`border-b-2 py-8 ${
        isOpen ? "border-red-500" : "border-gray-400"
      }`}
    >
      <button
        onClick={onClick}
        className="flex justify-between w-full text-left text-lg font-medium text-black"
      >
        {question}
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && (
        <p className={`${styles.paragraph} text-gray-600 mt-3 font-normal`}>
          {answer}
        </p>
      )}
    </div>
  );
};

export default FAQItem;
