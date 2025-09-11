export function UserCard({ name, email, imageUrl }) {
  //   const { name, email } = props;
  const trainer = {
    name: "ayush",
    email: "ayush@gmail.com",
  };

  //   const name = trainer.name;
  //   const email = trainer.email;

  //   const { name, email } = trainer;
  return (
    <>
      <h3>{name}</h3>
      <h4>{email}</h4>
      <img src={imageUrl} alt="my college" />
    </>
  );
}
