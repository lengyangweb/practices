const resBox = document.querySelector('#resBox');
const delBtn = document.querySelector('#delBtn');
const addBtn = document.querySelector('#addBtn');
const selGroup = document.querySelector('#selGroup');
const addAllBtn = document.querySelector('#addAllBtn');
const delAllBtn = document.querySelector('#delAllBtn');
const seltedGroup = document.querySelector('#seltedGroup');
const items = document.querySelectorAll('.list-group-item');

let selectedItems = [];

/**
 * Select an item from list box
 * @param {HTMLElement} item 
 */
function selectItem(item) {
    // if no item is selected
    if (!item) return alert('no item selected');

    // if item already exist
    if (selectedItems.some(selItem => selItem.innerHTML === item.innerHTML)) {
        // filter out item from selectedItem
        selectedItems = selectedItems.filter(selItem => selItem.innerHTML !== item.innerHTML);
        // set stying
        setSelItemStyle(item, 'del')
    } else {
        // push item to selected items
        selectedItems = [ ...selectedItems, item ];
        // set styleing
        setSelItemStyle(item, 'add');
    }
}

/**
 * Change item styling
 * @param {HTMLElement} item 
 * @param {String} status
 */
function setSelItemStyle(item, status) {
    if (status === 'add') {
        item.style.color = 'var(--primary)';
        item.style.background = 'var(--secondary)';
    } else {
        item.removeAttribute('style');
        item.removeAttribute('background');
    }
}

/**
 * Sort all items
 * @param {HTMLElement[]} items 
 */
function sortItem(items) {
    return items.sort((a, b) => a.innerHTML.localeCompare(b.innerHTML));
}

/**
 * Move item to selected selection
 * @param {HTMLElement[]} items
 */
function moveToSelted(items) {
    items.forEach(item => seltedGroup.appendChild(item));
    // create a copy of all items in selected group
    let tempItems = [ ...seltedGroup.childNodes ];
    // sort all the items
    tempItems = sortItem(tempItems);
    // remove all child from selected list
    seltedGroup.childNodes.forEach(item => seltedGroup.removeChild(item));
    // add all sorted item to selected list
    tempItems.forEach(item => seltedGroup.appendChild(item));
}

/**
 * Move item to selection list
 * @param {HTMLElemnt[]} items 
 */
function moveToSel(items) {
    // push items to selection group
    items.forEach(item => selGroup.appendChild(item));
    // creae a copy of all items in selection list
    let tempItems = [ ...selGroup.childNodes ];
    // only want HTMLElement no text
    tempItems = tempItems.filter(item => item instanceof HTMLElement);
    // sort all items
    tempItems = sortItem(tempItems);
    // remove all child from selection list
    selGroup.childNodes.forEach(item => selGroup.removeChild(item));
    // add all sorted item to selection list
    tempItems.forEach(item => selGroup.appendChild(item));
}

/**
 * Remove items from selection list
 * @param {HTMLElement[]} items 
 */
function removeFromSel(items) {
    items.map(({ innerHTML }) => innerHTML)
        .forEach(text => {
            selGroup.childNodes.forEach((child) => {
                // if child text and current text is equal then remove child
                child.innerHTML === text && selGroup.removeChild(child);
            });
        });
}

/**
 * Remove items from selection list
 * @param {HTMLElement[]} items 
 */
function removeFromSelted(items) {
    items.map(({ innerHTML }) => innerHTML)
        .forEach(text => {
            seltedGroup.childNodes.forEach(child => {
                // if child text and current text is equal then remove child
                child.innerHTML === text && selGroup.removeChild(child);
            })
        });
}

/**
 * Handle moving items from selection list to selected list
 * @returns error alert if no item selected
 */
function moveFromSelToSelted() {
    // if no selectedItems show dialog error message
    if (!selectedItems.length) return alert('No item selected');
    
    // remove highlisted style
    selectedItems.forEach(item => item.removeAttribute('style'));
    // move selected items to selected list
    moveToSelted(selectedItems);
    // remove items from selection
    removeFromSel(selectedItems);
    // empty selected items
    selectedItems.length = 0;
}

/**
 * Handle moving items from selected list to selection list
 * @returns error alert if error
 */
function moveFromSeltedToSel() {
    // if no selected items then show dialog error message
    if (!selectedItems.length) return alert('No item selected');

    // remove highlisted style
    selectedItems.forEach(item => item.removeAttribute('style'));
    // move selected item to selection list
    moveToSel(selectedItems);
    // remove items from selected
    removeFromSelted(selectedItems);
    // empty selected items
    selectedItems.length = 0;
}

/**
 * move all items from selection list to selected list
 */
function moveAllToSelted() {
    // create a copy array of all child nodes from selection list
    let items = [ ...selGroup.childNodes ];
    // push all items to selected list
    items.forEach(item => seltedGroup.appendChild(item));
    // create a copy array of selected list
    let tempArr = [ ...seltedGroup.childNodes];
    // only want HTMLElement which is li tags
    tempArr = tempArr.filter(item => item instanceof HTMLElement);
    // sort all li element by text
    tempArr = sortItem(tempArr);
    // remove all element from seltedGroup
    seltedGroup.childNodes.forEach(item => seltedGroup.removeChild(item));
    // add new sorting list to seleted list
    tempArr.forEach(item => seltedGroup.appendChild(item));
    // remove all child nodes from selection list
    selGroup.childNodes.forEach((child) => selGroup.removeChild(child));
}

/**
 * move all items from selected list to selection list
 */
function moveAlltoSel() {
    // create a copy of all child node from selected list
    let items = [ ...seltedGroup.childNodes ];
    // add all of child nodes from items to selection list
    items.forEach(item => selGroup.appendChild(item));
    // create a copy of selection list items
    let tempArr = [ ...selGroup.childNodes ];
    // only want HTMLElemnt which is li tags
    tempArr = tempArr.filter(item => item instanceof HTMLElement);
    // create a tempArr of all items in selection list
    tempArr = sortItem(tempArr);
    // remove all child from selection list
    selGroup.childNodes.forEach(item => selGroup.removeChild(item));
    // add new sorting list to selection list
    tempArr.forEach(item => selGroup.appendChild(item));
    // remove all child nodes from selected list
    seltedGroup.childNodes.forEach(child => seltedGroup.removeChild(child));
}

addEventListener('DOMContentLoaded', () => {
    items.forEach(item => item.addEventListener('click', () => selectItem(item)));
    addBtn.addEventListener('click', moveFromSelToSelted);
    addAllBtn.addEventListener('click', moveAllToSelted);
    delBtn.addEventListener('click', moveFromSeltedToSel);
    delAllBtn.addEventListener('click', moveAlltoSel);
})