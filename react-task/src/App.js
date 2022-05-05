import Navbar from './Components/Navbar';
import Webcard from './Components/Webcard';
import './styles/style.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import StackedLineChartIcon from '@mui/icons-material/StackedLineChart';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <div className="flex flex-col md:flex-row flex-wrap w-3/4 justify-center m-auto box-border py-2 md:py-14">
              <Webcard
                logo={<InstagramIcon />}
                title = {"Instagram"}
                link = {"instagram"}
              />
              <Webcard
                logo={<YouTubeIcon />}
                title = {"Youtube"}
                link = {"youtube"}
              />
              <Webcard
                logo={<GitHubIcon />}
                title = {"Github"}
                link = {"github"}
              />
              <Webcard
                logo={<LinkedInIcon />}
                title = {"LinkedIn"}
                link = {"linkedin"}
              />
              <Webcard
                logo={<StackedLineChartIcon />}
                title = {"StackOverflow"}
                link = {"stackoverflow"}
              />
            </div>
          </>
        } />
        <Route path='/instagram' element={<Navbar />}/>
        <Route path='/youtube' element={<Navbar />}/>
        <Route path='/github' element={<Navbar />}/>
        <Route path='/linkedin' element={<Navbar />}/>
        <Route path='/stackoverflow' element={<Navbar />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
