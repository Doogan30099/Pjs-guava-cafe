import PropTypes from "prop-types";

const defaultItems = [
  { id: 1, name: "Regular Tea" },
  { id: 2, name: "Green Tea" },
  { id: 3, name: "Black Tea" },
  { id: 4, name: "Herbal Tea" },
  { id: 5, name: "Chai Tea" },
];

const Teas = ({ Items = defaultItems }) => {
  return (
    <div className="teas">
      <h2>Teas</h2>
      <ul>
        {Items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

Teas.propTypes = {
  Items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Teas;
