
export default function MenuItem( {item} ){
    return (
        <div className='d-flex my-3'>
            <div className='icon'>
                { item.icon }
            </div>
            <p className='mx-3' style={{fontSize: 20}}>{item.name}</p>
        </div>
        )
}