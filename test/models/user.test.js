const User = require('./../../app/models/user')
/*
describe("Unit Test for User class",()=>{
    test('create an User Object',() =>{
        //invoke the code
        const user = new User(1,"lizethconu","liz","Bio","dateCreated","lastUpdated")
        //results of code
        expect(user.id).toBe(1)
        expect(user.username).toBe("lizethconu")
        expect(user.name).toBe("liz")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).toBe("dateCreated")
        expect(user.lastUpdated).toBe("lastUpdated")
    });
})*/

describe("Requerimiento 2", ()=>{
    test('Create an user Object',()=>{
        //invoke the code
        const user = new User(1,"lizethconu","liz","Bio")

        expect(user.id).toBe(1)
        expect(user.username).toBe("lizethconu")
        expect(user.name).toBe("liz")
        expect(user.bio).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('add getters',()=>{
        //invoke the code
        const user = new User(1,"lizethconu","liz","Bio")

        expect(user.getId()).toBe(1)
        expect(user.getUsername()).toBe("lizethconu")
        expect(user.getName()).toBe("liz")
        expect(user.getBio()).toBe("Bio")
        expect(user.dateCreated).not.toBeUndefined()//verifica que el valor no sea undefined
        expect(user.lastUpdated).not.toBeUndefined()
    });

    test('Add setters', () =>{
        const user= new User(1,"lizethconu","liz","Bio")
        user.setUsername("liz001")
        expect(user.username).toBe("liz001")

        user.setBio("Hello")
        expect(user.bio).toBe("Hello")

    });
    
})
