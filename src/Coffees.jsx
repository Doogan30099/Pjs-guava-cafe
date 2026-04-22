import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Coffee" },
  { id: 2, name: "Colombian Coffee" },
  { id: 3, name: "Italian Coffee" },
  { id: 4, name: "French Coffee" },
  { id: 5, name: "Turkish Coffee" },
];

const Coffees = ({ Items = defaultItems }) => {
  return (
    <div className="coffees">
      <h2>Coffees</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Coffees.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Coffees;
