

( () => {

    interface Hero {
        name: string;
        age?: number;
        powers: number[];
        getName?: () => string;
    }

    let flash: Hero = {
        name: 'Barry Alen',
        age: 25,
        powers: [ 1, 2 ]
    }

    let superman: Hero = {
        name: 'Clark Kent',
        age: 60,
        powers: [ 1 ],
        getName() {
            return this.name;
        }
    }

    

})()