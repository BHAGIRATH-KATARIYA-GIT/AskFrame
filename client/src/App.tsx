import AppRouter from './routes/AppRouter';



function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <AppRouter />
    </div>
  );
}

export const BASE_URL = import.meta.env.VITE_BASE_URL

export default App;

