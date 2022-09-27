export default function Person({ name, image, status }) {
  return (
    <li
      style={{
        backgroundColor: `${
          status === "Alive" ? "green" : status === "Dead" ? "red" : "grey"
        } `,
      }}
    >
      <img src={image} alt="" />
      <h3>{name}</h3>
    </li>
  );
}
