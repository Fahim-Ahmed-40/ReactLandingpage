import "./App.css";
import Advertisement from "./Section/Advertisement";
import Banner from "./Section/Banner";
import Contact from "./Section/Contact";
import CustomerReview from "./Section/CustomerReview";
import Footer from "./Section/Footer";
import Navbar from "./Section/Navbar";
import Pricing from "./Section/Pricing";
import Revolution from "./Section/Revolution";
import Unlock from "./Section/Unlock";
import Work from "./Section/Work";

function App() {
  return (
    <>
      <div className="">
        <div className="mx-1 lg:mx-8">
          <Navbar />
          <Banner />
        </div>
        <Advertisement />
        <div className="mx-1 lg:mx-8 space-y-4">
          <Revolution />
          <Work/>
          <CustomerReview />
          <Pricing />
          <Contact />
          <Unlock />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
