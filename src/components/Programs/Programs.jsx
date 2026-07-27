import {
    Box,
    Container,
    Stack,
    Typography,
} from "@mui/material";

import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import PersonIcon from "@mui/icons-material/Person";

const programs = [
    {
        icon: <FitnessCenterIcon sx={{ fontSize: 40 }} />,
        title: "Strength & Performance",
        description:
            "Weight Training • Strength Training • Bodybuilding • CrossFit • Anaerobics",
    },
    {
        icon: <FavoriteIcon sx={{ fontSize: 40 }} />,
        title: "Cardio & Conditioning",
        description:
            "Cardio • HIIT • Aerobics • Kickboxing",
    },
    {
        icon: <SelfImprovementIcon sx={{ fontSize: 40 }} />,
        title: "Group Fitness",
        description:
            "Yoga • Zumba • Dance Fitness • Group Classes",
    },
    {
        icon: <PersonIcon sx={{ fontSize: 40 }} />,
        title: "Coaching & Wellness",
        description:
            "Personal Training • Fitness Coach Consulting • Nutrition Consulting • Diet Planning • BMI Analysis • Weight Management",
    },
];
function Programs() {
    return (
        <Box
            id="programs"
            sx={{
                py: 14,
                bgcolor: "background.default",
            }}
        >
            <Container maxWidth="lg">

                <Typography
                    align="center"
                    color="primary.main"
                    sx={{
                        letterSpacing: 2,
                        fontWeight: 700,
                    }}
                >
                    PROGRAMS WE OFFER
                </Typography>

                <Typography
                    variant="h2"
                    align="center"
                    fontWeight={800}
                    mt={2}
                >
                    TRAIN SMARTER.
                    <br />
                    ACHIEVE MORE.
                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    mt={3}
                    mb={7}
                >
                    Everything you need under one roof,
                    from beginners to professional athletes.
                </Typography>

                {/* Programs */}
                <Box sx={{ mt: 8 }}>

                <Stack spacing={4}>

                    {programs.map((program) => (

                        <Box
                            key={program.title}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 4,

                                p: 4,

                                borderRadius: 4,

                                border:
                                    "1px solid rgba(255,255,255,.08)",

                                transition: ".35s",

                                "&:hover": {
                                    borderColor: "primary.main",

                                    transform:
                                        "translateX(12px)",

                                    bgcolor:
                                        "background.paper",
                                },
                            }}
                        >

                            <Box
                                sx={{
                                    color: "primary.main",
                                }}
                            >
                                {program.icon}
                            </Box>

                            <Box>

                                <Typography
                                    variant="h5"
                                    fontWeight={700}
                                >
                                    {program.title}
                                </Typography>

                                <Typography
                                    color="text.secondary"
                                    mt={1}
                                >
                                    {program.description}
                                </Typography>

                            </Box>

                        </Box>

                    ))}

                </Stack>
                </Box>

            </Container>
        </Box>
    );
}

export default Programs;