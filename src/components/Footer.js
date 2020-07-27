import React from "react";

class Footer extends React.Component {


    render() {
        return (
            <div>
                <footer>
                    <ul>
                        <li className="score">
                            Your Current Score: 
                    </li>
                        <li>
                            Top Score:
                    </li>
                    </ul>
                </footer>
            </div>
        )
    }
}

export default Footer;