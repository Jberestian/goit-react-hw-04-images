const TextFields = ({
  value,
  type,
  name,
  placeholder,
  required,
  autoFocus,
  className,
  autoComplete,
  onChange,
}) => {
  return (
    <input
      type={type}
      value={value}
      name={name}
      placeholder={placeholder}
      autoFocus={autoFocus}
      required={required}
      className={className}
      autoComplete={autoComplete}
      onChange={onChange}
    />
  );
};

export default TextFields;
