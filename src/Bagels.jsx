import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Bagel" },
  { id: 2, name: "Sesame Bagel" },
  { id: 3, name: "Everything Bagel" },
  { id: 4, name: "Cinnamon Raisin Bagel" },
  { id: 5, name: "Blueberry Bagel" },
];

const Bagels = ({ Items = defaultItems }) => {
  return (
    <div className="bagels">
      <h2>Bagels</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Bagels.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Bagels;
