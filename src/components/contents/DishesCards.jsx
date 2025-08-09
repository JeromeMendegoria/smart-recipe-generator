// json file as arguments

const DishesCards = ({image, title, description}) => {

    return (
        <div className="flex bg-[#f7f1e3] min-h-[100px] gap-[.5rem] py-[0.3rem] px-[.5rem] rounded-[10px]">
            <div className="border w-[30%] bg-amber-300 rounded-[7px]">
                {/* <img src={sample} alt="sample" className="w-[100%]"/> */}
            </div>
            <div className="flex-[70%]">
                <div className="flex justify-between items-center">
                    <h3 className="font-[800] ">Adobong Baboy</h3>
                    <i className="fa-solid fa-bookmark"></i>
                </div>
                <p className="text-[.7rem]">Tender pork braised in soy sauce, vinegar, garlic, and spices—a rich, savory Filipino favorite.Adobong Baboy</p>
            </div>
        </div>
    )
}

export default DishesCards