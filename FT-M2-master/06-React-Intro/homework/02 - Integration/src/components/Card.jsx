export default function Card({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) {
  // props -> { id, name, status, origin{} }
  return (
    <div>
      <button onClick={() => onClose(id)}>X</button>
      <h2>{name}</h2>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin}</h2>
      <img src={image} alt="Image Not Found" />
    </div>
  );
}
