import ErrorBoundary from './ErrorBoundary';
import './App.css';

function App() {
  return (
    <ErrorBoundary>
      <div className="App">
        <header className="App-header">
          <h1>This is Application Number 1</h1>
          <h2 className="App-subheader">Классный подзаголовок</h2>
        </header>
      </div>
    </ErrorBoundary>
  );
}

export default App;
