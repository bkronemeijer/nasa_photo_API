export function capitalise(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

// export const checkIfLiked = () = {

// }

export const addEntryToLocalStorage = (isFavourite=false, key, value) => {
  // Parse any JSON previously stored in allEntries
  let existingEntries = JSON.parse(localStorage.getItem(key));
  if (existingEntries == null) existingEntries = [];

  // delete entry from localstorage
  if (isFavourite === true) {
    existingEntries.splice(existingEntries.indexOf(value), 1)
    localStorage.setItem(key, JSON.stringify(existingEntries));
  }

  // add entry to localstorage
  if (isFavourite === false) {
    if (!existingEntries.includes(value)) existingEntries.push(value);
    localStorage.setItem(key, JSON.stringify(existingEntries));
  }
};