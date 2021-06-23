import React, { useContext, useRef } from 'react'
import { useDetectOutsideClick } from './useDetectOutsideClick'
import { SongContext } from "../context/SongContext"


function DropdownSort() {
    const dropdownRef = useRef(null);
    const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
    const onClick = () => setIsActive(!isActive);
    const { dispatch } = useContext(SongContext)

    return (
        <div className="container">
            <div className="menu-container">
                <button onClick={onClick} className="menu-trigger">
                    <span>Sort by:</span>

                </button>
                <nav
                    ref={dropdownRef}
                    className={`menu ${isActive ? "active" : "inactive"}`}
                >
                    <ul>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_TITLE_ASC" })}
                            >
                                Sort title A - Z
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_TITLE_DES" })}
                            >
                                Sort title Z - A
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_ARTIST_ASC" })}

                            >Sort artist A - Z</button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_ARTIST_DES" })}
                            >
                                Sort artist Z - A
                            </button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_GENRE_ASC" })}

                            >Sort genre A - Z</button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_GENRE_DES" })}

                            >Sort artist Z - A</button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_RATING_ASC" })}

                            >Sort artist 1 - 5</button>
                        </li>
                        <li>
                            <button
                                onClick={() => dispatch({ type: "SORT_RATING_DES" })}

                            >Sort artist 5 - 1</button>
                        </li>

                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default DropdownSort
