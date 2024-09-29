import React from "react";
import { Allotment, AllotmentProps } from "allotment";

import "./StyledSplitter.css";

/**
 * StyledSplitter is a custom component built on top of Allotment.
 * It applies a consistent styling across Caido design.
 *
 * Allotment is a library that provides a customizable split view.
 * Example usage:
 * <StyledSplitter>
 *   <StyledBox>Left Panel</StyledBox>
 *   <StyledBox>Right Panel</StyledBox>
 * </StyledSplitter>
 */

interface StyledSplitterProps extends AllotmentProps {
  vertical?: boolean;
  children: React.ReactNode;
}

export const StyledSplitter: React.FC<StyledSplitterProps> = ({
  vertical = false,
  children,
  ...props
}) => {
  return (
    <Allotment vertical={vertical} separator={false} {...props}>
      {children}
    </Allotment>
  );
};
