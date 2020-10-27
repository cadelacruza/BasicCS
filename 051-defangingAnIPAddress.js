var defangIPaddr = function(address) {
    let arrAddress = address.split("");
    for(let i = 0; i < arrAddress.length;i++){
        if(arrAddress[i] === "."){
            arrAddress.splice(i,1, "[.]");
        }
    }
    
    return arrAddress.join("");
}
