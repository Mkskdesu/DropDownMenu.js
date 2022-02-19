"use strict";
function createDropDownMenu(appendTo, items) {
    const MenuListDiv = document.createElement('div');
    MenuListDiv.classList.add('dropdown');
    for (const i of items) {
        const MenuListCategory = document.createElement('div');
        MenuListCategory.classList.add('dropdown-category');
        const title = document.createElement('span');
        title.classList.add('dropdown-title');
        title.innerText = i.name;
        const contents = document.createElement('div');
        contents.classList.add('dropdown-contents');
        MenuListCategory.append(title, contents);
        MenuListDiv.append(MenuListCategory);
        for (const j of i.content) {
            if (j.hasOwnProperty("children")) {
                createHasChildrenCategory(contents, j);
            }
            else {
                createChildLabel(contents, j);
            }
        }
    }
    function createChildLabel(parent, child) {
        const MenuListLabel = document.createElement('span');
        MenuListLabel.innerText = child.text;
        if (child.onclick) {
            MenuListLabel.addEventListener('click', () => child.onclick());
        }
        parent.appendChild(MenuListLabel);
    }
    function createHasChildrenCategory(parent, content) {
        const hasChildrenMenu = document.createElement('div');
        hasChildrenMenu.classList.add('dropdown-category');
        const hasChildrenTitle = document.createElement('span');
        hasChildrenTitle.innerText = content.text + ">";
        const hasChildrenContents = document.createElement('div');
        hasChildrenContents.classList.add('dropdown-contents', 'dropdown-nest-contents');
        hasChildrenMenu.append(hasChildrenTitle, hasChildrenContents);
        for (const i of content.children) {
            if (i.hasOwnProperty('children'))
                createHasChildrenCategory(hasChildrenContents, i);
            else
                createChildLabel(hasChildrenContents, i);
        }
        parent.append(hasChildrenMenu);
    }
    appendTo.appendChild(MenuListDiv);
}
//# sourceMappingURL=index.js.map