export default function UIOverlay({ selected }) {
  if (!selected) return null;

  return (
    <div style={styles.container}>
      <h3>Selected</h3>
      <p>{selected}</p>
    </div>
  );
}

const styles = {
  container: {
    position: "absolute",
    top: 20,
    left: 20,
    background: "white",
    padding: "10px 15px",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
  },
};