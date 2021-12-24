import {
  PlanetsContextProvider,
  PlanetsIndexContextProvider,
  TopicContextProvider
} from './contexts/'
import Home from './pages/Home';

function App() {
  return (
    <PlanetsContextProvider>
      <PlanetsIndexContextProvider>
        <TopicContextProvider>
          <Home />
        </TopicContextProvider>
      </PlanetsIndexContextProvider>
    </PlanetsContextProvider>
    // <div className="flex flex-col justify-center items-center min-h-screen">
    //   <h1 className='bg-blue-500'>Hello</h1>
    //   <img src="./icons/logo.png" alt="jajaj"/>
    //   <img src="./icons/planet-earth-internal.svg" alt="jajaj"/>
    // </div>
  );
}

export default App;
