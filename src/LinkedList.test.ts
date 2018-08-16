import { fail } from 'assert';
import * as chai from 'chai';
import { } from 'mocha';
import { LinkedList } from './LinkedList';
import { ListNode } from './ListNode';

const expect = chai.expect;

// LinkedList Test
describe('Class: LinkedList', () => {

    let linkedList: LinkedList;
    let firstNode: ListNode;
    let secondNode: ListNode;
    let thirdNode: ListNode;

    // addFirst()
    describe('function: addFirst()', () => {

        //
        describe('Given an empty list, when an item is added to beginning of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                firstNode = linkedList.addFirst('one');
            });
            it('should return the new ListNode that was created', () => {
                expect(firstNode).to.exist;
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).to.be.eq('one');
            });
            it('should be the head node', () => {
                expect(firstNode.isHead).to.be.true;
            });
            it('should point to null', () => {
                expect(firstNode.next).to.not.exist;
            });
        });

        //
        describe('Given a populated list, when an item is added to beginning of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                thirdNode = linkedList.addFirst('three');
                secondNode = linkedList.addFirst('two');
                firstNode = linkedList.addFirst('one');
            });
            it('should return the new ListNode that was created', () => {
                expect(firstNode).to.exist;
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).to.be.eq('one');
            });
            it('should be the head node', () => {
                expect(firstNode.isHead).to.be.true;
            });
            it('should update the previous head node to no longer be the head node', () => {
                expect(secondNode.isHead).to.be.false;
                expect(thirdNode.isHead).to.be.false;
            });
            it('should point to the previous first node', () => {
                expect(firstNode.next).to.exist.and.eq(secondNode);
            });
        });
    });

    // getHead()
    describe('function: getHead()', () => {

        //
        describe('Given an empty list, when the head of the list is requested, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });
            it('should return null', () => {
                expect(linkedList.getHead()).to.be.null;
            });
        });

        //
        describe('Given an populated list, when the head of the list is requested, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                secondNode = linkedList.addFirst('two');
                firstNode = linkedList.addFirst('one');
            });
            it('should return the head ListNode', () => {
                expect(linkedList.getHead()).to.exist.and.eq(firstNode);
            });
        });
    });

    // get()
    describe('function: get()', () => {

        //
        describe('Given an empty list, when an item at an index is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });
            it('should throw an error indicating the invalid index', () => {
                try {
                    linkedList.get(1);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).to.be.eq('Invalid index 1');
                }
            });
        });

        //
        describe('Given an populated list, when an item at an index is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.addFirst('three');
                linkedList.addFirst('two');
                linkedList.addFirst('one');
            });
            it('should throw an error indicating the invalid index if it is less than zero', () => {
                try {
                    linkedList.get(-5);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).to.be.eq('Invalid index -5');
                }
            });
            it('should throw an error indicating the invalid index if it is greater than the length', () => {
                try {
                    linkedList.get(7);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).to.be.eq('Invalid index 7');
                }
            });
            it('should return the ListNode at the given index', () => {
                expect(linkedList.get(2).value).to.eq('three');
            });
        });
    });

    // values()
    describe('function: values()', () => {

        //
        describe('Given an empty list, when the list of values is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });
            it('should return an array', () => {
                expect(linkedList.values()).to.exist;
            });
            it('should return an empty array', () => {
                expect(linkedList.values().length).to.be.eq(0);
            });
        });

        //
        describe('Given a populated list, when the list of values is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.addFirst('three');
                linkedList.addFirst('two');
                linkedList.addFirst('one');
            });
            it('should return an array', () => {
                expect(linkedList.values()).to.exist;
            });
            it('should return an array with the list items', () => {
                const values: Array<string> = linkedList.values();
                expect(values[0]).to.be.eq('one');
                expect(values[1]).to.be.eq('two');
                expect(values[2]).to.be.eq('three');
            });
        });

    });
});
