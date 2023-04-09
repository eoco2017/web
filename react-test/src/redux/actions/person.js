import {AddPerson} from '../constant'

export const addPerson = (person)=>(
    {
        type:AddPerson,
        data:person
    }
)

