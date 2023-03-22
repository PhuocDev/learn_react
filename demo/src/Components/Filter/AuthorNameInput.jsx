
const AuthorNameInput = (props) => {
    return ( 
        <form className="searchBox m-5 p-2 w-60%" onSubmit={props.onSubmit}>
            <input onChange={props.onChange} className="form-control" type="text" placeholder="Search for ..."/>
        </form>
    );
}
 
export default AuthorNameInput;