import { ChatContainer } from "./components/ChatContainer";
import { ChatHeader } from "./components/ChatHeader";
import { InputMessageBox } from "./components/InputMessageBox";

function App() {
  return (
    <div className="
      md:w-2/5 
      2xl:w-3/12
      border-gray-200
      border-2
      px-2 
      py-4 
      rounded-lg
    ">
      <ChatHeader />
      <ChatContainer />
      <InputMessageBox />
    </div>
  );
}

export default App;
