import {
	Container,
	Box,
	Button,
	CardContent,
	Card,
	CardActions,
	Typography,
	Grid,
} from '@mui/material';
import { useHistory } from 'react-router';
import DataContext from '../../../contexts/dataContext';
import { useContext } from 'react';

export default function AdminDashboard(props) {
  const [data, setData] = useContext(DataContext)

	const cardStyles = {
		height: '100%',
	};

	const history = useHistory();

	return (
		<Container component="main" maxWidth="md">
			<Box
				sx={{
					mt: 8,
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<Typography variant="h4" sx={{ mb: 5, fontWeight: 'bold' }}>
					Admin Dashboard
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={4}>
						<Card style={cardStyles}>
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									Registered Users: { data.players.length }
								</Typography>
								<Typography variant="body2" color="text.secondary">
									As of {Date().toLocaleString()}, [Brackets] has{' '}
									<strong>{ data.players.length }</strong> registered user(s) and <strong>{ data.players.filter(player => player.isBanned).length }</strong>{' '}
									banned user(s).
								</Typography>
							</CardContent>
							<CardActions>
                <Button size="small" onClick={() => history.push("/admin/users")}>Manage Users</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={4}>
						<Card style={cardStyles}>
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									Tournaments: { data.tournaments.length }
								</Typography>
								<Typography variant="body2" color="text.secondary">
									There are currently <strong>{ data.tournaments.length }</strong> registered tournaments, <strong>{ data.tournaments.filter(tournament => tournament.status === 0).length }</strong> tournaments yet to start, and <strong>{ data.tournaments.filter(tournament => tournament.status === 1).length }</strong> tournaments ongoing.
								</Typography>
							</CardContent>
							<CardActions>
                <Button size="small" onClick={() => history.push("/admin/tournaments/all")}>View All</Button>
                <Button size="small" color="secondary" onClick={() => history.push("/admin/tournaments/notstarted")}>View Not Started</Button>
                <Button size="small" color="success" onClick={() => history.push("/admin/tournaments/ongoing")}>View Ongoing</Button>
							</CardActions>
						</Card>
					</Grid>

					<Grid item xs={4}>
						<Card style={cardStyles}>
							<CardContent>
								<Typography gutterBottom variant="h6" component="div">
									Archive
								</Typography>
								<Typography variant="body2" color="text.secondary">
									View past tournaments and archived user logs.
								</Typography>
							</CardContent>
							<CardActions>
                <Button size="small" color="error" onClick={() => history.push("/admin/tournaments/finished")}>Past Tournaments</Button>
								<Button size="small" onClick={() => history.push("/admin/userLogs")}>User Logs</Button>
							</CardActions>
						</Card>
					</Grid>
				</Grid>
			</Box>
		</Container>
	);
}
