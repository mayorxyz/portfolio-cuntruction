import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./themes/site/Layout";
import { HatchDefs } from "./themes/site/components";
import { SurveyBackground } from "./themes/site/SurveyBackground";
import Home from "./pages/Home";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Stack from "./pages/Stack";
import Process from "./pages/Process";
import Services from "./pages/Services";
import Lab from "./pages/Lab";
import Contact from "./pages/Contact";
import CV from "./pages/CV";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <HatchDefs />
      <SurveyBackground />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/stack" element={<Stack />} />
          <Route path="/process" element={<Process />} />
          <Route path="/services" element={<Services />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cv" element={<CV />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
