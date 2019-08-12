class Kitchen{
    constructor(){
        this.mp = new Map();
    }
   //post request.
    insert(data) {
        let id = parseInt(data.id);
        this.mp.set(id,data);
    }
    // delete single data..
    remove(id) {
        id = parseInt(id);
        if(this.mp.has(id)) this.mp.delete(id);
    }
    // dalete all the data..
    removeAll() {
        this.mp.forEach((ele) => {
            this.mp.delete(parseInt(ele.id));
        });
    }
    //put single data...
    update(data) {
        let id = parseInt(data.id);
        if(this.mp.has(id)) this.mp.set(id,data);
    }
    //get single data...
    query(id) {
        id = parseInt(id);
        if(this.mp.has(id)) {
           return this.mp.get(id)
        }
    }
    // get all data..
    queryAll() {
        let res=[];
        this.mp.forEach((x) => {
            res.push(x);
        });
        return res;
    }
}

module.exports  = Kitchen;
