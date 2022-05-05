import Navbar from './Components/Navbar';
import Webcard from './Components/Webcard';
import './styles/style.css'
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function App() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col md:flex-row flex-wrap w-3/4 justify-center m-auto box-border py-14">
        <Webcard
          logo={<InstagramIcon />}
          title = {"Instagram"}
        />
        <Webcard
          logo={<YouTubeIcon />}
          title = {"Youtube"}
        />
        <Webcard
          logo={<GitHubIcon />}
          title = {"Github"}
        />
        <Webcard
          logo={<LinkedInIcon />}
          title = {"LinkedIn"}
        />
      </div>
    </>
  );
}

export default App;
