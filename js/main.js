

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

tabItems.forEach(item=>item.addEventListener('click',selectItem));

function selectItem(e){
    removeBorder();
    removeshow();
    this.classList.add('tab-border');
    //grab content item from the DOM

    const tabContentItems = document.querySelector(`#${this.id}-content`);
    tabContentItems.classList.add('show')
    

}

function removeBorder(){
    tabItems.forEach(item=>item.classList.remove('tab-border'));
}

function removeshow(){
    tabContentItems.forEach(item=>item.classList.remove('show'));
}


tabItems.forEach(item=>item.addEventListener('click',selectItem));