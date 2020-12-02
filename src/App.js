import SideMenu from './components/navigation/side-nav/SideMenu';
import TopNav from './components/navigation/top-nav/TopNav';
import './styles/main.css';


function App() {
  return (
    <div className="flex">
      <SideMenu />
      <div className=" flex-grow">
        <TopNav/>
      </div>
      
    </div>
  );
}

export default App;
