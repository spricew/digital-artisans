import badRequest from '@/public/badRequest.svg';
import unautorized from '@/public/unauthorized.png';
import forbidden from '@/public/forbidden.png';
import internalError from '@/public/internalError.png';
import badGateway from '@/public/badGateway.png';
import unavailable from '@/public/unavailable.png';
import timeout from '@/public/timeout.png';

export const codes = {
    400: { title: "Bad Request", reason: "Petición mal formada", blame: "Usuario / Navegador", image: badRequest },
    401: { title: "Unauthorized", reason: "Falta iniciar sesión", blame: "Usuario", image: unautorized },
    403: { title: "Forbidden", reason: "No tienes permisos", blame: "Usuario (Nivel de acceso)", image: forbidden },
    500: { title: "Internal Error", reason: "El código falló", blame: "Servidor (Desarrollador)", image: internalError },
    502: { title: "Bad Gateway", reason: "Error de comunicación", blame: "Servidor (Infraestructura)", image: badGateway },
    503: { title: "Unavailable", reason: "Sobrecarga / Mantenimiento", blame: "Servidor", image: unavailable },
    504: { title: "Timeout", reason: "Se tardó demasiado", blame: "Servidor Objetivo", image: timeout },
};
