import _ from 'lodash';
import Web3 from 'web3';


let web3 = new Web3();
web3.setProvider(
    new Web3.providers.WebsocketProvider(
        'ws://localhost:8546'
    )
);
console.log(web3.eth.accounts());