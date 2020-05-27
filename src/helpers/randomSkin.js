const filterSkins = (skinsArray, color) => skinsArray.items.filter((item) => item.color === color);
const randomOfColor = (skinsArray) => skinsArray[Math.floor(Math.random() * skinsArray.length)].color;

const randomSkin = (skinsArray) => {
    const rand = Math.random();
    if (rand >= 0.2) {
        const blueSkins = filterSkins(skinsArray, 'blue');
        const randomBlueItem = randomOfColor(blueSkins);
        console.log(randomBlueItem);
    } else if (rand < 0.2 && rand >= 0.04) {
        const blueSkins = filterSkins(skinsArray, 'purple');
        const randomPurpleItem = randomOfColor(blueSkins);
        console.log(randomPurpleItem);
    } else if (rand < 0.04 && rand >= 0.01) {
        const blueSkins = filterSkins(skinsArray, 'pink');
        const randomPinkItem = randomOfColor(blueSkins);
        console.log(randomPinkItem);
    } else {
        const blueSkins = filterSkins(skinsArray, 'red');
        const randomRedItem = randomOfColor(blueSkins);
        console.log(randomRedItem);
    }
};

export default randomSkin;
