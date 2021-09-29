let data = [
    {id: 1 , title: "Post No.1", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. dolor sit amet consectetur adipisicing elit. Repellendus molestias voluptate, voluptates rerum temporibus ipsam suscipit iusto repudiandae ex aliquam? Sequi,adipisicing dolorem, amet consectetur adipisicingadipisicing dolorem, amet consectetur adipisicing voluptates. Repellend ."},
    {id: 2 , title: "Post No.2", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem Explicaboadipisicing dolorem, amet consectetur adipisicing."},
    {id: 3 , title: "Post No.3", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, doloribus soluta quis sunt velitAliquid, amet consectetur consectetur adipisicing doloremadipisicing dolorem, amet consectetur adipisicing, dicta ."},
    {id: 4 , title: "Post No.4", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis sunt velit amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, amet consectetur adipisicing elit. Aliquid dicta! Explicabo adipisicing dolorem, amet consectetur."},
    {id: 5 , title: "Post No.5", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, soluta amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem,  consectetur adipisicing dolorem."},
    {id: 6 , title: "Post No.6", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis sunt velit dicta! amet consectetur adipisicing elit. Aliquid, amet  adipisicing dolorem, ExplicaboAliquid, amet consectetur adipisicing dolorem,Aliquid, amet consectetur adipisicing dolorem adipisicing dolorem, amet consectetur adipisicing."},
    {id: 7 , title: "Post No.7", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis  amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, amet consectetur adipisicingAliquid, amet consectetur adipisicing dolorem,Aliquid, amet consectetur adipisicing dolorem,Aliquid, amet consectetur adipisicing."},
    {id: 8 , title: "Post No.8", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis sunt amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, amet consectetur adipisicing elit.adipisicing dolorem, amet consectetur adipisicingadipisicing dolorem, amet consectetur adipisicing Aliquid."},
    {id: 9 , title: "Post No.9", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, voluptates. Repellendus doloribus soluta quis sun amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem, ametAliquid, amet consectetur adipisicing dolorem,Aliquid, amet consectetur adipisicing dolorem, consectetur."},
    {id: 10 , title: "Post No.10", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,  amet consectetur adipisicing elit. Aliquid, amet consectetur adipisicing dolorem,voluptates. Repellendus doloribus soluta quisadipisicing dolorem, amet consectetur adipisicing  sunt Repellendus doloribus solutaRepellendus doloribus soluta."}
];
new Draggable({
    element: document.querySelector('#list'),
    list: data,
    template: (item) => {
        return `
                <article id="${item.id}" class="list-item row mx-auto px-4 px-lg-5 py-5 flex-column flex-lg-row justify-content-start align-items-center rounded-1 my-4">
                    <div class="number text-start px-0">
                        <h2 class="display-6 ms-3 ms-lg-0">${item.id}</h2>
                    </div>
                    <div class="content">
                        <h1 class="title h4 pt-3 pt-lg-0">${item.title}</h1>
                        <p class="text-black-50 mb-0">${item.text}</p>
                    </div>
                </article>
        `
    },
    update: (list) => {
        console.log("newList" , list);
    }
})

