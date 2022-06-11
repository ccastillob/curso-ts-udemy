

(() => {

    let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Alen',
        age: 25,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Clark Kent',
        age: 60,
        powers: [ 'Super velocidad' ]
    }



    // flash = {
    //     name: 'Clark Kent',
    //     // age: 50,
    //     powers: ['Super fuerza'],
    //     getName() {
    //         return this.name;
    //     }
    // }

    console.log(flash);

})()