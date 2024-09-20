import "./App.css";
import LatLong from "./components/LatLong";
import NavBar from "./view/NavBar";

import TopNav from "./view/topNav";


function App() {
  return (
    <>
      <div className=" bg-[url('/assets/heroImg.png')]  h-screen md:text-sm lg:text-sm  min-[320px]:max-sm:h-screen, text-sm  font-DM Sans">         
        <TopNav />
        <NavBar/>
        
      </div>

    </>
  );
}

export default App;
