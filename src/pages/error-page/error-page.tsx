import { useEffect } from "react";
import { useRouteError, Link } from "react-router-dom";
import { Container, Typography, Button } from '@mui/material';

export default function ErrorPage() {
  const error = useRouteError();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <Container sx={{ m: '30px auto' }}>
      <Typography variant="h3" component="div">404: cтраница не найдена</Typography>
      <Link to="/" relative="path">
        <Button size="small">Вернуться на главную</Button>
      </Link>
    </Container>
  );
}
