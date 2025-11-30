import { useEffect } from 'react';

export default function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const mouse = e => {
            const x = e.clientX;
            const y = e.clientY;
            cursor.style.transform = `translate(${x}px, ${y}px)`;
        };

        window.addEventListener('mousemove', mouse);

        return () => {
            window.removeEventListener('mousemove', mouse);
        };
    }, []);

    return (
        <>
            <ul id="cursor">
                <li className="cursor-dot"></li>
            </ul>
        </>
    )
}