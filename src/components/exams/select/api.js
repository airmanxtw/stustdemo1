// * 移除Item項目
// * sourceItems : 原始項目
// * rmoveItems : 欲移除項目
const removeItems = (sourceItems, removeItems) => {
    removeItems.forEach((rt) => {
      sourceItems = sourceItems.filter((item) => {
        let test1 = item[Object.keys(item)[0]];
        let test2 = rt[Object.keys(rt)[0]];
        if (
          item[Object.keys(item)[0]] != rt[Object.keys(rt)[0]] &&
          item[Object.keys(item)[1]] != rt[Object.keys(rt)[1]]
        ) {
          return item;
        }
      });
    });
    return sourceItems;
  }

  // *  copy moveItems項目到sourceItems
  const moveItems=(sourceItems,moveItems)=>{
    moveItems.forEach(item=>{
        let cloneItem = {};
        Object.assign(cloneItem, item);
        sourceItems.push(cloneItem);
    });
    return sourceItems;
  }

  export {removeItems,moveItems}