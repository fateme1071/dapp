import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { NavigateSetter, ScrollToTop, ErrorFallback } from "./components";
import { ToastContainer } from "react-toastify";
import { ErrorBoundary } from "react-error-boundary";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 1 } }
});

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => window.location.reload()}
        >
          <NavigateSetter />
          <ScrollToTop />
          <App />
          <ToastContainer rtl newestOnTop />
        </ErrorBoundary>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
