import randomSkin from './randomSkin';

const randomItemToShow = (skinsArray) => {
    let skinsContainer = [];

    for (let i = 0; i < 40; i++) {
        const singleSkin = randomSkin(skinsArray);
        skinsContainer = [...skinsContainer, singleSkin];
    }

    return skinsContainer;
};

export default randomItemToShow;
