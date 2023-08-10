export default function SearchBox({ search }) {
  return (
    <div>
      <input
        className="searchBox"
        type="text"
        onChange={search}
        placeholder="search by scientific or common name ..."
      ></input>
    </div>
  );
}
