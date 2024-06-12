import BackgroundHeading from "./BackgroundHeading";
import Footer from "./Footer";
import Header from "./Header";
import ItemList from "./ItemList";
import Sidebar from "./Sidebar";
import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";

function App() {
  return (
    <>
      <BackgroundHeading />

      <main>
        <Header />
        <ItemList />
        <Sidebar>
          <AddItemForm />
          <ButtonGroup />
        </Sidebar>
      </main>

      <Footer />
    </>
  );
}

export default App;
