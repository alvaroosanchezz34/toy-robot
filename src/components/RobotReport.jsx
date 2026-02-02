export default function RobotReport({ report }) {
    if (!report) return null

    return (
        <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 text-center">
            <p className="text-sm text-slate-400 mb-1">Reporte del robot</p>
            <p className="text-lg font-bold text-emerald-400">
                {report}
            </p>
        </div>
    )
}
