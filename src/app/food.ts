
export class Food {
    _id: string;
    img: string;
    altText: string;
    card_title: string;
    time: string;
    recipe: string;

    constructor(_id: string,
        img: string,
        altText: string,
        card_title: string,
        recipe: string,
        time: string) {
        this._id = _id;
        this.card_title = card_title;
        this.img = img;
        this.altText = altText;
        this.recipe = recipe;
        this.time = time;

    }

}


