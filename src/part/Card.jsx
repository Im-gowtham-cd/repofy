export default function Card() {
    const card = [
        {
            color: '--bg',
            name: 'SmartCheck™',
            des: "AI that reviews your report and boosts clarity instantly.",
            icon: 'bx bx-brain',
        },
        {
            color: '--pi',
            name: 'NoCap Originality™',
            des: "Instant plagiarism scan to confirm your work is 100% legit.",
            icon: 'bx bx-shield-quarter',
        },
        {
            color: '--p',
            name: 'Format Fix™',
            des: "Automatically cleans up formatting to match academic rules.",
            icon: 'bx bx-slider-alt',
        },
        {
            color: '--pin',
            name: 'Control Hub™',
            des: "Your space to manage all your reports.",
            icon: 'bx bx-category',
        },
    ];

    const cards = card.map((c) => {
        return (
            <ul className="card" style={{ backgroundColor: `var(${c.color})` }}>
                <i className={c.icon} style={{ color: `var(--fg)` }}></i>
                <li style={{ color: `var(--fg)` }}>{c.name}</li>
                <li style={{ color: `var(--fg)` }}>{c.des}</li>
            </ul>
        )
    })
    return (
        <>
            <div className="CardContainer">
                {cards}
            </div>
        </>
    )
}