import { withNavRoutes } from "@/constant/routes";
import MaintenancePage from "@/pages/error/MaintenancePage";
import MissingPage from "@/pages/error/MissingPage";
import ServerErrorPage from "@/pages/error/ServerErrorPage";
import PageContainer from "@/pages/section/PageContainer";
import { Route, Routes } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      {withNavRoutes.map(({ path, element }, i) => (
        <Route
          key={path}
          path={path}
          element={<PageContainer activeNavIndex={i}>{element}</PageContainer>}
        />
      ))}

      <Route path="*" element={<MissingPage />} />
      <Route path="/server-error" element={<ServerErrorPage />} />
      <Route path="/maintenance" element={<MaintenancePage />} />
    </Routes>
  );
};

export default Routing;
