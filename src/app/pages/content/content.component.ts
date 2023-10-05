import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  photoCover:string = "https://blog.geekhunter.com.br/wp-content/uploads/2019/10/Um-overview-sobre-o-framework-Angular.jpg"
  contentTitle:string = "Nova Versão do Angular e Lançada!"
  contentDescription:string = "A equipe do Angular não está medindo esforços para trazer grandes novidades a cada versão lançada. Foi assim nas versões 14 e 15. Agora com a versão 16 não é diferente. O Angular progrediu muito em pouquíssimo tempo."

  constructor(
    private route:ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
