import React from "react";
import Header from "../components/Header";
import NotesForm from "../components/NotesForm";
import Notes from "../components/Notes";

function Home() {
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
    </>
  );
}

export default Home;
