import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import AnimatedSection from "../common/AnimatedSection";

const programs = [
  {
    title: "Strength & Performance",
    image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1000",
    tags: ["Weight Training", "Strength", "Bodybuilding", "CrossFit", "Anaerobics"],
    desc: "Heavy compound loading structured around progressive overload protocols.",
  },
  {
    title: "Cardio & Conditioning",
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?q=80&w=1000",
    tags: ["Cardio", "HIIT", "Aerobics", "Kickboxing"],
    desc: "High-intensity metabolic intervals designed to maximize stamina and endurance.",
  },
  {
    title: "Group Fitness",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1000",
    tags: ["Yoga", "Zumba", "Dance Fitness", "Group Classes"],
    desc: "High-energy collective sessions led by elite master instructors.",
  },
  {
    title: "Coaching & Wellness",
    image: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000",
    tags: ["Personal Training", "Nutrition", "Diet Planning", "BMI Analysis"],
    desc: "Comprehensive 1-on-1 athletic coaching and custom nutritional roadmaps.",
  },
];

function Programs() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection>
      <Box
        id="programs"
        sx={{
          py: { xs: 8, md: 14 },
          background: "linear-gradient(180deg, #121212 0%, #0A0A0A 100%)",
        }}
      >
        <Container maxWidth="lg">
          {/* Section Sub-Tag */}
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
            PROGRAMS WE OFFER
          </Typography>

          {/* Section Main Title */}
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
              color: "#FFFFFF",
              fontSize: { xs: "2.25rem", sm: "3rem", md: "3.5rem" },
              letterSpacing: "-0.01em",
              textTransform: "uppercase",
              mb: 2,
            }}
          >
            TRAIN SMARTER.{" "}
            <Box component="span" sx={{ color: "#D4AF37" }}>
              ACHIEVE MORE.
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
            Everything you need under one roof, from absolute beginners to professional athletes.
          </Typography>

          {/* Grid Layout */}
          <Grid container spacing={4}>
            {programs.map((item, index) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <AnimatedSection delay={index * 0.15}>
                  <Paper
                    elevation={0}
                    sx={{
                      borderRadius: "24px",
                      overflow: "hidden",
                      background: "#141414",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                      cursor: "pointer",
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                      position: "relative",

                      "&:hover": {
                        transform: "translateY(-10px)",
                        borderColor: "rgba(212, 175, 55, 0.6)",
                        boxShadow: "0 20px 40px -15px rgba(212, 175, 55, 0.3)",
                        "& .card-bg-img": {
                          transform: "scale(1.1)",
                        },
                      },
                    }}
                  >
                    {/* Top Image Banner with Dark Gradient Fade */}
                    <Box sx={{ position: "relative", height: 220, overflow: "hidden" }}>
                      <Box
                        className="card-bg-img"
                        component="img"
                        src={item.image}
                        alt={item.title}
                        sx={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          transition: "transform 0.6s ease",
                        }}
                      />
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(to top, #141414 0%, rgba(20, 20, 20, 0.4) 60%, transparent 100%)",
                        }}
                      />
                    </Box>

                    {/* Content Section */}
                    <Box sx={{ p: { xs: 3, sm: 4 }, flexGrow: 1, display: "flex", flexDirection: "column" }}>
                      {/* Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          mb: 1.5,
                          fontSize: { xs: "1.3rem", sm: "1.5rem" },
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Description */}
                      <Typography
                        sx={{
                          color: "#9CA3AF",
                          fontWeight: 300,
                          fontSize: "0.95rem",
                          mb: 3,
                          lineHeight: 1.6,
                        }}
                      >
                        {item.desc}
                      </Typography>

                      {/* Sub-program Tags */}
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 4, mt: "auto" }}>
                        {item.tags.map((tag) => (
                          <Box
                            key={tag}
                            sx={{
                              px: 1.75,
                              py: 0.6,
                              borderRadius: "999px",
                              backgroundColor: "rgba(255, 255, 255, 0.05)",
                              border: "1px solid rgba(255, 255, 255, 0.1)",
                              color: "#D1D5DB",
                              fontSize: "0.75rem",
                              fontWeight: 600,
                            }}
                          >
                            {tag}
                          </Box>
                        ))}
                      </Box>

                      {/* CTA Action */}
                      <Button
                        onClick={scrollToContact}
                        sx={{
                          alignSelf: "flex-start",
                          color: "#D4AF37",
                          fontWeight: 800,
                          fontSize: "0.85rem",
                          letterSpacing: 1,
                          textTransform: "uppercase",
                          p: 0,
                          "&:hover": {
                            backgroundColor: "transparent",
                            color: "#FFFFFF",
                          },
                        }}
                      >
                        Join Program &rarr;
                      </Button>
                    </Box>
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

export default Programs;