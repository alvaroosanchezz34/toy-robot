import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="min-h-screen bg-slate-900 flex items-center justify-center p-4">
            <div className="max-w-xl w-full bg-slate-800 rounded-2xl shadow-2xl p-8 text-center space-y-6">

                {/* Title */}
                <h1 className="text-3xl font-bold text-white">
                    🤖 Toy Robot Simulator
                </h1>

                {/* Description */}
                <p className="text-slate-400 leading-relaxed">
                    Simula el comportamiento de un robot sobre un tablero 5x5.
                    Podrás colocarlo, moverlo, girarlo y comprobar su posición
                    en tiempo real.
                </p>

                {/* Features */}
                <ul className="text-slate-300 text-sm space-y-2">
                    <li>• Comandos interactivos</li>
                    <li>• Control de límites del tablero</li>
                    <li>• Feedback visual de errores</li>
                </ul>

                {/* CTA */}
                <Link to="/game">
                    <button className="mt-4 w-full bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-semibold py-3 rounded-xl transition-all">
                        ▶️ Empezar simulación
                    </button>
                </Link>

            </div>
        </div>
    )
}
