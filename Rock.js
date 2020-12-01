class Rock extends BaseClass {
    constructor(x,y) {
        super(x,y,25,25);
        this.image = loadImage("stone.png");
    }


    display() {
       super.display();
    }

}
