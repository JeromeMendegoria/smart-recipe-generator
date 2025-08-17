const StepCards = ({ data }) => {
    if (!data || data.length === 0) return null
    const dish = data[0]

    console.log(dish)

    return (
        <ul className="flex flex-col gap-1.5 pt-6">
            {dish.steps.map((items, index) => (
                <li key={index} className="bg-white rounded-[20px] p-4">
                    <div className="flex gap-1 mb-[15px] text-[.8rem]">
                        <div className="py-1 px-2 bg-[#fec5f6] text-white font-[600] rounded-[5px]">Step {items.step_number}</div>
                        <div className="py-1 px-2 bg-[#fec5f6] text-white font-[600] rounded-[5px]">Duration {items.duration}</div>
                    </div>
                    <div className="text-[.9rem]">
                        {items.instruction}
                    </div>
                </li>
            ))}
        </ul>

    )
}

export default StepCards