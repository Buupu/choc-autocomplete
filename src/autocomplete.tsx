import React from "react";
import { __DEV__ } from "@chakra-ui/utils";

import { AutoCompleteProvider } from "./autocomplete-context";
import { UseAutoCompleteProps, useAutoComplete } from "./use-autocomplete";
import { Box, forwardRef, Popover } from "@chakra-ui/react";

export interface AutoCompleteProps extends UseAutoCompleteProps {
  children: React.ReactNode;
}

export const AutoComplete = forwardRef<AutoCompleteProps, "div">(
  (props, ref) => {
    const context = useAutoComplete(props);
    const { children, isOpen, onClose, onOpen } = context;

    return (
      <AutoCompleteProvider value={context}>
        <Popover
          isLazy
          isOpen={isOpen}
          onClose={onClose}
          onOpen={onOpen}
          autoFocus={false}
          placement="bottom"
          closeOnBlur={true}
        >
          <Box
            sx={{
              ".chakra-popover__popper": {
                position: "unset !important",
              },
            }}
            ref={ref}
          >
            {children}
          </Box>
        </Popover>
      </AutoCompleteProvider>
    );
  }
);

if (__DEV__) {
  AutoComplete.displayName = "AutoComplete";
}