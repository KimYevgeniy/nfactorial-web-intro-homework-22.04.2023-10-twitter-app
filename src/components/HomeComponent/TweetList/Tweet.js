import { COMMENT_SVG, DOGE_PNG, LIKE_SVG, RETWEET_SVG, SHARE_SVG } from "../images";

export default function Tweet( item ){
    return (
        <div className="mt-3 mx-3" style={{borderBottom: '2px solid whitesmoke'}}>
            <p className='mx-5' style={{fontSize: 13, fontWeight:'600'}}>You might like! <span style={{color: "blue"}}> See more </span></p>
            <div className="d-flex">
                <img src={ item.img } style={{width:50, height:50, borderRadius:50}}/>
                <div className="mx-3">
                    <p style={{fontWeight:600}}>{item.authorName} <span style={{opacity:0.5}}>{item.authorUsername}</span></p>
                    <p>{item.content}</p>
                </div>
                
            </div>
            <div className="d-flex justify-content-between m-auto" style={{width: '80%'}}>
                <div className="d-flex"> 
                    <div style={{width:20, height:20}}>{COMMENT_SVG}</div>
                    <p className="px-1"> {item.replies}</p>
                </div>
                <div className="d-flex"> 
                    <div style={{width:20, height:20}}>{RETWEET_SVG}</div>
                    <p className="px-1"> {item.retweet}</p>
                </div>
                <div className="d-flex"> 
                    <div style={{width:20, height:20}}>{LIKE_SVG}</div>
                    <p className="px-1"> {item.likes}</p>
                </div>
                <div className="d-flex"> 
                    <div style={{width:20, height:20}}>{SHARE_SVG}</div>
                </div>
            </div>
        </div>
    )
}