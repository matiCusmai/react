



const SelectTalle = ({setTalle}) => {

    
    const handleSelect = (e) => {
        setTalle(e.target.value)
    }

    return (

            <select className="select" onChange={handleSelect}>
                <option value="S">Small</option>
                <option value="M">Medium</option>
                <option value="L">Large</option>
            </select>


    )
}

export default SelectTalle