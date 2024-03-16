import NavBar from "../components/NavBar";

function DefaultLayout(props) {
  return (
    <>
      <NavBar />
      {props.children}
    </>
  );
}

export default DefaultLayout;
