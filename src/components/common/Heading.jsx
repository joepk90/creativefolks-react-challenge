const Heading = ({ children, level }) => {

    const Component = !level ? 'h1' : `h${level}`;

    return <Component>{children}</Component>
}

export default Heading;