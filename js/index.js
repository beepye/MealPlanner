(function () {
    'use strict';

    const GENERATE_BTN = document.querySelector('#GenerateMealList');
    const URL = 'http://www.thebrianpye.com/Recipes/meals.json';
    const BTN_TEXT = [
        `Make it again`,
        `Nope, try again`,
        `Keep on trying`,
        `I Don't like this` //Template literals preserve whitespace and quotation marks.
    ];

    let count = 0;
    GENERATE_BTN.addEventListener('click', (ev) => main(ev));


    function main(ev) {
        const listContainer = document.querySelectorAll('.content-container')[1]; //I tried setting it to query an id, but I kept getting undefined errors for some reason. Leaving it alone for now.
        const days = 7;
        const newMessage = BTN_TEXT[Math.floor(Math.random() * BTN_TEXT.length)];

        if (listContainer !== undefined) {
            removeList();
        }

        GENERATE_BTN.textContent = newMessage;
        count++;
        if (count % 10 === 0) {
            GENERATE_BTN.textContent = `Are you effing serious?`;
        }
        //Replaced the callbacks (which I don't really understand) and XHR with fetch(). 
        fetch(URL).then(response => response.json()).then(response => createList(response));

        function createList(response) {
            selectRandomMeals(days, response, createListHTML);
            const list = document.querySelector('.js-list');
            const removeBtnArr = document.querySelectorAll('.js-remove');
            const linkItemArr = document.querySelectorAll('.js-link-item');
            removeBtnArr.forEach((item) => {
                const button = item.closest('button');
                button.addEventListener('click', removeListItem);
            });
        }
    }



    function selectRandomMeals(days, arr, callback) {
        const randomlyOrderedArray = arr.sort(() => {
            return .5 - Math.random();
        });
        const newArray = randomlyOrderedArray.slice(0, days);
        callback(newArray);
    }

    function createListHTML(arr) {
        const container = document.createElement('section');
        const main = document.querySelector('main');
        const list = document.createElement('ul');
        const btnWrapper = document.createElement('div');

        container.className = 'content-container --no-border';
        list.className = 'list js-list';
        btnWrapper.className = 'btn-wrapper';
        main.appendChild(container);
        container.appendChild(list);
        container.appendChild(btnWrapper);

        populateList(arr);
    }

    function populateList(arr) {
        const menuList = document.querySelector('ul');

        arr.forEach((item) => {

            const link = document.createElement('a');
            const linkItem = document.createElement('li');
            const removeBtn = document.createElement('button');


            link.textContent = item.name;
            link.className = 'js-link-item'
            removeBtn.className = 'secondary-btn kill-item-btn js-remove';
            removeBtn.textContent = 'x';


            linkItem.appendChild(link);
            linkItem.appendChild(removeBtn);
            menuList.appendChild(linkItem);
        });
    }

    function removeList() {
        const listContainer = document.querySelectorAll('.content-container')[1];
        listContainer.remove();
    }


    function removeListItem(e) {
        const listItem = e.target.closest('li');
        listItem.remove();
    }
}());
