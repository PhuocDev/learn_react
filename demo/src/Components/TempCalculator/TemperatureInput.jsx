const TemperatureInput = (props) => {
    

    return ( 
        <div className="box_input" title={props.title}>
            <span>Enter temp in {props.title}   </span>
            <input value={props.value} type="number" onChange={props.onChange} />
        </div>
    );
}
 
export default TemperatureInput;