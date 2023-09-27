import { Navbar } from "./components/layout/navbar/Navbar";

import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer";

function App() {
  let saludo = "Bienvenidos a la web";

  return (
    <div>
      <Navbar />
      {/* <Home />
      <Login /> */}
      <ItemListContainer saludo={saludo} edad={12} />
    </div>
  );
}

export default App;
