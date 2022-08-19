import Router from "./Router";
import { COLORS } from "./static/static";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createTheme, ThemeProvider } from "@mui/material";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
// react query client
const queryClient = new QueryClient();

const theme = createTheme({
  palette: {
    secondary: {
      main: COLORS.secondary,
    },
  },
  typography: {
    fontFamily: "vazir",
  },
});

// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  return (
    <div
      className="App bg-gradient-to-b from-white-100 h-full p-8"
      style={{ backgroundColor: COLORS.base }}
    >
      <ThemeProvider theme={theme}>
        <CacheProvider value={cacheRtl}>
          <QueryClientProvider client={queryClient}>
            <Router />
          </QueryClientProvider>
        </CacheProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
