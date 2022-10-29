import PropTypes from "prop-types";

function NameProps(props) {
    return ( <h1 style={{ fontSize: 99 }}>{props.name}</h1>
        
     );
}
NameProps.propTypes ={
    name: PropTypes.string.isRequired,
};
NameProps.defaultProps={
    title:"THE LIMBO",
}

export default NameProps;