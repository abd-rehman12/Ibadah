import "./App.css";
import LatLong from "./components/LatLong";
import NavBar from "./view/NavBar";

import TopNav from "./view/topNav";


function App() {
  return (
    <>
      <div className=" bg-[url('/assets/heroImg.png')]  h-screen md:text-sm lg:text-lg font-DM Sans">    
        
        <TopNav />
        <NavBar/>
        
      </div>
      <LatLong/>
    </>
  );
}

export default App;
