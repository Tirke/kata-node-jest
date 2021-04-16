import { World } from "../src/world";

describe('World', ()=> {
    let world: World

    beforeEach(() => {
        world = new World()
    })

    it('is called Earth', ()=> {
        expect(world.getName()).toBe('Earth')
    })
})
