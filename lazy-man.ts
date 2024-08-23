
class LazyMan{

    private name:string;
    private tasks: any[] = [];
    constructor(name: string) {
        this.name = name;

        setTimeout(() =>{
            this.next();
        })
    }

    private next(){
        if(this.tasks.length){
            const task = this.tasks.shift();
            task();
        }
    }

    sleep(time: number) {
        this.tasks.push(() => {
                return  new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log(`Wake up after ${time} seconds`);
                        this.next();
                        resolve();

                    }, time * 1000);
                })
        })
        return this;
    }

    eat(food: string) {
        this.tasks.push(() => {
            console.log(`Eat ${food}`);
            this.next();
        })

        return this;
    }
}

new LazyMan("赵洲").eat("苹果").eat("橘子").sleep(4).eat("香蕉")
