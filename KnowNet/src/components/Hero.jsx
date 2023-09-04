import { Box, Button, Typography } from "@mui/material";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#065F73",
        padding: "3em 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box sx={{ width: "70%", marginTop: "5em", marginBottom: "6em" }}>
        <Box>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "fantasy",
              letterSpacing: "2px",
              lineHeight: "80px",
            }}
          >
            KNOWNET
          </Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontFamily: "cursive",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            Knowledge Without Barriers
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4em" }}>
          <Typography variant="p" component="p" sx={{ fontSize: "1.3rem" }}>
            KnowNet introduces a revolutionary conversational SMS based Google
            search designed to address information disparities in Africa.
          </Typography>
          <a
            href="sms:22881"
            style={{
              textDecoration: "none",
            }}
          >
            <Button
              variant="contained"
              sx={{
                marginTop: "4em",
                boxShadow: "none",
                backgroundColor: "#bdbbbb",
                color: "#065F73",
                "&:hover": {
                  backgroundColor: "#065F73",
                  color: "#bdbbbb",
                },
              }}
            >
              Get Started
            </Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
