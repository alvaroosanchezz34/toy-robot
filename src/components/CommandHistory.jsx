export default function CommandHistory({ history }) {
    if (!history.length) return null

    return (
        <div className="bg-slate-800 border border-slate-700 rounded-xl p-4 space-y-3 max-h-64 overflow-y-auto">
            <h3 className="text-sm font-semibold text-slate-300">
                Historial de comandos
            </h3>

            <ul className="space-y-1">
                {history.map((item, index) => (
                    <li
                        key={item.time}
                        className={`
              text-xs px-3 py-2 rounded-lg
              ${item.status === 'error'
                                ? 'bg-red-500/20 text-red-300'
                                : index === 0
                                    ? 'bg-emerald-500/20 text-emerald-300'
                                    : 'bg-slate-700 text-slate-400'
                            }
            `}
                    >
                        <strong>{item.command}</strong>
                        {item.message && (
                            <div className="opacity-80 mt-1">
                                {item.message}
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}
