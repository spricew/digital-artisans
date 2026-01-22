'use client'

import { Info, CircleQuestionMark, RotateCcw } from 'lucide-react';

const ERROR_CODES = {
    400: { title: "Bad Request", simple: "Petición mal formada", blame: "Usuario / Navegador" },
    401: { title: "Unauthorized", simple: "Falta iniciar sesión", blame: "Usuario" },
    403: { title: "Forbidden", simple: "No tienes permisos", blame: "Usuario (Nivel de acceso)" },
    500: { title: "Internal Error", simple: "El código falló", blame: "Servidor (Desarrollador)" },
    502: { title: "Bad Gateway", simple: "Error de comunicación", blame: "Servidor (Infraestructura)" },
    503: { title: "Unavailable", simple: "Sobrecarga / Mantenimiento", blame: "Servidor" },
    504: { title: "Timeout", simple: "Se tardó demasiado", blame: "Servidor Objetivo" },
};

export default function GlobalError({
    error,
    reset,
}: {
    error: Error
    reset: () => void
}) {

    const errorCode = Object.keys(ERROR_CODES).find(code => error.message.includes(code)) || 500;

    // @ts-ignore - se ignora el typescript por el indexado de string
    const info = ERROR_CODES[errorCode];

    return (
        <div className="flex flex-col items-center justify-center gap-4 h-screen">
            <h2 className='text-6xl font-medium text-onPrimaryContainer'>{errorCode} - {info.title}</h2>

            <div className="flex items-center justify-center gap-4 w-full">

                <div className="squircle flex justify-start items-center gap-3 p-6 min-w-fit w-64 h-24 rounded-xl bg-surfaceContainerHigh">
                    <CircleQuestionMark className="size-10 text-onPrimaryContainer" strokeWidth={2.2} />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-onPrimaryContainer">Significado:</span>
                        <p className="">{info.simple}</p>
                    </div>
                </div>

                <div className="squircle flex justify-start items-center gap-3 p-6 min-w-fit w-64 h-24 rounded-xl bg-surfaceContainerHigh">
                    <Info className="size-10 text-onPrimaryContainer" strokeWidth={2.2} />
                    <div className="flex flex-col">
                        <span className="text-2xl font-semibold text-onPrimaryContainer">La culpa es de:</span>
                        <p className="">{info.blame}</p>
                    </div>
                </div>

            </div>


            <button
                onClick={reset}
                className="flex items-center justify-center gap-3 px-5 py-2.5 mt-2 rounded-full
                 bg-primaryContainer text-onPrimaryContainer
                transition ease-out duration-300 hover:scale-105 cursor-pointer"
            >
                <RotateCcw className="size-5 text-onPrimaryContainer" strokeWidth={2.2} />
                Intentar de nuevo
            </button>
        </div>
    )
}