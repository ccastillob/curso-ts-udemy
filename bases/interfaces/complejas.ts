

( () => {

    interface Client {
        name: string;
        age?: number;
        address: Address;
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client:Client = {
        name: 'Destiny',
        age: 25,
        address: {
            id: 125,
            zip: 'KYS SU2',
            city: 'Ottawa'
        },
        getFullAddress( id: string ){
            return this.address.city;
        }
    }

    const client2:Client = {
        name: 'Creative',
        age: 30,
        address: {
            city: 'Toronto',
            id: 120,
            zip: 'K2S 241'
        },
        getFullAddress( id: string ){
            return this.address.city;
        }
    }


})()