import {nameInput, jobInput} from '../utils/constants.js'

export default class UserInfo {
  constructor({name, profession}) {
    this._nameUser = name;
    this._jobUser = profession;

  }

  getUserInfo() {
   return {
    name: this._nameUser.textContent,
    profession: this._jobUser.textContent
   }
  }

  setUserInfo({name, profession}) {
    this._nameUser.textContent = name;
    this._jobUser.textContent = profession;

  }

}
