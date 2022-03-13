import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { SupportsProvider } from "./hooks/useSupports";

export function App() {
  return (
    <SupportsProvider>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </SupportsProvider>
  );
}
