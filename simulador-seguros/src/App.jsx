import { Calculator, UserDetail, UsersList } from "./components"

function App() {
  return (
  <div className="grid grid-cols-3">
    <UsersList />
    <UserDetail />
    <Calculator />
  </div>
  );
}

export default App;
