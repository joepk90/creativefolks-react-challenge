const Button = ({ children, ...rest }) => {
    return (
        <button
            type="button"
            className="btn btn-primary" {...rest}
        >{children}</button>
    );
}

export default Button;