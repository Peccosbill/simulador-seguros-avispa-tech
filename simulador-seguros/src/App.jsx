import { Calculator, UserDetail, UsersList, Nav } from "./components";

function App() {
  return (
    <div>
      <Nav />
      <div className="grid sm:grid-cols-3 grid-cols-1">
        <UsersList />
        <UserDetail />
        <Calculator />
      </div>
    </div>
  );
}

export default App;
