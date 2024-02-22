import { InputInterface } from "../interfaces/Input"
import InputComponent from "./InputComponent"
export default  function(inputs:InputInterface[]){
    return(
        `
            <form>
                ${inputs.map((input) => InputComponent(input) ).join('')}
            </form>
        
        `
    )
}