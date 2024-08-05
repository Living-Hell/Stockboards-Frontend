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
import AddIcon from "@mui/icons-material/Add";

const DashboardList = [
  {
    name: "Dashboard 1",
    id: 1,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image: "http://igmmudala.org/png/financial-kpi-dashboard-2.png",
  },
  {
    name: "Dashboard 2",
    id: 2,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image: "http://igmmudala.org/png/it-project-management-dashboard-3.png",
  },
  {
    name: "Dashboard 3",
    id: 3,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image: "http://igmmudala.org/png/financial-report-template.png",
  },
  {
    name: "Dashboard 4",
    id: 4,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image:
      "https://cdn1.dronahq.com/wp-content/uploads/2021/08/Dashboard-Designing-on-DronaHQ-1.svg",
  },
  {
    name: "Dashboard 5",
    id: 5,
    created_at: "05-08-2024",
    created_by: "Shushant",
    updated_at: "06-08-2024",
    description: "This is just a demo dashboard",
    image: "http://igmmudala.org/png/management-kpi-dashboard-2.png",
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
    return dashboards?.map((dashboard) => (
      <Grid item xs={4} key={dashboard.id}>
        <Card sx={{ height: 240 }}>
          <CardActionArea className="h-full hover:opacity-50">
            <CardMedia
              component="div"
              sx={{ position: "relative", height: 140 }}
            >
              <Image
                alt={dashboard.name}
                src={dashboard.image}
                layout="fill"
                objectFit="cover"
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
    <div id="home" className="h-screen bg-stone-100">
      <Box sx={{ flexGrow: 1 }} className="h-auto m-5">
        <Grid container spacing={2}>
          {DashboardCards()}
          <Grid item xs={4} key={0}>
            <Card sx={{ height: 240 }}>
              <CardActionArea className="h-full">
                <CardMedia component="div" sx={{ height: 240, opacity: 0.6 }}>
                  <AddIcon
                    sx={{ width: "100%", height: "100%" }}
                    className="hover:opacity-60"
                  />
                </CardMedia>
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Home;
