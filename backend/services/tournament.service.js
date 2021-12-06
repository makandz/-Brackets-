import { Tournament } from "../models/tournament.model.js";

function setUserInTournaments(user, tournaments) {
  return tournaments.filter((tournament) => {
    for (const [teamName, team] of tournament.teams.entries()) {
      if (team.includes(user.username)) {
        tournament.userTeam = teamName;
        console.log(tournament);
        return true;
      }

      return false;
    }
  });
}

async function getTournamentList(status) {
  const statuses = [0, 1, 2];

  if (status.includes(-1))
    return await Tournament.find();

  let parsedStatus = status.map((e) => {
    e = parseInt(e);
    if (!statuses.includes(e)) {
      throw Error("Invalid status type");
    }

    return { status: e };
  });

  return await Tournament.find(
    { $or: parsedStatus }
  );
}

export async function getAttendingTournaments(user, status) {
  return setUserInTournaments(
    user,
    (await getTournamentList(status)).filter(e => e.members.includes(user.username))
  );
}

export async function getHostingTournaments(user, status) {
  const tournaments = await getTournamentList(status);
  return tournaments.filter((e) => e.host === user.username);
}

export async function getTournaments(status) {
  return await getTournamentList(status);
}

export async function getPublicTournaments(status) {
  const tournaments = getTournamentList(status);
  return tournaments.filter((e) => !e.members.includes(e.username));
}

export async function getTournamentById(user, id) {
  const tournament = Tournament.findById(id);
  return setUserInTournaments(user, [tournament]);
}

export async function getNumTournaments() {
  return {
    open: (await Tournament.find({ status: 0 })).length,
    ongoing: (await Tournament.find({ status: 1 })).length,
    closed: (await Tournament.find({ status: 2 })).length,
  };
}

export async function createTournament(req) {
  const tournament = new Tournament({
    name: req.body.name,
    description: req.body.description,
    public: req.body.public,
    maxMembers: req.body.maxMembers,
    maxTeamMembers: req.body.maxTeamMembers,
    status: req.body.status,
    host: req.user.username,
  });
  return await tournament.save();
}