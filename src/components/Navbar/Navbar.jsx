import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        bgcolor: "rgba(10,10,10,0.95)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ height: 80 }}>

          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: 800,
              letterSpacing: 1,
            }}
          >
            FITNESS FREAK
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>

            {[
              "Home",
              "About",
              "Plans",
              "Trainers",
              "Gallery",
              "Contact",
            ].map((item) => (
              <Button
                key={item}
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
                    width: 0,
                    height: 2,
                    bottom: 8,
                    left: 0,
                    backgroundColor: "#D4AF37",
                    transition: "0.3s",
                  },

                  "&:hover::after": {
                    width: "100%",
                  },
                }}
              >
                {item}
              </Button>
            ))}

            <Button
              variant="contained"
              color="primary"
              sx={{
                borderRadius: "30px",
                px: 4,
                py: 1.2,
                fontWeight: 700,

                "&:hover": {
                  transform: "translateY(-2px)",
                },

                transition: "0.3s",
              }}
            >
              Join Now
            </Button>

          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;