export default class LinkedNode<T>{
    value: T;
    next: LinkedNode<T> | null = null;

    constructor(value: T){
        this.value = value;
    }

}