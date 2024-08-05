"use client";

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Button, CardActionArea, CardActions, Typography } from "@mui/material";
import Image from "next/image";

const DashboardList = [
  {
    name: "Dashboard 1",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipfolio.com%2Fresources%2Fdashboard-examples%2Fexecutive&psig=AOvVaw3mw2L98u2h7jgTbXdjGSfY&ust=1722967526389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC4k5-43ocDFQAAAAAdAAAAABAY",
  },
  {
    name: "Dashboard 2",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipfolio.com%2Fresources%2Fdashboard-examples%2Fexecutive&psig=AOvVaw3mw2L98u2h7jgTbXdjGSfY&ust=1722967526389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC4k5-43ocDFQAAAAAdAAAAABAY",
  },
  {
    name: "Dashboard 3",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipfolio.com%2Fresources%2Fdashboard-examples%2Fexecutive&psig=AOvVaw3mw2L98u2h7jgTbXdjGSfY&ust=1722967526389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC4k5-43ocDFQAAAAAdAAAAABAY",
  },
  {
    name: "Dashboard 4",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipfolio.com%2Fresources%2Fdashboard-examples%2Fexecutive&psig=AOvVaw3mw2L98u2h7jgTbXdjGSfY&ust=1722967526389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC4k5-43ocDFQAAAAAdAAAAABAY",
  },
  {
    name: "Dashboard 5",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.klipfolio.com%2Fresources%2Fdashboard-examples%2Fexecutive&psig=AOvVaw3mw2L98u2h7jgTbXdjGSfY&ust=1722967526389000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKC4k5-43ocDFQAAAAAdAAAAABAY",
  },
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "240px",
}));

const Home: React.FC = () => {
  const [dashboards, setDashboards] = React.useState(DashboardList);

  const DashboardCards = () => {
    console.log(dashboards);
    return dashboards?.map((dashboard) => (
      <Grid item xs={4} key={dashboard.id}>
        <Card sx={{ height: 240 }}>
          <CardActionArea className="h-full">
            <CardMedia
              component="img"
              height="140"
              image={dashboard.image}
              alt={dashboard.name}
              src={dashboard.image}
            >
              <Image
                alt={dashboard.name}
                src={dashboard.image}
                width={200}
                height={200}
              />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {dashboard.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {dashboard.description}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Created by: {dashboard.created_by} | Created at:{" "}
                {dashboard.created_at}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    ));
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="h-screen m-5">
      <Grid container spacing={2}>
        {DashboardCards()}
      </Grid>
    </Box>
  );
};

export default Home;
