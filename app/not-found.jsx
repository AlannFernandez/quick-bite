import Link from 'next/link';

export default function NotFound(){
    return (
        <div>
            pagina no encontrada
            <Link href="/">
                Ir a inicio
            </Link>
        </div>
    )
}