import { ThemeProvider, createTheme } from "@mui/material/styles";
import React, { ReactNode } from "react";
import Header from "../../Pages/Shared/Header/Header";
import Footer from "../../Pages/Shared/Footer/Footer";
import { CssBaseline, Theme } from "@mui/material";

const PageWrapper = ({ children, theme }: { children: ReactNode, theme: Theme }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      {children}
      <Footer />
    </ThemeProvider>
  );
};

export default PageWrapper;
