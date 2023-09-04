import "./Home.scss";
import { createTheme } from "@mui/material/styles";
import MainTitle from "./MainTitle/MainTitle";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import MainSection from "./MainSection/MainSection";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export function Home() {
  return (
    <PageWrapper theme={lightTheme}>
      <main>
        <MainTitle />
        <MainSection />
      </main>
    </PageWrapper>
  );
}

export default Home;
