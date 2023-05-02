// implement mini-backend.js before srcipt.js
const STORAGE_URL = 'https://remote-storage.developerakademie.org/item';
const STORAGE_TOKEN = 'JJER0W91PS930CDVAOULS02PWMPNBAIWOL417IW7';

let users = [];
let currentUser = [];
let contacts = [];
let tasks = [];
let category = [];
let categoryColorPick;
let selectCategory;
let subtasks = [];
let subtasksChecked = [];   //Save temporary

/**Onload Array */
async function loadUsers(){
    try {
        users = JSON.parse(await getItem('users'));
        currentUser = JSON.parse(await getItem('currentUser'));
        category = JSON.parse(await getItem('category'));
    } catch(e){
        console.error('Loading error:', e);
    }
}

async function pushEmptyArray() {
	users=[];
    await setItem('users', JSON.stringify(users));
}

/**Onload Array addTask */
async function loadSupportArraysAddTask(){
    try {
        category = JSON.parse(await getItem('category'));
        assignTo = JSON.parse(await getItem('assignTo'));
        subtasks = JSON.parse(await getItem('subtasks'));
    } catch(e){
        console.error('Loading error:', e);
    }
}

/**Save param into backend
 * 
 * @param {string} key 
 * @param {*} value 
 * @returns 
 */
async function setItem(key, value) {
    const payload = { key, value, token: STORAGE_TOKEN };
    return fetch(STORAGE_URL, { method: 'POST', body: JSON.stringify(payload) })
        .then(res => res.json());
}

/**Load value from backend
 * 
 * @param {string} key 
 * @returns 
 */
async function getItem(key) {
    const url = `${STORAGE_URL}?key=${key}&token=${STORAGE_TOKEN}`;
    return fetch(url).then(res => res.json()).then(res => {
        // Verbesserter code
        if (res.data) { 
            return res.data.value;
        } throw `Could not find data with key "${key}".`;
    });
}