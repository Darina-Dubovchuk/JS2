class Menu{
    constructor(items){
        this.items = items;
    }
    render(){
        let result = `<ul>`;
        for(let i=0; i < this.items.length; i++){
            //проверка объектов на наследование от нужного класса
            if(this.items[i] instanceof MenuItem){
                result += this.items[i].render();
            }
        }
        result += `</ul>`;
        return result;
    }
}