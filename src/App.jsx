import "./App.css";
import LatLong from "./components/LatLong";
import NavBar from "./view/navBar";
import TopNav from "./view/topNav";


function App() {
  return (
    <>
      <div className=" bg-[url('/assets/heroImg.png')] h-screen text-lg">    
        
        <TopNav />
        <NavBar />
        
      </div>
      <LatLong/>
    </>
  );
}

export default App;
