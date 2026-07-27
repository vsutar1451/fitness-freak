import {
  Box,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import {
  FaDumbbell,
  FaUserTie,
  FaAppleAlt,
  FaClock,
} from "react-icons/fa";

import AnimatedSection from "../common/AnimatedSection";

const features = [
  {
    icon: <FaDumbbell size={42} />,
    title: "Modern Equipment",
    desc: "Train using premium strength and cardio machines.",
  },
  {
    icon: <FaUserTie size={42} />,
    title: "Certified Trainers",
    desc: "Experienced coaches to guide every workout.",
  },
  {
    icon: <FaAppleAlt size={42} />,
    title: "Diet Plans",
    desc: "Personalized nutrition plans for your goals.",
  },
  {
    icon: <FaClock size={42} />,
    title: "Flexible Timings",
    desc: "Workout whenever it suits your schedule.",
  },
];

function WhyChooseUs() {
  return (
    <AnimatedSection>
    <Box
      id="why-us"
      sx={{
        py: 12,
      }}
    >
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="primary.main"
          sx={{
            letterSpacing: 3,
            fontWeight: 700,
          }}
        >
          WHY CHOOSE US
        </Typography>

        <Typography
          variant="h3"
          align="center"
          sx={{
            fontWeight: 800,
            mt: 2,
            mb: 2,
          }}
        >
          WHY FITNESS FREAK?
        </Typography>

        <Typography
          align="center"
          color="text.secondary"
          sx={{
            maxWidth: 700,
            mx: "auto",
            mb: 8,
          }}
        >
          We combine expert coaching, cutting-edge
          equipment, and a motivating environment
          to help you become the strongest version
          of yourself.
        </Typography>

        <Grid container spacing={4}>

          {features.map((item, index) => (

        <Grid
            key={item.title}
            size={{ xs: 12, sm: 6 }}
        >

            <AnimatedSection delay={index * 0.15}>

              <Paper
                elevation={0}
                sx={{
                  p: 5,
                  height: "100%",
                  bgcolor: "#111",
                  border: "1px solid rgba(255,255,255,.08)",
                  borderRadius: 5,
                  transition: ".35s",

                 "&:hover": {
                    transform: "translateY(-10px)",
                    borderColor: "primary.main",
                    boxShadow:
                    "0 25px 60px rgba(212,175,55,.18)",
                },
                }}
              >

                <Box
                  sx={{
                    color: "primary.main",
                    mb: 3,
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  mb={2}
                >
                  {item.title}
                </Typography>

                <Typography
                  color="text.secondary"
                >
                  {item.desc}
                </Typography>

              </Paper>
            </AnimatedSection>
            </Grid>

          ))}
          

        </Grid>

      </Container>
    </Box>
    </AnimatedSection>
  );
}

export default WhyChooseUs;