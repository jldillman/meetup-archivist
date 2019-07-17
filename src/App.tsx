import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import MainLayout from "./layout/MainLayout";
import { createMuiTheme } from "@material-ui/core";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";

Amplify.configure(aws_exports);

export const theme = () =>
  createMuiTheme({
    palette: {
      type: "light",
    },
  });

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme()}>
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
