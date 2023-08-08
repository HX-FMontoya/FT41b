import Card from "./Card";

export default function Cards({ characters }) {
  // props -> { characters:[{},{},{}] }
  // si recibo un arreglo
  // tomo el array, lo mapeo, y con cada uno de los objetos, se los paso a Card
  return (
    <div>
      {characters.map(
        ({ id, name, status, species, gender, origin, image }) => (
          <Card
            id={id}
            name={name}
            status={status}
            origin={origin.name}
            species={species}
            gender={gender}
            image={image}
            onClose={(id) =>
              window.alert(`Emulamos que se cierra la card con id: ${id}`)
            }
          />
        )
      )}
    </div>
  );
}
