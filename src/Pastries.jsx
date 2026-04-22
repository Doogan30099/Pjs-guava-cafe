import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Pastry" },
  { id: 2, name: "Chocolate Pastry" },
  { id: 3, name: "Almond Pastry" },
  { id: 4, name: "Fruit Pastry" },
  { id: 5, name: "Cheese Pastry" },
];

const Pastries = ({ Items = defaultItems }) => {
  return (
    <div className="pastries">
      <h2>Pastries</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Pastries.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Pastries;
