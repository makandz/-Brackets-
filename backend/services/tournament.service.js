import { Tournament } from "../models/tournament.model";

function setUserInTournmanets(user, tournaments) {
  const tournaments = tournaments.map((tournament) => {
    for (team in tournament.teams) {
      if (tournament.teams[team].includes(user.username)) {
        tournament.userTeam = team;
        return tournament;
      }
    }

    if ((!tournament.public && user.type === "admin") || tournament.public) {
      return tournament;
    }
  });

  return tournaments;
}

export async function getTournaments(user, filter) {
  const filters = [-1, 0, 1];

  if (!filters.includes(filter)) {
    throw Error("Bad Request");
  }

  const tournaments = await Tournament.find(
    filter !== -1 ? { status: filter } : {}
  );
  return setUserInTournmanets(user, tournaments);
}

export async function getTournamentById(user, id) {
  const tournament = Tournament.findById(id);
  return setUserInTournmanets(user, [tournament]);
}

export async function createTournament(req) {
  const host = req.user.username;
  const { name, description, public, maxMembers, maxTeamMembers, status } =
    req.body;

  const tournament = new Tournament({
    name,
    description,
    public,
    maxMembers,
    maxTeamMembers,
    status,
    host,
  });

  return await tournament.save();
}
