import Header from "./page/header";
import Navbar from "./page/navbar";
import "../style/Root.scss"
import Footer from "./page/footer";
import Main from "./page/main";
const Root = () => {
    return (
        <div className='app'>
            <div className='headers'>
                <Navbar />
                <Header />
                <Main />
                <Footer />
            </div>
        </div>
    );
};

export default Root;
