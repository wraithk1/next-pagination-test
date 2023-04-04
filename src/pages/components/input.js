
export default function Input({
    disabled,
    className,
    handleChange,
    text,
}) {
    return (
        <input
            disabled={disabled}
            className={className}
            value={text}
            handleChange={handleChange}
        />
    );
}