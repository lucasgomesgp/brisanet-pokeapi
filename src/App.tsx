import { GlobalTheme } from './theme/globalTheme';
import { Route, Routes } from "react-router-dom";
import { NoFavorites } from './pages/NoFavorites';
import { Login } from './pages/Login';
import { Search } from './pages/Search';
import { AllPokemons } from './pages/AllPokemons';
import { Favorites } from './pages/Favorites';
import { AuthProvider } from './hooks/contexts/AuthContext';
import PokemonProvider from './hooks/contexts/PokemonContext';

function App() {
  return (
    <>
      <AuthProvider>
        <PokemonProvider>
          <GlobalTheme />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/pokemon/fav" element={<Favorites />} />
            <Route path="/pokemon/search" element={<Search />} />
            <Route path="/pokemon/all" element={<AllPokemons />} />
            <Route path="/pokemon/nofav" element={<NoFavorites />} />
          </Routes>
        </PokemonProvider>
      </AuthProvider>
    </>
  );
}

export default App;
