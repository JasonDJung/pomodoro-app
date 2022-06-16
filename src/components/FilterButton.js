import React from "react"
export default function FilterButton() {
    return (
        <div className="filters btn-group stack-exception">
            <button type="button" className="btn toggle-btn" aria-pressed="true">
                <span className="visually-hidden">Show </span>
                <span>All</span>
                <span className="visually-hidden"> Tasks</span>
            </button>
        </div>
    );
}