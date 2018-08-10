import { fail } from 'assert';
import * as chai from 'chai';
import { } from 'mocha';
import { LinkedList } from './LinkedList';

const expect = chai.expect;

// LinkedList Test
describe('Class: LinkedList', () => {

    let linkedList: LinkedList;

    // add()
    describe('function: add()', () => {

        //
        describe('Given an empty list, when an item is added, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
            });

            // Assert
            it('should should have a length of one.', () => {
                expect(linkedList.length).to.eq(1);
            });
            it('should add the item to the list.', () => {
                expect(linkedList.get(0)).to.eq('one');
            });

        });

        //
        describe('Given a populated list, when an item is added, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
                linkedList.add('two');
            });

            // Assert
            it('should should have a length equal to the number of items added.', () => {
                expect(linkedList.length).to.eq(2);
            });
            it('should should add the item to the end of the list.', () => {
                expect(linkedList.get(1)).to.eq('two');
            });
        });
    });

    // get()
    describe('function: get()', () => {

        //
        describe('Given an empty list, when an item is retreived, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });

            // Assert
            it('should throw an error indicating the list is empty.', () => {
                try {
                    linkedList.get(0);
                    fail();
                } catch (err) {
                    expect(err.message).to.eq('The list is empty.');
                }
            });
        });

        //
        describe('Given a populated list, when an item is retrieved, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
                linkedList.add('two');
            });

            // Assert
            it('should return the item at the index (0).', () => {
                expect(linkedList.get(0)).to.eq('one');
            });
            it('should return the item at the index (1).', () => {
                expect(linkedList.get(1)).to.eq('two');
            });
        });

        //
        describe('Given a populated list, when an item is retrieved from an invalid index, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
                linkedList.add('two');
            });

            // Assert
            it('should throw an error indicating the invalid index if less than 0.', () => {
                try {
                    linkedList.get(-1);
                    fail();
                } catch (err) {
                    expect(err.message).to.eq('Invalid index -1.');
                }
            });
            it('should throw an error indicating the invalid index if greater than the length of the list.', () => {
                try {
                    linkedList.get(5);
                    fail();
                } catch (err) {
                    expect(err.message).to.eq('Invalid index 5.');
                }
            });
        });
    });

    // next()
    describe('function: next()', () => {

        //
        describe('Given an empty list, when the next item is retrieved, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });

            // Assert
            it('should return null.', () => {
                expect(linkedList.next()).to.be.null;
            });
        });

        //
        describe('Given a list with one item, when the next item is retrieved, then it', () => {

            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
            });

            // Assert
            it('should return the one item in the list.', () => {
                expect(linkedList.next()).to.eq('one');
            });
            it('should return the one item in the list after subsequent calls.', () => {
                expect(linkedList.next()).to.eq('one');
            });
        });

        //
        describe('Given a list with multiple items, when the next item is retrieved, then it', () => {

            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
                linkedList.add('two');
                linkedList.add('three');
            });

            // Assert
            it('should return the first item in the list after the first call.', () => {
                expect(linkedList.next()).to.eq('one');
            });
            it('should return the second item in the list after the second call.', () => {
                expect(linkedList.next()).to.eq('two');
            });
            it('should return the third item in the list after the third call.', () => {
                expect(linkedList.next()).to.eq('three');
            });
            it('should return the first item in the list after the fourth call.', () => {
                expect(linkedList.next()).to.eq('one');
            });
        });

    });

    // previous()
    describe('function: previous()', () => {

        //
        describe('Given an empty list, when the previous item is retrieved, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });

            // Assert
            it('should return null.', () => {
                expect(linkedList.previous()).to.be.null;
            });
        });

        //
        describe('Given a list with one item, when the previous item is retrieved, then it', () => {

            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
            });

            // Assert
            it('should return the one item in the list.', () => {
                expect(linkedList.previous()).to.eq('one');
            });
            it('should return the one item in the list after subsequent calls.', () => {
                expect(linkedList.previous()).to.eq('one');
            });
        });

        //
        describe('Given a list with multiple items, when the next item is retrieved, then it', () => {

            before(() => {
                linkedList = new LinkedList();
                linkedList.add('one');
                linkedList.add('two');
                linkedList.add('three');
            });

            // Assert
            it('should return the last item in the list after the first call.', () => {
                expect(linkedList.previous()).to.eq('three');
            });
            it('should return the second item in the list after the second call.', () => {
                expect(linkedList.previous()).to.eq('two');
            });
            it('should return the first item in the list after the third call.', () => {
                expect(linkedList.previous()).to.eq('one');
            });
            it('should return the last item in the list after the fourth call.', () => {
                expect(linkedList.previous()).to.eq('three');
            });
        });

    });
});
