Array.prototype.customizedMap = function (cb) {

    const mappedArray = [];
  
    for (let [index,ele] of this.entries()) {
      mappedArray.push(cb(ele, index));
    }
  
    return mappedArray;
  };
  
  const arr = [1, 2, 3, 4];

  function transform(num, idx) {
    console.log(num*idx)
  }

const newArr = arr.customizedMap(transform);


class EventEmitter {
    constructor() {
        this.events={}
    }

    register(event,cb) {
        if(!this.events[event]){
            this.events[event] = []
        }

        this.events[event].push(cb)
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach(cb=>cb(...args))
        }
    }
}

const a = new EventEmitter();
const b = new EventEmitter();
a.register('e1', () => console.log('a1'));
a.register('e2', () => console.log('a2'));
b.register('e1', () => console.log('b1'));
b.register('e1', () => console.log('b11'));
b.emit('e1'); // 打印 'b1' 和 'b11'
a.emit('e2'); // 打印 'a2'