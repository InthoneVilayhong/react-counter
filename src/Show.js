import { useState } from "react";

const Show = ({ number, setNumber }) => {
    const [isActive, setIsActive] = useState(true);
    const [isOn, setIsOn] = useState(false);

    return (
        <div>
            <div className="show">
                <button
                    className="down"
                    style={{ visibility: isActive ? "hidden" : "visible" }}
                    onClick={() => {
                        if (number === 1) {
                            setIsActive(true);
                        }
                        if (number === 10) {
                            setIsOn(false);
                        }
                        setNumber((number -= 1));
                    }}
                >
                    -
                </button>
                <p className="number">{number}</p>

                <button
                    className="up"
                    style={{ visibility: isOn ? "hidden" : "visible" }}
                    onClick={() => {
                        if (number >= 0) {
                            setIsActive(false);
                        }
                        if (number === 9) {
                            setIsOn(true);
                        }

                        setNumber((number += 1));
                    }}
                >
                    +
                </button>
            </div>
            <div className="reset">
                <button
                    className="reset-button"
                    onClick={() => {
                        setNumber(0);
                        setIsActive(true);
                        setIsOn(false);
                    }}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default Show;
