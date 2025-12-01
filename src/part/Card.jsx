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
            name: 'FormatFix™',
            des: "Automatically cleans up formatting to match academic rules.",
            icon: 'bx bx-slider-alt',
        },
        {
            color: '--pi',
            name: 'ControlHub™',
            des: "Your space to manage, store, and track all your reports.",
            icon: 'bx bx-category',
        },
    ];

    const cards = card.map((c) => {
        return (
            <ul className="card" style={{ borderColor: `var(${c.color})` }}>
                <i className={c.icon} style={{ color: `var(${c.color})` }}></i>
                <li style={{ color: `var(${c.color})` }}>{c.name}</li>
                <li style={{ color: `var(${c.color})` }}>{c.des}</li>
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