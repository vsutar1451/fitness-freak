import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// Logo SVG Component (Matching Navbar)
function LogoIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.4))" }}
    >
      <defs>
        <linearGradient id="footerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B1C" />
        </linearGradient>
      </defs>

      <polygon
        points="50,5 90,27 90,73 50,95 10,73 10,27"
        fill="rgba(20, 20, 20, 0.6)"
        stroke="url(#footerGoldGrad)"
        strokeWidth="5"
      />

      <rect x="30" y="28" width="10" height="44" rx="2" fill="url(#footerGoldGrad)" />
      <rect x="30" y="28" width="38" height="10" rx="2" fill="url(#footerGoldGrad)" />
      <rect x="30" y="46" width="28" height="9" rx="2" fill="url(#footerGoldGrad)" />
      <rect x="70" y="32" width="6" height="36" rx="2" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Our Programs", id: "programs" },
  { label: "Membership Plans", id: "membership" },
  { label: "Contact Us", id: "contact" },
];

function Footer() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#080808",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        pt: { xs: 8, md: 10 },
        pb: 4,
        color: "#FFFFFF",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* COLUMN 1: Brand Info & Socials */}
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                display: "inline-flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                mb: 2.5,
              }}
            >
              <LogoIcon />
              <Typography
                variant="h6"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                }}
              >
                FITNESS{" "}
                <Box component="span" sx={{ color: "#D4AF37" }}>
                  FREAK
                </Box>
                <Box component="span" sx={{ color: "#D4AF37" }}>
                  .
                </Box>
              </Typography>
            </Box>

            <Typography
              sx={{
                color: "#9CA3AF",
                fontSize: "0.9rem",
                fontWeight: 300,
                lineHeight: 1.7,
                mb: 3,
                pr: { md: 2 },
              }}
            >
              The ultimate destination for strength, conditioning, and athletic transformation. Unleash your inner beast with world-class coaching and state-of-the-art facilities.
            </Typography>

            {/* Social Media Icons */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              {[
                { icon: <FaInstagram size={18} />, href: "https://www.instagram.com/fitness_freak_official_/?hl=en" },
                { icon: <FaFacebookF size={18} />, href: "#" },
                { icon: <FaYoutube size={18} />, href: "#" },
                { icon: <FaTwitter size={18} />, href: "#" },
              ].map((social, idx) => (
                <IconButton
                  key={idx}
                  href={social.href}
                  sx={{
                    color: "#D4AF37",
                    backgroundColor: "rgba(212, 175, 55, 0.08)",
                    border: "1px solid rgba(212, 175, 55, 0.2)",
                    borderRadius: "12px",
                    p: 1.25,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "#D4AF37",
                      color: "#000000",
                      transform: "translateY(-4px)",
                      boxShadow: "0 8px 20px rgba(212, 175, 55, 0.4)",
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* COLUMN 2: Quick Navigation Links */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                color: "#FFFFFF",
                fontSize: "1rem",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: 30,
                  height: 2,
                  backgroundColor: "#D4AF37",
                },
              }}
            >
              Quick Links
            </Typography>

            <Box
              component="ul"
              sx={{
                p: 0,
                m: 0,
                listStyle: "none",
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              {navLinks.map((link) => (
                <Box
                  component="li"
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  sx={{
                    color: "#9CA3AF",
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    width: "fit-content",
                    "&:hover": {
                      color: "#D4AF37",
                      transform: "translateX(6px)",
                    },
                  }}
                >
                  {link.label}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* COLUMN 3: Direct Contact Details */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 800,
                color: "#FFFFFF",
                fontSize: "1rem",
                letterSpacing: 1.5,
                textTransform: "uppercase",
                mb: 3,
                position: "relative",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  left: 0,
                  bottom: -8,
                  width: 30,
                  height: 2,
                  backgroundColor: "#D4AF37",
                },
              }}
            >
              Location & Contact
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1.5 }}>
                <Box sx={{ color: "#D4AF37", mt: 0.4 }}>
                  <FaMapMarkerAlt size={16} />
                </Box>
                <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem", lineHeight: 1.5 }}>
                  1st Floor, Icchapurti Housing Society, Wadgaon Sheri, Pune, MH 411014
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ color: "#D4AF37" }}>
                  <FaPhoneAlt size={15} />
                </Box>
                <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  +91 98765 43210
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                <Box sx={{ color: "#D4AF37" }}>
                  <FaEnvelope size={15} />
                </Box>
                <Typography sx={{ color: "#9CA3AF", fontSize: "0.875rem" }}>
                  info@fitnessfreak.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* BOTTOM COPYRIGHT BAR */}
        <Box
          sx={{
            mt: 8,
            pt: 3,
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Typography sx={{ color: "#6B7280", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} FITNESS FREAK. All rights reserved.
          </Typography>

          <Typography sx={{ color: "#6B7280", fontSize: "0.8rem" }}>
            Built for peak human performance.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;