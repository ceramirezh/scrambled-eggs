import ScramblePage from "./scramble/ScramblePage";
import ScrambleTitle from "./scramble/ScrambleTitle";

function App() {
  return (
    <div>
      <ScrambleTitle />
      <ScramblePage>
        <script src="./scramble/js/script" type="text/javascript"></script>
      </ScramblePage>
    </div>
  );
}

export default App;
