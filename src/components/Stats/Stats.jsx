import { Box, Container, Typography } from "@mui/material";
import AnimatedSection from "../common/AnimatedSection";

const stats = [
  {
    value: "1200+",
    label: "Members",
  },
  {
    value: "15",
    label: "Certified Trainers",
  },
  {
    value: "8+",
    label: "Years Experience",
  },
];

function Stats() {
  return (
    <AnimatedSection>
    <Box
      sx={{
        pt: 5,
        pb: 8
      }}
    >
      <Container maxWidth="lg">

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            textAlign: "center",
            flexWrap: "wrap",
            gap: 5,
          }}
        >
          {stats.map((item) => (
            <Box key={item.label}>

              <Typography
                variant="h2"
                color="primary"
                fontWeight={700}
              >
                {item.value}
              </Typography>

              <Typography
                color="text.secondary"
                sx={{
                  mt: 1,
                }}
              >
                {item.label}
              </Typography>

            </Box>
          ))}
        </Box>

      </Container>
    </Box>
    </AnimatedSection>
  );
}

export default Stats;