import i1 from '../assets/image/Report.png'
export default function Hero({ setIsGetStartedHovered }) {
    return (
        <>
            <div className="HeroSection">
                <ul className="hero">
                    <li>The Intelligent</li>
                    <li>Report Checker</li>
                    <li>for Students <mark className="highlight"> & Institutions</mark></li>
                    <ul
                        className="getstarted"
                        onMouseEnter={() => setIsGetStartedHovered(true)}
                        onMouseLeave={() => setIsGetStartedHovered(false)}
                    >
                        <li><a href="https://drive.google.com/file/d/1hD4Mn_vPAcbIQ5hBO_Kfuz2XA5zb8zQU/view?usp=drive_link" >Download Repofy</a></li>
                        <i class='bxr  bx-arrow-right-stroke-circle' id='arrowright'/>
                    </ul>
                    <img src={i1} alt="" className='heroimage'/>
                </ul>
            </div>
        </>
    )
}