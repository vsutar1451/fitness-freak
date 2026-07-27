import { Box, Button, Container, Grid, Typography } from "@mui/material";
import AnimatedSection from "../common/AnimatedSection";
function Hero() {
    return (
        <AnimatedSection>
    <Box
     id="home"
      sx={{
        minHeight: "82vh",
        display: "flex",
        alignItems: "center",
        scrollMarginTop: "90px",
        pb: 8
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">

          {/* Left Side */}

          <Grid size={{ xs: 12, md: 7 }}>

            <Typography
              color="primary"
              fontWeight={700}
              letterSpacing={2}
              gutterBottom
            >
              MADNESS FOR FITNESS
            </Typography>
            <Typography
              variant="h2"
              fontWeight={800}
              sx={{
                fontWeight: 800,
                lineHeight: 0.92,
                mb: 3,
              }}
            >
              UNLEASH
              <br />
              YOUR INNER
              <br />
              <Box
              component="span"
              sx={{
                color: "primary.main",
              }}
            >
              BEAST
            </Box>
            </Typography>

            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                mb: 4,
                maxWidth: 430,
              }}
            >
              Build strength, lose fat, and unlock your
              best physique with expert coaching,
              world-class equipment, and personalized
              fitness programs.
            </Typography>

            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 4,
                mb: 6,
                flexWrap: "wrap",
              }}
            >

              <Button
              variant="contained"
              color="primary"
              size="large"
              sx={{
                px: 5,
                py: 2.3,
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "1rem",
                minWidth: 180,
                transition: ".35s",

                "&:hover": {
                    transform: "translateY(-4px) scale(1.03)",
                    boxShadow:
                        "0 15px 35px rgba(212,175,55,.30)",
                },
              }}
              onClick={() =>
                  document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Join Today
            </Button>

              <Button
              variant="outlined"
              color="primary"
              size="large"
              onClick={() =>
                  document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
              }
              sx={{
                px: 5,
                py: 2,
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "1rem",
                minWidth: 180,

                "&:hover": {
                    transform: "translateY(-4px) scale(1.03)",
                    boxShadow:
                        "0 15px 35px rgba(212,175,55,.30)",
                },
              }}
            >
              Free Trial
            </Button>

            </Box>

          </Grid>

          {/* Right Side */}

          <Grid size={{ xs: 12, md: 5 }}>

            <Box
            sx={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >

            <Box
              sx={{
                position: "absolute",
                width: 420,
                height: 420,
                borderRadius: "50%",
                background: "radial-gradient(circle,#D4AF37 0%,transparent 70%)",
                opacity: 0.25,
                filter: "blur(70px)",
                zIndex: 0,
              }}
            />

            <Box
              component="img"
              src="/images/hero-gym.png"
              alt="Fitness Freak Gym"
              sx={{
                  width: "100%",
                  height: 500,
                  objectFit: "cover",
                  borderRadius: 6,
                  boxShadow: "0 30px 60px rgba(0,0,0,.45)",
              }}
          />

          </Box>

          </Grid>

        </Grid>
      </Container>
    </Box>
    </AnimatedSection>
  );
}

export default Hero;