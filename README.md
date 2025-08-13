# Caido Material UI
[![npm version](https://img.shields.io/npm/v/caido-material-ui.svg)](https://www.npmjs.com/package/caido-material-ui)

Caido theme and components built on top of Material-UI and Allotment.

> **Note**: We recommend using Vue for new Caido plugins. This package is no longer actively maintained.


## Installation

```bash
pnpm add caido-material-ui
```

## Usage

```tsx
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { themeOptions, StyledSplitter, StyledBox } from "caido-material-ui";

export const App = () => {
  const theme = createTheme(themeOptions);

  return (
    <ThemeProvider theme={theme}>
      <StyledSplitter>
        <StyledBox className="p-2">Hello World</StyledBox>
        <StyledBox className="p-2">Hello World</StyledBox>
      </StyledSplitter>
    </ThemeProvider>
  );
};

```

## Contributing

Contributions are welcome! Please open an issue or submit a PR.
