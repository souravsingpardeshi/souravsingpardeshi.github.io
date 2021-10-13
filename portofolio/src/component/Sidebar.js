import React from 'react'

function Sidebar() {
    return (
        <div className="Sidebar">
            <p  style={{borderBottom:"2px solid #2b323b",width:"92vw",position:"relative",top:"1rem",zIndex:"0"}}></p>
            <img style={{zIndex:"1"}} src="https://avatars.githubusercontent.com/u/63045639?s=400&u=61a78eaacc499a2f1026442b5b10355886a7af2b&v=4" alt="img" />
            <h1>Souravsing Pardeshi</h1>
            <p style={{borderBottom:"3px solid #2b323b"}}>"I SEE THE BEAUTY IN THE RULES, THE INVISIBLE CODE OF CHAOS, HIDING BEHIND THE MENACING FACE OF ORDER"🙃.</p>
            <p id="loc">@India</p>
            <p id="pos">Software developer</p>
                <h2 className="high">Highlight</h2>
                <h2>Github Student developer</h2>
                <h2>B.Tech student at MITCORER</h2>
            </div>
        
    )
}

export default Sidebar
