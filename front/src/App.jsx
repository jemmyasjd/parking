
import VisitorForm from './components/VisitorForm';
import VisitorList from './components/VisitorList';

const App = () => {
  return (
    <div className="app">
      <header>
        <h1>Parking Management System</h1>
      </header>
      <main>
        <VisitorForm />
        <VisitorList />
      </main>
    </div>
  );
};

export default App;
