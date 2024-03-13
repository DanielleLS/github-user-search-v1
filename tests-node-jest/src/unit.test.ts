import { describe, expect, test } from "@jest/globals"
import { User } from '../../src/pages/User/User'

describe('testing user file', () =>{
    test('return user Error', () =>{
       const user = User
       expect(user.arguments('error').text()).toContain('Ops, something went wrong')
    })

    test('special character', () =>{
        const user = User
        expect(user.arguments('@@@@').text()).toContain('Ops, something went wrong')
     })

     test('user with number', () =>{
        const user = User
        expect(user.arguments('12345').text()).toContain('Ops, something went wrong')
     })

     test('reposError', () =>{
        const user = User
        expect(user.arguments('daniellelopes182').text()).toContain('Ops, something went wrong')
     })

     test('reposError', () =>{
        const user = User
        expect(user.arguments('daniellelopes182').text()).toContain('Ops, something went wrong')
     })

     test('isFetchingUser', () =>{
        const user = User
        expect(user.arguments('teste').text()).toContain('Look who we found')
     })

     test('isFetchingRepos', () =>{
        const user = User
        expect(user.arguments('tststststststststs').text()).toContain('Look who we found')
     })
})
