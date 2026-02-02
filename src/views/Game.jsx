import { useState } from 'react'
import Swal from 'sweetalert2'
import Board from '../components/Board'
import CommandInput from '../components/CommandInput'
import RobotReport from '../components/RobotReport'
import CommandHistory from '../components/CommandHistory'

const DIRECTIONS = ['NORTH', 'EAST', 'SOUTH', 'WEST']

export default function Game() {
    const [robot, setRobot] = useState(null)
    const [walls, setWalls] = useState([])
    const [report, setReport] = useState('')
    const [history, setHistory] = useState([])

    const addHistory = (command, status = 'success', message = '') => {
        setHistory((prev) => [
            { command, status, message, time: Date.now() },
            ...prev,
        ])
    }

    const showError = (message) => {
        Swal.fire({
            icon: 'error',
            title: 'Comando inválido',
            text: message,
        })
    }

    const handleReset = () => {
        setRobot(null)
        setWalls([])
        setReport('')
        setHistory([])
    }


    const handleCommand = (command) => {
        const parts = command.trim().split(' ')
        const action = parts[0]
        const args = parts[1] ? parts[1].split(',') : []

        switch (action) {
            case 'PLACE_ROBOT': {
                const [row, col, facing] = args
                const r = parseInt(row)
                const c = parseInt(col)

                if (
                    r >= 1 && r <= 5 &&
                    c >= 1 && c <= 5 &&
                    DIRECTIONS.includes(facing)
                ) {
                    setRobot({ row: r, col: c, facing })
                    addHistory(command)
                } else {
                    showError('Formato correcto: PLACE_ROBOT X,Y,DIRECTION')
                    addHistory(command, 'error', 'Formato incorrecto')
                }
                break
            }

            case 'PLACE_WALL': {
                const [wRow, wCol] = args.map(Number)

                if (
                    wRow >= 1 && wRow <= 5 &&
                    wCol >= 1 && wCol <= 5 &&
                    (!robot || robot.row !== wRow || robot.col !== wCol) &&
                    !walls.some((w) => w.row === wRow && w.col === wCol)
                ) {
                    setWalls([...walls, { row: wRow, col: wCol }])
                    addHistory(command)
                } else {
                    showError('No se puede colocar una pared ahí')
                    addHistory(command, 'error', 'Posición no válida')
                }
                break
            }

            case 'MOVE': {
                if (!robot) {
                    showError('Primero debes colocar el robot')
                    addHistory(command, 'error', 'Robot no colocado')
                    return
                }

                let { row, col, facing } = robot
                let newRow = row
                let newCol = col

                switch (facing) {
                    case 'NORTH':
                        newRow = row === 5 ? 1 : row + 1
                        break
                    case 'SOUTH':
                        newRow = row === 1 ? 5 : row - 1
                        break
                    case 'EAST':
                        newCol = col === 5 ? 1 : col + 1
                        break
                    case 'WEST':
                        newCol = col === 1 ? 5 : col - 1
                        break
                }

                if (!walls.some((w) => w.row === newRow && w.col === newCol)) {
                    setRobot({ row: newRow, col: newCol, facing })
                    addHistory(command)
                } else {
                    showError('Movimiento bloqueado por una pared')
                    addHistory(command, 'error', 'Pared bloqueando')
                }
                break
            }

            case 'LEFT':
                if (!robot) {
                    showError('Primero debes colocar el robot')
                    addHistory(command, 'error', 'Robot no colocado')
                    return
                }
                setRobot({
                    ...robot,
                    facing: DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 3) % 4],
                })
                addHistory(command)
                break

            case 'RIGHT':
                if (!robot) {
                    showError('Primero debes colocar el robot')
                    addHistory(command, 'error', 'Robot no colocado')
                    return
                }
                setRobot({
                    ...robot,
                    facing: DIRECTIONS[(DIRECTIONS.indexOf(robot.facing) + 1) % 4],
                })
                addHistory(command)
                break

            case 'REPORT':
                if (!robot) {
                    showError('No hay robot para reportar')
                    addHistory(command, 'error', 'Robot inexistente')
                    return
                }
                setReport(`${robot.row},${robot.col},${robot.facing}`)
                addHistory(command)
                break

            default:
                showError('Comando no reconocido')
                addHistory(command, 'error', 'Comando desconocido')
        }
    }

    return (
        <div className="min-h-screen bg-slate-900 p-6">
            <div className="max-w-6xl mx-auto space-y-6">

                <header className="text-center">
                    <h1 className="text-3xl font-bold text-white">
                        🤖 Simulador del Robot
                    </h1>
                    <p className="text-slate-400 mt-2">
                        PLACE_ROBOT · PLACE_WALL · MOVE · LEFT · RIGHT · REPORT
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="md:col-span-2 bg-slate-800 rounded-xl p-4">
                        <Board robot={robot} walls={walls} />
                    </div>

                    <div className="bg-slate-800 rounded-xl p-4 space-y-4">
                        <CommandInput
                            onCommand={handleCommand}
                            onReset={handleReset}
                        />
                        <RobotReport report={report} />
                        <CommandHistory history={history} />
                    </div>

                </div>
            </div>
        </div>
    )
}
