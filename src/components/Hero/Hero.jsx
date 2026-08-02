import { Box, Button, Container, Typography } from "@mui/material";
import AnimatedSection from "../common/AnimatedSection";

function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPrograms = () => {
    document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection>
      <Box
        id="home"
        sx={{
          position: "relative",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFFFFF",
          overflow: "hidden",
          pt: 10,
          pb: 12,
          // Full-screen background image with dark linear gradient overlays
          backgroundImage: `
            linear-gradient(to top, #0A0A0A 0%, rgba(10, 10, 10, 0.75) 50%, rgba(0, 0, 0, 0.6) 100%),
            url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070')
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", zIndex: 2 }}>
          {/* Top Pill / Badge */}
          <Box
            sx={{
              display: "inline-block",
              px: 2.5,
              py: 0.75,
              mb: 3,
              borderRadius: "999px",
              background: "rgba(20, 20, 20, 0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(212, 175, 55, 0.3)",
              color: "#D4AF37",
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            The Pinnacle of Strength & Conditioning
          </Box>

          {/* Main Headline */}
          <Typography
            variant="h1"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: { xs: "2.75rem", sm: "4.5rem", md: "5.5rem" },
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              mb: 3,
            }}
          >
            UNLEASH YOUR INNER {" "}
            <Box
              component="span"
              sx={{
                background: "linear-gradient(90deg, #D4AF37 0%, #FFF3B0 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 30px rgba(212, 175, 55, 0.3)",
              }}
            >
              BEAST
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            variant="h6"
            sx={{
              color: "#D1D5DB",
              fontWeight: 300,
              fontSize: { xs: "1rem", sm: "1.2rem" },
              maxWidth: 680,
              mx: "auto",
              mb: 5,
              lineHeight: 1.6,
            }}
          >
            World-class equipment, elite master trainers, and an unbeatable
            community. Transform your physical potential in an environment built
            for extraordinary human performance.
          </Typography>

          {/* Call-to-Action Buttons */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={scrollToContact}
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 5,
                py: 1.75,
                borderRadius: "999px",
                backgroundColor: "#D4AF37",
                color: "#000000",
                fontWeight: 900,
                fontSize: "0.875rem",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                boxShadow: "0 10px 25px rgba(212, 175, 55, 0.25)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "#E5C158",
                  transform: "scale(1.05)",
                  boxShadow: "0 15px 35px rgba(212, 175, 55, 0.4)",
                },
              }}
            >
              Get Started Today
            </Button>

            <Button
              variant="outlined"
              onClick={scrollToPrograms}
              sx={{
                width: { xs: "100%", sm: "auto" },
                px: 5,
                py: 1.75,
                borderRadius: "999px",
                borderColor: "rgba(255, 255, 255, 0.25)",
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "0.875rem",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                background: "rgba(20, 20, 20, 0.5)",
                backdropFilter: "blur(12px)",
                transition: "all 0.3s ease",
                "&:hover": {
                  borderColor: "#FFFFFF",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  transform: "scale(1.03)",
                },
              }}
            >
              Explore Programs
            </Button>
          </Box>
        </Container>
      </Box>
    </AnimatedSection>
  );
}

export default Hero;