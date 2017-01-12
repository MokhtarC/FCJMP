import {Injectable} from '@angular/core';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';
import 'rxjs/add/operator/map';

import {Oj} from '../data/Oj';
import {Institution} from '../data/Institution';
import {Coordonnees} from '../data/Coordonnees';
import {institutionnelle} from '../data/Institutionnelle';
import {Action} from '../data/Action';
import {MaterielUtile} from '../data/MaterielUtile';
import {Personnel} from '../data/Personnel';
import {Production} from '../data/Production';

@Injectable()
export class FirebaseService
{
	listeOj: FirebaseListObservable<Oj[]>;
	institution: FirebaseObjectObservable<Institution>;
	equipe: FirebaseListObservable<Personnel[]>;
	actions: FirebaseListObservable<Action[]>;
	materielUtile: FirebaseListObservable<MaterielUtile[]>;
	matutCategories: FirebaseListObservable<string[]>;

	productions: FirebaseListObservable<Production[]>;
	documents: FirebaseListObservable<Document[]>;
	environnement: FirebaseListObservable<Institution[]>;



	constructor(private _af: AngularFire)
	{
		
	}

	// GET
	getListeOj()
	{
		this.listeOj = this._af.database.list('/listoj') as FirebaseListObservable<Oj[]>;

		return this.listeOj;
	}

	getInstitution()
	{
		this.institution = this._af.database.object('/general') as FirebaseObjectObservable<Institution>;

		return this.institution;
	}

	getEquipe()
	{
		this.equipe = this._af.database.list('/personnel') as FirebaseListObservable<Personnel[]>;
		return this.equipe;
	}

	getActions()
	{
		this.actions = this._af.database.list('/actions') as FirebaseListObservable<Action[]>;
		return this.actions;
	}

	getMaterielUtile()
	{
		this.materielUtile = this._af.database.list('/matut') as FirebaseListObservable<MaterielUtile[]>;
		return this.materielUtile;
	}

	getMaterielUtileFiltre(cat:string, type:string)
	{
		if(cat!=null && cat!='0' && type!=null && type!='0')
		{
			this.materielUtile = this._af.database.list('/matut',
			{
				query:
				[{
					orderByChild: 'categorie',
					equalTo: cat
				},
				{
					orderByChild: 'type',
					equalTo: type
				}]
			}) as
			FirebaseListObservable<MaterielUtile[]>;
		}
		else this.materielUtile = this._af.database.list('/matut') as FirebaseListObservable<MaterielUtile[]>;

		return this.materielUtile;
	}

	getCategories()
	{
		this.matutCategories = this._af.database.list('/matut',
		{
			query:
			{
				"distinct":"matut",
				"key": "categorie"
			}
		}) as
		FirebaseListObservable<string[]>;

		return this.matutCategories;
	}

	getProductions()
	{
		this.productions = this._af.database.list('/productions') as FirebaseListObservable<Production[]>;
		return this.productions;
	}

	// ADD
	addOj(oj:Oj)
	{
		return this.listeOj.push(oj);
	}

	addEquipe(personne: Personnel)
	{
		return this.equipe.push(personne);
	}

	addActions(action: Action)
	{
		return this.actions.push(action);
	}

	addMaterielUtile(matut: MaterielUtile)
	{
		return this.materielUtile.push(matut);
	}

	addProduction(production: Production)
	{
		return this.productions.push(production);
	}

	// UPD
	updateListeOj(key, oj)
	{
		return this.listeOj.update(key, oj);
	}

	updateEquipe(key, personne)
	{
		return this.equipe.update(key, personne);
	}

	updateActions(key, action)
	{
		return this.actions.update(key,action);
	}

	updateMaterielUtile(key, matut)
	{
		return this.materielUtile.update(key, matut);
	}

	updateProductions(key, production)
	{
		return this.productions.update(key, production);
	}

	// DEL
	deleteOj(key)
	{
		return this.listeOj.remove(key);
	}

	deleteEquipe(key)
	{
		return this.equipe.remove(key);
	}

	deleteActions(key)
	{
		return this.actions.remove(key);
	}

	deleteMaterielUtile(key)
	{
		return this.materielUtile.remove(key);
	}

	deleteProductions(key)
	{
		return this.productions.remove(key);
	}

}

