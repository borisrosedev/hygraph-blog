// @vitest-environment jsdom
import { expect, test, describe } from 'vitest'
import HomePage from '../pages/HomePage'
import {
    screen,
  } from '@testing-library/dom'



describe.skip("DOM Suite", () => {

    describe("Window", () => {
        test('test', () => {
            expect(typeof window).not.toBe('undefined')
        })


    })


    describe("Body", () => {

        test("Body should exist", () => {
            const body = document.getElementsByTagName("body")[0];
            expect(typeof body).not.toBe("undefined");
        })
    })

    describe("App", () => {

        test("App should exist", () => {
            const body = document.getElementsByTagName("body")[0];
            const app:HTMLDivElement = document.createElement("div");
            app.id = "app" 
            expect(typeof app).not.toBe("undefined");
        })
    })


  


})



describe('Home Suite', () => {

    describe('Home View Suite', () => {
        const body = document.getElementsByTagName("body")[0];
        const app:HTMLDivElement = document.createElement("div");
        app.id = "app" 
        body.appendChild(app);
        app.innerHTML = HomePage();
   
        test('a h1 should exist', () => {
            expect(screen.getByText('Page d\'accueil')).toBeTruthy()
        })
    })

    describe('Home Container', () => {

    })



})