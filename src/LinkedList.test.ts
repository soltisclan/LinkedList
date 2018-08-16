import { fail } from 'assert';
import * as chai from 'chai';
import { } from 'mocha';
import { LinkedList } from './LinkedList';
import { ListNode } from './ListNode';

const expect = chai.expect;

// LinkedList Test
describe('Class: LinkedList', () => {

    let linkedList: LinkedList;
    let oldNode: ListNode;
    let newNode: ListNode;

    // addFirst()
    describe('function: addFirst()', () => {

        //
        describe('Given an empty list, when an item is added to beginning of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                newNode = linkedList.addFirst('one');
            });
            it('should return the new ListNode that was created', () => {
                expect(newNode).to.not.be.null;
            });
            it('should have a value equal to the given value', () => {
                expect(newNode.value).to.be.eq('one');
            });
            it('should be the head node', () => {
                expect(newNode.isHead).to.be.true;
            });
            it('should point to itself as the previous node', () => {
                expect(newNode.previous).to.be.eq(newNode);
            });
            it('should point to itself as the next node', () => {
                expect(newNode.next).to.be.eq(newNode);
            });
        });

        //
        describe('Given a populated list, when an item is added to beginning of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                oldNode = linkedList.addFirst('one');
                newNode = linkedList.addFirst('two');
            });
            it('should return the new ListNode that was created', () => {
                expect(newNode).to.not.be.null;
            });
            it('should have a value equal to the given value', () => {
                expect(newNode.value).to.be.eq('two');
            });
            it('should be the head node', () => {
                expect(newNode.isHead).to.be.true;
            });
            it('should update the previous head node to no longer be the head node', () => {
                expect(oldNode.isHead).to.be.false;
            });
            it('should point to the old head node as the previous node', () => {
                expect(newNode.previous).to.be.eq(oldNode);
            });
            it('should point to the old head node as the next node', () => {
                expect(newNode.next).to.be.eq(oldNode);
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
                oldNode = linkedList.addFirst('one');
                newNode = linkedList.addFirst('two');
            });
            it('should return the head ListNode', () => {
                expect(linkedList.getHead()).to.be.eq(newNode);
            });
        });
    });

    // addLast()
    describe('function: addLast()', () => {

        //
        describe('Given an empty list, when an item is added to end of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                newNode = linkedList.addLast('one');
            });
            it('should return the new ListNode that was created', () => {
                expect(newNode).to.not.be.null;
            });
            it('should have a value equal to the given value', () => {
                expect(newNode.value).to.be.eq('one');
            });
            it('should be the head node', () => {
                expect(newNode.isHead).to.be.true;
            });
            it('should point to itself as the previous node', () => {
                expect(newNode.previous).to.be.eq(newNode);
            });
            it('should point to itself as the next node', () => {
                expect(newNode.next).to.be.eq(newNode);
            });
        });

        //
        describe('Given a populated list, when an item is added to beginning of the list, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                oldNode = linkedList.addLast('one');
                newNode = linkedList.addLast('two');
            });
            it('should return the new ListNode that was created', () => {
                expect(newNode).to.not.be.null;
            });
            it('should have a value equal to the given value', () => {
                expect(newNode.value).to.be.eq('two');
            });
            it('should not be the head node', () => {
                expect(newNode.isHead).to.be.false;
            });
            it('should retain the current head node as the head node', () => {
                expect(oldNode.isHead).to.be.true;
            });
            it('should point to the old last node as the previous node', () => {
                expect(newNode.previous).to.be.eq(oldNode);
            });
            it('should point to the head node as the next node', () => {
                expect(newNode.next).to.be.eq(oldNode);
            });
        });
    });

    // length()
    describe('function: length()', () => {

        //
        describe('Given an empty list, when the length is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
            });
            it('should return zero', () => {
                expect(linkedList.length()).to.be.eq(0);
            });
        });

        //
        describe('Given a populated list, when the length is returned, then it', () => {
            before(() => {
                linkedList = new LinkedList();
                linkedList.addLast('one');
                linkedList.addLast('two');
                linkedList.addLast('three');
            });
            it('should return the number of items in the list', () => {
                expect(linkedList.length()).to.be.eq(3);
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
                oldNode = linkedList.addLast('one');
                newNode = linkedList.addLast('two');
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
                expect(linkedList.get(1)).to.be.eq(newNode);
            });
        });
    });
});
