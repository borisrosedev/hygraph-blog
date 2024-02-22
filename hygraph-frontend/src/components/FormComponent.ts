import InputComponent from "./InputComponent"
export default  function(inputs:any){
    return(
        `
            <form>
                ${inputs.map((input:any) => InputComponent(input) ).join('')}
            </form>
        
        `
    )
}