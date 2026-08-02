import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// Custom Vector SVG Logo Component
function LogoIcon() {
  return (
    <svg
      width="38"
      height="38"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(0px 0px 8px rgba(212, 175, 55, 0.4))" }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3B0" />
          <stop offset="50%" stopColor="#D4AF37" />
          <stop offset="100%" stopColor="#9A7B1C" />
        </linearGradient>
      </defs>

      {/* Hexagonal Shield Outer Border */}
      <polygon
        points="50,5 90,27 90,73 50,95 10,73 10,27"
        fill="rgba(20, 20, 20, 0.6)"
        stroke="url(#goldGradient)"
        strokeWidth="5"
      />

      {/* Stylized 'F' / Dumbbell Icon Core */}
      <rect x="30" y="28" width="10" height="44" rx="2" fill="url(#goldGradient)" />
      <rect x="30" y="28" width="38" height="10" rx="2" fill="url(#goldGradient)" />
      <rect x="30" y="46" width="28" height="9" rx="2" fill="url(#goldGradient)" />

      {/* Dumbbell Plates Accent */}
      <rect x="70" y="32" width="6" height="36" rx="2" fill="#FFFFFF" opacity="0.9" />
    </svg>
  );
}

const navItems = [
  { label: "Home", id: "home" },
  { label: "Why Us", id: "why-us" },
  { label: "Programs", id: "programs" },
  { label: "Membership", id: "membership" },
  { label: "Contact", id: "contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(10, 10, 10, 0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          zIndex: (theme) => theme.zIndex.drawer - 1,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            {/* Logo Brand Group */}
            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                cursor: "pointer",
                userSelect: "none",
                transition: "transform .3s ease",
                "&:hover": {
                  transform: "scale(1.02)",
                },
              }}
            >
              {/* SVG Logo Icon */}
              <LogoIcon />

              {/* Brand Name Typography */}
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  color: "#FFFFFF",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                FITNESS{" "}
                <Box component="span" sx={{ color: "#D4AF37", ml: 0.75 }}>
                  FREAK
                </Box>
                <Box
                  component="span"
                  sx={{
                    color: "#D4AF37",
                    display: "inline-block",
                    textShadow: "0 0 10px rgba(212, 175, 55, 0.8)",
                  }}
                >
                </Box>
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Links */}
            <Box
              sx={{
                display: { xs: "none", md: "flex" },
                alignItems: "center",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: "#D1D5DB",
                    fontWeight: 600,
                    fontSize: "0.875rem",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    position: "relative",
                    px: 0,
                    minWidth: "auto",
                    transition: "color 0.3s ease",

                    "&:hover": {
                      color: "#D4AF37",
                      backgroundColor: "transparent",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: -4,
                      width: 0,
                      height: "2px",
                      backgroundColor: "#D4AF37",
                      transition: "width 0.3s ease",
                      boxShadow: "0 0 8px rgba(212, 175, 55, 0.6)",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Action Button */}
              <Button
                variant="contained"
                onClick={() => scrollToSection("contact")}
                sx={{
                  borderRadius: "999px",
                  px: 3.5,
                  py: 1,
                  backgroundColor: "#D4AF37",
                  color: "#000000",
                  fontWeight: 900,
                  fontSize: "0.8rem",
                  letterSpacing: 1.5,
                  textTransform: "uppercase",
                  boxShadow: "0 10px 25px rgba(212, 175, 55, 0.2)",
                  transition: "all 0.3s ease",

                  "&:hover": {
                    backgroundColor: "#E5C158",
                    transform: "translateY(-2px) scale(1.03)",
                    boxShadow: "0 15px 30px rgba(212, 175, 55, 0.35)",
                  },
                }}
              >
                Join Now
              </Button>
            </Box>

            {/* Mobile Drawer Trigger */}
            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: { xs: "flex", md: "none" },
                color: "#FFFFFF",
                p: 1,
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            backgroundColor: "rgba(15, 15, 15, 0.95)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderLeft: "1px solid rgba(255, 255, 255, 0.08)",
            color: "#FFFFFF",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            p: 3,
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <LogoIcon />
            <Typography
              variant="h6"
              sx={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: 1,
              }}
            >
              FITNESS <Box component="span" sx={{ color: "#D4AF37" }}>FREAK</Box>
            </Typography>
          </Box>

          <IconButton onClick={() => setOpen(false)} sx={{ color: "#9CA3AF" }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <List sx={{ px: 2, py: 3 }}>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                onClick={() => scrollToSection(item.id)}
                sx={{
                  borderRadius: "12px",
                  py: 1.5,
                  "&:hover": {
                    backgroundColor: "rgba(212, 175, 55, 0.15)",
                    "& .MuiListItemText-primary": {
                      color: "#D4AF37",
                    },
                  },
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    letterSpacing: 1,
                    textTransform: "uppercase",
                    color: "#D1D5DB",
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ p: 3, mt: "auto" }}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => scrollToSection("contact")}
            sx={{
              borderRadius: "999px",
              py: 1.5,
              backgroundColor: "#D4AF37",
              color: "#000000",
              fontWeight: 900,
              fontSize: "0.85rem",
              letterSpacing: 1.5,
              textTransform: "uppercase",
              boxShadow: "0 10px 25px rgba(212, 175, 55, 0.25)",
              "&:hover": {
                backgroundColor: "#E5C158",
              },
            }}
          >
            Join Now
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;