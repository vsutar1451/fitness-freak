
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
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 10,
          mt: { xs: -4, md: -6 },
          px: { xs: 2, sm: 3 },
        }}
      >
        {/* Glassmorphism Floating Card */}
        <Box
          sx={{
            background: "rgba(20, 20, 20, 0.75)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            borderRadius: "20px",
            py: { xs: 4, md: 5 },
            px: { xs: 3, md: 6 },
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-around",
              alignItems: "center",
              gap: { xs: 4, sm: 2 },
              width: "100%",
            }}
          >
            {stats.map((item) => (
              <Box
                key={item.label}
                sx={{
                  textAlign: "center",
                  flex: 1, // Forces each item to take an equal share of width
                }}
              >
                {/* Stat Value */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 900,
                    fontSize: { xs: "2.25rem", sm: "2.75rem", md: "3.25rem" },
                    color: "#D4AF37",
                    lineHeight: 1,
                    mb: 1.5,
                    textShadow: "0 0 20px rgba(212, 175, 55, 0.25)",
                  }}
                >
                  {item.value}
                </Typography>

                {/* Stat Label */}
                <Typography
                  variant="caption"
                  sx={{
                    color: "#9CA3AF",
                    fontWeight: 700,
                    fontSize: { xs: "0.7rem", sm: "0.8rem" },
                    letterSpacing: { xs: 1.5, sm: 2 },
                    textTransform: "uppercase",
                    display: "block",
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </AnimatedSection>
  );
}

export default Stats;