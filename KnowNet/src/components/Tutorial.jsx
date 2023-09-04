/* eslint-disable react/no-unescaped-entities */
import { Box, Typography } from "@mui/material";

const Tutorial = () => {
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
      <Box width="70%">
        <Box sx={{ marginTop: "5em", marginBottom: "6em" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontFamily: "fantasy",
              letterSpacing: "2px",
              lineHeight: "80px",
            }}
          >
            How to Use
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4em" }}>
          <Typography
            variant="p"
            component="p"
            sx={{ fontSize: "1.3rem", textAlign: "left", padding: "1em 0" }}
          >
            <ol>
              <li style={{ padding: "1em" }}>
                Look for the icon that indicates message and click on it.
              </li>
              <li style={{ padding: "1em" }}>
                Look for the icon labelled "Send a message" or "Start chat".
              </li>
              <li style={{ padding: "1em" }}>
                Dial in our shortcode as the receiver's number.
              </li>
              <li style={{ padding: "1em", paddingBottom: "2em" }}>
                Type anything and hit "Send" once you are done.
              </li>
            </ol>
            NOTE: First time users are required to register through SMS at no
            additional cost
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Tutorial;
