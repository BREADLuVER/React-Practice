import { useClick, ClickProvider } from './context/ClickContext';
import ClickButton from './components/ClickButton';

const App = () => {
  const { clicks } = useClick();

  return (
    <div>
      <h1>Dashboard</h1>
      <p>Total Clicks: {clicks}</p>
      <ClickButton />
    </div>
  );
};

const WrappedApp = () => (
  <ClickProvider>
    <App />
  </ClickProvider>
);

export default WrappedApp;
