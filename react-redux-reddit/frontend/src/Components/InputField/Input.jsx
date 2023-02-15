import "../Edit/edit.css";

const Input = (props) => {
    const {data, setData, label, classStyle, inputType} = props;

    return ( 
        <>
            <label>{label}</label>
            {   
                (inputType === "textarea") ? (
                    <> 
                        <textarea className={classStyle} onChange={(e) => setData(e.target.value)}></textarea>
                    </>
                ) : (
                    <input type="text" placeholder={data} onChange={(e) => setData(e.target.value)}/>
                )
            }
            
        </>
     );
}
 
export default Input;