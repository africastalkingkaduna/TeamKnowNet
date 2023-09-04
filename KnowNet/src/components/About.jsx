import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#bdbbbb",
        padding: "3em 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "#065F73",
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
            About
          </Typography>
        </Box>
        <Box sx={{ marginTop: "4em" }}>
          <Typography
            variant="p"
            component="p"
            sx={{ fontSize: "1.3rem", textAlign: "left", padding: "1em 0" }}
          >
            Many people in Africa lack access to information. This can be due to
            a number of factors, such as poverty, lack of education, and lack of
            access to the internet. As a result, people in Africa often have
            difficulty finding the information they need to make informed
            decisions about their lives.
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ fontSize: "1.3rem", textAlign: "left", padding: "1em 0" }}
          >
            We propose to develop a chatbot that can answer questions about a
            variety of topics, such as healthcare, finance, and education. It
            would be connected to a knowledge base of information, which would
            allow it to answer questions in a comprehensive and informative way.
          </Typography>
          <Typography
            variant="p"
            component="p"
            sx={{ fontSize: "1.3rem", textAlign: "left", padding: "1em 0" }}
          >
            The chatbot would be a valuable resource for people in Africa. It
            would help people to find the information they need to improve their
            lives. It would also help to bridge the digital divide in Africa and
            make information more accessible to everyone.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
