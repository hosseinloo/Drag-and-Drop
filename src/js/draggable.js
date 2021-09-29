class Draggable {
    dragSrcEl;
    list;
    update;


    constructor(options) {
        this.setupList(options);
        this.list = options.list;
        if ( options.update ) this.update = options.update;
        for ( let listItem of options.element.children ) {
            this.addDaDHandlers(listItem);
        }
    };
    // Validation and add template to HTML
    setupList(options) {
        let { list , element: el , template: temp } = options;

        if ( ! list ) throw new Error("the data is not exists...");
        if ( ! el ) throw new Error("the list is not exists...");
        if ( ! Array.isArray(list) ) throw new Error("the list is not an array, please inser an array...");
        if ( ! temp ) throw new Error("please add a template function...");
        if ( typeof temp !== "function" ) throw new Error("please add a function as template...");

        list.forEach(item => el.innerHTML += temp(item));

    };

    addDaDHandlers(el) {
        el.setAttribute("draggable" , true);
        
        el.addEventListener("dragstart", this.handleDragStart.bind(this));
        el.addEventListener("dragenter", this.handleDragEnter.bind(this));
        el.addEventListener("dragover", this.handleDragOver.bind(this));
        el.addEventListener("dragleave", this.handleDragLeave.bind(this));
        el.addEventListener("drop", this.handleDragDrop.bind(this));
        el.addEventListener("dragend", this.handleDragEnd.bind(this));

        
    }

    handleDragStart(e) {
        this.dragSrcEl = e.target;
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html' , e.target.outerHTML);
        e.target.classList.add('drag-element');
    }

    handleDragEnter(e) {
        console.log('enter');
    }

    handleDragOver(e) {
        if ( e.preventDefault ) e.preventDefault();
        e.target.closest('.list-item').classList.add('over');
    }

    handleDragLeave(e) {
        e.target.closest('.list-item').classList.remove('over');
    }

    handleDragDrop(e) {
        e.target.closest('.list-item').classList.remove('over');
        let target = e.target.closest('.list-item');
        if ( this.dragSrcEl != target ) {
            target.parentNode.removeChild(this.dragSrcEl);
            let dropHtml = e.dataTransfer.getData('text/html');
            target.insertAdjacentHTML('beforebegin', dropHtml);
            this.addDaDHandlers(target.previousSibling);
        }
    }

    handleDragEnd(e) {
        e.target.classList.remove('drag-element');
        let newList = [];
        list.querySelectorAll('.list-item').forEach(el => newList.push(this.list.find(item => el.id == item.id)));
        this.update(newList);
    }
    
}