import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostContext from './contexts/PostContext'
import AppRouter from './Routers/AppRouters';

function App() {
  return (
    <PostContext>
    <div className="App-container">
     <AppRouter />
    </div>
    </PostContext>
  );
}

export default App;