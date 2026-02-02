import { useState } from 'react'
import Swal from 'sweetalert2'

export default function CommandInput({ onCommand, onReset }) {
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!input.trim()) return
        onCommand(input.trim().toUpperCase())
        setInput('')
    }

    const handleReset = () => {
        Swal.fire({
            title: '¿Reiniciar simulación?',
            text: 'Se perderán el robot, las paredes y el historial',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#10b981',
            cancelButtonColor: '#ef4444',
            confirmButtonText: 'Sí, reiniciar',
            cancelButtonText: 'Cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                onReset()
                Swal.fire({
                    icon: 'success',
                    title: 'Simulación reiniciada',
                    timer: 1200,
                    showConfirmButton: false,
                })
            }
        })
    }

    return (
        <div className="space-y-4">

            {/* Input manual */}
            <form onSubmit={handleSubmit} className="space-y-3">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ej: PLACE_ROBOT 1,2,NORTH"
                    className="
            w-full px-4 py-2 rounded-lg
            bg-slate-700 border border-slate-600
            text-white placeholder-slate-400
            focus:outline-none focus:ring-2 focus:ring-emerald-500
          "
                />

                <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600
            text-slate-900 font-semibold py-2 rounded-lg transition-all"
                >
                    Ejecutar comando
                </button>
            </form>

            {/* Quick actions */}
            <div className="grid grid-cols-2 gap-2">
                {['MOVE', 'LEFT', 'RIGHT', 'REPORT'].map((cmd) => (
                    <button
                        key={cmd}
                        onClick={() => onCommand(cmd)}
                        className="
              bg-slate-600 hover:bg-slate-500
              text-white py-2 rounded-lg transition-all
            "
                    >
                        {cmd}
                    </button>
                ))}
            </div>

            {/* Reset */}
            <button
                onClick={handleReset}
                className="
          w-full bg-red-500 hover:bg-red-600
          text-white font-semibold py-2 rounded-lg transition-all
        "
            >
                Resetear simulación
            </button>

            <p className="text-xs text-slate-400 text-center">
                PLACE_ROBOT X,Y,DIRECTION · PLACE_WALL X,Y
            </p>
        </div>
    )
}
