export default function SignUp() {
  return (
    <div className="page">
      <h2>Sign Up Page</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <br />
        <input type="email" placeholder="Email" />
        <br />
        <input type="password" placeholder="Password" />
        <br />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
