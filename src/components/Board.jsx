const SIZE = 5

const DIRECTION_ICON = {
    NORTH: '↑',
    EAST: '→',
    SOUTH: '↓',
    WEST: '←',
}

export default function Board({ robot, walls }) {
    return (
        <div className="flex justify-center">
            <div
                className="grid gap-1"
                style={{ gridTemplateColumns: `repeat(${SIZE}, 1fr)` }}
            >
                {Array.from({ length: SIZE * SIZE }).map((_, index) => {
                    const row = SIZE - Math.floor(index / SIZE)
                    const col = (index % SIZE) + 1

                    const isRobot =
                        robot && robot.row === row && robot.col === col

                    const isWall = walls.some(
                        (w) => w.row === row && w.col === col
                    )

                    return (
                        <div
                            key={`${row}-${col}`}
                            className={`
                w-14 h-14
                flex items-center justify-center
                rounded-md
                border border-slate-600
                text-lg font-bold
                transition-all duration-300 ease-out
                ${isRobot
                                    ? 'bg-emerald-500 text-slate-900 scale-105'
                                    : isWall
                                        ? 'bg-slate-500 text-white'
                                        : 'bg-slate-700'
                                }
              `}
                        >
                            {isRobot && (
                                <span className="transition-transform duration-300 rotate-0">
                                    {DIRECTION_ICON[robot.facing]}
                                </span>
                            )}
                            {isWall && '■'}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
