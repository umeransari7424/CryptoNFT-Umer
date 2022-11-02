import './App.scss';
import Header from './Components/Layout/Header';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Collection from './Components/Elements/Collection';
import Side from './Components/Layout/Side';

function App() {
  return (
    <div >
        <Header/>
        <Collection/>
        <Side/>
    </div>
  );
}

export default App;
