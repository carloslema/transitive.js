/* globals describe, expect, it */

import util from '../../lib/util'

describe('util', () => {
  it('addVectors should work', () => {
    const vec1 = { x: 1, y: 2 }
    const vec2 = { x: 3, y: 4 }
    expect(util.addVectors(vec1, vec2)).toEqual({ x: 4, y: 6 })
  })
})
