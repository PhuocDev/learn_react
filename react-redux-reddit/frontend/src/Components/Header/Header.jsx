import './header.css';

const Header = (props) => {
    const {setEdit} = props;
    const handleEdit = () =>{
        setEdit(true);
    }
    return ( 
        <>
            <header style={{backgroundColor:"#ff9051", backgroundImage:'linear-gradient(180deg,#ff9051 2%, #ff9051, 65%, #181818 95%'}}>
                <div className="info-container">
                    <div className="info-edit" onClick={handleEdit}>
                        Edit
                    </div>
                    <img src="https://preview.redd.it/coupmnvtixh61.png?auto=webp&s=d243ec2e22c435f455f06d8672f297cea98529f5" alt="reddit_avatar" className="info-ava" />
                    <div className="info-username">
                        Phuoc Bui
                    </div>
                    <div className="info-age">
                        22
                    </div>
                    <div className="info-about">
                        About
                    </div>
                </div>
            </header>
        </>
     );
}
 
export default Header;