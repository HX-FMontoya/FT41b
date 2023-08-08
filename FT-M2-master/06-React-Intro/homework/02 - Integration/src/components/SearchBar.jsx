export default function SearchBar({ onSearch }) {
  // props -> { onSearch}

  return (
    <div>
      <input type="search" />
      <button onClick={() => onSearch()}>Agregar</button>
    </div>
  );
}
