import { Container, Paper } from '@mui/material'
import {EventsForm} from 'widgets/events-form'
import { EventsTable } from 'widgets/events-table';

export const Events = () => {
  return (
    <Container>
      <Paper sx={{ paddingX: 2, paddingY: 1, marginY: 1 }}>
        <EventsForm />
      </Paper>
      <EventsTable/>
    </Container>
  );
};
