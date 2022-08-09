import {
  AppBar,
  Box,
  FormControl,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useState, ChangeEvent } from "react";
import WelcomeMessage from "./WelcomeMessage";

const Navbar = () => {
  const [position, setPosition] = useState("Full-stack Developer");
  const onPositionChange = (
    event: ChangeEvent<{
      value: unknown;
    }>
  ) => setPosition(event.target.value as string);

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">My movies</Typography>
          <Box textAlign="center">
            <WelcomeMessage position={position} />
            <Box mt={1}>
              <FormControl>
                <Select value={position} onChange={onPositionChange}>
                  <MenuItem value="Full-stack Developer">
                    Full-stack Developer
                  </MenuItem>
                  <MenuItem value="Frontend Developer">
                    Frontend Developer
                  </MenuItem>
                  <MenuItem value="Backend Developer">
                    Backend Developer
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
