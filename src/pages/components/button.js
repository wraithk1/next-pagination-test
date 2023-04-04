import btnStyles from '@/styles/components/button.module.css'

export default function Button({
    disabled,
    className,
    handleClick,
    text,
    tagName = 'button'
}) {
    if (tagName === 'button') {
        return (
            <button
                disabled={disabled}
                className={className}
                onClick={handleClick}
            >
                {text}
            </button>
        );
    } else {
        return (
            <a
                disabled={disabled}
                className={className}
                onClick={handleClick}
                href='#'
            >
                {text}
            </a>
        );
    }
}