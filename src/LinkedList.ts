import LinkedNode from "./LinkedNode";

export default class LinkedList<T>{
    private head: LinkedNode<T> | null = null;
    private size: number = 0;

    append(value: T): void{
        const newNode = new LinkedNode(value)
        if(!this.head){
            this.head = newNode
        }else{
            let current = this.head
            while(current.next){
                current = current.next
            }
            current.next = newNode
        }
        this.size++;
    }
    prepend(value: T): void{
        const newNode = new LinkedNode(value)
        if(!this.head){
            this.head = newNode
        }else{
            newNode.next = this.head
            this.head = newNode

        }
        this.size++;
    }

    addOnIndex(value: T, index: number): void{
        const newNode = new LinkedNode(value)

        if(index === 0){
            this.prepend(value)
            return
        }
        let current = this.head
        let currentIndex = 0
        while(current && currentIndex < index - 1){
            current = current.next
            currentIndex++
        }
        if(current){
            newNode.next = current.next
            current.next = newNode
        }
        this.size++;

    }

    delete(value: T): void{
        if(!this.head) return

        while(this.head && this.head.value === value){
            this.head = this.head.next
            this.size--;
        }

        let current = this.head
        while(current && current.next){
            if(current.next.value === value){
                current.next = current.next.next
                this.size--;
            }else{
                current = current.next
            }
        }
    }

    deleteOnIndex(index: number): void{
        if(!this.head) return

        if(index === 0){
            this.head = this.head.next
            this.size--;
            return
        }else{
            let current = this.head
            let currentIndex = 0
            while(current.next && currentIndex < index - 1){
                current = current.next
                currentIndex++
            }
            if(current.next){
                current.next = current.next.next
                this.size--;
                return
            }
        }
    }

    printList():void{
        let current = this.head
        const values: T[] = []
        while(current){
            values.push(current.value)
            current = current.next
        }
        console.log(values.join(" -> "), " -> null")
    }
}