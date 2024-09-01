import { LinkedList } from "./linked-list";

const list = new LinkedList<number>();
list.pushBack(2).pushFront(1).pushBack(3).pushBack(4);
console.log([...list]);
console.log(list.find(val => val === 2));

console.log(LinkedList.from([10,20,30,40,50])[Symbol.toPrimitive]());
