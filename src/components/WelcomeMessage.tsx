import { Box } from "@material-ui/core";

interface WelcomeMessageProps {
  position: string;
  country?: string;
}

const WelcomeMessage = ({
  position,
  country = "Vietnam",
}: WelcomeMessageProps) => {
  return (
    <Box mb={1}>
      Welcome a {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;
