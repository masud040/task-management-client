import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const BenefitCard = ({ benefit }) => {
  const { name, description, benefits } = benefit || {};

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
      className="bg-purple-300 p-3 rounded-lg"
    >
      <h3 className="text-xl font-medium">{name}</h3>
      <h6 className="font-medium">{description}</h6>
      <h5 className="text-lg font-bold underline">benefits:</h5>
      <ul className="list-disc ps-6">
        {benefits?.map((data, index) => (
          <li key={index}>{data}</li>
        ))}
      </ul>
    </div>
  );
};

export default BenefitCard;
