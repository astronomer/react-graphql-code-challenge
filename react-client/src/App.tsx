import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";

import { Home } from "./containers";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
