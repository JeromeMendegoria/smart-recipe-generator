import emptyIcon from "../../assets/empty.png"


// get the ingredients
// fetch to API


const WhatCanCook = () => {

    const empty= true

    return (
        (empty ? <div className="h-[100%] flex justify-center items-center">
            <img src={emptyIcon} alt="empty icon" className="w-[300px] h-[300px]" />
        </div> : <div></div>)
    )
}

export default WhatCanCook