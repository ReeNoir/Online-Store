import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Frige'},
      {id: 2, name: 'Phones'},
      {id: 3, name: 'TV'}
    ]
    
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'LG'}
    ]

    this._devices = [
      {id: 1, name: 'Galaxy S23', price: 1500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 2, name: 'Freezer3000', price: 3500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 3, name: 'LRFOC2606S', price: 2500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 4, name: 'A51', price: 500, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 5, name: 'S21', price: 700, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 6, name: 'Aico', price: 400, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'},
      {id: 7, name: 'Ice300', price: 800, rating: 5, img: 'https://purposechurch.com/wp-content/uploads/2023/11/Christmas-With-Purpose-2023_HD-980x551.jpg'}
    ]
    
    makeAutoObservable(this)
  }

  setTypes(types){
    this._types = types
  }
  setBrands(brands){
    this._brands = brands
  }
  setDevices(devices){
    this._devices = devices
  }

  getTypes(){
    return this._types
  }
  getBrands(){
    return this._brands
  }
  getDevices(){
    return this._devices
  }

}