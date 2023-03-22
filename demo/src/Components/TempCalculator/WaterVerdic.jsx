import PropTypes from 'prop-types'; // ES6

const WaterVerdic = (props) => {
    const {tempC, tempF } = props;
    let result;
    if (tempC >= 100 || tempF >= 212 ) {
        result = "boil";
    } else if (tempC === '') {
        result = "be unidentify";
    } else
        result = "not boil";
    return ( 
        <div className="box_result">
            <h2>
                The water would {result}
            </h2> 
        </div>
    );
}
// eslint-disable-next-line react/no-typos
WaterVerdic.propTypes = {
    tempC: PropTypes.number.isRequired
}
 
export default WaterVerdic;