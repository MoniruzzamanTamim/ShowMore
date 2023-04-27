
    const itemsContainer = document.getElementById('items');
    const showMoreButton = document.getElementById('show-more');
    const showLessButton = document.getElementById('show-less');

    let visibleItems = 1;

    function showMore() {
      visibleItems += 1;
      for (let i = 0; i < itemsContainer.children.length; i++) {
        if (i < visibleItems) {
          itemsContainer.children[i].style.display = 'block';
        } else {
          itemsContainer.children[i].style.display = 'none';
        }
      }

      if (visibleItems >= itemsContainer.children.length) {
        showMoreButton.style.display = 'none';
      }

      if (visibleItems > 1) {
        showLessButton.style.display = 'block';
      }
    }

    function showLess() {
      visibleItems -= 1;
      for (let i = 0; i < itemsContainer.children.length; i++) {
        if (i < visibleItems) {
          itemsContainer.children[i].style.display = 'block';
        } else {
          itemsContainer.children[i].style.display = 'none';
        }
      }

      if (visibleItems <= 1) {
        showLessButton.style.display = 'none';
      }

      if (visibleItems < itemsContainer.children.length) {
        showMoreButton.style.display = 'block';
      }
    }

    
    showMoreButton.addEventListener('click', showMore);
    showLessButton.addEventListener('click', showLess);

    for (let i = visibleItems; i < itemsContainer.children.length; i++) {
      itemsContainer.children[i].style.display = 'none';
    }
