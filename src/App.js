import './App.css';
import TabsCard from './components/TabsCard';
import AboutUs from './components/toggle/AboutUs';
import Toggle from './components/toggle/Toogle'

function App() {
  return (
    <div className="App">
      <>
      <TabsCard />
      <Toggle />
      <AboutUs />
      </>
    </div>
  );
}

export default App;
