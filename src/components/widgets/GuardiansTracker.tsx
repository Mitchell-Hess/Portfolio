import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getGuardiansGames, getGuardiansRecord } from "../../utils/mlb";

interface Game {
  date: string;
  opponent: string;
  score?: string;
  result?: "W" | "L";
  time?: string;
}

export default function GuardiansTracker() {
  const [games, setGames] = useState<Game[]>([]);
  const [record, setRecord] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const [gamesData, recordData] = await Promise.all([
          getGuardiansGames(),
          getGuardiansRecord(),
        ]);

        setGames(gamesData);
        setRecord(recordData);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching Guardians data:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchGames();
    // Refresh every 5 minutes
    const interval = setInterval(fetchGames, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="p-4 bg-gradient-to-br from-red-50 to-blue-50 dark:from-red-900/20 dark:to-blue-900/20 rounded-2xl border border-red-200 dark:border-red-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-red-200 dark:bg-red-800 rounded-full animate-pulse" />
          <div className="h-5 bg-red-200 dark:bg-red-800 rounded animate-pulse w-32" />
        </div>
        <div className="space-y-2">
          <div className="h-12 bg-red-100 dark:bg-red-900/30 rounded animate-pulse" />
          <div className="h-12 bg-red-100 dark:bg-red-900/30 rounded animate-pulse" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-slate-800 dark:to-slate-700 rounded-2xl border border-gray-200 dark:border-slate-600">
        <div className="flex items-center gap-3">
          <div className="text-2xl">⚾</div>
          <div>
            <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Unable to load games
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Check back later!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5 bg-gradient-to-br from-red-50 via-white to-blue-50 dark:from-red-900/20 dark:via-slate-800 dark:to-blue-900/20 rounded-2xl border border-red-200 dark:border-red-800 shadow-md">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-blue-600 rounded-full flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-sm">CLE</span>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white dark:bg-slate-800 rounded-full p-0.5">
              <span className="text-lg">⚾</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-gray-100">
              Cleveland Guardians
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Recent & Upcoming Games
            </p>
          </div>
        </div>
        {record && (
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400 font-medium">
              2024 Season
            </p>
            <p className="text-lg font-bold text-gray-900 dark:text-gray-100">
              {record}
            </p>
          </div>
        )}
      </div>

      {/* Games List */}
      <div className="space-y-2">
        {games.length === 0 ? (
          <div className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 text-center">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Off-season - No games scheduled
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
              Check back during baseball season!
            </p>
          </div>
        ) : (
          games.map((game, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white dark:bg-slate-800 rounded-xl border border-gray-200 dark:border-slate-700 hover:border-red-300 dark:hover:border-red-700 transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="text-center min-w-[60px]">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                  {game.date}
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {game.opponent}
                </p>
                {game.score && (
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    {game.score}
                  </p>
                )}
                {game.time && (
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                    {game.time}
                  </p>
                )}
              </div>
            </div>

            {game.result && (
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`px-3 py-1 rounded-full text-xs font-bold ${
                  game.result === "W"
                    ? "bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-400"
                    : "bg-red-100 text-red-700 dark:bg-red-900/50 dark:text-red-400"
                }`}
              >
                {game.result}
              </motion.div>
            )}

            {!game.result && game.time && (
              <div className="text-xl">🎯</div>
            )}
          </motion.div>
          ))
        )}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-200 dark:border-slate-700">
        <p className="text-xs text-center text-gray-500 dark:text-gray-400">
          Go Guards! 💙❤️
        </p>
      </div>
    </div>
  );
}
