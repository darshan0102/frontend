import "./App.js";
import Card from "./components/Cart"
import image1 from "./image/image1.jpg";
import image2 from "./image/image2.jpg";
import image3 from "./image/image3.jpg";
import image4 from "./image/image4.jpg";
import image5 from "./image/image5.jpg";
import image6 from "./image/image6.jpg";


function App() {
  return (
    <div className="App">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">
          Responsive Product card grid
        </h1>
        <h1 className="text-3xl">Tailwind CSS</h1>
      </div>

      <div className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-20 gap-x-14 mt-10 mb-5 justify-center">
        <Card image={image1} delPrice="6999" curPrice="5999" />
        <Card image={image2} delPrice="5999" curPrice="4999" />
        <Card image={image3} delPrice="4999" curPrice="3999" />
        <Card image={image4} delPrice="4999" curPrice="3999" />
        <Card image={image5} delPrice="4999" curPrice="3999" />
        <Card image={image6} delPrice="4999" curPrice="3999" />
      </div>
    </div>
  );
}

export default App;
 