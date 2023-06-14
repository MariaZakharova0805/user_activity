import { useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";
import { Container } from "@mui/material";
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container sx={{ m: '30px auto'}}>
      <Typography variant="h3" component="div">404: cтраница не найдена</Typography>
      <Link to="/" relative="path">
        <Button size="small">Вернуться на главную</Button>
      </Link>
    </Container>
  );
}
