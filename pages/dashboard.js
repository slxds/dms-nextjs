import { useUser } from "../hooks/useAuth";

export default function Dashboard({ user }) {
  const handleSubmit = (e) => {
    e.preventdefault();
  };
  return (
    <>
      <h1>Dashboard</h1>
      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input name="email" type="email" />
        <button>Log in</button>
      </form>
    </>
  );
}

export const getServerSideProps = async ({ req, res }) => {
  console.log(req.cookies);

  if (!req.cookies["api_token"]) {
    console.log("redirecting");

    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  } else {
    return { props: { user: "Hallo" } };
  }
};
