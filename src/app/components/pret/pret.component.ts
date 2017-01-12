import { Component, OnInit } from '@angular/core';


import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FirebaseService} from '../../services/firebase.service';


import {Oj} from '../../data/Oj';
import {MaterielUtile} from '../../data/MaterielUtile';

@Component({
  selector: 'pret',
  templateUrl: `./pret.component.html`,
  providers: [FirebaseService]
})
export class PretComponent implements OnInit
{
	
	listeOj: Oj[];
	materielUtile: MaterielUtile[];
	categories: String[];

	constructor(private _firebaseService: FirebaseService)
	{

	}

	ngOnInit()
	{
		this._firebaseService.getListeOj().subscribe(listeoj =>
		{
			this.listeOj = listeoj;
		});
		this._firebaseService.getMaterielUtile().subscribe(matut =>
		{
			this.materielUtile = matut;
		});
		this._firebaseService.getCategories().subscribe(cat =>
		{
			this.categories = cat;
		})
	}
}