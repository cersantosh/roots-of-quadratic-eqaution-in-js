
let head = null;

function insert_at_last(value) {
    let new_node = {};
    new_node.next = null;
    new_node.data = value;
    if (head == null) {
        head = new_node;

    }
    else{
        let temp = head;
        while(temp.next != null){
            temp = temp.next;
        }
        temp.next = new_node;

    }

}

function insert_at_first(value){
    let new_node = {};
    new_node.data = value;
    new_node.next = head;
    head = new_node;
}

function delete_last_node(){
    if(head == null){
        console.log("No node in the list");
    }
    else if(head.next == null){
        head = null;
    }
    else{
        let temp = head;
        let prev = null;
        while(temp.next != null){
            prev = temp;
            temp = temp.next;
        }
        prev.next = null;
    }
}

function delete_first_node(){
    if(head == null){
        console.log("No node in the list")
    }
    else if(head.next == null){
        head = null;
    }
    else{

        head = head.next;
    }
}

function print_data(){
    let temp = head;
    while(temp != null){
        document.write(temp.data + " ");
        temp = temp.next;
    }
}


insert_at_last(45)
insert_at_last(90)
insert_at_last(48)
insert_at_last(76)
insert_at_first(10)
insert_at_first(67)
delete_first_node();
delete_last_node()

print_data()