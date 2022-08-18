import Router from "./Router";
import { COLORS } from "./static/static";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// react query client
const queryClient = new QueryClient();

function App() {
  return (
    <div
      className="App bg-gradient-to-b from-white-100 md:h-full p-8"
      style={{ backgroundColor: COLORS.base }}
    >
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}

export default App;
