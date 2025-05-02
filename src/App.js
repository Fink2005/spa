import "./App.css";
import Layout from "./template/Layout";
import MainPage from "./MainPage/MainPage";
import {
  BrowserRouter,
  Route,
  Router,
  Routes,
  useLocation,
} from "react-router-dom";
import CompoSpa from "./ComboSpa/CompoSpa";
import LamSachVaCapNuoc from "./LamSachVaCapNuoc/LamSachVaCapNuoc";
import ChamSocDaSang from "./ChamSocDaSang/ChamSocDaSang";
import TreHoaNangCaoCam from "./TreHoaNangCaoCam/TreHoaNangCaoCam";
import NanMunVaLamSach from "./NanMunVaLamSach/NanMunVaLamSach";
import MenuSpa from "./MenuSpa/MenuSpa";
import QuanLy from "./QuanLy/QuanLy";
import { useEffect } from "react";

function ManifestHandler() {
  const location = useLocation();

  useEffect(() => {
    // Create or update manifest link
    let manifestLink = document.querySelector('link[rel="manifest"]');
    if (!manifestLink) {
      manifestLink = document.createElement("link");
      manifestLink.rel = "manifest";
      document.head.appendChild(manifestLink);
    }
    // Set manifest based on path
    manifestLink.href =
      location.pathname === "/quan-ly"
        ? "/manage.webmanifest"
        : "/site.webmanifest";
  }, [location.pathname]);

  return null; // This component renders nothing
}
function App() {
  return (
    <BrowserRouter>
      <ManifestHandler />
      <Routes>
        <Route path="/" element={<Layout content={<MainPage />} />} />
        <Route
          path="/chamSocDaCongNgheCao"
          element={<Layout content={<CompoSpa />} />}
        />
        <Route
          path="/chamSocDaCongNgheCao/lamSachVaCapNuoc"
          element={<Layout content={<LamSachVaCapNuoc />} />}
        />
        <Route
          path="/chamSocDaCongNgheCao/chamSocDaSang"
          element={<Layout content={<ChamSocDaSang />} />}
        />
        <Route
          path="/chamSocDaCongNgheCao/treHoaNangCaoCam"
          element={<Layout content={<TreHoaNangCaoCam />} />}
        />
        <Route
          path="/chamSocDaCongNgheCao/nanMunVaLamSach"
          element={<Layout content={<NanMunVaLamSach />} />}
        />
        <Route path="/Menu" element={<Layout content={<MenuSpa />} />} />
        <Route path="/quan-ly" element={<QuanLy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
