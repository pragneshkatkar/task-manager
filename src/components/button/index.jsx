import Icon from "../icon";

export default function Button(props) {
    const {
        text,
        variant,
        icon,
        attrs,
        additionalClasses,
        leftIcon,
        rightIcon,
    } = props;

    let btnClasses;
    switch (variant) {
        case "primary":
            btnClasses = "btn-primary";
            break;
        case "outline":
            btnClasses = "btn-outline";
            break;
        case "link":
            btnClasses = "btn-link";
            break;
        case "disabled":
            btnClasses = "btn-disabled";
            break;
        case "white":
            btnClasses = "btn-white";
    }
    return (
        <button
            className={`btn${
                icon ? " icon-btn" : ""
            } ${btnClasses} ${additionalClasses}`}
            {...attrs}
        >
            {leftIcon && <Icon icon={leftIcon} />}
            {icon ? <Icon icon={icon} /> : <p>{text}</p>}
            {rightIcon && <Icon icon={rightIcon} />}
        </button>
    );
}
