const UserService = require("./../../app/services/userService")

describe("Test for UserService",() => {
    test("1. Create a new user using the UserService", () =>{
        const user = UserService.create(1,"lizethconu","liz")
        expect(user.id).toBe(1)
        expect(user.username).toBe("lizethconu")
        expect(user.name).toBe("liz")
    });

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"lizethconu","liz")
        const userInfoInList = UserService.getInfo(user);
        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("lizethconu")
        expect(userInfoInList[2]).toBe("liz")
        expect(userInfoInList[3]).toBe("Sin bio")
    })

    test("3. update username", () => {
        const user = UserService.create(1,"lizethconu","liz")
        UserService.updateUserName(user,"liz001");
        expect(user.username).toBe("liz001")
    })

    test("4. Given a list of users", () => {
        const user1 = UserService.create(1,"lizethconu1","liz")
        const user2 = UserService.create(1,"lizethconu2","liz")
        const user3 = UserService.create(1,"lizethconu3","liz")
        const usernames = UserService.getAllUsersnames([user1,user2,user3])
        console.log(usernames)
        expect(usernames).toContain("lizethconu1")
        expect(usernames).toContain("lizethconu2")
        expect(usernames).toContain("lizethconu3")
    })
})

