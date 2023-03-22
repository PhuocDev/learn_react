const AuthorList = (props) => {
    const {data, keyword} = props;
    return ( 
        <div>
            <ul>
                {   
                    data
                    .filter((singleData) => singleData.author.includes(keyword))
                    .map((singleData, index) => 
                        <li key={singleData._id}>
                            {singleData.author}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}
 
export default AuthorList;