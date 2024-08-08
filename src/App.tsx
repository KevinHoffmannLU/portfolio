import Main from "./components/Main";
import View from "./components/View";
// import Contact from "./components/Contact";
import { Toaster } from "@/components/ui/toaster";

function App() {
  return (
    <>
      <Main />

      <Toaster />

      <div className="hidden 1.5k:block">
        <View />
      </div>

      {/* <Contact /> */}
    </>
  );
}

export default App;
