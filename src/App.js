import logo from "./logo.svg";
import tailwind from "./tailwindcss-icon.svg";
import "./App.css";

function App() {
  return (
    <div className="App min-h-screen flex flex-col justify-center items-center bg-[#343a40]">
      <div className="flex w-[50%] justify-center items-center">
        <img src={logo} alt="react-logo" className="max-w-[350px] App-logo" />
        <img src={tailwind} alt="tailwind-logo" className="w-[250px]" />
      </div>
      <div className="text-white flex flex-col gap-y-5">
        <h1 className="font-bold text-5xl">Create-react-app + TailwindCSS</h1>
        <p className="text-2xl font-semibold">
          Edit src/App.js and save to reload.
        </p>
        <h2 className="hover:text-cyan-500 transition duration-150 ease-linear">
          <a
            href="https://reactjs.org/tutorial/tutorial.html"
            className="underline text-xl"
            target="_blank"
          >
            Learn React
          </a>
        </h2>
      </div>
    </div>
  );
}

export default App;
