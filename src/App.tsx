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
  );
}

export default App;
