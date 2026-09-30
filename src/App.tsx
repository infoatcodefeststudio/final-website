import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DefaultProviders } from "./components/providers/default.tsx";
import AppLayout from "./components/layout/app-layout.tsx";
import AuthCallback from "./pages/auth/Callback.tsx";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import ComingSoon from "./components/site/coming-soon.tsx";
import ProductDetail from "./pages/products/ProductDetail.tsx";
import Solutions from "./pages/solutions/Solutions.tsx";
import CustomTechnology from "./pages/custom-technology/CustomTechnology.tsx";
import About from "./pages/about/About.tsx";
import BookADemo from "./pages/book-a-demo/BookADemo.tsx";
import Contact from "./pages/contact/Contact.tsx";

export default function App() {
  return (
    <DefaultProviders>
      <BrowserRouter>
        <Routes>
          <Route path="/auth/callback" element={<AuthCallback />} />

          <Route element={<AppLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route
              path="/custom-technology"
              element={<CustomTechnology />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/book-a-demo" element={<BookADemo />} />
            <Route
              path="/privacy-policy"
              element={<ComingSoon title="Privacy Policy" />}
            />
            <Route
              path="/terms-and-conditions"
              element={<ComingSoon title="Terms & Conditions" />}
            />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </DefaultProviders>
  );
}
