import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import { Home } from "./containers";

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App;
