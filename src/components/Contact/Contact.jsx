import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Container,
  Grid,
  Paper,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import AnimatedSection from "../common/AnimatedSection";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

const contactDetails = [
  {
    icon: <FaMapMarkerAlt size={20} />,
    title: "Address",
    desc: "1st FLOOR, ICCHAPURTI HOUSING SOCIETY, SNO-48/1, Ganesh Nagar, Wadgaon Sheri, Pune, Maharashtra 411014",
  },
  {
    icon: <FaPhoneAlt size={18} />,
    title: "Phone",
    desc: "+91 98765 43210",
  },
  {
    icon: <FaEnvelope size={18} />,
    title: "Email",
    desc: "info@fitnessfreak.com",
  },
  {
    icon: <FaClock size={18} />,
    title: "Working Hours",
    desc: "Mon – Sat : 6:00 AM – 10:00 PM",
  },
];

function Contact() {
  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // UI state for loading & alert popups
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  // Update form values dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Submit Handler using EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.phone || !formData.message) {
      setStatus({
        open: true,
        message: "Please fill out all required fields (*).",
        severity: "error",
      });
      return;
    }

    setLoading(true);

    emailjs
      .send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          title: "New Fitness Freak Contact Form Submission",
          name: formData.name,
          email: formData.email,
          message: `Phone: ${formData.phone} | Message: ${formData.message}`,
          time: new Date().toLocaleTimeString(),
        },
        EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          setStatus({
            open: true,
            message: "Message sent successfully! We will contact you soon.",
            severity: "success",
          });
          // Reset fields after successful submit
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          setStatus({
            open: true,
            message: "Failed to send message. Please try again later.",
            severity: "error",
          });
        }
      );
  };

  return (
    <AnimatedSection>
      <Box
        id="contact"
        sx={{
          py: { xs: 8, md: 14 },
          background: "linear-gradient(180deg, #0A0A0A 0%, #121212 100%)",
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
            CONTACT US
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
            LET'S START YOUR{" "}
            <Box component="span" sx={{ color: "#D4AF37" }}>
              FITNESS JOURNEY
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
            Have questions about memberships or training? Fill out the form and our team will get back to you shortly.
          </Typography>

          <Grid container spacing={4} alignItems="stretch">
            {/* LEFT COLUMN: Contact Information Cards */}
            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2.5,
                  height: "100%",
                }}
              >
                {contactDetails.map((item) => (
                  <Paper
                    key={item.title}
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: "18px",
                      background: "rgba(20, 20, 20, 0.65)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 2.5,
                      transition: "all 0.3s ease",
                      "&:hover": {
                        borderColor: "rgba(212, 175, 55, 0.5)",
                        transform: "translateX(6px)",
                      },
                    }}
                  >
                    {/* Glowing Icon Container */}
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        borderRadius: "12px",
                        backgroundColor: "rgba(212, 175, 55, 0.15)",
                        border: "1px solid rgba(212, 175, 55, 0.3)",
                        color: "#D4AF37",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {item.icon}
                    </Box>

                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontFamily: "'Montserrat', sans-serif",
                          fontWeight: 800,
                          color: "#FFFFFF",
                          fontSize: "1rem",
                          mb: 0.5,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#9CA3AF",
                          fontWeight: 300,
                          fontSize: "0.875rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </Typography>
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Grid>

            {/* RIGHT COLUMN: Functional Contact Form */}
            <Grid size={{ xs: 12, md: 7 }}>
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3.5, sm: 5 },
                  borderRadius: "24px",
                  background: "rgba(20, 20, 20, 0.65)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  height: "100%",
                }}
              >
                <Box
                  component="form"
                  onSubmit={handleSubmit}
                  noValidate
                  autoComplete="off"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 3,
                  }}
                >
                  {/* Full Name */}
                  <TextField
                    label="Full Name *"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      sx: { color: "#9CA3AF", "&.Mui-focused": { color: "#D4AF37" } },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                        borderRadius: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                        "&:hover fieldset": { borderColor: "rgba(212, 175, 55, 0.4)" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D4AF37",
                          boxShadow: "0 0 15px rgba(212, 175, 55, 0.2)",
                        },
                      },
                    }}
                  />

                  {/* Email Address */}
                  <TextField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      sx: { color: "#9CA3AF", "&.Mui-focused": { color: "#D4AF37" } },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                        borderRadius: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                        "&:hover fieldset": { borderColor: "rgba(212, 175, 55, 0.4)" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D4AF37",
                          boxShadow: "0 0 15px rgba(212, 175, 55, 0.2)",
                        },
                      },
                    }}
                  />

                  {/* Phone Number */}
                  <TextField
                    label="Phone Number *"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      sx: { color: "#9CA3AF", "&.Mui-focused": { color: "#D4AF37" } },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                        borderRadius: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                        "&:hover fieldset": { borderColor: "rgba(212, 175, 55, 0.4)" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D4AF37",
                          boxShadow: "0 0 15px rgba(212, 175, 55, 0.2)",
                        },
                      },
                    }}
                  />

                  {/* Message Field */}
                  <TextField
                    label="Message *"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    InputLabelProps={{
                      sx: { color: "#9CA3AF", "&.Mui-focused": { color: "#D4AF37" } },
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        color: "#FFFFFF",
                        borderRadius: "12px",
                        backgroundColor: "rgba(0, 0, 0, 0.3)",
                        "& fieldset": { borderColor: "rgba(255, 255, 255, 0.1)" },
                        "&:hover fieldset": { borderColor: "rgba(212, 175, 55, 0.4)" },
                        "&.Mui-focused fieldset": {
                          borderColor: "#D4AF37",
                          boxShadow: "0 0 15px rgba(212, 175, 55, 0.2)",
                        },
                      },
                    }}
                  />

                  {/* Send Button */}
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    sx={{
                      py: 1.75,
                      borderRadius: "999px",
                      backgroundColor: "#D4AF37",
                      color: "#000000",
                      fontWeight: 900,
                      fontSize: "0.9rem",
                      letterSpacing: 1.5,
                      textTransform: "uppercase",
                      boxShadow: "0 10px 25px rgba(212, 175, 55, 0.25)",
                      transition: "all 0.3s ease",
                      mt: 1,
                      "&:hover": {
                        backgroundColor: "#E5C158",
                        transform: "scale(1.02)",
                        boxShadow: "0 15px 35px rgba(212, 175, 55, 0.4)",
                      },
                    }}
                  >
                    {loading ? <CircularProgress size={24} color="inherit" /> : "Send Message"}
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>

          {/* Feedback Popup Notification */}
          <Snackbar
            open={status.open}
            autoHideDuration={5000}
            onClose={() => setStatus({ ...status, open: false })}
          >
            <Alert
              onClose={() => setStatus({ ...status, open: false })}
              severity={status.severity}
              sx={{ width: "100%" }}
            >
              {status.message}
            </Alert>
          </Snackbar>
        </Container>
      </Box>
    </AnimatedSection>
  );
}

export default Contact;