const getStoredApp = () => {
  const storedAppSTR = localStorage.getItem("readList");
  return storedAppSTR ? JSON.parse(storedAppSTR) : [];
};

const addToStoreDB = (id) => {
  const storedAppData = getStoredApp();
  const appId = Number(id);
  if (storedAppData.includes(appId)) {
    alert("This app already installed");
  } else {
    storedAppData.push(appId);
    localStorage.setItem("readList", JSON.stringify(storedAppData));
  }
};

const removeToStoreDB = (id) => {
  const storedAppData = getStoredApp();
  const updatedData = storedAppData.filter(appId => appId != id);
  localStorage.setItem("readList", JSON.stringify(updatedData));
};

export { addToStoreDB, getStoredApp, removeToStoreDB };
