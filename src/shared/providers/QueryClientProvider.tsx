import { isDev } from "@shared/env";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { ReactNode } from "react";
import ms from "ms";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: ms("3s"),
      retry: 0,
    },
  },
});

function Provider({ children }: { children: ReactNode }) {
  return (
    <>
      <QueryClientProvider client={client}>
        {children}
        {isDev === true ? <ReactQueryDevtools /> : null}
      </QueryClientProvider>
    </>
  );
}

export default Provider;
