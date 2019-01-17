import { } from 'ts-jest';
import { LinkedList } from './LinkedList';
import { ListNode } from './ListNode';

// LinkedList Test
describe('Class: LinkedList', () => {

    let linkedList: LinkedList;
    let firstNode: ListNode;
    let secondNode: ListNode;
    let thirdNode: ListNode;

    // addFirst()
    describe('function: addToHead()', () => {

        //
        describe('Given an empty list, when a value is added to head of the of the list, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
                firstNode = linkedList.addToHead('one');
            });
            it('should create and return a new ListNode that', () => {
                expect(firstNode).toBeInstanceOf(ListNode);
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).toEqual('one');
            });
            it('should be the head node', () => {
                expect(firstNode.isHead).toBe(true);
            });
            it('should point to null', () => {
                expect(firstNode.next).toBeNull();
            });
        });

        //
        describe('Given a populated list, when a value is added to head of the list, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
                thirdNode = linkedList.addToHead('three');
                secondNode = linkedList.addToHead('two');
                firstNode = linkedList.addToHead('one');
            });
            it('should create and return a new ListNode that', () => {
                expect(firstNode).toBeInstanceOf(ListNode);
            });
            it('should have a value equal to the given value', () => {
                expect(firstNode.value).toEqual('one');
            });
            it('should be the head node', () => {
                expect(firstNode.isHead).toBe(true);
            });
            it('should update the previous head node to no longer be the head node', () => {
                expect(secondNode.isHead).toBe(false);
                expect(thirdNode.isHead).toBe(false);
            });
            it('should point to the previous head node', () => {
                expect(firstNode.next).toBe(secondNode);
            });
        });
    });

    // getHead()
    describe('function: getHead()', () => {

        //
        describe('Given an empty list, when the head of the list is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
            });
            it('should return null', () => {
                expect(linkedList.getHead()).toBeNull();
            });
        });

        //
        describe('Given a populated list, when the head of the list is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
                secondNode = linkedList.addToHead('two');
                firstNode = linkedList.addToHead('one');
            });
            it('should return the head ListNode', () => {
                expect(linkedList.getHead()).toBeTruthy();
                expect(linkedList.getHead()).toBe(firstNode);
            });
        });
    });

    // get()
    describe('function: get()', () => {

        //
        describe('Given an empty list, when a ListNode at a specific index is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
            });
            it('should throw an error indicating the invalid index', () => {
                try {
                    linkedList.get(1);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).toEqual('Invalid index 1');
                }
            });
        });

        //
        describe('Given a populated list, when a ListNode at a specific index is requested, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
                linkedList.addToHead('three');
                linkedList.addToHead('two');
                linkedList.addToHead('one');
            });
            it('should throw an error indicating the invalid index if it is less than zero', () => {
                try {
                    linkedList.get(-5);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).toEqual('Invalid index -5');
                }
            });
            it('should throw an error indicating the invalid index if it is greater than the length', () => {
                try {
                    linkedList.get(7);
                    fail('An error should have been thrown');
                } catch (err) {
                    expect(err.message).toEqual('Invalid index 7');
                }
            });
            it('should return the ListNode at the given index', () => {
                expect(linkedList.get(2).value).toEqual('three');
            });
        });
    });

    // values()
    describe('function: values()', () => {

        //
        describe('Given an empty list, when the list of node values is returned, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
            });
            it('should return an array', () => {
                expect(linkedList.values()).toBeInstanceOf(Array);
            });
            it('should return an empty array', () => {
                expect(linkedList.values().length).toEqual(0);
            });
        });

        //
        describe('Given a populated list, when the list of node values is returned, then it', () => {
            beforeEach(() => {
                linkedList = new LinkedList();
                linkedList.addToHead('three');
                linkedList.addToHead('two');
                linkedList.addToHead('one');
            });
            it('should return an array', () => {
                expect(linkedList.values()).toBeInstanceOf(Array)
            });
            it('should return an array with the list items', () => {
                const values: Array<string> = linkedList.values();
                expect(values[0]).toEqual('one');
                expect(values[1]).toEqual('two');
                expect(values[2]).toEqual('three');
            });
        });

    });
});
