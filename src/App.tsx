import { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NewsletterArticle from "./pages/NewsletterArticle.tsx";
import FestivalActivities from "./pages/FestivalActivities.tsx";
import OilPainting from "./pages/OilPainting.tsx";
import BakingDIY from "./pages/BakingDIY.tsx";
import EcoCreation from "./pages/EcoCreation.tsx";
import DailyPictureBook from "./pages/DailyPictureBook.tsx";
import GrossMotor from "./pages/GrossMotor.tsx";
import LifeSkills from "./pages/LifeSkills.tsx";
import ArtAppreciation from "./pages/ArtAppreciation.tsx";
import LearningZoneExploration from "./pages/LearningZoneExploration.tsx";
import NatureObservation from "./pages/NatureObservation.tsx";
import LanguageContext from "./pages/LanguageContext.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToHash />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/newsletter/:slug" element={<NewsletterArticle />} />
          <Route path="/festival-activities" element={<FestivalActivities />} />
          <Route path="/oil-painting" element={<OilPainting />} />
          <Route path="/baking-diy" element={<BakingDIY />} />
          <Route path="/eco-creation" element={<EcoCreation />} />
          <Route path="/daily-picture-book" element={<DailyPictureBook />} />
          <Route path="/gross-motor" element={<GrossMotor />} />
          <Route path="/life-skills" element={<LifeSkills />} />
          <Route path="/art-appreciation" element={<ArtAppreciation />} />
          <Route path="/learning-zone-exploration" element={<LearningZoneExploration />} />
          <Route path="/nature-observation" element={<NatureObservation />} />
          <Route path="/language-context" element={<LanguageContext />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
