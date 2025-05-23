export default function Galeria() {
  return (
    <div
      style={{
        width: "99vw",
        height: "99vh",
        overflow: "hidden",
        margin: "1px",
        padding: "0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <iframe
        src="https://nocodb.plataforma.app/dashboard/#/nc/gallery/0c5b752b-73ee-4f1a-bf5c-bbbfaf6363f9?embed=true"
        width="100%"
        height="1100px" // maior que o container
        style={{
          marginTop: "-51px", // 🔥 corte visual para esconder o topo
          border: "none",
          display: "block",
        }}
        loading="lazy"
      />
    </div>
  );
}
