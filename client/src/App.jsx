import "./App.css";
import Login from "./components/Login";
import NotesForm from "./components/NotesForm";
import Register from "./components/Register";
import Header from "./components/Header";
import Notes from "./components/Notes";

function App() {
  return (
    <>
      <div className="bg-[#172842] w-full">
        <div className=" w-full h-[10%]">
          <Header />
          <div className="p-5 flex justify-center">
            <NotesForm />
          </div>
          <div>
            <Notes />
          </div>
        </div>
      </div>
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
}

export default App;
