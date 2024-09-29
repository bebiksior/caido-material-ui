import { Box, BoxProps } from "@mui/material";
import { styled } from "@mui/system";

/**
 * StyledBox is a custom styled component built on top of Material-UI's Box.
 * It applies a consistent styling across Caido design.
 */
const StyledBox = styled(Box)<BoxProps>(({ theme }) => ({
  background: "var(--c-bg-subtle)",
  color: "var(--p-card-color)",
  boxShadow: "var(--p-card-shadow)",
  borderRadius: "var(--p-card-border-radius)",
  height: "100%",
  width: "100%",
})) as typeof Box;

export { StyledBox };