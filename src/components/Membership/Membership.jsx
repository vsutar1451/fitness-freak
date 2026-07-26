import {
  Box,
  Button,
  Chip,
  Container,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import { CheckCircle } from "@mui/icons-material";

const plans = [
  {
    title: "Basic",
    price: "₹999",
    duration: "/month",
    features: [
      "Unlimited Gym Access",
      "Locker Facility",
      "Cardio Area",
      "Fitness Assessment",
    ],
    popular: false,
  },
  {
    title: "Pro",
    price: "₹1499",
    duration: "/month",
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Plan",
      "Strength Program",
      "Group Classes",
    ],
    popular: true,
  },
  {
    title: "Elite",
    price: "₹2499",
    duration: "/month",
    features: [
      "Everything in Pro",
      "Steam Bath",
      "Body Composition Analysis",
      "Priority Support",
      "Premium Coaching",
    ],
    popular: false,
  },
];

function Membership() {
  return (
    <Box sx={{ py: 12 }}>
      <Container maxWidth="lg">

        <Typography
          align="center"
          color="primary.main"
          sx={{
            fontWeight: 700,
            letterSpacing: 3,
          }}
        >
          MEMBERSHIP PLANS
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
          Invest In Your Fitness
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
          Choose a membership that matches your goals.
          Upgrade anytime as your fitness journey evolves.
        </Typography>

        <Grid container spacing={4}>

          {plans.map((plan) => (

            <Grid
              key={plan.title}
              size={{ xs: 12, md: 4 }}
            >

              <Paper
                elevation={0}
                sx={{
                  position: "relative",
                  p: 4,
                  borderRadius: 5,
                  bgcolor: "#111",
                  border: plan.popular
                    ? "2px solid #D4AF37"
                    : "1px solid rgba(255,255,255,.08)",

                  transform: plan.popular
                    ? "scale(1.05)"
                    : "scale(1)",

                  transition: ".35s",

                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow:
                      "0 25px 50px rgba(212,175,55,.15)",
                  },
                }}
              >

                {plan.popular && (
                  <Chip
                    label="MOST POPULAR"
                    color="warning"
                    sx={{
                      position: "absolute",
                      top: 20,
                      right: 20,
                      fontWeight: 700,
                    }}
                  />
                )}

                <Typography
                  variant="h5"
                  fontWeight={700}
                >
                  {plan.title}
                </Typography>

                <Typography
                  variant="h2"
                  color="primary.main"
                  fontWeight={800}
                  sx={{ mt: 3 }}
                >
                  {plan.price}
                </Typography>

                <Typography
                  color="text.secondary"
                  mb={4}
                >
                  {plan.duration}
                </Typography>

                {plan.features.map((feature) => (

                  <Box
                    key={feature}
                    sx={{
                      display: "flex",
                      gap: 1.5,
                      mb: 2,
                      alignItems: "center",
                    }}
                  >

                    <CheckCircle
                      sx={{
                        color: "primary.main",
                        fontSize: 20,
                      }}
                    />

                    <Typography>
                      {feature}
                    </Typography>

                  </Box>

                ))}

                <Button
                  fullWidth
                  variant={
                    plan.popular
                      ? "contained"
                      : "outlined"
                  }
                  color="primary"
                  sx={{
                    mt: 4,
                    py: 1.6,
                    borderRadius: "50px",
                    fontWeight: 700,
                  }}
                >
                  Join Now
                </Button>

              </Paper>

            </Grid>

          ))}

        </Grid>

      </Container>
    </Box>
  );
}

export default Membership;