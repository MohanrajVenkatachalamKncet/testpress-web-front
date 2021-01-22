import axios from "axios";
import {useSelector} from 'react-redux'
export const Question_API = async () => {
    try {
        const {data} = await axios.get(`https://opentdb.com/api.php?amount=10`);
        return await data.results;
    } catch (err) {
        console.log(err)
    }
};

export const CreateUserScore = async (username,score) => {
    const name=username;
    const sc=score;
    try {

        const respo = await axios.post(
            `http://localhost:5000`,{username:name,score:sc},
            {
                withCredentials: true,
            }
        );
        const data = respo.data;
        console.log(data);
        return { data };
    } catch (err) {
        return { result: err };
    }
}

export const ReadUserScore = async () => {
    
    // const userscore = useSelector(state => state);
    // const {dispatch} = useDispatch();
    try {
        const respo = await axios.get(
            `http://localhost:5000/getUserScore`,
            {
                withCredentials: true,
            }
        );
            
        const data = respo.data;
        //console.log(data)
        // dispatch(setUserScore(respo))
        // console.log(userscore)
        return data;
    } catch (err) {
        return { result: err };
    }
}



