import { useState } from 'react';
import Input from '../InputField/Input';
import './edit.css';

const EditPage = (props) => {
    const { setEdit } = props;

    const avaUrls = [
        "https://www.kindpng.com/picc/m/397-3977176_snoo-avatar-reddit-custom-snoo-png-download-reddit.png",
        "https://preview.redd.it/w7rm34sdm8a71.png?width=587&format=png&auto=webp&s=986bd66673b1ae29e7f4532424396fcd46f3b72d",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpbXbF__2oOQWLC6gpKMfpzKdj_rWX3IiwMQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlANO_nid64m6eLYnFYVVsTcz6SAKPVLrKzg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKPxsApWAmM9Ri54htdUIv9XC7V-gr7XrLA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfRvjz-mDyzeU600jLTuOevVfJo_vvaOdyPA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiU3eYBT4masR_vXjUlFxjoOsvFlSw36vIEg&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-FrxWrzwKkibDENgBLaWcnvqmtBHojMZmIw&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB7O1Td6ngqOkDGi2zcFRbcXpxbqsYxyj1CA&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTleI4qPVlNQ56zz8Z2RwkBkNgCZwMmkog9XQ&usqp=CAU",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk27uAF6w3-c7gzaTP1-R-GinsmxrlGIs79A&usqp=CAU",
    ]

    const [name, setName] = useState("Phuoc");
    const [age, setAge] = useState("22");
    const [about, setAbout] = useState("I am a software engineer");
    const [theme, setTheme] = useState("#ff9051");
    const [url, setUrl] = useState("https://www.kindpng.com/picc/m/397-3977176_snoo-avatar-reddit-custom-snoo-png-download-reddit.png");

    const handleSubmit = (e) => {
        e.preventDefault();
        setEdit(false);
    }
    return ( 
        <>
            <form onSubmit={() => handleSubmit}>
                <section className="edit-container">
                    <button className="close" >Save</button>
                    <div className="edit-profile">Edit profile</div>
                    <div className="input-container">

                        <Input label="Username" data={name} setData={setName} />
                        <Input label="Age" data={age} setData={setAge}/>
                        <Input label="About" data={about} setData={setAbout} inputType="textarea" classStyle="input-about" />
                        {/* <label>Username</label>
                        <input type="text" placeholder="Bui Phuoc" onChange={(e) => setName(e.target.value)}/> */}
                        {/* <label >Age</label>
                        <input type="text" placeholder="22" onChange={(e) => setAge(e.target.value)}/> */}
                        {/* <label >About</label>
                        <textarea className="input-about" onChange={(e) => setAbout(e.target.value)}>
                        </textarea> */}
                        <label >Profile pictures</label>
                        <div className="input-image-container">
                            {avaUrls.map((url) => {
                                return(
                                    <>
                                        <img onClick={(e) => setUrl(e.target.src)} src={url} key={url.slice(0,5)} alt="gallery" className='input-image' />
                                    </>
                                )
                            })}
                        </div>
                        <Input classStyle="theme-container" label="Theme" inputType="color" data={theme} setData={setTheme}/>
                        {/* <div className="theme-container">
                            <label> Theme</label>
                            <input type="color" className='theme-color' onChange={(e) => setTheme(e.target.value)} />
                        </div> */}
                    </div>
                </section>
            </form>
        </>
     );
}
 
export default EditPage;