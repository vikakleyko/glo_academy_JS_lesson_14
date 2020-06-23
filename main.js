"use strict";

let domEl;

function DomElement(selector, height, width, bg, fontSize) {
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;

    DomElement.prototype.createEl = function () {
         if (this.selector.substring(0, 1) === ".") {
            domEl = document.createElement("div");
            domEl.classList.add(this.selector.substring(1));
        }
        if (this.selector.substring(0, 1) === "#") {
            domEl = document.createElement("p");
            domEl.id = this.selector.substring(1);
        }
        domEl.style.width = this.width;
        domEl.style.height = this.height;
        domEl.style.background = this.bg;
        domEl.style.fontSize = this.fontSize;
        domEl.textContent = "Hi there";
        
        document.body.append(domEl);
    };
}


let elem = new DomElement("#best", "150px", "350px", "yellow", "16px");

elem.createEl();
