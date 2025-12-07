import { useEffect } from 'react';

export default function Cursor({ isGetStartedHovered, isCard }) {
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

    useEffect(() => {
        const cursor = document.getElementById("cursor");
        const cursorDot = document.querySelector(".cursor-dot");
        const btn = document.querySelector(".getstarted");
        const card = document.querySelector(".card");
        if (isGetStartedHovered) {
            const rect = btn.getBoundingClientRect();
            cursorDot.style.display = "none";
            // cursor.style.height = "100px";
            // cursor.style.width = "300px";
            cursor.style.width = rect.width + "px";
            cursor.style.height = rect.height + "px";
            // cursor.style.transform = "translate(-50%, -50%)";
            cursor.style.border = "3px solid var(--bgw)";
            cursor.style.borderRadius = "100px";
            // cursor.style.backgroundColor = "var(--bgw)";
            cursor.style.transition = "height 0.2s ease, width 0.2s ease, border-radius 0.2s ease";
        }
        else if (isCard) {
            const rect = card.getBoundingClientRect();
            cursor.style.height = rect.height + "px";
            cursor.style.width = rect.width + "px";
            // cursor.style.transform = "translate(-50%, -50%)";
            cursor.style.border = "3px solid var(--bgw)";
            cursor.style.borderRadius = "0px";
            // cursor.style.backgroundColor = "var(--bgw)";
            cursor.style.transition = "height 0.2s ease, width 0.2s ease, border-radius 0.2s ease";
        } else {
            cursor.style.height = "45px";
            cursorDot.style.display = "block";
            cursor.style.border = "1px solid var(--bgw)";
            cursor.style.width = "45px";
            cursor.style.borderRadius = "50%";
            cursor.style.backgroundColor = "transparent";
        }
    }, [isGetStartedHovered, isCard]);

    return (
        <>
            <ul id="cursor">
                <li className="cursor-dot"></li>
            </ul>

            {/* <p id="cursorname">Repofy</p> */}
        </>
    )
}