import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Croissant" },
  { id: 2, name: "Chocolate Croissant" },
  { id: 3, name: "Almond Croissant" },
  { id: 4, name: "Ham and Cheese Croissant" },
  { id: 5, name: "Spinach and Feta Croissant" },
];

const Croissants = ({ Items = defaultItems }) => {
  return (
    <div className="croissants">
      <h2>Croissants</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Croissants.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Croissants;
