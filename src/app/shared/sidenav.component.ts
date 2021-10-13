import { ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  mobileQuery: MediaQueryList;

 
  fillerNav =[
    {name: 'Home', router:""},
    {name: 'Modulos', router:"modulos"},
    {name: 'Componentes', router:"componentes"},
    {name: 'Serviços', router:"servicos"},
    {name: 'Diretivas', router:"diretivas"},
    {name: 'Data Binding', router:"data"},
    {name: 'Rotas', router:"rotas"},
    {name: 'RXJS', router:"rxjs"}
  ]


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void{
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  
  shouldRun = true

}
