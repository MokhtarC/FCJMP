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
	types:string[];
	locations:string[];

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
			var categories:string[] = [];
			var types:string[] = [];
			var locations:string[] = [];

			for(var i=0;i<matut.length;i++)
			{
				if(categories.indexOf(matut[i].categorie)>=0)
				{
					
				}
				else categories.push(matut[i].categorie);
			}
			this.categories = categories;

			for(var i=0;i<matut.length;i++)
			{
				if(types.indexOf(matut[i].type)>=0)
				{
					
				}
				else types.push(matut[i].type);
			}

			for(var i=0;i<matut.length;i++)
			{
				if(locations.indexOf(matut[i].loca)>=0)
				{
					
				}
				else locations.push(matut[i].loca);
			}

			this.types = types;
			this.locations = locations;
			this.materielUtile = matut;
		});
		this._firebaseService.getMaterielUtile().subscribe(matut =>
		{
			var categories:string[] = [];

			for(var i=0;i<matut.length;i++)
			{
				if(categories.indexOf(matut[i].categorie)>=0)
				{
					
				}
				else categories.push(matut[i].categorie);
			}
			this.categories = categories;
		});
		console.log('hello');
		console.log(this.categories);
	}
}