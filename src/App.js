import './App.css';
import Sidebar from './components/Sidebar'
import Input from './components/sharedComponents/Input/Input'
import GotovaJelaForm from './components/GotovaJelaForm/GotovaJelaForm';
import 'bootstrap/dist/css/bootstrap.min.css';


const getval = (val) => {
  console.log(val)
}

function App() {
  return (
    <div className="">
      <Sidebar />

      <GotovaJelaForm />
    </div>
  );
}

export default App;
