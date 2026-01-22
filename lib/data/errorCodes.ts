import badRequest from '@/public/badRequest.svg'


export const codes = {
    400: { title: "Bad Request", reason: "Petición mal formada", blame: "Usuario / Navegador", image: badRequest },
    401: { title: "Unauthorized", reason: "Falta iniciar sesión", blame: "Usuario", image: badRequest },
    403: { title: "Forbidden", reason: "No tienes permisos", blame: "Usuario (Nivel de acceso)", image: badRequest },
    500: { title: "Internal Error", reason: "El código falló", blame: "Servidor (Desarrollador)", image: badRequest },
    502: { title: "Bad Gateway", reason: "Error de comunicación", blame: "Servidor (Infraestructura)", image: badRequest },
    503: { title: "Unavailable", reason: "Sobrecarga / Mantenimiento", blame: "Servidor", image: badRequest },
    504: { title: "Timeout", reason: "Se tardó demasiado", blame: "Servidor Objetivo", image: badRequest },
};
