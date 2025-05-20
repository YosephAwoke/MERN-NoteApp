
import {Route, Routes} from 'react-router';

import NoteDetailPage from './pages/NoteDetailPage';
import Home from './pages/Home';
import Create from './pages/Create';




const App = () => {
  return (
    <div data-theme="forest" >

      <button className='btn btn-outline'>Click Me</button>
 

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
        <Route path="/create" element={<Create />} />
      
      </Routes>
    </div>
  )
}

export default App;