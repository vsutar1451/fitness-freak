import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import {
  FaDumbbell,
  FaUserTie,
  FaAppleAlt,
  FaClock,
  FaHeartbeat,
  FaTrophy,
} from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const features = [
  {
    icon: <FaDumbbell size={26} />,
    title: "Modern Equipment",
    desc: "Train using premium strength and cardio machines engineered for peak activation.",
  },
  {
    icon: <FaUserTie size={26} />,
    title: "Certified Trainers",
    desc: "Experienced master coaches dedicated to guiding every workout safely.",
  },
  {
    icon: <FaAppleAlt size={26} />,
    title: "Diet & Nutrition",
    desc: "Personalized nutrition and macronutrient plans built around your fitness goals.",
  },
  {
    icon: <FaClock size={26} />,
    title: "Flexible Timings",
    desc: "24/7 VIP keycard access so you can crush your workouts on your schedule.",
  },
  {
    icon: <FaHeartbeat size={26} />,
    title: "Cardio Zone",
    desc: "Dedicated high-intensity interval conditioning area with live tracking.",
  },
  {
    icon: <FaTrophy size={26} />,
    title: "Pro Community",
    desc: "Surround yourself with driven athletes pushing each other to greatness.",
  },
];

function WhyChooseUs() {
  return (
    <AnimatedSection>
      <Box
        id="why-us"
        sx={{
          py: { xs: 8, md: 14 },
          position: "relative",
          background: "linear-gradient(180deg, #0A0A0A 0%, #121212 100%)",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Header Tag */}
          <Typography
            align="center"
            sx={{
              color: "#D4AF37",
              letterSpacing: 3,
              fontWeight: 800,
              fontSize: "0.85rem",
              textTransform: "uppercase",
              mb: 1,
            }}
          >
            WHY CHOOSE US
          </Typography>

          {/* Section Title */}
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              color: "#FFFFFF",
              fontSize: { xs: "2rem", sm: "2.75rem", md: "3.25rem" },
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            WHY{" "}
            <Box component="span" sx={{ color: "#D4AF37" }}>
              FITNESS FREAK?
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{
              maxWidth: 620,
              mx: "auto",
              mb: 8,
              color: "#9CA3AF",
              fontWeight: 300,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            We combine expert coaching, cutting-edge equipment, and an unyielding
            environment to forge the strongest version of yourself.
          </Typography>

          {/* 3x2 Grid Container */}
          <Grid container spacing={3.5}>
            {features.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <AnimatedSection delay={index * 0.1}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 3.5, sm: 4 },
                      height: "100%",
                      borderRadius: "20px",
                      background: "rgba(20, 20, 20, 0.65)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                      position: "relative",

                      // Clean Hover Elevation
                      "&:hover": {
                        transform: "translateY(-8px)",
                        borderColor: "rgba(212, 175, 55, 0.5)",
                        boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.25)",
                        "& .icon-pod": {
                          backgroundColor: "#D4AF37",
                          color: "#000000",
                          boxShadow: "0 0 25px rgba(212, 175, 55, 0.5)",
                        },
                      },
                    }}
                  >
                    {/* Glowing Icon Pod */}
                    <Box
                      className="icon-pod"
                      sx={{
                        width: 52,
                        height: 52,
                        borderRadius: "14px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#D4AF37",
                        backgroundColor: "rgba(212, 175, 55, 0.12)",
                        border: "1px solid rgba(212, 175, 55, 0.25)",
                        mb: 2.5,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Card Title */}
                    <Typography
                      variant="h6"
                      sx={{
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        mb: 1,
                        fontSize: { xs: "1.15rem", sm: "1.25rem" },
                      }}
                    >
                      {item.title}
                    </Typography>

                    {/* Card Description */}
                    <Typography
                      sx={{
                        color: "#9CA3AF",
                        fontWeight: 300,
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                      }}
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