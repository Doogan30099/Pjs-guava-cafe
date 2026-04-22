import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Espresso" },
  { id: 2, name: "Double Espresso" },
  { id: 3, name: "Ristretto" },
  { id: 4, name: "Lungo" },
  { id: 5, name: "Macchiato" },
];

const Espressos = ({ Items = defaultItems }) => {
  return (
    <div className="espressos">
      <h2>Espressos</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Espressos.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Espressos;
