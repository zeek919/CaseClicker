const filterSkins = (skinsArray, color) => skinsArray.filter((item) => item.color === color);
const randomOfColor = (skinsArray) => skinsArray[Math.floor(Math.random() * skinsArray.length)];

const randomSkin = (skinsArray) => {
    const rand = Math.random();
    if (rand >= 0.2) {
        const blueSkins = filterSkins(skinsArray, '#381ED7');
        const randomBlueItem = randomOfColor(blueSkins);

        return randomBlueItem;
    }
    if (rand < 0.2 && rand >= 0.04) {
        const purpleSkins = filterSkins(skinsArray, '#500082');
        const randomPurpleItem = randomOfColor(purpleSkins);
        return randomPurpleItem;
    }
    if (rand < 0.04 && rand >= 0.01) {
        const pinkSkins = filterSkins(skinsArray, '#A71ED7');
        const randomPinkItem = randomOfColor(pinkSkins);
        return randomPinkItem;
    }
    const redSkins = filterSkins(skinsArray, '#C50404');
    const randomRedItem = randomOfColor(redSkins);
    return randomRedItem;
};

export default randomSkin;
