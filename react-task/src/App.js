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
import JavascriptIcon from '@mui/icons-material/Javascript';
import CssIcon from '@mui/icons-material/Css';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import TerminalIcon from '@mui/icons-material/Terminal';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <>
            <Navbar />
            <div className="flex flex-col md:flex-row flex-wrap w-3/4 justify-center m-auto box-border py-2 md:py-14">
              {/* <Webcard
                logo={<InstagramIcon />}
                title = {"Instagram"}
                link = {"instagram.com"}
              /> */}
              <Webcard
                logo={<YouTubeIcon />}
                title = {"Youtube"}
                link = {"youtube.com"}
              />
              <Webcard
                logo={<GitHubIcon />}
                title = {"Github"}
                link = {"github.com"}
              />
              <Webcard
                logo={<LinkedInIcon />}
                title = {"LinkedIn"}
                link = {"linkedin.com"}
              />
              <Webcard
                logo={<StackedLineChartIcon />}
                title = {"StackOverflow"}
                link = {"stackoverflow.com"}
              />
              <Webcard
                logo={<JavascriptIcon />}
                title = {"ReactJS"}
                link = {"reactjs.org"}
              />
              <Webcard
                logo={<JavascriptIcon />}
                title = {"NodeJS"}
                link = {"nodejs.org"}
              />
              <Webcard
                logo={<CssIcon />}
                title = {"TailwindCSS"}
                link = {"tailwindcss.com"}
              />
              <Webcard
                logo={<AccountTreeIcon />}
                title = {"TheOdinProject"}
                link = {"theodinproject.com"}
              />
              <Webcard
                logo={<TerminalIcon />}
                title = {"FreeCodeCamp"}
                link = {"freecodecamp.org"}
              />
            </div>
          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
