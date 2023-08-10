export default function SearchBox({ search }) {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br4"
        type="text"
        onChange={search}
        placeholder="search scientific name or common name..."
      ></input>
    </div>
  );
}
