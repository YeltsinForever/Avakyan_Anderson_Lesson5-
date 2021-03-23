class Stack {
    constructor(value) {
        this.massive = [];
        if(value == undefined || value == null){
        value = 10;
        }
        if(typeof value !== 'number')
            throw new Error('error message');
        if(value<this.massive.length)
            throw new Error('out of range');
            this.value = value;  
    }  
    push(...elem){
        this.massive.push(...elem);
        if (this.massive.length > this.value)
        throw new Error('out of range')
        else
        return this.massive
    }
    pop(){
      if(this.massive.length ==0 )
      throw new Error('Stack is Empty')
        else{
        this.massive.pop()
          return this.massive
        }
      }
    peek(){
      return this.massive[this.massive.length-1]
    }
    isEmpty(){
      if(this.massive.length == 0){
        return true
      }else
      return false
    }
    toArray(){
      this.newMassive = this.massive
      return this.newMassive
    }
    static fromIterable(iterable) {
      var newMassive = [];
      if(Array.isArray(iterable)) {
          for(var i=0; i<iterable.length; i++) {
              newMassive.push(iterable[i]);
          }
      }else {
          throw new Error('non itter');
      }
      return newMassive;
  }

}


