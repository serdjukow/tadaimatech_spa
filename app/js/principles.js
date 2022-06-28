const principles = () => {
    const blockPrinciplesMenuItems = document.querySelectorAll('.block-principles__menu-item')
    if(blockPrinciplesMenuItems) {
        console.log(blockPrinciplesMenuItems);
    }
    
	const changeActiveItem = (indexClickedItem) => {
        blockPrinciplesMenuItems.forEach((item, index) => {
            item.classList.remove('_active');
            if (index === indexClickedItem) {
                item.classList.add('_active')
            }
        })        
    }

	function addActiveItem(dataActiveItem) {
        blockPrinciplesMenuItems.forEach(item => {
			let dataValue = item.attributes['data-menu'].value	
            item.classList.remove('_active');
            if (dataValue === dataActiveItem) {
                item.classList.add('_active')
            }
        })        
    }
    function principlesTab() {
		blockPrinciplesMenuItems.forEach((item, index) => {
			item.addEventListener('click', () => {
				//let dataValue = item.attributes['data-menu'].value
				//sessionStorage.setItem("blockPrinciplesbutton", dataValue);
				changeActiveItem(index)
			})
		})
	}
    principlesTab()
}
principles()