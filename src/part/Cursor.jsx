import { useEffect } from 'react';

export default function Cursor() {
    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const mouse = e => {
            const x = e.clientX - cursor.offsetWidth / 2;
            const y = e.clientY - cursor.offsetHeight / 2;
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