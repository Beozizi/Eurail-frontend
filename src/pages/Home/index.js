import DownloadApp from "./components/DownloadApp/DowloadApp";
import Instruct from "./components/Instruct/Instruct";
import Masthead from "./components/Masthead/Masthead";
import NextInstruct from './components/NextIntruct'
import Note from "./components/Note/Note";
import Review from "./components/Review/Review";


function Home() {
    return ( 
        <div>
            <Masthead />
            <Note />
            <Instruct/>
            <NextInstruct />
            <Review/>
            <DownloadApp/>
        </div>
     );
}

export default Home;