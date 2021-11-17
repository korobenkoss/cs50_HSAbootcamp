// complete the function such that it returns true if an object or any of its
// subobjects have any falsy values and false otherwise
// Assume no circular references
// HINT: recursion may help here

function hasFalsyValue(obj) {
    if(!obj) return true;
    return false;
}

console.log(hasFalsyValue(false))