let Hello = props => {
  return (
    <>
      <h1
        style={{
          color: "blue",
          backgroundColor: "green"
        }}
      >
        Hello {props.name}
      </h1>
      <p>Zdravim {props.name}</p>
    </>
  );
};

export default Hello;
