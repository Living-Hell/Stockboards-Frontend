import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24">
      <Typography variant="h2" component="h2" className="mb-10 font-sans">
        Welcome to Stockboards!
      </Typography>
      <div className="flex">
        <Card sx={{ maxWidth: 245 }} className="mr-10 p-4">
          <CardMedia
            component={"img"}
            alt="Login"
            height={160}
            image="https://www.coffed.coop/images/login.png"
          />
          <CardContent></CardContent>
          <CardActionArea className="flex justify-center content-center">
            <Button className="hover:bg-inherit">Login</Button>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 245 }} className="p-4">
          <CardMedia
            component={"img"}
            alt="Signup"
            height={160}
            image="https://www.coffed.coop/images/login.png"
          />
          <CardContent></CardContent>
          <CardActionArea className="flex justify-center content-center">
            <Button className="hover:bg-inherit">Signup</Button>
          </CardActionArea>
        </Card>
      </div>
    </div>
  );
}
