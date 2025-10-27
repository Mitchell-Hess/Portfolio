/**
 * MLB Stats API utilities for fetching Cleveland Guardians data
 * Uses the free MLB Stats API - no authentication required
 */

const BASE_URL = "https://statsapi.mlb.com/api/v1";
const GUARDIANS_TEAM_ID = 114;

interface MLBGame {
  date: string;
  opponent: string;
  score?: string;
  result?: "W" | "L";
  time?: string;
}

/**
 * Get recent and upcoming games for the Cleveland Guardians
 */
export async function getGuardiansGames(season: number = new Date().getFullYear()): Promise<MLBGame[]> {
  try {
    const url = `${BASE_URL}/schedule?teamId=${GUARDIANS_TEAM_ID}&season=${season}&sportId=1`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch Guardians schedule");
    }

    const data = await response.json();
    const games: MLBGame[] = [];

    if (data.dates) {
      const allGames: Array<MLBGame & { gameDate: Date; state: string }> = [];

      for (const dateInfo of data.dates) {
        for (const game of dateInfo.games) {
          const gameDate = new Date(game.gameDate);

          // Determine opponent
          const homeTeam = game.teams.home.team.name;
          const awayTeam = game.teams.away.team.name;
          const isHome = homeTeam === "Cleveland Guardians";
          const opponent = isHome ? awayTeam : homeTeam;
          const opponentPrefix = isHome ? "vs" : "@";

          const gameInfo: MLBGame & { gameDate: Date; state: string } = {
            date: gameDate.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            }),
            opponent: `${opponentPrefix} ${opponent}`,
            state: game.status.abstractGameState,
            gameDate,
          };

          // If game is final, add score
          if (game.status.abstractGameState === "Final") {
            if (
              game.teams.home.score !== undefined &&
              game.teams.away.score !== undefined
            ) {
              const homeScore = game.teams.home.score;
              const awayScore = game.teams.away.score;
              const guardiansScore = isHome ? homeScore : awayScore;
              const opponentScore = isHome ? awayScore : homeScore;

              gameInfo.score = `${guardiansScore}-${opponentScore}`;
              gameInfo.result = guardiansScore > opponentScore ? "W" : "L";
            }
          }
          // If game is upcoming, add time
          else if (game.status.abstractGameState === "Preview") {
            gameInfo.time = gameDate.toLocaleTimeString("en-US", {
              hour: "numeric",
              minute: "2-digit",
              hour12: true,
            });
          }

          allGames.push(gameInfo);
        }
      }

      // Separate past and future games
      const now = new Date();
      const pastGames = allGames.filter(
        (g) => g.gameDate < now && g.state === "Final"
      );
      const futureGames = allGames.filter(
        (g) => g.gameDate >= now || g.state === "Preview"
      );

      // Get last 3 completed games and next 3 games
      const recentGames = pastGames.slice(-3);
      const upcomingGames = futureGames.slice(0, 3);

      // Combine and remove internal properties
      const combinedGames = [...recentGames, ...upcomingGames];
      return combinedGames.map(({ gameDate, state, ...game }) => game);
    }

    return [];
  } catch (error) {
    console.error("Error fetching Guardians games:", error);
    return [];
  }
}

/**
 * Get the team's season record
 */
export async function getGuardiansRecord(season: number = new Date().getFullYear()): Promise<string | null> {
  try {
    const url = `${BASE_URL}/teams/${GUARDIANS_TEAM_ID}?season=${season}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Failed to fetch team record");
    }

    const data = await response.json();

    if (data.teams && data.teams.length > 0) {
      const team = data.teams[0];
      if (team.record) {
        const { wins, losses } = team.record;
        return `${wins}-${losses}`;
      }
    }

    return null;
  } catch (error) {
    console.error("Error fetching Guardians record:", error);
    return null;
  }
}
