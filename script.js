let topIndex = -1;
let stack = new Array(5);

function push(data){
    if(isFull()){
        console.log("Stack is full");
        return;
    }
    topIndex++;
    stack[topIndex] = data;
}

function pop(){
    if(isEmpty()){
        console.log("Stack is empty");
        return;
    }
    let poppedData = stack[topIndex];
    topIndex--;
    return poppedData;
}


function isEmpty(){
    if(topIndex == -1)
        return true;
        return false;
}

function isFull(){
    if(topIndex == stack.length - 1)
        return true;
        return false;
}

function print_data(){
    for(let i = 0; i <= topIndex; i++){
        document.write(stack[i] + " ");
    }
}

push(12)
push(78)
pop()
pop()
pop()


print_data()
