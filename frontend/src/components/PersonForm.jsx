const PersonForm = (props) => {
    
    return(
        <form onSubmit={props.handleSubmit}>

            <div>
                Name: <input value={props.newName} onChange={props.handleNameChange}/>
                <br />
                Number: <input value={props.newNumber} onChange={props.handleNumberChange}/>
            </div>

            <div>
                <button type="submit">add</button>
            </div>

      </form>
    )
}
export default PersonForm