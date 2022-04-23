const {threeSumClosest} = require('./index')


test('min问题', ()=>{
    expect(threeSumClosest([-1, 2, 1, -4], 1)).toBe(2)
    expect(threeSumClosest([0,0,0], 1)).toBe(0)
})
