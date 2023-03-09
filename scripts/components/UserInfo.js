import {nameInput, jobInput} from '../utils/constants.js'

export default class UserInfo {
  constructor({name, job}) {
    this._name = name;
    this._job = job;

  }

  getUserInfo(name,job) {
   const userData = {};
   this._userData.name = name;
   this._userData.job = job;
   return userData
  }

  setUserInfo() {
    userData.name = this._name.textContent;
    userData.job = this._job.textContent;

  }

}
