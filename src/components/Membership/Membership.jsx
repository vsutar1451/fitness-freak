import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { FaCheckCircle } from "react-icons/fa";
import AnimatedSection from "../common/AnimatedSection";

const plans = [
  {
    title: "Basic",
    price: "₹999",
    period: "/month",
    featured: false,
    features: [
      "Unlimited Gym Access",
      "Locker Facility",
      "Cardio Area",
      "Fitness Assessment",
    ],
    buttonText: "Join Now",
  },
  {
    title: "Pro",
    price: "₹1499",
    period: "/month",
    featured: true,
    badge: "MOST POPULAR",
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Plan",
      "Strength Program",
      "Group Classes",
    ],
    buttonText: "Join Now",
  },
  {
    title: "Elite",
    price: "₹2499",
    period: "/month",
    featured: false,
    features: [
      "Everything in Pro",
      "Steam Bath",
      "Body Composition Analysis",
      "Priority Support",
      "Premium Coaching",
    ],
    buttonText: "Join Now",
  },
];

function Membership() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatedSection>
      <Box
        id="membership"
        sx={{
          py: { xs: 8, md: 14 },
          background: "linear-gradient(180deg, #121212 0%, #0A0A0A 100%)",
          position: "relative",
        }}
      >
        <Container maxWidth="lg">
          {/* Tagline */}
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
            MEMBERSHIP PLANS
          </Typography>

          {/* Title */}
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
            INVEST IN YOUR{" "}
            <Box component="span" sx={{ color: "#D4AF37" }}>
              FITNESS
            </Box>
          </Typography>

          {/* Subtitle */}
          <Typography
            align="center"
            sx={{
              maxWidth: 620,
              mx: "auto",
              mb: { xs: 6, md: 10 },
              color: "#9CA3AF",
              fontWeight: 300,
              fontSize: { xs: "0.95rem", sm: "1.1rem" },
              lineHeight: 1.6,
            }}
          >
            Choose a membership that matches your goals. Upgrade anytime as your fitness journey evolves.
          </Typography>

          {/* Pricing Grid */}
          <Grid container spacing={4} alignItems="center" justifyContent="center">
            {plans.map((plan, index) => (
              <Grid key={plan.title} size={{ xs: 12, md: 4 }}>
                <AnimatedSection delay={index * 0.15}>
                  <Paper
                    elevation={0}
                    sx={{
                      p: { xs: 4, sm: 5 },
                      borderRadius: "24px",
                      background: plan.featured
                        ? "linear-gradient(180deg, rgba(30,30,30,0.85) 0%, rgba(15,15,15,0.95) 100%)"
                        : "rgba(20, 20, 20, 0.65)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: plan.featured
                        ? "2px solid #D4AF37"
                        : "1px solid rgba(255, 255, 255, 0.08)",
                      position: "relative",
                      transform: plan.featured
                        ? { xs: "none", md: "scale(1.05)" }
                        : "none",
                      boxShadow: plan.featured
                        ? "0 20px 50px rgba(212, 175, 55, 0.15)"
                        : "none",
                      transition: "all 0.4s ease",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-between",
                      height: "100%",

                      "&:hover": {
                        transform: plan.featured
                          ? { xs: "translateY(-6px)", md: "scale(1.07) translateY(-6px)" }
                          : "translateY(-6px)",
                        borderColor: plan.featured
                          ? "#E5C158"
                          : "rgba(212, 175, 55, 0.5)",
                        boxShadow: "0 20px 40px -10px rgba(212, 175, 55, 0.2)",
                      },
                    }}
                  >
                    {/* Badge for Featured Plan */}
                    {plan.badge && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: -16,
                          left: "50%",
                          transform: "translateX(-50%)",
                          backgroundColor: "#D4AF37",
                          color: "#000000",
                          fontWeight: 900,
                          fontSize: "0.7rem",
                          letterSpacing: 1.5,
                          textTransform: "uppercase",
                          px: 2.5,
                          py: 0.6,
                          borderRadius: "999px",
                          boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
                        }}
                      >
                        {plan.badge}
                      </Box>
                    )}

                    <Box>
                      {/* Plan Title */}
                      <Typography
                        variant="h5"
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          mb: 2,
                          fontSize: "1.35rem",
                        }}
                      >
                        {plan.title}
                      </Typography>

                      {/* Price Display */}
                      <Box sx={{ display: "flex", alignItems: "baseline", mb: 4 }}>
                        <Typography
                          variant="h2"
                          sx={{
                            fontFamily: "'Montserrat', sans-serif",
                            fontWeight: 900,
                            color: "#FFFFFF",
                            fontSize: { xs: "2.75rem", sm: "3.25rem" },
                            lineHeight: 1,
                          }}
                        >
                          {plan.price}
                        </Typography>
                        <Typography
                          sx={{
                            color: "#9CA3AF",
                            fontSize: "0.9rem",
                            fontWeight: 400,
                            ml: 0.5,
                          }}
                        >
                          {plan.period}
                        </Typography>
                      </Box>

                      {/* Feature List */}
                      <Box
                        component="ul"
                        sx={{
                          p: 0,
                          m: 0,
                          listStyle: "none",
                          display: "flex",
                          flexDirection: "column",
                          gap: 2,
                          mb: 5,
                        }}
                      >
                        {plan.features.map((feature) => (
                          <Box
                            component="li"
                            key={feature}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.5,
                            }}
                          >
                            <Box
                              component="span"
                              sx={{
                                color: "#D4AF37",
                                display: "flex",
                                alignItems: "center",
                                fontSize: "1rem",
                              }}
                            >
                              <FaCheckCircle />
                            </Box>
                            <Typography
                              sx={{
                                color: "#D1D5DB",
                                fontSize: "0.95rem",
                                fontWeight: 400,
                              }}
                            >
                              {feature}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>

                    {/* CTA Button */}
                    <Button
                      variant={plan.featured ? "contained" : "outlined"}
                      onClick={scrollToContact}
                      fullWidth
                      sx={{
                        py: 1.6,
                        borderRadius: "999px",
                        backgroundColor: plan.featured ? "#D4AF37" : "transparent",
                        color: plan.featured ? "#000000" : "#FFFFFF",
                        borderColor: plan.featured
                          ? "transparent"
                          : "rgba(255, 255, 255, 0.2)",
                        fontWeight: 800,
                        fontSize: "0.85rem",
                        letterSpacing: 1.5,
                        textTransform: "uppercase",
                        transition: "all 0.3s ease",

                        "&:hover": {
                          backgroundColor: plan.featured
                            ? "#E5C158"
                            : "rgba(255, 255, 255, 0.1)",
                          borderColor: plan.featured ? "transparent" : "#FFFFFF",
                          transform: "scale(1.02)",
                          boxShadow: plan.featured
                            ? "0 10px 25px rgba(212, 175, 55, 0.35)"
                            : "none",
                        },
                      }}
                    >
                      {plan.buttonText}
                    </Button>
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

export default Membership;