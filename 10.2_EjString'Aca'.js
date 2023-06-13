function checkWord (palabra)
{
if (palabra.startsWith('aca')){
    return true;
}
else {
    return false;
}
}

console.log(checkWord('academia'));
console.log(checkWord('escuela'));