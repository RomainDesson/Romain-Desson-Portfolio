import './index.css'

export const Tooltip = ({ children, text }: any) => {
    return (
        <div className="tooltip-container">
            {children}
            <span className="tooltip-text">{text}</span>
        </div>
    );
};
