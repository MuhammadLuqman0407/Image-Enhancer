import Header from "./components/Header";
import Home from './components/Home';
import Footer from './components/Footer';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
        <Header/>
        <main className="flex-1">
          <Home/>
        </main>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
