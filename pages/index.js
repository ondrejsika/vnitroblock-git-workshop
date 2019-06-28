import Hello from "../components/Hello";
import { Box, Button, Heading, Text, BaseStyles } from "@primer/components";

function Home() {
  return (
    <>
      <BaseStyles>
        <Box m={4}>
          <Heading mb={2}>Hello, world!</Heading>
          <p>This will get Primer text styles.</p>
          <Hello name="Zuzko" />
          <br />
          <a href="/about-me">About me</a>
        </Box>
      </BaseStyles>
    </>
  );
}

export default Home;
