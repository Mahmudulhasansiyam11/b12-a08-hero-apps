const getStoredApp= () => {
    const storedAppSTR = localStorage.getItem("readList");
    if(storedAppSTR){
        const storeAppData = JSON.parse(storedAppSTR);
        return storeAppData;
    }
    else{
        return [];
    }
}

const addToStoreDB = (id) => {
    const storedAppData = getStoredApp();
    if(storedAppData.includes(id)){
        alert("This app already installed");
    }
    else{
        storedAppData.push(id);
        const data = JSON.stringify(storedAppData);
        localStorage.setItem("readList", data);
    }

}

export { addToStoreDB, getStoredApp };

