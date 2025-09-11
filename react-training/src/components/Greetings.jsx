function Greetings1() {
  const name = "something";
  return (
    <>
      <h1>Hello React, {name}</h1>
    </>
  );
}

function Greetings2() {
  return (
    <>
      <h1>Hello React</h1>
    </>
  );
}

export { Greetings1, Greetings2 };
