

(() => {

    
    // const addNumber = ( a: number, b: number ) => {
    //     return a + b;
    // }; 


    const addNumbers = ( a: number, b: number ) => a + b;
    const greet = ( name: string ) => `Hola ${ name }`;
    const saveTheWorld = () => `El mundo está salvado !`;

    // let myFunction: (y: number, z: number) => number;
    // let myFunction: (y: string) => string;
    let myFunction: () => string;

    // myFunction = 10;

    // myFunction = addNumbers;
    // console.log( myFunction(1,2) );

    // myFunction = greet;
    // console.log( myFunction('Chris') );

    myFunction = saveTheWorld;
    console.log( myFunction() );

})()