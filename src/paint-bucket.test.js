import {expect} from 'chai';
import {paintBucket} from './paint-bucket';

describe('paintBucket - basic functionality', ()=>{
    it('returns the same output as input when the cell selected is already the color selected',()=>{
        const expected = [[0, 1, 0],[0, 0, 1],[0, 1, 1]];
        const actual = paintBucket([[0, 1, 0],[0, 0, 1],[0, 1, 1]],0,[0,0]);
        expect(actual).to.deep.equal(expected);
    });
    it('returns the correct output when the cell selected is not the color selected',()=>{
        const expected = [[1, 1, 0],[1, 1, 1],[1, 1, 1]];
        const actual = paintBucket([[0, 1, 0],[0, 0, 1],[0, 1, 1]],1,[0,0]);
        expect(actual).to.deep.equal(expected);
    });
    it('returns the correct output when the cell selected is not the color selected and the input is a large array',()=>{
        const expected = [[0, 1, 1, 1, 1, 1, 1],[0, 1, 1, 1, 1, 1, 1],[0, 1, 1, 1, 1, 1, 1]];
        const actual = paintBucket([[0, 1, 1, 1, 0, 0, 0],[0, 1, 0, 0, 0, 1, 0],[0, 1, 1, 1, 0, 0, 0]],1,[0,4]);
        expect(actual).to.deep.equal(expected);
    });
    it('returns the correct output when the cell selected is not the color selected and the input is a really large array',()=>{
        const expected = [[0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],[0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
        const actual = paintBucket([[0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],[0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],[0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0],[0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],[0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0]],1,[0,27]);
        expect(actual).to.deep.equal(expected);
    });
});