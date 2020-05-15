import {listenHeaderHandler} from './header.js';
import {runBoard, addCard, addNewTaskToListByKeyboard, addNewTaskToList, closeTaskListDropDown, moveToList} from './board.js';

listenHeaderHandler();
runBoard();

window.addCard = addCard;
window.addNewTaskToListByKeyboard = addNewTaskToListByKeyboard;
window.addNewTaskToList = addNewTaskToList;
window.closeTaskListDropDown = closeTaskListDropDown;
window.moveToList = moveToList;
