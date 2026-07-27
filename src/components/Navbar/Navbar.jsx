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
import AnimatedSection from "../common/AnimatedSection";
const navItems = [
  { label: "Home", id: "home" },
  { label: "Why Us", id: "why-us" },
  { label: "Programs", id: "programs" },
  { label: "Membership", id: "membership" },
  { label: "Contact", id: "contact" }
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
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "rgba(10,10,10,.9)",
          backdropFilter: "blur(15px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ height: 80 }}>
            <Box
              onClick={() => scrollToSection("home")}
              sx={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  userSelect: "none",
                  transition: "all .3s ease",

                  "&:hover": {
                      transform: "scale(1.03)",
                  },
              }}
          >
              <Typography
                  variant="h4"
                  sx={{
                      color: "primary.main",
                      fontWeight: 800,
                      letterSpacing: 1,
                      lineHeight: 1,
                  }}
              >
                  FITNESS
              </Typography>

              <Typography
                  variant="h4"
                  sx={{
                      color: "primary.red",
                      fontWeight: 800,
                      letterSpacing: 1,
                      ml: 0.5,
                      lineHeight: 1,
                  }}
              >
                  FREAK
              </Typography>
          </Box>

            <Box sx={{ flexGrow: 1 }} />

            {/* Desktop Menu */}

            <Box
              sx={{
                display: {
                  xs: "none",
                  md: "flex",
                },
                alignItems: "center",
                gap: 4,
              }}
            >
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  color="inherit"
                  sx={{
                    fontWeight: 600,
                    position: "relative",

                    "&:hover": {
                      color: "primary.main",
                      backgroundColor: "transparent",
                    },

                    "&::after": {
                      content: '""',
                      position: "absolute",
                      left: 0,
                      bottom: 6,
                      width: 0,
                      height: 2,
                      bgcolor: "primary.main",
                      transition: ".3s",
                    },

                    "&:hover::after": {
                      width: "100%",
                    },
                  }}
                >
                  {item.label}
                </Button>
              ))}

              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
              }
                sx={{
                  borderRadius: "30px",
                  px: 4,
                  py: 1.2,
                  fontWeight: 700,
                  transition: ".3s",
                  

                 "&:hover": {
                      transform: "translateY(-4px) scale(1.03)",
                      boxShadow:
                          "0 15px 35px rgba(212,175,55,.30)",
                  },
                }}
              >
                Join Now
              </Button>
            </Box>

            {/* Mobile Menu Button */}

            <IconButton
              onClick={() => setOpen(true)}
              sx={{
                display: {
                  xs: "flex",
                  md: "none",
                },
                color: "white",
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
      >
        <Box
          sx={{
            width: 260,
            bgcolor: "#111",
            height: "100%",
            color: "white",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              p: 3,
              color: "primary.main",
              fontWeight: 700,
            }}
          >
            FITNESS FREAK
          </Typography>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton
                  onClick={() => scrollToSection(item.id)}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ p: 3 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                py: 1.5,
                fontWeight: 700,
              }}
            >
              Join Now
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Navbar;