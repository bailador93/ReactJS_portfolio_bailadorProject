import { AppWeb } from "./web/components/AppWeb";
import { AppRouting } from "./web/components/AppRouting";

// ----------------------------------- LIBRARY STYLES
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import "video-react/dist/video-react.css";
import 'bootstrap/dist/css/bootstrap.min.css';

// ----------------------------------- STYLES
import "./web/assets/styles/Fonts.css";
import "./web/assets/styles/AppWeb.css";
import "./web/assets/styles/Animation.css";


const App = () => {

  return <>
    <AppRouting>
      <AppWeb />
    </AppRouting>
  </>;
}

export default App;
