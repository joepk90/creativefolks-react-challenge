const Heading = ({ children, level, ...rest }) => {

    const Component = !level ? 'h1' : `h${level}`;

    return <Component {...rest}>{children}</Component>
}

export default Heading;