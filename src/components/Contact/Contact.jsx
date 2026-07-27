import { useState } from "react";

import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import {
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from "@mui/icons-material";

import AnimatedSection from "../common/AnimatedSection";

const contactInfo = [
  {
    icon: <LocationOn />,
    title: "Address",
    value: (
      <Typography
        component="a"
        href="https://www.google.com/maps/dir//1st+FLOOR,+Fitness+Freak+(Wadgoansheri),+ICCHAPURTI+HOUSING+SOCIETY,+SNO-48%2F1,+Ganesh+Nagar,+Wadgaon+Sheri,+Pune,+Maharashtra+411014/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x3bc2c129a4caf2dd:0x1b62e0a2e8345395?sa=X&ved=1t:57443&ictx=111"
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          textDecoration: "none",
          lineHeight: 1.7,
          color: "primary.main",
          transition: ".3s",

          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        1st FLOOR, ICCHAPURTI HOUSING SOCIETY,
        <br />
        SNO-48/1, Ganesh Nagar,
        <br />
        Wadgaon Sheri,
        <br />
        Pune, Maharashtra 411014
      </Typography>
    ),
  },
  {
    icon: <Phone />,
    title: "Phone",
    value: (
      <Typography
        component="a"
        href="tel:+919876543210"
        sx={{
          textDecoration: "none",
          color: "primary.main",

          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        +91 98765 43210
      </Typography>
    ),
  },
  {
    icon: <Email />,
    title: "Email",
    value: (
      <Typography
        component="a"
        href="mailto:info@fitnessfreak.com"
        sx={{
          textDecoration: "none",
          color: "primary.main",

          "&:hover": {
            textDecoration: "underline",
          },
        }}
      >
        info@fitnessfreak.com
      </Typography>
    ),
  },
  {
    icon: <AccessTime />,
    title: "Working Hours",
    value: (
      <Typography
        component="a"
        sx={{
          textDecoration: "none",
          color: "primary.main"
        }}
      >
        Mon - Sat : 6:00 AM - 10:00 PM
      </Typography>
    ),
  },
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Mobile Number is required";
    } else if (!/^[6-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit mobile number";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  setLoading(true);

  try {
    const response = await fetch("http://127.0.0.1:8000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    alert(data.message);

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    alert("Something went wrong.");
  } finally {
    setLoading(false);
  }
};

  return (
    <AnimatedSection>
  <Box
    id="contact"
    sx={{
      py: 12,
      bgcolor: "#111",
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
        CONTACT US
      </Typography>

      <Typography
        variant="h3"
        align="center"
        sx={{
          mt: 2,
          mb: 2,
          fontWeight: 800,
        }}
      >
        Let's Start Your Fitness Journey
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
        Have questions about memberships or training?
        Fill out the form and our team will get back to you shortly.
      </Typography>

      <Grid container spacing={5}>
        {/* Left Side */}

        <Grid size={{ xs: 12, md: 5 }}>
          <Stack spacing={3}>
            {contactInfo.map((item) => (
              <Paper
                key={item.title}
                elevation={0}
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  p: 3,
                  bgcolor: "#1A1A1A",
                  borderRadius: 4,
                  border: "1px solid rgba(255,255,255,.08)",
                  transition: ".3s",

                  "&:hover": {
                    borderColor: "primary.main",
                    transform: "translateY(-8px)",
                    boxShadow:
                      "0 20px 45px rgba(212,175,55,.18)",
                  },
                }}
              >
                <Box
                  sx={{
                    width: 55,
                    height: 55,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bgcolor: "primary.main",
                    borderRadius: "50%",
                    color: "#000",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>

                <Box>
                  <Typography fontWeight={700}>
                    {item.title}
                  </Typography>

                  {typeof item.value === "string" ? (
                    <Typography color="text.secondary">
                      {item.value}
                    </Typography>
                  ) : (
                    item.value
                  )}
                </Box>
              </Paper>
            ))}
          </Stack>
        </Grid>

        {/* Right Side */}

        <Grid size={{ xs: 12, md: 7 }}>
          <Paper
            component="form"
            onSubmit={handleSubmit}
            elevation={0}
            sx={{
              p: 5,
              bgcolor: "#1A1A1A",
              borderRadius: 5,
              border: "1px solid rgba(255,255,255,.08)",
            }}
          >
            <Stack spacing={3}>
              <TextField
                name="name"
                label="Full Name"
                fullWidth
                required
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />

              <TextField
                name="email"
                label="Email Address"
                type="email"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />

              <TextField
                name="phone"
                label="Phone Number"
                fullWidth
                required
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />

              <TextField
                name="message"
                label="Message"
                multiline
                rows={5}
                fullWidth
                required
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />

<Button
  type="submit"
  variant="contained"
  color="primary"
  size="large"
  disabled={loading}
  sx={{
    alignSelf: "center",
    px: 5,
    py: 1.5,
    borderRadius: "50px",
    fontWeight: 700,
    transition: ".35s",

    "&:hover": {
      transform: "translateY(-4px) scale(1.03)",
      boxShadow: "0 15px 35px rgba(212,175,55,.30)",
    },
  }}
>
  {loading ? "Sending..." : "Send Message"}
</Button>
            </Stack>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
</AnimatedSection>
);
}

export default Contact;