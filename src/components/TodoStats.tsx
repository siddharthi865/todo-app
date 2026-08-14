interface TodoStatsProps {
  total: number;
  completed: number;
}

function TodoStats({ total, completed }: TodoStatsProps) {
  const remaining = total - completed;

  return (
    <div className="grid grid-cols-3 gap-2" aria-live="polite">
      <Stat label="Total" value={total} />

      <Stat label="Remaining" value={remaining} />

      <Stat label="Done" value={completed} />
    </div>
  );
}

interface StatProps {
  label: string;
  value: number;
}

function Stat({ label, value }: StatProps) {
  return (
    <div className="rounded-xl bg-slate-50 px-3 py-3 text-center">
      <p className="text-lg font-bold text-slate-900">{value}</p>

      <p className="text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

export default TodoStats;
