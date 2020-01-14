const cities =['Madrid', 'Bcn'];


const randomStrings = () => {
    const string = cities[ Math.floor( Math.random() * cities.length )];
    return string;
}
module.exports = randomStrings  