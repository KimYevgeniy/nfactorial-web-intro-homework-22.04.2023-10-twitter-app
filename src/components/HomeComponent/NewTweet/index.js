import { DOGE_PNG } from "../images";

export default function NewTweet(){
    return (
        <div className="p-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <img src={DOGE_PNG} style={{width: 50, heigth: 50, minHeight: 50, minWidth: 50, borderRadius: 50}}/>
            <input placeholder="What's happening?" style={{border: 'none', fontSize: 18, outline: 'none'}} className='mx-3'/>
        </div>
    )
}