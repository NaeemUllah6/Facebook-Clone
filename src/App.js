import { Routes } from 'react-router-dom';
import Header from './Components/layout/header.jsx'
import './tailwind.css'
import { Route } from 'react-router-dom';
import Home from './Components/header-components/home.jsx'
import User from './Components/header-components/user.jsx'
import Videos from './Components/header-components/videos.jsx'
import Games from './Components/header-components/games.jsx'
import Leftsidebar from './Components/layout/left_side_bar.jsx';
import Rightsidebar from './Components/layout/right_side_bar.jsx';
function App() {
  return (

    <>
      <Header />
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-3 justify-between'>
        <div className='ps-2 mt-[85px] flex  sticky col-span-1 overflow-auto h-fit top-[85px]'>
          <div className='hidden lg:block'>
            <Leftsidebar className='hidden lg:block' />
          </div>
        </div>
        <div className='mt-0 pt-0 lg:mt-[85px] overflow-auto col-span-2 w-full max-w-full lg:max-w-[800px] mx-auto'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </div>
        <div className='mt-[85px] col-span-1 flex justify-end ms-auto h-fit sticky top-[85px]'>
          <div className='hidden lg:block'>
            <Rightsidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
