import './main.css';

const DateDisplay = (props) => {
    const {date} = props;
    return ( 
        <section className="date-display">
        The date picked: {date}
        </section>
     );
}
 
export default DateDisplay;