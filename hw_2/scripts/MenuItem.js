class MenuItem{
    constructor(href,title,className){
        this.className = className;
        this.href = href;
        this.title = title;
    }

    render(){
        return `<li  class = "${this.className}"><a href="${this.href}">${this.title}</a></li>`;
    }
}