const TextArea = ({ rows, ...rest }) => {
    return (
        <textarea className="form-control my-2" rows={rows} {...rest}></textarea>
    );
}

export default TextArea;

TextArea.defaultProps = {
    rows: 3
}
