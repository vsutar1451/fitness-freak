import {
    Box,
    Chip,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import SportsMmaIcon from "@mui/icons-material/SportsMma";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

const services = [
    {
        title: "Strength",
        icon: <FitnessCenterIcon />,
    },
    {
        title: "Cardio",
        icon: <DirectionsRunIcon />,
    },
    {
        title: "Yoga",
        icon: <SelfImprovementIcon />,
    },
    {
        title: "Kickboxing",
        icon: <SportsMmaIcon />,
    },
    {
        title: "CrossFit",
        icon: <LocalFireDepartmentIcon />,
    },
    {
        title: "Nutrition",
        icon: <RestaurantIcon />,
    },
    {
        title: "Weight Management",
        icon: <MonitorWeightIcon />,
    },
    {
        title: "Personal Training",
        icon: <AccessibilityNewIcon />,
    },
];

function Services() {
    return (
        <Box
            id="services"
            sx={{
                py: 12,
            }}
        >
            <Container maxWidth="md">

                <Typography
                    align="center"
                    color="primary.main"
                    sx={{
                        letterSpacing: 2,
                        fontWeight: 700,
                    }}
                >
                    OUR SERVICES
                </Typography>

                <Typography
                    variant="h3"
                    align="center"
                    fontWeight={800}
                    mt={2}
                >
                    Train Your Way
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    mt={2}
                    mb={7}
                >
                    From beginners to athletes, we have a program designed
                    for every fitness goal.
                </Typography>

                <Stack
                    direction="row"
                    flexWrap="wrap"
                    justifyContent="center"
                    gap={2}
                >
                    {services.map((service) => (
                        <Chip
                            key={service.title}
                            icon={service.icon}
                            label={service.title}
                            sx={{
                                bgcolor: "background.paper",
                                color: "white",
                                px: 2,
                                py: 3,
                                fontSize: "1rem",
                                borderRadius: 100,
                                border: "1px solid rgba(255,255,255,.08)",

                                "& .MuiChip-icon": {
                                    color: "#D4AF37",
                                },

                                transition: ".3s",

                                "&:hover": {
                                    bgcolor: "primary.main",
                                    color: "#000",
                                    transform: "translateY(-5px)",

                                    "& .MuiChip-icon": {
                                        color: "#000",
                                    },
                                },
                            }}
                        />
                    ))}
                </Stack>

                <Typography
                    align="center"
                    color="primary.main"
                    mt={5}
                    fontWeight={700}
                >
                    + 10 More Services
                </Typography>

            </Container>
        </Box>
    );
}

export default Services;