import React, { useState, useEffect } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { API_URL_fetchblogs } from "./utils";
import { Card } from "./components/blog/Card";
import { orange } from "@mui/material/colors";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App() {
  const [posts, setPosts] = useState([])

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(API_URL_fetchblogs);

      setPosts(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Typography align="center" variant="h2"  paddingTop={2} paddingBottom={2}>
        Trending Blogs Today
      </Typography>
        <Card posts={posts} />
    </ThemeProvider>
  );
}