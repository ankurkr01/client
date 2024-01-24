import './App.css';
// import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Banner from './pages/Banner';
import Cards from './pages/Cards';
import templates from "./data"
// import File from './pages/File';
function App() {
  // const docs = [
  //   {
  //     uri: "https://calibre-ebook.com/downloads/demos/demo.docx",
  //     fileType: "docx",
  //     fileName: "demo.docx"

  //   }, // Remote file
    // { uri: require("") }, // Local File
  // ];
  return (
    <div className="App">
      <Banner />
      <Cards templates={templates} />
      {/* <DocViewer documents={docs} pluginRenderers={DocViewerRenderers}
      style={{height:"700px"}} /> */}
      {/* <Cards/> */}
      {/* <File/> */}
    </div>
  );
}

export default App;
