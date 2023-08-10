const Highlight = ({ searchTerm, name }) => {
  name = name.replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
  if (searchTerm === "") return <span>{name}</span>;

  let parts = name.split(new RegExp(`(${searchTerm})`, "gi"));
  return parts.map((p, i) =>
    p.toLowerCase() === searchTerm.toLowerCase() ? (
      <span className="highlight" key={i}>
        {p}
      </span>
    ) : (
      <span key={i}>{p}</span>
    )
  );
};

const Card = ({ item, searchTerm }) => {
  return (
    <div className="card">
      <img src={item.Img} alt=""></img>
      <h2>
        <Highlight
          searchTerm={searchTerm}
          name={item["Latin name"] || "UNKNOWN"}
        />
      </h2>
      <div className="info">
        <Highlight
          searchTerm={searchTerm}
          name={item["Common name"]?.[0] || "UNKNOWN"}
        />
      </div>
      <div className="header">Common Name</div>
      <div className="details">
        <div className="header">Cateorgy</div>
        <div className="header">Family</div>
        <div className="header">Climate</div>
        <div className="info category">{item["Categories"] || "UNKNOWN"}</div>
        <div className="info family">{item["Family"] || "UNKNOWN"}</div>
        <div className="info climate">{item["Climat"] || "UNKNOWN"}</div>
      </div>
    </div>
  );
};

export default Card;
